import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

async function getClient(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown; // honeypot field - real users leave this empty
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  try {
    const client = await getClient();
    const db = client.db('portfolio');
    await db.collection('leads').insertOne({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date(),
      source: 'portfolio-contact-form',
    });
    return { status: 200, json: { ok: true } };
  } catch (err) {
    console.error('Failed to save lead:', err);
    return { status: 500, json: { error: 'Failed to save your message. Please try again later.' } };
  }
}
