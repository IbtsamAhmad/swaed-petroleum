import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import GlobalPresence from "@/components/GlobalPresence";
import { Reveal } from "@/lib/motion";
import { offices, generalContact } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SWAED Petroleum — offices in Istanbul, Khartoum, South Sudan, Thi Qar (Iraq) and Ajman (UAE).",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your next project."
        subhead="Reach our head office in Istanbul or one of our regional branches across Sudan, South Sudan, Iraq and the UAE."
        image="/images/industrial/tanks-blue-sky.jpg"
        imageAlt="Storage tanks against a clear blue sky"
        compact
      />

      <section className="bg-background py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Send a Message" title="Tell us about your enquiry." />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow text-gold-600">Our Offices</p>
              <div className="mt-8 divide-y divide-border border-t border-border">
                {offices.map((office, i) => (
                  <Reveal key={office.label} delay={i * 0.05}>
                    <div className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-3 sm:gap-6">
                      <div>
                        <h3 className="font-display text-lg text-navy-950">{office.label}</h3>
                        <p className="mt-1 text-sm text-gold-600">{office.city}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {office.address}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                          {office.phones.map((p) => (
                            <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="link-draw text-sm text-navy-900">
                              {p}
                            </a>
                          ))}
                          {office.email && (
                            <a href={`mailto:${office.email}`} className="link-draw text-sm text-navy-900 break-all">
                              {office.email}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8 text-sm">
                <a href={`mailto:${generalContact.corporateEmail}`} className="link-draw text-navy-950">
                  {generalContact.corporateEmail}
                </a>
                {generalContact.websites.map((w) => (
                  <a key={w} href={`https://${w}`} target="_blank" rel="noopener noreferrer" className="link-draw text-navy-950">
                    {w}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-24 text-white md:py-32">
        <Container>
          <SectionHeading eyebrow="Find Us" title="Our locations at a glance." tone="dark" size="lg" />
          <div className="mt-16">
            <GlobalPresence offices={offices} />
          </div>
        </Container>
      </section>
    </>
  );
}
