import alpineRidge from '../assets/elferhuette/alpine-ridge.jpg';
import heroClouds from '../assets/elferhuette/hero-clouds.jpg';
import hutSpring from '../assets/elferhuette/hut-spring.jpg';
import originalEveningLight from '../assets/elferhuette/original-evening-light.jpg';
import originalSummerValley from '../assets/elferhuette/original-summer-valley.jpg';
import originalSummerWide from '../assets/elferhuette/original-summer-wide.jpg';
import originalVintageTalblick from '../assets/elferhuette/original-vintage-talblick.jpg';
import originalWinterWide from '../assets/elferhuette/original-winter-wide.jpg';
import sleepingRoom from '../assets/elferhuette/sleeping-room.jpg';
import summerRidge from '../assets/elferhuette/summer-ridge.jpg';
import winterHut from '../assets/elferhuette/winter-hut.jpg';

export const locales = ['de', 'en', 'it'] as const;
export type Locale = (typeof locales)[number];

export const images = {
  heroClouds,
  winterHut,
  summerRidge,
  alpineRidge,
  sleepingRoom,
  hutSpring,
  originalEveningLight,
  originalSummerValley,
  originalSummerWide,
  originalVintageTalblick,
  originalWinterWide,
} as const;

export type ImageKey = keyof typeof images;

