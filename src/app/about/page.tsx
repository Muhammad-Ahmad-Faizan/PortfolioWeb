import Image from "next/image";
import Link from "next/link";
import { User, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Download } from "lucide-react";

const problemSolvingSteps = [
  {
    step: 1,
    title: "Understand the Business Problem",
    description:
      "I start by understanding the client's goals, users, and business challenges before selecting technologies or designing the solution.",
  },
  {
    step: 2,
    title: "Design Scalable Architecture",
    description:
      "I design clean system architectures with clear data flow, modular components, and scalable backend services before implementation begins.",
  },
  {
    step: 3,
    title: "Build Reliable Solutions",
    description:
      "I focus on clean code, maintainable APIs, validation, security, testing, and robust integrations to ensure dependable software.",
  },
  {
    step: 4,
    title: "Improve Through Feedback",
    description:
      "Every project evolves through testing, client feedback, performance monitoring, and continuous improvements to deliver long-term value.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-[#5FA8A0] font-mono text-xs uppercase tracking-wider mb-3">
            <User size={14} strokeWidth={1.5} />
            <span>About</span>
          </div>
          <div className="flex items-center justify-between gap-4 md:gap-6 flex-wrap">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA]">
              About {siteConfig.name}
            </h1>
            <Link
              href="/muhammad-ahmad-faizan-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(245,241,234,0.15)] text-[#F5F1EA] text-sm font-medium hover:border-[#E8734A] hover:text-[#E8734A] transition-all duration-200 shrink-0"
            >
              <Download size={16} strokeWidth={1.5} />
              Download CV
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Photo */}
          <div className="md:col-span-1">
            <div className="  overflow-hidden">
              <Image
                src="/profile.png"
                alt={siteConfig.name}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* How I Think */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-[#F5F1EA] mb-4">
              About Me
            </h2>
            <div className="space-y-4 text-[#A39C90] leading-relaxed">
              <p>
                I build intelligent software that combines Artificial
                Intelligence, backend engineering, and automation to solve real
                business problems. My work focuses on AI-powered applications,
                Retrieval-Augmented Generation (RAG), AI agents, scalable
                backend systems, and workflow automation that deliver practical
                value.
              </p>

              <p>
                I believe successful AI products are built on more than great
                models. Clean architecture, reliable APIs, scalable databases,
                thoughtful system design, and maintainable code are equally
                important for creating software that businesses can depend on.
              </p>

              <p>
                I completed my Bachelor&apos;s degree in Software Engineering at
                National Textile University, Faisalabad. During my academic
                journey, I worked with local and international clients,
                developing AI-powered applications, backend systems, intelligent
                automation, and modern software solutions that addressed real
                business challenges while strengthening both my technical and
                communication skills.
              </p>

              <p>
                Today, my primary interests include AI Engineering, Backend
                Development, Large Language Models (LLMs), Retrieval-Augmented
                Generation (RAG), AI Agents, workflow automation, and building
                production-ready software systems.
              </p>
            </div>
          </div>
        </div>

        {/* How I Solve Problems */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#F5F1EA] mb-8">
            How I Solve Problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemSolvingSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] rounded-lg p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-[#252220] rounded-full text-sm font-mono text-[#E8734A] font-bold">
                    {step.step}
                  </span>
                  <h3 className="text-base font-semibold text-[#F5F1EA]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-[#A39C90] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#F5F1EA] mb-4">
            Engineering Philosophy
          </h2>
          <div className="bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#A39C90]">
                <span className="text-[#E8734A] mt-1">&rarr;</span>
                <span>
                  <strong className="text-[#F5F1EA]">
                    Understand the problem before choosing the technology.
                  </strong>{" "}
                  The best solutions begin with understanding business needs
                  rather than selecting frameworks first.
                </span>
              </li>

              <li className="flex items-start gap-3 text-[#A39C90]">
                <span className="text-[#E8734A] mt-1">&rarr;</span>
                <span>
                  <strong className="text-[#F5F1EA]">
                    Build software that is reliable and maintainable.
                  </strong>{" "}
                  Clean architecture, readable code, and scalable systems create
                  long-term value for both clients and users.
                </span>
              </li>

              <li className="flex items-start gap-3 text-[#A39C90]">
                <span className="text-[#E8734A] mt-1">&rarr;</span>
                <span>
                  <strong className="text-[#F5F1EA]">
                    Use AI where it creates meaningful impact.
                  </strong>{" "}
                  Artificial Intelligence should solve real business
                  problems—not be added simply because it&apos;s popular.
                </span>
              </li>

              <li className="flex items-start gap-3 text-[#A39C90]">
                <span className="text-[#E8734A] mt-1">&rarr;</span>
                <span>
                  <strong className="text-[#F5F1EA]">
                    Never stop learning.
                  </strong>{" "}
                  Technology evolves rapidly, so I continuously improve through
                  projects, client work, research, and hands-on experimentation.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Career Journey */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#F5F1EA] mb-4">
            Career Journey
          </h2>
          <div className="text-[#A39C90] leading-relaxed space-y-4">
            <p>
              My journey began at{" "}
              <strong className="text-[#F5F1EA]">
                National Textile University, Faisalabad
              </strong>
              , where I completed my Bachelor&apos;s degree in Software
              Engineering. The program provided a strong foundation in software
              engineering principles, algorithms, data structures, databases,
              software architecture, operating systems, computer networks,
              software testing, and modern application development, preparing me
              to build scalable, real-world software systems.
            </p>

            <p>
              Alongside my education, I started working with{" "}
              <strong className="text-[#F5F1EA]">
                local and international clients
              </strong>
              , developing AI-powered applications, backend systems, intelligent
              automation, workflow solutions, and business software. These
              projects allowed me to apply engineering principles to real-world
              business challenges while improving my technical and communication
              skills.
            </p>

            <p>
              I also completed an{" "}
              <strong className="text-[#F5F1EA]">
                AI & Python Development Internship at SoftBeck Limited
              </strong>
              , where I contributed to AI integrations, automation tools,
              backend development, and production-focused software while
              collaborating in a professional development environment.
            </p>

            <p>
              Today, I continue expanding my expertise by building AI-powered
              SaaS products, backend services, RAG applications, AI agents,
              workflow automation systems, and modern software solutions while
              continuously exploring new technologies across Artificial
              Intelligence and Software Engineering.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#E8734A]/10 to-transparent border border-[rgba(245,241,234,0.08)] rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[#F5F1EA] mb-2">
            Let&apos;s Build Something Together
          </h2>

          <p className="text-[#A39C90] text-sm mb-4 max-w-lg">
            Have a project in mind? Let&apos;s discuss how we can architect and
            build it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          >
            <Sparkles size={14} strokeWidth={1.5} />
            <span>Discuss Your Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
