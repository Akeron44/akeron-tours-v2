import { tours } from '@/constants/tourdetails';
import { useParams } from 'react-router-dom';
import TourOverview from './components/TourOverview';
import Itinerary from './components/Itinerary';
import TourMap from './components/TourMap';
import BookTour from './components/BookTour';
import Included from './components/Included';

export default function MainContent() {
  const { tourId } = useParams();

  const tour = tours[tourId as keyof typeof tours];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            <TourOverview
              description={tour.longDescription}
              highlights={tour.highlights}
            />
            <Itinerary itinerary={tour.itinerary} />
            <TourMap />
          </div>

          {/* Right Column - Booking Info */}
          <div className="space-y-6">
            <Included included={tour.included} notIncluded={tour.notIncluded} />
            <BookTour
              price={tour.price}
              duration={tour.duration}
              groupSize={tour.groupSize}
              difficulty={tour.difficulty}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
