
import { SkillCategory, Experience, Education, Stat, Project } from './types';

export const PERSONAL_INFO = {
  firstName: "Sageer",
  lastName: "Ahmed",
  role: "Full Stack Developer | WordPress Expert",
  email: "s.hunzai100@gmail.com",
  location: "Hunza, Gilgit, Pakistan",
  summary: "Full Stack Developer and Software Engineering student with hands-on experience building responsive, user-friendly web applications. Passionate about creating clean, visually appealing interfaces and optimizing performance. Proficient in React, JavaScript, Tailwind CSS, Bootstrap, and WordPress.",
  age: "18",
  nationality: "Pakistani",
  study: "Karakoram International University",
  interests: "AI, Web Development, Hiking, Photography",
  github: "sageerify",
  linkedin: "sageerify",
  twitter: "sageerify",
  instagram: "sageerify",
  website: "sageer.me"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 9 },
      { name: "Next.js", level: 8 },
      { name: "JavaScript", level: 9 },
      { name: "Tailwind CSS", level: 9 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 7 },
      { name: "Python", level: 7 },
      { name: "MySQL", level: 8 },
      { name: "MongoDB", level: 7 },
    ]
  },
  {
    title: "CMS & Design",
    skills: [
      { name: "WordPress", level: 9 },
      { name: "Elementor", level: 9 },
      { name: "SEO", level: 8 },
      { name: "Bootstrap", level: 8 },
    ]
  },
  {
    title: "Other",
    skills: [
      { name: "Git/GitHub", level: 9 },
      { name: "C/C++", level: 6 },
      { name: "UI/UX", level: 8 },
      { name: "English/Urdu", level: 10 },
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "Nov 2023 - Present",
    description: "Built responsive websites using HTML, CSS, JavaScript, and React.js. Created mobile-friendly pages with Tailwind CSS and Bootstrap. Built and maintained user interfaces that consume data from social media APIs.",
    tech: "React, Node.js, Tailwind, API Integration"
  },
  {
    role: "WordPress Developer",
    company: "The Nation Dispatch, Inc.",
    period: "Oct 2022 - April 2023",
    description: "Worked as a CMS/WordPress Developer, customizing and maintaining the HunzaTimes website. Managed content publishing, page layouts, and performance optimization. Fixed UI/UX issues and ensured mobile responsiveness.",
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "B.S. in Computer Science",
    institution: "Karakoram International University",
    period: "2024 - 2028",
    description: "Focusing on Software Engineering and complex algorithms. Thriving in collaborative environments and continuously learning digital solutions."
  },
  {
    degree: "SSC & HSSC",
    institution: "USWA Public School and College Ganish Hunza",
    period: "2020 - 2024",
    description: "Foundation in science and computer technology."
  }
];

export const STATS: Stat[] = [
  { label: "Github stars", value: "24", icon: "Star" },
  { label: "Happy clients", value: "12", icon: "Users" },
  { label: "Years of experience", value: "2", icon: "Calendar" },
  { label: "OSS Projects", value: "8", icon: "Zap" },
];

export const PROJECTS: Project[] = [
  {
    title: "AI Scholarship Assistant",
    imageUrl: "https://images.unsplash.com/photo-1677691824304-279660ceece3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://aistudio.instagram.com/ai/895045583317338/?utm_source=share"
  },
  {
    title: "Tourism App",
    imageUrl: "https://images.unsplash.com/photo-1609861517208-e5b7b4cd4b87?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://himalayabasecamp.vercel.app/"
  },
  {
    title: "HunzaTimes CMS",
    imageUrl: "https://images.unsplash.com/photo-1560472355-a3b4bcfe790c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://hunzatimes.com/"
  }
];
