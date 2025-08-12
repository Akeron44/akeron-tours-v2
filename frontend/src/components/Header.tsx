import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: '/#home' },
    { name: t('about'), href: '/#about' },
    { name: t('tours'), href: '/#tours' },
    { name: t('reviews'), href: '/#reviews' },
    { name: t('contact'), href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-albanian-green to-albanian-forest rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1
                className={`font-playfair font-bold text-xl ${
                  isScrolled ? 'text-albanian-green' : 'text-white'
                }`}
              >
                Akeron Tours
              </h1>
              <p
                className={`text-sm ${
                  isScrolled ? 'text-albanian-forest' : 'text-white/90'
                }`}
              >
                Albania
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-inter font-medium transition-colors duration-200 hover:text-albanian-sage ${
                  isScrolled
                    ? 'text-albanian-green hover:text-albanian-forest'
                    : 'text-white hover:text-albanian-sage'
                }`}
              >
                {item.name}
              </a>
            ))}
            <LanguageSelector isScrolled={isScrolled} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector isScrolled={isScrolled} />
            <button
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-albanian-green hover:bg-albanian-sage/10'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 font-inter font-medium text-albanian-green hover:text-albanian-forest hover:bg-albanian-sage/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
