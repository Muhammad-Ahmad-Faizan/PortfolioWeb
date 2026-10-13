import { TechCategory } from "@/types";

// The tools I most want to be hired for — shown first and highlighted.
export const coreStack = [
  "Python",
  "TypeScript",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "Flutter",
  "LangGraph",
];

export const techCategories: TechCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Dart", "PHP"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "Flask", "Laravel", "REST APIs", "WebSockets", "JWT Auth", "Redis"],
  },
  {
    category: "Frontend & Mobile",
    items: ["Next.js", "React", "Vue", "Tailwind CSS", "Framer Motion", "Flutter"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "Firebase", "Qdrant", "ChromaDB"],
  },
  {
    category: "AI & Automation",
    items: ["LangGraph", "LangChain", "OpenAI", "Gemini", "Groq", "RAG", "AI Agents", "PyTorch", "Scikit-learn", "Hugging Face", "n8n", "Zapier", "Vapi"],
  },
  {
    category: "DevOps & Testing",
    items: ["Docker", "GitHub Actions", "CI/CD", "pytest", "Alembic", "Git", "Vercel", "Google Cloud"],
  },
];

export const allTechItems = techCategories.flatMap((c) => c.items);
