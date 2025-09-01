
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-highlight transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-brand-secondary mt-16">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="font-semibold text-brand-primary dark:text-white">SSM Polytechnic College</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">An Initiative by Students & Faculty</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2025 ELYRA. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6">
          <SocialIcon href="#">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
          </SocialIcon>
          <SocialIcon href="#">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
          </SocialIcon>
          <SocialIcon href="#">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.004.048-1.625.211-2.126.41-1.028.403-1.636.96-2.226 1.55h-.001c-.59.59-.973 1.185-1.37 2.21-.2.494-.36 1.103-.406 2.11-.047 1.02-.06 1.365-.06 3.806v.468c0 2.442.013 2.786.06 3.807.047 1.003.209 1.618.41 2.125.402 1.03.97 1.636 1.557 2.226.59.59 1.196.973 2.226 1.37.502.2 1.123.363 2.127.41.97.047 1.365.06 3.806.06h.468c2.442 0 2.786-.013 3.807-.06 1.003-.047 1.618-.209 2.126-.41 1.03-.402 1.637-.97 2.227-1.557.59-.59.972-1.196 1.37-2.227.2-.502.362-1.122.41-2.126.048-.97.06-1.365.06-3.807v-.468c0-2.442-.013-2.786-.06-3.807-.048-1.004-.21-1.618-.41-2.127-.402-1.028-.973-1.636-1.557-2.226-.59-.59-1.197-.973-2.227-1.37-.502-.2-1.123-.363-2.126-.41-.969-.047-1.365-.06-3.806-.06h-.468zM12 6.802a5.198 5.198 0 100 10.396 5.198 5.198 0 000-10.396zm0 1.802a3.398 3.398 0 110 6.796 3.398 3.398 0 010-6.796zM16.95 6.518a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;