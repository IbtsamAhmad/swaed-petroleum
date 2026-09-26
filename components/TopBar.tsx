import Link from "next/link";
import { mediaItems } from "@/data/media";
import { generalContact } from "@/data/company";

// Descon-style scrolling "latest updates" strip above the header.
export default function TopBar() {
  const items = [...mediaItems, ...mediaItems];
  return (
    <div className="relative z-50 hidden h-9 items-center overflow-hidden border-b border-border bg-muted text-[0.75rem] text-navy-900 md:flex">
      <span className="relative z-10 flex h-full shrink-0 items-center bg-navy-900 px-5 font-bold uppercase tracking-[0.14em] text-white">
        Latest
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pl-6 hover:[animation-play-state:paused]">
          {items.map((m, i) => (
            <Link key={m.slug + i} href={`/media/news/${m.slug}`} className="hover:text-gold-600" tabIndex={i >= mediaItems.length ? -1 : 0}>
              <span className="font-semibold text-gold-600">{m.category}</span>
              <span className="mx-2 text-text-tertiary">·</span>
              {m.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="relative z-10 hidden shrink-0 items-center gap-5 bg-muted px-5 lg:flex">
        <a href={`mailto:${generalContact.corporateEmail}`} className="hover:text-gold-600">
          {generalContact.corporateEmail}
        </a>
        <a href={`tel:${generalContact.phones[0].replace(/\s/g, "")}`} className="hover:text-gold-600">
          {generalContact.phones[0]}
        </a>
      </div>
    </div>
  );
}
