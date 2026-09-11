"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Office = {
  label: string;
  city: string;
};

// Approximate relative positions on an equirectangular projection
// (lon -10..60, lat -5..45) covering the region SWAED operates in.
// Positions are illustrative of real relative geography, not a literal map.
const MARKERS = [
  { key: "turkey", label: "Turkey", sub: "Main Office — Istanbul", x: 55.7, y: 8 },
  { key: "algeria", label: "Algeria", sub: "SWAED Petroleum", x: 18.7, y: 16.5 },
  { key: "iraq", label: "Iraq", sub: "Thi Qar Branch", x: 80.4, y: 27.9 },
  { key: "uae", label: "UAE", sub: "Ajman Free Zone", x: 93.6, y: 39.2 },
  { key: "sudan", label: "Sudan", sub: "Khartoum Branch", x: 60.7, y: 59 },
  { key: "south-sudan", label: "South Sudan", sub: "Field Operations", x: 59.4, y: 80.3 },
];

export default function GlobalPresence({ offices }: { offices: Office[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <div className="relative aspect-[7/6] w-full overflow-hidden border border-white/10 bg-navy-900/40 sm:aspect-[4/3]">
          {/* graticule */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "8.33% 10%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent" />

          {MARKERS.map((m) => (
            <button
              key={m.key}
              onMouseEnter={() => setHovered(m.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(m.key)}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
              aria-label={m.label}
            >
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span
                  className={cn(
                    "absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60",
                    hovered && hovered !== m.key && "hidden"
                  )}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              <span
                className={cn(
                  "pointer-events-none absolute left-1/2 top-4 w-max -translate-x-1/2 rounded-sm bg-navy-950 px-3 py-1.5 text-left text-xs shadow-lg transition-all duration-200",
                  hovered === m.key ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                )}
              >
                <span className="block font-semibold text-white">{m.label}</span>
                <span className="block text-[0.7rem] text-white/50">{m.sub}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">
        <p className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none text-white">
          6<span className="text-gold-400">+</span>
        </p>
        <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/50">
          Countries of Active Operation
        </p>
        <ul className="mt-10 space-y-5 border-t border-white/10 pt-8">
          {offices.map((o) => (
            <li
              key={o.label}
              className="flex items-baseline justify-between border-b border-white/10 pb-5 text-white/80"
            >
              <span className="font-display text-lg md:text-xl">{o.city}</span>
              <span className="text-xs uppercase tracking-[0.12em] text-white/40">{o.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
