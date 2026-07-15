import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site-config";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { sections } = project;

  return (
    <article className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors mb-8"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          <span>Back to Portfolio</span>
        </Link>

        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2.5 py-1">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA] mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-[#A39C90] max-w-2xl leading-relaxed">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-4xl space-y-12 md:space-y-16">
          <Section title="Overview">
            <p className="text-[#A39C90] leading-relaxed">{sections.overview}</p>
          </Section>

          <Section title="Business Problem">
            <p className="text-[#A39C90] leading-relaxed">{sections.businessProblem}</p>
          </Section>

          <Section title="Solution">
            <p className="text-[#A39C90] leading-relaxed">{sections.solution}</p>
          </Section>

          <Section title="Architecture">
            <div className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-4 md:p-6 overflow-x-auto">
              <div
                dangerouslySetInnerHTML={{ __html: sections.architectureDiagram }}
                className="min-w-[600px]"
              />
            </div>
          </Section>

          <Section title="Key Features">
            <ul className="space-y-2">
              {sections.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-[#A39C90]">
                  <span className="text-[#E8734A] mt-1 flex-shrink-0">&rarr;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Media Gallery — only renders if media exists */}
          {project.media && project.media.length > 0 && (
            <Section title="Gallery">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.media.map((item, i) => (
                  <div key={i} className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg overflow-hidden">
                  {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.caption}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="aspect-video bg-[#252220] rounded-lg overflow-hidden">
                        <video
                          src={item.src}
                          controls
                          className="w-full h-full"
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    {item.caption && (
                      <p className="text-xs text-[#A39C90] px-3 py-2">{item.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          )}

          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {sections.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Engineering Challenges">
            <div className="space-y-4">
              {sections.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-4"
                >
                  <h3 className="text-sm font-semibold text-[#F5F1EA] mb-2">{challenge.title}</h3>
                  <p className="text-sm text-[#A39C90] leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Lessons Learned">
            <ul className="space-y-2">
              {sections.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-2 text-[#A39C90]">
                  <span className="text-[#5FA8A0] mt-1 flex-shrink-0">&rarr;</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Results">
            <div className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-5">
              <p className="text-[#F5F1EA] leading-relaxed">{sections.results}</p>
            </div>
          </Section>

          {sections.relatedProjects.length > 0 && (
            <Section title="Related Projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections.relatedProjects.map((relatedSlug) => {
                  const related = projects.find((p) => p.slug === relatedSlug);
                  if (!related) return null;
                  return (
                    <Link
                      key={relatedSlug}
                      href={`/projects/${relatedSlug}`}
                      className="group bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-4 hover:bg-[#201D18] transition-all duration-200"
                    >
                      <span className="text-xs font-mono text-[#5FA8A0]">{related.category}</span>
                      <h3 className="text-sm font-semibold text-[#F5F1EA] group-hover:text-[#E8734A] transition-colors mt-1">
                        {related.title}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </Section>
          )}

          <div className="bg-gradient-to-r from-[#E8734A]/10 to-transparent border border-[rgba(245,241,234,0.08)] rounded-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[#F5F1EA] mb-2">
              Let{"'"}s Build Something Similar
            </h2>
            <p className="text-[#A39C90] text-sm mb-4 max-w-lg">
              Have a project in mind? Let{"'"}s discuss how we can architect
              and build it together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            >
              <span>Discuss Your Project</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-[#F5F1EA] mb-4">{title}</h2>
      {children}
    </div>
  );
}