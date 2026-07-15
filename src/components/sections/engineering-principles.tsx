import { Cpu, Shield, GitBranch, Gauge } from "lucide-react";

const principles = [
  {
    icon: Cpu,
    title: "Design for Production",
    description:
      "Every system I build is designed for real users from day one \u2014 not demos, not slide decks. That means observability, error handling, and graceful degradation are features, not afterthoughts.",
  },
  {
    icon: Shield,
    title: "Deterministic by Default",
    description:
      "LLMs are non-deterministic. Production systems need guardrails. I wrap every AI decision point with validation layers, confidence thresholds, and fallback paths so the system behaves predictably.",
  },
  {
    icon: GitBranch,
    title: "Composable Architecture",
    description:
      "Systems should be built from interchangeable, testable components. I design agent workflows, API layers, and data pipelines as modular units that can be composed, tested, and replaced independently.",
  },
  {
    icon: Gauge,
    title: "Measure What Matters",
    description:
      "If it\u2019s not measured, it\u2019s not production. Every system gets instrumentation for latency, accuracy, cost, and error rates. I optimize based on data, not intuition.",
  },
];

export default function EngineeringPrinciples() {
  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="mb-8 md:mb-10">
          <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
            Philosophy
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">
            Engineering Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="group bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-6 hover:-translate-y-0.5 hover:border-[rgba(232,115,74,0.3)] transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[rgba(232,115,74,0.1)] rounded-lg flex items-center justify-center group-hover:bg-[rgba(232,115,74,0.15)] transition-colors">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#E8734A]"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#F5F1EA] mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-[#A39C90] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
                <div className="w-0 group-hover:w-full h-0.5 bg-[#E8734A] mt-4 transition-all duration-300 rounded-full opacity-0 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}