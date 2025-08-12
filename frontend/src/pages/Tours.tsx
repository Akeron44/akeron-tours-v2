import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Tours = () => {
  const { t } = useLanguage();

  const tours = [
    {
      id: 1,
      titleKey: 'Albanian Riviera Beach Paradise',
      descriptionKey: 'albanianRivieraDesc',
      image:
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80',
      category: 'Beach',
      duration: '3 Days',
      price: '€299',
    },
    {
      id: 2,
      titleKey: 'Accursed Mountains Adventure',
      descriptionKey: 'accursedMountainsDesc',
      image:
        'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=600&q=80',
      category: 'Nature',
      duration: '5 Days',
      price: '€499',
    },
    {
      id: 3,
      titleKey: 'Berat Historical Heritage',
      descriptionKey: 'beratDesc',
      image:
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
      category: 'Historical',
      duration: '2 Days',
      price: '€199',
    },
    {
      id: 4,
      titleKey: 'Gjirokastër Stone City',
      descriptionKey: 'gjirokastraDesc',
      image:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
      category: 'Cultural',
      duration: '2 Days',
      price: '€199',
    },
    {
      id: 5,
      titleKey: 'Theth National Park Trek',
      descriptionKey: 'thethDesc',
      image:
        'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80',
      category: 'Nature',
      duration: '4 Days',
      price: '€399',
    },
    {
      id: 6,
      titleKey: 'Tirana Cultural Experience',
      descriptionKey: 'tiranaDesc',
      image:
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      category: 'Cultural',
      duration: '1 Day',
      price: '€99',
    },
    {
      id: 7,
      titleKey: 'Shkodër Lake Adventure',
      descriptionKey: 'shkodraDesc',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      category: 'Nature',
      duration: '2 Days',
      price: '€249',
    },
    {
      id: 8,
      titleKey: 'Krujë Historical Tour',
      descriptionKey: 'krujaDesc',
      image:
        'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=600&q=80',
      category: 'Historical',
      duration: '1 Day',
      price: '€89',
    },
    {
      id: 9,
      titleKey: 'Butrint Archaeological Wonder',
      descriptionKey: 'butrintDesc',
      image:
        'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?auto=format&fit=crop&w=600&q=80',
      category: 'Historical',
      duration: '1 Day',
      price: '€119',
    },
    {
      id: 10,
      titleKey: 'Valbona Valley Paradise',
      descriptionKey: 'valbonaDesc',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
      category: 'Nature',
      duration: '3 Days',
      price: '€329',
    },
    {
      id: 11,
      titleKey: 'Ksamil Islands Paradise',
      descriptionKey: 'ksamilDesc',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      category: 'Beach',
      duration: '2 Days',
      price: '€199',
    },
    {
      id: 12,
      titleKey: 'Dajti Mountain Cable Car',
      descriptionKey: 'dajtiDesc',
      image:
        'https://images.unsplash.com/photo-1464822759353-0bb2c2b0cfaa?auto=format&fit=crop&w=600&q=80',
      category: 'Nature',
      duration: 'Half Day',
      price: '€59',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Beach':
        return 'bg-albanian-sky text-albanian-ocean';
      case 'Nature':
        return 'bg-albanian-sage text-albanian-green';
      case 'Historical':
        return 'bg-albanian-stone text-white';
      case 'Cultural':
        return 'bg-albanian-sunset text-white';
      default:
        return 'bg-albanian-green text-white';
    }
  };

  const translateCategory = (category: string) => {
    switch (category) {
      case 'Beach':
        return t('beach');
      case 'Nature':
        return t('nature');
      case 'Historical':
        return t('historical');
      case 'Cultural':
        return t('cultural');
      default:
        return category;
    }
  };

  const formatDuration = (duration: string) => {
    if (duration === 'Half Day') return t('halfDay');
    const parts = duration.split(' ');
    if (parts.length === 2) {
      const number = parts[0];
      const unit = parts[1];
      if (unit === 'Days') return `${number} ${t('days')}`;
      if (unit === 'Day') return `${number} ${t('day')}`;
    }
    return duration;
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-b from-albanian-sage/5 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-albanian-green mb-6">
              {t('allTours')}
            </h1>
            <p className="font-inter text-lg md:text-xl text-albanian-forest max-w-2xl mx-auto">
              {t('allToursDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card
                key={tour.id}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={t(tour.titleKey)}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-inter font-medium ${getCategoryColor(tour.category)}`}
                    >
                      {translateCategory(tour.category)}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-inter font-medium bg-white/90 text-albanian-green">
                      {formatDuration(tour.duration)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm font-inter font-bold bg-albanian-green text-white">
                      {tour.price}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-xl text-albanian-green mb-3 group-hover:text-albanian-forest transition-colors">
                    {t(tour.titleKey)}
                  </h3>
                  <p className="font-inter text-albanian-forest mb-4 leading-relaxed">
                    {t(tour.descriptionKey)}
                  </p>
                  <Link to={`/tour/${tour.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-albanian-green text-albanian-green hover:bg-albanian-green hover:text-white transition-all duration-300"
                    >
                      {t('learnMore')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
