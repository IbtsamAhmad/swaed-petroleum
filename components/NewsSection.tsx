import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/lib/motion";
import type { MediaItem } from "@/data/media";

export default function NewsSection({ items }: { items: MediaItem[] }) {
  const [featured, ...rest] = items;

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
      <Reveal className="lg:col-span-7">
        <Link href={`/media/${featured.slug}`} className="group block">
          <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />
          </div>
          <p className="eyebrow mt-6 text-gold-600">
            {featured.category}
            {featured.date ? ` · ${featured.date}` : ""}
          </p>
          <h3 className="mt-3 max-w-xl text-balance font-display text-2xl leading-tight text-navy-950 md:text-3xl">
            {featured.title}
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-secondary">
            {featured.excerpt}
          </p>
        </Link>
      </Reveal>

      <div className="flex flex-col gap-10 lg:col-span-5">
        {rest.slice(0, 3).map((item, i) => (
          <Reveal key={item.slug} delay={0.1 + i * 0.08}>
            <Link href={`/media/${item.slug}`} className="group flex gap-5 border-t border-border pt-6">
              <div className="relative h-20 w-28 shrink-0 overflow-hidden md:h-24 md:w-32">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="128px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div>
                <p className="eyebrow text-gold-600">{item.category}</p>
                <h4 className="link-draw mt-2 text-balance font-display text-base leading-snug text-navy-950 md:text-lg">
                  {item.title}
                </h4>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
