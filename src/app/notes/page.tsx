import Link from "next/link";
import { NotebookPen } from "lucide-react";
import { notes } from "@/content/notes";

export default function NotesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="section-container">
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-[#5FA8A0] font-mono text-xs uppercase tracking-wider mb-3">
            <NotebookPen size={14} strokeWidth={1.5} />
            <span>Notes</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#F5F1EA] mb-4">
            Engineering Notes
          </h1>
          <p className="text-[#A39C90] text-base md:text-lg max-w-2xl leading-relaxed">
            Technical write-ups on agent design, RAG tuning, FastAPI patterns,
            and workflow automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="group block bg-[#1C1A17] border border-[rgba(245,241,234,0.08)] rounded-lg p-5 hover:bg-[#252220] transition-all duration-200"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-base font-semibold text-[#F5F1EA] group-hover:text-[#E8734A] transition-colors mb-2">
                {note.title}
              </h2>
              <p className="text-sm text-[#A39C90] leading-relaxed line-clamp-2">
                {note.summary}
              </p>
              <div className="mt-3 text-xs font-mono text-[#A39C90]">
                {note.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}