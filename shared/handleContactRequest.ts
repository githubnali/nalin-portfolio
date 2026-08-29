import { MongoClient, type Collection } from 'mongodb';

let cachedClient: MongoClient | null = null;
let indexEnsured = false;

async function getLeadsCollection(): Promise<Collection> {
  if (!cachedClient) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not set');
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }

  const collection = cachedClient.db('portfolio').collection('leads');

  if (!indexEnsured) {
    // Enforces uniqueness at the DB level too, closing the race-condition window
    // between the findOne check below and the insert.
    await collection.createIndex({ email: 1 }, { unique: true });
    indexEnsured = true;
  }

  return collection;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown; // honeypot field - real users leave this empty
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DUPLICATE_EMAIL_MESSAGE =
  'This email has already sent an inquiry. Please try a different email, or reach out directly if you need to follow up.';

export interface HandlerResult {
  status: number;
  json: Record<string, unknown>;
}

export async function handleContactRequest(body: unknown): Promise<HandlerResult> {
  const { name, email, subject, message, company } = (body ?? {}) as ContactPayload;

  // Honeypot: bots tend to fill every field, real users never see or fill this one.
  if (typeof company === 'string' && company.trim() !== '') {
    return { status: 200, json: { ok: true } };
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return { status: 400, json: { error: 'Missing required fields' } };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: 400, json: { error: 'Invalid email address' } };
  }

  if (name.length > 200 || email.length > 200 || subject.length > 300 || message.length > 1000) {
    return { status: 400, json: { error: 'One or more fields are too long' } };
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const leads = await getLeadsCollection();

    const existing = await leads.findOne({ email: normalizedEmail });
    if (existing) {
      return { status: 409, json: { error: DUPLICATE_EMAIL_MESSAGE } };
    }

    await leads.insertOne({
      name: name.trim(),
      email: normalizedEmail,
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date(),
      source: 'portfolio-contact-form',
    });
    return { status: 200, json: { ok: true } };
  } catch (err: unknown) {
    // Race-condition fallback: two requests with the same new email arriving at once.
    if (typeof err === 'object' && err !== null && 'code' in err && (err as { code?: number }).code === 11000) {
      return { status: 409, json: { error: DUPLICATE_EMAIL_MESSAGE } };
    }
    console.error('Failed to save lead:', err);
    return { status: 500, json: { error: 'Failed to save your message. Please try again later.' } };
  }
}
