// import { Card, CardContent } from '@/components/ui/card';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Button } from '@/components/ui/button';

// type Tour = {
//   price: string;
//   duration: string;
//   groupSize: string;
//   difficulty: string;
// };

// export default function BookTour({
//   price,
//   duration,
//   groupSize,
//   difficulty,
// }: Tour) {
//   const { t } = useLanguage();
//   return (
//     <Card className="sticky top-80">
//       <CardContent className="p-6">
//         <div className="text-center mb-6">
//           <div className="text-3xl font-bold text-albanian-green mb-2">
//             {price}
//           </div>
//           <div className="text-albanian-forest">{t('perPerson')}</div>
//         </div>

//         <div className="space-y-4 mb-6">
//           <div className="flex justify-between">
//             <span className="text-albanian-forest">{t('duration')}:</span>
//             <span className="font-medium">{duration}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-albanian-forest">{t('groupSize')}:</span>
//             <span className="font-medium">{groupSize}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-albanian-forest">{t('difficulty')}:</span>
//             <span className="font-medium">{t(difficulty.toLowerCase())}</span>
//           </div>
//         </div>

//         <Button className="w-full bg-albanian-green hover:bg-albanian-forest text-white mb-4">
//           {t('bookThisTour')}
//         </Button>

//         <Button
//           variant="outline"
//           className="w-full border-albanian-green text-albanian-green hover:bg-albanian-green hover:text-white"
//         >
//           {t('contactForCustom')}
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';
import { tours } from '@/constants/tourdetails';
import TourContactModal from '../../Modal/TourContactModal';

type Tour = {
  price: string;
  duration: string;
  groupSize: string;
  difficulty: string;
};

export default function BookTour({
  price,
  duration,
  groupSize,
  difficulty,
}: Tour) {
  const { t } = useLanguage();
  const { tourId } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Get tour data for the modal
  const tour = tours[tourId as keyof typeof tours];

  const handleBookTour = () => {
    setIsBookingModalOpen(true);
  };

  const handleContactCustom = () => {
    // You can implement this later or redirect to contact form
    // For now, we can open the modal with inquiry type 'custom'
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <Card className="sticky top-80">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-albanian-green mb-2">
              {price}
            </div>
            <div className="text-albanian-forest">{t('perPerson')}</div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-albanian-forest">{t('duration')}:</span>
              <span className="font-medium">{duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-albanian-forest">{t('groupSize')}:</span>
              <span className="font-medium">{groupSize}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-albanian-forest">{t('difficulty')}:</span>
              <span className="font-medium">{t(difficulty.toLowerCase())}</span>
            </div>
          </div>

          <Button
            onClick={handleBookTour}
            className="w-full bg-albanian-green hover:bg-albanian-forest text-white mb-4"
          >
            {t('bookThisTour')}
          </Button>

          <Button
            onClick={handleContactCustom}
            variant="outline"
            className="w-full border-albanian-green text-albanian-green hover:bg-albanian-green hover:text-white"
          >
            {t('contactForCustom')}
          </Button>
        </CardContent>
      </Card>

      {tour && (
        <TourContactModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          tourId={tour.id}
          tourName={tour.title}
          tourPrice={price}
        />
      )}
    </>
  );
}
