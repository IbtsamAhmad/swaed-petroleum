"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { branches, kindLabel, map, type Branch, type BranchKind } from "@/data/branches";

// Labels that would collide with a neighbour are drawn on the left of the pin.
const LABEL_LEFT = new Set<Branch["key"]>(["saudi-arabia"]);
const LABELLED: BranchKind[] = ["hq", "branch", "presence", "upcoming"];

function Pin({ b, active }: { b: Branch; active: boolean }) {
  if (b.kind === "hq" || b.kind === "branch") {
    return (
      <span className="relative flex h-4 w-4 items-center justify-center">
        {(b.kind === "hq" || active) && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />}
        <span className={cn("relative rounded-full border-2 border-navy-950 bg-gold-400", b.kind === "hq" ? "h-4 w-4" : "h-3 w-3", active && "scale-125")} />
      </span>
    );
  }
  if (b.kind === "field") {
    return <span className={cn("block h-2.5 w-2.5 rotate-45 border border-navy-950 bg-sky-300", active && "scale-150")} />;
  }
  if (b.kind === "upcoming") {
    return <span className={cn("block h-3 w-3 rounded-full border-2 border-dashed border-gold-300", active && "scale-125")} />;
  }
  return <span className={cn("block h-3 w-3 rounded-full border-2 border-white bg-navy-700", active && "scale-125")} />;
}

export default function BranchMap({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<Branch["key"]>("istanbul");
  const current = branches.find((b) => b.key === selected) ?? branches[0];
  const listed = branches.filter((b) => b.kind !== "field");

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-8">
        <div className="relative w-full" style={{ aspectRatio: String(map.aspect) }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG, no optimisation needed */}
          <img src="/images/map/presence-map.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full select-none opacity-80" draggable={false} />
          {branches.map((b) => {
            const pos = map.pins[b.key];
            const active = b.key === selected;
            const left = LABEL_LEFT.has(b.key);
            return (
              <button
                key={b.key}
                type="button"
                onClick={() => setSelected(b.key)}
                onMouseEnter={() => setSelected(b.key)}
                onFocus={() => setSelected(b.key)}
                className={cn("group absolute -translate-x-1/2 -translate-y-1/2 p-1.5", active ? "z-20" : "z-10")}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                aria-label={`${b.city ?? b.country} — ${kindLabel[b.kind]}`}
                aria-pressed={active}
              >
                <Pin b={b} active={active} />
                {LABELLED.includes(b.kind) && (
                  <span
                    className={cn(
                      "pointer-events-none absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap bg-navy-950/80 px-1.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] md:block",
                      left ? "right-full mr-1" : "left-full ml-1",
                      active ? "text-gold-300" : "text-white/75"
                    )}
                  >
                    {b.city ?? b.country}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60">
          {(["hq", "branch", "presence", "field", "upcoming"] as BranchKind[]).map((k) => (
            <li key={k} className="flex items-center gap-2">
              <Pin b={{ key: "istanbul", kind: k, label: "", country: "" }} active={false} />
              {kindLabel[k]}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-4">
        <div className="border border-white/15 bg-navy-900/60 p-6" aria-live="polite">
          <p className="eyebrow text-gold-300">{kindLabel[current.kind]}</p>
          <h3 className="mt-2 text-2xl font-extrabold text-white">{current.city ? `${current.city}, ${current.country}` : current.country}</h3>
          <p className="mt-1 text-sm font-semibold text-white/70">{current.label}</p>
          {current.address && <p className="mt-4 text-sm leading-relaxed text-white/75">{current.address}</p>}
          {(current.phones || current.email) && (
            <div className="mt-4 space-y-1 text-sm">
              {current.phones?.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-white hover:text-gold-300">
                  {p}
                </a>
              ))}
              {current.email && (
                <a href={`mailto:${current.email}`} className="block break-all text-white hover:text-gold-300">
                  {current.email}
                </a>
              )}
            </div>
          )}
        </div>

        {!compact && (
          <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {listed.map((b) => (
              <li key={b.key}>
                <button
                  type="button"
                  onClick={() => setSelected(b.key)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 py-3 text-left text-sm transition-colors",
                    b.key === selected ? "text-gold-300" : "text-white/80 hover:text-white"
                  )}
                >
                  <span className="font-semibold">{b.city ? `${b.city}, ${b.country}` : b.country}</span>
                  <span className="text-[0.7rem] uppercase tracking-[0.1em] text-white/45">{kindLabel[b.kind]}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
