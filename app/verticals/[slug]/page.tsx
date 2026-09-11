import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { verticals, getVerticalBySlug } from "@/data/verticals";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) return {};
  return {
    title: vertical.name,
    description: vertical.summary,
  };
}

export default async function VerticalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) notFound();

  const currentIndex = verticals.findIndex((v) => v.slug === slug);
  const next = verticals[(currentIndex + 1) % verticals.length];
  const relatedProjects = projects.filter((p) => vertical.relatedProjects?.includes(p.slug));

  return (
    <>
      <PageHero
        eyebrow={`Vertical ${vertical.index}`}
        title={vertical.name}
        subhead={vertical.summary}
        image={vertical.image}
        imageAlt={vertical.imageAlt}
        compact
      />

      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Overview" title="What we deliver." />
              <div className="mt-8 space-y-5">
                {vertical.body.map((p, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <p className="leading-relaxed text-text-secondary">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="eyebrow text-gold-600">Capabilities</p>
              <ul className="mt-6 space-y-0 border-t border-border">
                {vertical.capabilities.map((c) => (
                  <li key={c} className="border-b border-border py-4 text-sm leading-relaxed text-navy-900">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {vertical.stats && (
            <RevealStagger className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-4">
              {vertical.stats.map((s) => (
                <RevealItem key={s.label}>
                  <p className="break-words font-display text-3xl text-navy-950 md:text-4xl">{s.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.08em] text-text-tertiary">
                    {s.label}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          )}
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-border bg-background py-24 md:py-32">
          <Container>
            <SectionHeading eyebrow="Related Field Work" title="Projects in this vertical." />
            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <Reveal key={p.slug}>
                  <div className="group relative overflow-hidden bg-navy-950">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width:1024px) 32vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="eyebrow text-gold-300">{p.clientShort}</p>
                      <h3 className="mt-2 font-display text-lg leading-tight text-white">{p.title}</h3>
                      <p className="mt-2 text-xs text-white/50">{p.location}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-navy-950 py-20 text-white">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-white/40">Next Vertical</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">{next.name}</h2>
          </div>
          <Link
            href={`/verticals/${next.slug}`}
            className="group inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-gold-400 hover:text-gold-300"
          >
            {next.index} — Continue
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Container>
      </section>

      <section className="bg-background py-24 md:py-32">
        <Container className="flex flex-col items-start gap-8 border-t border-border pt-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-gold-600">Have a project in mind?</p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-[clamp(1.85rem,3.4vw,2.75rem)] text-navy-950">
              Talk to our engineering team.
            </h2>
          </div>
          <Button href="/contact-us">Contact Us</Button>
        </Container>
      </section>
    </>
  );
}
