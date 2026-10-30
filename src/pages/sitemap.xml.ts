import type { APIRoute } from 'astro';
import { locales } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://www.elferhuette.at/').replace(/\/$/, '');
  const lastmod = new Date().toISOString().slice(0, 10);
  const alternates = [
    ...locales.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${base}/${lang}/"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${base}/de/"/>`,
  ].join('\n');
  const urls = locales
    .map(
      (lang) => `  <url>
    <loc>${base}/${lang}/</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${lang === 'de' ? '1.0' : '0.8'}</priority>
${alternates}
  </url>`,
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
