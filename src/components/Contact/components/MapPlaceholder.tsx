import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MapPlaceholder() {
  const { t } = useLanguage();

  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardContent className="p-8">
        <h3 className="font-playfair font-semibold text-2xl text-albanian-green mb-6">
          {t('ourTourDestinations')}
        </h3>
        <div className="w-full h-64 bg-gradient-to-br from-albanian-sage/20 to-albanian-green/20 rounded-lg flex items-center justify-center border-2 border-dashed border-albanian-sage">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="font-inter text-albanian-forest whitespace-pre-line">
              {t('interactiveMapDescription')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
