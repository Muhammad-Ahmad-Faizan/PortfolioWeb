import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/nav";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/layout/footer";
import CommandPalette from "@/components/layout/command-palette";
import ScrollProgress from "@/components/layout/scroll-progress";
import { siteConfig } from "@/content/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fullTitle = `${siteConfig.name} | ${siteConfig.title} — ${siteConfig.specialty}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: fullTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "FastAPI",
    "Flutter Developer",
    "AI Agents",
    "Freelance Developer Pakistan",
    "Remote Software Engineer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  icons: { icon: [{ url: "/technology.png", href: "/technology.png" }] },
  openGraph: {
    title: fullTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: siteConfig.description,
    creator: siteConfig.xHandle,
  },
};

// Structured data so Google understands who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  url: siteConfig.url,
  image: `${siteConfig.url}/Profile.jpg`,
  email: `mailto:${siteConfig.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Faisalabad", addressCountry: "PK" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "National Textile University" },
  knowsAbout: ["Software Engineering", "Backend Development", "Web Development", "AI Agents", "Automation", "Mobile Apps"],
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.x],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#12110F] text-[#F5F1EA] min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ScrollProgress />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CommandPalette />
        <Analytics />
      </body>
    </html>
  );
}
