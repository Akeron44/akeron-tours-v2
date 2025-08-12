import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

type Included = {
  included: string[];
  notIncluded: string[];
};

export default function Included({ included, notIncluded }: Included) {
  const { t } = useLanguage();
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h4 className="font-semibold text-albanian-green mb-4">
          {t('whatsIncluded')}
        </h4>
        <ul className="space-y-2 mb-6">
          {included.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              <span className="text-albanian-forest">{item}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold text-albanian-green mb-4">
          {t('notIncluded')}
        </h4>
        <ul className="space-y-2">
          {notIncluded.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
              <span className="text-albanian-forest">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
