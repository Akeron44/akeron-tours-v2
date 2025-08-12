import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import berat from '@/assets/images/berat.jpg';
import gjirokaster from '@/assets/images/gjirokaster.jpg';
import boville from '@/assets/images/boville.jpg';
import sheshi from '@/assets/images/sheshi.jpg';
import dea from '@/assets/images/dea.jpg';
import theth from '@/assets/images/theth.jpg';

const ToursSection = () => {
  const { t } = useLanguage();

  const tours = [
    {
      id: 1,
      titleKey: 'Timeless Albania – North to South Discovery',
      descriptionKey: 'albanianRivieraDesc',
      image: dea,
      category: 'Historical & Nature',
      duration: '7 Days',
    },
    {
      id: 2,
      titleKey: 'Accursed Mountains Adventure',
      descriptionKey: 'accursedMountainsDesc',
      image: boville,
      category: 'Nature',
      duration: '5 Days',
    },
    {
      id: 3,
      titleKey: 'Berat Historical Heritage',
      descriptionKey: 'beratDesc',
      image: berat,
      category: 'Historical',
      duration: '2 Days',
    },
    {
      id: 4,
      titleKey: 'Gjirokastër Stone City',
      descriptionKey: 'gjirokastraDesc',
      image: gjirokaster,
      category: 'Cultural',
      duration: '2 Days',
    },
    {
      id: 5,
      titleKey: 'Theth National Park Trek',
      descriptionKey: 'thethDesc',
      image: theth,
      category: 'Nature',
      duration: '4 Days',
    },
    {
      id: 6,
      titleKey: 'Tirana Cultural Experience',
      descriptionKey: 'tiranaDesc',
      image: sheshi,
      category: 'Cultural',
      duration: '1 Day',
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
    <section
      id="tours"
      className="py-20 bg-gradient-to-b from-albanian-sage/5 to-white"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-albanian-green mb-6 animate-fade-in">
            {t('featuredTours')}
          </h2>
          <p className="font-inter text-lg md:text-xl text-albanian-forest max-w-2xl mx-auto animate-slide-in-left">
            {t('featuredToursDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card
              key={tour.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-0 overflow-hidden bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={tour.image}
                  alt={t(tour.titleKey)}
                  className="w-full group-hover:scale-110 transition-transform duration-300 sharp-image"
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

        <div className="text-center mt-12">
          <Link to="/tours">
            <Button
              size="lg"
              className="bg-albanian-green hover:bg-albanian-forest text-white px-8 py-4 text-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('viewAllTours')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
