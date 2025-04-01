"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiUserPlus } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="home"
      className="pt-20 md:pt-20 pb-12 relative overflow-hidden bg-[#0e1016] text-white"
    >
      {/* Animated Background */}
      {isClient && (
        <div className="absolute inset-0 opacity-5 grid grid-cols-6 gap-2">
          {Array.from({ length: 24 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              className="w-full h-8 bg-gray-500 rounded-full transform rotate-45"
            />
          ))}
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto bg-[#0e1016] rounded-lg p-8 shadow-xl relative border border-gray-800">
        {/* Profile Image and Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/Profile.jpg"
                alt="Muhammad Ahmad Faizan"
                width={180}
                height={180}
                className="rounded-md object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/180/374151/FFFFFF?text=Profile";
                }}
              />
            </motion.div>
          </div>

          {/* Availability Badge */}
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span>Available for work</span>
          </div>

          {/* Social Icons - centered with just GitHub and LinkedIn */}
          <div className="flex justify-center gap-8 mb-6">
            <a
              href="https://github.com/Muhammad-Ahmad-Faizan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-all"
            >
              <FaGithub size={26} className="hover:scale-120 " />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-ahmad-faizan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-all"
            >
              <FaLinkedin size={26} className="hover:scale-120 " />
            </a>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Hi there! I&apos;m Muhammad Ahmad Faizan
          </motion.h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-center max-w-2xl mb-8">
            Enthusiastic and results-driven Data Scientist with a strong
            foundation in AI and Data technologies. Skilled in Python and SQL
            with hands-on experience in ETL processes, data modeling, and data
            visualization. Dedicated to applying analytical and problem-solving
            skills in a collaborative, global environment to drive data-driven
            solutions.
          </p>

          {/* Connect Button */}
          <Link
            href="https://yahoofinanceanalysis.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-all duration-300"
          >
            <FiUserPlus className="w-5 h-5" />
            View Stock Analysis Project
          </Link>
        </div>

        {/* Technology Icons */}
        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            width={35}
            height={35}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
            width={35}
            height={35}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
            alt="Pandas"
            width={35}
            height={35}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
            alt="NumPy"
            width={35}
            height={35}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            width={35}
            height={35}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
            alt="Jupyter"
            width={35}
            height={35}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            width={35}
            height={35}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VS Code"
            width={35}
            height={35}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
