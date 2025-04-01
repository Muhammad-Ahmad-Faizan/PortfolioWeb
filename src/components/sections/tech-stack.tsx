"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Set of icons for tech stack with fallback options
const technologies = [
  {
    name: "Python",
    category: "Programming Language",
    icon: "/Python.jpg",
  },
  {
    name: "SQL",
    category: "Database Query Language",
    icon: "/SQL.png",
  },
  {
    name: "Pandas",
    category: "Data Analysis Library",
    icon: "/Pandas.jpg",
  },
  {
    name: "NumPy",
    category: "Scientific Computing",
    icon: "/Numpy.jpg",
  },
  {
    name: "MySQL",
    category: "Database Management",
    icon: "/MySQL.jpg",
  },
  {
    name: "PostgreSQL",
    category: "Database Management",
    icon: "/postgresql.jpg",
  },
  {
    name: "Power BI",
    category: "Data Visualization",
    icon: "/power-bi-hero.jpg",
  },
  {
    name: "Scikit-Learn",
    category: "Machine Learning",
    icon: "/Sickit.jpg",
  },
  {
    name: "Matplotlib",
    category: "Data Visualization",
    icon: "/Matplotlib.jpg",
  },
  {
    name: "Seaborn",
    category: "Data Visualization",
    icon: "/Seaborn.jpg",
  },
  {
    name: "Jupyter",
    category: "Development Environment",
    icon: "/jupyter.jpg",
  },
  {
    name: "VS Code",
    category: "Code Editor",
    icon: "/Vscode.jpg",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 px-4 relative overflow-hidden border-t border-b border-gray-200 dark:border-gray-800"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-40" />

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold">Tech Stack</h2>
          <span className="text-gray-600 dark:text-gray-400">Data Science</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden p-4 group hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 text-center">
                  {tech.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
