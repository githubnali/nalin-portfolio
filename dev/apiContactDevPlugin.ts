import type { Plugin } from 'vite';
import { handleContactRequest } from '../shared/handleContactRequest';

/** Dev-only middleware so `npm run dev` can exercise api/contact.ts's logic without the Vercel CLI. */
export function apiContactDevPlugin(): Plugin {
  return {
    name: 'api-contact-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const parsed = body ? JSON.parse(body) : {};
            const { status, json } = await handleContactRequest(parsed);
            res.statusCode = status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(json));
          } catch (err) {
            console.error('Dev /api/contact middleware error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal error' }));
          }
        });
      });
    },
  };
}
