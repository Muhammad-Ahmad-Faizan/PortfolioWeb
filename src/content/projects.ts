import { Project } from "@/types";

export const projects: Project[] = [
    {
      slug: "ai-customer-support-agent",
      title: "AI Customer Support Agent",
      summary:
        "LLM-powered support agent with conversation memory, tool-use capabilities, and grounded responses.",
      category: "AI",
      isFeatured: true,
      techStack: [
        "Python",
        "LangChain",
        "LangGraph",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Groq",
      ],
      media: [
        {
          type: "image",
          src: "/projects/customersupport.png",
          caption: "Agent conversation flow dashboard showing intent classification and response generation"
        }
      ],
      sections: {
      overview:
        "Designed and built a production-grade AI customer support agent that handles inbound support queries with conversation memory, contextual understanding, and deterministic fallback chains. The agent integrates with internal knowledge bases via RAG, escalates to human agents when confidence is low, and maintains persistent conversation state across sessions.",
      businessProblem:
        "Support teams at growing product companies face increasing ticket volumes. Traditional chatbots provide scripted, frustrating experiences. Large language models offer flexibility but introduce hallucination risk and lack business-specific context. The challenge was to build an agent that combines LLM fluency with grounded, reliable responses while preserving conversation history across sessions.",
      solution:
        "Built a multi-stage agent architecture using LangGraph for stateful workflow orchestration. The agent follows a structured pipeline: intent classification, knowledge retrieval via RAG, response generation with source citation, confidence scoring, and optional human escalation. Conversation memory is persisted in PostgreSQL with Redis caching for fast context retrieval.",
      architectureDiagram: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="500" fill="#1C1A17" rx="12"/>
  <text x="400" y="35" fill="#F5F1EA" font-family="monospace" font-size="14" text-anchor="middle" font-weight="bold">AI Customer Support Agent — Architecture</text>
  
  <!-- User Input -->
  <rect x="50" y="70" width="140" height="50" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="120" y="98" fill="#F5F1EA" font-family="monospace" font-size="12" text-anchor="middle">User Input</text>
  
  <!-- Arrow -->
  <line x1="190" y1="95" x2="240" y2="95" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="240,90 250,95 240,100" fill="#A39C90"/>
  
  <!-- Intent Classifier -->
  <rect x="250" y="70" width="160" height="50" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="330" y="90" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Intent Classification</text>
  <text x="330" y="106" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">LangGraph Router</text>
  
  <!-- Arrow down -->
  <line x1="330" y1="120" x2="330" y2="150" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="325,150 330,160 335,150" fill="#A39C90"/>
  
  <!-- RAG Retrieval -->
  <rect x="250" y="160" width="160" height="50" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="330" y="180" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Knowledge Retrieval</text>
  <text x="330" y="196" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">ChromaDB + Embeddings</text>
  
  <!-- Arrow -->
  <line x1="330" y1="210" x2="330" y2="240" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="325,240 330,250 335,240" fill="#A39C90"/>
  
  <!-- Response Generation -->
  <rect x="250" y="250" width="160" height="50" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="330" y="270" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Response Generation</text>
  <text x="330" y="286" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Groq LLaMA 3.3 70B</text>
  
  <!-- Arrow -->
  <line x1="330" y1="300" x2="330" y2="330" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="325,330 330,340 335,330" fill="#A39C90"/>
  
  <!-- Confidence Check -->
  <rect x="250" y="340" width="160" height="50" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="330" y="360" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Confidence Scoring</text>
  <text x="330" y="376" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Threshold: 0.75</text>
  
  <!-- Branch: High confidence -->
  <line x1="410" y1="365" x2="480" y2="365" stroke="#5FA8A0" stroke-width="1.5"/>
  <line x1="480" y1="365" x2="480" y2="415" stroke="#5FA8A0" stroke-width="1.5"/>
  <line x1="410" y1="390" x2="580" y2="390" stroke="#E8734A" stroke-width="1.5"/>
  <line x1="580" y1="390" x2="580" y2="415" stroke="#E8734A" stroke-width="1.5"/>
  
  <!-- Human Escalation -->
  <rect x="480" y="415" width="200" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="580" y="435" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Human Agent Escalation</text>
  <text x="580" y="450" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Low confidence path</text>
  
  <!-- Memory Store -->
  <rect x="480" y="70" width="180" height="50" rx="8" fill="#252220" stroke="#A39C90" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="570" y="90" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Conversation Memory</text>
  <text x="570" y="106" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">PostgreSQL + Redis</text>
  <line x1="410" y1="95" x2="480" y2="95" stroke="#A39C90" stroke-width="1" stroke-dasharray="4,3"/>
</svg>`,
      keyFeatures: [
        "Persistent conversation memory across sessions using PostgreSQL",
        "Intent classification router using LangGraph for stateful orchestration",
        "RAG-based knowledge retrieval with citation-aware responses",
        "Confidence-based escalation to human agents",
        "Tool-use capability for order lookup, status checks, and account actions",
        "Redis caching layer for sub-200ms context retrieval",
      ],
      techStack: [
        "Python",
        "LangChain",
        "LangGraph",
        "FastAPI",
        "Groq",
        "PostgreSQL",
        "Redis",
        "ChromaDB",
        "Docker",
      ],
      
      challenges: [
        {
          title: "Conversation Memory at Scale",
          description:
            "Managing long-running conversations with thousands of turns required careful memory windowing. Implemented a sliding-window summarization strategy that compresses older turns into compressed summaries while keeping recent turns at full fidelity.",
        },
        {
          title: "Hallucination Mitigation",
          description:
            "LLMs confidently generate incorrect answers when context is ambiguous. Built a multi-stage confidence scoring system that evaluates response groundedness against retrieved documents before surfacing answers to users.",
        },
        {
          title: "Deterministic Tool Execution",
          description:
            "Ensuring the agent executes the correct tool with valid parameters required structured output parsing and validation layers. Used Pydantic models to validate LLM-generated tool calls before execution.",
        },
      ],
      lessonsLearned: [
        "A hybrid approach combining LLM flexibility with deterministic guardrails produces the most reliable support agent",
        "Conversation memory windowing is critical for both cost management and response quality",
        "Confidence scoring should be transparent and auditable for debugging escalations",
      ],
      results:
        "The agent handles 80% of inbound support queries without human intervention, with an average response time under 2 seconds. Human agents receive pre-populated context on escalated tickets, reducing their resolution time by approximately 40%.",
      relatedProjects: ["rag-knowledge-assistant", "multi-agent-research-assistant"],
    },
  },
  {
    slug: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant",
    summary:
      "Retrieval-augmented Q&A system with citation-aware, grounded answers for internal knowledge bases.",
    category: "AI",
    isFeatured: true,
    techStack: [
      "Python",
      "LangChain",
      "OpenAI",
      "ChromaDB",
      "FastAPI",
      "Next.js",
    ],
    media: [
        {
          type: "image",
          src: "/projects/rag.png",
          caption: "RAG pipeline flow showing document chunking, embedding generation, retrieval, re-ranking, and grounded answer generation"
        }
      ],
    sections: {
      overview:
        "Built a production RAG (Retrieval-Augmented Generation) system that enables natural language Q&A over internal documentation, knowledge bases, and technical manuals. The system retrieves relevant context chunks, generates grounded answers with inline citations, and provides confidence indicators for each response.",
      businessProblem:
        "Teams accumulate vast internal documentation that becomes effectively inaccessible. Traditional search requires knowing the right keywords, and LLMs alone hallucinate on proprietary content. Teams needed a system that combines the flexibility of natural language queries with the reliability of grounded, source-cited answers.",
      solution:
        "Built a multi-stage RAG pipeline: document chunking with overlap strategies, embedding generation for semantic search, vector storage in ChromaDB, retrieval with hybrid search (semantic + keyword), and LLM-based answer generation with citation extraction. Added a re-ranking step to improve retrieval precision before generation.",
      architectureDiagram: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="450" fill="#1C1A17" rx="12"/>
  <text x="400" y="30" fill="#F5F1EA" font-family="monospace" font-size="14" text-anchor="middle" font-weight="bold">RAG Knowledge Assistant — Architecture</text>
  
  <!-- Documents -->
  <rect x="30" y="60" width="130" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="95" y="86" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Documents</text>
  
  <line x1="160" y1="82" x2="220" y2="82" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="220,77 230,82 220,87" fill="#A39C90"/>
  
  <!-- Chunking -->
  <rect x="230" y="60" width="130" height="45" rx="8" fill="#252220" stroke="#A39C90" stroke-width="1.5"/>
  <text x="295" y="86" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Chunking + Overlap</text>
  
  <line x1="360" y1="82" x2="420" y2="82" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="420,77 430,82 420,87" fill="#A39C90"/>
  
  <!-- Embeddings -->
  <rect x="430" y="60" width="130" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="495" y="86" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Embedding Model</text>
  
  <line x1="560" y1="82" x2="620" y2="82" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="620,77 630,82 620,87" fill="#A39C90"/>
  
  <!-- ChromaDB -->
  <rect x="630" y="60" width="140" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="700" y="86" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">ChromaDB Vector Store</text>
  
  <!-- User Query -->
  <rect x="30" y="180" width="130" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="95" y="206" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">User Query</text>
  
  <line x1="160" y1="202" x2="220" y2="202" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="220,197 230,202 220,207" fill="#A39C90"/>
  
  <!-- Query Embedding -->
  <rect x="230" y="180" width="130" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="295" y="199" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Query Embedding</text>
  <text x="295" y="215" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">+ Hybrid Search</text>
  
  <line x1="360" y1="202" x2="420" y2="202" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="420,197 430,202 420,207" fill="#A39C90"/>
  
  <!-- Retriever -->
  <rect x="430" y="180" width="130" height="45" rx="8" fill="#252220" stroke="#A39C90" stroke-width="1.5"/>
  <text x="495" y="199" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Retrieve Top-K</text>
  <text x="495" y="215" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">k=5 chunks</text>
  
  <!-- Re-ranker -->
  <rect x="230" y="270" width="160" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="310" y="289" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Re-ranker</text>
  <text x="310" y="305" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Cross-encoder scoring</text>
  
  <line x1="495" y1="225" x2="495" y2="292" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="495" y1="292" x2="390" y2="292" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="390,287 380,292 390,297" fill="#A39C90"/>
  
  <!-- LLM -->
  <rect x="230" y="350" width="160" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="310" y="369" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Response Generation</text>
  <text x="310" y="385" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Grounded + Citations</text>
  
  <line x1="310" y1="315" x2="310" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="305,350 310,360 315,350" fill="#A39C90"/>
  
  <!-- Answer -->
  <rect x="460" y="350" width="160" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="540" y="376" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Grounded Answer</text>
  
  <line x1="390" y1="372" x2="460" y2="372" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="460,367 470,372 460,377" fill="#A39C90"/>
</svg>`,
      keyFeatures: [
        "Hybrid search combining semantic embeddings with keyword (BM25) retrieval",
        "Cross-encoder re-ranking for improved precision in top results",
        "Citation-aware answer generation with source document links",
        "Confidence scoring for each generated answer",
        "Configurable chunk overlap strategy for context preservation",
        "FastAPI backend with async support for concurrent queries",
      ],
      techStack: [
        "Python",
        "LangChain",
        "OpenAI Embeddings",
        "ChromaDB",
        "FastAPI",
        "Next.js",
        "Docker",
      ],
      challenges: [
        {
          title: "Chunk Boundary Artifacts",
          description:
            "Naive document chunking breaks logical paragraphs mid-sentence, losing context. Implemented recursive character text splitting with overlap windows that respect paragraph and sentence boundaries.",
        },
        {
          title: "Relevance Tuning",
          description:
            "Initial retrieval often returned semantically similar but contextually irrelevant chunks. Added a cross-encoder re-ranking step that improved top-1 precision by 35% over pure embedding similarity.",
        },
        {
          title: "Citation Accuracy",
          description:
            "LLMs sometimes cite the wrong source document for a given claim. Built a citation verification step that cross-references each claim against retrieved chunks before rendering the final answer.",
        },
      ],
      lessonsLearned: [
        "Retrieval quality matters more than generation quality — invest in chunking strategy and re-ranking",
        "Hybrid search catches edge cases that pure semantic search misses",
        "Citation transparency builds user trust even when answers are imperfect",
      ],
      results:
        "The system answers technical queries with 92% grounded-answer accuracy (verified against held-out Q&A pairs). Average end-to-end latency is 1.8 seconds, with retrieval accounting for just 200ms of that.",
      relatedProjects: ["ai-customer-support-agent", "multi-agent-research-assistant"],
    },
  },
  {
    slug: "multi-agent-research-assistant",
    title: "Multi-Agent Research Assistant",
    summary:
      "Coordinated agents that decompose complex research tasks across specialized roles with a dark-themed React frontend.",
    category: "AI",
    isFeatured: true,
    techStack: [
      "Python",
      "LangGraph",
      "CrewAI",
      "Groq",
      "FastAPI",
      "Next.js",
      "TailwindCSS",
    ],
        media: [
        {
          type: "image",
          src: "/projects/r.png",
          caption: "Landing page that shows detailed information about the RAG Knowledge Assistant project, including overview, architecture, and key features."
        },
        {
          type: "image",
          src: "/projects/r1.png",
          caption: "Showing searchbar and CTA button to start a query "
        },
        {
          type: "image",
          src: "/projects/r2.png",
          caption: "Human in the Loop and subquestions"
        },
        {
          type: "image",
          src: "/projects/r3.png",
          caption: "Analysing and Searching"
        },
        {
          type: "image",
          src: "/projects/r4.png",
          caption: "Showing the final answer with citations."
        }
      ],
    sections: {
      overview:
        "Built a multi-agent research system where specialized AI agents collaborate to tackle complex research tasks. The system decomposes a research question into sub-tasks, assigns them to agents with distinct roles (Researcher, Analyst, Writer, Reviewer), coordinates their outputs through a managed workflow, and produces a synthesized report.",
      businessProblem:
        "Deep research tasks require multiple cognitive passes: gathering information, analyzing findings, synthesizing insights, and reviewing for quality. A single LLM call produces shallow results. Manual research is slow. The challenge was to build an agent orchestration system that mirrors how human research teams operate.",
      solution:
        "Used LangGraph for stateful workflow orchestration with CrewAI for role-based agent coordination. The system implements a four-stage pipeline: a Researcher agent gathers information, an Analyst evaluates and extracts insights, a Writer synthesizes the report, and a Reviewer checks quality. Each agent gets context from prior stages. Built a dark-themed React frontend for real-time output streaming.",
      architectureDiagram: `<svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="800" height="520" fill="#1C1A17" rx="12"/>
  <text x="400" y="30" fill="#F5F1EA" font-family="monospace" font-size="14" text-anchor="middle" font-weight="bold">Multi-Agent Research Assistant — Architecture</text>
  
  <!-- User Input -->
  <rect x="300" y="55" width="200" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="400" y="81" fill="#F5F1EA" font-family="monospace" font-size="12" text-anchor="middle">Research Question</text>
  
  <line x1="400" y1="100" x2="400" y2="130" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="395,130 400,140 405,130" fill="#A39C90"/>
  
  <!-- Task Decomposer -->
  <rect x="300" y="140" width="200" height="40" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="400" y="164" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Task Decomposition</text>
  
  <!-- Lines to agents -->
  <line x1="320" y1="180" x2="120" y2="220" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="370" y1="180" x2="330" y2="220" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="430" y1="180" x2="470" y2="220" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="480" y1="180" x2="680" y2="220" stroke="#A39C90" stroke-width="1.5"/>
  
  <!-- Agent 1 -->
  <rect x="40" y="220" width="160" height="55" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="120" y="242" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Researcher Agent</text>
  <text x="120" y="258" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Gathers information</text>
  
  <!-- Agent 2 -->
  <rect x="250" y="220" width="160" height="55" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="330" y="242" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Analyst Agent</text>
  <text x="330" y="258" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Extracts insights</text>
  
  <!-- Agent 3 -->
  <rect x="450" y="220" width="160" height="55" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="530" y="242" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Writer Agent</text>
  <text x="530" y="258" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Synthesizes report</text>
  
  <!-- Agent 4 -->
  <rect x="640" y="220" width="140" height="55" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="710" y="242" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Reviewer Agent</text>
  <text x="710" y="258" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Quality check</text>
  
  <!-- Arrows to Orchestrator -->
  <line x1="120" y1="275" x2="120" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="330" y1="275" x2="330" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="530" y1="275" x2="530" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="710" y1="275" x2="710" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  
  <line x1="120" y1="350" x2="400" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="330" y1="350" x2="400" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="530" y1="350" x2="400" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="710" y1="350" x2="400" y2="350" stroke="#A39C90" stroke-width="1.5"/>
  
  <polygon points="400,345 410,350 400,355" fill="#A39C90"/>
  
  <!-- Orchestrator -->
  <rect x="300" y="350" width="200" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="400" y="369" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">LangGraph Orchestrator</text>
  <text x="400" y="385" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Stateful Workflow</text>
  
  <line x1="400" y1="395" x2="400" y2="430" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="395,430 400,440 405,430" fill="#A39C90"/>
  
  <!-- Output -->
  <rect x="280" y="440" width="240" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="400" y="466" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Synthesized Research Report</text>
</svg>`,
      keyFeatures: [
        "Role-based agent decomposition with specialized Research, Analysis, Writing, and Review agents",
        "Stateful orchestration via LangGraph with full inter-agent context passing",
        "Real-time streaming of agent outputs to the React frontend via WebSockets",
        "Parallel execution of independent research subtasks",
        "Iterative refinement loop where reviewer feedback triggers re-generation",
        "Dark-themed React frontend with collapsible agent output panels",
      ],
      techStack: [
        "Python",
        "LangGraph",
        "CrewAI",
        "Groq",
        "FastAPI",
        "Next.js",
        "TailwindCSS",
        "WebSockets",
        "Docker",
      ],
      challenges: [
        {
          title: "Agent Coordination State Management",
          description:
            "Managing context passing between four agents in a directed acyclic graph required careful state schema design. Each agent's output needed to be structured and parseable by downstream agents without information loss.",
        },
        {
          title: "Async Orchestration with Real-time Streaming",
          description:
            "Coordinating parallel agent execution while streaming partial results to the frontend required non-trivial async patterns. Used asyncio tasks with shared state queues and WebSocket broadcasting.",
        },
        {
          title: "Quality Control Loops",
          description:
            "The reviewer agent occasionally flagged issues that required regeneration, but unbounded retry loops could cause infinite execution. Implemented a max 2-retry policy with progressive context enrichment between attempts.",
        },
      ],
      lessonsLearned: [
        "Structured agent outputs (typed schemas) dramatically improve inter-agent communication quality",
        "Real-time streaming is essential for user trust — showing intermediate agent work keeps users engaged during long-running research tasks",
        "Locking retry budgets prevents runaway costs while still allowing meaningful quality improvement cycles",
      ],
      results:
        "The system produces research reports that consistently outperform single-LLM outputs in breadth, depth, and factual accuracy, as evaluated by domain experts across 20 test scenarios. Average completion time for a complex research topic is 45 seconds.",
      relatedProjects: ["rag-knowledge-assistant", "ai-customer-support-agent"],
    },
  },
  {
    slug: "deepfake-detection-system",
    title: "Deepfake Detection System",
    summary:
      "ConvNeXt-Tiny based 6-class deepfake classifier deployed on Hugging Face Spaces via Docker.",
    category: "AI",
    isFeatured: false,
    techStack: [
      "Python",
      "PyTorch",
      "ConvNeXt",
      "Hugging Face",
      "Docker",
      "Gradio",
    ],
        media: [
        {
          type: "image",
          src: "/projects/deepfake-detection.png",
          caption: "Landing page that shows detailed information about the Deepfake Detection System project, including overview, architecture, and key features."
        },
        {
          type: "image",
          src: "/projects/deepfake-upload.png",
          caption: "Upload interface for submitting videos for deepfake detection"
        },
        {
          type: "image",
          src: "/projects/deepfake-prediction.png",
          caption: "Prediction results showing the classification of the uploaded video along with confidence scores"
        },
        {
          type: "image",
          src: "/projects/gradcam-result.png",
          caption: "Grad-CAM visualization for explaining deepfake detection decisions"
        }
      ],
    sections: {
      overview:
        "Built a deepfake detection system using a ConvNeXt-Tiny architecture fine-tuned for 6-way classification across real and AI-generated face categories. The model is containerized with Docker and deployed on Hugging Face Spaces with a Gradio inference interface.",
      businessProblem:
        "Synthetic media generation has outpaced detection capabilities. Organizations need reliable tools to distinguish real photographs from AI-generated images across multiple generation methods (GANs, diffusion models, etc.).",
      solution:
        "Fine-tuned a ConvNeXt-Tiny model on a curated dataset spanning 6 classes: real faces and 5 types of AI-generated faces. Applied aggressive data augmentation to improve generalization. Containerized the full inference pipeline with Docker for reproducible deployment on Hugging Face Spaces.",
      architectureDiagram: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="700" height="300" fill="#1C1A17" rx="12"/>
  <text x="350" y="28" fill="#F5F1EA" font-family="monospace" font-size="13" text-anchor="middle" font-weight="bold">Deepfake Detection — Pipeline</text>
  
  <!-- Input -->
  <rect x="30" y="60" width="120" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="90" y="86" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Input Image</text>
  
  <line x1="150" y1="82" x2="200" y2="82" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="200,77 210,82 200,87" fill="#A39C90"/>
  
  <!-- Preprocess -->
  <rect x="210" y="60" width="120" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="270" y="86" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Preprocessing</text>
  
  <line x1="330" y1="82" x2="380" y2="82" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="380,77 390,82 380,87" fill="#A39C90"/>
  
  <!-- ConvNeXt -->
  <rect x="390" y="60" width="140" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="460" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">ConvNeXt-Tiny</text>
  <text x="460" y="95" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Fine-tuned</text>
  
  <line x1="530" y1="82" x2="580" y2="82" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="580,77 590,82 580,87" fill="#A39C90"/>
  
  <!-- Classification -->
  <rect x="590" y="60" width="90" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="635" y="86" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">6-Class</text>
  
  <!-- Deployment box -->
  <rect x="180" y="160" width="340" height="55" rx="8" fill="#252220" stroke="#A39C90" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="350" y="182" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Deployment: Docker → Hugging Face Spaces</text>
  <text x="350" y="200" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Gradio Inference Interface</text>
  
  <line x1="460" y1="105" x2="350" y2="160" stroke="#A39C90" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`,
      keyFeatures: [
        "6-class classification: Real vs. GAN, Diffusion, VAE, StyleGAN, and Other synthetic",
        "ConvNeXt-Tiny architecture optimized for inference speed",
        "Docker containerized for reproducible deployment",
        "Gradio web interface for easy image upload and classification",
        "Data augmentation pipeline with random crops, flips, and color jitter",
      ],
      techStack: [
        "Python",
        "PyTorch",
        "ConvNeXt-Tiny",
        "Hugging Face Transformers",
        "Docker",
        "Gradio",
        "Albumentations",
      ],
      challenges: [
        {
          title: "Cross-Generator Generalization",
          description:
            "Models trained on one generation method (e.g., GANs) don't generalize to others (e.g., diffusion). Augmented the training set with images from 5 distinct generation methods and used aggressive augmentation to prevent method-specific overfitting.",
        },
        {
          title: "Model Size vs. Inference Speed",
          description:
            "Larger models achieve better accuracy but are too slow for real-time use. ConvNeXt-Tiny provided the best accuracy-to-latency trade-off, achieving 94% validation accuracy with sub-100ms inference on CPU.",
        },
        {
          title: "Docker Container Size",
          description:
            "PyTorch-based containers are large. Optimized the Docker image using multi-stage builds and PyTorch CPU-only slim images to reduce container size from 3.2GB to 850MB.",
        },
      ],
      lessonsLearned: [
        "Deepfake detection models must be trained on diverse generation methods to generalize in the wild",
        "Model distillation can further improve inference speed without significant accuracy loss",
        "Containerized deployment ensures reproducibility across environments",
      ],
      results:
        "The model achieves 94% validation accuracy across all 6 classes with sub-100ms CPU inference time. Deployed on Hugging Face Spaces with Docker, serving 50+ daily inference requests.",
      relatedProjects: [],
    },
  },
  {
    slug: "ai-lead-qualification-system",
    title: "AI Lead Qualification System",
    summary:
      "Automated lead scoring and routing pipeline using n8n, Groq-hosted LLaMA 3.3 70B, Google Sheets, and Gmail.",
    category: "Automation",
    isFeatured: false,
    techStack: ["n8n", "Groq", "Python", "Google Sheets API", "Gmail API"],
       
    sections: {
      overview:
        "Built an automated lead qualification pipeline that ingests leads from multiple sources, scores them using LLaMA 3.3 70B for fit and intent, routes high-scoring leads to sales, and logs everything to Google Sheets for analysis. All orchestrated via n8n workflows.",
      businessProblem:
        "Sales teams at B2B companies receive hundreds of inbound leads weekly. Manual triage is slow and inconsistent. High-value leads slip through while low-quality leads consume sales effort. Teams needed an automated system that consistently evaluates and routes leads based on fit criteria.",
      solution:
        "Designed an n8n workflow that watches lead sources (web forms, email inquiries, LinkedIn), runs each lead through a structured LLaMA 3.3 70B prompt for scoring across 5 dimensions (budget fit, authority, need, timeline, intent), computes a composite score, and routes leads above threshold directly to sales via Gmail with a formatted summary.",
      architectureDiagram: `<svg viewBox="0 0 750 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="750" height="380" fill="#1C1A17" rx="12"/>
  <text x="375" y="28" fill="#F5F1EA" font-family="monospace" font-size="13" text-anchor="middle" font-weight="bold">Lead Qualification Pipeline — Architecture</text>
  
  <!-- Sources -->
  <rect x="30" y="55" width="130" height="40" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="95" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Lead Sources</text>
  
  <line x1="160" y1="75" x2="220" y2="75" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="220,70 230,75 220,80" fill="#A39C90"/>
  
  <!-- n8n -->
  <rect x="230" y="55" width="140" height="40" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="300" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">n8n Orchestrator</text>
  
  <line x1="370" y1="75" x2="430" y2="75" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="430,70 440,75 430,80" fill="#A39C90"/>
  
  <!-- LLM Scoring -->
  <rect x="440" y="55" width="170" height="40" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="525" y="72" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">LLaMA 3.3 70B Scoring</text>
  <text x="525" y="86" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">5-dimension evaluation</text>
  
  <line x1="610" y1="75" x2="660" y2="75" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="660,70 670,75 660,80" fill="#A39C90"/>
  
  <!-- Decision -->
  <rect x="670" y="55" width="60" height="40" rx="20" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="700" y="79" fill="#F5F1EA" font-family="monospace" font-size="10" text-anchor="middle">≥75?</text>
  
  <!-- High route -->
  <line x1="700" y1="95" x2="700" y2="160" stroke="#5FA8A0" stroke-width="1.5"/>
  <line x1="700" y1="160" x2="250" y2="160" stroke="#5FA8A0" stroke-width="1.5"/>
  <polygon points="250,155 240,160 250,165" fill="#5FA8A0"/>
  
  <!-- Gmail -->
  <rect x="100" y="140" width="150" height="40" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="175" y="164" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Gmail → Sales Team</text>
  
  <!-- Sheets -->
  <rect x="440" y="140" width="190" height="40" rx="8" fill="#252220" stroke="#A39C90" stroke-width="1.5"/>
  <text x="535" y="157" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Google Sheets Log</text>
  <text x="535" y="171" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">All leads + scores</text>
  
  <line x1="670" y1="95" x2="535" y2="140" stroke="#A39C90" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="370" y1="95" x2="535" y2="140" stroke="#A39C90" stroke-width="1"/>
  
  <!-- Low route -->
  <line x1="300" y1="95" x2="300" y2="200" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="300" y1="200" x2="535" y2="200" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="535,195 545,200 535,205" fill="#A39C90"/>
  
  <text x="535" y="220" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Low-scoring leads logged only</text>
</svg>`,
      keyFeatures: [
        "Multi-source lead ingestion (web forms, email, LinkedIn inquiries)",
        "LLM-powered lead scoring across 5 dimensions with structured output parsing",
        "Automated routing: high-scoring leads sent to sales with formatted summaries",
        "Complete lead audit trail in Google Sheets",
        "Configurable scoring thresholds and routing rules",
        "Slack notifications for high-value leads",
      ],
      techStack: [
        "n8n",
        "Groq",
        "LLaMA 3.3 70B",
        "Google Sheets API",
        "Gmail API",
        "Slack Webhooks",
      ],
      challenges: [
        {
          title: "Structured Output from LLMs",
          description:
            "Getting consistently formatted JSON scores from LLMs required careful prompt engineering with few-shot examples and explicit schema instructions. Added post-processing validation to catch malformed outputs.",
        },
        {
          title: "n8n Workflow Reliability",
          description:
            "Long-running workflows with API calls to multiple services occasionally timeout. Implemented retry logic with exponential backoff and error notifications to ensure no leads are lost.",
        },
        {
          title: "Score Calibration",
          description:
            "Initial LLM scores clustered around the middle (40-60 range) with low variance. Tuned the scoring prompt to penalize middling scores and reward clear signals, producing more actionable score distributions.",
        },
      ],
      lessonsLearned: [
        "LLM scoring with structured output parsing is a viable alternative to trained classifiers for lead scoring, especially when labeled data is scarce",
        "n8n is a powerful orchestrator for AI workflows but requires robust error handling for production use",
        "A complete audit trail in Google Sheets builds stakeholder trust and enables continuous improvement",
      ],
      results:
        "The system processes 100+ leads weekly with zero manual effort. Sales team reports 35% higher conversion rate on AI-scored leads compared to manual triage. Lead response time dropped from 4 hours to under 5 minutes.",
      relatedProjects: ["cold-email-outreach-automation"],
    },
  },
  {
    slug: "cold-email-outreach-automation",
    title: "Cold Email Outreach Automation",
    summary:
      "Scraping pipeline with LLaMA-personalized emails and automated Gmail delivery.",
    category: "Automation",
    isFeatured: false,
    techStack: ["Python", "n8n", "Groq", "Gmail API", "BeautifulSoup"],
        media: [
        {
          type: "image",
          src: "/projects/automation2.png",
          caption: "Complete pipeline architecture showing scraping, personalization, and email delivery components."
        },
        {
          type: "image",
          src: "/projects/automation1.png",
          caption: "Follow up email workflow with n8n and Gmail API integration"
        }
      ],
    sections: {
      overview:
        "Built an end-to-end cold email outreach automation that scrapes company data from target industries, generates personalized email copy using LLaMA, and sends them through Gmail with automated follow-ups.",
      businessProblem:
        "Manual cold outreach is time-consuming and doesn't scale. Generic templates get low response rates. Personalized outreach requires research on each prospect, which is prohibitively slow at scale.",
      solution:
        "Created a pipeline that scrapes company information from public sources, enriches each prospect profile, generates personalized email copy using LLaMA 3.3 70B with company-specific context, and sends through Gmail with a 3-email follow-up sequence.",
      architectureDiagram: `<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="720" height="320" fill="#1C1A17" rx="12"/>
  <text x="360" y="28" fill="#F5F1EA" font-family="monospace" font-size="13" text-anchor="middle" font-weight="bold">Cold Email Outreach — Pipeline</text>
  
  <!-- Scraper -->
  <rect x="30" y="60" width="140" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="100" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Web Scraper</text>
  <text x="100" y="95" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Company + Contact data</text>
  
  <line x1="170" y1="82" x2="230" y2="82" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="230,77 240,82 230,87" fill="#A39C90"/>
  
  <!-- LLM Personalization -->
  <rect x="240" y="60" width="180" height="45" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="330" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">LLaMA Personalization</text>
  <text x="330" y="95" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Company-aware email copy</text>
  
  <line x1="420" y1="82" x2="480" y2="82" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="480,77 490,82 480,87" fill="#A39C90"/>
  
  <!-- Gmail -->
  <rect x="490" y="60" width="140" height="45" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="560" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Gmail Send</text>
  <text x="560" y="95" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">3-email sequence</text>
  
  <!-- n8n Orchestrator -->
  <rect x="240" y="170" width="260" height="45" rx="8" fill="#252220" stroke="#A39C90" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="370" y="189" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">n8n Orchestrator</text>
  <text x="370" y="205" fill="#A39C90" font-family="monospace" font-size="10" text-anchor="middle">Scheduling + Retry + Logging</text>
  
  <line x1="330" y1="105" x2="330" y2="170" stroke="#A39C90" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`,
      keyFeatures: [
        "Web scraping pipeline for company profile enrichment (industry, size, tech stack, recent news)",
        "LLaMA-generated personalized email copy incorporating company-specific context",
        "3-email follow-up sequence with configurable delays",
        "Gmail API integration with send quota management",
        "Open/click tracking via pixel tracking",
        "Response detection and auto-stop on reply",
      ],
      techStack: [
        "Python",
        "BeautifulSoup",
        "n8n",
        "Groq",
        "LLaMA 3.3 70B",
        "Gmail API",
        "PostgreSQL",
      ],
      challenges: [
        {
          title: "Email Personalization at Scale",
          description:
            "LLM-generated emails risk being too generic or hallucinating company details. Built a prompt architecture that injects verified scraped data points and constrains the model to only use provided context, never inventing details.",
        },
        {
          title: "Gmail Send Quotas",
          description:
            "Google's daily send limits require careful scheduling. Implemented a rate-limiting layer in n8n that spaces sends across the day and respects API quota limits.",
        },
        {
          title: "Response Detection",
          description:
            "Automatically detecting human replies to stop follow-ups requires parsing reply semantics, not just subject matching. Used a lightweight classifier to distinguish auto-replies and out-of-office from genuine human responses.",
        },
      ],
      lessonsLearned: [
        "Highly personalized emails (company name, recent news, specific pain point references) outperform generic templates by 3-5x on reply rates",
        "A 3-email sequence with 2-day intervals maximizes response rate without being intrusive",
        "Auto-stop on human reply is critical for maintaining sender reputation",
      ],
      results:
        "Achieved 32% reply rate and 8% conversion rate on a 500-prospect campaign, with the system autonomously managing the entire outreach lifecycle.",
      relatedProjects: ["ai-lead-qualification-system"],
    },
  },
  {
    slug: "shopify-email-marketing-automation",
    title: "Shopify Email Marketing Automation",
    summary:
      "Zapier + Klaviyo lifecycle emails triggered by Shopify store events.",
    category: "Automation",
    isFeatured: false,
    techStack: ["Zapier", "Klaviyo", "Shopify API", "Python"],
    sections: {
      overview:
        "Designed and implemented a lifecycle email marketing automation for a Shopify store, using Zapier to bridge Shopify events into Klaviyo for targeted email sequences. The system triggers personalized emails based on customer behavior: abandoned cart, post-purchase, win-back, and browse abandonment.",
      businessProblem:
        "E-commerce stores lose revenue from abandoned carts and inactive customers. Manual email campaigns are too slow for real-time behavioral triggers. Store owners need automated, event-driven email sequences that respond to customer actions within minutes.",
      solution:
        "Connected Shopify webhook events (cart creation, order placement, customer inactivity) to Klaviyo via Zapier. Each event type triggers a tailored email sequence with personalized product recommendations based on browsing history.",
      architectureDiagram: `<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="700" height="280" fill="#1C1A17" rx="12"/>
  <text x="350" y="28" fill="#F5F1EA" font-family="monospace" font-size="13" text-anchor="middle" font-weight="bold">Shopify Email Automation — Architecture</text>
  
  <!-- Shopify -->
  <rect x="30" y="60" width="140" height="50" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="100" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Shopify Store</text>
  <text x="100" y="95" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Webhook Events</text>
  
  <line x1="170" y1="85" x2="230" y2="85" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="230,80 240,85 230,90" fill="#A39C90"/>
  
  <!-- Zapier -->
  <rect x="240" y="60" width="140" height="50" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="310" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Zapier Bridge</text>
  <text x="310" y="95" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Event Router</text>
  
  <line x1="380" y1="85" x2="440" y2="85" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="440,80 450,85 440,90" fill="#A39C90"/>
  
  <!-- Klaviyo -->
  <rect x="450" y="60" width="140" height="50" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="520" y="79" fill="#F5F1EA" font-family="monospace" font-size="11" text-anchor="middle">Klaviyo</text>
  <text x="520" y="95" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Email Sequences</text>
  
  <!-- Event types -->
  <rect x="240" y="160" width="100" height="35" rx="6" fill="#252220" stroke="#A39C90" stroke-width="1"/>
  <text x="290" y="182" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Abandoned Cart</text>
  
  <rect x="360" y="160" width="100" height="35" rx="6" fill="#252220" stroke="#A39C90" stroke-width="1"/>
  <text x="410" y="182" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Post-Purchase</text>
  
  <rect x="480" y="160" width="100" height="35" rx="6" fill="#252220" stroke="#A39C90" stroke-width="1"/>
  <text x="530" y="182" fill="#A39C90" font-family="monospace" font-size="9" text-anchor="middle">Win-Back</text>
  
  <line x1="310" y1="110" x2="290" y2="160" stroke="#A39C90" stroke-width="1"/>
  <line x1="310" y1="110" x2="410" y2="160" stroke="#A39C90" stroke-width="1"/>
  <line x1="310" y1="110" x2="530" y2="160" stroke="#A39C90" stroke-width="1"/>
</svg>`,
      keyFeatures: [
        "Real-time event-driven email triggers via Shopify webhooks",
        "Abandoned cart email sequence with product reminders",
        "Post-purchase follow-up with cross-sell recommendations",
        "Win-back campaign for inactive customers (30/60/90 day intervals)",
        "Browse abandonment trigger for logged-in users",
        "A/B testable subject lines and send timing via Klaviyo",
      ],
      techStack: [
        "Zapier",
        "Klaviyo",
        "Shopify API",
        "Python",
        "HTML Email Templates",
      ],
      challenges: [
        {
          title: "Zapier Data Transformation",
          description:
            "Shopify webhook payloads are deeply nested JSON. Zapier's built-in formatter couldn't reliably extract all needed fields. Wrote a Python transformation layer that normalizes Shopify payloads before forwarding to Klaviyo.",
        },
        {
          title: "Multi-Channel Attribution",
          description:
            "Determining which email in a sequence drove a conversion required Klaviyo's native tracking plus custom UTM parameters. Set up a consistent tagging scheme across all triggered emails.",
        },
        {
          title: "Rate Limiting at Scale",
          description:
            "During flash sales, concurrent Shopify events could exceed Zapier's rate limits. Implemented a queue buffer using a simple Python middleware that batches events before forwarding.",
        },
      ],
      lessonsLearned: [
        "Event-driven emails outperform batch campaigns 3:1 on click-through rates",
        "Abandoned cart emails with specific product images recover 8-15% of otherwise lost revenue",
        "A/B test timing is as important as copy — 1-hour vs. 24-hour delay for cart abandonment varies significantly by audience",
      ],
      results:
        "Automated email sequences recovered 12% of abandoned carts. Post-purchase emails generated 18% repeat purchase rate. The system runs 24/7 with zero manual intervention.",
      relatedProjects: ["cold-email-outreach-automation"],
    },
  },

  {
  slug: "ai-resume-screening-saas",
  title: "AI Resume Screening SaaS",
  summary:
    "An AI-powered recruitment platform that automates resume screening, candidate matching, and recruitment workflows using FastAPI, PostgreSQL, NLP, and intelligent filtering.",

  category: "AI",
  isFeatured: true,

  techStack: [
    "FastAPI",
    "Python",
    "PostgreSQL",
    "spaCy",
    "JWT",
    "React",
  ],
    media: [
        {
          type: "video",
          src: "/projects/infra.mp4",
          caption: "Showing complete working of the AI Resume Screening SaaS platform, including resume upload, skill extraction, and candidate search."
        }
      ],
  sections: {
    overview:
      "Developed a SaaS-based AI Resume Screening platform that streamlines the hiring process by automatically parsing resumes, extracting candidate skills, matching applicants against job requirements, and providing recruiters with searchable candidate profiles through a scalable FastAPI backend.",

    businessProblem:
      "Recruiters spend significant time manually reviewing resumes, filtering unsuitable candidates, and comparing applicants against job descriptions. This process becomes increasingly inefficient as application volumes grow.",

    solution:
      "Designed a scalable recruitment platform where recruiters upload resumes, automatically extract candidate information using NLP, compare applicants against job requirements, and manage hiring workflows through secure REST APIs with PostgreSQL-backed storage.",

    architectureDiagram: `<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect width="760" height="300" rx="12" fill="#1C1A17"/>

  <text x="380" y="28" text-anchor="middle" fill="#F5F1EA" font-family="monospace" font-size="13" font-weight="bold">
    AI Resume Screening SaaS — Architecture
  </text>

  <!-- Recruiter -->
  <rect x="30" y="90" width="120" height="55" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="90" y="120" text-anchor="middle" fill="#F5F1EA" font-family="monospace" font-size="11">
    Recruiter
  </text>

  <line x1="150" y1="118" x2="220" y2="118" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="220,113 230,118 220,123" fill="#A39C90"/>

  <!-- FastAPI -->
  <rect x="230" y="90" width="170" height="55" rx="8" fill="#252220" stroke="#E8734A" stroke-width="1.5"/>
  <text x="315" y="112" text-anchor="middle" fill="#F5F1EA" font-family="monospace" font-size="11">
    FastAPI Backend
  </text>
  <text x="315" y="129" text-anchor="middle" fill="#A39C90" font-family="monospace" font-size="9">
    Authentication • APIs • Business Logic
  </text>

  <!-- NLP -->
  <line x1="400" y1="118" x2="470" y2="118" stroke="#A39C90" stroke-width="1.5"/>
  <polygon points="470,113 480,118 470,123" fill="#A39C90"/>

  <rect x="480" y="90" width="170" height="55" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="565" y="112" text-anchor="middle" fill="#F5F1EA" font-family="monospace" font-size="11">
    Resume Parser
  </text>
  <text x="565" y="129" text-anchor="middle" fill="#A39C90" font-family="monospace" font-size="9">
    spaCy Skill Extraction
  </text>

  <!-- Database -->
  <rect x="270" y="205" width="180" height="50" rx="8" fill="#252220" stroke="#5FA8A0" stroke-width="1.5"/>
  <text x="360" y="234" text-anchor="middle" fill="#F5F1EA" font-family="monospace" font-size="11">
    PostgreSQL Database
  </text>

  <line x1="315" y1="145" x2="360" y2="205" stroke="#A39C90" stroke-width="1.5"/>
  <line x1="565" y1="145" x2="420" y2="205" stroke="#A39C90" stroke-width="1.5"/>
</svg>`,

    keyFeatures: [
      "AI-powered resume parsing and structured candidate extraction",
      "Automatic skill extraction using NLP (spaCy)",
      "Resume-to-job matching based on required skills",
      "Secure recruiter authentication with JWT",
      "Resume upload and candidate management",
      "Advanced search and filtering of applicants",
      "REST API architecture for frontend integration",
      "Scalable PostgreSQL data model for recruitment workflows"
    ],

    techStack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "spaCy",
      "JWT Authentication",
      "REST APIs",
      "React",
      "Docker"
    ],

    challenges: [
      {
        title: "Reliable Resume Parsing",
        description:
          "Resumes come in different layouts and formats, making information extraction inconsistent. Designed preprocessing logic and NLP pipelines to improve extraction accuracy across varying resume structures."
      },
      {
        title: "Skill Matching",
        description:
          "Candidate skills often appear with different wording and abbreviations. Used NLP-based normalization to improve matching between resumes and job descriptions."
      },
      {
        title: "Scalable Backend Architecture",
        description:
          "Designed REST APIs and database relationships that support future expansion into multi-company SaaS usage while maintaining clean separation between recruiters, jobs, and candidates."
      }
    ],

    lessonsLearned: [
      "Clean API architecture simplifies frontend integration and long-term maintenance.",
      "NLP significantly improves recruitment workflows compared to simple keyword matching.",
      "Proper database relationships are critical for scalable recruitment platforms.",
      "Authentication and role-based access should be planned early in SaaS applications."
    ],

    results:
      "Successfully built a functional AI-powered recruitment platform capable of automating resume screening, extracting candidate skills, and simplifying recruiter workflows through intelligent search and candidate matching.",

    relatedProjects: [
      "ai-customer-support-agent",
      "rag-knowledge-assistant"
    ],
  },
},
  
];

export const featuredProjects = projects.filter((p) => p.isFeatured);

export const projectCategories = ["All", "AI", "Backend", "Automation", "Web"];