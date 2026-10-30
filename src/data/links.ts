import type { Locale } from './site';

export const linkSlugs: Record<Locale, string> = {
  de: 'links',
  en: 'links',
  it: 'link',
};

type LinkItem = { name: string; description: string; href: string };
type LinkGroup = { title: string; links: LinkItem[] };

type LinksContent = {
  navLabel: string;
  meta: { title: string; description: string };
  overline: string;
  title: string;
  intro: string;
  featured: { label: string; title: string; text: string; linkLabel: string; imageAlt: string };
  emergency: { title: string; text: string };
  groups: LinkGroup[];
};

export const hotelKlimaHref = 'http://www.hotel-klima.com/';

export const linksContent: Record<Locale, LinksContent> = {
  de: {
    navLabel: 'Links',
    meta: {
      title: 'Links | Elferhütte – Anreise, Wetter, Lawinen & Wandern im Stubaital',
      description:
        'Wichtige Links für Ihren Besuch auf der Elferhütte: Elferbahnen, Öffis, Wetter, Lawinenbericht, Bergrettung, Wandertouren und unser Hotel Klima in Neustift.',
    },
    overline: 'Gut vorbereitet',
    title: 'Wichtige Links',
    intro:
      'Alles, was Sie vor dem Aufstieg zur Elferhütte wissen sollten – von Bergbahn und Anreise über Wetter und Lawinenlage bis zu Tourenideen im Stubaital.',
    featured: {
      label: 'Unser Haus im Tal',
      title: 'Hotel Klima Ferienoase',
      text:
        'Unser Familienhotel in Neustift im Stubaital: gemütliche Zimmer, reichhaltiges Frühstück und der ideale Ausgangspunkt für Wanderungen zur Elferhütte und Skitage am Stubaier Gletscher.',
      linkLabel: 'Zum Hotel Klima',
      imageAlt: 'Hotel Klima mit Blumenbalkonen vor den Bergen des Stubaitals',
    },
    emergency: {
      title: 'Alpiner Notruf 140',
      text: 'Bei einem Notfall am Berg wählen Sie 140 (Bergrettung) oder den Euronotruf 112.',
    },
    groups: [
      {
        title: 'Anreise & Bergbahn',
        links: [
          { name: 'Elferbahnen Neustift', description: 'Betriebszeiten und Infos zur Elfer Gondelbahn', href: 'https://www.stubai.at/skigebiete/elferbahnen/' },
          { name: 'Verkehrsverbund Tirol (VVT)', description: 'Bus-Fahrpläne ins Stubaital', href: 'https://www.vvt.at/' },
          { name: 'ÖBB', description: 'Bahnanreise nach Innsbruck', href: 'https://www.oebb.at/' },
          { name: 'ASFINAG', description: 'Aktuelle Verkehrsmeldungen', href: 'https://www.asfinag.at/verkehr-sicherheit/' },
        ],
      },
      {
        title: 'Wetter & Sicherheit',
        links: [
          { name: 'GeoSphere Austria', description: 'Wetterprognose und Warnungen für Tirol', href: 'https://www.geosphere.at/de' },
          { name: 'Lawinen.report', description: 'Lawinenlagebericht Tirol', href: 'https://lawinen.report/' },
          { name: 'Bergrettung Tirol', description: 'Sicherheit am Berg', href: 'https://bergrettung.tirol/' },
        ],
      },
      {
        title: 'Region & Touren',
        links: [
          { name: 'Stubaital Tourismus', description: 'Urlaub, Veranstaltungen und Infos zum Stubaital', href: 'https://www.stubai.at/' },
          { name: 'Stubaier Gletscher', description: 'Skifahren bis in den Frühsommer', href: 'https://www.stubaier-gletscher.com/' },
          { name: 'alpenvereinaktiv.com', description: 'Wander- und Klettersteigtouren', href: 'https://www.alpenvereinaktiv.com/de/' },
          { name: 'Österreichischer Alpenverein', description: 'Bergsport, Hütten und Sicherheit', href: 'https://www.alpenverein.at/' },
        ],
      },
    ],
  },
  en: {
    navLabel: 'Links',
    meta: {
      title: 'Links | Elferhütte – travel, weather, avalanches & hiking in the Stubai Valley',
      description:
        'Useful links for your visit to the Elferhütte: Elfer gondola, public transport, weather, avalanche report, mountain rescue, hiking routes and our Hotel Klima in Neustift.',
    },
    overline: 'Well prepared',
    title: 'Useful links',
    intro:
      'Everything you should know before heading up to the Elferhütte – from the gondola and getting here to the weather, avalanche conditions and route ideas in the Stubai Valley.',
    featured: {
      label: 'Our hotel in the valley',
      title: 'Hotel Klima Ferienoase',
      text:
        'Our family-run hotel in Neustift im Stubaital: cosy rooms, a generous breakfast and the perfect base for hikes to the Elferhütte and ski days on the Stubai Glacier.',
      linkLabel: 'Visit Hotel Klima',
      imageAlt: 'Hotel Klima with flower-decked balconies in front of the Stubai mountains',
    },
    emergency: {
      title: 'Alpine emergency 140',
      text: 'In a mountain emergency call 140 (mountain rescue) or the European emergency number 112.',
    },
    groups: [
      {
        title: 'Getting here & gondola',
        links: [
          { name: 'Elferbahnen Neustift', description: 'Operating times and information on the Elfer gondola', href: 'https://www.stubai.at/en/skiing-resorts/elferbahnen/' },
          { name: 'Verkehrsverbund Tirol (VVT)', description: 'Bus timetables to the Stubai Valley', href: 'https://www.vvt.at/' },
          { name: 'ÖBB', description: 'Austrian Federal Railways to Innsbruck', href: 'https://www.oebb.at/' },
          { name: 'ASFINAG', description: 'Live traffic information', href: 'https://www.asfinag.at/verkehr-sicherheit/' },
        ],
      },
      {
        title: 'Weather & safety',
        links: [
          { name: 'GeoSphere Austria', description: 'Weather forecast and warnings for Tyrol', href: 'https://www.geosphere.at/en' },
          { name: 'Avalanche.report', description: 'Avalanche bulletin for Tyrol', href: 'https://avalanche.report/' },
          { name: 'Bergrettung Tirol', description: 'Tyrolean mountain rescue', href: 'https://bergrettung.tirol/' },
        ],
      },
      {
        title: 'Region & routes',
        links: [
          { name: 'Stubai Valley tourism', description: 'Holidays, events and information', href: 'https://www.stubai.at/en/' },
          { name: 'Stubai Glacier', description: 'Skiing until early summer', href: 'https://www.stubaier-gletscher.com/' },
          { name: 'alpenvereinaktiv.com', description: 'Hiking and via ferrata routes', href: 'https://www.alpenvereinaktiv.com/en/' },
          { name: 'Austrian Alpine Club', description: 'Mountain sports, huts and safety', href: 'https://www.alpenverein.at/' },
        ],
      },
    ],
  },
  it: {
    navLabel: 'Link',
    meta: {
      title: 'Link | Elferhütte – arrivo, meteo, valanghe ed escursioni nella Valle dello Stubai',
      description:
        "Link utili per la vostra visita all'Elferhütte: cabinovia Elfer, trasporti pubblici, meteo, bollettino valanghe, soccorso alpino, escursioni e il nostro Hotel Klima a Neustift.",
    },
    overline: 'Ben preparati',
    title: 'Link utili',
    intro:
      "Tutto ciò che è utile sapere prima di salire all'Elferhütte: cabinovia e arrivo, meteo, situazione valanghe e idee per escursioni nella Valle dello Stubai.",
    featured: {
      label: 'La nostra casa a valle',
      title: 'Hotel Klima Ferienoase',
      text:
        "Il nostro hotel di famiglia a Neustift im Stubaital: camere accoglienti, una ricca colazione e il punto di partenza ideale per escursioni all'Elferhütte e giornate di sci sul ghiacciaio dello Stubai.",
      linkLabel: "Scopri l'Hotel Klima",
      imageAlt: "L'Hotel Klima con i balconi fioriti davanti alle montagne della Valle dello Stubai",
    },
    emergency: {
      title: 'Emergenza in montagna 140',
      text: 'In caso di emergenza in montagna chiamate il 140 (soccorso alpino) o il numero di emergenza europeo 112.',
    },
    groups: [
      {
        title: 'Arrivo e cabinovia',
        links: [
          { name: 'Elferbahnen Neustift', description: 'Orari e informazioni sulla cabinovia Elfer', href: 'https://www.stubai.at/en/skiing-resorts/elferbahnen/' },
          { name: 'Verkehrsverbund Tirol (VVT)', description: 'Orari degli autobus per la Valle dello Stubai', href: 'https://www.vvt.at/' },
          { name: 'ÖBB', description: 'Ferrovie austriache fino a Innsbruck', href: 'https://www.oebb.at/' },
          { name: 'ASFINAG', description: 'Informazioni sul traffico in tempo reale', href: 'https://www.asfinag.at/verkehr-sicherheit/' },
        ],
      },
      {
        title: 'Meteo e sicurezza',
        links: [
          { name: 'GeoSphere Austria', description: 'Previsioni meteo e allerte per il Tirolo', href: 'https://www.geosphere.at/en' },
          { name: 'Valanghe.report', description: 'Bollettino valanghe del Tirolo', href: 'https://valanghe.report/' },
          { name: 'Bergrettung Tirol', description: 'Soccorso alpino del Tirolo', href: 'https://bergrettung.tirol/' },
        ],
      },
      {
        title: 'Regione ed escursioni',
        links: [
          { name: 'Turismo Valle dello Stubai', description: 'Vacanze, eventi e informazioni', href: 'https://www.stubai.at/it/' },
          { name: 'Ghiacciaio dello Stubai', description: "Sci fino all'inizio dell'estate", href: 'https://www.stubaier-gletscher.com/' },
          { name: 'alpenvereinaktiv.com', description: 'Escursioni e vie ferrate', href: 'https://www.alpenvereinaktiv.com/it/' },
          { name: 'Club Alpino Austriaco', description: 'Sport di montagna, rifugi e sicurezza', href: 'https://www.alpenverein.at/' },
        ],
      },
    ],
  },
};
