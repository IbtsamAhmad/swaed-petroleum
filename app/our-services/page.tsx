import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { ServiceCard } from "@/components/Cards";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { services, servicesIntro, engineering } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Eleven EPCC services for the hydrocarbon industry — cross-country pipeline construction, live pipeline repair, field surface facilities, hot tapping, intelligent pigging, CP, inspection & NDT, O&M and more.",
};

export default function ServicesPage() {
  const [crossCountry, live] = services;
  const rest = services.slice(2);

  return (
    <>
      <PageHero
        title="Our Services"
        subhead="Multi-discipline core business in pipeline & piping — engineered, procured, built and commissioned by one team."
        image="/images/industrial/process-modules.jpg"
        imageAlt="Stainless steel process modules and piping"
      />

      {/* INTRO + WHAT WE DO — brochure p.17 */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="What We Do" title="Engineering excellence across the full project lifecycle" />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-text-secondary">{servicesIntro}</p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <ol className="divide-y divide-border border-y border-border">
                {services.map((s, i) => (
                  <li key={s.slug}>
                    <Link href={`/our-services/${s.slug}`} className="group flex items-center gap-4 py-3.5">
                      <span className="w-8 text-sm font-extrabold text-gold-600">{i < 2 ? `3.${i + 1}` : s.number}</span>
                      <span className="flex-1 text-sm font-bold text-navy-950 group-hover:text-navy-700">{s.name}</span>
                      <span className="text-navy-900/40 transition-transform group-hover:translate-x-1 group-hover:text-gold-600" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FEATURED 3.1 / 3.2 */}
      <section className="bg-muted py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Core Business" title="Pipelines & piping — construction and live repair" />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[crossCountry, live].map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link href={`/our-services/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden bg-navy-950 sm:aspect-[16/10]">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <span className="bg-gold-500 px-2.5 py-1 text-xs font-extrabold text-navy-950">3.{i + 1}</span>
                    <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white md:text-3xl">{s.name}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">{s.summary}</p>
                    {s.stats && (
                      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                        {s.stats.slice(0, 2).map((st) => (
                          <p key={st.label} className="text-sm text-white/60">
                            <span className="mr-2 text-lg font-extrabold text-gold-300">{st.value}</span>
                            {st.label}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ALL OTHER SERVICES */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Integrated Services" title="Everything around the line" />
          <RevealStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s) => (
              <RevealItem key={s.slug}>
                <ServiceCard service={s} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* ENGINEERING — brochure pp.32–34 */}
      <section className="bg-navy-950 py-20 text-white md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Behind Every Service" title={engineering.heading} tone="dark" />
              <Reveal delay={0.1}>
                {engineering.body.map((p) => (
                  <p key={p.slice(0, 20)} className="mt-5 leading-relaxed text-white/75">
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
            <div>
              <Reveal className="relative aspect-[16/10] overflow-hidden">
                <Image src={engineering.image} alt={engineering.imageAlt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
              </Reveal>
              <ul className="mt-8 space-y-3">
                {engineering.principles.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
