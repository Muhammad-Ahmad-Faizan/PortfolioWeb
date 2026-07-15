import { ExperienceEntry } from "@/types";

export const workExperiences: ExperienceEntry[] = [
  {
    id: "freelance-current",
    role: "AI & Backend Engineer",
    organization: "Freelance (Local & International Clients)",
    period: "Sep 2024 — Present",
    type: "freelance",

    summary:
      "Designing and developing AI-powered applications, backend systems, intelligent automation solutions, and scalable APIs for clients across multiple industries.",

    responsibilities: [
      "Built AI-powered Resume Screening SaaS with FastAPI, PostgreSQL, JWT authentication, and NLP-based skill extraction using spaCy.",
      "Developed a Multi-Agent Research Assistant using LangGraph with planner, researcher, analyzer, and writer agents supporting human-in-the-loop workflows.",
      "Engineered a Retrieval-Augmented Generation (RAG) Knowledge Assistant with PDF ingestion, semantic search, Qdrant vector database, and citation-aware responses.",
      "Created an AI Customer Support Agent implementing LLM tool-calling, CRM integration, conversation memory, refund workflows, and order lookup capabilities.",
      "Automated Shopify marketing workflows using Zapier and Klaviyo, including customer segmentation, welcome emails, abandoned cart recovery, product recommendations, and follow-up campaigns.",
      "Developed backend APIs and PostgreSQL database architecture for an international Django e-commerce platform while collaborating with a distributed development team.",
      "Built AI-powered lead qualification and workflow automation systems using n8n, LLM APIs, and business integrations.",
      "Designed REST APIs and scalable backend services following production-oriented software architecture principles."
    ],

    techStack: [
      "Python",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "LangGraph",
      "LangChain",
      "Qdrant",
      "spaCy",
      "OpenAI",
      "Gemini",
      "Groq",
      "n8n",
      "Zapier",
      "Klaviyo",
      "JWT",
      "REST APIs",
    ],
  },

  {
    id: "softbeck",
    role: "Python Developer Intern",
    organization: "SoftBeck Limited",
    period: "Jun 2025 — Aug 2025",
    type: "internship",

    summary:
      "Contributed to backend development, automation solutions, and AI-powered features while collaborating with the engineering team on client-focused software projects.",

    responsibilities: [
      "Developed and enhanced Python-based backend solutions and automation workflows.",
      "Integrated LLaMA 3 and Gemini APIs for AI-powered market research functionality.",
      "Worked with REST APIs, backend service integrations, and data processing workflows.",
      "Reviewed, tested, and optimized Python code to improve reliability and maintainability.",
      "Collaborated with developers to implement scalable backend features and business automation solutions."
    ],

    techStack: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Gemini",
      "LLaMA 3",
      "Git",
    ],
  },
];

export const education: ExperienceEntry[] = [
  {
    id: "education",

    role: "Bachelor of Science in Software Engineering",

    organization: "National Textile University, Faisalabad",

    period: "2022 — 2026",

    type: "education",

    summary:
      "Pursuing a Bachelor's degree in Software Engineering with a strong foundation in software design, backend development, databases, cloud technologies, artificial intelligence, machine learning, and modern software engineering practices. The program emphasizes the complete software development lifecycle—from requirements analysis and system design to development, testing, deployment, and maintenance.",

    responsibilities: [
      "Built strong foundations in software engineering principles, object-oriented programming, data structures, algorithms, operating systems, computer networks, database systems, and software architecture.",
      "Designed and developed full-stack and backend applications using modern technologies, REST APIs, relational databases, authentication systems, and scalable architectures.",
      "Specialized in Artificial Intelligence, Machine Learning, Natural Language Processing, Computer Vision, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), and intelligent automation systems.",
      "Applied software engineering methodologies including requirements gathering, system analysis, UML design, agile development, version control, testing, debugging, deployment, and software maintenance.",
      "Developed production-oriented projects integrating AI models with FastAPI backends, databases, cloud services, automation workflows, and modern frontend technologies.",
      "Collaborated on academic and industry-inspired projects while following clean code principles, documentation standards, performance optimization, and best engineering practices."
    ],

    techStack: [
      "Python",
      "FastAPI",
      "SQL",
      "PostgreSQL",
      "JavaScript",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Software Architecture",
      "REST APIs",
      "Git",
      "Cloud Computing",
      "System Design"
    ],
  },
];

export const allExperiences = [...workExperiences, ...education];