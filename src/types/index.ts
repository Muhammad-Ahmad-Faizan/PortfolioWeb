export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: "AI" | "Backend" | "Automation" | "Web";
  isFeatured: boolean;
  techStack: string[];
  media?: ProjectMedia[];
  sections: {
    overview: string;
    businessProblem: string;
    solution: string;
    architectureDiagram: string;
    keyFeatures: string[];
    techStack: string[];
    challenges: { title: string; description: string }[];
    lessonsLearned: string[];
    results: string;
    relatedProjects: string[];
  };
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "education" | "internship" | "freelance" | "independent";
  summary: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Note {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  content: string;
}

export interface NavLink {
  href: string;
  label: string;
  icon: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}