"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import { workExperiences, education } from "@/content/experience";
import { ExperienceEntry } from "@/types";

const typeIcons: Record<string, React.ReactNode> = {
  freelance: <Sparkles size={16} strokeWidth={1.5} className="text-[#E8734A]" />,
  internship: <BriefcaseBusiness size={16} strokeWidth={1.5} className="text-[#5FA8A0]" />,
  education: <GraduationCap size={16} strokeWidth={1.5} className="text-[#A39C90]" />,
};

function TimelineEntry({ exp, i }: { exp: ExperienceEntry; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className="relative pl-14"
    >
      <div className="absolute left-3 top-1 w-4 h-4 bg-[#17150F] border-2 border-[rgba(245,241,234,0.08)] rounded-full flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-[#E8734A] rounded-full" />
      </div>
      <div className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {typeIcons[exp.type]}
              <h3 className="text-base font-semibold text-[#F5F1EA]">{exp.role}</h3>
            </div>
            <p className="text-sm text-[#A39C90]">{exp.organization}</p>
          </div>
          <span className="text-xs font-mono text-[#A39C90] whitespace-nowrap">{exp.period}</span>
        </div>
        <p className="text-sm text-[#A39C90] leading-relaxed mb-3">{exp.summary}</p>
        <ul className="space-y-1.5 mb-3">
          {exp.responsibilities.map((r: string, j: number) => (
            <li key={j} className="text-sm text-[#A39C90] flex items-start gap-2">
              <span className="text-[#E8734A] mt-1.5 flex-shrink-0">&mdash;</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {exp.techStack.map((tech: string) => (
            <span key={tech} className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="mb-8 md:mb-10">
          <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
            Background
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[rgba(245,241,234,0.08)]" />
          <div className="space-y-8">
            {workExperiences.map((exp, i) => (
              <TimelineEntry key={exp.id} exp={exp} i={i} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-[#F5F1EA] mb-4">Education</h3>
          <div className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-5">
            {education.map((edu) => (
              <div key={edu.id} className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {typeIcons[edu.type]}
                    <h4 className="text-base font-semibold text-[#F5F1EA]">{edu.role}</h4>
                  </div>
                  <p className="text-sm text-[#A39C90]">{edu.organization}</p>
                </div>
                <span className="text-xs font-mono text-[#A39C90] whitespace-nowrap">{edu.period}</span>
              </div>
            ))}
            <p className="text-sm text-[#A39C90] leading-relaxed mt-2">{education[0]?.summary}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {education[0]?.techStack.map((tech: string) => (
                <span key={tech} className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}