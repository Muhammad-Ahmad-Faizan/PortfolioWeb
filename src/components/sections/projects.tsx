"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useMemo } from "react";
// Image import commented out until project images are ready
// import Image from "next/image";

// Project data for Muhammad Ahmad Faizan's data science projects
const projects = [
  {
    id: "https://yahoofinanceanalysis.streamlit.app/",
    title: "Stock Analysis & Forecasting Web App",
    category: "Financial Analysis",
    description:
      "Interactive web application for real-time stock market analysis and price forecasting, providing visual insights and 1-year future predictions using SARIMA models.",
    technologies:
      "Python, Streamlit, Plotly, SARIMA, Statsmodels, Yahoo Finance API",
    // Image commented out until project images are available
    // image: "/images/yahoo2.png",
  },
  {
    id: "fraud-detection",
    title: "Financial Fraud Detection & Analysis",
    category: "Machine Learning",
    description:
      "Developed a financial fraud detection model using multiple ML algorithms, achieving 99% accuracy with Gradient Boosting and creating interactive dashboards for real-time monitoring.",
    technologies:
      "Python, Pandas, Seaborn, Logistic Regression, Random Forest, Gradient Boosting, KMeans, PCA, Looker",
    // Image commented out until project images are available
    // image: "/images/Password.png",
  },
  {
    id: "ecommerce-forecasting",
    title: "eCommerce Sales Forecasting & Analysis",
    category: "Business Intelligence",
    description:
      "Analyzed and forecasted eCommerce sales data to optimize inventory and sales strategies, creating ETL pipelines and visualization dashboards to track KPIs.",
    technologies:
      "Python, SQL, Looker, Linear Regression, ElasticNet, Data Warehousing",
    // Image commented out until project images are available
    // image: "/images/Weather App.jpg",
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    category: "Predictive Analytics",
    description:
      "Predicted customer churn using machine learning models on customer behavior data, providing actionable insights through interactive dashboards.",
    technologies: "K-Nearest Neighbors (KNN), Python, Power BI, Looker",
    // Image commented out until project images are available
    // image: "/images/TO DO .png",
  },
  {
    id: "PixelSonix",
    title: "PixelSonix",
    category: "Machine Learning",
    description:
      "Created an OCR-based tool that extracts text from images and converts it into speech.",
    technologies: "Python, OpenCV, gTTS, Tesseract, JavaScript, HTML, Flask"
    // Image commented out until project images are available
    // image: "/images/TO DO .png",
  },
  {
    id: "Translator",
    title: "TransLang",
    category: "Machine Learning",
    description:
      "Built a multilingual translation app using Python, Streamlit, and GoogleTrans API. Features auto language detection, real-time translation (100+ languages), and text-to-speech (TTS) support.",
    technologies: "Python, Streamlit, GoogleTrans API, TTS"
    // Image commented out until project images are available
    // image: "/images/TO DO .png",
  },
];

// Default project image placeholder (commented out until needed)
// const DEFAULT_PROJECT_IMAGE = "/images/project-placeholder.svg";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const gridItems = useMemo(
    () =>
      Array(64)
        .fill(0)
        .map((_, i) => ({
          delay: i * 0.1,
        })),
    []
  );

  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden border-t border-b border-gray-200 dark:border-gray-800"
    >
      {/* Animated tech background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 gap-4 h-full transform rotate-12 scale-150">
            {gridItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: item.delay,
                }}
                className="bg-gray-500 w-full h-full"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Data Science Projects
        </h2>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-colors border-2 ${
                filter === category
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 group hover:shadow-lg transition-all duration-300"
            >
              {/* Image section commented out until project images are ready */}
              {/* 
              <div className="aspect-[16/9] relative bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={project.image || DEFAULT_PROJECT_IMAGE}
                    alt={project.title}
                    width={500}
                    height={281}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              */}

              {/* Project category badge */}
              <div className="p-6">
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-2 font-medium">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4">
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-mono">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      Tech:
                    </span>{" "}
                    {project.technologies}
                  </p>
                </div>
                <Link
                  href={
                    project.id.startsWith("http")
                      ? project.id
                      : `#${project.id}`
                  }
                  target={project.id.startsWith("http") ? "_blank" : "_self"}
                  className="text-white font-medium flex justify-center items-center bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors w-full"
                >
                  {project.id === "https://yahoofinanceanalysis.streamlit.app/"
                    ? "View Live Demo"
                    : "View Project Details"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
