import { Project } from "@/types";
import { flowDiagram } from "./diagram";

// New case studies (Oct 2026). Images referenced here are listed in IMAGES_TO_ADD.md.

export const newProjects: Project[] = [
  {
    slug: "rca-root-cause-agent",
    title: "“Why Did This Happen?” — Root-Cause Investigation Agent",
    summary:
      "An agent that answers questions like “Why did revenue fall last week?” by investigating like an analyst — with every number in its report backed by evidence.",
    category: "AI",
    isFeatured: true,
    status: "In progress",
    highlight: "Code does the math — the LLM never invents a number",
    cover: "/projects/covers/rca-root-cause-agent.webp",
    techStack: ["Python", "FastAPI", "Pydantic", "PostgreSQL", "Claude API", "Next.js", "pytest", "mypy"],
    sections: {
      overview:
        "A root-cause investigation agent. A user asks a business question and the system verifies the change is real, decomposes the metric, generates falsifiable hypotheses, tests each one against company data with read-only tools, actively hunts for counter-evidence, quantifies impact and writes a cited report. It is deliberately not a dashboard and not a chatbot over a database.",
      businessProblem:
        "When a key metric drops, analysts spend hours slicing data to find out why. Generic “chat with your data” tools are fast but unreliable: LLMs confidently invent numbers, confirm the first plausible story and can run unsafe queries. Teams need answers they can trust and audit.",
      solution:
        "A plain-Python orchestrator splits the work strictly: deterministic Python/SQL computes baselines, significance tests, decomposition and impact; the LLM only reasons over those outputs. Every tool result is written to an evidence ledger, and a citation checker verifies every number in the final report against it — a mismatch rejects the report. “Inconclusive” is a valid outcome, so the agent never forces an answer.",
      architectureDiagram: flowDiagram("Root-Cause Agent — Architecture", [
        [{ label: "Question", sub: "Next.js UI · SSE" }, { label: "Orchestrator", sub: "state machine · budgets", accent: true }],
        [
          { label: "Deterministic engine", sub: "baselines · significance" },
          { label: "Hypothesis agent", sub: "LLM · strict JSON", accent: true },
          { label: "Skeptic agent", sub: "counter-evidence", accent: true },
        ],
        [{ label: "Read-only tools", sub: "allow-listed SQL" }, { label: "Postgres 16", sub: "SELECT-only role" }],
        [{ label: "Evidence ledger", sub: "every tool result" }, { label: "Citation checker", sub: "verify every number", accent: true }, { label: "Cited report" }],
      ]),
      keyFeatures: [
        "Verifies a change is statistically real before investigating it",
        "Falsifiable hypotheses — each states its predictions and what would disprove it",
        "Skeptic agent that actively searches for counter-evidence",
        "Evidence ledger + citation checker: any unverified number rejects the report",
        "Read-only, allow-listed data tools — no free-form SQL from the LLM",
        "Strict JSON in/out validated by Pydantic, with one repair retry then a typed error",
        "Seeded, traced and reproducible runs",
      ],
      techStack: ["Python 3.12", "FastAPI", "Pydantic v2", "SQLAlchemy 2", "PostgreSQL 16", "pandas", "SciPy", "Claude API (tool use)", "Next.js", "Docker Compose"],
      challenges: [
        {
          title: "Stopping the LLM from inventing numbers",
          description:
            "LLMs will happily state figures they never computed. The rule is enforced in code: the model may only state numbers that came back from a tool result, and the citation checker compares every number in the report against the evidence ledger before it is accepted.",
        },
        {
          title: "Avoiding confirmation bias",
          description:
            "A single agent tends to accept the first plausible story. A separate skeptic step tries to disprove each hypothesis, and “inconclusive” is treated as a valid result rather than a failure.",
        },
        {
          title: "Safe data access",
          description:
            "Letting an LLM write SQL is risky. In v1 the agent can only call typed, allow-listed tools, running under a database role that has SELECT permission only.",
        },
      ],
      testing: [
        "Hermetic pytest suite — runs without a database or network",
        "ruff linting and mypy in strict mode on the whole backend",
        "Evaluation harness comparing the agent against a naive baseline on seeded scenarios",
        "Append-only decision log documenting every scoping choice",
      ],
      lessonsLearned: [
        "Reliability comes from what you don’t let the LLM do",
        "Writing decisions down early (a decision log) keeps a complex project consistent",
        "Designing the evaluation harness alongside the agent makes progress measurable",
      ],
      whatIdChange: [
        "Build the evaluation scenarios before the agents, so every agent change is measured from day one",
      ],
      results:
        "The architecture, deterministic engine and quality tooling are in place, with the agents and UI being built phase by phase. The design guarantees that every number in a report can be traced back to the query that produced it.",
      relatedProjects: ["revenue-os", "multi-agent-research-assistant"],
    },
  },

  {
    slug: "uae-visa-consultancy-website",
    title: "Multilingual Website for a UAE Visa & Residency Consultancy",
    summary:
      "Rebuilt a consultancy’s WordPress site as a fast Next.js platform in 8 languages, with an admin panel for publishing articles and automatic translation.",
    category: "Web",
    client: { country: "UAE", code: "AE" },
    isFeatured: true,
    confidential: true,
    period: "Sep – Oct 2026",
    highlight: "8 languages incl. Arabic · delivered & handed over",
    cover: "/projects/covers/uae-visa-consultancy-website.webp",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion", "GitHub Actions", "Vercel"],
    media: [
      { type: "image", src: "/projects/uae-visa-home.webp", caption: "Home page with animated hero (client details removed)" },
      { type: "image", src: "/projects/uae-visa-golden-visa.webp", caption: "Golden Visa page built from a shared service template" },
      { type: "image", src: "/projects/uae-visa-mainland.webp", caption: "Business setup page with pricing and licence details" },
      { type: "image", src: "/projects/uae-visa-arabic.webp", caption: "Arabic version with right-to-left layout" },
    ],
    sections: {
      overview:
        "A complete rebuild of a UAE visa and residency consultancy’s website, moving it from WordPress to a custom Next.js codebase. The new site serves visitors in 8 languages, lets the client publish articles without a developer, and translates new articles automatically.",
      businessProblem:
        "The consultancy serves an international audience, but its WordPress site was slow, hard to update and English-centric. Every content change needed a developer, and offering the site in more languages meant translating every page and article by hand.",
      solution:
        "Rebuilt every page in Next.js with a modern, animated design. Company data lives in one typed data file that every component reads from. Added next-intl with 8 locales and a language switcher, built an admin panel that saves articles to the repository through the GitHub API, and a GitHub Actions workflow that translates each new article into every site language and redeploys on Vercel.",
      architectureDiagram: flowDiagram("Consultancy Website — Architecture", [
        [{ label: "Visitor", sub: "8 locales" }, { label: "Next.js on Vercel", sub: "next-intl · RTL", accent: true }],
        [{ label: "Admin panel", sub: "publish articles", accent: true }, { label: "GitHub API", sub: "articles.json" }],
        [{ label: "GitHub Actions", sub: "auto-translate", accent: true }, { label: "Commit + redeploy", sub: "Vercel" }],
      ]),
      keyFeatures: [
        "8 languages (English, Arabic, Russian, German, Spanish, French, Turkish, Chinese) with a language switcher",
        "Right-to-left layout for Arabic",
        "Admin panel for publishing articles without a developer",
        "Automatic translation of new articles into every language via GitHub Actions",
        "Golden Visa section: hub page plus route pages built from one shared template",
        "Animated sections, live counters and a licence section that updates daily",
        "All company details kept in a single data file — no hard-coded contact info",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion", "GitHub API", "GitHub Actions", "Vercel"],
      challenges: [
        {
          title: "Translating new content automatically",
          description:
            "Static pages can be translated once, but articles keep arriving. New articles are saved through the admin panel, then a GitHub Actions workflow translates them into every locale and commits the result, so the client never handles translation.",
        },
        {
          title: "One template, many visa pages",
          description:
            "Five property-based visa pages shared the same structure. A shared component kit plus a typed data file per page keeps the design consistent and makes new pages a data change, not a code change.",
        },
        {
          title: "Locale switching bugs",
          description:
            "Language switching initially didn’t apply everywhere. Debugging routing and message loading across all 8 locales made the switcher reliable on every page.",
        },
      ],
      testing: [
        "Every page checked in all 8 languages, including right-to-left layout for Arabic",
        "Manual QA on mobile and desktop before handover",
        "Preview deployments on Vercel for client review before each release",
      ],
      lessonsLearned: [
        "Centralising content in typed data files makes a site far easier for the client to change",
        "Plan internationalisation at the start — adding it later touches every component",
      ],
      whatIdChange: ["Add automated end-to-end tests for language switching from the start"],
      results:
        "The site was delivered, approved and handed over to the client with full payment completed. The client now publishes articles independently, and every new article appears in all 8 languages automatically.",
      relatedProjects: [],
    },
  },

  {
    slug: "tyre-ecommerce-platform",
    title: "E-commerce Store & Admin Panel for an Online Tyre Retailer",
    summary:
      "An online tyre store for a company based in France, with a Next.js storefront, a Django backend and an admin panel the company\u2019s team uses to run the business.",
    category: "Web",
    client: { country: "France", code: "FR" },
    isFeatured: true,
    confidential: true,
    period: "Nov 2025 – Feb 2026",
    highlight: "Storefront + backend + admin panel, delivered end to end",
    cover: "/projects/covers/tyre-ecommerce-platform.webp",
    techStack: ["Next.js", "React", "Django", "Python", "REST API", "Admin Panel"],
    media: [
      { type: "image", src: "/projects/tyre-shop-home.webp", caption: "Home page: shop by tyre category (client details removed)" },
      { type: "image", src: "/projects/tyre-shop-catalog.webp", caption: "Tyre catalogue with filters and add-to-cart" },
      { type: "image", src: "/projects/tyre-shop-news.webp", caption: "News and promotions section managed from the admin panel" },
    ],
    sections: {
      overview:
        "An e-commerce platform for a company based in France that sells tyres online. The customer-facing storefront is built with Next.js, the business logic and data live in a Django backend, and an admin panel connected to the website lets the company\u2019s team run the store without a developer.",
      businessProblem:
        "Selling tyres online means a large catalogue of very similar products that customers need to browse quickly, and a company team that needs to keep products, prices and orders up to date every day. The company needed a fast storefront and a simple way to manage the business behind it.",
      solution:
        "Split the system into a Next.js frontend for a fast, SEO-friendly storefront and a Django backend that serves the data through an API. The admin panel is connected to the same backend, so every change made by the client appears on the website straight away.",
      architectureDiagram: flowDiagram("Online Tyre Store — Architecture", [
        [{ label: "Customer", sub: "browser · mobile" }, { label: "Next.js storefront", sub: "catalogue · cart", accent: true }],
        [{ label: "Django backend", sub: "API · business logic", accent: true }, { label: "Database", sub: "products · orders" }],
        [{ label: "Admin panel", sub: "connected to the site", accent: true }, { label: "Company team" }],
      ]),
      keyFeatures: [
        "Next.js storefront for browsing the tyre catalogue",
        "Django backend serving products and orders through an API",
        "Admin panel connected to the website for day-to-day management",
        "Changes made by the company\u2019s team in the admin panel appear on the storefront immediately",
        "French-language storefront for the client’s customers",
      ],
      techStack: ["Next.js", "React", "Django", "Python", "REST API"],
      challenges: [
        {
          title: "Keeping the storefront and admin in sync",
          description:
            "The website and the admin panel read and write the same data. Putting all business logic in the Django backend, with both sides talking to it through one API, means there is a single source of truth.",
        },
        {
          title: "Separating frontend and backend",
          description:
            "Running the storefront on Next.js and the logic on Django lets each side be developed and deployed independently, and keeps the storefront fast for customers.",
        },
      ],
      lessonsLearned: [
        "A clean API boundary between frontend and backend makes a store easier to extend",
        "Business teams need admin tools designed around their daily tasks, not database tables",
      ],
      results:
        "Delivered a working online store with its admin panel to a company in France, whose team manages the business through the admin panel.",
      relatedProjects: ["uae-visa-consultancy-website"],
    },
  },
  {
    slug: "clinic-voice-agent",
    title: "Clinic Voice Agent — AI Phone Receptionist",
    summary:
      "A voice AI that answers a clinic’s phone, checks availability and books or cancels appointments, backed by a fast FastAPI tool router.",
    category: "Voice AI",
    isFeatured: true,
    highlight: "Tool calls answered in under 3 seconds (target)",
    cover: "/projects/covers/clinic-voice-agent.webp",
    techStack: ["FastAPI", "Python", "Vapi", "Groq", "n8n", "Google Calendar"],
    sections: {
      overview:
        "A voice agent for a medical or dental clinic. Callers talk to an AI receptionist on Vapi; when the conversation needs an action — check availability, book, cancel — the LLM calls a tool, and this FastAPI backend validates the request, performs it through n8n and Google Calendar, and replies in the exact format Vapi expects.",
      businessProblem:
        "Small clinics miss calls during busy hours and after closing, and every missed call can be a lost patient. Hiring more reception staff is expensive, and simple phone menus frustrate callers.",
      solution:
        "Vapi handles speech and conversation using Groq-hosted Llama 3.1. A FastAPI tool router receives each tool call, validates the parameters, forwards the action to an n8n webhook connected to Google Calendar and notifications, and responds quickly so the conversation never stalls. Every booking decision is logged as structured JSON.",
      architectureDiagram: flowDiagram("Clinic Voice Agent — Architecture", [
        [{ label: "Caller", sub: "phone" }, { label: "Vapi voice agent", sub: "Groq Llama 3.1", accent: true }],
        [{ label: "FastAPI tool router", sub: "validate · decide", accent: true }, { label: "Decision log", sub: "JSON lines" }],
        [{ label: "n8n webhook" }, { label: "Google Calendar", sub: "availability · booking" }, { label: "SMS / email", sub: "confirmations" }],
      ]),
      keyFeatures: [
        "Natural phone conversations for booking, rescheduling and cancelling",
        "Typed request/response models matching Vapi’s tool-call format",
        "Single intent-based booking endpoint that decides the right action",
        "Structured decision logging and a simple dashboard",
        "Environment-driven configuration with pydantic-settings",
      ],
      techStack: ["Python", "FastAPI", "Pydantic", "Vapi", "Groq", "n8n", "Google Calendar API"],
      challenges: [
        {
          title: "Latency in a live conversation",
          description:
            "A caller notices any pause. The router does minimal work on the request path and forwards actions straight to n8n, targeting a full tool response in under 2–3 seconds.",
        },
        {
          title: "Unreliable LLM tool arguments",
          description:
            "The voice LLM sometimes sends incomplete or malformed parameters. Every tool call is validated against Pydantic models and gets a clear error the agent can recover from in conversation.",
        },
      ],
      testing: ["Pydantic validation on every tool payload", "Health endpoint and structured logs for monitoring"],
      lessonsLearned: [
        "Voice AI is mostly a latency problem — keep the request path short",
        "Logging every decision makes voice conversations debuggable",
      ],
      whatIdChange: ["Add recorded test calls as regression tests for the booking flow"],
      results:
        "A working demo that books, checks and cancels appointments by phone end to end. It is a portfolio demo, intentionally lean, and not a HIPAA-compliant production system.",
      relatedProjects: ["ai-customer-support-agent"],
    },
  },

  {
    slug: "revenue-os",
    title: "Revenue OS — AI Sales & Revenue Platform",
    summary:
      "A multi-tenant B2B platform covering the full revenue lifecycle, from lead ingestion and AI research to outreach, bookings and revenue analytics.",
    category: "Backend",
    isFeatured: true,
    status: "In progress",
    highlight: "Phase 1 shipped — 23 backend tests passing",
    cover: "/projects/covers/revenue-os.webp",
    techStack: ["FastAPI", "PostgreSQL", "Redis Streams", "SQLAlchemy", "Alembic", "React", "TypeScript", "Docker"],
    sections: {
      overview:
        "Revenue OS is a production-grade, multi-tenant platform for B2B sales teams. It covers the whole lifecycle: lead ingestion, validation, deduplication, enrichment, AI research, ICP fit, qualification, scoring, personalised outreach, reply intelligence, booking, CRM, proposals, deal tracking and revenue analytics.",
      businessProblem:
        "Sales teams stitch together many separate tools for leads, enrichment, outreach and CRM. Data gets duplicated, AI features run without guardrails, and nothing gives a single reliable view of the pipeline.",
      solution:
        "A modular monolith with hard domain boundaries. Thin FastAPI routes call application services and repositories on SQLAlchemy 2.0 async; PostgreSQL is the single source of truth. Long-running work is stored as a job row and published to a Redis Stream through a transactional outbox, then processed by separate workers. Every tenant-owned row carries an organization ID enforced at the data-access layer.",
      architectureDiagram: flowDiagram("Revenue OS — Architecture", [
        [{ label: "React dashboard", sub: "TanStack Query · RBAC" }, { label: "FastAPI /api/v1", sub: "thin routes · JWT", accent: true }],
        [{ label: "Services + domains", sub: "leads · crm · outreach", accent: true }, { label: "PostgreSQL 16", sub: "source of truth · outbox" }],
        [{ label: "Redis Streams", sub: "jobs · locks · limits" }, { label: "Workers", sub: "retries · dead-letter", accent: true }, { label: "Provider adapters", sub: "LLM · email · CRM" }],
      ]),
      keyFeatures: [
        "Multi-tenant data model with tenant isolation at the data-access layer",
        "Versioned REST API with JWT access tokens and httpOnly refresh cookies",
        "Transactional outbox + Redis Streams job contract; unknown jobs retried and dead-lettered, never dropped",
        "Provider adapters for LLMs, enrichment, email, calendar, CRM and storage",
        "Alembic migrations as the only way the schema changes",
        "Observability plan: Sentry, Langfuse AI traces, structured JSON logs and audit logs",
      ],
      techStack: ["Python 3.12", "FastAPI", "SQLAlchemy 2.0 (async)", "Alembic", "PostgreSQL 16", "Redis", "React", "TypeScript", "Vite", "Docker Compose"],
      challenges: [
        {
          title: "Never losing a background job",
          description:
            "Publishing to a queue and writing to the database can fail independently. The transactional outbox writes the job and its event in one database transaction, so work is never lost or duplicated.",
        },
        {
          title: "Tenant isolation",
          description:
            "In a multi-tenant system one missing filter can leak data. Tenant filtering is enforced centrally in the data-access layer and covered by dedicated security tests.",
        },
      ],
      testing: [
        "23 backend tests passing (pytest), including API and security tests",
        "ruff linting, plus frontend lint, unit tests (Vitest) and production build",
        "Alembic baseline migration verified by generating SQL",
        "Health and readiness endpoints for deployment checks",
      ],
      lessonsLearned: [
        "Writing architecture docs before code made a large system manageable",
        "Clear job contracts make background processing testable",
      ],
      whatIdChange: ["Set up the Docker-based local stack first so every phase is verified against real Postgres and Redis"],
      results:
        "Phase 1 (foundation) is complete: backend core, database layer, migrations, job contract, meta APIs and the frontend shell with its design system, all with green tests and builds. Identity and the first business domains come next.",
      relatedProjects: ["rca-root-cause-agent", "ai-lead-qualification-system"],
    },
  },

  {
    slug: "steel-financial-model-dashboard",
    title: "Financial Model & KPI Dashboard for a Steel Fabrication Company",
    summary:
      "A \u201CFinancial X-Ray\u201D Excel model that turns a fabrication company\u2019s monthly P&L into margins, cash flow, a weighted sales pipeline, a what-if simulator and a 7-chart dashboard.",
    category: "Data & Analytics",
    client: {},
    isFeatured: false,
    confidential: true,
    period: "Nov 2025",
    highlight: "P&L, pipeline, forecast and what-if simulator in one linked model",
    cover: "/projects/covers/steel-financial-model-dashboard.webp",
    techStack: ["Excel", "Financial Modeling", "Excel Tables", "Named Ranges", "What-If Analysis", "Excel Charts", "Power BI-ready data"],
    sections: {
      overview:
        "A financial decision-support model built in Excel for a steel fabrication and installation company with three divisions \u2014 shop fabrication, field installation and admin/HQ. Starting from the company\u2019s Profit & Loss data across six cost categories, the model calculates monthly performance, forecasts the next 12 months, values the sales pipeline by win probability, and lets management test \u201Cwhat if\u201D changes to labor efficiency, material costs and headcount \u2014 all summarised on one dashboard.",
      businessProblem:
        "The company had P&L reports but no single view of how each month, each project and each cost category affected its margins. Management wanted to hit a 28\u201330% gross margin and 20% net margin, track labor productivity against an 85% target, see which bids in the pipeline really mattered, and understand how changes in labor efficiency or material prices would hit project and company margins before they happened.",
      solution:
        "Structured the workbook as a small data pipeline: clean monthly inputs and cost codes feed a calculations sheet, which drives the forecast, pipeline and dashboard. Pipeline bids are weighted by win probability and summed by quarter; project labor cost is built from shop and field hours at their hourly rates. A what-if simulator exposes labor efficiency, material cost change and employee count as named inputs that flow into every project\u2019s adjusted cost, profit and margin. A long-format data table makes the same numbers ready for Power BI.",
      architectureDiagram: flowDiagram("Financial X-Ray Model \u2014 Structure", [
        [{ label: "Inputs", sub: "monthly P&L \u00B7 hours" }, { label: "Cost codes", sub: "6 categories" }],
        [{ label: "P&L calculations", sub: "margin \u00B7 breakeven \u00B7 cash", accent: true }, { label: "Forecast", sub: "next 12 months" }],
        [{ label: "What-if simulator", sub: "LaborEff \u00B7 MatChange", accent: true }, { label: "Project pipeline", sub: "weighted by probability" }],
        [{ label: "KPI dashboard", sub: "7 charts", accent: true }, { label: "Power BI table", sub: "month \u00D7 category" }],
      ]),
      keyFeatures: [
        "Monthly breakdown of revenue and costs across labor, material, consumables, equipment, maintenance and overhead",
        "Calculated gross profit, margin %, breakeven revenue, cash flow and labor efficiency for every month",
        "Project pipeline: bid value \u00D7 win probability = weighted revenue, rolled up by quarter",
        "Project cost build-up from shop and field hours at their hourly rates",
        "What-if simulator for labor efficiency, material cost change and headcount, linked to project margins through named ranges",
        "Dashboard with 7 charts: monthly P&L, cash flow timeline, labor efficiency trend, cost distribution, revenue vs labor hours, quarterly weighted revenue and a 12-month forecast",
        "KPIs for total revenue, gross profit, margin % and revenue per employee",
        "Long-format data table prepared for Power BI",
      ],
      techStack: ["Microsoft Excel", "Excel Tables & structured references", "Named ranges", "SUMIF / IF / IFERROR", "Combo, line, bar & pie charts", "Power BI-ready data model"],
      challenges: [
        {
          title: "Making the simulator affect everything",
          description:
            "A what-if tool is only useful if one change flows through the whole model. Simulator inputs are exposed as named ranges (LaborEff, MatChange) so every project\u2019s adjusted cost, profit and margin update instantly when a value changes.",
        },
        {
          title: "Valuing an uncertain pipeline",
          description:
            "A $500k bid with a 20% chance shouldn\u2019t count the same as a won contract. Each bid is weighted by its win probability and grouped by quarter, giving a realistic revenue outlook instead of an optimistic total.",
        },
        {
          title: "Breakeven with mixed cost types",
          description:
            "Breakeven revenue was calculated by separating fixed costs (maintenance and overhead) from variable costs (labor, material, consumables, equipment) as a share of revenue, so the business can see the minimum monthly revenue needed to cover its costs.",
        },
      ],
      lessonsLearned: [
        "Separating inputs, calculations and outputs makes a spreadsheet as maintainable as code",
        "Management decisions need a few clear KPIs, not every number at once",
      ],
      whatIdChange: [
        "Convert the pipeline into an Excel Table so formulas only exist on rows with data \u2014 keeping the file small and fast as it grows",
      ],
      results:
        "Delivered a working financial model and dashboard covering every requirement in the client\u2019s brief: monthly category breakdown, project-level visibility, weighted pipeline forecast, adjustable efficiency and cost parameters, and KPI tracking for margin, cash flow and revenue per employee.",
      relatedProjects: ["shopify-email-marketing-automation"],
    },
  },

  {
    slug: "fastapi-backend-maintenance",
    title: "FastAPI Backend Maintenance for a Client in Pakistan",
    summary:
      "Maintenance work on an existing FastAPI backend for a client in Pakistan, keeping their API stable and running for the application that depends on it.",
    category: "Backend",
    client: { country: "Pakistan", code: "PK" },
    isFeatured: false,
    confidential: true,
    period: "Feb 2025",
    cover: "/projects/covers/fastapi-backend-maintenance.webp",
    techStack: ["Python", "FastAPI", "REST API"],
    sections: {
      overview:
        "A short maintenance engagement on an existing FastAPI backend for a client in Pakistan. The work focused on keeping the API reliable for the application and users that depend on it.",
      businessProblem:
        "Backends keep needing attention after launch: issues appear, code ages and small changes are needed. The client needed someone who could step into an existing FastAPI codebase and keep it running smoothly.",
      solution:
        "Worked inside the client\u2019s existing FastAPI project, following its structure and conventions, and handled the maintenance tasks needed to keep the API stable.",
      architectureDiagram: flowDiagram("FastAPI Backend \u2014 Maintenance Scope", [
        [{ label: "Client application" }, { label: "FastAPI backend", sub: "existing codebase", accent: true }],
        [{ label: "Maintenance", sub: "fixes \u00B7 updates", accent: true }, { label: "Stable API", sub: "for the client\u2019s users" }],
      ]),
      keyFeatures: [
        "Maintenance of an existing FastAPI backend",
        "Worked within the client\u2019s existing code structure and conventions",
        "Kept the API stable for the application relying on it",
      ],
      techStack: ["Python", "FastAPI", "REST API"],
      challenges: [
        {
          title: "Getting productive in an existing codebase",
          description:
            "Maintenance means working in code someone else wrote. Understanding the project\u2019s structure first made it possible to make changes safely without breaking what already worked.",
        },
      ],
      lessonsLearned: ["Reading and respecting an existing codebase is as important as writing new code"],
      results: "Delivered the maintenance work and kept the client\u2019s FastAPI backend running.",
      relatedProjects: [],
    },
  },

  {
    slug: "guidance-engine",
    title: "Universal Guidance Engine — Onboarding Tours SDK",
    summary:
      "A self-hosted platform for product tours, tooltips and checklists, with a dependency-free JavaScript SDK that plugs into four different web apps.",
    category: "Web",
    isFeatured: false,
    highlight: "One SDK integrated into 4 host applications",
    cover: "/projects/covers/guidance-engine.webp",
    techStack: ["Laravel", "Vue", "Inertia", "JavaScript SDK", "REST API"],
    sections: {
      overview:
        "An internal onboarding and guidance platform: admins build tours, tooltips and checklists in a Laravel + Inertia + Vue dashboard, and a framework-agnostic JavaScript SDK shows them inside any web application. It ships with drop-in integrations for an LMS, a CRM, an email-marketing platform and a job board.",
      businessProblem:
        "Each product needed its own onboarding, and building it separately in every app is slow and inconsistent. The business needed one engine that could guide users in several unrelated applications.",
      solution:
        "One shared core tracks user progress and events for all guidance types. A versioned REST API serves content, and a vanilla-JS SDK renders it inside a single Shadow DOM root so it never clashes with the host app’s styles. Host apps are just rows in an applications table, so none of them is a hard dependency.",
      architectureDiagram: flowDiagram("Guidance Engine — Architecture", [
        [{ label: "Admin dashboard", sub: "Laravel · Inertia · Vue", accent: true }, { label: "Versioned REST API" }],
        [{ label: "Shared core", sub: "progress · events", accent: true }, { label: "Audit log", sub: "publish · config" }],
        [{ label: "JS SDK", sub: "Shadow DOM", accent: true }, { label: "4 host apps", sub: "LMS · CRM · email · jobs" }],
      ]),
      keyFeatures: [
        "Tours, tooltips and checklists from one shared core",
        "Dependency-free embed SDK rendered inside Shadow DOM",
        "Allow-list sanitisation of rich text before rendering (XSS-safe)",
        "Audit log for every publish, draft, archive and config change",
        "Canonical business events wired into each host app",
      ],
      techStack: ["PHP", "Laravel", "Inertia.js", "Vue", "JavaScript", "REST API"],
      challenges: [
        {
          title: "Running inside apps you don’t control",
          description:
            "Host apps have their own CSS and scripts. Rendering the SDK inside a Shadow DOM root isolates its styles completely, and keeping it dependency-free avoids version conflicts.",
        },
        {
          title: "Security of admin-authored content",
          description:
            "Tour content is rich text written by admins and injected into other apps. Everything is sanitised against an allow-list before it reaches the page, with tests covering known XSS vectors.",
        },
      ],
      testing: [
        "Full Laravel test suite, including integration tests for all 4 host applications",
        "Dedicated security and access-control tests",
        "XSS sanitiser tests against known attack vectors",
      ],
      lessonsLearned: ["Treating integrations as data, not code, keeps a platform generic"],
      whatIdChange: ["Publish the SDK as a versioned npm package from day one"],
      results:
        "MVP complete and handed over with documentation for installation, deployment and event wiring, integrated with four host applications.",
      relatedProjects: [],
    },
  },
];
