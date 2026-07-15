import { Brain, Workflow, Bot, Network } from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "Multi-Agent Systems",
    description:
      "Orchestrating coordinated AI agents that decompose complex tasks across specialized roles with stateful workflows.",
  },
  {
    icon: Workflow,
    title: "Production Automation",
    description:
      "Building reliable automation pipelines that connect AI services to business workflows via n8n, Zapier, and custom middleware.",
  },
  {
    icon: Bot,
    title: "RAG at Scale",
    description:
      "Designing retrieval-augmented generation systems that balance retrieval precision, generation quality, and production latency.",
  },
  {
    icon: Network,
    title: "Agentic Infrastructure",
    description:
      "Creating the tooling and patterns \u2014 guardrails, memory, observability \u2014 that make AI agents reliable enough for production.",
  },
];

const sectionDescription = "Here\u2019s what I\u2019m actively building and exploring.";

export default function CurrentFocus() {
  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="mb-8 md:mb-10">
          <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
            Now
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">
            Current Focus
          </h2>
          <p className="mt-3 text-[#A39C90] text-base max-w-2xl leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-5 hover:-translate-y-0.5 hover:border-[rgba(232,115,74,0.3)] transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[rgba(232,115,74,0.1)] rounded-lg flex items-center justify-center group-hover:bg-[rgba(232,115,74,0.15)] transition-colors">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#E8734A]"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F5F1EA] mb-1">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[#A39C90] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}