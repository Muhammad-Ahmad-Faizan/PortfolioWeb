"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Lock, TrendingUp, CalendarDays, Briefcase } from "lucide-react";
import SmartImage from "@/components/ui/smart-image";
import Flag from "@/components/ui/flag";
import { Project } from "@/types";
import { getProjectPreview } from "@/content/projects";
import Tilt from "@/components/motion/tilt";

export default function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preview = getProjectPreview(project);
  const Heading = headingLevel;

  // Spotlight follows the cursor (CSS variables, no re-render)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Tilt>
    <Link
      ref={ref}
      href={`/projects/${project.slug}`}
      onMouseMove={onMove}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
      className="spotlight-card group relative flex flex-col h-full bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-xl overflow-hidden hover:border-[rgba(232,115,74,0.35)] transition-colors duration-300"
    >
      {preview?.type === "video" ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-[#201D18] border-b border-[rgba(245,241,234,0.06)]">
          <video
            ref={videoRef}
            src={`${preview.src}#t=0.5`}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title} demo video`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <SmartImage
          src={preview?.src}
          alt={`${project.title} preview`}
          label={project.title}
          className="aspect-[16/9] border-b border-[rgba(245,241,234,0.06)]"
          imgClassName="object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      )}

      <div className="relative flex flex-col flex-1 p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center bg-[#252220] rounded-full px-2.5 py-1 text-xs font-mono text-[#5FA8A0]">
            {project.category}
          </span>
          {project.client && (
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-mono text-[#F5F1EA] bg-[#E8734A]/10 border border-[#E8734A]/30">
              {project.confidential ? (
                <Lock size={11} className="text-[#E8734A]" aria-label="Confidential" />
              ) : (
                <Briefcase size={11} className="text-[#E8734A]" />
              )}
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
          {project.status && project.status !== "Shipped" && (
            <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-mono text-[#E8734A] border border-[#E8734A]/30">
              {project.status}
            </span>
          )}
          {project.confidential && !project.client && (
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-mono text-[#A39C90] border border-[rgba(245,241,234,0.12)]">
              <Lock size={11} /> Confidential
            </span>
          )}
        </div>

        {project.period && (
          <p className="flex items-center gap-1.5 text-xs font-mono text-[#A39C90] mb-2">
            <CalendarDays size={12} /> {project.period}
          </p>
        )}

        <Heading className="text-lg font-semibold text-[#F5F1EA] group-hover:text-[#E8734A] transition-colors mb-2 leading-snug">
          {project.title}
        </Heading>
        <p className="text-sm text-[#A39C90] leading-relaxed mb-4 line-clamp-3">{project.summary}</p>

        {project.highlight && (
          <p className="flex items-start gap-1.5 text-[13px] text-[#F5F1EA] mb-4">
            <TrendingUp size={14} className="text-[#5FA8A0] shrink-0 mt-0.5" />
            {project.highlight}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs font-mono text-[#A39C90]">+{project.techStack.length - 4}</span>
          )}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-[#E8734A] font-medium">
          Read case study
          <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
    </Tilt>
  );
}
