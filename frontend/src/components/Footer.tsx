import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-albanian-green text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-albanian-green font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">
                  Akeron Tours
                </h3>
                <p className="text-albanian-sage">Albania</p>
              </div>
            </div>
            <p className="font-inter text-albanian-sage leading-relaxed">
              {t('discoverAuthentic')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a
                  href="#home"
                  className="text-albanian-sage hover:text-white transition-colors"
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-albanian-sage hover:text-white transition-colors"
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="text-albanian-sage hover:text-white transition-colors"
                >
                  {t('tours')}
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-albanian-sage hover:text-white transition-colors"
                >
                  {t('reviews')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-albanian-sage hover:text-white transition-colors"
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">
              {t('tourTypes')}
            </h4>
            <ul className="space-y-2 font-inter">
              <li>
                <span className="text-albanian-sage">
                  {t('historicalTours')}
                </span>
              </li>
              <li>
                <span className="text-albanian-sage">
                  {t('culturalExperiences')}
                </span>
              </li>
              <li>
                <span className="text-albanian-sage">
                  {t('natureAdventures')}
                </span>
              </li>
              <li>
                <span className="text-albanian-sage">{t('beachEscapes')}</span>
              </li>
              <li>
                <span className="text-albanian-sage">{t('mountainTreks')}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">
              {t('contactInfo')}
            </h4>
            <div className="space-y-3 font-inter">
              <p className="text-albanian-sage whitespace-pre-line">
                📍 {t('footerAddress')}
              </p>
              <p className="text-albanian-sage">📞 +355 69 123 4567</p>
              <p className="text-albanian-sage">✉️ info@akerontours.al</p>
            </div>
          </div>
        </div>

        <div className="border-t border-albanian-sage/30 mt-8 pt-8 text-center">
          <p className="font-inter text-albanian-sage">
            {t('footerCopyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
