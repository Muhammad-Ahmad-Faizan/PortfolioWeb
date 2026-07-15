import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { notes } from "@/content/notes";
import { siteConfig } from "@/content/site-config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return { title: "Note Not Found" };

  return {
    title: `${note.title} | ${siteConfig.name}`,
    description: note.summary,
  };
}

export default async function NoteDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <article className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors mb-8"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          <span>Back to Notes</span>
        </Link>

        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F5F1EA] mb-3">
            {note.title}
          </h1>

          <div className="text-sm font-mono text-[#A39C90] mb-8">
            {note.date}
          </div>

          <div className="prose prose-invert max-w-none">
            {note.content.split("\n").map((line, i) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={i} className="text-2xl font-semibold text-[#F5F1EA] mt-8 mb-4">
                    {line.replace("# ", "")}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-xl font-semibold text-[#F5F1EA] mt-6 mb-3">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-lg font-semibold text-[#F5F1EA] mt-5 mb-2">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-[#A39C90] ml-4 mb-1 list-disc">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.startsWith("```")) {
                return null;
              }
              if (line.trim() === "") {
                return <div key={i} className="h-3" />;
              }
              return (
                <p key={i} className="text-[#A39C90] leading-relaxed mb-3">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}