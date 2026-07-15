"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { projects, projectCategories } from "@/content/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-[#5FA8A0] font-mono text-xs uppercase tracking-wider mb-3">
            <FolderKanban size={14} strokeWidth={1.5} />
            <span>Portfolio</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA] mb-4">
            Projects & Case Studies
          </h1>
          <p className="text-[#A39C90] text-base md:text-lg max-w-2xl leading-relaxed">
            Real systems built for production use. Each project includes the
            problem, architecture, challenges, and results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#E8734A] text-[#12110F]"
                  : "bg-[#1C1A17] text-[#A39C90] hover:text-[#F5F1EA] border border-[rgba(245,241,234,0.08)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] rounded-lg p-6 hover:bg-[#252220] transition-all duration-200 h-full"
                >
                  {/* Category */}
                  <div className="inline-flex items-center gap-1.5 bg-[#252220] rounded-full px-2.5 py-1 mb-4">
                    <span className="text-xs font-mono text-[#5FA8A0]">
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-[#F5F1EA] group-hover:text-[#E8734A] transition-colors mb-2">
                    {project.title}
                  </h2>

                  <p className="text-sm text-[#A39C90] leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech pills */}
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

                  {/* CTA */}
                  <div className="inline-flex items-center gap-1.5 text-sm text-[#E8734A] font-medium">
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#A39C90]">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}