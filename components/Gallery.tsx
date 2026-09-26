"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Photo = { src: string; alt: string };

export default function Gallery({ photos, className }: { photos: Photo[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const count = photos.length;

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + count) % count)),
    [count]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, step]);

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className={cn("grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4", className)}>
        {photos.map((p, i) => (
          <button
            key={p.src + i}
            type="button"
            onClick={() => setOpen(i)}
            className={cn(
              "group relative overflow-hidden bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500",
              i === 0 && count > 4 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
            )}
            aria-label={`Open photo: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes={i === 0 && count > 4 ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 25vw, 50vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-navy-950/0 transition-colors group-hover:bg-navy-950/20" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy-950/95"
            onClick={() => setOpen(null)}
          >
            <div className="flex items-center justify-between px-4 py-3 text-sm text-white/70 md:px-8">
              <span>
                {(open ?? 0) + 1} / {count}
              </span>
              <button type="button" onClick={() => setOpen(null)} className="p-2 text-2xl leading-none text-white" aria-label="Close">
                ×
              </button>
            </div>
            <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              {count > 1 && (
                <>
                  <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20 md:left-6">
                    ‹
                  </button>
                  <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20 md:right-6">
                    ›
                  </button>
                </>
              )}
            </div>
            <p className="px-4 py-4 text-center text-sm text-white/80 md:px-8">{current.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
