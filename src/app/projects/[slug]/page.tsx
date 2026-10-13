import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Lock, FileCode2, BookOpen, CalendarDays, TrendingUp, Briefcase } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site-config";
import SmartImage from "@/components/ui/smart-image";
import Flag from "@/components/ui/flag";

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
    title: project.title,
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
          <span>Back to all work</span>
        </Link>

        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2.5 py-1">
              {project.category}
            </span>
            {project.client && (
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-mono text-[#F5F1EA] bg-[#E8734A]/10 border border-[#E8734A]/30">
                <Briefcase size={11} className="text-[#E8734A]" />
                Client
                {project.client.country && (
                  <>
                    <span className="text-[#A39C90]">&middot;</span>
                    <Flag code={project.client.code} />
                    {project.client.country}
                  </>
                )}
              </span>
            )}
            {project.period && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A39C90] border border-[rgba(245,241,234,0.12)] rounded-full px-2.5 py-1">
                <CalendarDays size={12} /> {project.period}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA] mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-[#A39C90] max-w-2xl leading-relaxed">
            {project.summary}
          </p>

          {project.highlight && (
            <div className="inline-flex items-center gap-2 mt-4 text-sm text-[#F5F1EA] bg-[#5FA8A0]/10 border border-[#5FA8A0]/30 rounded-full px-3 py-1">
              <TrendingUp size={14} className="text-[#5FA8A0]" />
              {project.highlight}
            </div>
          )}

          {project.confidential && (
            <div className="flex items-start gap-3 mt-5 max-w-2xl bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-4">
              <Lock size={16} className="text-[#E8734A] mt-0.5 shrink-0" />
              <p className="text-sm text-[#A39C90]">
                Client name, branding and live link are withheld for privacy, and identifying details are removed from screenshots. Happy to walk
                through this project on a call.
              </p>
            </div>
          )}

          {project.links && (
            <div className="flex flex-wrap gap-3 mt-5">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-4 py-2 rounded-full text-sm font-medium">
                  <ExternalLink size={14} /> Live demo
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[rgba(245,241,234,0.15)] hover:border-[#E8734A] text-[#F5F1EA] px-4 py-2 rounded-full text-sm">
                  <FaGithub size={14} /> Source code
                </a>
              )}
              {project.links.apiDocs && (
                <a href={project.links.apiDocs} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[rgba(245,241,234,0.15)] hover:border-[#E8734A] text-[#F5F1EA] px-4 py-2 rounded-full text-sm">
                  <FileCode2 size={14} /> API docs
                </a>
              )}
              {project.links.article && (
                <Link href={project.links.article} className="inline-flex items-center gap-2 border border-[rgba(245,241,234,0.15)] hover:border-[#E8734A] text-[#F5F1EA] px-4 py-2 rounded-full text-sm">
                  <BookOpen size={14} /> Read the write-up
                </Link>
              )}
            </div>
          )}
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

        {project.cover && (
          <SmartImage
            src={project.cover}
            alt={`${project.title} preview`}
            label={project.title}
            priority
            sizes="(max-width: 1200px) 100vw, 1150px"
            className="aspect-[21/9] rounded-xl border border-[rgba(245,241,234,0.08)] mb-12 md:mb-16"
          />
        )}

        <div className="max-w-4xl space-y-12 md:space-y-16">
          <Section title="Overview">
            <p className="text-[#A39C90] leading-relaxed">{sections.overview}</p>
          </Section>

          <Section title="The Problem">
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
                      <SmartImage
                        src={item.src}
                        alt={item.caption}
                        label={item.caption}
                        className="aspect-[3/2]"
                        sizes="(max-width: 768px) 100vw, 50vw"
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

          <Section title="Key Decisions & Challenges">
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

          {sections.testing && sections.testing.length > 0 && (
            <Section title="Testing & Quality">
              <ul className="space-y-2">
                {sections.testing.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#A39C90]">
                    <span className="text-[#5FA8A0] mt-1 flex-shrink-0">&#10003;</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

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

          {sections.whatIdChange && sections.whatIdChange.length > 0 && (
            <Section title="What I'd Do Differently">
              <ul className="space-y-2">
                {sections.whatIdChange.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#A39C90]">
                    <span className="text-[#E8734A] mt-1 flex-shrink-0">&#8635;</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

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
              Need something similar?
            </h2>
            <p className="text-[#A39C90] text-sm mb-4 max-w-lg">
              I can build a system like this for your business &mdash; tell me what
              you need and I&apos;ll reply with a plan and a quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                <span>Discuss a similar project &rarr;</span>
              </Link>
              {siteConfig.bookingUrl && (
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[rgba(245,241,234,0.15)] hover:border-[#E8734A] text-[#F5F1EA] px-4 py-2 rounded-full text-sm"
                >
                  <CalendarDays size={14} /> Book a call
                </a>
              )}
            </div>
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