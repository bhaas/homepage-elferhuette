import type { APIRoute } from 'astro';
import { locales } from '../data/site';
import { legalSlugs } from '../data/legal';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://www.elferhuette.at/').replace(/\/$/, '');
  const lastmod = new Date().toISOString().slice(0, 10);
  const entry = (path: (lang: (typeof locales)[number]) => string, priority: (lang: string) => string) => {
    const alternates = [
      ...locales.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${base}${path(lang)}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${base}${path('de')}"/>`,
    ].join('\n');
    return locales.map(
      (lang) => `  <url>
    <loc>${base}${path(lang)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority(lang)}</priority>
${alternates}
  </url>`,
    );
  };
  const urls = [
    ...entry((lang) => `/${lang}/`, (lang) => (lang === 'de' ? '1.0' : '0.8')),
    ...entry((lang) => `/${lang}/${legalSlugs[lang]}/`, () => '0.2'),
  ].join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
