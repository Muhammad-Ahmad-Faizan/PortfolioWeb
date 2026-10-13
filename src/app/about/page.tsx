import Image from "next/image";
import Link from "next/link";
import { User, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { FileText, MapPin, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Software engineer from Faisalabad, Pakistan, building web apps, backend systems, mobile apps and AI products for clients worldwide.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-[#5FA8A0] font-mono text-xs uppercase tracking-wider mb-3">
            <User size={14} strokeWidth={1.5} />
            <span>About</span>
          </div>
          <div className="flex items-center justify-between gap-4 md:gap-6 flex-wrap">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA]">
              About {siteConfig.name}
            </h1>
            <Link
              href={siteConfig.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(245,241,234,0.15)] text-[#F5F1EA] text-sm font-medium hover:border-[#E8734A] hover:text-[#E8734A] transition-all duration-200 shrink-0"
            >
              <FileText size={16} strokeWidth={1.5} />
              View Resume
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Photo */}
          <div className="md:col-span-1">
            <div className="  overflow-hidden">
              <Image
                src="/Profile.jpg"
                alt={`${siteConfig.name}, software engineer`}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* How I Think */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-[#F5F1EA] mb-4">
              About Me
            </h2>
            <div className="flex items-center gap-2 text-sm text-[#A39C90] mb-4">
              <MapPin size={14} strokeWidth={1.5} className="text-[#E8734A]" />
              <span>{siteConfig.locationLine} &middot; UTC+5</span>
            </div>
            <div className="space-y-4 text-[#A39C90] leading-relaxed">
              <p>
                I&apos;m a software engineer who builds complete products: web applications, backend APIs, mobile apps and AI-powered
                systems, from the first architecture sketch to production
                deployment.
              </p>

              <p>
                I work across AI engineering, automation, web development and
                backend systems, from RAG assistants, AI agents and automated
                workflows to web apps, APIs and mobile apps. Whatever the
                project, I focus on clean code, tested systems and using AI
                where it solves a real problem, not because it&apos;s trendy.
              </p>

              <p>
                I hold a Bachelor&apos;s degree in Software Engineering from
                National Textile University, Faisalabad. Alongside my studies, I
                delivered projects for clients in the USA, UAE, France and Pakistan,
                including a multilingual website for a UAE visa
                consultancy, Shopify marketing automation for a US store and backend work for an
                international e-commerce platform.
              </p>

              <p>
                I work remotely with teams and founders worldwide, and I&apos;m
                open to freelance projects, contracts and full-time roles.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#F5F1EA] mb-4">
            Engineering Philosophy
          </h2>
          <div className="bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#A39C90]">
                <span className="text-[#E8734A] mt-1">&rarr;</span>
                <span>
                  <strong className="text-[#F5F1EA]">
                    Understand the problem before choosing the technology.
                  </strong>{" "}
                  The best solutions begin with understanding business needs
                  rather than selecting frameworks first.
                </span>
              </li>

              <li className="flex items-start gap-3 text-[#A39C90]">
                <span className="text-[#E8734A] mt-1">&rarr;</span>
                <span>
                  <strong className="text-[#F5F1EA]">
                    Build software that is reliable and maintainable.
                  </strong>{" "}
                  Clean architecture, readable code, and scalable systems create
                  long-term value for both clients and users.
                </span>
              </li>

              <li className="flex items-start gap-3 text-[#A39C90]">
                <span className="text-[#E8734A] mt-1">&rarr;</span>
                <span>
                  <strong className="text-[#F5F1EA]">
                    Use AI where it creates meaningful impact.
                  </strong>{" "}
                  Artificial Intelligence should solve real business
                  problems—not be added simply because it&apos;s popular.
                </span>
              </li>

              <li className="flex items-start gap-3 text-[#A39C90]">
                <span className="text-[#E8734A] mt-1">&rarr;</span>
                <span>
                  <strong className="text-[#F5F1EA]">
                    Never stop learning.
                  </strong>{" "}
                  Technology evolves rapidly, so I continuously improve through
                  projects, client work, research, and hands-on experimentation.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Career Journey */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#F5F1EA] mb-4">
            Career Journey
          </h2>
          <div className="text-[#A39C90] leading-relaxed space-y-4">
            <p>
              My journey began at{" "}
              <strong className="text-[#F5F1EA]">
                National Textile University, Faisalabad
              </strong>
              , where I completed my Bachelor&apos;s degree in Software
              Engineering. The program provided a strong foundation in software
              engineering principles, algorithms, data structures, databases,
              software architecture, operating systems, computer networks,
              software testing, and modern application development, preparing me
              to build scalable, real-world software systems.
            </p>

            <p>
              Alongside my education, I started working with{" "}
              <strong className="text-[#F5F1EA]">
                local and international clients
              </strong>
              , developing AI-powered applications, backend systems, intelligent
              automation, workflow solutions, and business software. These
              projects allowed me to apply engineering principles to real-world
              business challenges while improving my technical and communication
              skills.
            </p>

            <p>
              I also completed an{" "}
              <strong className="text-[#F5F1EA]">
                Python Developer Internship at SoftBeck Limited
              </strong>
              , where I contributed to AI integrations, automation tools,
              backend development, and production-focused software while
              collaborating in a professional development environment.
            </p>

            <p>
              Today I build full products end to end &mdash; most recently a
              multilingual Next.js platform with an admin CMS for a UAE
              consultancy, a root-cause investigation agent, and Revenue OS, a
              multi-tenant B2B sales platform &mdash; while continuing to grow
              as a software engineer.
            </p>
          </div>
        </div>

        {/* Certifications teaser */}
        <Link
          href="/certifications"
          className="group flex items-center justify-between gap-4 bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] hover:border-[#E8734A]/40 rounded-lg p-5 mb-8 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Award size={20} strokeWidth={1.5} className="text-[#E8734A]" />
            <div>
              <p className="text-sm font-semibold text-[#F5F1EA]">Certifications &amp; Achievements</p>
              <p className="text-xs text-[#A39C90]">Courses, badges and hackathons</p>
            </div>
          </div>
          <ArrowRight size={16} className="text-[#A39C90] group-hover:text-[#E8734A] transition-colors" />
        </Link>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#E8734A]/10 to-transparent border border-[rgba(245,241,234,0.08)] rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[#F5F1EA] mb-2">
            Let&apos;s Build Something Together
          </h2>

          <p className="text-[#A39C90] text-sm mb-4 max-w-lg">
            Have a project in mind? Let&apos;s discuss how we can architect and
            build it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          >
            <Sparkles size={14} strokeWidth={1.5} />
            <span>Discuss Your Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
