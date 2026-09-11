"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/data/media";

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors",
              active === cat
                ? "border-navy-950 bg-navy-950 text-white"
                : "border-border text-text-secondary hover:border-navy-900 hover:text-navy-950"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <Link key={item.slug} href={`/media/${item.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width:1024px) 32vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="eyebrow mt-5 text-gold-600">
              {item.category}
              {item.date ? ` · ${item.date}` : ""}
            </p>
            <h3 className="link-draw mt-2 text-balance font-display text-lg leading-snug text-navy-950">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
