"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { featuredProjects } from "@/content/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
              Case studies
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">
              Selected Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors"
          >
            <span>All projects</span>
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
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors"
          >
            <span>All projects</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}