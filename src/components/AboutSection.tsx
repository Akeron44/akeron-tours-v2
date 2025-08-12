import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-albanian-sage/5"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-albanian-green mb-8 animate-fade-in">
            {t('welcomeToAkeronTours')}
          </h2>

          <div className="space-y-6 animate-slide-in-left">
            <p className="font-inter text-lg md:text-xl text-albanian-forest leading-relaxed">
              {t('aboutDescription1')}
            </p>

            <p className="font-inter text-lg md:text-xl text-albanian-forest leading-relaxed">
              {t('aboutDescription2')}
            </p>

            <p className="font-inter text-lg md:text-xl text-albanian-forest leading-relaxed">
              {t('aboutDescription3')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-albanian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">12</span>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-albanian-green mb-2">
                {t('uniqueTours')}
              </h3>
              <p className="font-inter text-albanian-forest">
                {t('uniqueToursDesc')}
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-albanian-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">10+</span>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-albanian-green mb-2">
                {t('yearsExperience')}
              </h3>
              <p className="font-inter text-albanian-forest">
                {t('yearsExperienceDesc')}
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-albanian-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">500+</span>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-albanian-green mb-2">
                {t('happyTravelers')}
              </h3>
              <p className="font-inter text-albanian-forest">
                {t('happyTravelersDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
