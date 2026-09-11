import { Reveal } from "@/lib/motion";

type Milestone = { year: string; title: string; text: string };

export default function Timeline({ items }: { items: Milestone[] }) {
  return (
    <div className="relative">
      <div className="hairline hidden md:block absolute left-[7.5rem] top-0 h-full w-px bg-border" />
      <ol className="space-y-0">
        {items.map((m, i) => (
          <li key={m.year + i} className="group relative border-t border-border py-9 md:py-11">
            <Reveal>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <span className="font-display text-3xl text-navy-950 md:text-4xl">{m.year}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-xl text-navy-950 md:text-2xl">{m.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
                    {m.text}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <div className="hairline" />
    </div>
  );
}
