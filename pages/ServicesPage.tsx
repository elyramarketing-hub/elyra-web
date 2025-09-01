
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceCard: React.FC<{ service: Pick<Service, 'id' | 'icon'>, index: number }> = ({ service, index }) => {
    const { t } = useLanguage();
    return (
        <Link to={`/services/${service.id}`} className="block group transition-transform duration-300 ease-out hover:scale-[1.02]">
            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 w-full flex justify-center items-center bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md">
                    {service.icon}
                </div>
                <div className="md:w-1/2 w-full text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-brand-primary dark:text-brand-highlight mb-4 group-hover:text-brand-primary dark:group-hover:text-white transition-colors">{t('services', service.id, 'title')}</h3>
                    <p className="text-gray-700 dark:text-brand-text/80 leading-relaxed">{t('services', service.id, 'description')}</p>
                </div>
            </div>
        </Link>
    );
};

const ServicesPage: React.FC = () => {
    const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-4">{t('services_title')}</h1>
        <p className="text-lg md:text-xl text-brand-primary dark:text-brand-highlight max-w-3xl mx-auto">
          {t('services_subtitle')}
        </p>
      </div>
      
      <div className="space-y-16 md:space-y-20">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <div className="mt-24 text-center bg-brand-accent p-6 sm:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-brand-primary mb-4">{t('ready_to_grow')}</h2>
          <p className="text-brand-primary/80 mb-8 max-w-2xl mx-auto">
              {t('ready_to_grow_subtitle')}
          </p>
          <a 
              href="mailto:contact@elyra.dev" 
              className="bg-brand-primary text-brand-text font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 transform duration-300 inline-block">
              {t('get_in_touch')}
          </a>
      </div>
    </div>
  );
};

export default ServicesPage;
