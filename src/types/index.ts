export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  icon?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  grade?: string;
  description?: string;
  skills?: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteData {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  navItems: NavItem[];
  experiences: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  socialLinks: SocialLink[];
}
