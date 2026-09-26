import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Button from "@/components/Button";
import { ProjectCard } from "@/components/Cards";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { services, getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const index = services.indexOf(service);
  const code = index < 2 ? `3.${index + 1}` : service.number;
  const next = services[(index + 1) % services.length];
  const related = projects.filter((p) => service.projects?.includes(p.slug));

  return (
    <>
      <PageHero
        eyebrow={`Service ${code}`}
        title={service.name}
        subhead={service.summary}
        image={service.image}
        imageAlt={service.imageAlt}
        crumbs={[{ label: "Our Services", href: "/our-services" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Overview" title="What we deliver" />
              <div className="mt-8 space-y-5">
                {service.body.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p className="leading-relaxed text-text-secondary">{p}</p>
                  </Reveal>
                ))}
              </div>
              {service.seeAlso && (
                <div className="mt-8">
                  <Button href={service.seeAlso.href}>{service.seeAlso.label}</Button>
                </div>
              )}
            </div>

            <aside className="lg:col-span-5">
              <div className="bg-muted p-7">
                <p className="eyebrow text-gold-600">Capabilities</p>
                <ul className="mt-4 divide-y divide-border">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex gap-3 py-3 text-sm font-semibold leading-relaxed text-navy-900">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border border-border p-7">
                <p className="eyebrow text-text-tertiary">All services</p>
                <ul className="mt-3 space-y-1.5">
                  {services.map((s, i) => (
                    <li key={s.slug}>
                      <Link
                        href={`/our-services/${s.slug}`}
                        aria-current={s.slug === service.slug ? "page" : undefined}
                        className={
                          "flex gap-3 text-sm " +
                          (s.slug === service.slug ? "font-extrabold text-gold-600" : "text-navy-900/75 hover:text-navy-900")
                        }
                      >
                        <span className="w-7 shrink-0">{i < 2 ? `3.${i + 1}` : s.number}</span>
                        {s.short}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {service.stats && (
            <RevealStagger className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 lg:grid-cols-4">
              {service.stats.map((s) => (
                <RevealItem key={s.label} className="border-l-2 border-gold-500 pl-4">
                  <p className="text-2xl font-extrabold text-navy-900 md:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-text-tertiary">{s.label}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          )}
        </Container>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="bg-muted py-20 md:py-24">
          <Container>
            <SectionHeading eyebrow="From the Field" title="Photo gallery" />
            <Gallery photos={service.gallery} className="mt-10" />
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <Container>
            <SectionHeading eyebrow="Media" title="Similar projects executed" />
            <RevealStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <RevealItem key={p.slug}>
                  <ProjectCard project={p} />
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </section>
      )}

      <section className="bg-navy-900 py-14 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-white/50">Next service</p>
            <p className="mt-2 text-2xl font-extrabold">{next.name}</p>
          </div>
          <Button href={`/our-services/${next.slug}`} variant="on-dark">
            Continue
          </Button>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
