import doubleRainbow from '../assets/elferhuette/double-rainbow.jpg';
import galleryHutElferPeaks from '../assets/elferhuette/gallery-hut-elfer-peaks.jpg';
import gallerySummerHut from '../assets/elferhuette/gallery-summer-hut.jpg';
import gallery1965 from '../assets/elferhuette/gallery-1965.jpg';
import galleryAerial from '../assets/elferhuette/gallery-aerial.jpg';
import galleryAutumnClouds from '../assets/elferhuette/gallery-autumn-clouds.jpg';
import galleryWinterMoon from '../assets/elferhuette/gallery-winter-moon.jpg';
import gallerySnowyPeaks from '../assets/elferhuette/gallery-snowy-peaks.jpg';
import galleryFlowerHut from '../assets/elferhuette/gallery-flower-hut.jpg';
import gallerySkiSlope from '../assets/elferhuette/gallery-ski-slope.jpg';
import galleryHayBarn from '../assets/elferhuette/gallery-hay-barn.jpg';
import galleryMilkCans from '../assets/elferhuette/gallery-milk-cans.jpg';
import galleryNightLights from '../assets/elferhuette/gallery-night-lights.jpg';
import gentians from '../assets/elferhuette/gentians.jpg';
import history1933 from '../assets/elferhuette/history-1933.jpg';
import history1967 from '../assets/elferhuette/history-1967.jpg';
import historyMules from '../assets/elferhuette/history-mules.jpg';
import historySkiSchool from '../assets/elferhuette/history-ski-school.jpg';
import heroClouds from '../assets/elferhuette/hero-clouds.jpg';
import hutStube from '../assets/elferhuette/hut-stube.jpg';
import originalSummerValley from '../assets/elferhuette/original-summer-valley.jpg';
import originalSummerWide from '../assets/elferhuette/original-summer-wide.jpg';
import strawberryCake from '../assets/elferhuette/strawberry-cake.jpg';
import summerAlpineRoses from '../assets/elferhuette/summer-alpine-roses.jpg';
import summitShrine from '../assets/elferhuette/summit-shrine.jpg';
import winterHut from '../assets/elferhuette/winter-hut.jpg';
import winterPanorama from '../assets/elferhuette/winter-panorama.jpg';

export const locales = ['de', 'en', 'it'] as const;
export type Locale = (typeof locales)[number];

export const images = {
  heroClouds,
  winterHut,
  summerAlpineRoses,
  winterPanorama,
  summitShrine,
  hutStube,
  strawberryCake,
  doubleRainbow,
  gentians,
  originalSummerValley,
  originalSummerWide,
  galleryHutElferPeaks,
  gallerySummerHut,
  gallery1965,
  galleryAerial,
  galleryAutumnClouds,
  galleryWinterMoon,
  gallerySnowyPeaks,
  galleryFlowerHut,
  gallerySkiSlope,
  galleryHayBarn,
  galleryMilkCans,
  galleryNightLights,
  history1933,
  historyMules,
  history1967,
  historySkiSchool,
} as const;

export type ImageKey = keyof typeof images;

export type GalleryLayout = '' | 'wide' | 'tall' | 'feature';

export const galleryItems: {
  imageKey: ImageKey;
  layout: GalleryLayout;
  position?: string;
  caption: Record<Locale, string>;
  credit?: { author: string; license: string; href: string };
}[] = [
  {
    imageKey: 'galleryHutElferPeaks',
    layout: 'feature',
    caption: { de: 'Die Elferhütte vor den Zacken des Elfers', en: 'Elferhütte beneath the jagged Elfer peaks', it: 'L’Elferhütte sotto le guglie dell’Elfer' },
    credit: { author: 'FkMohr', license: 'CC BY-SA 3.0 DE', href: 'https://commons.wikimedia.org/wiki/File:ElferH-SW.jpg' },
  },
  {
    imageKey: 'galleryAerial',
    layout: 'tall',
    caption: { de: 'Die Hütte aus der Vogelperspektive', en: 'The hut from above', it: 'Il rifugio dall’alto' },
  },
  {
    imageKey: 'doubleRainbow',
    layout: '',
    caption: { de: 'Doppelter Regenbogen über Neustift', en: 'Double rainbow over Neustift', it: 'Doppio arcobaleno su Neustift' },
  },
  {
    imageKey: 'galleryAutumnClouds',
    layout: '',
    caption: { de: 'Herbstmorgen über dem Nebelmeer', en: 'Autumn morning above the fog', it: 'Mattino d’autunno sopra la nebbia' },
  },
  {
    imageKey: 'strawberryCake',
    layout: '',
    caption: { de: 'Erdbeertorte mit Talblick', en: 'Strawberry cake with a valley view', it: 'Torta di fragole con vista sulla valle' },
  },
  {
    imageKey: 'galleryWinterMoon',
    layout: '',
    caption: { de: 'Mondaufgang über der verschneiten Hütte', en: 'Moonrise above the snowy hut', it: 'Luna sopra il rifugio innevato' },
  },
  {
    imageKey: 'gentians',
    layout: '',
    caption: { de: 'Enzian am Wegesrand', en: 'Gentians along the trail', it: 'Genziane lungo il sentiero' },
  },
  {
    imageKey: 'gallerySnowyPeaks',
    layout: 'wide',
    position: 'center 92%',
    caption: { de: 'Die Elferhütte zu Füßen verschneiter Gipfel im Frühjahr', en: 'Elferhütte at the foot of snowy peaks in spring', it: 'L’Elferhütte ai piedi di cime innevate in primavera' },
  },
  {
    imageKey: 'galleryFlowerHut',
    layout: 'tall',
    caption: { de: 'Blumenschmuck vor der Hütte', en: 'Flowers in front of the hut', it: 'Fiori davanti al rifugio' },
  },
  {
    imageKey: 'gallerySkiSlope',
    layout: '',
    caption: { de: 'Frisch präparierte Piste am Elfer', en: 'Freshly groomed slope on the Elfer', it: 'Pista appena battuta sull’Elfer' },
  },
  {
    imageKey: 'gallerySummerHut',
    layout: 'wide',
    caption: { de: 'Sommertag hoch über dem Stubaital', en: 'Summer day high above the Stubai Valley', it: 'Giornata estiva sopra la Valle dello Stubai' },
    credit: { author: 'SchiDD', license: 'CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Stubai-Elferh%C3%BCtte-4.jpg' },
  },
  {
    imageKey: 'galleryMilkCans',
    layout: '',
    caption: { de: 'Milchkannen und Rodel auf der Terrasse', en: 'Milk churns and sledge on the terrace', it: 'Bidoni del latte e slittino sulla terrazza' },
  },
  {
    imageKey: 'galleryHayBarn',
    layout: '',
    caption: { de: 'Heustadel im Pulverschnee', en: 'Hay barn in powder snow', it: 'Fienile nella neve fresca' },
  },
  {
    imageKey: 'originalSummerValley',
    layout: '',
    caption: { de: 'Weiter Blick ins Stubaital', en: 'Wide view into the Stubai Valley', it: 'Ampia vista sulla Valle dello Stubai' },
  },
  {
    imageKey: 'galleryNightLights',
    layout: '',
    caption: { de: 'Lichter im Tal zur blauen Stunde', en: 'Valley lights at blue hour', it: 'Luci della valle all’ora blu' },
  },
  {
    imageKey: 'gallery1965',
    layout: 'wide',
    caption: { de: 'Die Elferhütte im Winter 1965', en: 'Elferhütte in winter 1965', it: 'L’Elferhütte nell’inverno 1965' },
    credit: { author: 'Sammlung Risch-Lau, Vorarlberger Landesbibliothek', license: 'CC BY 4.0', href: 'https://commons.wikimedia.org/wiki/File:Elferh%C3%BCtte_1965.jpg' },
  },
];

