import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notes } from "@/content/notes";

export default function FeaturedNotes() {
  const featuredNotes = notes.slice(0, 3);

  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
              Writing
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">
              Engineering Notes
            </h2>
          </div>
          <Link
            href="/notes"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors"
          >
            <span>All notes</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="group block bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] rounded-lg p-5 hover:bg-[#252220] transition-all duration-200"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {note.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-base font-semibold text-[#F5F1EA] group-hover:text-[#E8734A] transition-colors mb-2">
                {note.title}
              </h3>
              <p className="text-sm text-[#A39C90] leading-relaxed line-clamp-2">
                {note.summary}
              </p>
              <div className="mt-3 text-xs font-mono text-[#A39C90]">
                {note.date}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors"
          >
            <span>All notes</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}