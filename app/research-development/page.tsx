import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { rnd } from "@/data/company";

export const metadata: Metadata = {
  title: "Research & Development",
  description:
    "SWAED's R&D division — the SWAED Manufacturing Division, SWA Tech Co., and peer-reviewed research presented at the ARPS Conference.",
};

export default function RnDPage() {
  return (
    <>
      <PageHero
        title="Research & Development"
        eyebrow="R&D & Innovation"
        subhead="The strategic engine for company-wide innovation."
        image="/images/industrial/process-modules.jpg"
        imageAlt="Stainless steel process modules"
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Our Approach" title={rnd.heading} />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-text-secondary">{rnd.body}</p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="relative min-h-[300px] overflow-hidden lg:col-span-5">
              <Image src="/images/people/welding-sparks.jpg" alt="Welder fabricating pipework in the field" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </Reveal>
          </div>

          <RevealStagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {rnd.pillars.map((p, i) => (
              <RevealItem key={p.name} className="h-full bg-navy-900 p-8 text-white md:p-10">
                <span className="text-sm font-extrabold text-gold-300">Pillar 0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-4 leading-relaxed text-white/75">{p.text}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Scientific Excellence & Problem-Solving" title="We do not merely adopt industry standards — we create them." />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-text-secondary">{rnd.science}</p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="self-center border-l-4 border-gold-500 bg-white p-8 md:p-10">
              <p className="eyebrow text-gold-600">Recent study</p>
              <p className="mt-4 text-xl font-extrabold leading-snug text-navy-950">“{rnd.publication.title}”</p>
              <p className="mt-4 text-sm font-semibold text-text-secondary">{rnd.publication.venue}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Service 11"
            title="Oil & gas research, development & training"
            intro="Applied research and technical training sit alongside our field services — including the Graduate Development Program that trains local engineers and technicians on live projects."
          />
        </Container>
      </section>

      <CtaBand eyebrow="Collaborate" title="Working on an operational challenge? Talk to our R&D team." />
    </>
  );
}
