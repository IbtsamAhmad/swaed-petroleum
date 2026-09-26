import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import HeroMosaic from "@/components/HeroMosaic";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import BranchMap from "@/components/BranchMap";
import Button from "@/components/Button";
import { ServiceCard, ProjectCard, NewsCard } from "@/components/Cards";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { overview, stats, history, clients } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { mediaItems } from "@/data/media";

export const metadata: Metadata = {
  title: "EPCC Contractor for Oil & Gas Infrastructure",
};

const HOME_SERVICES = ["cross-country-pipeline", "live-pipeline-repair", "field-surface-facilities", "inspection-ndt", "operation-maintenance"];

export default function HomePage() {
  const featured = HOME_SERVICES.map((slug) => services.find((s) => s.slug === slug)!);
  const ownProjects = projects.filter((p) => !p.partnerReference).slice(0, 3);

  return (
    <>
      <HeroMosaic />

      {/* SERVICE CARDS — Descon "verticals" row */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {featured.map((s, i) => (
              <RevealItem key={s.slug}>
                <ServiceCard service={s} label={i < 2 ? `3.${i + 1}` : s.number} />
              </RevealItem>
            ))}
          </RevealStagger>
          <div className="mt-8 text-center">
            <Link href="/our-services" className="text-xs font-bold uppercase tracking-[0.14em] text-navy-900 hover:text-gold-600">
              View all 11 services →
            </Link>
          </div>
        </Container>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-muted py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/people/team-group-plant.jpg" alt="SWAED field team gathered at a plant in South Sudan" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </Reveal>
            <div>
              <SectionHeading eyebrow="About Us" title="Helping hands, working as one." />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-text-secondary">{overview.lead}</p>
                <p className="mt-4 leading-relaxed text-text-secondary">{history.paragraphs[0]}</p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Button href="/about-us">Our Story</Button>
                  <div className="flex gap-2">
                    {clients.map((c) => (
                      <span key={c.short} title={c.name} className="border border-navy-900/20 bg-white px-3 py-2 text-xs font-extrabold tracking-[0.1em] text-navy-900">
                        {c.short}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <Stats items={stats} />
        </Container>
      </section>

      {/* SIMILAR PROJECTS */}
      <section className="bg-muted py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Media" title="Similar projects executed" />
            <Button href="/media" variant="secondary">
              All Projects
            </Button>
          </div>
          <RevealStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ownProjects.map((p) => (
              <RevealItem key={p.slug}>
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* BRANCH MAP */}
      <section className="bg-navy-950 py-20 text-white md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Branches"
            title="A reputable name across the Middle East, Africa & Europe."
            intro="Headquartered in Istanbul, with branch offices in Sudan, South Sudan, Iraq and the UAE, and active operations in Algeria and Syria."
            tone="dark"
          />
          <div className="mt-12">
            <BranchMap compact />
          </div>
          <div className="mt-10">
            <Button href="/contact-us" variant="on-dark">
              All Office Addresses
            </Button>
          </div>
        </Container>
      </section>

      {/* LATEST UPDATES */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading title="Latest Updates" align="center" />
          <RevealStagger className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {mediaItems.slice(0, 3).map((m) => (
              <RevealItem key={m.slug}>
                <NewsCard item={m} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>
    </>
  );
}
