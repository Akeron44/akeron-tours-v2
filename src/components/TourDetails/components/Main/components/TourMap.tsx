import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

export default function TourMap() {
  const { t } = useLanguage();
  return (
    <div>
      <h3 className="font-playfair font-bold text-2xl text-albanian-green mb-4">
        {t('tourRoute')}
      </h3>
      <Card className="h-64 bg-albanian-sage/10 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-albanian-green mx-auto mb-2" />
          <p className="text-albanian-forest">{t('interactiveMapComing')}</p>
          <p className="text-sm text-albanian-forest/70">
            {t('trackDailyRoute')}
          </p>
        </div>
      </Card>
    </div>
  );
}
