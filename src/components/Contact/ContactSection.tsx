import ContactForm from './components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import MapPlaceholder from './components/MapPlaceholder';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-albanian-green/5 to-albanian-green/10"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-albanian-green mb-6 animate-fade-in">
            {t('planYourAlbanianAdventure')}
          </h2>
          <p className="font-inter text-lg md:text-xl text-albanian-forest max-w-2xl mx-auto animate-slide-in-left">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <MapPlaceholder />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
