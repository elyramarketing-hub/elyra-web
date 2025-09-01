import React from 'react';
import type { TeamMember, Service } from './types';
// FIX: Import the Translations type to strongly type navigation links.
import type { Translations } from './contexts/LanguageContext';

// Icons for services
const MegaphoneIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-12 w-12 text-brand-highlight",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.364-5.516l.003-.005a.75.75 0 011.305.613L16.56 6.516a3.986 3.986 0 01-1.401 2.555l-3.585 3.007a3.986 3.986 0 01-4.267 0l-3.888-3.26a.75.75 0 01.614-1.305l.005.003z"
    }))
);

const PaletteIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-12 w-12 text-brand-highlight",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    }))
);

const DigitalMarketingIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-12 w-12 text-brand-highlight",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    }))
);

const ConsultingIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-12 w-12 text-brand-highlight",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    }))
);

// FIX: Strongly type NAV_LINKS to ensure nameKey is a valid translation key.
export const NAV_LINKS: { nameKey: keyof Translations, path: string }[] = [
  { nameKey: 'nav_home', path: '/' },
  { nameKey: 'nav_about', path: '/about' },
  { nameKey: 'nav_team', path: '/team' },
  { nameKey: 'nav_services', path: '/services' },
];

// Translatable content is now in /translations. This file only contains static, non-translatable data.
export const TEAM_MEMBERS: Pick<TeamMember, 'id' | 'photoUrl' | 'skills'>[] = [
  { id: 'mohammed-sabeeh', photoUrl: 'sabeeh.jpeg', skills: ['UI/UX Design', 'Brand Identity', 'Graphic Design', 'Figma', 'Adobe Creative Suite'] },
  { id: 'fadwa-kappoor', photoUrl: 'fadwa.jpeg', skills: ['Financial Planning', 'Project Management', 'Client Communication', 'Market Research'] },
  { id: 'alphin-martin', photoUrl: 'https://picsum.photos/seed/alphin/400/400', skills: ['Web Development', 'React', 'Node.js', 'App Development', 'Database Management'] },
  { id: 'dhananjay', photoUrl: 'dhan.jpeg', skills: ['Digital Strategy', 'SEO/SEM', 'Content Marketing', 'Social Media Analytics'] },
  { id: 'mohamed-ziyad-ta', photoUrl: 'https://picsum.photos/seed/ziyad/400/400', skills: ['Business Strategy', 'Mentorship', 'Entrepreneurship', 'Industry Connections'] },
];

export const SERVICES: Pick<Service, 'id' | 'icon'>[] = [
  { 
    id: 'social-media-management',
    icon: React.createElement(MegaphoneIcon) 
  },
  { 
    id: 'branding-and-identity',
    icon: React.createElement(PaletteIcon)
  },
  { 
    id: 'digital-marketing',
    icon: React.createElement(DigitalMarketingIcon)
  },
  { 
    id: 'consulting',
    icon: React.createElement(ConsultingIcon)
  },
];