
export interface Skill {
  name: string;
  level: number; // 1-10
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tech?: string;
  backend?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  imageUrl: string;
  link: string;
}

export interface Stat {
  label: string;
  value: string | number;
  icon: string;
}
