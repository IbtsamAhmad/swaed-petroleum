import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { localContent, orgChart, generalContact } from "@/data/company";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at SWAED Petroleum — technical training, field leadership and the Graduate Development Program across Turkey, Sudan, South Sudan, Iraq, the UAE and Algeria.",
};

const disciplines = Array.from(
  new Set(
    orgChart.projectBranches.flatMap((b) => b.teams.map((t) => t.role))
  )
);

const fieldRoles = Array.from(
  new Set(
    orgChart.projectBranches.flatMap((b) => b.teams.flatMap((t) => t.staff))
  )
);

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Future With Us"
        subhead="SWAED grows by investing in the people who carry out our work — from graduate engineers to field supervisors and welders."
        image="/images/people/team-group-plant.jpg"
        imageAlt="SWAED field team gathered together at a plant site"
      />

      {/* CULTURE */}
      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Our Culture" title="Helping hands, working as one." size="lg" />
            </div>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="leading-relaxed text-text-secondary">
                SWAED represents helping hands working together, teamwork, and collective
                strength — united to achieve more. That philosophy shapes how our teams operate on
                every site, from South Sudan&rsquo;s oil fields to our engineering offices in
                Istanbul.
              </p>
              <p className="mt-6 leading-relaxed text-text-secondary">
                Safety First underpins everything: a zero-harm policy across all project phases,
                and a strict “No Harm” culture that protects our people, our assets, and the
                communities where we operate.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* LOCAL CONTENT / GRADUATE PROGRAM */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/people/local-content-training.jpg"
            alt="SWAED supervisor training local graduates in the field"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50" />
        </div>
        <Container className="relative z-10">
          <Reveal>
            <p className="eyebrow text-gold-300">Why Join SWAED</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]">
              {localContent.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl leading-relaxed text-white/70">{localContent.body}</p>
          </Reveal>
        </Container>
      </section>

      {/* GROWTH / DEVELOPMENT */}
      <section className="bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Growth & Development" title="Trained on real projects, mentored by industry experts." size="lg" />
          <RevealStagger className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <RevealItem className="border-t border-border pt-6">
              <span className="text-xs tabular text-gold-600">01</span>
              <h3 className="mt-3 font-display text-xl text-navy-950">Hands-On Mentorship</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Intensive technical training paired with hands-on mentorship, equipping local
                talent with the expertise to lead, manage and sustain operations.
              </p>
            </RevealItem>
            <RevealItem className="border-t border-border pt-6">
              <span className="text-xs tabular text-gold-600">02</span>
              <h3 className="mt-3 font-display text-xl text-navy-950">Supervised by Experts</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Field teams are trained to high trade and safety standards, supervised by experts
                drawn from major operating companies across the region.
              </p>
            </RevealItem>
            <RevealItem className="border-t border-border pt-6">
              <span className="text-xs tabular text-gold-600">03</span>
              <h3 className="mt-3 font-display text-xl text-navy-950">A Growing Group</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                From the SWAED Manufacturing Division to SWA Tech Co., our R&amp;D-driven growth is
                opening new disciplines beyond traditional field construction.
              </p>
            </RevealItem>
          </RevealStagger>
        </Container>
      </section>

      {/* DISCIPLINES / ROLES */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Where You Could Work" title="Disciplines across our project teams." size="lg" />
          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-gold-600">Engineering & Management</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {disciplines.map((d) => (
                  <li key={d} className="border border-border px-4 py-2 text-sm text-navy-900">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-gold-600">Field & Trades</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {fieldRoles.map((d) => (
                  <li key={d} className="border border-border px-4 py-2 text-sm text-navy-900">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/people/welding-sparks.jpg"
            alt="Welder at work on a pipeline in the field"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <Reveal>
            <p className="eyebrow text-gold-300">Join Us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl text-balance font-display text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]">
              Ready to build with helping hands?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg leading-relaxed text-white/65">
              Send your CV and area of interest to our team — we&rsquo;ll route it to the right
              department across our offices in Istanbul, Khartoum, Juba, Baghdad, Ajman and
              Algiers.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`mailto:${generalContact.email}`} className="bg-gold-500 text-navy-950 hover:bg-gold-400">
                Email Your CV
              </Button>
              <Button href="/contact-us" variant="on-dark">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
