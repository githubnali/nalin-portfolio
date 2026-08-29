import type { Handler } from '@netlify/functions';
import { handleContactRequest } from '../../shared/handleContactRequest';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body: unknown;
  try {
    body = event.body ? JSON.parse(event.body) : {};
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { status, json } = await handleContactRequest(body);
  return {
    statusCode: status,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(json),
  };
};
