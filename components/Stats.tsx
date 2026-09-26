"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/lib/motion";

type Stat = {
  value: number;
  suffix?: string;
  unit?: string;
  label: string;
  detail?: string;
};

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular">
      {reduce ? value : display}
      {suffix}
    </span>
  );
}

export default function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 0.08}>
          <div className="relative border-l-2 border-gold-500 pl-5">
            <div className="flex items-baseline gap-1 text-[clamp(2.75rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.02em] text-navy-900">
              <Counter value={item.value} suffix={item.suffix} />
              {item.unit && (
                <span className="ml-2 text-[clamp(1rem,1.6vw,1.35rem)] font-bold uppercase tracking-wide text-gold-600">
                  {item.unit}
                </span>
              )}
            </div>
            <p className="mt-4 text-sm font-semibold leading-snug text-navy-900">{item.label}</p>
            {item.detail && (
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.detail}</p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
