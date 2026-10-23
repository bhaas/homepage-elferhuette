# Elferhütte homepage

A modern, multilingual Astro homepage for the Elferhütte in Neustift im Stubaital.

## Stack

- Astro 7
- Statically generated German, English and Italian pages
- Local, curated Elferhütte photography in `src/assets/elferhuette`
- Photo gallery with lightbox; third-party photos (Wikimedia Commons, CC BY / CC BY-SA) are credited via `credit` in `galleryItems` (`src/data/site.ts`)

## Run locally

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
```

The static deployment files are generated in `dist\`.

## Before publishing

Please confirm current opening hours, overnight availability and any final arrival information. Contact details are based on the current public Elferhütte website.
