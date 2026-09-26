import { RevealStagger, RevealItem } from "@/lib/motion";

type Milestone = { year: string; title: string; text: string };

export default function Timeline({ items }: { items: Milestone[] }) {
  return (
    <RevealStagger className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
      <div className="absolute left-0 right-0 top-[0.4rem] hidden h-px bg-border lg:block" aria-hidden="true" />
      {items.map((m, i) => (
        <RevealItem key={m.title + i} className="relative border-l-2 border-gold-500 pl-5 lg:border-l-0 lg:pl-0">
          <span className="relative z-10 hidden h-3.5 w-3.5 rounded-full border-[3px] border-white bg-gold-500 ring-1 ring-gold-500 lg:block" />
          <p className="text-2xl font-extrabold text-navy-900 lg:mt-5">{m.year}</p>
          <h3 className="mt-2 text-sm font-extrabold leading-snug text-navy-950">{m.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{m.text}</p>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}