const contact = {
  phoneHref: 'tel:+4352262818',
  phoneLabel: '+43 5226 2818',
  emailHref: 'mailto:haas@elferhuette.at',
  emailLabel: 'haas@elferhuette.at',
  bank: { name: 'Sparkasse Schönberg', iban: 'AT76 2050 3059 0000 2436', bic: 'SPIHAT22' },
  vatId: 'ATU30881105',
  addressLines: ['Elferhütte Restaurant', 'Elferhütte 294', '6167 Neustift im Stubaital', 'Österreich'],
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Elferh%C3%BCtte%20Restaurant%2C%20Elferh%C3%BCtte%20294%2C%206167%20Neustift%20im%20Stubaital',
  mapsEmbedSrc: 'https://www.google.com/maps?q=Elferh%C3%BCtte%20Restaurant%2C%20Elferh%C3%BCtte%20294%2C%206167%20Neustift%20im%20Stubaital&hl=__LANG__&z=14&output=embed',
};

export const siteContent = {
  de: {
    languageName: 'Deutsch',
    meta: {
      title: 'Elferhütte | 2.080 m über dem Stubaital',
      description:
        'Elferhütte in Neustift: Bergmomente, ehrliche Hüttenküche und Weitblick auf 2.080 Metern im Stubaital.',
    },
    nav: [
      { href: '#erleben', label: 'Erleben' },
      { href: '#galerie', label: 'Galerie' },
      { href: '#einkehren', label: 'Einkehren' },
      { href: '#uebernachten', label: 'Übernachten' },
      { href: '#preise', label: 'Preise' },
      { href: '#geschichte', label: 'Geschichte' },
      { href: '#anreise', label: 'Anreise' },
      { href: '#kontakt', label: 'Kontakt' },
    ],
    hero: {
      overline: 'Stubaital · Tirol · 2.080 m',
      title: 'Wo das Tal endet und der Weitblick beginnt.',
      text:
        'Die Elferhütte ist ein besonderer Platz über Neustift: zum Aufsteigen, Ankommen, Einkehren und ganz bei sich sein.',
      primary: 'Jetzt anfragen',
      secondary: 'Die Hütte entdecken',
      facts: ['Panorama über dem Stubaital', 'Sommer & Winter am Elfer', 'Hüttenküche mit Herz'],
      imageAlt: 'Elferhütte über einem Wolkenmeer im Stubaital',
    },
    intro: {
      label: 'Die Elferhütte',
      title: 'Ein Logenplatz für echte Bergtage.',
      text:
        'Ob der erste Kaffee in klarer Morgenluft, eine wohlverdiente Pause nach der Tour oder ein stiller Abend hoch über dem Tal: Auf 2.080 Metern ist die Bergwelt ganz nah. Die Elferhütte verbindet unkomplizierte Gastlichkeit mit einem Blick, der bleibt.',
      imageAlt: 'Elferhütte im Winter mit Blick auf die Tiroler Bergwelt',
      stats: [
        { value: '2.080 m', label: 'Höhenlage am Elfer' },
        { value: '365°', label: 'Gefühl von Weite' },
        { value: '1 Ziel', label: 'Einfach eine gute Zeit haben' },
      ],
    },
    experiences: {
      label: 'Berg erleben',
      title: 'Draußen ist hier überall.',
      cards: [
        {
          title: 'Sommer am Elfer',
          text:
            'Wanderwege, Gipfelziele und die alpine Landschaft rund um Neustift machen die Hütte zu einem natürlichen Treffpunkt für Bergtage nach eigenem Tempo.',
          imageKey: 'summerAlpineRoses' as ImageKey,
          imageAlt: 'Blühende Almrosen hoch über dem sommerlichen Stubaital',
        },
        {
          title: 'Winter mit Weitblick',
          text:
            'Wenn die Hänge weiß werden, zeigt der Elfer seine ruhige Seite: frische Bergluft, verschneite Wege und ein Panorama, das bis weit über das Tal reicht.',
          imageKey: 'winterPanorama' as ImageKey,
          imageAlt: 'Tief verschneite Hänge mit Blick auf die Stubaier Gipfel',
        },
        {
          title: 'Ein Berg voller Möglichkeiten',
          text:
            'Der Elfer lädt zum Gehen, Schauen und Durchatmen ein. Wer die Natur respektvoll erlebt, findet hier einen Ort, der lange nachwirkt.',
          imageKey: 'summitShrine' as ImageKey,
          imageAlt: 'Hölzerner Bildstock auf einem Gipfel mit Blick auf die Kalkkögel',
        },
      ],
    },
    gallery: {
      label: 'Galerie',
      title: 'Bilder vom Elfer.',
      text: 'Sommer und Winter, Morgenlicht und Sternennacht: ein paar Eindrücke von der Elferhütte und ihrer Umgebung. Zum Vergrößern einfach antippen.',
      open: 'Foto vergrößern',
      close: 'Schließen',
      previous: 'Vorheriges Foto',
      next: 'Nächstes Foto',
      photo: 'Foto',
    },
    hospitality: {
      label: 'Einkehren',
      title: 'Gut ankommen. Gut essen. Gut bleiben.',
      text:
        'Nach Stunden in der Bergwelt darf es einfach und gut sein. In der Elferhütte treffen herzliche Atmosphäre, ehrliche Küche und Produkte in verlässlicher Qualität aufeinander - genau das wissen viele Stammgäste besonders zu schätzen.',
      points: ['Für die Pause zwischendurch', 'Für den Austausch nach der Tour', 'Für Genuss mit großem Ausblick'],
      note: 'Für aktuelle Öffnungszeiten, Angebote und Gruppenanfragen freuen wir uns über Ihre Nachricht.',
      imageKey: 'originalSummerWide' as ImageKey,
      imageAlt: 'Elferhütte nach dem ersten Schnee über einem Wolkenmeer',
    },
    stay: {
      label: 'Übernachten',
      title: 'Eine Nacht näher am Himmel.',
      text:
        'Eine Übernachtung in den Bergen macht aus einem Ausflug ein Erlebnis. Fragen Sie Ihr Wunschdatum einfach direkt bei uns an - wir informieren Sie gerne über die aktuellen Möglichkeiten.',
      points: ['Ideal für mehrtägige Bergtouren', 'Unkompliziert direkt anfragen', 'Bergmorgen inklusive'],
      primary: 'Übernachtung anfragen',
      imageAlt: 'Gemütliche Gaststube der Elferhütte mit Holzdecke',
    },
    prices: {
      label: 'Preise',
      title: 'Ehrlich kalkuliert, herzlich serviert.',
      text: 'Alle Zimmer haben Fernsicht oder Talblick über das Stubaital. Wir bieten ausschließlich Zimmer und keine Lager - laufend renoviert und mit viel Wert auf Sauberkeit.',
      perNight: 'pro Person und Nacht',
      offers: [
        { name: 'Zimmer mit Frühstück', price: '49', detail: 'Mit reichhaltigem Frühstück vom Buffet.' },
        { name: 'Halbpension', price: '88', detail: 'Zimmer mit Frühstücksbuffet und 3-Gänge-Abendmenü.', badge: 'Beliebt' },
      ],
      includedTitle: 'Im Zimmerpreis inklusive',
      included: [
        'Frische Bettwäsche und Handtücher',
        'Heizung sowie Fließwasser warm und kalt im Zimmer',
        'Panoramadusche im 1. Stock inklusive Duschtücher',
        'Gepflegte WC-Anlagen',
        'Kostenloses WLAN für Hausgäste',
      ],
      extrasTitle: 'Zuschläge & Ermäßigungen',
      extras: [
        { label: 'Zimmer Nr. 6 mit eigener Dusche', value: '+ 15 €' },
        { label: 'Weihnachten / Neujahr', value: '+ 40 €' },
        { label: 'Kinder bis zum 3. Geburtstag', value: 'kostenlos' },
        { label: 'Kinder vom 3. bis zum 10. Geburtstag', value: '- 30 %' },
      ],
      extrasNote: 'Aufpreise pro Person und Nacht.',
      notes: [
        'Abends kochen wir auch nach Speisekarte.',
        'Die Elferhütte ist keine Selbstversorgerhütte.',
        'Hüttenruhe täglich ab 22 Uhr.',
      ],
      quote: '„Nur was man erwandert, hat man gelebt und erlebt.“',
      disclaimer: 'Druckfehler und Änderungen vorbehalten.',
      primary: 'Zimmer anfragen',
    },
    history: {
      label: "Geschichte",
      title: "Seit 1933 ein Zuhause am Berg.",
      text: "Die Elferhütte ist eine private Hütte und seit Generationen in Familienhand. Fritz und Christine Haas haben sie rund 50 Jahre lang mit viel Herzblut geführt – durch Krieg, Brand und Wiederaufbau, durch unzählige Bergsommer und Skiwinter.",
      photos: [
        { imageKey: 'history1933' as ImageKey, caption: "Die erste Elferhütte, 1933–1964", alt: "Die gemauerte erste Elferhütte vor den Kalkkögeln" },
        { imageKey: 'historyMules' as ImageKey, caption: "Säumer mit Mulis, um 1955", alt: "Säumer mit beladenen Mulis auf dem Weg zur Hütte" },
        { imageKey: 'history1967' as ImageKey, caption: "Um 1967, vor dem Brand", alt: "Historische Ansichtskarte der Elferhütte im Sommer" },
        { imageKey: 'historySkiSchool' as ImageKey, caption: "Skischule am Elfer nach dem Wiederaufbau", alt: "Historische Ansichtskarte mit Skischule vor der neuen Elferhütte" },
      ],
      milestones: [
        { year: "1933", title: "Die erste Hütte", text: "Am Orenkopf entsteht die Elferhütte als private Berghütte." },
        { year: "1939–1945", title: "Schwere Jahre", text: "Im Zweiten Weltkrieg wird die Hütte geplündert." },
        { year: "bis 1964", title: "Mit Pferd „Max“ hinauf", text: "Versorgt wird mit Pferd „Max“: Der junge Fritz Haas geht dafür rund 3,5 Stunden von Neder über die Herzebenalm hinauf. Ab den 1950er-Jahren ist die Hütte ein beliebtes Skitourenziel." },
        { year: "1964", title: "Der Elferlift kommt", text: "Mit tatkräftiger Hilfe der Familie wird der Elferlift gebaut – im Winter 1964/65 beginnt der Skibetrieb am Elfer." },
        { year: "1968", title: "Der Brand", text: "Am 15. Oktober 1968 brennt die Elferhütte ab." },
        { year: "1969", title: "Wiederaufbau", text: "Familie Fritz Haas baut die Hütte neu auf. Das Material kommt per Sessellift und Materialseilbahn auf den Berg, ein Stromkabel aus dem Tal bringt Strom." },
        { year: "1972–2000", title: "Wasser, Wege, Kanal", text: "Neue Dachisolierung nach Sturmschäden, 1983 ein eigener Weg abseits der Piste, 1988 und 1992 Wasserleitungen und Pumpstation. 2000 folgt ein Kanal, 1.000 Höhenmeter hinunter ins öffentliche Netz." },
        { year: "2003–2014", title: "Technik am Berg", text: "Internet ab 2003, 2005 die Sanierung der Materialseilbahn, 2010 der Bau des Schneeräumers „Schneehaase“, 2013 eine Brandmeldeanlage, 2014 energiesparende Fenster." },
        { year: "2015–heute", title: "Laufend erneuert", text: "Küche, Kühlung und Gasanlage (2015–2017), LED-Licht und Schankanlage (2019) und seither laufende Reparaturen, Wegverbesserungen und die Beseitigung von Sturmschäden." },
      ],
      factsTitle: "Gut zu wissen",
      facts: ["Die Materialseilbahn musste viermal gebaut werden.", "Das Wasser wird mit zwei Pumpstationen fast aus dem Pinnistal heraufgepumpt.", "Seit 2000 führt ein Kanal 1.000 Höhenmeter hinunter ins Tal."],
      appealTitle: "Eine Bitte an unsere Gäste",
      appeal: "Private Hütten erhalten keine öffentlichen Förderungen. Jede Einkehr hilft, die Elferhütte für kommende Generationen zu erhalten. Danke an alle Freunde der Hütte aus ganz Europa!",
    },
    arrival: {
      label: 'Anreise',
      title: 'Der Weg ist Teil des Erlebnisses.',
      text:
        'Die Elferhütte liegt oberhalb von Neustift im Stubaital. Ob zu Fuß, mit Unterstützung der Elferbahn oder als Ziel einer längeren Tour: Planen Sie Ihre Route passend zu Wetter, Jahreszeit und persönlicher Kondition.',
      items: [
        { title: 'Start in Neustift', text: 'Neustift im Stubaital ist der Ausgangspunkt für Ihren Bergtag am Elfer.' },
        { title: 'Gut vorbereitet losgehen', text: 'Aktuelle Wetter-, Weg- und Bahninformationen bitte vor dem Aufbruch prüfen.' },
        { title: 'Wir helfen gerne', text: 'Bei Fragen zu Ihrem Besuch erreichen Sie uns telefonisch oder per E-Mail.' },
      ],
      mapTitle: "So finden Sie uns",
      addressLabel: "Adresse",
      mapNotice: "Mit dem Laden der Karte werden Daten an Google übertragen. Mehr dazu in der Datenschutzerklärung von Google.",
      mapLoad: "Karte laden",
      mapOpen: "In Google Maps öffnen",
      mapFrameTitle: "Karte: Lage der Elferhütte",
    },
    contact: {
      label: 'Kontakt',
      title: 'Wir freuen uns auf Sie.',
      text:
        'Sie planen einen Bergtag, möchten einkehren oder haben eine Anfrage zur Übernachtung? Melden Sie sich direkt bei uns.',
      phoneText: 'Telefon',
      emailText: 'E-Mail',
      bankText: 'Bankverbindung',
      vatIdText: 'UID',
      footer: 'Elferhütte · 2.080 m · Neustift im Stubaital',
    },
  },
  en: {
    languageName: 'English',
    meta: {
      title: 'Elferhütte | 2,080 m above the Stubai Valley',
      description:
        'Elferhütte in Neustift: mountain moments, honest Alpine cooking and sweeping views at 2,080 metres in the Stubai Valley.',
    },
    nav: [
      { href: '#experience', label: 'Experience' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#hospitality', label: 'Hospitality' },
      { href: '#stay', label: 'Stay overnight' },
      { href: '#prices', label: 'Prices' },
      { href: '#history', label: 'History' },
      { href: '#arrival', label: 'Getting here' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      overline: 'Stubai Valley · Tyrol · 2,080 m',
      title: 'Where the valley ends and the view begins.',
      text:
        'Elferhütte is a special place above Neustift: for climbing higher, arriving, taking a break and simply being present.',
      primary: 'Make an enquiry',
      secondary: 'Discover the hut',
      facts: ['Panoramic Stubai Valley views', 'On the Elfer in every season', 'Alpine cooking with heart'],
      imageAlt: 'Elferhütte above a sea of clouds in the Stubai Valley',
    },
    intro: {
      label: 'Elferhütte',
      title: 'A front-row seat for real mountain days.',
      text:
        'Whether it is the first coffee in crisp morning air, a well-earned rest after a tour or a quiet evening high above the valley: at 2,080 metres, the mountains are close. Elferhütte combines easy-going hospitality with a view that stays with you.',
      imageAlt: 'Elferhütte in winter with views of the Tyrolean mountains',
      stats: [
        { value: '2,080 m', label: 'Altitude on the Elfer' },
        { value: '365°', label: 'A feeling of wide-open space' },
        { value: '1 goal', label: 'Simply have a good time' },
      ],
    },
    experiences: {
      label: 'Experience the mountains',
      title: 'The outdoors is everywhere here.',
      cards: [
        {
          title: 'Summer on the Elfer',
          text:
            'Hiking paths, summit goals and the Alpine landscape around Neustift make the hut a natural meeting point for mountain days at your own pace.',
          imageKey: 'summerAlpineRoses' as ImageKey,
          imageAlt: 'Alpine roses in bloom high above the Stubai Valley in summer',
        },
        {
          title: 'Winter with a view',
          text:
            'When the slopes turn white, the Elfer reveals its peaceful side: fresh mountain air, snowy trails and a panorama stretching far beyond the valley.',
          imageKey: 'winterPanorama' as ImageKey,
          imageAlt: 'Deep-snow slopes with views of the Stubai peaks',
        },
        {
          title: 'A mountain of possibilities',
          text:
            'The Elfer invites you to walk, look and breathe deeply. Experience nature respectfully and discover a place that lingers long after you leave.',
          imageKey: 'summitShrine' as ImageKey,
          imageAlt: 'Wooden wayside shrine on a summit overlooking the Kalkkögel',
        },
      ],
    },
    gallery: {
      label: 'Gallery',
      title: 'Pictures from the Elfer.',
      text: 'Summer and winter, morning light and starry nights: a few impressions of Elferhütte and its surroundings. Tap any photo to enlarge it.',
      open: 'Enlarge photo',
      close: 'Close',
      previous: 'Previous photo',
      next: 'Next photo',
      photo: 'Photo',
    },
    hospitality: {
      label: 'Hospitality',
      title: 'Arrive well. Eat well. Stay awhile.',
      text:
        'After hours in the mountains, simple things done well matter most. At Elferhütte, a warm welcome, honest cooking and dependable product quality come together - one reason many guests return year after year.',
      points: ['For a pause along the way', 'For stories after the tour', 'For good food with a grand view'],
      note: 'For current opening hours, offers and group enquiries, please get in touch with us.',
      imageKey: 'originalSummerWide' as ImageKey,
      imageAlt: 'Elferhütte after the first snowfall above a sea of clouds',
    },
    stay: {
      label: 'Stay overnight',
      title: 'A night closer to the sky.',
      text:
        'An overnight stay in the mountains turns an outing into an experience. Send us your preferred date and we will gladly let you know about the current options.',
      points: ['Perfect for multi-day mountain tours', 'Simple direct enquiries', 'A mountain morning included'],
      primary: 'Enquire about an overnight stay',
      imageAlt: 'Cosy wood-panelled dining room at Elferhütte',
    },
    prices: {
      label: 'Prices',
      title: 'Fair prices, served with a warm welcome.',
      text: 'Every room offers a distant view or a view over the Stubai Valley. We only have private rooms, no dormitories - continuously renovated and kept spotlessly clean.',
      perNight: 'per person per night',
      offers: [
        { name: 'Room with breakfast', price: '49', detail: 'Including a generous breakfast buffet.' },
        { name: 'Half board', price: '88', detail: 'Room with breakfast buffet and a 3-course dinner.', badge: 'Popular' },
      ],
      includedTitle: 'Included in the room rate',
      included: [
        'Fresh bed linen and towels',
        'Heating and hot and cold running water in the room',
        'Panorama shower on the first floor, towels included',
        'Well-kept toilet facilities',
        'Free Wi-Fi for overnight guests',
      ],
      extrasTitle: 'Supplements & discounts',
      extras: [
        { label: 'Room no. 6 with private shower', value: '+ €15' },
        { label: 'Christmas / New Year', value: '+ €40' },
        { label: 'Children under 3', value: 'free' },
        { label: 'Children aged 3 to 10', value: '- 30%' },
      ],
      extrasNote: 'Supplements per person per night.',
      notes: [
        'In the evening we also serve dishes from our menu.',
        'Elferhütte is not a self-catering hut.',
        'Quiet hours start daily at 10 pm.',
      ],
      quote: '“Only what you reach on foot is truly lived and experienced.”',
      disclaimer: 'Subject to change; errors excepted.',
      primary: 'Request a room',
    },
    history: {
      label: "History",
      title: "A home on the mountain since 1933.",
      text: "Elferhütte is a private hut that has been in family hands for generations. Fritz and Christine Haas ran it with heart and soul for around 50 years – through war, fire and rebuilding, through countless mountain summers and ski winters.",
      photos: [
        { imageKey: 'history1933' as ImageKey, caption: "The first Elferhütte, 1933–1964", alt: "The first stone-built Elferhütte in front of the Kalkkögel" },
        { imageKey: 'historyMules' as ImageKey, caption: "Mule drivers, around 1955", alt: "Mule drivers with loaded mules on the way to the hut" },
        { imageKey: 'history1967' as ImageKey, caption: "Around 1967, before the fire", alt: "Historic postcard of Elferhütte in summer" },
        { imageKey: 'historySkiSchool' as ImageKey, caption: "Ski school at the Elfer after the rebuild", alt: "Historic postcard showing a ski school in front of the new Elferhütte" },
      ],
      milestones: [
        { year: "1933", title: "The first hut", text: "Elferhütte is built on the Orenkopf as a private mountain hut." },
        { year: "1939–1945", title: "Hard years", text: "During the Second World War the hut is plundered." },
        { year: "until 1964", title: "Up with Max the horse", text: "Supplies come up with the horse “Max”: young Fritz Haas walks about 3.5 hours from Neder via the Herzebenalm. From the 1950s the hut is a popular ski-touring destination." },
        { year: "1964", title: "The Elfer lift arrives", text: "With the family’s active help the Elferlift is built – skiing on the Elfer begins in the winter of 1964/65." },
        { year: "1968", title: "The fire", text: "On 15 October 1968 Elferhütte burns down." },
        { year: "1969", title: "Rebuilding", text: "The Fritz Haas family rebuilds the hut. Materials come up by chairlift and material ropeway, and a cable from the valley brings electricity." },
        { year: "1972–2000", title: "Water, trails, sewer", text: "New roof insulation after storm damage, a separate trail away from the piste in 1983, water pipes and a pump station in 1988 and 1992. In 2000 a sewer line follows, 1,000 vertical metres down to the public network." },
        { year: "2003–2014", title: "Technology on the mountain", text: "Internet from 2003, the ropeway overhaul in 2005, the “Schneehaase” snow-clearing machine built in 2010, a fire alarm system in 2013 and energy-saving windows in 2014." },
        { year: "2015–today", title: "Constantly renewed", text: "Kitchen, cooling and gas system (2015–2017), LED lighting and tap system (2019) and since then ongoing repairs, trail improvements and clearing up storm damage." },
      ],
      factsTitle: "Good to know",
      facts: ["The material ropeway had to be built four times.", "Water is pumped up from almost as far down as the Pinnistal using two pump stations.", "Since 2000 a sewer line has run 1,000 vertical metres down to the valley."],
      appealTitle: "A request to our guests",
      appeal: "Private huts receive no public funding. Every visit helps to preserve Elferhütte for generations to come. Thank you to all friends of the hut from all over Europe!",
    },
    arrival: {
      label: 'Getting here',
      title: 'The journey is part of the experience.',
      text:
        'Elferhütte sits above Neustift in the Stubai Valley. On foot, with the help of the Elferbahn, or as the destination of a longer tour: plan a route that fits the weather, season and your own fitness.',
      items: [
        { title: 'Start in Neustift', text: 'Neustift in the Stubai Valley is the starting point for your mountain day on the Elfer.' },
        { title: 'Set off prepared', text: 'Please check current weather, trail and lift information before you start.' },
        { title: 'We are happy to help', text: 'For questions about your visit, contact us by phone or email.' },
      ],
      mapTitle: "How to find us",
      addressLabel: "Address",
      mapNotice: "Loading the map transfers data to Google. See Google’s privacy policy for details.",
      mapLoad: "Load map",
      mapOpen: "Open in Google Maps",
      mapFrameTitle: "Map: location of Elferhütte",
    },
    contact: {
      label: 'Contact',
      title: 'We look forward to welcoming you.',
      text:
        'Planning a mountain day, a stop for food or an overnight stay? Contact us directly.',
      phoneText: 'Phone',
      emailText: 'Email',
      bankText: 'Bank details',
      vatIdText: 'VAT ID',
      footer: 'Elferhütte · 2,080 m · Neustift in the Stubai Valley',
    },
  },
  it: {
    languageName: 'Italiano',
    meta: {
      title: 'Elferhütte | 2.080 m sopra la Valle dello Stubai',
      description:
        'Elferhütte a Neustift: momenti in montagna, cucina alpina genuina e viste grandiose a 2.080 metri nella Valle dello Stubai.',
    },
    nav: [
      { href: '#esperienza', label: 'Esperienza' },
      { href: '#galleria', label: 'Galleria' },
      { href: '#ospitalita', label: 'Ospitalità' },
      { href: '#pernottamento', label: 'Pernottamento' },
      { href: '#prezzi', label: 'Prezzi' },
      { href: '#storia', label: 'Storia' },
      { href: '#arrivo', label: 'Come arrivare' },
      { href: '#contatto', label: 'Contatto' },
    ],
    hero: {
      overline: 'Valle dello Stubai · Tirolo · 2.080 m',
      title: 'Dove finisce la valle e inizia lo sguardo.',
      text:
        'Elferhütte è un luogo speciale sopra Neustift: per salire, arrivare, fermarsi e vivere il momento.',
      primary: 'Invia una richiesta',
      secondary: 'Scopri il rifugio',
      facts: ['Panorama sulla Valle dello Stubai', 'Sull’Elfer in ogni stagione', 'Cucina alpina con cuore'],
      imageAlt: 'Elferhütte sopra un mare di nuvole nella Valle dello Stubai',
    },
    intro: {
      label: 'Elferhütte',
      title: 'Un posto in prima fila per vere giornate in montagna.',
      text:
        'Che sia il primo caffè nell’aria limpida del mattino, una meritata pausa dopo l’escursione o una serata tranquilla sopra la valle: a 2.080 metri la montagna è vicinissima. Elferhütte unisce un’ospitalità spontanea a una vista indimenticabile.',
      imageAlt: 'Elferhütte in inverno con vista sulle montagne tirolesi',
      stats: [
        { value: '2.080 m', label: 'Altitudine sull’Elfer' },
        { value: '365°', label: 'Una sensazione di spazio infinito' },
        { value: '1 obiettivo', label: 'Stare semplicemente bene' },
      ],
    },
    experiences: {
      label: 'Vivere la montagna',
      title: 'Qui l’aria aperta è ovunque.',
      cards: [
        {
          title: 'Estate sull’Elfer',
          text:
            'Sentieri, cime e il paesaggio alpino attorno a Neustift rendono il rifugio un punto d’incontro naturale per giornate in montagna al proprio ritmo.',
          imageKey: 'summerAlpineRoses' as ImageKey,
          imageAlt: 'Rododendri in fiore sopra la Valle dello Stubai in estate',
        },
        {
          title: 'Inverno con vista',
          text:
            'Quando i pendii diventano bianchi, l’Elfer mostra il suo lato tranquillo: aria fresca, sentieri innevati e un panorama che va ben oltre la valle.',
          imageKey: 'winterPanorama' as ImageKey,
          imageAlt: 'Pendii innevati con vista sulle cime dello Stubai',
        },
        {
          title: 'Una montagna di possibilità',
          text:
            'L’Elfer invita a camminare, osservare e respirare. Vivete la natura con rispetto e scoprite un luogo che resta nel cuore.',
          imageKey: 'summitShrine' as ImageKey,
          imageAlt: 'Edicola in legno su una cima con vista sui Kalkkögel',
        },
      ],
    },
    gallery: {
      label: 'Galleria',
      title: 'Immagini dall’Elfer.',
      text: 'Estate e inverno, luce del mattino e notti stellate: alcune impressioni dell’Elferhütte e dei suoi dintorni. Toccate una foto per ingrandirla.',
      open: 'Ingrandisci foto',
      close: 'Chiudi',
      previous: 'Foto precedente',
      next: 'Foto successiva',
      photo: 'Foto',
    },
    hospitality: {
      label: 'Ospitalità',
      title: 'Arrivare bene. Mangiare bene. Restare volentieri.',
      text:
        'Dopo ore in montagna, contano le cose semplici fatte bene. All’Elferhütte si incontrano accoglienza calorosa, cucina genuina e qualità costante dei prodotti - proprio ciò che tanti ospiti abituali apprezzano da anni.',
      points: ['Per una pausa lungo il cammino', 'Per raccontarsi dopo l’escursione', 'Per il gusto con vista grandiosa'],
      note: 'Per gli orari di apertura aggiornati, le offerte e le richieste per gruppi, contattateci direttamente.',
      imageKey: 'originalSummerWide' as ImageKey,
      imageAlt: 'Elferhütte dopo la prima neve sopra un mare di nuvole',
    },
    stay: {
      label: 'Pernottamento',
      title: 'Una notte più vicini al cielo.',
      text:
        'Pernottare in montagna trasforma una gita in un’esperienza. Inviateci la data desiderata: saremo lieti di informarvi sulle possibilità attuali.',
      points: ['Ideale per tour di più giorni', 'Richieste dirette e semplici', 'Mattino in montagna incluso'],
      primary: 'Richiedi un pernottamento',
      imageAlt: 'Accogliente stube in legno dell’Elferhütte',
    },
    prices: {
      label: 'Prezzi',
      title: 'Prezzi onesti, accoglienza calorosa.',
      text: 'Tutte le camere offrono una vista panoramica o sulla Valle dello Stubai. Disponiamo solo di camere, nessun dormitorio - rinnovate di continuo e curate con grande attenzione alla pulizia.',
      perNight: 'a persona per notte',
      offers: [
        { name: 'Camera con colazione', price: '49', detail: 'Con ricca colazione a buffet.' },
        { name: 'Mezza pensione', price: '88', detail: 'Camera con colazione a buffet e cena di 3 portate.', badge: 'Consigliato' },
      ],
      includedTitle: 'Incluso nel prezzo della camera',
      included: [
        'Biancheria da letto e asciugamani freschi',
        'Riscaldamento e acqua corrente calda e fredda in camera',
        'Doccia panoramica al primo piano, teli doccia inclusi',
        'Servizi igienici curati',
        'Wi-Fi gratuito per gli ospiti',
      ],
      extrasTitle: 'Supplementi e riduzioni',
      extras: [
        { label: 'Camera n. 6 con doccia privata', value: '+ 15 €' },
        { label: 'Natale / Capodanno', value: '+ 40 €' },
        { label: 'Bambini fino a 3 anni', value: 'gratis' },
        { label: 'Bambini dai 3 ai 10 anni', value: '- 30 %' },
      ],
      extrasNote: 'Supplementi a persona per notte.',
      notes: [
        'La sera cuciniamo anche à la carte.',
        'L’Elferhütte non è un rifugio autogestito.',
        'Silenzio notturno ogni giorno dalle 22.',
      ],
      quote: '«Solo ciò che si raggiunge a piedi si vive davvero.»',
      disclaimer: 'Salvo errori di stampa e modifiche.',
      primary: 'Richiedi una camera',
    },
    history: {
      label: "Storia",
      title: "Una casa in montagna dal 1933.",
      text: "L’Elferhütte è un rifugio privato, da generazioni nelle mani della stessa famiglia. Fritz e Christine Haas l’hanno gestito con passione per circa 50 anni – attraverso guerra, incendio e ricostruzione, innumerevoli estati in montagna e inverni sugli sci.",
      photos: [
        { imageKey: 'history1933' as ImageKey, caption: "Il primo Elferhütte, 1933–1964", alt: "Il primo Elferhütte in muratura davanti alle Kalkkögel" },
        { imageKey: 'historyMules' as ImageKey, caption: "Mulattieri, intorno al 1955", alt: "Mulattieri con muli carichi sulla strada verso il rifugio" },
        { imageKey: 'history1967' as ImageKey, caption: "Intorno al 1967, prima dell’incendio", alt: "Cartolina storica dell’Elferhütte in estate" },
        { imageKey: 'historySkiSchool' as ImageKey, caption: "Scuola di sci all’Elfer dopo la ricostruzione", alt: "Cartolina storica con una scuola di sci davanti al nuovo Elferhütte" },
      ],
      milestones: [
        { year: "1933", title: "Il primo rifugio", text: "Sull’Orenkopf nasce l’Elferhütte come rifugio privato." },
        { year: "1939–1945", title: "Anni difficili", text: "Durante la Seconda guerra mondiale il rifugio viene saccheggiato." },
        { year: "fino al 1964", title: "In salita con il cavallo Max", text: "I rifornimenti salgono con il cavallo “Max”: il giovane Fritz Haas cammina circa 3,5 ore da Neder passando per la Herzebenalm. Dagli anni ’50 il rifugio è una meta amata per lo scialpinismo." },
        { year: "1964", title: "Arriva l’Elferlift", text: "Con l’aiuto concreto della famiglia viene costruito l’Elferlift – nell’inverno 1964/65 inizia lo sci sull’Elfer." },
        { year: "1968", title: "L’incendio", text: "Il 15 ottobre 1968 l’Elferhütte brucia." },
        { year: "1969", title: "La ricostruzione", text: "La famiglia di Fritz Haas ricostruisce il rifugio. Il materiale sale con la seggiovia e la teleferica, e un cavo dalla valle porta la corrente." },
        { year: "1972–2000", title: "Acqua, sentieri, fognatura", text: "Nuovo isolamento del tetto dopo i danni di una tempesta, nel 1983 un sentiero separato dalla pista, nel 1988 e 1992 condotte idriche e stazione di pompaggio. Nel 2000 segue la fognatura, 1.000 metri di dislivello fino alla rete pubblica." },
        { year: "2003–2014", title: "Tecnica in quota", text: "Internet dal 2003, nel 2005 il rinnovo della teleferica, nel 2010 la costruzione dello sgombraneve “Schneehaase”, nel 2013 un impianto antincendio, nel 2014 finestre a risparmio energetico." },
        { year: "2015–oggi", title: "Sempre rinnovato", text: "Cucina, refrigerazione e impianto a gas (2015–2017), luci LED e impianto di spillatura (2019) e da allora continue riparazioni, migliorie ai sentieri e lavori dopo le tempeste." },
      ],
      factsTitle: "Da sapere",
      facts: ["La teleferica per il materiale è stata costruita quattro volte.", "L’acqua viene pompata quasi dal Pinnistal grazie a due stazioni di pompaggio.", "Dal 2000 una fognatura scende per 1.000 metri di dislivello fino a valle."],
      appealTitle: "Una richiesta ai nostri ospiti",
      appeal: "I rifugi privati non ricevono contributi pubblici. Ogni sosta aiuta a conservare l’Elferhütte per le generazioni future. Grazie a tutti gli amici del rifugio da tutta Europa!",
    },
    arrival: {
      label: 'Come arrivare',
      title: 'Il viaggio fa parte dell’esperienza.',
      text:
        'L’Elferhütte si trova sopra Neustift nella Valle dello Stubai. A piedi, con l’aiuto della Elferbahn o come meta di un tour più lungo: scegliete un percorso adatto al meteo, alla stagione e alla vostra condizione fisica.',
      items: [
        { title: 'Partenza da Neustift', text: 'Neustift nella Valle dello Stubai è il punto di partenza per la vostra giornata sull’Elfer.' },
        { title: 'Partire preparati', text: 'Controllate meteo, sentieri e informazioni sugli impianti prima della partenza.' },
        { title: 'Siamo felici di aiutarvi', text: 'Per domande sulla visita, contattateci telefonicamente o per e-mail.' },
      ],
      mapTitle: "Come trovarci",
      addressLabel: "Indirizzo",
      mapNotice: "Caricando la mappa i dati vengono trasmessi a Google. Maggiori informazioni nell’informativa sulla privacy di Google.",
      mapLoad: "Carica mappa",
      mapOpen: "Apri in Google Maps",
      mapFrameTitle: "Mappa: posizione dell’Elferhütte",
    },
    contact: {
      label: 'Contatto',
      title: 'Non vediamo l’ora di accogliervi.',
      text:
        'State programmando una giornata in montagna, una sosta al rifugio o un pernottamento? Contattateci direttamente.',
      phoneText: 'Telefono',
      emailText: 'E-mail',
      bankText: 'Coordinate bancarie',
      vatIdText: 'P. IVA',
      footer: 'Elferhütte · 2.080 m · Neustift nella Valle dello Stubai',
    },
  },
} as const;

export { contact };
