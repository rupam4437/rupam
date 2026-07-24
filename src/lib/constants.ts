import type { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Kumari Rupam',
  title: 'Software Engineer',
  description:
    'Passionate software professional dedicated to excellence, accountability, and delivering high standards. Award-winning engineer committed to quality and continuous improvement.',
  email: 'your.email@example.com',
  phone: '+91 XXXXXXXXXX',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/kumari-rupam-4621a024b/',
  github: 'https://github.com/rupam4437',
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],
  experiences: [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Update with your company name',
      duration: 'Update with your duration',
      description: [
        'Update this with your actual role description from LinkedIn',
        'Add your key responsibilities and accomplishments',
        'Mention technologies and tools you work with',
      ],
      technologies: ['Update', 'With', 'Your', 'Tech', 'Stack'],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Project 1',
      description:
        'Update with your actual project description from LinkedIn. Describe the problem you solved and the impact you made.',
      technologies: ['Update', 'With', 'Your', 'Technologies'],
      category: 'Development',
    },
    {
      id: 2,
      title: 'Project 2',
      description:
        'Update with your actual project description from LinkedIn. Describe the problem you solved and the impact you made.',
      technologies: ['Update', 'With', 'Your', 'Technologies'],
      category: 'Development',
    },
    {
      id: 3,
      title: 'Project 3',
      description:
        'Update with your actual project description from LinkedIn. Describe the problem you solved and the impact you made.',
      technologies: ['Update', 'With', 'Your', 'Technologies'],
      category: 'Development',
    },
  ],
  skillCategories: [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Update from LinkedIn', level: 90 },
        { name: 'Update from LinkedIn', level: 85 },
        { name: 'Update from LinkedIn', level: 80 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Update from LinkedIn', level: 88 },
        { name: 'Update from LinkedIn', level: 82 },
        { name: 'Update from LinkedIn', level: 78 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Dedication', level: 95 },
        { name: 'Accountability', level: 92 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 88 },
      ],
    },
  ],
  achievements: [
    {
      id: 1,
      title: 'Best QA Award',
      description:
        'Recognized for consistently demonstrating excellence through dedication, accountability, and commitment to delivering high standards. Nominated by Divya G for positively influencing team success and service quality.',
      year: '2024',
    },
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kumari-rupam-4621a024b/',
      icon: 'linkedin',
    },
    { name: 'GitHub', url: 'https://github.com/rupam4437', icon: 'github' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: 'mail' },
  ],
};

export const aboutText = {
  headline: 'Building Excellence, One Line at a Time',
  paragraphs: [
    "I'm Kumari Rupam, a passionate software professional dedicated to delivering excellence in every project I undertake. My commitment to high standards and accountability drives me to continuously improve and push boundaries.",
    'With a strong foundation in technology and a detail-oriented mindset, I thrive in collaborative environments where quality and innovation go hand in hand.',
    'Recognized with the Best QA Award for my dedication and valuable contributions to team success, I believe in making a positive impact through dependable performance and continuous learning.',
  ],
  stats: [
    { label: 'Projects Delivered', value: '20+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Awards', value: '1' },
    { label: 'Years Learning', value: '3+' },
  ],
};

export const testimonial = {
  quote:
    'Rupam consistently demonstrates excellence in quality assurance through her dedication, accountability, and commitment to delivering high standards. Her dependable performance and valuable contributions have positively influenced team success and service quality, making her a deserving recipient of the Best QA award.',
  author: 'Divya G',
  role: 'Nominator',
};
