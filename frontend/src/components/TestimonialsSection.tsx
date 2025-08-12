import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Maria Schmidt',
      country: 'Germany',
      rating: 5,
      text: 'Akeron Tours showed us the real Albania! The guides were incredibly knowledgeable and passionate. The Accursed Mountains trek was absolutely breathtaking.',
      tour: 'Accursed Mountains Adventure',
    },
    {
      id: 2,
      name: 'James Wilson',
      country: 'United Kingdom',
      rating: 5,
      text: 'We had an amazing time exploring Berat and Gjirokastër. The historical insights and local stories made these ancient cities come alive. Highly recommended!',
      tour: 'Historical Heritage Tour',
    },
    {
      id: 3,
      name: 'Sophie Dubois',
      country: 'France',
      rating: 5,
      text: "The Albanian Riviera exceeded all our expectations. Crystal clear waters, charming villages, and excellent organization. We'll definitely be back!",
      tour: 'Albanian Riviera Experience',
    },
    {
      id: 4,
      name: 'Marco Rossi',
      country: 'Italy',
      rating: 5,
      text: 'Fantastic cultural immersion in Tirana and beyond. The local cuisine experiences and authentic interactions made this trip unforgettable.',
      tour: 'Cultural Discovery Tour',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-albanian-sunset' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-white to-albanian-green/5"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-albanian-green mb-6 animate-fade-in">
            {t('whatOurTravelersSay')}
          </h2>
          <p className="font-inter text-lg md:text-xl text-albanian-forest max-w-2xl mx-auto animate-slide-in-left">
            {t('reviewsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-0 bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <span className="text-sm font-inter text-albanian-forest bg-albanian-sage/20 px-3 py-1 rounded-full">
                    {testimonial.tour}
                  </span>
                </div>

                <blockquote className="font-inter text-albanian-forest leading-relaxed mb-6 text-lg italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-albanian-green to-albanian-forest rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-playfair font-semibold text-albanian-green">
                      {testimonial.name}
                    </p>
                    <p className="font-inter text-sm text-albanian-forest">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-albanian-sage/10 px-6 py-3 rounded-full">
            <span className="font-inter font-semibold text-albanian-green">
              {t('trustedByTravelers')}
            </span>
            <div className="flex">{renderStars(5)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
