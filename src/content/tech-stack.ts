import { TechCategory } from "@/types";

export const techCategories: TechCategory[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Dart",
    ],
  },

  {
    category: "AI Engineering",
    items: [
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Gemini",
      "Groq",
      "Hugging Face",
      "PyTorch",
      "Scikit-learn",
      "spaCy",
      "Prompt Engineering",
      "RAG",
      "Multi-Agent Systems",
      "AI Agents",
      "Semantic Search",
      "Vector Databases",
      "Conversational AI",
    ],
  },

  {
    category: "Backend Development",
    items: [
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "JWT Authentication",
      "WebSockets",
    ],
  },

  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Supabase",
      "Firebase",
      "Qdrant",
      "ChromaDB",
    ],
  },

  {
    category: "Automation",
    items: [
      "n8n",
      "Zapier",
      "Klaviyo",
      "GitHub Actions",
      "Workflow Automation",
    ],
  },

  {
    category: "Frontend & Mobile",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Flutter",
      "Framer Motion",
    ],
  },

  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "Google Cloud",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },

  {
    category: "Data & Analytics",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Power BI",
      "Looker Studio",
      "Excel",
    ],
  },
];

export const allTechItems = techCategories.flatMap((c) => c.items);