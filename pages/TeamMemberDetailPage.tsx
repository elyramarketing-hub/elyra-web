
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const TeamMemberDetailPage: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const { t } = useLanguage();
  const member = TEAM_MEMBERS.find(m => m.id === memberId);

  if (!member) {
    return (
      <div className="container mx-auto px-6 py-16 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold font-serif text-brand-primary dark:text-white">{t('member_not_found')}</h1>
        <Link to="/team" className="mt-8 inline-block bg-brand-highlight text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 transform duration-300">
          {t('back_to_team')}
        </Link>
      </div>
    );
  }
  
  const memberName = t('team_members', member.id, 'name');
  const memberRole = t('team_members', member.id, 'role');
  const memberBio = t('team_members', member.id, 'bio');


  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1 mb-8 md:mb-0">
            <img src={member.photoUrl} alt={memberName} className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square" />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-2">{memberName}</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-brand-primary dark:text-brand-highlight font-semibold mb-6">{memberRole}</p>
            <p className="text-gray-700 dark:text-brand-text/80 leading-relaxed mb-8">{memberBio}</p>
            
            <h2 className="text-2xl font-bold font-serif text-brand-primary dark:text-white mb-4">{t('skills')}</h2>
            <div className="flex flex-wrap gap-3">
              {member.skills.map(skill => (
                <span key={skill} className="bg-gray-200 dark:bg-brand-secondary text-brand-secondary dark:text-brand-highlight text-sm font-semibold px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link to="/team" className="bg-transparent border-2 border-brand-primary dark:border-brand-highlight text-brand-primary dark:text-brand-highlight font-bold py-3 px-8 rounded-full hover:bg-brand-primary dark:hover:bg-brand-highlight hover:text-white dark:hover:text-brand-primary transition-all duration-300">
            {t('meet_the_whole_team')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetailPage;
