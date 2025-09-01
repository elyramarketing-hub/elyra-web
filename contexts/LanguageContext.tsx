
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { en } from '../translations/en';
import { ml } from '../translations/ml';

type Language = 'en' | 'ml';
// FIX: Export the Translations type so it can be used in other files.
export type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Translations, ...subKeys: string[]) => string;
}

const translations = { en, ml };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ml')) {
      setLanguageState(storedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: keyof Translations, ...subKeys: string[]): string => {
    let current: any = translations[language][key];
    
    // Handle top-level keys that are strings
    if (typeof current === 'string' && subKeys.length === 0) {
        return current;
    }

    // Handle nested keys
    for (const subKey of subKeys) {
      if (current && typeof current === 'object' && current[subKey] !== undefined) {
        current = current[subKey];
      } else {
        // Fallback if key path is invalid
        return [key, ...subKeys].join('.');
      }
    }
    
    return typeof current === 'string' ? current : [key, ...subKeys].join('.');
  };


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};