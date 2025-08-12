import { Card, CardContent } from '@/components/ui/card';

type Itinerary = {
  day: number;
  title: string;
  description: string;
  activities: string[];
};

export default function Itinerary({ itinerary }: { itinerary: Itinerary[] }) {
  return (
    <div>
      <h3 className="font-playfair font-bold text-2xl text-albanian-green mb-6">
        Day by day itinerary
      </h3>
      <div className="space-y-6">
        {itinerary.map((day) => (
          <Card key={day.day} className="border-l-4 border-albanian-green">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-albanian-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  {day.day}
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair font-semibold text-xl text-albanian-green mb-2">
                    Day: {day.day}: {day.title}
                  </h4>
                  <p className="text-albanian-forest mb-4 leading-relaxed">
                    {day.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {day.activities.map((activity, index) => (
                      <span
                        key={index}
                        className="bg-albanian-sage/20 text-albanian-green px-3 py-1 rounded-full text-sm"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
