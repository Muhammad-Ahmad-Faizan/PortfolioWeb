import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ahmad Faizan | AI & Backend Engineer",
  description:
    "Production AI systems for teams that need reliability, not demos. AI & Backend Engineer specializing in agentic workflows, RAG pipelines, and automation.",
  icons: {
    icon: [
      {
        url: "/technology.png",
        href: "/technology.png",
      },
    ],
  },
  openGraph: {
    title: "Muhammad Ahmad Faizan | AI & Backend Engineer",
    description:
      "Production AI systems for teams that need reliability, not demos.",
    type: "website",
  },
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
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}