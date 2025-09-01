
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLogo from '../components/AnimatedLogo';
import { SERVICES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in-up dark:bg-gradient-hero">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center z-10">
          <div className="flex justify-center mb-6">
            <div className="transform scale-125 md:scale-150">
              <AnimatedLogo />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-serif dark:text-brand-text text-brand-primary mb-4 tracking-wider">
            elyra
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-gray-500 dark:text-brand-text/70 uppercase tracking-widest font-sans mb-8">
            Where hope meet innovation,
          </p>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 dark:text-brand-text/80 mb-10">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="bg-brand-highlight text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 transform duration-300 w-full sm:w-auto">
              {t('our_services')}
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-brand-primary dark:border-brand-highlight text-brand-primary dark:text-brand-highlight font-bold py-3 px-8 rounded-full hover:bg-brand-primary dark:hover:bg-brand-highlight hover:text-white dark:hover:text-brand-primary transition-all duration-300 w-full sm:w-auto">
              {t('learn_more')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary dark:text-white mb-2">{t('what_we_do')}</h2>
          <p className="text-md md:text-lg text-gray-600 dark:text-brand-text/70 mb-12 max-w-2xl mx-auto">{t('what_we_do_subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="dark:bg-brand-secondary/50 bg-white dark:backdrop-blur-sm p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold font-serif text-brand-primary dark:text-white mb-3">{t('services', service.id, 'title')}</h3>
                <p className="text-gray-600 dark:text-brand-text/70">{t('services', service.id, 'description')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;