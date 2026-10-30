import type { Locale } from './site';

export const legalSlugs: Record<Locale, string> = {
  de: 'impressum',
  en: 'legal-notice',
  it: 'note-legali',
};

export const privacyAnchors: Record<Locale, string> = {
  de: 'datenschutz',
  en: 'privacy',
  it: 'privacy',
};

export const legalOwner = {
  name: 'Fritz Haas',
  business: 'Elferhütte',
  street: 'Elferhütte 294',
  city: 'A-6167 Neustift im Stubaital',
  country: { de: 'Österreich', en: 'Austria', it: 'Austria' } as Record<Locale, string>,
};

type Block = { heading: string; paragraphs?: string[]; list?: string[] };

type LegalContent = {
  meta: { title: string; description: string };
  back: string;
  footerImprint: string;
  footerPrivacy: string;
  imprint: {
    title: string;
    intro: string;
    labels: {
      owner: string;
      phone: string;
      email: string;
      vat: string;
      purpose: string;
      authority: string;
      chamber: string;
      law: string;
    };
    values: { purpose: string; authority: string; chamber: string; law: string };
    blocks: Block[];
  };
  privacy: { title: string; updated: string; blocks: Block[] };
};

const vercel =
  'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA';
const google = 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland';
const dsb = 'Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, www.dsb.gv.at';

