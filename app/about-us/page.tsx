import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import CtaBand from "@/components/CtaBand";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import {
  overview,
  history,
  milestones,
  directorStatement,
  swaedAcronym,
  competitiveEdge,
  orgChart,
  qualityManagement,
  qhse,
  certifications,
  trustBadges,
  subsidiaries,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SWAED's story — founded in Sudan in 2020, headquartered in Istanbul since 2022 — plus our values, organization, quality management and QHSE.",
};

const SECTIONS = [
  { id: "story", label: "Our Story" },
  { id: "overview", label: "Overview" },
  { id: "statement", label: "Director Statement" },
  { id: "values", label: "Values" },
  { id: "organization", label: "Organization" },
  { id: "qhse", label: "Quality & QHSE" },
  { id: "group", label: "Group Companies" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subhead="From a trading firm in Sudan to a diversified holding group — helping hands, working as one."
        image="/images/people/history-site-visit.jpg"
        imageAlt="SWAED team inspecting a storage tank foundation on site"
      />

      {/* In-page navigation */}
      <nav aria-label="On this page" className="sticky top-[4.5rem] z-30 border-b border-border bg-white/95 backdrop-blur md:top-20">
        <Container className="no-scrollbar flex gap-6 overflow-x-auto">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 py-4 text-xs font-bold uppercase tracking-[0.12em] text-navy-900/70 hover:text-gold-600">
              {s.label}
            </a>
          ))}
        </Container>
      </nav>

      {/* STORY — brochure p.7 */}
      <section id="story" className="scroll-mt-40 bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionHeading eyebrow="History" title="Our story" />
              <Reveal delay={0.1}>
                {history.paragraphs.map((p) => (
                  <p key={p.slice(0, 20)} className="mt-6 leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
            <Reveal delay={0.1} className="relative min-h-[320px] overflow-hidden lg:col-span-6">
              <Image src="/images/people/crew-ppe-briefing.jpg" alt="SWAED crew in full PPE at a field briefing" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </Reveal>
          </div>
          <div className="mt-16">
            <Timeline items={milestones} />
          </div>
        </Container>
      </section>

      {/* OVERVIEW — brochure p.5 */}
      <section id="overview" className="scroll-mt-40 bg-muted py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Company Overview & Expertise" title="EPCC across the full project lifecycle." intro={overview.body} />
          <RevealStagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {overview.phases.map((ph, i) => (
              <RevealItem key={ph.title} className="h-full border-t-[3px] border-gold-500 bg-white p-7">
                <span className="text-sm font-extrabold text-gold-600">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-extrabold text-navy-950">{ph.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{ph.text}</p>
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal>
            <p className="mt-10 max-w-3xl text-lg font-semibold leading-relaxed text-navy-900">{overview.closing}</p>
          </Reveal>
        </Container>
      </section>

      {/* DIRECTOR STATEMENT — brochure p.15 */}
      <section id="statement" className="scroll-mt-40 relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <Image src="/images/people/crew-night-shift.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold-300">Director Statement</p>
            <Reveal>
              <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.6rem)] font-extrabold leading-tight">{directorStatement.heading}</h2>
              {directorStatement.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="mt-6 leading-relaxed text-white/80">
                  {p}
                </p>
              ))}
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-gold-300">— {directorStatement.signature}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section id="values" className="scroll-mt-40 bg-white py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What SWAED stands for" />
          <RevealStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {swaedAcronym.map((v) => (
              <RevealItem key={v.letter} className="h-full border border-border p-6">
                <span className="text-5xl font-extrabold text-gold-500">{v.letter}</span>
                <h3 className="mt-4 text-base font-extrabold text-navy-950">{v.word}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{v.detail}</p>
              </RevealItem>
            ))}
          </RevealStagger>

          <div className="mt-20">
            <SectionHeading eyebrow="Why SWAED" title="Our competitive edge" />
            <RevealStagger className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {competitiveEdge.map((c, i) => (
                <RevealItem key={c.title} className="border-t border-border pt-5">
                  <span className="text-xs font-extrabold text-gold-600">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-extrabold text-navy-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{c.text}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* ORGANIZATION — brochure pp.8–9 */}
      <section id="organization" className="scroll-mt-40 bg-muted py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Organization" title="How we are structured" />
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Reveal className="bg-white p-7">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-600">Company organization chart</h3>
              <ol className="mt-6 flex flex-col items-center gap-2">
                {orgChart.corporate.map((r) => (
                  <li key={r} className="w-full max-w-xs border border-navy-900/20 bg-navy-900 px-4 py-2.5 text-center text-sm font-bold text-white">
                    {r}
                  </li>
                ))}
              </ol>
              <ul className="mt-5 flex flex-wrap justify-center gap-2">
                {orgChart.corporateDepartments.map((d) => (
                  <li key={d} className="border border-border px-3 py-1.5 text-xs font-semibold text-navy-900">
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="bg-white p-7">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-600">Typical project organization</h3>
              <ol className="mt-6 flex flex-col items-center gap-2">
                {orgChart.project.map((r) => (
                  <li key={r} className="w-full max-w-xs border border-navy-900/20 bg-navy-900 px-4 py-2.5 text-center text-sm font-bold text-white">
                    {r}
                  </li>
                ))}
              </ol>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {orgChart.projectBranches.map((b) => (
                  <div key={b.lead} className="border border-border p-4">
                    <p className="text-sm font-extrabold text-navy-950">{b.lead}</p>
                    <ul className="mt-2 space-y-1 text-xs text-text-secondary">
                      {b.teams.map((t) => (
                        <li key={t.role}>{t.role}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* QUALITY & QHSE — brochure pp.10–12 */}
      <section id="qhse" className="scroll-mt-40 bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Quality Management" title="An ISO 9001 quality system" />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-text-secondary">{qualityManagement.intro}</p>
                <ul className="mt-5 space-y-3">
                  {qualityManagement.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div>
              <SectionHeading eyebrow="QHSE" title="A “No Harm” culture" />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-text-secondary">{qhse.text}</p>
                <p className="mt-4 leading-relaxed text-text-secondary">{qhse.text2}</p>
                <div className="relative mt-8 aspect-[3/2] overflow-hidden">
                  <Image src="/images/projects/spoc-crude-tank-cleaning/03.jpg" alt="SWAED crew in PPE assembled before the day's tank work" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-border pt-10 md:grid-cols-6">
            {certifications.map((c) => (
              <div key={c.name} className="col-span-1 border-l-2 border-gold-500 pl-4">
                <p className="text-lg font-extrabold text-navy-950">{c.name}</p>
                <p className="mt-1 text-xs text-text-tertiary">{c.label}</p>
              </div>
            ))}
            {trustBadges.map((b) => (
              <div key={b} className="col-span-1 border-l-2 border-border pl-4">
                <p className="text-lg font-extrabold text-navy-950">✓</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-text-tertiary">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* GROUP COMPANIES — brochure p.40 */}
      <section id="group" className="scroll-mt-40 bg-muted py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="SWAED Holding"
            title="Family & subsidiaries"
            intro="SWAED Petroleum Technical Service Industrial & Trading Co. Ltd family and subsidiaries include:"
          />
          <RevealStagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subsidiaries.map((s) => (
              <RevealItem key={s.name + s.location} className="h-full bg-white p-6">
                <p className="font-extrabold text-navy-950">{s.name}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-gold-600">{s.location}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <CtaBand eyebrow="Next" title="See what we deliver — 11 services, one integrated contractor." href="/our-services" label="Our Services" />
    </>
  );
}
