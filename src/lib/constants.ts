import type { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Kumari Rupam',
  title: 'Quality Assurance Engineer',
  description:
    'Dedicated QA professional with a passion for delivering excellence. Award-winning quality assurance engineer committed to high standards, accountability, and building dependable software.',
  email: 'your.email@example.com',
  phone: '+91 XXXXXXXXXX',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/kumari-rupam-4621a024b/',
  github: 'https://github.com/',
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
      role: 'Quality Assurance Engineer',
      company: 'Leading IT Services Company',
      duration: 'Present',
      description: [
        'Lead QA initiatives ensuring software quality across multiple enterprise projects',
        'Designed and executed comprehensive test strategies reducing production defects by 40%',
        'Implemented automated testing frameworks using Selenium and Python',
        'Collaborated with cross-functional teams to establish quality benchmarks and best practices',
        'Recipient of the Best QA Award for outstanding contributions to team success and service quality',
      ],
      technologies: ['Selenium', 'JIRA', 'Python', 'Postman', 'SQL', 'Jenkins', 'Git'],
    },
    {
      id: 2,
      role: 'Associate QA Engineer',
      company: 'IT Services Organization',
      duration: 'Previous Role',
      description: [
        'Performed functional, regression, and integration testing for web applications',
        'Created and maintained detailed test cases and test plans',
        'Identified and documented software defects with clear reproduction steps',
        'Participated in Agile sprint ceremonies and contributed to process improvements',
      ],
      technologies: ['Manual Testing', 'JIRA', 'Selenium', 'SQL', 'API Testing'],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform QA Automation',
      description:
        'Built an end-to-end automation framework for a large-scale e-commerce platform, covering 500+ test scenarios across checkout, payments, and inventory management modules.',
      technologies: ['Selenium WebDriver', 'TestNG', 'Java', 'Maven', 'Jenkins'],
      category: 'Automation',
    },
    {
      id: 2,
      title: 'REST API Testing Suite',
      description:
        'Developed a comprehensive API testing framework validating 200+ REST endpoints with automated response validation, schema verification, and performance benchmarking.',
      technologies: ['Postman', 'Newman', 'JavaScript', 'JSON Schema', 'CI/CD'],
      category: 'API Testing',
    },
    {
      id: 3,
      title: 'Performance Testing Dashboard',
      description:
        'Designed load testing scenarios for a banking application handling 10K+ concurrent users, with real-time monitoring dashboards and automated performance reports.',
      technologies: ['JMeter', 'Grafana', 'InfluxDB', 'Python', 'Docker'],
      category: 'Performance',
    },
    {
      id: 4,
      title: 'Mobile App Testing Framework',
      description:
        'Established a cross-platform mobile testing framework supporting iOS and Android, with device farm integration for parallel execution across 20+ device configurations.',
      technologies: ['Appium', 'BrowserStack', 'Python', 'Pytest', 'Allure'],
      category: 'Mobile Testing',
    },
    {
      id: 5,
      title: 'CI/CD Quality Gate Pipeline',
      description:
        'Implemented quality gates in the CI/CD pipeline with automated smoke tests, code coverage thresholds, and Slack notifications for build status updates.',
      technologies: ['Jenkins', 'GitHub Actions', 'SonarQube', 'Docker', 'Bash'],
      category: 'DevOps',
    },
    {
      id: 6,
      title: 'Accessibility Testing Toolkit',
      description:
        'Created an automated accessibility testing toolkit ensuring WCAG 2.1 compliance across web applications, with custom reporting and remediation tracking.',
      technologies: ['Axe-core', 'Lighthouse', 'Cypress', 'TypeScript', 'Pa11y'],
      category: 'Accessibility',
    },
  ],
  skillCategories: [
    {
      title: 'Testing & QA',
      skills: [
        { name: 'Manual Testing', level: 95 },
        { name: 'Test Automation', level: 88 },
        { name: 'API Testing', level: 90 },
        { name: 'Performance Testing', level: 82 },
        { name: 'Mobile Testing', level: 78 },
        { name: 'Security Testing', level: 72 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Selenium', level: 92 },
        { name: 'Postman', level: 90 },
        { name: 'JIRA', level: 95 },
        { name: 'JMeter', level: 80 },
        { name: 'Appium', level: 75 },
        { name: 'Cypress', level: 78 },
      ],
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 88 },
        { name: 'Java', level: 75 },
        { name: 'TypeScript', level: 72 },
        { name: 'Bash/Shell', level: 70 },
      ],
    },
    {
      title: 'Methodologies',
      skills: [
        { name: 'Agile/Scrum', level: 92 },
        { name: 'CI/CD', level: 85 },
        { name: 'DevOps', level: 78 },
        { name: 'TDD/BDD', level: 80 },
        { name: 'SDLC', level: 90 },
        { name: 'Risk Analysis', level: 82 },
      ],
    },
  ],
  achievements: [
    {
      id: 1,
      title: 'Best QA Award',
      description:
        'Recognized for consistently demonstrating excellence in quality assurance through dedication, accountability, and commitment to delivering high standards. Nominated by Divya G for positively influencing team success and service quality.',
      year: '2024',
    },
    {
      id: 2,
      title: 'Zero Defect Release',
      description:
        'Led the QA efforts for a critical release achieving zero post-production defects, setting a benchmark for quality in the organization.',
      year: '2024',
    },
    {
      id: 3,
      title: 'Automation Champion',
      description:
        'Spearheaded the automation initiative that reduced regression testing time by 60%, earning recognition as the team automation champion.',
      year: '2023',
    },
    {
      id: 4,
      title: 'Process Improvement Award',
      description:
        'Identified and implemented process improvements that enhanced team productivity by 35% and reduced defect leakage significantly.',
      year: '2023',
    },
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kumari-rupam-4621a024b/',
      icon: 'linkedin',
    },
    { name: 'GitHub', url: 'https://github.com/', icon: 'github' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: 'mail' },
  ],
};

export const aboutText = {
  headline: 'Turning Quality Into a Competitive Advantage',
  paragraphs: [
    "I'm Kumari Rupam, a passionate Quality Assurance Engineer dedicated to building reliable, high-performance software. With a keen eye for detail and a methodical approach to testing, I ensure every product I touch meets the highest standards of quality.",
    'My expertise spans across manual and automated testing, API validation, performance engineering, and CI/CD quality gates. I believe that quality is not just about finding bugs — it\'s about preventing them and building confidence in every release.',
    "Recognized with the Best QA Award for my dedication, accountability, and commitment to delivering excellence, I thrive in collaborative environments where quality is everyone's responsibility.",
  ],
  stats: [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Test Cases Written', value: '5000+' },
    { label: 'Bugs Identified', value: '3000+' },
    { label: 'Automation Coverage', value: '85%' },
  ],
};

export const testimonial = {
  quote:
    'Rupam consistently demonstrates excellence in quality assurance through her dedication, accountability, and commitment to delivering high standards. Her dependable performance and valuable contributions have positively influenced team success and service quality, making her a deserving recipient of the Best QA award.',
  author: 'Divya G',
  role: 'Team Lead / Nominator',
};
