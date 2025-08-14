// import dea from '@/assets/images/dea.jpg';

export const tours = {
  '1': {
    id: 1,
    title: 'Albanian Riviera Beach Paradise',
    description:
      'Discover pristine beaches, crystal-clear waters, and charming coastal villages along the stunning Albanian Riviera.',
    longDescription:
      'Embark on an 8-day journey through Albania’s rich past and vibrant present. From ancient ruins and UNESCO World Heritage cities to sparkling coastlines and traditional villages, this tour offers a perfect blend of history, culture, and natural beauty. Discover a land of contrasts and stories waiting to be told.',
    image:
      'https://images.unsplash.com/photo-1652126631890-8fafa5c16a98?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Historical & Nature',
    duration: '8 Days',
    groupSize: '8-12 people',
    difficulty: 'Easy',
    price: '€1199',
    rating: 4.8,
    reviews: 127,
    highlights: [
      'Visit the pristine beaches of Ksamil',
      'Explore the Blue Eye natural spring',
      'Drive through Llogara National Park',
      'Traditional seafood dinner in Himara',
      'Sunset viewing at Porto Palermo Castle',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Tirana',
        description:
          'Arrive in Rinas Airport and transfer to Tirana. Spend the afternoon exploring the city and its attractions. Evening welcome dinner at a restaurant.',
        activities: ['Airport pickup', 'Tirana city tour', 'Welcome dinner'],
      },
      {
        day: 2,
        title: 'Kruje & Shkoder',
        description:
          "Morning visit to the mesmerizing Kruje Castle, the musem of our national hero Skanderbeg with an amazing view of the city. Afternoon drive to Shkoder to visit an Ottoman fortress and explore Shkoder's old town and enjoy fresh seafood.",
        activities: ['Kruje Castle', 'Shkoder Fortress', 'Shkoder old town'],
      },
      {
        day: 3,
        title: 'UNESCO World Heritage Site of Berat',
        description:
          'After breakfast, drive to Berat to visit the UNESCO World Heritage Site of Berat. Explore the old town and its attractions.',
        activities: ['Berat old town', 'Berat Castle', 'Berat Museum'],
      },
      {
        day: 4,
        title: 'Vlore',
        description:
          'After breakfast, drive to Vlore to visit the Vlore Castle and explore the old town.',
        activities: ['Vlore old town', 'Vlore Castle', 'Vlore Museum'],
      },
      {
        day: 5,
        title: 'Saranda',
        description:
          'After breakfast, drive to Saranda to visit the Saranda Castle and explore the old town.',
        activities: ['Berat old town', 'Berat Castle', 'Berat Museum'],
      },
      {
        day: 6,
        title: 'Gjirokastër',
        description:
          'After breakfast, drive to Gjirokastër to visit the Gjirokastër Castle and explore the old town.',
        activities: ['Berat old town', 'Berat Castle', 'Berat Museum'],
      },
      {
        day: 7,
        title: 'Tirana',
        description:
          'After breakfast, drive to Tirana to visit the Tirana Castle and explore the old town.',
        activities: ['Berat old town', 'Berat Castle', 'Berat Museum'],
      },
    ],
    included: [
      'Professional tour guide',
      'Transportation in comfortable vehicle',
      'Accommodation',
      'Daily breakfast',
      'Welcome and farewell dinner',
      'All entrance fees',
    ],
    notIncluded: [
      'International flights',
      'Personal expenses',
      'Travel insurance',
    ],
  },
  '2': {
    id: 2,
    title: 'Accursed Mountains Adventure',
    description:
      "Trek through dramatic peaks, glacial lakes, and traditional villages in Albania's most spectacular mountain range.",
    longDescription:
      "Embark on an epic 5-day adventure through the legendary Accursed Mountains (Bjeshkët e Namuna). This challenging trek takes you through some of Europe's last pristine wilderness areas, where ancient traditions still thrive in remote mountain villages.",
    image:
      'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=1200&q=80',
    category: 'Nature',
    duration: '5 Days',
    groupSize: '6-10 people',
    difficulty: 'Challenging',
    price: '€549',
    rating: 4.9,
    reviews: 89,
    highlights: [
      'Trek to Lake Valbona',
      'Cross the Valbona Pass',
      'Stay in traditional guesthouses',
      'Meet local mountain families',
      'Photography opportunities',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Shkodra & Transfer to Theth',
        description:
          'Meet in Shkodra and transfer to Theth village. Afternoon exploration of Theth National Park and visit to the Waterfall.',
        activities: [
          'Shkodra city tour',
          'Transfer to Theth',
          'Theth Waterfall hike',
          'Guesthouse check-in',
        ],
      },
      {
        day: 2,
        title: 'Theth to Valbona Trek',
        description:
          'Full day trek from Theth to Valbona through the spectacular mountain pass. Experience breathtaking alpine scenery.',
        activities: [
          'Early morning start',
          'Mountain pass crossing',
          'Alpine lakes',
          'Valbona arrival',
        ],
      },
      {
        day: 3,
        title: 'Valbona Valley Exploration',
        description:
          'Explore the beautiful Valbona Valley, visit local families, and learn about traditional mountain life.',
        activities: [
          'Valley hiking',
          'Local family visit',
          'Traditional lunch',
          'Photography session',
        ],
      },
      {
        day: 4,
        title: 'Valbona to Bajram Curri',
        description:
          'Morning in Valbona, then transfer to Bajram Curri. Afternoon visit to Komani Lake.',
        activities: [
          'Morning hike',
          'Transfer to Bajram Curri',
          'Komani Lake boat trip',
          'Lakeside dinner',
        ],
      },
      {
        day: 5,
        title: 'Return to Shkodra',
        description:
          'Transfer back to Shkodra with stops at scenic viewpoints. Tour concludes in Shkodra.',
        activities: [
          'Scenic transfer',
          'Photo stops',
          'Shkodra return',
          'Farewell lunch',
        ],
      },
    ],
    included: [
      'Professional mountain guide',
      '4x4 transportation',
      '4 nights mountain guesthouses',
      'All meals during trek',
      'Park entrance fees',
      'Safety equipment',
    ],
    notIncluded: [
      'Personal hiking equipment',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides',
      'Transportation to/from Shkodra',
    ],
  },
  '3': {
    id: 3,
    title: 'Berat Historical Heritage',
    description:
      "Explore the UNESCO World Heritage city of Berat, known as the 'City of a Thousand Windows'.",
    longDescription:
      'Discover the enchanting city of Berat, a UNESCO World Heritage site that has preserved its Ottoman architecture for centuries. This 2-day cultural immersion takes you through cobblestone streets, ancient churches, and traditional neighborhoods where history comes alive.',
    image:
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    category: 'Historical',
    duration: '2 Days',
    groupSize: '10-15 people',
    difficulty: 'Easy',
    price: '€189',
    rating: 4.7,
    reviews: 156,
    highlights: [
      'Explore Berat Castle (Kala)',
      'Visit Onufri National Museum',
      'Walk through Mangalem quarter',
      'Traditional Albanian dinner',
      'Wine tasting in Cobo Winery',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Berat Castle Exploration',
        description:
          'Arrive in Berat and begin with a guided tour of the historic Berat Castle. Explore the Onufri Museum with its collection of Byzantine art and enjoy panoramic views of the city.',
        activities: [
          'Berat Castle tour',
          'Onufri Museum visit',
          'Castle churches exploration',
          'Panoramic viewpoints',
        ],
      },
      {
        day: 2,
        title: 'Mangalem Quarter & Wine Tasting',
        description:
          'Morning walk through the historic Mangalem quarter with its characteristic Ottoman houses. Afternoon visit to Cobo Winery for wine tasting and traditional lunch.',
        activities: [
          'Mangalem quarter walk',
          'Traditional houses tour',
          'Cobo Winery visit',
          'Wine tasting session',
        ],
      },
    ],
    included: [
      'Professional cultural guide',
      'Transportation to/from Tirana',
      '1 night traditional guesthouse',
      'Daily breakfast',
      'Museum entrance fees',
      'Wine tasting experience',
    ],
    notIncluded: [
      'Lunches',
      'Personal expenses',
      'Additional wine purchases',
      'Travel insurance',
      'Tips for guide',
    ],
  },
  '4': {
    id: 4,
    title: 'Gjirokastër Stone City',
    description:
      'Step back in time in this Ottoman-era stone city with its impressive castle and traditional architecture.',
    longDescription:
      "Journey to the remarkable stone city of Gjirokastër, another UNESCO World Heritage site that showcases Albania's Ottoman heritage. This 2-day exploration reveals the secrets of traditional Albanian architecture and the birthplace of famous writer Ismail Kadare.",
    image:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    category: 'Cultural',
    duration: '2 Days',
    groupSize: '8-14 people',
    difficulty: 'Easy',
    price: '€199',
    rating: 4.6,
    reviews: 98,
    highlights: [
      'Explore Gjirokastër Castle',
      'Visit traditional stone houses',
      'Ismail Kadare House Museum',
      'Traditional craft workshops',
      'Local stone city architecture tour',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Castle & Old Bazaar',
        description:
          'Begin with a tour of the imposing Gjirokastër Castle and its museum. Afternoon exploration of the old bazaar and traditional stone houses with their distinctive architecture.',
        activities: [
          'Gjirokastër Castle tour',
          'Castle museum visit',
          'Old bazaar exploration',
          'Stone houses tour',
        ],
      },
      {
        day: 2,
        title: 'Cultural Heritage & Crafts',
        description:
          "Visit the Ismail Kadare House Museum and participate in traditional craft workshops. Learn about the city's cultural heritage and local traditions.",
        activities: [
          'Kadare House Museum',
          'Traditional craft workshops',
          'Cultural heritage tour',
          'Local artisan visits',
        ],
      },
    ],
    included: [
      'Expert cultural guide',
      'Transportation',
      '1 night stone house accommodation',
      'Daily breakfast',
      'All museum entries',
      'Craft workshop materials',
    ],
    notIncluded: [
      'Meals (except breakfast)',
      'Personal purchases',
      'Additional craft items',
      'Travel insurance',
      'Guide tips',
    ],
  },
  '5': {
    id: 5,
    title: 'Theth National Park Trek',
    description:
      'Immerse yourself in pristine nature, waterfalls, and traditional mountain hospitality in Theth village.',
    longDescription:
      "Experience the raw beauty of Theth National Park, hidden in the heart of the Albanian Alps. This 4-day adventure combines spectacular hiking with authentic mountain culture, offering a perfect escape into Albania's pristine wilderness.",
    image:
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1200&q=80',
    category: 'Nature',
    duration: '4 Days',
    groupSize: '6-12 people',
    difficulty: 'Moderate',
    price: '€399',
    rating: 4.8,
    reviews: 73,
    highlights: [
      'Theth Waterfall hike',
      'Blue Eye of Theth',
      'Traditional mountain guesthouses',
      'Lock-in Tower visit',
      'Alpine meadows exploration',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Waterfall Trek',
        description:
          'Travel from Shkodra to Theth village through scenic mountain roads. Afternoon hike to the spectacular Theth Waterfall and settle into traditional guesthouse.',
        activities: [
          'Scenic mountain drive',
          'Theth Waterfall hike',
          'Village orientation',
          'Guesthouse check-in',
        ],
      },
      {
        day: 2,
        title: 'Blue Eye & Village Exploration',
        description:
          'Morning hike to the mystical Blue Eye of Theth. Afternoon exploration of the village, including the historic Lock-in Tower and traditional way of life.',
        activities: [
          'Blue Eye hike',
          'Village walking tour',
          'Lock-in Tower visit',
          'Cultural interactions',
        ],
      },
      {
        day: 3,
        title: 'Alpine Meadows Adventure',
        description:
          'Full day hiking through alpine meadows and mountain peaks. Experience the untouched wilderness and enjoy a picnic lunch with panoramic views.',
        activities: [
          'Alpine meadows hike',
          'Mountain peak ascent',
          'Wilderness picnic',
          'Photography session',
        ],
      },
      {
        day: 4,
        title: 'Return Journey',
        description:
          'Morning at leisure in Theth, then return journey to Shkodra with stops at scenic viewpoints for final photos and memories.',
        activities: [
          'Free morning',
          'Scenic return drive',
          'Photo stops',
          'Shkodra arrival',
        ],
      },
    ],
    included: [
      'Mountain guide',
      '4x4 transportation',
      '3 nights guesthouse',
      'All meals',
      'Hiking equipment',
      'Park fees',
    ],
    notIncluded: [
      'Personal hiking gear',
      'Travel insurance',
      'Personal expenses',
      'Tips',
      'Transportation to Shkodra',
    ],
  },
  '6': {
    id: 6,
    title: 'Tirana Cultural Experience',
    description:
      "Discover Albania's vibrant capital with its colorful buildings, museums, and bustling Blloku district.",
    longDescription:
      'Explore the dynamic capital of Albania in this comprehensive day tour. From communist-era monuments to modern art galleries, from traditional markets to trendy cafes, discover how Tirana perfectly blends its complex history with contemporary energy.',
    image:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
    category: 'Cultural',
    duration: '1 Day',
    groupSize: '12-20 people',
    difficulty: 'Easy',
    price: '€79',
    rating: 4.5,
    reviews: 234,
    highlights: [
      'Skanderbeg Square exploration',
      'National Historical Museum',
      'Blloku district walking tour',
      'Traditional Albanian lunch',
      'Pyramid of Tirana visit',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Full Day Tirana Discovery',
        description:
          "Comprehensive walking tour of Tirana covering the main historical sites, cultural attractions, and vibrant neighborhoods. Experience the energy of Albania's capital city.",
        activities: [
          'Skanderbeg Square tour',
          'National Museum visit',
          'Blloku district walk',
          'Traditional lunch',
          'Pyramid visit',
          'Local market exploration',
        ],
      },
    ],
    included: [
      'Professional city guide',
      'Museum entrance fees',
      'Traditional Albanian lunch',
      'Walking tour',
      'Local transportation',
      'Cultural insights',
    ],
    notIncluded: [
      'Hotel pickup/drop-off',
      'Personal expenses',
      'Additional meals',
      'Souvenirs',
      'Tips for guide',
    ],
  },
};
