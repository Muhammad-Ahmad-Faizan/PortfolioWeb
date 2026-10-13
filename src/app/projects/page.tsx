"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderKanban } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { projects, projectCategories, matchesFilter } from "@/content/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => matchesFilter(p, activeCategory));

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-[#5FA8A0] font-mono text-xs uppercase tracking-wider mb-3">
            <FolderKanban size={14} strokeWidth={1.5} />
            <span>Work</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA] mb-4">
            Work & Case Studies
          </h1>
          <p className="text-[#A39C90] text-base md:text-lg max-w-2xl leading-relaxed">
            Client projects and products I&apos;ve built end to end. Each case
            study covers the problem, architecture, key decisions, testing and
            results.
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
                <ProjectCard project={project} headingLevel="h2" />
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