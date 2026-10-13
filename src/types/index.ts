export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: "AI" | "Backend" | "Automation" | "Web" | "Voice AI" | "Data & Analytics";
  /** Set for real client work — shows the "Client" tag (+ country) and appears under the Client Work filter */
  client?: { country?: string; code?: "AE" | "FR" | "US" | "PK" };
  isFeatured: boolean;
  /** One headline result shown on cards, e.g. "Docker image 3.2 GB → 850 MB" */
  highlight?: string;
  /** Card image, e.g. "/projects/covers/my-project.webp" (falls back to a placeholder if missing) */
  cover?: string;
  status?: "Shipped" | "In progress" | "Hackathon";
  /** When the project ran, e.g. "Sep – Oct 2026" (shown on client work) */
  period?: string;
  /** Client work shown without names, logos or links */
  confidential?: boolean;
  links?: { live?: string; github?: string; apiDocs?: string; article?: string };
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
    testing?: string[];
    whatIdChange?: string[];
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