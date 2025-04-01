"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import {
  FiMenu,
  FiX,
  FiHome,
  FiLayers,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

// Define Type for Navigation Links
type NavLink = {
  href: string;
  hash?: string;
  label: string;
  icon: React.ReactNode;
};

// Define navigation links
const NavLinks: NavLink[] = [
  {
    href: "/",
    hash: "#home",
    label: "Home",
    icon: <FiHome className="w-5 h-5" />,
  },
  {
    href: "/",
    hash: "#tech-stack",
    label: "Tech Stack",
    icon: <FiLayers className="w-5 h-5" />,
  },
  {
    href: "/",
    hash: "#projects",
    label: "Projects",
    icon: <FiBriefcase className="w-5 h-5" />,
  },
  { href: "/contact", label: "Contact", icon: <FiMail className="w-5 h-5" /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter(); // Initialize router

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix TypeScript Issue with Proper Typing
  const handleNavigation = (href: string, hash?: string): void => {
    setIsOpen(false);
    if (hash) {
      router.push(`${href}${hash}`);
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[100] group hover:backdrop-blur-sm transition-all duration-300 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.div
          className="h-full bg-blue-900 group-hover:bg-blue-500 rounded-full transition-all duration-300 origin-left"
          style={{ width: `${scrollProgress}%` }}
          layoutId="progressBar"
          whileHover={{ height: "3px" }}
        />
      </motion.div>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-4 right-4 z-50 cursor-pointer md:hidden p-2 rounded-full bg-blue-500 shadow-lg text-white hover:bg-blue-600"
      >
        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </motion.button>

      {/* Desktop Top Navigation */}
      <motion.div className="hidden md:flex fixed top-1 left-0 right-0 z-40 transition-all duration-300">
        <div className="mx-auto flex items-center justify-center h-12">
          <motion.div className="flex space-x-2 bg-[#0e1016] border border-gray-800 rounded-full px-2 shadow-lg hover:border-blue-900/50 transition-all duration-300">
            {NavLinks.map((link) => (
              <motion.div
                key={link.href + (link.hash || "")}
                whileHover={{ scale: 1.05 }}
              >
                <button
                  onClick={() => handleNavigation(link.href, link.hash)}
                  className="flex items-center text-white hover:text-blue-400 px-3 py-2 rounded-full hover:bg-gray-800/50 transition-colors"
                >
                  <motion.span className="mr-2" whileHover={{ rotate: 15 }}>
                    {link.icon}
                  </motion.span>
                  <span className="text-sm font-medium">{link.label}</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-30 transition-opacity ${
          isOpen ? "" : "pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="md:hidden fixed top-2 bottom-0 left-0 w-[240px] bg-[#0e1016] z-40 shadow-xl border-r border-gray-800 rounded-r-lg"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-xl font-bold text-white">
              Muhammad Ahmad Faizan
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            {NavLinks.map((link) => (
              <motion.div
                key={link.href + (link.hash || "")}
                whileHover={{ x: 5 }}
              >
                <button
                  onClick={() => handleNavigation(link.href, link.hash)}
                  className="flex items-center text-white hover:text-blue-400 py-2 hover:bg-gray-800/50 px-3 rounded transition-colors"
                >
                  <motion.span
                    className="mr-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  >
                    {link.icon}
                  </motion.span>
                  {link.label}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-auto pt-4 border-t border-gray-800 text-xs text-gray-500 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>© 2024 Muhammad Ahmad Faizan</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
