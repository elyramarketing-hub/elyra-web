
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: 'en' | 'ml') => {
    setLanguage(lang);
    setIsOpen(false);
  };
  
  const buttonClass = `
    font-semibold py-2 px-4 rounded-lg 
    transition-all duration-300 transform hover:scale-105 
    flex items-center space-x-2
    ${theme === 'light' 
      ? 'bg-black text-brand-accent hover:bg-gray-800' 
      : 'bg-brand-highlight text-black hover:bg-brand-highlight/90'
    }
  `;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t('language')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m4 13l4-4M19 17v2m-4-15l4 4m-4 0l4-4m-4 4v10m-4-10a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
        </svg>
        <span>{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-brand-secondary rounded-md shadow-lg z-10 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleLanguageChange('en')}
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-primary"
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('ml')}
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-primary"
              role="menuitem"
            >
              മലയാളം
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
