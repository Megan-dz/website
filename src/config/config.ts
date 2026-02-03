// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Megan Dcruz',
    title: 'Undergraduate Student',
    image: getAsset('images/Resume_Pic (1).png'), // Customize or replace with your profile image
    description:
      'A first year Economics and Data Science major who loves exploring the role of data in economics.\n' +
      '\n' +
      'Christ University\n' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'Exploring economics through data analytics.',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Megan Dcruz – Undergraduate Student',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Economics student', 'Data analytics enthusiast', 'Christ University'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' }, 
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],


  education: [
    {
      institution: 'Christ university',
      degree: 'Bachelor of Science in Economics with Data Science',
      year: 'YYYY–YYYY',
      image: getAsset('images/education/placeholder.png'),
      description: ['Brief description of your focus or thesis'],
    },
    {
      institution: 'Another Institution',
      degree: 'Another Degree or Certificate',
      year: 'YYYY–YYYY',
      image: getAsset('images/education/placeholder.png'),
      description: ['Key topics or skills learned'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Your Certificate or Specialization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Your Role',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Your Organization',
      time: '(MMM YYYY – Present)',
      desp: ['Brief responsibility 1', 'Brief responsibility 2'],
    },
    {
      title: 'Previous Role',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Previous Organization',
      time: '(MMM YYYY – MMM YYYY)',
      desp: ['Key contribution 1', 'Key contribution 2'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Netflix_Rating_Analysis',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'An analysis of Netflix ratings using Excel and data visualization to uncover viewer trends and preferences.',
      Githublink: 'https://github.com/Megan-dz/Netflix_Content_Analysis',
    },
  ],


  contact: {
    email: 'megandz07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/megan-anriya-dcruz-mnsk070711/',
    github: 'https://github.com/Megan-dz',
  },
};

export default siteConfig;
