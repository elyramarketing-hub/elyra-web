
import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';
import { TeamMember } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const TeamMemberCard: React.FC<{ member: Pick<TeamMember, 'id' | 'photoUrl'> }> = ({ member }) => {
    const { t } = useLanguage();
    return (
        <Link to={`/team/${member.id}`} className="block">
            <div className="bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm rounded-lg overflow-hidden shadow-lg group transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <div className="relative h-80 sm:h-72">
                <img src={member.photoUrl} alt={t('team_members', member.id, 'name')} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold font-serif text-white">{t('team_members', member.id, 'name')}</h3>
                <p className="text-brand-highlight font-semibold">{t('team_members', member.id, 'role')}</p>
                </div>
            </div>
            </div>
        </Link>
    );
};


const TeamPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-4">{t('team_title')}</h1>
        <p className="text-lg md:text-xl text-brand-primary dark:text-brand-highlight max-w-3xl mx-auto">
          {t('team_subtitle')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
