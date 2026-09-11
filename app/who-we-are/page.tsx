import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import GlobalPresence from "@/components/GlobalPresence";
import Button from "@/components/Button";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import {
  history,
  milestones,
  swaedAcronym,
  competitiveEdge,
  certifications,
  trustBadges,
  qualityManagement,
  qhse,
  orgChart,
  offices,
  trustStatement,
} from "@/data/company";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "SWAED Petroleum's story, philosophy, values and organization — an EPCC contractor for the oil & gas industry headquartered in Istanbul, Turkey.",
};

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="More than a company — helping hands, working as one."
        subhead="From a small yard in Sudan to a holding group active across six countries, SWAED's story is one of hands joined in purpose, trust, and excellence."
        image="/images/industrial/piping-rack.jpg"
        imageAlt="Industrial piping rack against a clear blue sky"
      />

      {/* OVERVIEW */}
      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Company Overview" title="A specialist EPCC contractor for the hydrocarbon industry." size="lg" />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <p className="leading-relaxed text-text-secondary">
                  SWAED is a specialist engineering, procurement, construction and commissioning
                  contractor, with current projects not only in the African region but also Asia
                  and Europe, as an international offshore and onshore partner for the oil and gas
                  sector.
                </p>
                <p className="mt-6 leading-relaxed text-text-secondary">
                  SWAED&rsquo;s expertise as an EPCC service provider in the energy industry
                  focuses on onshore and offshore hydrocarbon infrastructure. The services
                  offered, using a combination of global knowledge and expertise, cover all
                  project phases — from project development and feasibility studies, through
                  engineering design and procurement, to construction, commissioning and
                  operational management.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* PHILOSOPHY / NAME */}
      <section className="border-t border-border bg-navy-950 py-24 text-white md:py-32">
        <Container>
          <Reveal>
            <p className="eyebrow text-gold-300">Our Philosophy</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-4xl text-balance font-display font-normal leading-[1.15] text-[clamp(1.6rem,3.6vw,2.75rem)]">
              {trustStatement.text}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl leading-relaxed text-white/60">
              As an EPCC contractor serving the oil and gas industry, we transform this philosophy
              into action through five core commitments — together we deliver, together we build
              the future.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* VALUES — SWAED ACRONYM */}
      <section className="bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What SWAED stands for." size="lg" />
          <RevealStagger className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {swaedAcronym.map((item) => (
              <RevealItem key={item.letter} className="bg-background p-8">
                <span className="font-display text-5xl text-gold-500">{item.letter}</span>
                <h3 className="mt-5 text-lg font-semibold text-navy-950">{item.word}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.detail}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* HISTORY */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Our History" title="From a Sudanese yard to a regional holding group." size="lg" />
              <Reveal delay={0.1}>
                <p className="mt-8 leading-relaxed text-text-secondary">{history.intro}</p>
                <p className="mt-5 leading-relaxed text-text-secondary">{history.body}</p>
                <p className="mt-5 leading-relaxed text-text-secondary">{history.outro}</p>
              </Reveal>
            </div>
            <div className="relative hidden overflow-hidden lg:col-span-6 lg:col-start-7 lg:block">
              <Image
                src="/images/people/field-documentation.jpg"
                alt="SWAED site team reviewing project documentation under a field shelter"
                fill
                sizes="45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-20">
            <Timeline items={milestones} />
          </div>
        </Container>
      </section>

      {/* ORGANIZATION */}
      <section className="bg-navy-950 py-24 text-white md:py-32">
        <Container>
          <SectionHeading eyebrow="Organization" title="How our projects are structured." tone="dark" size="lg" />
          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-white/40">Corporate Structure</p>
              <ol className="mt-6 space-y-0">
                {orgChart.corporate.map((role, i) => (
                  <li key={role} className="flex items-center gap-4 border-t border-white/10 py-4 first:border-t-0">
                    <span className="text-xs tabular text-gold-400">0{i + 1}</span>
                    <span className="font-display text-lg">{role}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex flex-wrap gap-3">
                {orgChart.corporateDepartments.map((d) => (
                  <span key={d} className="border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.08em] text-white/70">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-white/40">Typical Project Structure</p>
              <ol className="mt-6 space-y-0">
                {orgChart.project.map((role, i) => (
                  <li key={role} className="flex items-center gap-4 border-t border-white/10 py-4 first:border-t-0">
                    <span className="text-xs tabular text-gold-400">0{i + 1}</span>
                    <span className="font-display text-lg">{role}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 space-y-4">
                {orgChart.projectBranches.map((branch) => (
                  <div key={branch.lead} className="border border-white/10 p-5">
                    <p className="font-semibold text-gold-300">{branch.lead}</p>
                    <p className="mt-2 text-sm text-white/60">
                      {branch.teams.map((t) => t.role).join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* QUALITY & QHSE */}
      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-gold-600">Quality Management</p>
              <h3 className="mt-4 font-display text-2xl text-navy-950 md:text-3xl">
                An effective Quality System, ISO 9001 compliant.
              </h3>
              <p className="mt-6 leading-relaxed text-text-secondary">{qualityManagement.intro}</p>
              <ul className="mt-6 space-y-3">
                {qualityManagement.points.slice(0, 4).map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow text-gold-600">QHSE</p>
              <h3 className="mt-4 font-display text-2xl text-navy-950 md:text-3xl">
                A “No Harm” culture, ISO 14001 certified.
              </h3>
              <p className="mt-6 leading-relaxed text-text-secondary">{qhse.text}</p>
              <p className="mt-5 leading-relaxed text-text-secondary">{qhse.text2}</p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
            {certifications.map((c) => (
              <div key={c.name}>
                <p className="font-display text-xl text-navy-950">{c.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-text-tertiary">{c.label}</p>
              </div>
            ))}
            {trustBadges.map((b) => (
              <div key={b.label}>
                <p className="font-display text-xl text-navy-950">✓</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-text-tertiary">{b.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ACHIEVEMENTS / EDGE */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Our Competitive Edge" title="Why clients choose SWAED." size="lg" />
          <RevealStagger className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {competitiveEdge.map((item, i) => (
              <RevealItem key={item.title} className="border-t border-border pt-6">
                <span className="text-xs tabular text-gold-600">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.text}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* GLOBAL FOOTPRINT */}
      <section className="bg-navy-950 py-24 text-white md:py-32">
        <Container>
          <SectionHeading eyebrow="Global Footprint" title="Six countries. One standard of delivery." tone="dark" size="lg" />
          <div className="mt-16">
            <GlobalPresence offices={offices} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-background py-24 md:py-32">
        <Container className="flex flex-col items-start gap-8 border-t border-border pt-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-gold-600">Next</p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-[clamp(1.85rem,3.4vw,2.75rem)] text-navy-950">
              See the disciplines behind our delivery.
            </h2>
          </div>
          <Button href="/verticals">Explore Our Verticals</Button>
        </Container>
      </section>
    </>
  );
}
