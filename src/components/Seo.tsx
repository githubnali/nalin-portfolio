import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://nalin-portfolio.netlify.app';
const SITE_NAME = 'Nagaraju Nali | Frontend Engineer';
const DEFAULT_DESCRIPTION =
  'Nagaraju Nali is a frontend engineer building fast, accessible web experiences with React, Angular, Node.js, and MongoDB. Explore projects, services, and free interview-prep resources.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const JSON_LD_ID = 'seo-json-ld';

function setJsonLd(data?: Record<string, unknown> | Record<string, unknown>[]) {
  const existing = document.getElementById(JSON_LD_ID);
  if (existing) existing.remove();
  if (!data) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = JSON_LD_ID;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/** Updates document title, meta description, canonical URL, Open Graph/Twitter tags, and JSON-LD for the current route. */
const Seo: React.FC<SeoProps> = ({ title, description, image, noIndex, jsonLd }) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | Nagaraju Nali` : SITE_NAME;
    const desc = description ?? DEFAULT_DESCRIPTION;
    const img = image ?? DEFAULT_IMAGE;
    const url = `${SITE_URL}${location.pathname}`;

    document.title = fullTitle;

    setMetaByName('description', desc);
    setMetaByName('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:description', desc);
    setMetaByProperty('og:image', img);
    setMetaByProperty('og:url', url);
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:site_name', 'Nagaraju Nali');

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', fullTitle);
    setMetaByName('twitter:description', desc);
    setMetaByName('twitter:image', img);

    setCanonical(url);
    setJsonLd(jsonLd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, image, noIndex, JSON.stringify(jsonLd), location.pathname]);

  return null;
};

export default Seo;
export { SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_IMAGE };
