// Edit prices and scope here — every page reads from this file.

export interface ServiceCategory {
  id: string;
  title: string;
  icon: "Globe" | "Server" | "Monitor" | "Smartphone" | "Workflow" | "Bot" | "Clock";
  startingPrice: number; // USD
  priceSuffix?: string; // e.g. "/hr"
  summary: string;
  includes: string[];
  stack: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "web",
    title: "Web Development",
    icon: "Globe",
    startingPrice: 250,
    summary: "Business websites, landing pages and full web applications — fast, responsive and SEO-ready.",
    includes: [
      "Responsive Next.js / React build",
      "CMS or admin panel when needed",
      "Multi-language support",
      "Deployment & domain setup",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "Server",
    startingPrice: 300,
    summary: "Secure, documented APIs and databases that your web or mobile apps can rely on.",
    includes: [
      "REST API with auth (JWT / sessions)",
      "PostgreSQL schema & migrations",
      "Swagger / OpenAPI docs",
      "Automated tests",
    ],
    stack: ["FastAPI", "Django", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "desktop",
    title: "Desktop Applications",
    icon: "Monitor",
    startingPrice: 400,
    summary: "Internal tools and desktop apps for Windows and cross-platform use.",
    includes: [
      "Windows / cross-platform app",
      "Local or cloud database",
      "Reports & data export",
      "Installer & handover",
    ],
    stack: ["Python", "Electron", "SQLite"],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    icon: "Smartphone",
    startingPrice: 600,
    summary: "Android and iOS apps from a single Flutter codebase, connected to your backend.",
    includes: [
      "Flutter app (Android + iOS)",
      "Auth, push notifications",
      "Backend / Firebase integration",
      "Store-ready build",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Supabase"],
  },
  {
    id: "automation",
    title: "AI Automation",
    icon: "Workflow",
    startingPrice: 150,
    summary: "Workflows that remove repetitive work — leads, emails, CRM updates and reports run on their own.",
    includes: [
      "n8n / Zapier workflow",
      "CRM & email integration",
      "AI-powered steps (classify, write, extract)",
      "Error alerts & documentation",
    ],
    stack: ["n8n", "Zapier", "OpenAI", "Webhooks"],
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    icon: "Bot",
    startingPrice: 500,
    summary: "Chatbots, knowledge assistants and voice agents grounded in your own data.",
    includes: [
      "RAG over your documents",
      "Tool use (bookings, CRM, APIs)",
      "Guardrails & human hand-off",
      "Voice agent option",
    ],
    stack: ["LangGraph", "LangChain", "Qdrant", "Vapi", "FastAPI"],
  },
  {
    id: "hourly",
    title: "Custom / Hourly",
    icon: "Clock",
    startingPrice: 20,
    priceSuffix: "/hr",
    summary: "Ongoing development, maintenance, bug fixes or joining your team on a contract basis.",
    includes: [
      "Flexible weekly hours",
      "Weekly progress updates",
      "Code reviews & fixes",
      "Long-term support",
    ],
    stack: ["Your stack"],
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description: "A short call to understand the problem, users and goals. You get a clear scope, timeline and fixed quote.",
  },
  {
    title: "Design",
    description: "Architecture, data model and UI flow are agreed before any code is written — no surprises later.",
  },
  {
    title: "Build",
    description: "Development in small milestones with a live preview link, so you can see progress every week.",
  },
  {
    title: "Test",
    description: "Automated tests, manual QA on real devices and a review round with you before launch.",
  },
  {
    title: "Launch & Support",
    description: "Deployment, handover docs and free bug-fix support after launch.",
  },
];

export const communication = [
  "WhatsApp, Slack or email — whatever your team uses",
  "Weekly progress update with a live preview link",
  "Working hours overlap with Europe, Middle East and US mornings",
];

export const faqs = [
  {
    q: "How do payments work?",
    a: "Usually 50% upfront and 50% on delivery. Larger projects are split into milestones. I accept payment by bank transfer, Payoneer, Wise or through platforms like Upwork.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Once the final payment is made, full ownership of the code, designs and accounts is transferred to you.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Client details are kept private — confidential projects in this portfolio are shown without names, logos or links.",
  },
  {
    q: "How long does a project take?",
    a: "A business website usually takes 1–2 weeks, an automation workflow a few days, and a web or mobile app 3–8 weeks depending on scope. You get a timeline with the quote.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes — every project includes free bug fixes for 30 days after launch. Ongoing maintenance is available hourly or as a monthly plan.",
  },
  {
    q: "Can you work with my existing team or codebase?",
    a: "Yes. I regularly work inside existing codebases and with distributed teams, following your Git workflow and code review process.",
  },
];

export const whyWorkWithMe = [
  {
    title: "Engineer, not just a coder",
    description: "I think about architecture, testing and long-term maintenance — not only getting a demo to work.",
  },
  {
    title: "End-to-end delivery",
    description: "Frontend, backend, database, AI and deployment — one person who understands the whole system.",
  },
  {
    title: "Clear communication",
    description: "Weekly updates, honest timelines and plain-language explanations for non-technical clients.",
  },
  {
    title: "Remote-ready, worldwide",
    description: "Delivered projects for clients in the USA, UAE, France and Pakistan, across time zones.",
  },
];
