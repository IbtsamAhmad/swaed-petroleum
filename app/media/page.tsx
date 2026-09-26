import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProjectBrowser from "@/components/ProjectBrowser";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { NewsCard } from "@/components/Cards";
import { RevealStagger, RevealItem } from "@/lib/motion";
import { projects } from "@/data/projects";
import { mediaItems } from "@/data/media";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Similar projects executed by SWAED for DPOC, GPOC and SPOC in South Sudan — live pipeline repair, flowline repair, EDS, tie-ins and tank rehabilitation — plus news and photos.",
};

export default function MediaPage() {
  // Field photos from every executed project, for the photo wall.
  const photos = projects.filter((p) => p.gallery.length > 2).flatMap((p) => p.gallery.slice(0, 3));

  return (
    <>
      <PageHero
        title="Media"
        subhead="Similar projects executed, news and photos from the field."
        image="/images/projects/spoc-crude-tank-cleaning/05.jpg"
        imageAlt="SWAED project team at the FWKO tank farm in South Sudan"
      />

      <section id="projects" className="scroll-mt-28 bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Experience List"
            title="Similar projects executed"
            intro="Running projects at three oil & gas fields in South Sudan since 2022 — for Sudd (SPOC), Greater Pioneer (GPOC) and Dar Petroleum (DPOC) operating companies."
          />
          <div className="mt-10">
            <ProjectBrowser projects={projects} />
          </div>
        </Container>
      </section>

      <section id="news" className="scroll-mt-28 bg-muted py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="News & Events" title="Latest updates" />
          <RevealStagger className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((m) => (
              <RevealItem key={m.slug}>
                <NewsCard item={m} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section id="photos" className="scroll-mt-28 bg-white py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Photo Gallery" title="From our sites" />
          <Gallery photos={photos} className="mt-10" />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
