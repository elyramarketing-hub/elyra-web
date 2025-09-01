
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import AnimatedLogo from './AnimatedLogo';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkClass = 'text-brand-primary dark:text-brand-highlight';
  const inactiveLinkClass = 'text-gray-600 dark:text-brand-text/80 hover:opacity-100 dark:hover:text-brand-highlight hover:text-brand-primary transition-all duration-300';
  const contactButtonClass = "bg-black text-brand-accent dark:bg-brand-highlight dark:text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-brand-highlight/90 transition-all duration-300 transform hover:scale-105";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-brand-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleTheme} 
            className="focus:outline-none focus:ring-2 focus:ring-brand-highlight rounded-full p-1 transition-transform duration-300 ease-in-out hover:scale-110" 
            aria-label="Toggle theme"
          >
            <div className={`transition-transform duration-500 ease-in-out ${theme === 'light' ? 'rotate-180' : 'rotate-0'}`}>
              <AnimatedLogo />
            </div>
          </button>
          <Link to="/" className="flex items-center">
             <span className="text-3xl font-bold font-serif text-brand-primary dark:text-brand-text tracking-wider">elyra</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
            >
              {t(link.nameKey)}
            </NavLink>
          ))}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
             <a href="mailto:contact@elyra.dev" className={contactButtonClass}>
                {t('contact')}
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="dark:text-white text-brand-primary focus:outline-none z-20 relative">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-brand-secondary pb-4">
          <div className="flex flex-col items-center space-y-4 pt-4">
            {NAV_LINKS.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
              >
                {t(link.nameKey)}
              </NavLink>
            ))}
            <div className="flex flex-col items-center space-y-4 mt-4">
                <LanguageSwitcher />
                <a href="mailto:contact@elyra.dev" className={`${contactButtonClass} w-36 text-center`}>
                    {t('contact')}
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
