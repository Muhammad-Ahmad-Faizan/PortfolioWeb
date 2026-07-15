import { Note } from "@/types";

export const notes: Note[] = [
  {
    slug: "designing-production-rag-systems",
    title: "Designing Production RAG Systems",
    summary:
      "Lessons from building retrieval-augmented generation pipelines that actually work in production — chunking strategies, embedding selection, and evaluation.",
    date: "2026-07-05",
    tags: ["RAG", "LangChain", "ChromaDB", "FastAPI"],
    content: `# Designing Production RAG Systems

While building several RAG systems for production use, here are the patterns that consistently work and the ones that don't.

## Chunking Strategy Matters More Than You Think

The most common mistake is naive fixed-size chunking. A 512-token chunk with no overlap breaks logical paragraphs, loses context, and produces worse retrieval results than a well-designed recursive splitter.

I use a recursive character text splitter with:
- Chunk size: 1000 tokens
- Overlap: 200 tokens
- Separators: ["\\n\\n", "\\n", ".", " ", ""]

This respects document structure while maintaining enough context for meaningful retrieval.

## Hybrid Search Catches Edge Cases

Pure semantic search misses exact-match queries (product names, SKUs, version numbers). Adding BM25 keyword retrieval and fusing results with a weighted combination (0.7 semantic + 0.3 keyword) catches 95% of edge cases that either method alone would miss.

## Re-ranking Is Not Optional

The jump from top-5 to top-1 precision is where the real quality gain lives. A cross-encoder re-ranker (e.g., BAAI/bge-reranker-v2-m3) consistently improves top-1 precision by 30-40% over pure embedding similarity.

## Evaluation Strategy

I evaluate RAG systems on three dimensions:
1. **Retrieval precision**: Are the right documents being retrieved?
2. **Answer groundedness**: Is the answer supported by retrieved context?
3. **Citation accuracy**: Does the answer cite the correct source documents?

Each dimension needs its own test set. Groundedness and citation accuracy are best evaluated with LLM-as-judge, not human annotation at scale.`,
  },
  {
    slug: "building-reliable-ai-agents",
    title: "Building Reliable AI Agents",
    summary:
      "Architectural patterns for LLM-powered agents that don't hallucinate, get stuck in loops, or fail silently in production.",
    date: "2026-06-30",
    tags: ["AI Agents", "LangGraph", "LLM", "Architecture"],
    content: `# Building Reliable AI Agents

During shipping several LLM-powered agents to production, here's what I've learned about reliability.

## Deterministic Guardrails

The biggest risk with LLM agents is non-determinism. The same input can produce different outputs — and different tool calls — on successive runs. This is unacceptable for production systems.

My approach: wrap every LLM decision point with a validation layer:
- Structured output parsing (Pydantic schemas, not free-form JSON)
- Parameter validation before tool execution
- Confidence thresholds with fallback paths

## State Management

LangGraph's stateful graphs are the right abstraction for agent workflows. The key insight is to design your state schema before writing any agent logic. Each step in the graph should have explicit input/output types.

I use a three-layer state model:
1. **Workflow state**: Current step, progress, errors
2. **Context state**: Accumulated context from previous steps
3. **Output state**: Final results and intermediate artifacts

## Error Recovery

Agents will fail. The question is whether they fail gracefully. Every agent I build now has:
- Retry policies with exponential backoff (max 3 retries)
- Circuit breakers that escalate to human operators after N failures
- Complete audit logging of every LLM call, tool execution, and state transition

## The Right Abstraction Level

Not every task needs an agent. If a deterministic script can solve the problem, use that. Agents add complexity, latency, and cost. Reserve them for tasks that genuinely need reasoning, tool use, and multi-step planning.`,
  },
  {
    slug: "fastapi-production-patterns",
    title: "FastAPI Production Patterns",
    summary:
      "Production-hardened patterns for FastAPI: dependency injection, background tasks, structured logging, and async database sessions.",
    date: "2025-10-17",
    tags: ["FastAPI", "Python", "Backend", "Architecture"],
    content: `# FastAPI Production Patterns

FastAPI is my default framework for Python APIs. Here are the patterns I use in every production deployment.

## Dependency Injection for Services

FastAPI's Depends() system is more powerful than most people use. I wire all external services (database, LLM providers, cache) through dependency injection:

\`\`\`python
async def get_db() -> AsyncSession:
    async with async_session() as session:
        yield session

async def get_llm() -> LLMProvider:
    return LLMProvider()

@app.post("/query")
async def query(
    request: QueryRequest,
    db: AsyncSession = Depends(get_db),
    llm: LLMProvider = Depends(get_llm),
):
    ...
\`\`\`

This makes testing trivial — just override the dependencies with mocks.

## Background Tasks with Lifespan

For long-running AI tasks, I use FastAPI's BackgroundTasks combined with the lifespan pattern for startup/shutdown:

\`\`\`python
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: initialize connection pools, load models
    app.state.model = await load_model()
    yield
    # Shutdown: clean up resources
    await app.state.model.close()
\`\`\`

## Structured Logging

Don't use print() or basic logging. Use structlog or a JSON-based logger that captures request IDs, latency, and error context. Every log line should be traceable to a specific request.

## Database Sessions

Use async sessions with SQLAlchemy 2.0's async engine. Never share sessions across requests. Always use session-per-request pattern with dependency injection.

The combination of these patterns produces APIs that are testable, observable, and maintainable at scale.`,
  },

  {
    slug: "automation-workflows-with-n8n",
    title: "Automation Workflows with n8n",
    summary:
      "Building reliable automation pipelines with n8n for AI-powered lead qualification, email outreach, and data processing.",
    date: "2025-09-11",
    tags: ["n8n", "Automation", "Workflow", "AI"],
    content: `# Automation Workflows with n8n

n8n has become my go-to tool for connecting AI services to business workflows. Here's what I've learned.

## When to Use n8n vs. Custom Code

n8n excels at orchestrating API calls across multiple services. Use it when:
- You need to connect 3+ external services (Google Sheets, Gmail, Slack, etc.)
- The workflow logic is primarily branching and conditional
- You need non-technical stakeholders to see and understand the workflow

Use custom code when:
- You need complex data transformations
- The workflow has tight latency requirements
- You need to handle edge cases programmatically

## Error Handling Is Critical

n8n's retry mechanism is good but you should supplement it with:
- Error workflows that send notifications on failure
- Dead-letter queues for failed items
- Idempotency keys to prevent duplicate processing

## LLM Integration Pattern

The most reliable pattern for LLM calls in n8n:
1. Collect and format input data
2. Call LLM with structured prompt + few-shot examples
3. Parse response with a validation step
4. Retry with modified prompt on parse failure
5. Log everything to a spreadsheet

This pattern has been running in production for months with 99.5% uptime.`,
  },
];