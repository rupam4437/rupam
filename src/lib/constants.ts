import type { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Kumari Rupam',
  title: 'Data Analytics Professional',
  description:
    'Data Analytics professional at Wipro, dedicated to excellence, accountability, and leveraging analytics to drive innovation and strategic growth.',
  email: 'rupam4437@gmail.com',
  phone: '+91 XXXXXXXXXX',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/kumari-rupam-4621a024b/',
  github: 'https://github.com/rupam4437',
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],
  experiences: [
    {
      id: 1,
      role: 'Data analytics',
      company: 'Wipro',
      duration: 'Jul 2025 – Present',
      description: [
        'Experienced in data visualization, reporting, and trend analysis to improve efficiency and outcomes.',
        'Passionate about leveraging analytics to drive innovation and strategic growth.',
        'Collaborating with cross-functional teams to deliver insights that support decision-making.'
      ],
      technologies: ['Power BI', 'Microsoft Excel', 'Data Visualization', 'Reporting', 'Trend Analysis', 'SQL'],
    },
  ],
  education: [
    {
      id: 1,
      institution: 'Birla Institute of Technology and Science, Pilani',
      degree: 'Master of Technology',
      field: 'Computing Systems and Infrastructure',
      duration: 'Apr 2026 – Present',
      description: 'Currently pursuing advanced systems, infrastructure design, and computational methodologies.',
      skills: ['Computing Systems', 'Infrastructure Management']
    },
    {
      id: 2,
      institution: 'Aryabhatta Knowledge University, Patna',
      degree: 'Bachelor of Computer Application',
      field: 'Computer Science',
      duration: 'Jul 2021 – Aug 2024',
      grade: 'Grade: 8.35',
      description: 'Gained a solid foundation in core subjects such as operating systems, Java, networking, C++, and DBMS. Developed strong problem-solving and critical thinking skills.',
      skills: ['Operating Systems', 'C++', 'Java', 'DBMS', 'Networking']
    },
    {
      id: 3,
      institution: 'Indian Institute of Technology, Patna',
      degree: 'Advance Certificate Program',
      field: 'Full Stack Web Development',
      duration: 'Feb 2022 – Dec 2023',
      grade: 'Grade: A',
      description: 'Front-end Development (React, Angular), Back-end Development (Node.js, Express, SQL, MongoDB), API Integration (RESTful APIs), and Version Control & Deployment (Git, AWS, Heroku).',
      skills: ['React', 'Angular', 'Node.js', 'Express', 'SQL', 'MongoDB', 'HTML', 'CSS', 'Git']
    },
    {
      id: 4,
      institution: 'Vivekanand Mission School, Aurangabad',
      degree: 'Senior School Certificate (12th)',
      field: 'Commerce stream',
      duration: 'Completed',
      grade: 'Grade: 75.6%',
      description: 'Studied key business, accounting, and finance principles, shaping analytical and analytical skills.',
      skills: ['Business Studies', 'Accounting', 'Economics']
    },
    {
      id: 5,
      institution: 'DAV Public School, Aurangabad',
      degree: 'Secondary School Certificate (10th)',
      field: 'Mathematics and Information technology',
      duration: 'Completed',
      grade: 'Grade: 78.6%',
      description: 'Served as Samriddhi House Captain, developing teamwork, communication, and responsibility.',
      skills: ['Leadership', 'Information Technology', 'Mathematics']
    }
  ],
  certifications: [
    {
      id: 1,
      title: 'Designing and Implementing a Microsoft Azure AI Solution',
      issuer: 'Microsoft',
      date: 'Issued May 2025',
      description: 'Demonstrated skills in building and deploying AI solutions using Azure services like Cognitive Services, Azure Machine Learning, and knowledge mining.'
    },
    {
      id: 2,
      title: 'Microsoft Azure Security Technologies',
      issuer: 'Microsoft',
      date: 'Issued May 2025',
      description: 'Demonstrated expertise in implementing security controls, threat protection, identity management, and securing data, applications, and networks.'
    },
    {
      id: 3,
      title: 'Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB',
      issuer: 'Microsoft',
      date: 'Issued Jun 2025',
      description: 'Showcased skills in building scalable, globally distributed cloud-native applications using Azure Cosmos DB.'
    },
    {
      id: 4,
      title: 'Administer Windows Server Hybrid Core Infrastructure',
      issuer: 'Microsoft',
      date: 'Issued Jun 2025',
      description: 'Demonstrated knowledge in managing hybrid environments, Windows Server infrastructure, and core administrative tasks.'
    },
    {
      id: 5,
      title: 'Atlassian Agile Project Management Professional Certificate',
      issuer: 'LinkedIn & Atlassian',
      date: 'Issued Nov 2024',
      description: 'Expertise in Agile methodologies, Jira, and effective project management practices for Agile teams.'
    },
    {
      id: 6,
      title: 'Career Essentials in Data Analysis by Microsoft and LinkedIn',
      issuer: 'LinkedIn & Microsoft',
      date: 'Issued Nov 2024',
      description: 'Gained foundational skills in data analysis, data visualization, and data analytics.'
    },
    {
      id: 7,
      title: 'Master Microsoft Excel',
      issuer: 'LinkedIn',
      date: 'Issued Nov 2024',
      description: 'Advanced skills in data modeling, formulas, and dashboards using Microsoft Excel.'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Sales Performance Dashboard',
      description: 'Built an interactive Power BI dashboard to visualize sales trends, KPIs, and regional performance metrics, enabling data-driven decision making for the leadership team.',
      technologies: ['Power BI', 'SQL', 'Excel', 'DAX'],
      category: 'Data Analytics',
    },
    {
      id: 2,
      title: 'Full Stack E-Commerce Platform',
      description: 'Developed a complete e-commerce web application with user authentication, product catalog, shopping cart, and payment integration using the MERN stack.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Web Development',
    },
    {
      id: 3,
      title: 'Azure Cloud Infrastructure Setup',
      description: 'Designed and implemented a secure cloud infrastructure on Microsoft Azure with AI capabilities, identity management, and Cosmos DB for globally distributed data.',
      technologies: ['Azure', 'Cosmos DB', 'Azure AI', 'Security'],
      category: 'Cloud',
    },
    {
      id: 4,
      title: 'Student Management System',
      description: 'Created a full-stack student management system with CRUD operations, role-based access control, and automated report generation.',
      technologies: ['Java', 'MySQL', 'HTML', 'CSS'],
      category: 'Web Development',
    },
    {
      id: 5,
      title: 'HR Analytics Report',
      description: 'Designed an automated HR analytics reporting system using Excel and Power BI to track employee performance, attrition trends, and workforce planning.',
      technologies: ['Power BI', 'Excel', 'SQL', 'Data Modeling'],
      category: 'Data Analytics',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Designed and developed this premium portfolio website with 3D animations, smooth scrolling, and responsive design using Next.js and Three.js.',
      technologies: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS'],
      category: 'Web Development',
    },
  ],
  skillCategories: [
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Power BI', level: 90 },
        { name: 'Microsoft Excel', level: 92 },
        { name: 'SQL', level: 85 },
        { name: 'Data Visualization', level: 88 },
        { name: 'Trend Analysis', level: 85 },
        { name: 'Reporting', level: 90 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 82 },
        { name: 'Node.js', level: 78 },
        { name: 'HTML/CSS', level: 88 },
        { name: 'Angular', level: 75 },
        { name: 'MongoDB', level: 76 },
        { name: 'Express', level: 78 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Git & GitHub', level: 88 },
        { name: 'AWS (Basic)', level: 70 },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 80 },
        { name: 'C++', level: 78 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 72 },
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
    { name: 'Email', url: 'mailto:rupam4437@gmail.com', icon: 'mail' },
  ],
};

export const aboutText = {
  headline: 'Transforming Data into Actionable Insights',
  paragraphs: [
    "I'm Kumari Rupam, a Data Analytics professional currently working at Wipro in Bengaluru. I specialize in data visualization, reporting, and trend analysis to drive business innovation and efficiency.",
    "I have a deep academic background: currently pursuing my Master of Technology (M.Tech) in Computing Systems and Infrastructure from BITS Pilani, holding a Bachelor of Computer Applications (BCA) from Aryabhatta Knowledge University, and an Advance Certificate in Full Stack Web Development from IIT Patna.",
    "Certified across multiple Microsoft Azure technologies, I combine cloud infrastructure knowledge, web development expertise, and advanced data analytics to build high-performance, intelligent data systems."
  ],
  stats: [
    { label: 'Certifications', value: '7+' },
    { label: 'Projects Done', value: '10+' },
    { label: 'M.Tech Student', value: 'BITS Pilani' },
    { label: 'Wipro Role', value: 'Data Analytics' },
  ],
};

export const testimonial = {
  quote: '',
  author: '',
  role: '',
};
