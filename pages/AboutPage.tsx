
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-4">{t('about_title')}</h1>
        <p className="text-lg md:text-xl text-brand-primary dark:text-brand-highlight">
          {t('about_subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <img 
            src="https://picsum.photos/seed/teamwork/800/600" 
            alt="Team collaboration" 
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-primary dark:text-white">{t('our_story')}</h2>
          <p className="text-gray-700 dark:text-brand-text/80 leading-relaxed">
            {t('our_story_content')}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-brand-primary dark:text-white">{t('who_we_are')}</h2>
          <p className="text-gray-700 dark:text-brand-text/80 leading-relaxed">
            {t('who_we_are_content')}
          </p>
        </div>
      </div>
      
      <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold font-serif text-brand-primary dark:text-brand-highlight mb-3">{t('mission')}</h3>
          <p className="text-gray-700 dark:text-brand-text/80">
            {t('mission_content')}
          </p>
        </div>
        <div className="bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold font-serif text-brand-primary dark:text-brand-highlight mb-3">{t('vision')}</h3>
          <p className="text-gray-700 dark:text-brand-text/80">
            {t('vision_content')}
          </p>
        </div>
        <div className="bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold font-serif text-brand-primary dark:text-brand-highlight mb-3">{t('values')}</h3>
          <p className="text-gray-700 dark:text-brand-text/80">
            {t('values_content')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
