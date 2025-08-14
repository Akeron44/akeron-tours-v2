import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Import all your images
// import berat from '@/assets/images/berat.jpg';
// import gjirokaster from '@/assets/images/gjirokaster.jpg';
// import boville from '@/assets/images/boville.jpg';
// import gjipe from '@/assets/images/gjipe.jpg';
// import ksamil from '@/assets/images/ksamil.jpg';
// import ksamil2 from '@/assets/images/ksamil2.jpg';
// import ksamil3 from '@/assets/images/ksamil3.jpg';
// import dhermi from '@/assets/images/dhermi.jpg';
// import vlore from '@/assets/images/vlore.jpg';
// import sheshi from '@/assets/images/sheshi.jpg';
// import koman from '@/assets/images/koman.jpg';
// import dea from '@/assets/images/dea.jpg';
// import llogora from '@/assets/images/llogora.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  // Array of all your images
  const heroImages = [
    'https://images.unsplash.com/photo-1652126631890-8fafa5c16a98?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1705405999485-188af37e0462?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1630339858071-4e64cc76fb6c?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1648046143698-1204e59eb43b?q=80&w=1764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1586674572976-68d3c69d3a7f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1738675326308-f4097c3405a7?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1659853444490-43054008a492?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1595190588814-ae94398addf7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1566233601708-73237226554c?q=80&w=1821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // berat,
    // gjirokaster,
    // boville,
    // gjipe,
    // ksamil,
    // ksamil2,
    // ksamil3,
    // dhermi,
    // vlore,
    // sheshi,
    // koman,
    // dea,
    // llogora,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all images for smooth transitions
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
              index === currentImageIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transitionProperty: 'opacity, transform',
              transitionDuration: '1200ms',
              transitionTimingFunction: 'ease-out',
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            {t('discoverAlbania').split(' ')[0]}
            <span className="text-albanian-sage block">
              {t('discoverAlbania').split(' ')[1]}
            </span>
          </h1>

          <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-albanian-green hover:bg-albanian-forest text-white px-8 py-4 text-lg font-inter font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('contactUs')}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-albanian-green px-8 py-4 text-lg font-inter font-semibold transition-all duration-300 bg-transparent"
              onClick={() =>
                document
                  .getElementById('tours')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('exploreTours')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
