import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import NewsSection from "@/components/NewsSection";
import MediaGrid from "@/components/MediaGrid";
import { mediaItems } from "@/data/media";

export const metadata: Metadata = {
  title: "Media",
  description:
    "News, research and company updates from SWAED Petroleum — covering R&D, sustainability, certifications and field projects.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Stories from the field and beyond."
        subhead="Research, certifications, community initiatives and project milestones from across the SWAED group."
        image="/images/people/silhouette-sunset-pipeline.jpg"
        imageAlt="Field engineers silhouetted at sunset beside pipeline sections"
        compact
      />

      <section className="bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Featured" title="Latest coverage." size="lg" />
          <div className="mt-16">
            <NewsSection items={mediaItems} />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="All Media" title="Every story." size="lg" />
          <div className="mt-16">
            <MediaGrid items={mediaItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
