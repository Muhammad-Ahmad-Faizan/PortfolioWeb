// Certificates and badges. Each course appears once: "credentialUrl" is the official verify link
// (Coursera / HackerRank / Kaggle) and "badgeUrl" is the matching Credly badge when one exists.
// Local images live in /public/certifications/; Credly and Kaggle images load from their own sites.

export type CertCategory = "AI & ML" | "Data & Foundations" | "Software Engineering" | "Leadership" | "Hackathons";

export interface Certification {
  title: string;
  issuer: string;
  date: string; // e.g. "Oct 2026"
  category: CertCategory;
  skills: string[];
  image?: string;
  credentialUrl?: string; // "Verify" button
  badgeUrl?: string; // "Credly badge" button
}

export const certCategories: CertCategory[] = [
  "AI & ML",
  "Data & Foundations",
  "Software Engineering",
  "Hackathons",
  "Leadership",
];

const coursera = (id: string) => `https://www.coursera.org/account/accomplishments/verify/${id}`;
const credly = (id: string) => `https://www.credly.com/badges/${id}`;

export const certifications: Certification[] = [
  // ---- AI & ML (IBM via Coursera) ----
  {
    title: "Generative AI Language Modeling with Transformers",
    issuer: "IBM · Coursera",
    date: "Oct 2026",
    category: "AI & ML",
    skills: ["Transformers", "Generative AI", "NLP", "PyTorch"],
    image: "https://images.credly.com/images/bc7582ae-95c6-4e92-a425-d355c65b7d10/image.png",
    credentialUrl: coursera("G13KSEKPC1JX"),
    badgeUrl: credly("3ca9884f-199d-4c42-b3de-055105daa433"),
  },
  {
    title: "Generative AI Foundational Models for NLP & Language Understanding",
    issuer: "IBM · Coursera",
    date: "Oct 2026",
    category: "AI & ML",
    skills: ["NLP", "Language Models", "Word Embeddings", "PyTorch"],
    image: "https://images.credly.com/images/954a697e-66c0-45c3-8681-ced968dfa73e/blob",
    credentialUrl: coursera("EOWXZGJ8LHEH"),
    badgeUrl: credly("d739d8cb-3781-4b89-9310-4b4333c4af9b"),
  },
  {
    title: "Generative AI and LLMs: Architecture and Data Preparation",
    issuer: "IBM · Coursera",
    date: "Oct 2026",
    category: "AI & ML",
    skills: ["LLMs", "Generative AI", "Tokenization", "Data Preparation"],
    image: "https://images.credly.com/images/a9f5d0ac-5ee8-47a6-a9df-09468f26e401/image.png",
    credentialUrl: coursera("2GJF5JXCNTOK"),
    badgeUrl: credly("97b39447-f4af-40dd-8b1b-fb7bdf48b4fa"),
  },
  {
    title: "Deep Learning with PyTorch",
    issuer: "IBM · Coursera",
    date: "Oct 2026",
    category: "AI & ML",
    skills: ["PyTorch", "Deep Learning", "Neural Networks"],
    image: "https://images.credly.com/images/b480dfb3-5387-491d-a8db-0e01ad620b51/Coursera_20Deep_20Learning_20with_20PyTorch.png",
    credentialUrl: coursera("JUZYGQLN4KNA"),
    badgeUrl: credly("91accf29-90b4-48de-985c-7cb1d77cc298"),
  },
  {
    title: "Introduction to Neural Networks and PyTorch",
    issuer: "IBM · Coursera",
    date: "Sep 2026",
    category: "AI & ML",
    skills: ["PyTorch", "Neural Networks", "Python"],
    image: "https://images.credly.com/images/335a694d-1fc4-4c83-a467-f140862a0a1e/Coursera_20Introduction_20to_20Neural_20Networks_20with_20PyTorch.png",
    credentialUrl: coursera("YXQWEYNJYD3K"),
    badgeUrl: credly("21230a3c-ee82-4984-ad73-3671a1768589"),
  },
  {
    title: "Deep Learning with Keras and TensorFlow",
    issuer: "IBM · Coursera",
    date: "Sep 2026",
    category: "AI & ML",
    skills: ["Keras", "TensorFlow", "Deep Learning"],
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RN97Z25T4NSJ/CERTIFICATE_LANDING_PAGE~RN97Z25T4NSJ.jpeg",
    credentialUrl: coursera("RN97Z25T4NSJ"),
  },
  {
    title: "Advanced Deep Learning Specialist",
    issuer: "IBM · Coursera",
    date: "Sep 2026",
    category: "AI & ML",
    skills: ["Deep Learning", "Neural Networks", "Model Training"],
    image: "https://images.credly.com/images/3e91c6f6-1d05-4b40-9005-4344e35edaff/Coursera_20Advanced_20Deep_20Learning_20Specialist.png",
    badgeUrl: credly("9e967c55-41ee-48f3-8ffe-1fea41af0a19"),
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM · Coursera",
    date: "Jul 2026",
    category: "AI & ML",
    skills: ["Keras", "Neural Networks", "Deep Learning"],
    image: "/certifications/ibm-intro-deep-learning-keras.webp",
    credentialUrl: coursera("29AFJUNZJOHC"),
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM · Coursera",
    date: "Jul 2026",
    category: "AI & ML",
    skills: ["Python", "Scikit-learn", "Regression", "Classification"],
    image: "/certifications/ibm-machine-learning-with-python.webp",
    credentialUrl: coursera("V1BM0MNVXU8O"),
  },

  // ---- Hackathons ----
  {
    title: "HackerRank Orchestrate “Buy or Wait?” (24-hour hackathon)",
    issuer: "HackerRank",
    date: "Sep 2026",
    category: "Hackathons",
    skills: ["AI Agents", "Python", "Financial Reasoning"],
  },

  // ---- Software Engineering ----
  {
    title: "Create a GUI with Python",
    issuer: "Udemy",
    date: "May 2024",
    category: "Software Engineering",
    skills: ["Python", "Tkinter", "GUI Development"],
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-1d3ba11c-21cc-45e6-b535-e345090b05e1.jpg",
    credentialUrl: "https://www.udemy.com/certificate/UC-1d3ba11c-21cc-45e6-b535-e345090b05e1/",
  },
  {
    title: "Image Processing with Python PIL",
    issuer: "Udemy",
    date: "May 2024",
    category: "Software Engineering",
    skills: ["Python", "Pillow (PIL)", "Image Processing"],
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-a4d7bac1-17e5-4642-a124-5a3def1ed4d8.jpg",
    credentialUrl: "https://www.udemy.com/certificate/UC-a4d7bac1-17e5-4642-a124-5a3def1ed4d8/",
  },
  {
    title: "Programming with Python 3.X",
    issuer: "Simplilearn",
    date: "Apr 2024",
    category: "Software Engineering",
    skills: ["Python"],
    image: "/certifications/simplilearn-python-3x.webp",
  },
  {
    title: "C# (Basic)",
    issuer: "HackerRank",
    date: "Oct 2023",
    category: "Software Engineering",
    skills: ["C#", "OOP", "Collections", "Exception Handling"],
    image: "/certifications/hackerrank-csharp-basic.webp",
    credentialUrl: "https://www.hackerrank.com/certificates/a00f5ebdccfe",
  },

  // ---- Data & Foundations ----
  {
    title: "Data Visualization",
    issuer: "Kaggle",
    date: "Jul 2024",
    category: "Data & Foundations",
    skills: ["Seaborn", "Data Visualization", "Python"],
    image: "https://storage.googleapis.com/kaggle-learn-certificates/21349456/6367dcf89cbb82c3ada498f110f06b34.png",
    credentialUrl: "https://www.kaggle.com/learn/certification/muhammadahmadfaizan/data-visualization",
  },
  {
    title: "Python",
    issuer: "Kaggle",
    date: "Jul 2024",
    category: "Data & Foundations",
    skills: ["Python", "Functions", "Data Structures"],
    image: "https://storage.googleapis.com/kaggle-learn-certificates/21349456/758810bca6b6bd330895ebc140182af7.png",
    credentialUrl: "https://www.kaggle.com/learn/certification/muhammadahmadfaizan/python",
  },
  {
    title: "Data Analytics and Business Intelligence",
    issuer: "DigiSkills.pk",
    date: "Jul 2024",
    category: "Data & Foundations",
    skills: ["Power BI", "Google Sheets", "Data Analytics"],
    image: "/certifications/digiskills-data-analytics-bi.webp",
    credentialUrl: "https://digiskills.pk/verify", // Certificate ID: XSTJJBCMK
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google · Coursera",
    date: "Jun 2024",
    category: "Data & Foundations",
    skills: ["Data Analytics", "Data Lifecycle"],
    image: "/certifications/google-foundations-data.webp",
    credentialUrl: coursera("Y3BFUR5R3XGQ"),
  },
  {
    title: "What is Data Science?",
    issuer: "IBM · Coursera",
    date: "Feb 2024",
    category: "Data & Foundations",
    skills: ["Data Science", "Data Analysis"],
    image: "/certifications/ibm-what-is-data-science.webp",
    credentialUrl: coursera("K678SGN8NA7Q"),
    badgeUrl: credly("a4efddbb-c047-442a-b060-b7ab51d51095"),
  },
  {
    title: "Database Design with SQL Server Management Studio (SSMS)",
    issuer: "Coursera Project Network",
    date: "Dec 2023",
    category: "Data & Foundations",
    skills: ["SQL Server", "Database Design", "SQL"],
    image: "/certifications/coursera-ssms-database-design.webp",
    credentialUrl: coursera("8M6UJ4X2L6F9"),
  },
  {
    title: "SQL for Data Science",
    issuer: "UC Davis · Coursera",
    date: "Dec 2023",
    category: "Data & Foundations",
    skills: ["SQL", "Data Analysis", "Queries"],
    image: "/certifications/ucdavis-sql-for-data-science.webp",
    credentialUrl: coursera("JPJMKG9TYP6J"),
  },

  // ---- Leadership ----
  {
    title: "Online Leadership Course (Aspire Leaders Program)",
    issuer: "Aspire Institute",
    date: "Mar 2023",
    category: "Leadership",
    skills: ["Leadership", "Communication"],
    image: "/certifications/aspire-leadership-course.webp",
  },
];
