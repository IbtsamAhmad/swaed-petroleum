import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { ProjectCard } from "@/components/Cards";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { projects, getProjectBySlug } from "@/data/projects";
import { services } from "@/data/services";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — ${project.clientShort}`, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const linkedServices = services.filter((s) => project.services.includes(s.slug));
  const others = projects.filter((p) => p.slug !== project.slug && !p.partnerReference).slice(0, 3);
  const facts = [
    { label: "Client", value: `${project.client} (${project.clientShort})` },
    { label: "Location", value: project.location },
    { label: "Duration", value: project.duration },
    ...(project.contract ? [{ label: "Contract", value: project.contract }] : []),
    ...(project.highlight ? [{ label: "Key figure", value: project.highlight }] : []),
  ];

  return (
    <>
      <PageHero
        eyebrow={project.partnerReference ? `Technical partner reference · ${project.clientShort}` : `Project · ${project.clientShort}`}
        title={project.title}
        subhead={project.summary}
        image={project.image}
        imageAlt={project.imageAlt}
        crumbs={[{ label: "Media", href: "/media" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Scope of Works" title="What SWAED delivered" />
              <Reveal delay={0.1}>
                <ol className="mt-8 space-y-4">
                  {project.scope.map((s, i) => (
                    <li key={s} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-navy-900 text-xs font-extrabold text-white">{i + 1}</span>
                      <span className="pt-0.5 leading-relaxed text-text-secondary">{s}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
              {linkedServices.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2">
                  {linkedServices.map((s) => (
                    <Link key={s.slug} href={`/our-services/${s.slug}`} className="border border-border px-3 py-1.5 text-xs font-bold text-navy-900 hover:border-navy-900">
                      {s.short} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <aside className="lg:col-span-5">
              <dl className="divide-y divide-border bg-muted px-7 py-3">
                {facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-3 gap-4 py-4">
                    <dt className="text-xs font-extrabold uppercase tracking-[0.1em] text-gold-600">{f.label}</dt>
                    <dd className="col-span-2 text-sm font-semibold text-navy-950">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20 md:py-24">
        <Container>
          <SectionHeading eyebrow="Photo Gallery" title={`${project.gallery.length} photo${project.gallery.length > 1 ? "s" : ""} from site`} />
          <Gallery photos={project.gallery} className="mt-10" />
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="More Experience" title="Other projects" />
          <RevealStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <RevealItem key={p.slug}>
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
