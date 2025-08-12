import { ArrowLeft, Calendar, Star, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { tours } from '@/constants/tourdetails';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const { tourId } = useParams();
  const tour = tours[tourId as keyof typeof tours];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Historical & Nature':
        return 'bg-albanian-green text-white';
      case 'Nature':
        return 'bg-albanian-sage text-albanian-green';
      case 'Historical':
        return 'bg-albanian-stone text-white';
      case 'Cultural':
        return 'bg-albanian-sky text-albanian-ocean';
    }
  };
  return (
    <section className="relative h-96 overflow-hidden">
      <img
        src={tour.image}
        alt={t(tour.title)}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-white mb-4 hover:text-albanian-sage transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToTours')}
          </Link>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-4">
            {t(tour.title)}
          </h1>
          <div className="flex flex-wrap gap-4 items-center text-white">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(tour.category)}`}
            >
              {t(tour.category)}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{tour.groupSize}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>
                {tour.rating} ({tour.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
