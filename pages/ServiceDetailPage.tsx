
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useLanguage();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-16 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold font-serif text-brand-primary dark:text-white">{t('service_not_found')}</h1>
        <p className="text-xl text-gray-600 dark:text-brand-text/70 mt-4">{t('service_not_found_subtitle')}</p>
        <Link to="/services" className="mt-8 inline-block bg-brand-highlight text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 transform duration-300">
          {t('back_to_services')}
        </Link>
      </div>
    );
  }
  
  const longDescription = t('services', service.id, 'longDescription');

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-6 scale-125">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-4">{t('services', service.id, 'title')}</h1>
        </div>
        <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-brand-text/80 leading-relaxed text-left space-y-4">
          {longDescription.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/services" className="bg-transparent border-2 border-brand-primary dark:border-brand-highlight text-brand-primary dark:text-brand-highlight font-bold py-3 px-8 rounded-full hover:bg-brand-primary dark:hover:bg-brand-highlight hover:text-white dark:hover:text-brand-primary transition-all duration-300">
            {t('view_all_services')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