const contact = {
  phoneHref: 'tel:+4352262818',
  phoneLabel: '+43 5226 2818',
  emailHref: 'mailto:haas@elferhuette.at',
  emailLabel: 'haas@elferhuette.at',
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
      { href: '#momente', label: 'Momente' },
      { href: '#einkehren', label: 'Einkehren' },
      { href: '#uebernachten', label: 'Übernachten' },
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
          imageKey: 'summerRidge' as ImageKey,
          imageAlt: 'Felsige Berglandschaft im Stubaital im Sommer',
        },
        {
          title: 'Winter mit Weitblick',
          text:
            'Wenn die Hänge weiß werden, zeigt der Elfer seine ruhige Seite: frische Bergluft, verschneite Wege und ein Panorama, das bis weit über das Tal reicht.',
          imageKey: 'winterHut' as ImageKey,
          imageAlt: 'Elferhütte im tief verschneiten Winter',
        },
        {
          title: 'Ein Berg voller Möglichkeiten',
          text:
            'Der Elfer lädt zum Gehen, Schauen und Durchatmen ein. Wer die Natur respektvoll erlebt, findet hier einen Ort, der lange nachwirkt.',
          imageKey: 'alpineRidge' as ImageKey,
          imageAlt: 'Markante Gipfel und grüne Hänge nahe der Elferhütte',
        },
      ],
    },
    moments: {
      label: 'Aus der ursprünglichen Homepage',
      title: 'Bewährte Elferhütten-Momente in neuem Auftritt.',
      text:
        'Schon der ursprüngliche Webauftritt stellte Wandern, Gesundheit und Fitness in den Mittelpunkt. Viele Stammgäste schätzen bis heute die Kombination aus Panorama, ehrlicher Küche und echter Tiroler Gastfreundschaft.',
      quote: '„Ihre Gesundheit und Fitness beeinflusst jeden Aspekt Ihres Lebens.“',
      cards: [
        {
          title: 'Sommerblick über das Stubaital',
          text: 'Der Klassiker vom Hüttenplatz - viel Weite, viel Licht und ein Ziel, das man sieht.',
          imageKey: 'originalSummerValley' as ImageKey,
          imageAlt: 'Elferhütte mit Blick über das sommerliche Stubaital',
        },
        {
          title: 'Winterpanorama am Elfer',
          text: 'Die Hütte über den Wolken und darunter das Tal: ein Motiv, das seit Jahren für Elferhütte steht.',
          imageKey: 'originalWinterWide' as ImageKey,
          imageAlt: 'Breites Winterpanorama mit Elferhütte und verschneiten Bergen',
        },
        {
          title: 'Abendstimmung an der Hütte',
          text: 'Wenn am Berg langsam Ruhe einkehrt, zeigt die Elferhütte ihren besonders stimmungsvollen Charakter.',
          imageKey: 'originalEveningLight' as ImageKey,
          imageAlt: 'Elferhütte in blauer Abendstimmung',
        },
        {
          title: 'Klassischer Talblick',
          text: 'Ein Motiv aus dem früheren Auftritt: die Hütte direkt über Neustift mit weitem Blick ins Tal.',
          imageKey: 'originalVintageTalblick' as ImageKey,
          imageAlt: 'Historischer Talblick mit Elferhütte',
        },
      ],
    },
    hospitality: {
      label: 'Einkehren',
      title: 'Gut ankommen. Gut essen. Gut bleiben.',
      text:
        'Nach Stunden in der Bergwelt darf es einfach und gut sein. In der Elferhütte treffen herzliche Atmosphäre, ehrliche Küche und Produkte in verlässlicher Qualität aufeinander - genau das wissen viele Stammgäste besonders zu schätzen.',
      points: ['Für die Pause zwischendurch', 'Für den Austausch nach der Tour', 'Für Genuss mit großem Ausblick'],
      note: 'Für aktuelle Öffnungszeiten, Angebote und Gruppenanfragen freuen wir uns über Ihre Nachricht.',
      imageKey: 'originalSummerWide' as ImageKey,
      imageAlt: 'Elferhütte an einem klaren Sommertag',
    },
    stay: {
      label: 'Übernachten',
      title: 'Eine Nacht näher am Himmel.',
      text:
        'Eine Übernachtung in den Bergen macht aus einem Ausflug ein Erlebnis. Fragen Sie Ihr Wunschdatum einfach direkt bei uns an - wir informieren Sie gerne über die aktuellen Möglichkeiten.',
      points: ['Ideal für mehrtägige Bergtouren', 'Unkompliziert direkt anfragen', 'Bergmorgen inklusive'],
      primary: 'Übernachtung anfragen',
      imageAlt: 'Schlafraum der Elferhütte',
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
    },
    contact: {
      label: 'Kontakt',
      title: 'Wir freuen uns auf Sie.',
      text:
        'Sie planen einen Bergtag, möchten einkehren oder haben eine Anfrage zur Übernachtung? Melden Sie sich direkt bei uns.',
      phoneText: 'Telefon',
      emailText: 'E-Mail',
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
      { href: '#moments', label: 'Moments' },
      { href: '#hospitality', label: 'Hospitality' },
      { href: '#stay', label: 'Stay overnight' },
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
          imageKey: 'summerRidge' as ImageKey,
          imageAlt: 'Rocky summer mountain scenery in the Stubai Valley',
        },
        {
          title: 'Winter with a view',
          text:
            'When the slopes turn white, the Elfer reveals its peaceful side: fresh mountain air, snowy trails and a panorama stretching far beyond the valley.',
          imageKey: 'winterHut' as ImageKey,
          imageAlt: 'Elferhütte surrounded by deep winter snow',
        },
        {
          title: 'A mountain of possibilities',
          text:
            'The Elfer invites you to walk, look and breathe deeply. Experience nature respectfully and discover a place that lingers long after you leave.',
          imageKey: 'alpineRidge' as ImageKey,
          imageAlt: 'Dramatic peaks and green slopes near Elferhütte',
        },
      ],
    },
    moments: {
      label: 'From the original homepage',
      title: 'Classic Elferhütte moments, now in a new design.',
      text:
        'The original website already focused on hiking, health and fitness. That spirit remains: mountain movement, wide views, heartfelt hospitality and solid quality that returning guests appreciate.',
      quote: '“Your health and fitness influence every aspect of your life.”',
      cards: [
        {
          title: 'Summer above the valley',
          text: 'A classic hut perspective over Neustift and the Stubai Valley.',
          imageKey: 'originalSummerValley' as ImageKey,
          imageAlt: 'Elferhütte overlooking the Stubai Valley in summer',
        },
        {
          title: 'Winter panorama on the Elfer',
          text: 'The hut above cloud layers with the snowy mountain chain behind it.',
          imageKey: 'originalWinterWide' as ImageKey,
          imageAlt: 'Wide winter panorama with Elferhütte and snowy peaks',
        },
        {
          title: 'Evening atmosphere',
          text: 'At dusk, Elferhütte shows the calm mountain character many guests remember.',
          imageKey: 'originalEveningLight' as ImageKey,
          imageAlt: 'Elferhütte glowing in blue evening light',
        },
        {
          title: 'Classic valley view',
          text: 'A signature image from the earlier website with the hut above Neustift.',
          imageKey: 'originalVintageTalblick' as ImageKey,
          imageAlt: 'Historic valley view featuring Elferhütte',
        },
      ],
    },
    hospitality: {
      label: 'Hospitality',
      title: 'Arrive well. Eat well. Stay awhile.',
      text:
        'After hours in the mountains, simple things done well matter most. At Elferhütte, a warm welcome, honest cooking and dependable product quality come together - one reason many guests return year after year.',
      points: ['For a pause along the way', 'For stories after the tour', 'For good food with a grand view'],
      note: 'For current opening hours, offers and group enquiries, please get in touch with us.',
      imageKey: 'originalSummerWide' as ImageKey,
      imageAlt: 'Elferhütte on a clear summer day',
    },
    stay: {
      label: 'Stay overnight',
      title: 'A night closer to the sky.',
      text:
        'An overnight stay in the mountains turns an outing into an experience. Send us your preferred date and we will gladly let you know about the current options.',
      points: ['Perfect for multi-day mountain tours', 'Simple direct enquiries', 'A mountain morning included'],
      primary: 'Enquire about an overnight stay',
      imageAlt: 'Sleeping room at Elferhütte',
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
    },
    contact: {
      label: 'Contact',
      title: 'We look forward to welcoming you.',
      text:
        'Planning a mountain day, a stop for food or an overnight stay? Contact us directly.',
      phoneText: 'Phone',
      emailText: 'Email',
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
      { href: '#momenti', label: 'Momenti' },
      { href: '#ospitalita', label: 'Ospitalità' },
      { href: '#pernottamento', label: 'Pernottamento' },
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
          imageKey: 'summerRidge' as ImageKey,
          imageAlt: 'Paesaggio roccioso estivo nella Valle dello Stubai',
        },
        {
          title: 'Inverno con vista',
          text:
            'Quando i pendii diventano bianchi, l’Elfer mostra il suo lato tranquillo: aria fresca, sentieri innevati e un panorama che va ben oltre la valle.',
          imageKey: 'winterHut' as ImageKey,
          imageAlt: 'Elferhütte immersa nella neve invernale',
        },
        {
          title: 'Una montagna di possibilità',
          text:
            'L’Elfer invita a camminare, osservare e respirare. Vivete la natura con rispetto e scoprite un luogo che resta nel cuore.',
          imageKey: 'alpineRidge' as ImageKey,
          imageAlt: 'Cime e pendii verdi vicino all’Elferhütte',
        },
      ],
    },
    moments: {
      label: 'Dalla homepage originale',
      title: 'Momenti storici dell’Elferhütte, in una veste nuova.',
      text:
        'Già il sito originale metteva al centro escursioni, salute e forma fisica. Questo spirito resta: movimento in montagna, grande panorama, cucina sincera e qualità apprezzata da tanti ospiti abituali.',
      quote: '«La vostra salute e la vostra forma fisica influenzano ogni aspetto della vita.»',
      cards: [
        {
          title: 'Estate sopra la valle',
          text: 'Una vista classica sullo Stubaital dal pianoro del rifugio.',
          imageKey: 'originalSummerValley' as ImageKey,
          imageAlt: 'Elferhütte con vista estiva sulla Valle dello Stubai',
        },
        {
          title: 'Panorama invernale sull’Elfer',
          text: 'Il rifugio sopra le nuvole con la catena innevata sullo sfondo.',
          imageKey: 'originalWinterWide' as ImageKey,
          imageAlt: 'Ampio panorama invernale con Elferhütte e montagne innevate',
        },
        {
          title: 'Atmosfera serale',
          text: 'Al calare della sera, l’Elferhütte mostra il suo lato più tranquillo e suggestivo.',
          imageKey: 'originalEveningLight' as ImageKey,
          imageAlt: 'Elferhütte illuminata nella luce blu della sera',
        },
        {
          title: 'Vista classica sulla valle',
          text: 'Un’immagine simbolo del vecchio sito: il rifugio sopra Neustift con grande profondità di paesaggio.',
          imageKey: 'originalVintageTalblick' as ImageKey,
          imageAlt: 'Vista storica sulla valle con Elferhütte',
        },
      ],
    },
    hospitality: {
      label: 'Ospitalità',
      title: 'Arrivare bene. Mangiare bene. Restare volentieri.',
      text:
        'Dopo ore in montagna, contano le cose semplici fatte bene. All’Elferhütte si incontrano accoglienza calorosa, cucina genuina e qualità costante dei prodotti - proprio ciò che tanti ospiti abituali apprezzano da anni.',
      points: ['Per una pausa lungo il cammino', 'Per raccontarsi dopo l’escursione', 'Per il gusto con vista grandiosa'],
      note: 'Per gli orari di apertura aggiornati, le offerte e le richieste per gruppi, contattateci direttamente.',
      imageKey: 'originalSummerWide' as ImageKey,
      imageAlt: 'Elferhütte in una limpida giornata estiva',
    },
    stay: {
      label: 'Pernottamento',
      title: 'Una notte più vicini al cielo.',
      text:
        'Pernottare in montagna trasforma una gita in un’esperienza. Inviateci la data desiderata: saremo lieti di informarvi sulle possibilità attuali.',
      points: ['Ideale per tour di più giorni', 'Richieste dirette e semplici', 'Mattino in montagna incluso'],
      primary: 'Richiedi un pernottamento',
      imageAlt: 'Dormitorio dell’Elferhütte',
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
    },
    contact: {
      label: 'Contatto',
      title: 'Non vediamo l’ora di accogliervi.',
      text:
        'State programmando una giornata in montagna, una sosta al rifugio o un pernottamento? Contattateci direttamente.',
      phoneText: 'Telefono',
      emailText: 'E-mail',
      footer: 'Elferhütte · 2.080 m · Neustift nella Valle dello Stubai',
    },
  },
} as const;

export { contact };
