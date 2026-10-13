import { techCategories, coreStack } from "@/content/tech-stack";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiDart,
  SiLangchain,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFlutter,
  SiFramer,
  SiDjango,
  SiLaravel,
  SiVuedotjs,
  SiMysql,
  SiSqlite,
  SiPhp,
  SiN8N,
  SiZapier,
  SiGooglecloud,
  SiGit,
} from "react-icons/si";

const techIconMap: Record<string, React.ReactNode> = {
  Python: <SiPython size={14} />,
  TypeScript: <SiTypescript size={14} />,
  JavaScript: <SiJavascript size={14} />,
  Dart: <SiDart size={14} />,
  LangChain: <SiLangchain size={14} />,
  "Hugging Face": <SiHuggingface size={14} />,
  FastAPI: <SiFastapi size={14} />,
  Flask: <SiFlask size={14} />,
  "Node.js": <SiNodedotjs size={14} />,
  PostgreSQL: <SiPostgresql size={14} />,
  Supabase: <SiSupabase size={14} />,
  Firebase: <SiFirebase size={14} />,
  Redis: <SiRedis size={14} />,
  Docker: <SiDocker size={14} />,
  "GitHub Actions": <SiGithubactions size={14} />,
  Vercel: <SiVercel size={14} />,
  "Next.js": <SiNextdotjs size={14} />,
  React: <SiReact size={14} />,
  "Tailwind CSS": <SiTailwindcss size={14} />,
  Django: <SiDjango size={14} />,
  Laravel: <SiLaravel size={14} />,
  Vue: <SiVuedotjs size={14} />,
  MySQL: <SiMysql size={14} />,
  SQLite: <SiSqlite size={14} />,
  PHP: <SiPhp size={14} />,
  n8n: <SiN8N size={14} />,
  Zapier: <SiZapier size={14} />,
  "Google Cloud": <SiGooglecloud size={14} />,
  Git: <SiGit size={14} />,
  Flutter: <SiFlutter size={14} />,
  "Framer Motion": <SiFramer size={14} />,
  PyTorch: <SiPytorch size={14} />,
  "Scikit-learn": <SiScikitlearn size={14} />,
};

export default function HomeTechStack() {
  return (
    <section className="py-10 md:py-14">
      <div className="section-container">
        <div className="mb-8 md:mb-10">
          <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
            Tooling
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F5F1EA]">
            Tech Stack
          </h2>
        </div>

        <div className="bg-[#17150F] border border-[rgba(232,115,74,0.25)] rounded-lg p-5 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#E8734A] mb-3">Core stack</h3>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-mono text-[#F5F1EA] bg-[#252220] rounded-full"
              >
                <span className="text-[#E8734A]">{techIconMap[item] || null}</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#17150F] border border-[rgba(245,241,234,0.08)] rounded-lg p-5"
            >
              <h3 className="text-sm font-semibold text-[#F5F1EA] mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono text-[#5FA8A0] bg-[#252220] rounded-full"
                  >
                    {techIconMap[item] || null}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}