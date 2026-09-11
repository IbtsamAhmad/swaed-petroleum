import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { Reveal } from "@/lib/motion";
import { mediaItems, getMediaBySlug } from "@/data/media";

export function generateStaticParams() {
  return mediaItems.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getMediaBySlug(slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function MediaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getMediaBySlug(slug);
  if (!item) notFound();

  const more = mediaItems.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative flex h-[62vh] min-h-[440px] w-full items-end overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image src={item.image} alt={item.imageAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/20" />
        </div>
        <Container className="relative z-10 pb-16 pt-40">
          <Reveal>
            <p className="eyebrow text-gold-300">
              {item.category}
              {item.date ? ` · ${item.date}` : ""}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl text-balance font-display font-normal leading-[1.05] text-white text-[clamp(2rem,4.6vw,3.75rem)]">
              {item.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <p className="text-balance text-lg leading-relaxed text-navy-900">{item.excerpt}</p>
            </Reveal>
            <div className="mt-10 space-y-6">
              {item.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="leading-relaxed text-text-secondary">{p}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-16 border-t border-border pt-8">
              <Link
                href="/media"
                className="link-draw inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-navy-950"
              >
                ← Back to Media
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-20 md:py-28">
        <Container>
          <p className="eyebrow text-gold-600">Continue Reading</p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {more.map((m) => (
              <Link key={m.slug} href={`/media/${m.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    fill
                    sizes="(min-width:1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-4 text-gold-600">{m.category}</p>
                <h3 className="link-draw mt-2 font-display text-base leading-snug text-navy-950">
                  {m.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