export const legalContent: Record<Locale, LegalContent> = {
  de: {
    meta: {
      title: 'Impressum & Datenschutz | Elferhütte',
      description: 'Impressum und Datenschutzerklärung der Elferhütte, Elferhütte 294, 6167 Neustift im Stubaital.',
    },
    back: 'Zurück zur Startseite',
    footerImprint: 'Impressum',
    footerPrivacy: 'Datenschutz',
    imprint: {
      title: 'Impressum',
      intro: 'Informationen gemäß § 5 E-Commerce-Gesetz (ECG), § 63 Gewerbeordnung und Offenlegung gemäß § 25 Mediengesetz.',
      labels: {
        owner: 'Medieninhaber & Betreiber',
        phone: 'Telefon',
        email: 'E-Mail',
        vat: 'UID-Nummer',
        purpose: 'Unternehmensgegenstand',
        authority: 'Gewerbebehörde',
        chamber: 'Kammerzugehörigkeit',
        law: 'Anwendbare Rechtsvorschriften',
      },
      values: {
        purpose: 'Gastgewerbe – Berghütte mit Restaurant und Übernachtung',
        authority: 'Bezirkshauptmannschaft Innsbruck',
        chamber: 'Wirtschaftskammer Tirol, Sparte Tourismus und Freizeitwirtschaft',
        law: 'Gewerbeordnung (GewO), abrufbar unter www.ris.bka.gv.at',
      },
      blocks: [
        {
          heading: 'Blattlinie',
          paragraphs: [
            'Diese Website informiert über die Elferhütte, ihr gastronomisches Angebot, die Übernachtungsmöglichkeiten sowie Wanderungen und Ausflüge rund um den Elfer im Stubaital.',
          ],
        },
        {
          heading: 'Haftung für Inhalte und Links',
          paragraphs: [
            'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität – insbesondere von Preisen und Öffnungszeiten – können wir dennoch keine Gewähr übernehmen. Für die Inhalte verlinkter externer Websites sind ausschließlich deren Betreiber verantwortlich.',
          ],
        },
        {
          heading: 'Urheberrecht',
          paragraphs: [
            'Texte, Fotos und Grafiken dieser Website sind urheberrechtlich geschützt. Jede Verwendung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      updated: 'Stand: Oktober 2026',
      blocks: [
        {
          heading: '1. Verantwortlicher',
          paragraphs: [
            'Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist Fritz Haas, Elferhütte, Elferhütte 294, 6167 Neustift im Stubaital, Österreich, E-Mail: haas@elferhuette.at, Telefon: +43 5226 2818.',
            'Der Schutz Ihrer Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten ausschließlich auf Grundlage der Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG).',
          ],
        },
        {
          heading: '2. Hosting und Server-Logfiles',
          paragraphs: [
            `Diese Website wird bei ${vercel} gehostet. Beim Aufruf der Website werden automatisch technische Daten verarbeitet, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser und Betriebssystem.`,
            'Diese Daten sind technisch notwendig, um die Website auszuliefern und ihre Sicherheit und Stabilität zu gewährleisten (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Sie werden nicht mit anderen Daten zusammengeführt und nach kurzer Zeit automatisch gelöscht. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert; zusätzlich bestehen EU-Standardvertragsklauseln.',
          ],
        },
        {
          heading: '3. Cookies, Analyse und Tracking',
          paragraphs: [
            'Diese Website setzt keine Cookies, verwendet keine Analyse- oder Tracking-Werkzeuge und lädt keine Schriften oder Skripte von Drittanbietern.',
          ],
        },
        {
          heading: '4. Kontakt per E-Mail oder Telefon',
          paragraphs: [
            'Wenn Sie uns per E-Mail oder Telefon kontaktieren, etwa für eine Reservierung, verarbeiten wir Ihre Angaben (Name, Kontaktdaten, Anfrage, Aufenthaltsdaten) zur Bearbeitung Ihrer Anfrage und zur Durchführung des Aufenthalts (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr benötigt werden, sofern keine gesetzlichen Aufbewahrungspflichten (z. B. steuer- und meldegesetzliche Pflichten) bestehen.',
          ],
        },
        {
          heading: '5. Google Maps',
          paragraphs: [
            `Die Karte im Bereich „Anreise" wird erst geladen, wenn Sie aktiv auf „Karte laden" klicken. Erst dann wird eine Verbindung zu Google Maps (${google}) hergestellt; dabei werden insbesondere Ihre IP-Adresse und technische Daten an Google übermittelt, unter Umständen auch an Server in den USA. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch das Laden der Karte erteilen und jederzeit für die Zukunft widerrufen können, indem Sie die Seite neu laden. Google ist unter dem EU-US Data Privacy Framework zertifiziert. Details: policies.google.com/privacy.`,
          ],
        },
        {
          heading: '6. Ihre Rechte',
          paragraphs: [
            'Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu (Art. 15–21 DSGVO). Wenden Sie sich dazu einfach an haas@elferhuette.at.',
            `Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren: ${dsb}.`,
          ],
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'Legal notice & privacy | Elferhütte',
      description: 'Legal notice (Impressum) and privacy policy of the Elferhütte, Elferhütte 294, 6167 Neustift im Stubaital, Austria.',
    },
    back: 'Back to the homepage',
    footerImprint: 'Legal notice',
    footerPrivacy: 'Privacy',
    imprint: {
      title: 'Legal notice',
      intro: 'Information pursuant to § 5 Austrian E-Commerce Act (ECG), § 63 Austrian Trade Act and disclosure pursuant to § 25 Austrian Media Act.',
      labels: {
        owner: 'Owner & operator',
        phone: 'Phone',
        email: 'Email',
        vat: 'VAT ID',
        purpose: 'Business activity',
        authority: 'Supervisory authority',
        chamber: 'Chamber membership',
        law: 'Applicable regulations',
      },
      values: {
        purpose: 'Hospitality – mountain hut with restaurant and accommodation',
        authority: 'Bezirkshauptmannschaft Innsbruck (district authority)',
        chamber: 'Wirtschaftskammer Tirol (Tyrolean Chamber of Commerce), tourism and leisure division',
        law: 'Austrian Trade Act (Gewerbeordnung, GewO), available at www.ris.bka.gv.at',
      },
      blocks: [
        {
          heading: 'Editorial policy',
          paragraphs: [
            'This website provides information about the Elferhütte, its restaurant, accommodation and the hikes and excursions around the Elfer in the Stubai Valley.',
          ],
        },
        {
          heading: 'Liability for content and links',
          paragraphs: [
            'The content of this website has been prepared with great care. We cannot, however, guarantee that it is correct, complete or up to date – particularly prices and opening times. The operators of linked external websites are solely responsible for their content.',
          ],
        },
        {
          heading: 'Copyright',
          paragraphs: [
            'Texts, photos and graphics on this website are protected by copyright. Any use beyond the limits of copyright law requires prior written consent.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      updated: 'Last updated: October 2026',
      blocks: [
        {
          heading: '1. Controller',
          paragraphs: [
            'The controller responsible for processing personal data on this website is Fritz Haas, Elferhütte, Elferhütte 294, 6167 Neustift im Stubaital, Austria, email: haas@elferhuette.at, phone: +43 5226 2818.',
            'We process personal data only in accordance with the General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG).',
          ],
        },
        {
          heading: '2. Hosting and server log files',
          paragraphs: [
            `This website is hosted by ${vercel}. When you visit the website, technical data sent by your browser is processed automatically: IP address, date and time of access, page requested, referrer URL, browser and operating system.`,
            'This data is technically necessary to deliver the website and to ensure its security and stability (legitimate interest, Art. 6(1)(f) GDPR). It is not combined with other data and is deleted automatically after a short period. Vercel is certified under the EU-US Data Privacy Framework; EU standard contractual clauses are also in place.',
          ],
        },
        {
          heading: '3. Cookies, analytics and tracking',
          paragraphs: [
            'This website does not set cookies, does not use analytics or tracking tools and does not load fonts or scripts from third parties.',
          ],
        },
        {
          heading: '4. Contact by email or phone',
          paragraphs: [
            'If you contact us by email or phone, for example to make a reservation, we process your details (name, contact details, request, dates of stay) to handle your request and your stay (Art. 6(1)(b) GDPR). The data is deleted once it is no longer needed, unless statutory retention obligations (e.g. tax and registration law) apply.',
          ],
        },
        {
          heading: '5. Google Maps',
          paragraphs: [
            `The map in the "Getting here" section is only loaded when you actively click "Load map". Only then is a connection made to Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland), transmitting in particular your IP address and technical data to Google, possibly also to servers in the USA. The legal basis is your consent (Art. 6(1)(a) GDPR), given by loading the map; you can withdraw it for the future at any time by reloading the page. Google is certified under the EU-US Data Privacy Framework. Details: policies.google.com/privacy.`,
          ],
        },
        {
          heading: '6. Your rights',
          paragraphs: [
            'You have the right of access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR). Simply contact haas@elferhuette.at.',
            'If you believe that the processing of your data violates data protection law, you can lodge a complaint with the supervisory authority: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Vienna, Austria, www.dsb.gv.at.',
          ],
        },
      ],
    },
  },
  it: {
    meta: {
      title: 'Note legali e privacy | Elferhütte',
      description: "Note legali (Impressum) e informativa sulla privacy dell'Elferhütte, Elferhütte 294, 6167 Neustift im Stubaital, Austria.",
    },
    back: 'Torna alla homepage',
    footerImprint: 'Note legali',
    footerPrivacy: 'Privacy',
    imprint: {
      title: 'Note legali',
      intro: "Informazioni ai sensi del § 5 della legge austriaca sul commercio elettronico (ECG), del § 63 dell'ordinamento austriaco delle attività commerciali e del § 25 della legge austriaca sui media.",
      labels: {
        owner: 'Titolare e gestore',
        phone: 'Telefono',
        email: 'E-mail',
        vat: 'Partita IVA',
        purpose: 'Attività',
        authority: 'Autorità di vigilanza',
        chamber: 'Camera di commercio',
        law: 'Normativa applicabile',
      },
      values: {
        purpose: 'Settore alberghiero e della ristorazione – rifugio con ristorante e pernottamento',
        authority: 'Bezirkshauptmannschaft Innsbruck (autorità distrettuale)',
        chamber: 'Wirtschaftskammer Tirol (Camera di commercio del Tirolo), sezione turismo e tempo libero',
        law: 'Ordinamento austriaco delle attività commerciali (Gewerbeordnung, GewO), consultabile su www.ris.bka.gv.at',
      },
      blocks: [
        {
          heading: 'Linea editoriale',
          paragraphs: [
            "Questo sito informa sull'Elferhütte, sul suo ristorante, sulle possibilità di pernottamento e sulle escursioni intorno all'Elfer nella Valle dello Stubai.",
          ],
        },
        {
          heading: 'Responsabilità per contenuti e link',
          paragraphs: [
            "I contenuti di questo sito sono stati redatti con la massima cura. Non possiamo tuttavia garantirne la correttezza, la completezza e l'attualità, in particolare per prezzi e orari di apertura. Dei contenuti dei siti esterni collegati sono responsabili esclusivamente i rispettivi gestori.",
          ],
        },
        {
          heading: "Diritto d'autore",
          paragraphs: [
            "Testi, foto e grafiche di questo sito sono protetti dal diritto d'autore. Qualsiasi utilizzo al di fuori dei limiti consentiti richiede il previo consenso scritto.",
          ],
        },
      ],
    },
    privacy: {
      title: 'Informativa sulla privacy',
      updated: 'Aggiornamento: ottobre 2026',
      blocks: [
        {
          heading: '1. Titolare del trattamento',
          paragraphs: [
            'Il titolare del trattamento dei dati personali su questo sito è Fritz Haas, Elferhütte, Elferhütte 294, 6167 Neustift im Stubaital, Austria, e-mail: haas@elferhuette.at, telefono: +43 5226 2818.',
            'Trattiamo i dati personali esclusivamente nel rispetto del Regolamento generale sulla protezione dei dati (GDPR) e della legge austriaca sulla protezione dei dati (DSG).',
          ],
        },
        {
          heading: '2. Hosting e file di log del server',
          paragraphs: [
            `Questo sito è ospitato da ${vercel}. Quando visitate il sito vengono trattati automaticamente i dati tecnici trasmessi dal browser: indirizzo IP, data e ora di accesso, pagina richiesta, URL di provenienza, browser e sistema operativo.`,
            "Questi dati sono tecnicamente necessari per fornire il sito e garantirne la sicurezza e la stabilità (legittimo interesse, art. 6, par. 1, lett. f GDPR). Non vengono combinati con altri dati e sono cancellati automaticamente dopo breve tempo. Vercel è certificata ai sensi dell'EU-US Data Privacy Framework; sono inoltre in vigore le clausole contrattuali standard dell'UE.",
          ],
        },
        {
          heading: '3. Cookie, analisi e tracciamento',
          paragraphs: [
            'Questo sito non utilizza cookie né strumenti di analisi o tracciamento e non carica font o script di terze parti.',
          ],
        },
        {
          heading: '4. Contatto via e-mail o telefono',
          paragraphs: [
            "Se ci contattate via e-mail o telefono, ad esempio per una prenotazione, trattiamo i vostri dati (nome, recapiti, richiesta, date del soggiorno) per gestire la richiesta e il soggiorno (art. 6, par. 1, lett. b GDPR). I dati vengono cancellati quando non sono più necessari, salvo obblighi di conservazione previsti dalla legge (ad es. fiscali e di registrazione).",
          ],
        },
        {
          heading: '5. Google Maps',
          paragraphs: [
            "La mappa nella sezione «Come arrivare» viene caricata solo se cliccate attivamente su «Carica mappa». Solo allora viene stabilita una connessione con Google Maps (Google Ireland Limited, Gordon House, Barrow Street, Dublino 4, Irlanda), trasmettendo in particolare il vostro indirizzo IP e dati tecnici a Google, eventualmente anche a server negli Stati Uniti. La base giuridica è il vostro consenso (art. 6, par. 1, lett. a GDPR), espresso caricando la mappa e revocabile in qualsiasi momento per il futuro ricaricando la pagina. Google è certificata ai sensi dell'EU-US Data Privacy Framework. Dettagli: policies.google.com/privacy.",
          ],
        },
        {
          heading: '6. I vostri diritti',
          paragraphs: [
            "Avete il diritto di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione (artt. 15–21 GDPR). Basta scrivere a haas@elferhuette.at.",
            "Se ritenete che il trattamento dei vostri dati violi la normativa sulla protezione dei dati, potete presentare reclamo all'autorità di controllo: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Vienna, Austria, www.dsb.gv.at.",
          ],
        },
      ],
    },
  },
};
