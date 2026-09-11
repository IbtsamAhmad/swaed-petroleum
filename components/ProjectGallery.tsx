import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

function ProjectCard({
  project,
  size = "md",
  priority = false,
}: {
  project: Project;
  size?: "lg" | "md";
  priority?: boolean;
}) {
  return (
    <Link
      href={`/verticals/${project.verticalSlug}`}
      className={cn(
        "group relative block w-full overflow-hidden bg-navy-950",
        size === "lg" ? "aspect-[16/11]" : "aspect-[5/4]"
      )}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        priority={priority}
        sizes={size === "lg" ? "(min-width:1024px) 60vw, 100vw" : "(min-width:1024px) 28vw, 100vw"}
        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

      <div className={cn("absolute inset-x-0 bottom-0", size === "lg" ? "p-6 md:p-8" : "p-5 md:p-6")}>
        <p className="eyebrow text-gold-300 line-clamp-1">
          {project.clientShort} · {project.sector}
        </p>
        <h3
          className={cn(
            "mt-2.5 max-w-md text-balance font-display leading-tight text-white line-clamp-2",
            size === "lg" ? "text-xl md:text-2xl" : "text-base md:text-lg"
          )}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-xs text-white/55 line-clamp-1">{project.location}</p>
        <div className="mt-4 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 md:flex">
          View Vertical
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [featured, ...rest] = projects;
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <Reveal className="lg:col-span-7">
        <ProjectCard project={featured} size="lg" priority />
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-rows-2">
        {rest.slice(0, 4).map((p, i) => (
          <Reveal key={p.slug} delay={0.1 + i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
