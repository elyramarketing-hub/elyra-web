(async () => {
    const React = await import('react');
    const ReactDOM = await import('react-dom/client');
    const { HashRouter, Routes, Route, NavLink, Link, useParams } = await import('react-router-dom');

    // --- START: translations/en.ts ---
    const en = {
      nav_home: 'Home',
      nav_about: 'About Us',
      nav_team: 'Team',
      nav_services: 'Services',
      contact: 'Contact',
      language: 'Language',
      hero_subtitle: 'We empower local entrepreneurs with innovative digital marketing solutions, turning their passion into a thriving business.',
      our_services: 'Our Services',
      learn_more: 'Learn More',
      what_we_do: 'What We Do',
      what_we_do_subtitle: 'From branding to development, we offer a complete suite of services to help your business shine online.',
      about_title: 'About Elyra',
      about_subtitle: 'Fueling Local Dreams with Digital Wings',
      our_story: 'Our Story',
      our_story_content: 'Born from a shared vision within the halls of SSM Polytechnic College, Elyra is the brainchild of four passionate students and their dedicated mentor. We saw the incredible talent of local entrepreneurs—home bakers, artisans, and creators—and knew we could help them thrive in the digital world. Elyra was founded to bridge the gap between local craftsmanship and a global audience.',
      who_we_are: 'Who We Are',
      who_we_are_content: 'We are a team of designers, developers, strategists, and storytellers. As students, we bring fresh perspectives and cutting-edge skills, guided by the wisdom of experienced mentorship. We are more than a startup; we are a community partner, committed to the success of our local heroes.',
      mission: 'Our Mission',
      mission_content: 'To provide affordable, high-impact digital marketing services that empower local entrepreneurs to build sustainable and successful businesses.',
      vision: 'Our Vision',
      vision_content: 'To be the leading digital growth partner for small businesses, creating a vibrant and interconnected local economy.',
      values: 'Our Values',
      values_content: 'Innovation, Collaboration, Integrity, and Community. We believe in building relationships based on trust and a shared passion for growth.',
      team_title: 'Meet Our Team',
      team_subtitle: 'The passionate minds behind Elyra, dedicated to bringing your vision to life.',
      member_not_found: 'Team Member Not Found',
      back_to_team: 'Back to Team',
      skills: 'Skills',
      meet_the_whole_team: 'Meet the Whole Team',
      services_title: 'Our Services',
      services_subtitle: 'Tailored digital solutions designed to elevate your brand and connect you with your audience.',
      ready_to_grow: 'Ready to Grow Your Business?',
      ready_to_grow_subtitle: 'Let\'s work together to create a digital presence that reflects the quality of your work. Reach out to us for a free consultation!',
      get_in_touch: 'Get in Touch',
      service_not_found: 'Service Not Found',
      service_not_found_subtitle: 'The service you are looking for does not exist.',
      back_to_services: 'Back to Services',
      view_all_services: 'View All Services',
      team_members: {
        'mohammed-sabeeh': {
          name: 'Mohammed Sabeeh',
          role: 'Team Lead – Design',
          bio: 'As the creative visionary, Mohammed leads the design team with a passion for crafting beautiful and intuitive user experiences. His expertise in brand identity and UI/UX ensures that every project is not only stunning but also strategically effective.'
        },
        'fadwa-kappoor': {
          name: 'Fadwa Kappoor',
          role: 'Finance & Documentation',
          bio: 'Fadwa is the organizational backbone of Elyra. With a keen eye for detail, she manages project finances, documentation, and client communication, ensuring every project runs smoothly from start to finish.'
        },
        'alphin-martin': {
          name: 'Alphin Martin',
          role: 'Tech & Operations',
          bio: 'Alphin brings digital visions to life. A skilled developer, he heads the technical and operational aspects, from website and application development to ensuring seamless digital performance for all our clients.'
        },
        'dhananjay': {
          name: 'Dhananjay',
          role: 'Marketing Head',
          bio: 'Dhananjay is the strategic engine driving growth. He specializes in digital strategy, SEO, and content marketing, creating data-driven campaigns that boost visibility and engage target audiences effectively.'
        },
        'mohamed-ziyad-ta': {
          name: 'Mohamed Ziyad TA',
          role: 'Faculty Mentor',
          bio: 'With years of industry experience and a passion for fostering new talent, Mohamed Ziyad provides invaluable guidance and mentorship. He helps shape Elyra’s strategic direction and connects the team with industry best practices.'
        }
      },
      services: {
        'social-media-management': {
          title: 'Social Media Management',
          description: 'We build and manage a strong social media presence to engage your community and grow your brand.',
          longDescription: 'In today\'s digital world, a strong social media presence is non-negotiable. Our team helps you connect with your audience on platforms like Instagram, Facebook, and more. We handle everything from content creation and scheduling to community engagement and performance analytics. We work with you to develop a content strategy that reflects your brand\'s unique voice and helps you build a loyal following.'
        },
        'branding-and-identity': {
          title: 'Branding & Identity',
          description: 'Crafting a unique brand identity that tells your story and resonates with your target audience.',
          longDescription: 'Your brand is more than just a logo—it\'s the story you tell and the feeling you evoke. We help you build a cohesive and memorable brand identity from the ground up. This includes logo design, color palette selection, typography, and a comprehensive brand style guide. A strong brand identity sets you apart from the competition and builds lasting trust with your customers.'
        },
        'digital-marketing': {
          title: 'Digital Marketing',
          description: 'Comprehensive digital marketing strategies including SEO, SEM, and content marketing to boost your online visibility.',
          longDescription: 'Our digital marketing services are designed to increase your online visibility and drive targeted traffic to your business. We specialize in Search Engine Optimization (SEO) to help you rank higher in search results, Search Engine Marketing (SEM) for targeted ad campaigns, and content marketing to establish you as an authority in your field. We create data-driven strategies to ensure you get the best return on your investment.'
        },
        'consulting': {
          title: 'Consulting',
          description: 'Expert guidance and strategic advice to help you navigate the digital landscape and make informed decisions.',
          longDescription: 'Feeling overwhelmed by the digital world? Our consulting services provide you with the clarity and direction you need. We offer one-on-one sessions to discuss your business goals, analyze your current digital presence, and develop a customized roadmap for success. Whether you\'re just starting out or looking to scale, our expert advice will empower you to make informed decisions.'
        }
      }
    };
    // --- END: translations/en.ts ---

    // --- START: translations/ml.ts ---
    const ml = {
      nav_home: 'ഹോം',
      nav_about: 'ഞങ്ങളെക്കുറിച്ച്',
      nav_team: 'ടീം',
      nav_services: 'സേവനങ്ങൾ',
      contact: 'ബന്ധപ്പെടുക',
      language: 'ഭാഷ',
      hero_subtitle: 'പ്രാദേശിക സംരംഭകരെ നൂതനമായ ഡിജിറ്റൽ മാർക്കറ്റിംഗ് സൊല്യൂഷനുകൾ ഉപയോഗിച്ച് ഞങ്ങൾ ശാക്തീകരിക്കുന്നു, അവരുടെ അഭിനിവേശത്തെ അഭിവൃദ്ധി പ്രാപിക്കുന്ന ഒരു ബിസിനസ്സാക്കി മാറ്റുന്നു.',
      our_services: 'ഞങ്ങളുടെ സേവനങ്ങൾ',
      learn_more: 'കൂടുതലറിയുക',
      what_we_do: 'ഞങ്ങൾ എന്തു ചെയ്യുന്നു',
      what_we_do_subtitle: 'ബ്രാൻഡിംഗ് മുതൽ ഡെവലപ്‌മെൻ്റ് വരെ, നിങ്ങളുടെ ബിസിനസ്സിനെ ഓൺലൈനിൽ തിളങ്ങാൻ സഹായിക്കുന്നതിന് ഞങ്ങൾ സമ്പൂർണ്ണ സേവനങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു.',
      about_title: 'എലൈറയെക്കുറിച്ച്',
      about_subtitle: 'പ്രാദേശിക സ്വപ്നങ്ങൾക്ക് ഡിജിറ്റൽ ചിറകുകൾ നൽകുന്നു',
      our_story: 'ഞങ്ങളുടെ കഥ',
      our_story_content: 'എസ്എസ്എം പോളിടെക്നിക് കോളേജിൻ്റെ ഇടനാഴികളിലെ ഒരു പൊതു കാഴ്ചപ്പാടിൽ നിന്ന് ജനിച്ച എലൈറ, നാല് ഉത്സാഹികളായ വിദ്യാർത്ഥികളുടെയും അവരുടെ സമർപ്പിതനായ ഉപദേഷ്ടാവിൻ്റെയും ചിന്താസൃഷ്ടിയാണ്. പ്രാദേശിക സംരംഭകരുടെ - ഹോം ബേക്കർമാർ, കരകൗശല വിദഗ്ധർ, സ്രഷ്‌ടാക്കൾ - അവിശ്വസനീയമായ കഴിവുകൾ ഞങ്ങൾ കണ്ടു, ഡിജിറ്റൽ ലോകത്ത് അഭിവൃദ്ധി പ്രാപിക്കാൻ അവരെ സഹായിക്കാൻ ഞങ്ങൾക്ക് കഴിയുമെന്ന് ഞങ്ങൾക്കറിയാമായിരുന്നു. പ്രാദേശിക കരകൗശലവും ആഗോള പ്രേക്ഷകരും തമ്മിലുള്ള വിടവ് നികത്തുന്നതിനാണ് എലൈറ സ്ഥാപിച്ചത്.',
      who_we_are: 'ഞങ്ങൾ ആരാണ്',
      who_we_are_content: 'ഞങ്ങൾ ഡിസൈനർമാർ, ഡെവലപ്പർമാർ, സ്ട്രാറ്റജിസ്റ്റുകൾ, കഥാകൃത്തുക്കൾ എന്നിവരുടെ ഒരു ടീമാണ്. വിദ്യാർത്ഥികളെന്ന നിലയിൽ, പരിചയസമ്പന്നരായ ഉപദേശത്തിൻ്റെ ജ്ഞാനത്താൽ നയിക്കപ്പെടുന്ന പുതിയ കാഴ്ചപ്പാടുകളും അത്യാധുനിക കഴിവുകളും ഞങ്ങൾ കൊണ്ടുവരുന്നു. ഞങ്ങൾ ഒരു സ്റ്റാർട്ടപ്പിനേക്കാൾ ഉപരിയാണ്; ഞങ്ങൾ ഒരു കമ്മ്യൂണിറ്റി പങ്കാളിയാണ്, ഞങ്ങളുടെ പ്രാദേശിക നായകന്മാരുടെ വിജയത്തിനായി പ്രതിജ്ഞാബദ്ധരാണ്.',
      mission: 'ഞങ്ങളുടെ ദൗത്യം',
      mission_content: 'പ്രാദേശിക സംരംഭകർക്ക് സുസ്ഥിരവും വിജയകരവുമായ ബിസിനസുകൾ കെട്ടിപ്പടുക്കാൻ ശാക്തീകരിക്കുന്ന താങ്ങാനാവുന്നതും ഉയർന്ന സ്വാധീനമുള്ളതുമായ ഡിജിറ്റൽ മാർക്കറ്റിംഗ് സേവനങ്ങൾ നൽകുക.',
      vision: 'ഞങ്ങളുടെ കാഴ്ചപ്പാട്',
      vision_content: 'ചെറുകിട ബിസിനസുകൾക്കായുള്ള പ്രമുഖ ഡിജിറ്റൽ വളർച്ചാ പങ്കാളിയാകുക, ഊർജ്ജസ്വലവും പരസ്പരം ബന്ധിപ്പിച്ചതുമായ ഒരു പ്രാദേശിക സമ്പദ്‌വ്യവസ്ഥ സൃഷ്ടിക്കുക.',
      values: 'ഞങ്ങളുടെ മൂല്യങ്ങൾ',
      values_content: 'നവീകരണം, സഹകരണം, സമഗ്രത, സമൂഹം. വിശ്വാസത്തിലും വളർച്ചയ്‌ക്കുള്ള പൊതുവായ അഭിനിവേശത്തിലും അധിഷ്ഠിതമായ ബന്ധങ്ങൾ കെട്ടിപ്പടുക്കുന്നതിൽ ഞങ്ങൾ വിശ്വസിക്കുന്നു.',
      team_title: 'ഞങ്ങളുടെ ടീമിനെ പരിചയപ്പെടാം',
      team_subtitle: 'എലൈറയുടെ പിന്നിലെ ഉത്സാഹികളായ മനസ്സുകൾ, നിങ്ങളുടെ കാഴ്ചപ്പാട് ജീവിതത്തിലേക്ക് കൊണ്ടുവരാൻ സമർപ്പിതരായവർ.',
      member_not_found: 'ടീം അംഗത്തെ കണ്ടെത്താനായില്ല',
      back_to_team: 'ടീമിലേക്ക് മടങ്ങുക',
      skills: 'കഴിവുകൾ',
      meet_the_whole_team: 'മുഴുവൻ ടീമിനെയും കാണുക',
      services_title: 'ഞങ്ങളുടെ സേവനങ്ങൾ',
      services_subtitle: 'നിങ്ങളുടെ ബ്രാൻഡിനെ ഉയർത്താനും പ്രേക്ഷകരുമായി നിങ്ങളെ ബന്ധിപ്പിക്കാനും രൂപകൽപ്പന ചെയ്ത ഡിജിറ്റൽ പരിഹാരങ്ങൾ.',
      ready_to_grow: 'നിങ്ങളുടെ ബിസിനസ്സ് വളർത്താൻ തയ്യാറാണോ?',
      ready_to_grow_subtitle: 'നിങ്ങളുടെ ജോലിയുടെ ഗുണനിലവാരം പ്രതിഫലിപ്പിക്കുന്ന ഒരു ഡിജിറ്റൽ സാന്നിധ്യം സൃഷ്ടിക്കാൻ നമുക്ക് ഒരുമിച്ച് പ്രവർത്തിക്കാം. ഒരു സൗജന്യ കൺസൾട്ടേഷനായി ഞങ്ങളെ സമീപിക്കുക!',
      get_in_touch: 'ബന്ധപ്പെടുക',
      service_not_found: 'സേവനം കണ്ടെത്താനായില്ല',
      service_not_found_subtitle: 'നിങ്ങൾ തിരയുന്ന സേവനം നിലവിലില്ല.',
      back_to_services: 'സേവനങ്ങളിലേക്ക് മടങ്ങുക',
      view_all_services: 'എല്ലാ സേവനങ്ങളും കാണുക',
      team_members: {
        'mohammed-sabeeh': {
          name: 'മുഹമ്മദ് സബീഹ്',
          role: 'ടീം ലീഡ് – ഡിസൈൻ',
          bio: 'സൃഷ്ടിപരമായ ദർശകനെന്ന നിലയിൽ, മനോഹരവും അവബോധജന്യവുമായ ഉപയോക്തൃ അനുഭവങ്ങൾ രൂപപ്പെടുത്തുന്നതിനുള്ള അഭിനിവേശത്തോടെ മുഹമ്മദ് ഡിസൈൻ ടീമിനെ നയിക്കുന്നു. ബ്രാൻഡ് ഐഡൻ്റിറ്റിയിലും യുഐ/യുഎക്സിലുമുള്ള അദ്ദേഹത്തിൻ്റെ വൈദഗ്ദ്ധ്യം ഓരോ പ്രോജക്റ്റും അതിശയകരമാണെന്ന് മാത്രമല്ല, തന്ത്രപരമായി ഫലപ്രദമാണെന്നും ഉറപ്പാക്കുന്നു.'
        },
        'fadwa-kappoor': {
          name: 'ഫദ്വ കപ്പൂർ',
          role: 'ഫിനാൻസ് & ഡോക്യുമെൻ്റേഷൻ',
          bio: 'ഫദ്വ എലൈറയുടെ സംഘടനാപരമായ നട്ടെല്ലാണ്. വിശദാംശങ്ങളിൽ ശ്രദ്ധയോടെ, അവർ പ്രോജക്റ്റ് ഫിനാൻസ്, ഡോക്യുമെൻ്റേഷൻ, ക്ലയിൻ്റ് കമ്മ്യൂണിക്കേഷൻ എന്നിവ കൈകാര്യം ചെയ്യുന്നു, ഓരോ പ്രോജക്റ്റും തുടക്കം മുതൽ ഒടുക്കം വരെ സുഗമമായി നടക്കുന്നുവെന്ന് ഉറപ്പാക്കുന്നു.'
        },
        'alphin-martin': {
          name: 'അൽഫിൻ മാർട്ടിൻ',
          role: 'ടെക് & ഓപ്പറേഷൻസ്',
          bio: 'അൽഫിൻ ഡിജിറ്റൽ ദർശനങ്ങൾ ജീവിതത്തിലേക്ക് കൊണ്ടുവരുന്നു. ഒരു വിദഗ്ദ്ധ ഡെവലപ്പർ, വെബ്സൈറ്റും ആപ്ലിക്കേഷൻ ഡെവലപ്‌മെൻ്റും മുതൽ ഞങ്ങളുടെ എല്ലാ ക്ലയിൻ്റുകൾക്കും തടസ്സമില്ലാത്ത ഡിജിറ്റൽ പ്രകടനം ഉറപ്പാക്കുന്നത് വരെ സാങ്കേതികവും പ്രവർത്തനപരവുമായ വശങ്ങൾക്ക് അദ്ദേഹം നേതൃത്വം നൽകുന്നു.'
        },
        'dhananjay': {
          name: 'ധനഞ്ജയ്',
          role: 'മാർക്കറ്റിംഗ് ഹെഡ്',
          bio: 'വളർച്ചയെ നയിക്കുന്ന തന്ത്രപരമായ എഞ്ചിനാണ് ധനഞ്ജയ്. അദ്ദേഹം ഡിജിറ്റൽ സ്ട്രാറ്റജി, എസ്ഇഒ, കണ്ടൻ്റ് മാർക്കറ്റിംഗ് എന്നിവയിൽ വൈദഗ്ദ്ധ്യം നേടിയിരിക്കുന്നു, ദൃശ്യപരത വർദ്ധിപ്പിക്കുകയും ലക്ഷ്യ പ്രേക്ഷകരെ ഫലപ്രദമായി ആകർഷിക്കുകയും ചെയ്യുന്ന ഡാറ്റാധിഷ്ഠിത കാമ്പെയ്‌നുകൾ സൃഷ്ടിക്കുന്നു.'
        },
        'mohamed-ziyad-ta': {
          name: 'മുഹമ്മദ് സിയാദ് ടിഎ',
          role: 'ഫാക്കൽറ്റി ഉപദേഷ്ടാവ്',
          bio: 'വർഷങ്ങളുടെ വ്യവസായ പരിചയവും പുതിയ പ്രതിഭകളെ പരിപോഷിപ്പിക്കുന്നതിനുള്ള അഭിനിവേശവും കൊണ്ട്, മുഹമ്മദ് സിയാദ് അമൂല്യമായ മാർഗ്ഗനിർദ്ദേശവും ഉപദേശവും നൽകുന്നു. എലൈറയുടെ തന്ത്രപരമായ ദിശ രൂപപ്പെടുത്താനും ടീമിനെ വ്യവസായത്തിലെ മികച്ച സമ്പ്രദായങ്ങളുമായി ബന്ധിപ്പിക്കാനും അദ്ദേഹം സഹായിക്കുന്നു.'
        }
      },
      services: {
        'social-media-management': {
          title: 'സോഷ്യൽ മീഡിയ മാനേജ്മെൻ്റ്',
          description: 'നിങ്ങളുടെ കമ്മ്യൂണിറ്റിയുമായി ഇടപഴകുന്നതിനും നിങ്ങളുടെ ബ്രാൻഡ് വളർത്തുന്നതിനും ഞങ്ങൾ ശക്തമായ ഒരു സോഷ്യൽ മീഡിയ സാന്നിധ്യം നിർമ്മിക്കുകയും നിയന്ത്രിക്കുകയും ചെയ്യുന്നു.',
          longDescription: 'ഇന്നത്തെ ഡിജിറ്റൽ ലോകത്ത്, ശക്തമായ ഒരു സോഷ്യൽ മീഡിയ സാന്നിധ്യം ഒഴിച്ചുകൂടാനാവാത്തതാണ്. ഇൻസ്റ്റാഗ്രാം, ഫേസ്ബുക്ക് തുടങ്ങിയ പ്ലാറ്റ്‌ഫോമുകളിൽ നിങ്ങളുടെ പ്രേക്ഷകരുമായി ബന്ധപ്പെടാൻ ഞങ്ങളുടെ ടീം നിങ്ങളെ സഹായിക്കുന്നു. ഉള്ളടക്ക നിർമ്മാണം, ഷെഡ്യൂളിംഗ് മുതൽ കമ്മ്യൂണിറ്റി ഇടപഴകലും പ്രകടന വിശകലനവും വരെ ഞങ്ങൾ എല്ലാം കൈകാര്യം ചെയ്യുന്നു. നിങ്ങളുടെ ബ്രാൻഡിൻ്റെ തനതായ ശബ്ദം പ്രതിഫലിപ്പിക്കുകയും വിശ്വസ്തരായ ഒരു അനുയായിയെ വളർത്താൻ സഹായിക്കുകയും ചെയ്യുന്ന ഒരു ഉള്ളടക്ക തന്ത്രം വികസിപ്പിക്കാൻ ഞങ്ങൾ നിങ്ങളോടൊപ്പം പ്രവർത്തിക്കുന്നു.'
        },
        'branding-and-identity': {
          title: 'ബ്രാൻഡിംഗും ഐഡൻ്റിറ്റിയും',
          description: 'നിങ്ങളുടെ കഥ പറയുകയും നിങ്ങളുടെ ലക്ഷ്യ പ്രേക്ഷകരുമായി പ്രതിധ്വനിക്കുകയും ചെയ്യുന്ന ഒരു അദ്വിതീയ ബ്രാൻഡ് ഐഡൻ്റിറ്റി രൂപപ്പെടുത്തുന്നു.',
          longDescription: 'നിങ്ങളുടെ ബ്രാൻഡ് ഒരു ലോഗോ മാത്രമല്ല - അത് നിങ്ങൾ പറയുന്ന കഥയും നിങ്ങൾ ഉണർത്തുന്ന വികാരവുമാണ്. ഒരു ഏകീകൃതവും അവിസ്മരണീയവുമായ ബ്രാൻഡ് ഐഡൻ്റിറ്റി കെട്ടിപ്പടുക്കാൻ ഞങ്ങൾ നിങ്ങളെ സഹായിക്കുന്നു. ഇതിൽ ലോഗോ ഡിസൈൻ, കളർ പാലറ്റ് തിരഞ്ഞെടുക്കൽ, ടൈപ്പോഗ്രാഫി, ഒരു സമഗ്രമായ ബ്രാൻഡ് സ്റ്റൈൽ ഗൈഡ് എന്നിവ ഉൾപ്പെടുന്നു. ശക്തമായ ഒരു ബ്രാൻഡ് ഐഡൻ്റിറ്റി നിങ്ങളെ മത്സരത്തിൽ നിന്ന് വേറിട്ടു നിർത്തുകയും നിങ്ങളുടെ ഉപഭോക്താക്കളുമായി ശാശ്വതമായ വിശ്വാസം സ്ഥാപിക്കുകയും ചെയ്യുന്നു.'
        },
        'digital-marketing': {
          title: 'ഡിജിറ്റൽ മാർക്കറ്റിംഗ്',
          description: 'നിങ്ങളുടെ ഓൺലൈൻ ദൃശ്യപരത വർദ്ധിപ്പിക്കുന്നതിന് എസ്ഇഒ, എസ്ഇഎം, കണ്ടൻ്റ് മാർക്കറ്റിംഗ് എന്നിവയുൾപ്പെടെയുള്ള സമഗ്രമായ ഡിജിറ്റൽ മാർക്കറ്റിംഗ് തന്ത്രങ്ങൾ.',
          longDescription: 'ഞങ്ങളുടെ ഡിജിറ്റൽ മാർക്കറ്റിംഗ് സേവനങ്ങൾ നിങ്ങളുടെ ഓൺലൈൻ ദൃശ്യപരത വർദ്ധിപ്പിക്കാനും നിങ്ങളുടെ ബിസിനസ്സിലേക്ക് ലക്ഷ്യമിട്ട ട്രാഫിക്ക് എത്തിക്കാനും രൂപകൽപ്പന ചെയ്തിട്ടുള്ളതാണ്. തിരയൽ ഫലങ്ങളിൽ ഉയർന്ന റാങ്ക് നേടാൻ നിങ്ങളെ സഹായിക്കുന്നതിന് ഞങ്ങൾ സെർച്ച് എഞ്ചിൻ ഒപ്റ്റിമൈസേഷനിൽ (എസ്ഇഒ) വൈദഗ്ദ്ധ്യം നേടിയിരിക്കുന്നു, ലക്ഷ്യമിട്ട പരസ്യ കാമ്പെയ്‌നുകൾക്കായി സെർച്ച് എഞ്ചിൻ മാർക്കറ്റിംഗ് (എസ്ഇഎം), നിങ്ങളുടെ മേഖലയിലെ ഒരു അതോറിറ്റിയായി നിങ്ങളെ സ്ഥാപിക്കാൻ കണ്ടൻ്റ് മാർക്കറ്റിംഗ്. നിങ്ങളുടെ നിക്ഷേപത്തിന് മികച്ച വരുമാനം ലഭിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കാൻ ഞങ്ങൾ ഡാറ്റാധിഷ്ഠിത തന്ത്രങ്ങൾ സൃഷ്ടിക്കുന്നു.'
        },
        'consulting': {
          title: 'കൺസൾട്ടിംഗ്',
          description: 'ഡിജിറ്റൽ ലാൻഡ്‌സ്‌കേപ്പ് നാവിഗേറ്റ് ചെയ്യാനും അറിവോടെയുള്ള തീരുമാനങ്ങൾ എടുക്കാനും നിങ്ങളെ സഹായിക്കുന്നതിന് വിദഗ്ദ്ധ മാർഗ്ഗനിർദ്ദേശവും തന്ത്രപരമായ ഉപദേശവും.',
          longDescription: 'ഡിജിറ്റൽ ലോകത്താൽ അമിതഭാരം തോന്നുന്നുണ്ടോ? ഞങ്ങളുടെ കൺസൾട്ടിംഗ് സേവനങ്ങൾ നിങ്ങൾക്ക് ആവശ്യമായ വ്യക്തതയും ദിശാബോധവും നൽകുന്നു. നിങ്ങളുടെ ബിസിനസ്സ് ലക്ഷ്യങ്ങൾ ചർച്ച ചെയ്യാനും നിങ്ങളുടെ നിലവിലെ ഡിജിറ്റൽ സാന്നിധ്യം വിശകലനം ചെയ്യാനും വിജയത്തിനായി ഒരു ഇഷ്ടാനുസൃത റോഡ്മാപ്പ് വികസിപ്പിക്കാനും ഞങ്ങൾ ഒറ്റത്തവണ സെഷനുകൾ വാഗ്ദാനം ചെയ്യുന്നു. നിങ്ങൾ ഇപ്പോൾ ആരംഭിക്കുകയാണെങ്കിലും അല്ലെങ്കിൽ വിപുലീകരിക്കാൻ നോക്കുകയാണെങ്കിലും, ഞങ്ങളുടെ വിദഗ്ദ്ധോപദേശം അറിവോടെയുള്ള തീരുമാനങ്ങൾ എടുക്കാൻ നിങ്ങളെ ശാക്തീകരിക്കും.'
        }
      }
    };
    // --- END: translations/ml.ts ---

    // --- START: contexts/LanguageContext.tsx ---
    const LanguageContext = React.createContext(undefined);
    const LanguageProvider = ({ children }) => {
      const [language, setLanguageState] = React.useState('en');
      React.useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ml')) {
          setLanguageState(storedLanguage);
        }
      }, []);
      const setLanguage = (lang) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
      };
      const t = (key, ...subKeys) => {
        const translations = { en, ml };
        let current = translations[language][key];
        if (typeof current === 'string' && subKeys.length === 0) {
          return current;
        }
        for (const subKey of subKeys) {
          if (current && typeof current === 'object' && current[subKey] !== undefined) {
            current = current[subKey];
          } else {
            return [key, ...subKeys].join('.');
          }
        }
        return typeof current === 'string' ? current : [key, ...subKeys].join('.');
      };
      return React.createElement(LanguageContext.Provider, { value: { language, setLanguage, t } }, children);
    };
    const useLanguage = () => {
      const context = React.useContext(LanguageContext);
      if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
      }
      return context;
    };
    // --- END: contexts/LanguageContext.tsx ---

    // --- START: contexts/ThemeContext.tsx ---
    const ThemeContext = React.createContext(undefined);
    const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = React.useState('dark');
      React.useEffect(() => {
        const root = window.document.documentElement;
        const initialTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const determinedTheme = initialTheme || (systemPrefersDark ? 'dark' : 'light');
        setTheme(determinedTheme);
        if (determinedTheme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }, []);
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        const root = window.document.documentElement;
        if (newTheme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      };
      return React.createElement(ThemeContext.Provider, { value: { theme, toggleTheme } }, children);
    };
    const useTheme = () => {
      const context = React.useContext(ThemeContext);
      if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
      }
      return context;
    };
    // --- END: contexts/ThemeContext.tsx ---

    // --- START: constants.ts ---
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
    const NAV_LINKS = [
      { nameKey: 'nav_home', path: '/' },
      { nameKey: 'nav_about', path: '/about' },
      { nameKey: 'nav_team', path: '/team' },
      { nameKey: 'nav_services', path: '/services' },
    ];
    const TEAM_MEMBERS = [
      { id: 'mohammed-sabeeh', photoUrl: 'sabeeh.jpeg', skills: ['UI/UX Design', 'Brand Identity', 'Graphic Design', 'Figma', 'Adobe Creative Suite'] },
      { id: 'fadwa-kappoor', photoUrl: 'fadwa.jpeg', skills: ['Financial Planning', 'Project Management', 'Client Communication', 'Market Research'] },
      { id: 'alphin-martin', photoUrl: 'https://picsum.photos/seed/alphin/400/400', skills: ['Web Development', 'React', 'Node.js', 'App Development', 'Database Management'] },
      { id: 'dhananjay', photoUrl: 'dhan.jpeg', skills: ['Digital Strategy', 'SEO/SEM', 'Content Marketing', 'Social Media Analytics'] },
      { id: 'mohamed-ziyad-ta', photoUrl: 'https://picsum.photos/seed/ziyad/400/400', skills: ['Business Strategy', 'Mentorship', 'Entrepreneurship', 'Industry Connections'] },
    ];
    const SERVICES = [
      { id: 'social-media-management', icon: React.createElement(MegaphoneIcon) },
      { id: 'branding-and-identity', icon: React.createElement(PaletteIcon) },
      { id: 'digital-marketing', icon: React.createElement(DigitalMarketingIcon) },
      { id: 'consulting', icon: React.createElement(ConsultingIcon) },
    ];
    // --- END: constants.ts ---

    // --- START: components/AnimatedLogo.tsx ---
    const AnimatedLogo = () => {
      return React.createElement("svg", { width: "40", height: "40", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "overflow-visible" },
        React.createElement("defs", null,
          React.createElement("linearGradient", { id: "lineFade", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            React.createElement("stop", { offset: "0%", stopColor: "#D6B370", stopOpacity: "0" }),
            React.createElement("stop", { offset: "15%", stopColor: "#D6B370", stopOpacity: "0.8" }),
            React.createElement("stop", { offset: "85%", stopColor: "#D6B370", stopOpacity: "0.8" }),
            React.createElement("stop", { offset: "100%", stopColor: "#D6B370", stopOpacity: "0" })
          ),
          React.createElement("radialGradient", { id: "crescentGlow", cx: "0.5", cy: "0.5", r: "0.5" },
            React.createElement("stop", { offset: "0%", stopColor: "#F5EDE1", stopOpacity: "0.7" }),
            React.createElement("stop", { offset: "80%", stopColor: "#D6B370", stopOpacity: "1" }),
            React.createElement("stop", { offset: "100%", stopColor: "#D6B370", stopOpacity: "1" })
          ),
          React.createElement("filter", { id: "glowFilter", x: "-50%", y: "-50%", width: "200%", height: "200%" },
            React.createElement("feGaussianBlur", { stdDeviation: "5", result: "coloredBlur" }),
            React.createElement("feMerge", null,
              React.createElement("feMergeNode", { in: "coloredBlur" }),
              React.createElement("feMergeNode", { in: "SourceGraphic" })
            )
          )
        ),
        React.createElement("rect", { x: "0", y: "49.5", width: "100", height: "1", fill: "url(#lineFade)" }),
        React.createElement("path", {
          d: "M 50,85 C 45,70 30,65 30,55 C 30,65 40,75 50,85 C 60,75 70,65 70,55 C 70,65 55,70 50,85 Z",
          fill: "url(#crescentGlow)"
        }),
        React.createElement("g", { className: "animate-glow", filter: "url(#glowFilter)" },
          React.createElement("path", {
            d: "M50,25 L56,44 L75,50 L56,56 L50,75 L44,56 L25,50 L44,44 Z",
            className: "fill-brand-primary dark:fill-brand-text transition-colors duration-300"
          })
        )
      );
    };
    // --- END: components/AnimatedLogo.tsx ---
    
    // --- START: components/Footer.tsx ---
    const SocialIcon = ({ href, children }) => (
      React.createElement('a', { href: href, target: "_blank", rel: "noopener noreferrer", className: "text-gray-500 dark:text-gray-400 hover:text-brand-highlight transition-colors duration-300" },
        children
      )
    );
    const Footer = () => {
      return React.createElement('footer', { className: "bg-gray-200 dark:bg-brand-secondary mt-16" },
        React.createElement('div', { className: "container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left" },
          React.createElement('div', { className: "mb-4 md:mb-0" },
            React.createElement('p', { className: "font-semibold text-brand-primary dark:text-white" }, "SSM Polytechnic College"),
            React.createElement('p', { className: "text-sm text-gray-600 dark:text-gray-400" }, "An Initiative by Students & Faculty")
          ),
          React.createElement('div', { className: "mb-4 md:mb-0" },
            React.createElement('p', { className: "text-gray-600 dark:text-gray-400" }, "\u00A9 2025 ELYRA. All Rights Reserved.")
          ),
          React.createElement('div', { className: "flex space-x-6" },
            React.createElement(SocialIcon, { href: "#" },
              React.createElement('svg', { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }, React.createElement('path', { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }))
            ),
            React.createElement(SocialIcon, { href: "#" },
              React.createElement('svg', { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }, React.createElement('path', { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }))
            ),
            React.createElement(SocialIcon, { href: "#" },
               React.createElement('svg', { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }, React.createElement('path', { fillRule: "evenodd", d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.004.048-1.625.211-2.126.41-1.028.403-1.636.96-2.226 1.55h-.001c-.59.59-.973 1.185-1.37 2.21-.2.494-.36 1.103-.406 2.11-.047 1.02-.06 1.365-.06 3.806v.468c0 2.442.013 2.786.06 3.807.047 1.003.209 1.618.41 2.125.402 1.03.97 1.636 1.557 2.226.59.59 1.196.973 2.226 1.37.502.2 1.123.363 2.127.41.97.047 1.365.06 3.806.06h.468c2.442 0 2.786-.013 3.807-.06 1.003-.047 1.618-.209 2.126-.41 1.03-.402 1.637-.97 2.227-1.557.59-.59.972-1.196 1.37-2.227.2-.502.362-1.122.41-2.126.048-.97.06-1.365.06-3.807v-.468c0-2.442-.013-2.786-.06-3.807-.048-1.004-.21-1.618-.41-2.127-.402-1.028-.973-1.636-1.557-2.226-.59-.59-1.197-.973-2.227-1.37-.502-.2-1.123-.363-2.126-.41-.969-.047-1.365-.06-3.806-.06h-.468zM12 6.802a5.198 5.198 0 100 10.396 5.198 5.198 0 000-10.396zm0 1.802a3.398 3.398 0 110 6.796 3.398 3.398 0 010-6.796zM16.95 6.518a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z", clipRule: "evenodd" }))
            )
          )
        )
      );
    };
    // --- END: components/Footer.tsx ---

    // --- START: components/LanguageSwitcher.tsx ---
    const LanguageSwitcher = () => {
      const { language, setLanguage, t } = useLanguage();
      const { theme } = useTheme();
      const [isOpen, setIsOpen] = React.useState(false);
      const dropdownRef = React.useRef(null);
      React.useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
      const handleLanguageChange = (lang) => {
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
      return React.createElement('div', { className: "relative", ref: dropdownRef },
        React.createElement('button', {
          onClick: () => setIsOpen(!isOpen),
          className: buttonClass,
          "aria-haspopup": "true",
          "aria-expanded": isOpen,
          "aria-label": t('language')
        },
          React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
              React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 5h12M9 3v2m4 13l4-4M19 17v2m-4-15l4 4m-4 0l4-4m-4 4v10m-4-10a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" })
          ),
          React.createElement('span', null, language.toUpperCase())
        ),
        isOpen && React.createElement('div', { className: "absolute right-0 mt-2 w-36 bg-white dark:bg-brand-secondary rounded-md shadow-lg z-10 ring-1 ring-black ring-opacity-5" },
          React.createElement('div', { className: "py-1", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu" },
            React.createElement('button', {
              onClick: () => handleLanguageChange('en'),
              className: "w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-primary",
              role: "menuitem"
            }, "English"),
            React.createElement('button', {
              onClick: () => handleLanguageChange('ml'),
              className: "w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-primary",
              role: "menuitem"
            }, "മലയാളം")
          )
        )
      );
    };
    // --- END: components/LanguageSwitcher.tsx ---

    // --- START: components/Navbar.tsx ---
    const Navbar = () => {
      const { theme, toggleTheme } = useTheme();
      const { t } = useLanguage();
      const [isScrolled, setIsScrolled] = React.useState(false);
      const [isMenuOpen, setIsMenuOpen] = React.useState(false);
      React.useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      const activeLinkClass = 'text-brand-primary dark:text-brand-highlight';
      const inactiveLinkClass = 'text-gray-600 dark:text-brand-text/80 hover:opacity-100 dark:hover:text-brand-highlight hover:text-brand-primary transition-all duration-300';
      const contactButtonClass = "bg-black text-brand-accent dark:bg-brand-highlight dark:text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-brand-highlight/90 transition-all duration-300 transform hover:scale-105";
      return React.createElement('header', { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-brand-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}` },
        React.createElement('nav', { className: "container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center" },
          React.createElement('div', { className: "flex items-center space-x-3" },
            React.createElement('button', {
              onClick: toggleTheme,
              className: "focus:outline-none focus:ring-2 focus:ring-brand-highlight rounded-full p-1 transition-transform duration-300 ease-in-out hover:scale-110",
              "aria-label": "Toggle theme"
            },
              React.createElement('div', { className: `transition-transform duration-500 ease-in-out ${theme === 'light' ? 'rotate-180' : 'rotate-0'}` },
                React.createElement(AnimatedLogo, null)
              )
            ),
            React.createElement(Link, { to: "/", className: "flex items-center" },
              React.createElement('span', { className: "text-3xl font-bold font-serif text-brand-primary dark:text-brand-text tracking-wider" }, "elyra")
            )
          ),
          React.createElement('div', { className: "hidden md:flex items-center space-x-6" },
            ...NAV_LINKS.map(link => React.createElement(NavLink, {
              key: link.path,
              to: link.path,
              className: ({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass
            }, t(link.nameKey))),
            React.createElement('div', { className: "flex items-center space-x-2" },
              React.createElement(LanguageSwitcher, null),
              React.createElement('a', { href: "mailto:contact@elyra.dev", className: contactButtonClass }, t('contact'))
            )
          ),
          React.createElement('div', { className: "md:hidden" },
            React.createElement('button', { onClick: () => setIsMenuOpen(!isMenuOpen), className: "dark:text-white text-brand-primary focus:outline-none z-20 relative" },
              React.createElement('svg', { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" })
              )
            )
          )
        ),
        isMenuOpen && React.createElement('div', { className: "md:hidden bg-white dark:bg-brand-secondary pb-4" },
          React.createElement('div', { className: "flex flex-col items-center space-y-4 pt-4" },
            ...NAV_LINKS.map(link => React.createElement(NavLink, {
              key: link.path,
              to: link.path,
              onClick: () => setIsMenuOpen(false),
              className: ({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass
            }, t(link.nameKey))),
            React.createElement('div', { className: "flex flex-col items-center space-y-4 mt-4" },
              React.createElement(LanguageSwitcher, null),
              React.createElement('a', { href: "mailto:contact@elyra.dev", className: `${contactButtonClass} w-36 text-center` }, t('contact'))
            )
          )
        )
      );
    };
    // --- END: components/Navbar.tsx ---

    // --- START: pages/HomePage.tsx ---
    const HomePage = () => {
      const { t } = useLanguage();
      return React.createElement('div', { className: "animate-fade-in-up dark:bg-gradient-hero" },
        React.createElement('section', { className: "min-h-screen flex items-center justify-center relative overflow-hidden" },
          React.createElement('div', { className: "container mx-auto px-4 sm:px-6 text-center z-10" },
            React.createElement('div', { className: "flex justify-center mb-6" },
              React.createElement('div', { className: "transform scale-125 md:scale-150" },
                React.createElement(AnimatedLogo, null)
              )
            ),
            React.createElement('h1', { className: "text-5xl sm:text-6xl md:text-8xl font-bold font-serif dark:text-brand-text text-brand-primary mb-4 tracking-wider" }, "elyra"),
            React.createElement('p', { className: "text-md sm:text-lg md:text-xl text-gray-500 dark:text-brand-text/70 uppercase tracking-widest font-sans mb-8" }, "Where hope meet innovation,"),
            React.createElement('p', { className: "max-w-3xl mx-auto text-base sm:text-lg text-gray-700 dark:text-brand-text/80 mb-10" }, t('hero_subtitle')),
            React.createElement('div', { className: "flex flex-col sm:flex-row items-center justify-center gap-4" },
              React.createElement(Link, { to: "/services", className: "bg-brand-highlight text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 transform duration-300 w-full sm:w-auto" }, t('our_services')),
              React.createElement(Link, { to: "/about", className: "bg-transparent border-2 border-brand-primary dark:border-brand-highlight text-brand-primary dark:text-brand-highlight font-bold py-3 px-8 rounded-full hover:bg-brand-primary dark:hover:bg-brand-highlight hover:text-white dark:hover:text-brand-primary transition-all duration-300 w-full sm:w-auto" }, t('learn_more'))
            )
          )
        ),
        React.createElement('section', { className: "py-16 md:py-20" },
          React.createElement('div', { className: "container mx-auto px-4 sm:px-6 text-center" },
            React.createElement('h2', { className: "text-3xl md:text-4xl font-bold font-serif text-brand-primary dark:text-white mb-2" }, t('what_we_do')),
            React.createElement('p', { className: "text-md md:text-lg text-gray-600 dark:text-brand-text/70 mb-12 max-w-2xl mx-auto" }, t('what_we_do_subtitle')),
            React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" },
              ...SERVICES.map((service) => React.createElement('div', { key: service.id, className: "dark:bg-brand-secondary/50 bg-white dark:backdrop-blur-sm p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300" },
                React.createElement('div', { className: "flex justify-center mb-4" }, service.icon),
                React.createElement('h3', { className: "text-xl font-semibold font-serif text-brand-primary dark:text-white mb-3" }, t('services', service.id, 'title')),
                React.createElement('p', { className: "text-gray-600 dark:text-brand-text/70" }, t('services', service.id, 'description'))
              ))
            )
          )
        )
      );
    };
    // --- END: pages/HomePage.tsx ---

    // --- START: pages/AboutPage.tsx ---
    const AboutPage = () => {
      const { t } = useLanguage();
      return React.createElement('div', { className: "container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up" },
        React.createElement('div', { className: "text-center mb-16" },
          React.createElement('h1', { className: "text-4xl md:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-4" }, t('about_title')),
          React.createElement('p', { className: "text-lg md:text-xl text-brand-primary dark:text-brand-highlight" }, t('about_subtitle'))
        ),
        React.createElement('div', { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" },
          React.createElement('div', null,
            React.createElement('img', {
              src: "https://picsum.photos/seed/teamwork/800/600",
              alt: "Team collaboration",
              className: "rounded-lg shadow-2xl w-full h-auto object-cover"
            })
          ),
          React.createElement('div', { className: "space-y-6" },
            React.createElement('h2', { className: "text-2xl md:text-3xl font-bold font-serif text-brand-primary dark:text-white" }, t('our_story')),
            React.createElement('p', { className: "text-gray-700 dark:text-brand-text/80 leading-relaxed" }, t('our_story_content')),
            React.createElement('h2', { className: "text-2xl md:text-3xl font-bold font-serif text-brand-primary dark:text-white" }, t('who_we_are')),
            React.createElement('p', { className: "text-gray-700 dark:text-brand-text/80 leading-relaxed" }, t('who_we_are_content'))
          )
        ),
        React.createElement('div', { className: "mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center" },
          React.createElement('div', { className: "bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg" },
            React.createElement('h3', { className: "text-xl md:text-2xl font-bold font-serif text-brand-primary dark:text-brand-highlight mb-3" }, t('mission')),
            React.createElement('p', { className: "text-gray-700 dark:text-brand-text/80" }, t('mission_content'))
          ),
          React.createElement('div', { className: "bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg" },
            React.createElement('h3', { className: "text-xl md:text-2xl font-bold font-serif text-brand-primary dark:text-brand-highlight mb-3" }, t('vision')),
            React.createElement('p', { className: "text-gray-700 dark:text-brand-text/80" }, t('vision_content'))
          ),
          React.createElement('div', { className: "bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg" },
            React.createElement('h3', { className: "text-xl md:text-2xl font-bold font-serif text-brand-primary dark:text-brand-highlight mb-3" }, t('values')),
            React.createElement('p', { className: "text-gray-700 dark:text-brand-text/80" }, t('values_content'))
          )
        )
      );
    };
    // --- END: pages/AboutPage.tsx ---

    // --- START: pages/TeamPage.tsx ---
    const TeamMemberCard = ({ member }) => {
      const { t } = useLanguage();
      return React.createElement(Link, { to: `/team/${member.id}`, className: "block" },
        React.createElement('div', { className: "bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm rounded-lg overflow-hidden shadow-lg group transform transition-all duration-500 hover:shadow-2xl hover:scale-105" },
          React.createElement('div', { className: "relative h-80 sm:h-72" },
            React.createElement('img', { src: member.photoUrl, alt: t('team_members', member.id, 'name'), className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }),
            React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" }),
            React.createElement('div', { className: "absolute bottom-0 left-0 p-4" },
              React.createElement('h3', { className: "text-xl font-bold font-serif text-white" }, t('team_members', member.id, 'name')),
              React.createElement('p', { className: "text-brand-highlight font-semibold" }, t('team_members', member.id, 'role'))
            )
          )
        )
      );
    };
    const TeamPage = () => {
      const { t } = useLanguage();
      return React.createElement('div', { className: "container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up" },
        React.createElement('div', { className: "text-center mb-16" },
          React.createElement('h1', { className: "text-4xl md:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-4" }, t('team_title')),
          React.createElement('p', { className: "text-lg md:text-xl text-brand-primary dark:text-brand-highlight max-w-3xl mx-auto" }, t('team_subtitle'))
        ),
        React.createElement('div', { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center" },
          ...TEAM_MEMBERS.map((member) => React.createElement(TeamMemberCard, { key: member.id, member: member }))
        )
      );
    };
    // --- END: pages/TeamPage.tsx ---

    // --- START: pages/ServicesPage.tsx ---
    const ServiceCard = ({ service, index }) => {
      const { t } = useLanguage();
      return React.createElement(Link, { to: `/services/${service.id}`, className: "block group transition-transform duration-300 ease-out hover:scale-[1.02]" },
        React.createElement('div', { className: `flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}` },
          React.createElement('div', { className: "md:w-1/2 w-full flex justify-center items-center bg-white dark:bg-brand-secondary/50 dark:backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md" }, service.icon),
          React.createElement('div', { className: "md:w-1/2 w-full text-center md:text-left" },
            React.createElement('h3', { className: "text-2xl md:text-3xl font-bold font-serif text-brand-primary dark:text-brand-highlight mb-4 group-hover:text-brand-primary dark:group-hover:text-white transition-colors" }, t('services', service.id, 'title')),
            React.createElement('p', { className: "text-gray-700 dark:text-brand-text/80 leading-relaxed" }, t('services', service.id, 'description'))
          )
        )
      );
    };
    const ServicesPage = () => {
      const { t } = useLanguage();
      return React.createElement('div', { className: "container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up" },
        React.createElement('div', { className: "text-center mb-16" },
          React.createElement('h1', { className: "text-4xl md:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-4" }, t('services_title')),
          React.createElement('p', { className: "text-lg md:text-xl text-brand-primary dark:text-brand-highlight max-w-3xl mx-auto" }, t('services_subtitle'))
        ),
        React.createElement('div', { className: "space-y-16 md:space-y-20" },
          ...SERVICES.map((service, index) => React.createElement(ServiceCard, { key: service.id, service: service, index: index }))
        ),
        React.createElement('div', { className: "mt-24 text-center bg-brand-accent p-6 sm:p-10 rounded-lg shadow-lg" },
          React.createElement('h2', { className: "text-2xl sm:text-3xl font-bold font-serif text-brand-primary mb-4" }, t('ready_to_grow')),
          React.createElement('p', { className: "text-brand-primary/80 mb-8 max-w-2xl mx-auto" }, t('ready_to_grow_subtitle')),
          React.createElement('a', {
            href: "mailto:contact@elyra.dev",
            className: "bg-brand-primary text-brand-text font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 transform duration-300 inline-block"
          }, t('get_in_touch'))
        )
      );
    };
    // --- END: pages/ServicesPage.tsx ---

    // --- START: pages/ServiceDetailPage.tsx ---
    const ServiceDetailPage = () => {
      const { serviceId } = useParams();
      const { t } = useLanguage();
      const service = SERVICES.find(s => s.id === serviceId);
      if (!service) {
        return React.createElement('div', { className: "container mx-auto px-4 sm:px-6 py-16 text-center animate-fade-in-up" },
          React.createElement('h1', { className: "text-4xl font-bold font-serif text-brand-primary dark:text-white" }, t('service_not_found')),
          React.createElement('p', { className: "text-xl text-gray-600 dark:text-brand-text/70 mt-4" }, t('service_not_found_subtitle')),
          React.createElement(Link, { to: "/services", className: "mt-8 inline-block bg-brand-highlight text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 transform duration-300" }, t('back_to_services'))
        );
      }
      const longDescription = t('services', service.id, 'longDescription');
      return React.createElement('div', { className: "container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up" },
        React.createElement('div', { className: "max-w-4xl mx-auto" },
          React.createElement('div', { className: "flex flex-col items-center text-center mb-12" },
            React.createElement('div', { className: "mb-6 scale-125" }, service.icon),
            React.createElement('h1', { className: "text-4xl md:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-4" }, t('services', service.id, 'title'))
          ),
          React.createElement('div', { className: "prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-brand-text/80 leading-relaxed text-left space-y-4" },
            ...longDescription.split('\n').map((paragraph, index) => React.createElement('p', { key: index }, paragraph))
          ),
          React.createElement('div', { className: "text-center mt-16" },
            React.createElement(Link, { to: "/services", className: "bg-transparent border-2 border-brand-primary dark:border-brand-highlight text-brand-primary dark:text-brand-highlight font-bold py-3 px-8 rounded-full hover:bg-brand-primary dark:hover:bg-brand-highlight hover:text-white dark:hover:text-brand-primary transition-all duration-300" }, t('view_all_services'))
          )
        )
      );
    };
    // --- END: pages/ServiceDetailPage.tsx ---

    // --- START: pages/TeamMemberDetailPage.tsx ---
    const TeamMemberDetailPage = () => {
      const { memberId } = useParams();
      const { t } = useLanguage();
      const member = TEAM_MEMBERS.find(m => m.id === memberId);
      if (!member) {
        return React.createElement('div', { className: "container mx-auto px-6 py-16 text-center animate-fade-in-up" },
          React.createElement('h1', { className: "text-4xl font-bold font-serif text-brand-primary dark:text-white" }, t('member_not_found')),
          React.createElement(Link, { to: "/team", className: "mt-8 inline-block bg-brand-highlight text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105 transform duration-300" }, t('back_to_team'))
        );
      }
      const memberName = t('team_members', member.id, 'name');
      const memberRole = t('team_members', member.id, 'role');
      const memberBio = t('team_members', member.id, 'bio');
      return React.createElement('div', { className: "container mx-auto px-4 sm:px-6 py-16 animate-fade-in-up" },
        React.createElement('div', { className: "max-w-5xl mx-auto" },
          React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start" },
            React.createElement('div', { className: "md:col-span-1 mb-8 md:mb-0" },
              React.createElement('img', { src: member.photoUrl, alt: memberName, className: "rounded-lg shadow-2xl w-full h-auto object-cover aspect-square" })
            ),
            React.createElement('div', { className: "md:col-span-2" },
              React.createElement('h1', { className: "text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-brand-primary dark:text-white mb-2" }, memberName),
              React.createElement('p', { className: "text-lg sm:text-xl lg:text-2xl text-brand-primary dark:text-brand-highlight font-semibold mb-6" }, memberRole),
              React.createElement('p', { className: "text-gray-700 dark:text-brand-text/80 leading-relaxed mb-8" }, memberBio),
              React.createElement('h2', { className: "text-2xl font-bold font-serif text-brand-primary dark:text-white mb-4" }, t('skills')),
              React.createElement('div', { className: "flex flex-wrap gap-3" },
                ...member.skills.map(skill => React.createElement('span', { key: skill, className: "bg-gray-200 dark:bg-brand-secondary text-brand-secondary dark:text-brand-highlight text-sm font-semibold px-4 py-2 rounded-full" }, skill))
              )
            )
          ),
          React.createElement('div', { className: "text-center mt-16" },
            React.createElement(Link, { to: "/team", className: "bg-transparent border-2 border-brand-primary dark:border-brand-highlight text-brand-primary dark:text-brand-highlight font-bold py-3 px-8 rounded-full hover:bg-brand-primary dark:hover:bg-brand-highlight hover:text-white dark:hover:text-brand-primary transition-all duration-300" }, t('meet_the_whole_team'))
          )
        )
      );
    };
    // --- END: pages/TeamMemberDetailPage.tsx ---
    
    // --- START: App.tsx ---
    const AppContent = () => {
      const { language } = useLanguage();
      return React.createElement(HashRouter, null,
        React.createElement('div', { className: `flex flex-col min-h-screen bg-gradient-page-light dark:bg-gradient-page ${language === 'ml' ? 'tracking-ml' : ''}` },
          React.createElement(Navbar, null),
          React.createElement('main', { className: "flex-grow pt-20" },
            React.createElement(Routes, null,
              React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }),
              React.createElement(Route, { path: "/about", element: React.createElement(AboutPage, null) }),
              React.createElement(Route, { path: "/team", element: React.createElement(TeamPage, null) }),
              React.createElement(Route, { path: "/team/:memberId", element: React.createElement(TeamMemberDetailPage, null) }),
              React.createElement(Route, { path: "/services", element: React.createElement(ServicesPage, null) }),
              React.createElement(Route, { path: "/services/:serviceId", element: React.createElement(ServiceDetailPage, null) })
            )
          ),
          React.createElement(Footer, null)
        )
      );
    };
    const App = () => {
      return React.createElement(ThemeProvider, null,
        React.createElement(LanguageProvider, null,
          React.createElement(AppContent, null)
        )
      );
    };
    // --- END: App.tsx ---

    // --- START: index.tsx ---
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error("Could not find root element to mount to");
    }
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      React.createElement(React.StrictMode, null,
        React.createElement(App, null)
      )
    );
    // --- END: index.tsx ---

})();
