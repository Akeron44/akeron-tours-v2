import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    tours: 'Tours',
    reviews: 'Reviews',
    contact: 'Contact',

    // Hero Section
    discoverAlbania: 'Discover Albania',
    heroDescription:
      "Experience authentic adventures through Albania's stunning landscapes, rich history, and vibrant culture with expert local guides.",
    exploreTours: 'Explore Tours',
    contactUs: 'Contact Us',

    // About Section
    welcomeToAkeronTours: 'Welcome to Akeron Tours',
    aboutDescription1:
      "For over a decade, we've been sharing Albania's best-kept secrets with travelers from around the world. Our passionate local guides bring you authentic experiences that go beyond typical tourist trails.",
    aboutDescription2:
      'From the pristine beaches of the Albanian Riviera to the rugged peaks of the Accursed Mountains, we craft unforgettable journeys that showcase the true spirit of Albania.',
    aboutDescription3:
      'Join us for an adventure where every moment tells a story, and every destination reveals the authentic beauty of our beloved homeland.',
    uniqueTours: 'Unique Tours',
    uniqueToursDesc: 'Carefully curated experiences across Albania',
    yearsExperience: 'Years Experience',
    yearsExperienceDesc: 'Decade of expertise in Albanian tourism',
    happyTravelers: 'Happy Travelers',
    happyTravelersDesc: 'Satisfied customers from around the world',

    // Common
    learnMore: 'Learn More',
    viewAllTours: 'View All Tours',
    days: 'Days',
    day: 'Day',
    halfDay: 'Half Day',

    // Tours
    featuredTours: 'Featured Tours',
    allTours: 'All Tours',
    tourNotFound: 'Tour Not Found',
    backToTours: 'Back to Tours',
    featuredToursDescription:
      "Choose from our carefully selected tours that showcase the best of Albania's natural beauty, rich history, and vibrant culture.",
    allToursDescription:
      "Discover all 12 of our carefully curated tours that showcase the best of Albania's natural beauty, rich history, and vibrant culture.",

    // Categories
    beach: 'Beach',
    nature: 'Nature',
    historical: 'Historical',
    cultural: 'Cultural',

    // Reviews Section
    whatOurTravelersSay: 'What Our Travelers Say',
    reviewsDescription:
      "Don't just take our word for it. Here's what our guests from around the world have to say about their Albanian adventures.",
    trustedByTravelers: 'Trusted by 500+ travelers',

    // Contact Section
    planYourAlbanianAdventure: 'Plan Your Albanian Adventure',
    contactDescription:
      "Ready to explore Albania? Get in touch with us and let's create an unforgettable journey tailored just for you.",
    sendUsAMessage: 'Send Us a Message',
    getInTouch: 'Get in Touch',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    message: 'Message',
    sendMessage: 'Send Message',
    officeLocation: 'Office Location',
    phone: 'Phone',
    email: 'Email',
    officeHours: 'Office Hours',
    officeHoursTime:
      'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
    ourTourDestinations: 'Our Tour Destinations',
    interactiveMapDescription:
      'Interactive map showing all\n12 tour destinations across Albania',
    yourFullName: 'Your full name',
    yourEmail: 'your.email@example.com',
    yourPhone: '+1 (555) 123-4567',
    messageIdeal: 'Tell us about your ideal Albanian adventure...',
    messageSent: 'Message Sent!',
    messageThankYou:
      "Thank you for your interest. We'll get back to you within 24 hours.",

    // Footer
    discoverAuthentic:
      'Discover authentic Albanian adventures with expert local guides. Experience the true spirit of our beautiful homeland.',
    quickLinks: 'Quick Links',
    tourTypes: 'Tour Types',
    historicalTours: 'Historical Tours',
    culturalExperiences: 'Cultural Experiences',
    natureAdventures: 'Nature Adventures',
    beachEscapes: 'Beach Escapes',
    mountainTreks: 'Mountain Treks',
    contactInfo: 'Contact Info',
    footerAddress: 'Rruga Dëshmorët e 4 Shkurtit\nTirana 1001, Albania',
    footerCopyright:
      '© 2024 Akeron Tours Albania. All rights reserved. | Crafted with ❤️ for authentic Albanian adventures',

    // Tour Details
    overview: 'Overview',
    tourHighlights: 'Tour Highlights',
    dayByDayItinerary: 'Day by Day Itinerary',
    tourRoute: 'Tour Route',
    interactiveMapComing: 'Interactive map coming soon',
    trackDailyRoute: 'Track the daily route and destinations',
    perPerson: 'per person',
    duration: 'Duration',
    groupSize: 'Group Size',
    difficulty: 'Difficulty',
    bookThisTour: 'Book This Tour',
    contactForCustom: 'Contact for Custom Tour',
    whatsIncluded: "What's Included",
    notIncluded: 'Not Included',
    returnHome: 'Return Home',

    // Difficulty levels
    easy: 'Easy',
    moderate: 'Moderate',
    challenging: 'Challenging',

    // Tour Titles and Descriptions
    'Albanian Riviera Beach Paradise': 'Albanian Riviera Beach Paradise',
    albanianRivieraDesc:
      'Embark on an 8-day journey through Albania’s rich past and vibrant present. From ancient ruins and UNESCO World Heritage cities to sparkling coastlines and traditional villages, this tour offers a perfect blend of history, culture, and natural beauty. Discover a land of contrasts and stories waiting to be told.',
    accursedMountainsDesc:
      "Trek through dramatic peaks, glacial lakes, and traditional villages in Albania's most spectacular mountain range.",
    'Berat Historical Heritage': 'Berat Historical Heritage',
    beratDesc:
      "Explore the UNESCO World Heritage city of Berat, known as the 'City of a Thousand Windows'.",
    'Gjirokastër Stone City': 'Gjirokastër Stone City',
    gjirokastraDesc:
      'Step back in time in this Ottoman-era stone city with its impressive castle and traditional architecture.',
    'Theth National Park Trek': 'Theth National Park Trek',
    thethDesc:
      'Immerse yourself in pristine nature, waterfalls, and traditional mountain hospitality in Theth village.',
    'Tirana Cultural Experience': 'Tirana Cultural Experience',
    tiranaDesc:
      "Discover Albania's vibrant capital with its colorful buildings, museums, and bustling Blloku district.",
    'Shkodër Lake Adventure': 'Shkodër Lake Adventure',
    shkodraDesc:
      'Explore the largest lake in the Balkans, visit traditional fishing villages and enjoy water activities.',
    'Krujë Historical Tour': 'Krujë Historical Tour',
    krujaDesc:
      "Visit the birthplace of Albania's national hero Skanderbeg and explore the medieval castle and old bazaar.",
    'Butrint Archaeological Wonder': 'Butrint Archaeological Wonder',
    butrintDesc:
      "Discover one of Albania's most important archaeological sites, a UNESCO World Heritage treasure.",
    'Valbona Valley Paradise': 'Valbona Valley Paradise',
    valbonaDesc:
      'Hike through pristine alpine landscapes and stay in traditional guesthouses in this remote valley.',
    'Ksamil Islands Paradise': 'Ksamil Islands Paradise',
    ksamilDesc:
      'Relax on pristine beaches and explore the beautiful small islands of the Albanian Riviera.',
    'Dajti Mountain Cable Car': 'Dajti Mountain Cable Car',
    dajtiDesc:
      'Take the cable car to Dajti Mountain for panoramic views of Tirana and enjoy outdoor activities.',
  },
  fr: {
    // Header
    home: 'Accueil',
    about: 'À propos',
    tours: 'Circuits',
    reviews: 'Avis',
    contact: 'Contact',

    // Hero Section
    discoverAlbania: "Découvrez l'Albanie",
    heroDescription:
      "Vivez des aventures authentiques à travers les paysages époustouflants, la riche histoire et la culture vibrante de l'Albanie avec des guides locaux experts.",
    exploreTours: 'Explorer les Circuits',
    contactUs: 'Nous Contacter',

    // About Section
    welcomeToAkeronTours: 'Bienvenue chez Akeron Tours',
    aboutDescription1:
      "Depuis plus d'une décennie, nous partageons les secrets les mieux gardés de l'Albanie avec des voyageurs du monde entier. Nos guides locaux passionnés vous apportent des expériences authentiques qui vont au-delà des sentiers touristiques typiques.",
    aboutDescription2:
      "Des plages immaculées de la Riviera albanaise aux pics escarpés des Montagnes Maudites, nous créons des voyages inoubliables qui mettent en valeur le véritable esprit de l'Albanie.",
    aboutDescription3:
      'Rejoignez-nous pour une aventure où chaque moment raconte une histoire, et chaque destination révèle la beauté authentique de notre patrie bien-aimée.',
    uniqueTours: 'Circuits Uniques',
    uniqueToursDesc:
      "Expériences soigneusement sélectionnées à travers l'Albanie",
    yearsExperience: "Années d'Expérience",
    yearsExperienceDesc: "Une décennie d'expertise dans le tourisme albanais",
    happyTravelers: 'Voyageurs Satisfaits',
    happyTravelersDesc: 'Clients satisfaits du monde entier',

    // Common
    learnMore: 'En savoir plus',
    viewAllTours: 'Voir tous les circuits',
    days: 'Jours',
    day: 'Jour',
    halfDay: 'Demi-journée',

    // Tours
    featuredTours: 'Circuits en vedette',
    allTours: 'Tous les circuits',
    tourNotFound: 'Circuit non trouvé',
    backToTours: 'Retour aux circuits',
    featuredToursDescription:
      "Choisissez parmi nos circuits soigneusement sélectionnés qui mettent en valeur le meilleur de la beauté naturelle, de la riche histoire et de la culture vibrante de l'Albanie.",
    allToursDescription:
      "Découvrez nos 12 circuits soigneusement organisés qui mettent en valeur le meilleur de la beauté naturelle, de la riche histoire et de la culture vibrante de l'Albanie.",

    // Categories
    beach: 'Plage',
    nature: 'Nature',
    historical: 'Historique',
    cultural: 'Culturel',

    // Reviews Section
    whatOurTravelersSay: 'Ce que disent nos voyageurs',
    reviewsDescription:
      'Ne nous croyez pas sur parole. Voici ce que nos clients du monde entier ont à dire sur leurs aventures albanaises.',
    trustedByTravelers: 'Approuvé par plus de 500 voyageurs',

    // Contact Section
    planYourAlbanianAdventure: 'Planifiez votre aventure albanaise',
    contactDescription:
      "Prêt à explorer l'Albanie ? Contactez-nous et créons ensemble un voyage inoubliable sur mesure pour vous.",
    sendUsAMessage: 'Envoyez-nous un message',
    getInTouch: 'Contactez-nous',
    fullName: 'Nom complet',
    emailAddress: 'Adresse e-mail',
    phoneNumber: 'Numéro de téléphone',
    message: 'Message',
    sendMessage: 'Envoyer le message',
    officeLocation: 'Emplacement du bureau',
    phone: 'Téléphone',
    email: 'E-mail',
    officeHours: "Heures d'ouverture",
    officeHoursTime: 'Lundi - Vendredi : 9h00 - 18h00\nSamedi : 10h00 - 16h00',
    ourTourDestinations: 'Nos destinations touristiques',
    interactiveMapDescription:
      'Carte interactive montrant toutes\nles 12 destinations touristiques en Albanie',
    yourFullName: 'Votre nom complet',
    yourEmail: 'votre.email@exemple.com',
    yourPhone: '+33 1 23 45 67 89',
    messageIdeal: 'Parlez-nous de votre aventure albanaise idéale...',
    messageSent: 'Message envoyé !',
    messageThankYou:
      'Merci pour votre intérêt. Nous vous répondrons dans les 24 heures.',

    // Footer
    discoverAuthentic:
      'Découvrez des aventures albanaises authentiques avec des guides locaux experts. Vivez le véritable esprit de notre belle patrie.',
    quickLinks: 'Liens rapides',
    tourTypes: 'Types de circuits',
    historicalTours: 'Circuits historiques',
    culturalExperiences: 'Expériences culturelles',
    natureAdventures: 'Aventures nature',
    beachEscapes: 'Escapades plage',
    mountainTreks: 'Randonnées montagne',
    contactInfo: 'Informations de contact',
    footerAddress: 'Rruga Dëshmorët e 4 Shkurtit\nTirana 1001, Albanie',
    footerCopyright:
      '© 2024 Akeron Tours Albanie. Tous droits réservés. | Créé avec ❤️ pour des aventures albanaises authentiques',

    // Tour Titles and Descriptions
    'Albanian Riviera Beach Paradise':
      'Paradis des plages de la Riviera albanaise',
    albanianRivieraDesc:
      'Découvrez des plages immaculées, des eaux cristallines et de charmants villages côtiers le long de la magnifique Riviera albanaise.',
    'Accursed Mountains Adventure': 'Aventure dans les Montagnes Maudites',
    accursedMountainsDesc:
      "Randonnez à travers des pics spectaculaires, des lacs glaciaires et des villages traditionnels dans la chaîne de montagnes la plus spectaculaire d'Albanie.",
    'Berat Historical Heritage': 'Patrimoine historique de Berat',
    beratDesc:
      "Explorez la ville du patrimoine mondial de l'UNESCO de Berat, connue sous le nom de « Ville aux mille fenêtres ».",
    'Gjirokastër Stone City': 'Ville de pierre de Gjirokastër',
    gjirokastraDesc:
      "Remontez le temps dans cette ville de pierre de l'époque ottomane avec son château impressionnant et son architecture traditionnelle.",
    'Theth National Park Trek': 'Randonnée dans le parc national de Theth',
    thethDesc:
      "Immergez-vous dans une nature pristine, des cascades et l'hospitalité traditionnelle de montagne dans le village de Theth.",
    'Tirana Cultural Experience': 'Expérience culturelle de Tirana',
    tiranaDesc:
      "Découvrez la capitale vibrante de l'Albanie avec ses bâtiments colorés, ses musées et son quartier animé de Blloku.",
    'Shkodër Lake Adventure': 'Aventure au lac de Shkodër',
    shkodraDesc:
      "Explorez le plus grand lac des Balkans, visitez des villages de pêcheurs traditionnels et profitez d'activités aquatiques.",
    'Krujë Historical Tour': 'Circuit historique de Krujë',
    krujaDesc:
      "Visitez le lieu de naissance du héros national albanais Skanderbeg et explorez le château médiéval et l'ancien bazar.",
    'Butrint Archaeological Wonder': 'Merveille archéologique de Butrint',
    butrintDesc:
      "Découvrez l'un des sites archéologiques les plus importants d'Albanie, un trésor du patrimoine mondial de l'UNESCO.",
    'Valbona Valley Paradise': 'Paradis de la vallée de Valbona',
    valbonaDesc:
      "Randonnez à travers des paysages alpins pristines et séjournez dans des maisons d'hôtes traditionnelles dans cette vallée reculée.",
    'Ksamil Islands Paradise': 'Paradis des îles de Ksamil',
    ksamilDesc:
      'Détendez-vous sur des plages immaculées et explorez les belles petites îles de la Riviera albanaise.',
    'Dajti Mountain Cable Car': 'Téléphérique du mont Dajti',
    dajtiDesc:
      "Prenez le téléphérique vers le mont Dajti pour des vues panoramiques sur Tirana et profitez d'activités de plein air.",
  },
  de: {
    // Header
    home: 'Startseite',
    about: 'Über uns',
    tours: 'Touren',
    reviews: 'Bewertungen',
    contact: 'Kontakt',

    // Hero Section
    discoverAlbania: 'Entdecken Sie Albanien',
    heroDescription:
      'Erleben Sie authentische Abenteuer durch Albaniens atemberaubende Landschaften, reiche Geschichte und lebendige Kultur mit erfahrenen lokalen Führern.',
    exploreTours: 'Touren Erkunden',
    contactUs: 'Kontakt Aufnehmen',

    // About Section
    welcomeToAkeronTours: 'Willkommen bei Akeron Tours',
    aboutDescription1:
      'Seit über einem Jahrzehnt teilen wir Albaniens bestgehütete Geheimnisse mit Reisenden aus aller Welt. Unsere leidenschaftlichen lokalen Führer bringen Ihnen authentische Erfahrungen, die über typische Touristenpfade hinausgehen.',
    aboutDescription2:
      'Von den unberührten Stränden der Albanischen Riviera bis zu den rauen Gipfeln der Verwunschenen Berge schaffen wir unvergessliche Reisen, die den wahren Geist Albaniens zeigen.',
    aboutDescription3:
      'Begleiten Sie uns auf ein Abenteuer, wo jeder Moment eine Geschichte erzählt und jedes Ziel die authentische Schönheit unserer geliebten Heimat offenbart.',
    uniqueTours: 'Einzigartige Touren',
    uniqueToursDesc: 'Sorgfältig kuratierte Erfahrungen in ganz Albanien',
    yearsExperience: 'Jahre Erfahrung',
    yearsExperienceDesc: 'Ein Jahrzehnt Expertise im albanischen Tourismus',
    happyTravelers: 'Zufriedene Reisende',
    happyTravelersDesc: 'Zufriedene Kunden aus aller Welt',

    // Common
    learnMore: 'Mehr erfahren',
    viewAllTours: 'Alle Touren anzeigen',
    days: 'Tage',
    day: 'Tag',
    halfDay: 'Halbtag',

    // Tours
    featuredTours: 'Empfohlene Touren',
    allTours: 'Alle Touren',
    tourNotFound: 'Tour nicht gefunden',
    backToTours: 'Zurück zu den Touren',
    featuredToursDescription:
      'Wählen Sie aus unseren sorgfältig ausgewählten Touren, die das Beste von Albaniens natürlicher Schönheit, reicher Geschichte und lebendiger Kultur zeigen.',
    allToursDescription:
      'Entdecken Sie alle 12 unserer sorgfältig kuratierten Touren, die das Beste von Albaniens natürlicher Schönheit, reicher Geschichte und lebendiger Kultur zeigen.',

    // Categories
    beach: 'Strand',
    nature: 'Natur',
    historical: 'Historisch',
    cultural: 'Kulturell',

    // Reviews Section
    whatOurTravelersSay: 'Was unsere Reisenden sagen',
    reviewsDescription:
      'Nehmen Sie nicht nur unser Wort dafür. Hier ist, was unsere Gäste aus aller Welt über ihre albanischen Abenteuer zu sagen haben.',
    trustedByTravelers: 'Vertraut von über 500 Reisenden',

    // Contact Section
    planYourAlbanianAdventure: 'Planen Sie Ihr albanisches Abenteuer',
    contactDescription:
      'Bereit, Albanien zu erkunden? Kontaktieren Sie uns und lassen Sie uns eine unvergessliche, maßgeschneiderte Reise für Sie erstellen.',
    sendUsAMessage: 'Senden Sie uns eine Nachricht',
    getInTouch: 'Kontakt aufnehmen',
    fullName: 'Vollständiger Name',
    emailAddress: 'E-Mail-Adresse',
    phoneNumber: 'Telefonnummer',
    message: 'Nachricht',
    sendMessage: 'Nachricht senden',
    officeLocation: 'Bürostandort',
    phone: 'Telefon',
    email: 'E-Mail',
    officeHours: 'Bürozeiten',
    officeHoursTime:
      'Montag - Freitag: 9:00 - 18:00 Uhr\nSamstag: 10:00 - 16:00 Uhr',
    ourTourDestinations: 'Unsere Tourziele',
    interactiveMapDescription:
      'Interaktive Karte mit allen\n12 Tourzielen in Albanien',
    yourFullName: 'Ihr vollständiger Name',
    yourEmail: 'ihre.email@beispiel.de',
    yourPhone: '+49 30 12345678',
    messageIdeal: 'Erzählen Sie uns von Ihrem idealen albanischen Abenteuer...',
    messageSent: 'Nachricht gesendet!',
    messageThankYou:
      'Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',

    // Footer
    discoverAuthentic:
      'Entdecken Sie authentische albanische Abenteuer mit erfahrenen lokalen Führern. Erleben Sie den wahren Geist unserer schönen Heimat.',
    quickLinks: 'Schnelle Links',
    tourTypes: 'Tourarten',
    historicalTours: 'Historische Touren',
    culturalExperiences: 'Kulturelle Erfahrungen',
    natureAdventures: 'Naturabenteuer',
    beachEscapes: 'Strandurlaub',
    mountainTreks: 'Bergwanderungen',
    contactInfo: 'Kontaktinformationen',
    footerAddress: 'Rruga Dëshmorët e 4 Shkurtit\nTirana 1001, Albanien',
    footerCopyright:
      '© 2024 Akeron Tours Albanien. Alle Rechte vorbehalten. | Mit ❤️ für authentische albanische Abenteuer erstellt',

    // Tour Titles and Descriptions
    'Albanian Riviera Beach Paradise': 'Albanische Riviera Strandparadies',
    albanianRivieraDesc:
      'Entdecken Sie unberührte Strände, kristallklares Wasser und charmante Küstendörfer entlang der atemberaubenden Albanischen Riviera.',
    'Accursed Mountains Adventure': 'Abenteuer in den Verwunschenen Bergen',
    accursedMountainsDesc:
      'Wandern Sie durch dramatische Gipfel, Gletscherseen und traditionelle Dörfer in Albaniens spektakulärster Bergkette.',
    'Berat Historical Heritage': 'Historisches Erbe von Berat',
    beratDesc:
      'Erkunden Sie die UNESCO-Welterbestadt Berat, bekannt als die „Stadt der tausend Fenster".',
    'Gjirokastër Stone City': 'Steinstadt Gjirokastër',
    gjirokastraDesc:
      'Reisen Sie zurück in der Zeit in dieser osmanischen Steinstadt mit ihrer beeindruckenden Burg und traditionellen Architektur.',
    'Theth National Park Trek': 'Nationalpark Theth Wanderung',
    thethDesc:
      'Tauchen Sie ein in unberührte Natur, Wasserfälle und traditionelle Berggastfreundschaft im Dorf Theth.',
    'Tirana Cultural Experience': 'Kulturerlebnis Tirana',
    tiranaDesc:
      'Entdecken Sie Albaniens lebendige Hauptstadt mit ihren bunten Gebäuden, Museen und dem lebhaften Blloku-Viertel.',
    'Shkodër Lake Adventure': 'Shkodra-See Abenteuer',
    shkodraDesc:
      'Erkunden Sie den größten See des Balkans, besuchen Sie traditionelle Fischerdörfer und genießen Sie Wasseraktivitäten.',
    'Krujë Historical Tour': 'Historische Tour durch Krujë',
    krujaDesc:
      'Besuchen Sie den Geburtsort von Albaniens Nationalheld Skanderbeg und erkunden Sie die mittelalterliche Burg und den alten Basar.',
    'Butrint Archaeological Wonder': 'Archäologisches Wunder Butrint',
    butrintDesc:
      'Entdecken Sie eine der wichtigsten archäologischen Stätten Albaniens, einen UNESCO-Welterbe-Schatz.',
    'Valbona Valley Paradise': 'Valbona-Tal Paradies',
    valbonaDesc:
      'Wandern Sie durch unberührte alpine Landschaften und übernachten Sie in traditionellen Gästehäusern in diesem abgelegenen Tal.',
    'Ksamil Islands Paradise': 'Ksamil-Inseln Paradies',
    ksamilDesc:
      'Entspannen Sie an unberührten Stränden und erkunden Sie die schönen kleinen Inseln der Albanischen Riviera.',
    'Dajti Mountain Cable Car': 'Dajti-Berg Seilbahn',
    dajtiDesc:
      'Nehmen Sie die Seilbahn zum Dajti-Berg für Panoramablicke auf Tirana und genießen Sie Outdoor-Aktivitäten.',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['en']] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
