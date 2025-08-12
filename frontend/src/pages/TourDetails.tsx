import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { tours } from '@/constants/tourdetails';
import TourInfo from '@/components/TourDetails/TourInfo';

const TourDetails = () => {
  const { tourId } = useParams();
  const { t } = useLanguage();

  const tour = tours[tourId as keyof typeof tours];

  if (!tour) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-albanian-green mb-4">
            {t('tourNotFound')}
          </h1>
          <Link to="/">
            <Button>{t('returnHome')}</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <TourInfo />
      <Footer />
    </div>
  );
};

export default TourDetails;
