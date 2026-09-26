import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import BranchMap from "@/components/BranchMap";
import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";
import { offices, kindLabel } from "@/data/branches";
import { generalContact } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SWAED Petroleum — head office in Istanbul, branches in Khartoum, Juba, Thi Qar (Iraq) and Ajman (UAE).",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subhead="Reach our head office in Istanbul or one of our branches across Sudan, South Sudan, Iraq and the UAE."
        image="/images/industrial/tanks-blue-sky.jpg"
        imageAlt="Storage tanks against a clear blue sky"
      />

      {/* BRANCH MAP — brochure p.40 */}
      <section className="bg-navy-950 py-20 text-white md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Branches"
            title="Find us on the map"
            intro="Over the years SWAED has established a reputable name in several countries in the Middle East, Africa and Europe. Select a location for its address."
            tone="dark"
          />
          <div className="mt-12">
            <BranchMap />
          </div>
        </Container>
      </section>

      {/* OFFICE CARDS — brochure p.42 */}
      <section className="bg-muted py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Offices" title="Office addresses" />
          <RevealStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <RevealItem key={o.key} className={"h-full bg-white p-7 " + (o.kind === "hq" ? "border-t-[3px] border-gold-500" : "border-t-[3px] border-navy-900")}>
                <p className="eyebrow text-gold-600">{kindLabel[o.kind]}</p>
                <h3 className="mt-2 text-xl font-extrabold text-navy-950">
                  {o.city} — {o.country}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{o.address}</p>
                <div className="mt-4 space-y-1 text-sm">
                  {o.phones?.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block font-semibold text-navy-900 hover:text-gold-600">
                      {p}
                    </a>
                  ))}
                  {o.email && (
                    <a href={`mailto:${o.email}`} className="block break-all font-semibold text-navy-900 hover:text-gold-600">
                      {o.email}
                    </a>
                  )}
                </div>
              </RevealItem>
            ))}
            <RevealItem className="h-full bg-navy-900 p-7 text-white">
              <p className="eyebrow text-gold-300">General enquiries</p>
              <div className="mt-4 space-y-2 text-sm">
                {[generalContact.corporateEmail, generalContact.holdingEmail].map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block font-semibold hover:text-gold-300">
                    {e}
                  </a>
                ))}
                {generalContact.websites.map((w) => (
                  <a key={w} href={`https://${w}`} target="_blank" rel="noopener noreferrer" className="block text-white/75 hover:text-gold-300">
                    {w}
                  </a>
                ))}
              </div>
            </RevealItem>
          </RevealStagger>
        </Container>
      </section>

      {/* FORM */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Send a Message" title="Tell us about your enquiry" />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-text-secondary">
                  Our team will route your message to the right office and discipline.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
