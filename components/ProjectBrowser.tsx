"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./Cards";
import type { Project } from "@/data/projects";

export default function ProjectBrowser({ projects }: { projects: Project[] }) {
  const clients = Array.from(new Set(projects.map((p) => p.clientShort)));
  const [filter, setFilter] = useState<string>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.clientShort === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by client">
        {["All", ...clients].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] transition-colors",
              filter === c ? "border-navy-900 bg-navy-900 text-white" : "border-border bg-white text-navy-900 hover:border-navy-900"
            )}
          >
            {c}
            <span className="ml-2 opacity-60">{c === "All" ? projects.length : projects.filter((p) => p.clientShort === c).length}</span>
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
