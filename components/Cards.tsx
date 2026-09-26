import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";
import type { MediaItem } from "@/data/media";

// Descon "vertical" card: photo with a label bar across the bottom.
export function ServiceCard({ service, label }: { service: Service; label?: string }) {
  return (
    <Link
      href={`/our-services/${service.slug}`}
      className="group relative block overflow-hidden border border-border bg-white transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(10,21,38,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width:1280px) 20vw, (min-width:768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 bg-navy-900 px-3 py-1.5 text-xs font-bold text-gold-300">
          {label ?? service.number}
        </span>
      </div>
      <div className="border-t-[3px] border-gold-500 p-5">
        <h3 className="text-base font-extrabold leading-snug text-navy-950 group-hover:text-navy-700">{service.short}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">{service.summary}</p>
      </div>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/media/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-border bg-white transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(10,21,38,0.14)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-white px-2.5 py-1 text-[0.7rem] font-extrabold tracking-[0.1em] text-navy-900">
          {project.clientShort}
        </span>
        {project.gallery.length > 1 && (
          <span className="absolute bottom-4 right-4 bg-navy-950/80 px-2.5 py-1 text-[0.7rem] font-semibold text-white">
            {project.gallery.length} photos
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold-600">
          {project.duration}
          {project.partnerReference && " · Partner reference"}
        </p>
        <h3 className="mt-2 text-lg font-extrabold leading-snug text-navy-950 group-hover:text-navy-700">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">{project.summary}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-xs text-text-tertiary">
          <span>{project.location}</span>
          {project.highlight && <span className="font-bold text-navy-900">{project.highlight}</span>}
        </div>
      </div>
    </Link>
  );
}

export function NewsCard({ item }: { item: MediaItem }) {
  return (
    <Link href={`/media/news/${item.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width:1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-5 text-lg font-extrabold leading-snug text-navy-950 group-hover:text-navy-700">{item.title}</h3>
      <p className="mt-1.5 text-sm font-bold text-gold-600">
        {item.category}
        {item.date && ` · ${item.date}`}
      </p>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">{item.excerpt}</p>
    </Link>
  );
}
