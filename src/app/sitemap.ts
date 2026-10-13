import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";
import { notes } from "@/content/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const pages = ["", "/projects", "/services", "/experience", "/certifications", "/notes", "/about", "/contact"].map(
    (path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })
  );
  const projectPages = projects.map((p) => ({ url: `${base}/projects/${p.slug}`, priority: 0.7 }));
  const notePages = notes.map((n) => ({ url: `${base}/notes/${n.slug}`, lastModified: n.date, priority: 0.6 }));
  return [...pages, ...projectPages, ...notePages];
}
