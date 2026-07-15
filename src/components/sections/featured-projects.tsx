"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/content/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
              Featured Work
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">
              Featured Case Studies
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors"
          >
            <span>View all projects</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-6 hover:bg-[#201D18] transition-all duration-200 h-full"
              >
                <div className="inline-flex items-center gap-1.5 bg-[#252220] rounded-full px-2.5 py-1 mb-4">
                  <span className="text-xs font-mono text-[#5FA8A0]">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#F5F1EA] group-hover:text-[#E8734A] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#A39C90] leading-relaxed mb-4 line-clamp-3">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs font-mono text-[#A39C90]">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm text-[#E8734A] font-medium">
                  <span>View Case Study</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors"
          >
            <span>View all projects</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}