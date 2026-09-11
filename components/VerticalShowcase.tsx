"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Vertical } from "@/data/verticals";

export default function VerticalShowcase({
  items,
  tone = "dark",
}: {
  items: Vertical[];
  tone?: "dark" | "light";
}) {
  const [active, setActive] = useState(0);
  const current = items[active];
  const isDark = tone === "dark";

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
      <div className="relative order-2 h-[320px] overflow-hidden lg:order-1 lg:col-span-7 lg:h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.imageAlt}
              fill
              sizes="(min-width:1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
          <span className="eyebrow text-gold-300">{current.index}</span>
          <p className="mt-2 max-w-md text-balance text-lg leading-snug text-white md:text-xl">
            {current.summary}
          </p>
          <Link
            href={`/verticals/${current.slug}`}
            className="link-draw mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white"
          >
            View capability
          </Link>
        </div>
      </div>

      <div className="order-1 lg:order-2 lg:col-span-5">
        <ul className={cn("border-t", isDark ? "border-white/15" : "border-border")}>
          {items.map((item, i) => {
            const isActive = active === i;
            return (
              <li key={item.slug} className={cn("border-b", isDark ? "border-white/15" : "border-border")}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-full w-[3px] bg-gold-500 transition-transform duration-300 origin-top",
                      isActive ? "scale-y-100" : "scale-y-0"
                    )}
                  />
                  <span className="flex items-baseline gap-4 pl-4">
                    <span
                      className={cn(
                        "text-xs tabular transition-colors",
                        isActive ? "text-gold-500" : isDark ? "text-white/35" : "text-text-tertiary"
                      )}
                    >
                      {item.index}
                    </span>
                    <span
                      className={cn(
                        "font-display text-xl transition-all duration-300 md:text-2xl",
                        isActive
                          ? cn("translate-x-1", isDark ? "text-white" : "text-navy-950")
                          : isDark
                            ? "text-white/45"
                            : "text-text-secondary"
                      )}
                    >
                      {item.name}
                    </span>
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={cn(
                      "mr-4 shrink-0 transition-all duration-300",
                      isActive ? "translate-x-0 text-gold-500 opacity-100" : "-translate-x-2 opacity-0",
                      !isActive && (isDark ? "text-white" : "text-navy-950")
                    )}
                  >
                    <path
                      d="M2 8H14M14 8L9 3M14 8L9 13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
