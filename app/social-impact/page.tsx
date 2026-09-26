import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { sustainability, localContent, qhse, certifications } from "@/data/company";

export const metadata: Metadata = {
  title: "Social Impact",
  description:
    "SWAED's commitment to sustainable development, a strict “No Harm” HSE culture, and local capacity building through the Graduate Development Program.",
};

const PILLARS = [
  { title: "No Harm culture", text: "Complete protection for our people, assets and operational environments on every site." },
  { title: "Local capacity building", text: "Recruiting and training local graduates to lead, manage and sustain operations." },
  { title: "Environmental responsibility", text: "ISO 14001:2015 certified environmental management across our operations." },
  { title: "Accountability", text: "Balancing economic performance with social and environmental responsibility to clients, partners and stakeholders." },
];

export default function SocialImpactPage() {
  return (
    <>
      <PageHero
        title="Social Impact"
        subhead="More than a company — a forward-looking catalyst for positive change in every region we operate."
        image="/images/people/local-content-training.jpg"
        imageAlt="SWAED supervisor training local graduates at a field site"
      />

      {/* SUSTAINABILITY — brochure p.37 */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Sustainability" title={sustainability.heading} />
              <Reveal delay={0.1}>
                {sustainability.paragraphs.map((p) => (
                  <p key={p.slice(0, 20)} className="mt-6 leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
            <Reveal delay={0.1} className="relative min-h-[360px] overflow-hidden lg:col-span-5">
              <Image src="/images/people/crew-ppe-briefing.jpg" alt="SWAED crew in full PPE during a safety briefing" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </Reveal>
          </div>
          <RevealStagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <RevealItem key={p.title} className="h-full border-t-[3px] border-gold-500 bg-muted p-6">
                <span className="text-sm font-extrabold text-gold-600">0{i + 1}</span>
                <h3 className="mt-2 text-base font-extrabold text-navy-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{p.text}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* LOCAL CONTENT — brochure p.38 */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <Image src="/images/people/local-content-training.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        <Container className="relative">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Local Content" title={localContent.heading} tone="dark" />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-white/80">{localContent.body}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* HSE */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/people/crew-night-shift.jpg" alt="SWAED crew in coveralls and hard hats on a night shift" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </Reveal>
            <div>
              <SectionHeading eyebrow="Health, Safety & Environment" title="Safety is our core value" />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-text-secondary">{qhse.text}</p>
                <p className="mt-4 leading-relaxed text-text-secondary">{qhse.text2}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {certifications.map((c) => (
                    <span key={c.name} className="border border-navy-900 px-4 py-2 text-xs font-extrabold tracking-[0.08em] text-navy-900">
                      {c.name} · {c.label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand eyebrow="Join us" title="Build your career with SWAED." href="/careers" label="Careers" />
    </>
  );
}
