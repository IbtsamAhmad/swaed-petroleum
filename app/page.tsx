import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import VerticalShowcase from "@/components/VerticalShowcase";
import ProjectGallery from "@/components/ProjectGallery";
import Timeline from "@/components/Timeline";
import GlobalPresence from "@/components/GlobalPresence";
import Capabilities from "@/components/Capabilities";
import NewsSection from "@/components/NewsSection";
import CareersCTA from "@/components/CareersCTA";
import Button from "@/components/Button";
import { Reveal } from "@/lib/motion";
import {
  heroContent,
  trustStatement,
  stats,
  milestones,
  capabilities,
  sustainability,
  offices,
} from "@/data/company";
import { verticals } from "@/data/verticals";
import { projects } from "@/data/projects";
import { mediaItems } from "@/data/media";

export const metadata: Metadata = {
  title: "EPCC Contractor for Oil & Gas Infrastructure",
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={heroContent.eyebrow}
        headline={heroContent.headline}
        subhead={heroContent.subhead}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        image="/images/brand/hero-refinery.jpg"
        imageAlt="Hydrocarbon processing towers illuminated at dusk, reflected in still water"
      />

      {/* 02 — TRUST STATEMENT */}
      <section className="bg-background py-28 md:py-36">
        <Container>
          <Reveal>
            <p className="max-w-5xl text-balance font-display font-normal leading-[1.12] text-navy-950 text-[clamp(1.75rem,4.2vw,3.25rem)]">
              {trustStatement.text}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 eyebrow text-gold-600">{trustStatement.attribution}</p>
          </Reveal>
        </Container>
      </section>

      {/* 03 — STATS */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <Container>
          <Stats items={stats} />
        </Container>
      </section>

      {/* 04 — WHO WE ARE */}
      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Who We Are" title="More than a company — a partner in progress." size="lg" />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <p className="text-balance text-lg leading-relaxed text-text-secondary">
                  SWAED is a specialist engineering, procurement, construction and commissioning
                  contractor, active not only in the African region but also Asia and Europe, as an
                  international offshore and onshore partner for the oil and gas sector.
                </p>
                <p className="mt-6 leading-relaxed text-text-secondary">
                  What began as a small yard in Sudan has grown into the SWAED Holding group —
                  spanning trading, energy, technology and manufacturing — headquartered in
                  Istanbul, Turkey, and active across six countries.
                </p>
                <div className="mt-8">
                  <Button href="/who-we-are" variant="ghost" className="text-navy-950">
                    Discover Who We Are
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.15} className="mt-16 md:mt-20">
            <div className="relative">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/images/people/leadership-team.jpg"
                  alt="SWAED leadership and staff gathered at the company's offices"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mx-6 -mt-16 aspect-[4/3] w-40 overflow-hidden border-4 border-background shadow-xl sm:w-56 md:absolute md:right-10 md:bottom-0 md:mx-0 md:mt-0 md:w-72 md:translate-y-1/3">
                <Image
                  src="/images/people/qhse-group-banner.jpg"
                  alt="SWAED HSE commitment team at a field surface facility"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 05 — COMPANY STORY */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Our Story" title="Built by hands, driven by value." size="lg" />
          <div className="mt-16">
            <Timeline items={milestones} />
          </div>
        </Container>
      </section>

      {/* 06 — VERTICALS */}
      <section className="bg-navy-950 py-24 text-white md:py-32">
        <Container>
          <SectionHeading eyebrow="Our Verticals" title="Six disciplines, one integrated capability." tone="dark" size="lg" />
          <div className="mt-16">
            <VerticalShowcase items={verticals} />
          </div>
          <div className="mt-14">
            <Button href="/verticals" variant="on-dark">
              View All Verticals
            </Button>
          </div>
        </Container>
      </section>

      {/* 07 — FEATURED PROJECTS */}
      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Field Work" title="Projects underway across South Sudan." size="lg" />
            <Button href="/verticals" variant="secondary">
              All Capabilities
            </Button>
          </div>
          <div className="mt-16">
            <ProjectGallery projects={projects} />
          </div>
        </Container>
      </section>

      {/* 08 — GLOBAL PRESENCE */}
      <section className="bg-navy-950 py-24 text-white md:py-32">
        <Container>
          <SectionHeading eyebrow="Global Presence" title="Operating across six markets." tone="dark" size="lg" />
          <div className="mt-16">
            <GlobalPresence offices={offices} />
          </div>
        </Container>
      </section>

      {/* 09 — CAPABILITIES */}
      <section className="bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="What We Do" title="Capability, end to end." size="lg" />
          <div className="mt-16">
            <Capabilities
              items={capabilities}
              image="/images/industrial/piping-rack.jpg"
              imageAlt="Industrial piping rack at a processing facility"
            />
          </div>
        </Container>
      </section>

      {/* 10 — SUSTAINABILITY */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Sustainability & Impact" title={sustainability.heading} />
            </div>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="leading-relaxed text-text-secondary">{sustainability.body}</p>
              <div className="mt-8">
                <Button href="/who-we-are" variant="ghost" className="text-navy-950">
                  Read About Our Commitments
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mt-16">
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/images/people/local-content-training.jpg"
                alt="SWAED supervisor training local graduates in the field"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 11 — MEDIA */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Media" title="Latest from SWAED." size="lg" />
            <Link href="/media" className="link-draw text-sm font-semibold uppercase tracking-[0.12em] text-navy-950">
              Explore All Media →
            </Link>
          </div>
          <div className="mt-16">
            <NewsSection items={mediaItems} />
          </div>
        </Container>
      </section>

      {/* 12 — CAREERS */}
      <section>
        <CareersCTA
          image="/images/people/scaffold-technician.jpg"
          imageAlt="SWAED technician on scaffolding wearing a hi-vis safety vest"
        />
      </section>

      {/* 13 — CONTACT CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-28 text-white md:py-40">
        <div className="absolute inset-0 opacity-[0.15]">
          <Image
            src="/images/industrial/tanks-dusk-reflection.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Container className="relative z-10">
          <Reveal>
            <p className="eyebrow text-gold-300">Get In Touch</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-balance font-display font-normal leading-[1.02] text-[clamp(2.5rem,6vw,5.5rem)]">
              Let&rsquo;s Build What&rsquo;s Next.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-balance text-white/65">
              From pipeline integrity to field surface facilities, our team is ready to discuss
              your next project.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10">
              <Button href="/contact-us" className="bg-gold-500 text-navy-950 hover:bg-gold-400">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
