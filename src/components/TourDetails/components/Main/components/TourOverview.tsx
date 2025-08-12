type TourOverviewProps = {
  description: string;
  highlights: string[];
};

export default function TourOverview({
  description,
  highlights,
}: TourOverviewProps) {
  return (
    <>
      {/* Overview */}
      <div>
        <h2 className="font-playfair font-bold text-3xl text-albanian-green mb-4">
          Overview
        </h2>
        <p className="text-albanian-forest leading-relaxed text-lg">
          {description}
        </p>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="font-playfair font-bold text-2xl text-albanian-green mb-4">
          Highlights
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 bg-albanian-green rounded-full mt-2 flex-shrink-0" />
              <span className="text-albanian-forest">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
