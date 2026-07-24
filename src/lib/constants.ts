import type { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Kumari Rupam',
  title: 'Software Engineer',
  description:
    'Passionate software professional at Wipro, dedicated to excellence, accountability, and delivering high standards.',
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
    { label: 'Contact', href: '#contact' },
  ],
  experiences: [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Wipro',
      duration: 'Present',
      description: [
        'Working at Wipro contributing to enterprise software solutions',
        'Collaborating with cross-functional teams to deliver quality products',
        'Continuously learning and applying new technologies',
      ],
      technologies: ['Update', 'With', 'Your', 'Tech', 'Stack'],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Project 1',
      description:
        'Update with your actual project description. Describe the problem you solved and the impact you made.',
      technologies: ['Update', 'With', 'Your', 'Technologies'],
      category: 'Development',
    },
    {
      id: 2,
      title: 'Project 2',
      description:
        'Update with your actual project description. Describe the problem you solved and the impact you made.',
      technologies: ['Update', 'With', 'Your', 'Technologies'],
      category: 'Development',
    },
    {
      id: 3,
      title: 'Project 3',
      description:
        'Update with your actual project description. Describe the problem you solved and the impact you made.',
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
  achievements: [],
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
    "I'm Kumari Rupam, a passionate software professional currently working at Wipro. My commitment to high standards and accountability drives me to continuously improve and push boundaries.",
    'With a strong foundation in technology and a detail-oriented mindset, I thrive in collaborative environments where quality and innovation go hand in hand.',
    'I believe in making a positive impact through dependable performance, continuous learning, and contributing meaningfully to every project I take on.',
  ],
  stats: [
    { label: 'Company', value: 'Wipro' },
    { label: 'Projects', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Years Learning', value: '3+' },
  ],
};

export const testimonial = {
  quote: '',
  author: '',
  role: '',
};
