import { writeFileSync } from 'fs';
import { resolve } from 'path';

const SITE_URL = 'https://nalin-portfolio.netlify.app';

// Keep these two lists in sync with src/data/services.ts and
// src/pages/courses/html/htmlTopics.ts whenever a slug is added, renamed, or removed.
const SERVICE_SLUGS = [
  'websites-web-apps',
  'fullstack-applications',
  'admin-dashboards',
  'landing-pages',
  'edms-email-marketing',
  'hosting-deployment',
];

const HTML_TOPIC_SLUGS = [
  'introduction',
  'elements-attributes',
  'headings-text',
  'styles-colors',
  'links',
  'images',
  'lists',
  'tables',
  'block-div-classes',
  'semantic-layout',
  'forms',
  'multimedia-graphics',
  'entities-best-practices',
];

// Keep in sync with src/pages/courses/css/cssTopics.ts.
const CSS_TOPIC_SLUGS = [
  'introduction',
  'selectors',
  'colors-units',
  'box-model',
  'typography',
  'backgrounds-borders',
  'display-positioning',
  'flexbox',
  'grid',
  'responsive-design',
  'transitions-animations',
  'pseudo-classes-elements',
  'variables-best-practices',
];

// Keep in sync with src/pages/courses/ai/aiTopics.ts.
const AI_TOPIC_SLUGS = ['evolution-of-ai'];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/interview-prep', priority: '0.9', changefreq: 'monthly' },
  { path: '/interview-prep/html/interview-questions', priority: '0.8', changefreq: 'monthly' },
  { path: '/interview-prep/css/interview-questions', priority: '0.8', changefreq: 'monthly' },
];

const serviceRoutes = SERVICE_SLUGS.map((slug) => ({
  path: `/services/${slug}`,
  priority: '0.7',
  changefreq: 'yearly',
}));

const topicRoutes = HTML_TOPIC_SLUGS.map((slug) => ({
  path: `/interview-prep/html/${slug}`,
  priority: '0.7',
  changefreq: 'yearly',
}));

const cssTopicRoutes = CSS_TOPIC_SLUGS.map((slug) => ({
  path: `/interview-prep/css/${slug}`,
  priority: '0.7',
  changefreq: 'yearly',
}));

const aiTopicRoutes = AI_TOPIC_SLUGS.map((slug) => ({
  path: `/interview-prep/ai/${slug}`,
  priority: '0.7',
  changefreq: 'yearly',
}));

const allRoutes = [...staticRoutes, ...serviceRoutes, ...topicRoutes, ...cssTopicRoutes, ...aiTopicRoutes];

const urlEntries = allRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const outPath = resolve(process.cwd(), 'public/sitemap.xml');
writeFileSync(outPath, xml);
console.log(`Sitemap written to ${outPath} with ${allRoutes.length} URLs.`);
