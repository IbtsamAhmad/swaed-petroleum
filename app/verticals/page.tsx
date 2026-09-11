import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import VerticalShowcase from "@/components/VerticalShowcase";
import Button from "@/components/Button";
import { Reveal } from "@/lib/motion";
import { verticals } from "@/data/verticals";

export const metadata: Metadata = {
  title: "Verticals",
  description:
    "SWAED Petroleum's core verticals: pipelines & piping, field surface facilities, hot tapping & intelligent pigging, inspection & NDT, operations & maintenance, and engineering design.",
};

export default function VerticalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Verticals"
        title="Six disciplines. One integrated delivery model."
        subhead="From cross-country pipeline construction to advanced pipeline integrity services, SWAED's verticals cover the complete hydrocarbon infrastructure lifecycle."
        image="/images/industrial/pipe-rows-perspective.jpg"
        imageAlt="Rows of coated pipeline sections receding into the distance"
      />

      <section className="bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Explore" title="Select a vertical to learn more." size="lg" />
          <div className="mt-16">
            <VerticalShowcase items={verticals} tone="light" />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-4">
        <Container>
          <div className="divide-y divide-border">
            {verticals.map((v) => (
              <Reveal key={v.slug}>
                <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-baseline gap-6">
                    <span className="text-sm tabular text-gold-600">{v.index}</span>
                    <div>
                      <h3 className="font-display text-xl text-navy-950 md:text-2xl">{v.name}</h3>
                      <p className="mt-1 max-w-lg text-sm text-text-secondary">{v.summary}</p>
                    </div>
                  </div>
                  <Button href={`/verticals/${v.slug}`} variant="secondary">
                    View Details
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
