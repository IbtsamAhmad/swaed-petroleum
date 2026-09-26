import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/lib/motion";

type Crumb = { label: string; href?: string };

// Descon-style inner-page banner: photo, dark overlay, title and breadcrumb.
export default function PageHero({
  title,
  eyebrow,
  subhead,
  image,
  imageAlt,
  crumbs = [],
}: {
  title: string;
  eyebrow?: string;
  subhead?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs, { label: title }];
  return (
    <section className="relative flex min-h-[340px] items-end overflow-hidden bg-navy-950 md:min-h-[420px]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-900/30" />
      <div className="container-swaed relative z-10 w-full pb-12 pt-20 md:pb-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            {trail.map((c, i) => (
              <li key={c.label + i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold-300">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-gold-300">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Reveal>
          {eyebrow && <p className="eyebrow mt-6 text-gold-300">{eyebrow}</p>}
          <h1 className="mt-3 max-w-4xl text-balance text-[clamp(2rem,4.6vw,3.6rem)] font-extrabold leading-[1.06] tracking-[-0.015em] text-white">
            {title}
          </h1>
          {subhead && <p className="mt-5 max-w-2xl text-balance leading-relaxed text-white/75">{subhead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
