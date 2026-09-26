import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { NewsCard } from "@/components/Cards";
import { Reveal } from "@/lib/motion";
import { mediaItems, getMediaBySlug } from "@/data/media";

export function generateStaticParams() {
  return mediaItems.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getMediaBySlug(slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getMediaBySlug(slug);
  if (!item) notFound();
  const more = mediaItems.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={item.date ? `${item.category} · ${item.date}` : item.category}
        title={item.title}
        image={item.image}
        imageAlt={item.imageAlt}
        crumbs={[{ label: "Media", href: "/media#news" }]}
      />
      <article className="bg-white py-20 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-xl font-semibold leading-relaxed text-navy-900">{item.excerpt}</p>
            {item.body.map((p) => (
              <p key={p.slice(0, 20)} className="mt-6 leading-relaxed text-text-secondary">
                {p}
              </p>
            ))}
            <div className="relative mt-10 aspect-[16/9] overflow-hidden">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width:768px) 768px, 100vw" className="object-cover" />
            </div>
            {item.link && (
              <div className="mt-10">
                <Button href={item.link.href}>{item.link.label}</Button>
              </div>
            )}
          </Reveal>
        </Container>
      </article>
      <section className="bg-muted py-20">
        <Container>
          <SectionHeading title="More updates" />
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {more.map((m) => (
              <NewsCard key={m.slug} item={m} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
