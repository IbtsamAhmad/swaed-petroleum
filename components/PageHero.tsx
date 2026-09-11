import Image from "next/image";
import { Reveal } from "@/lib/motion";

export default function PageHero({
  eyebrow,
  title,
  subhead,
  image,
  imageAlt,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  subhead?: string;
  image: string;
  imageAlt: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative flex w-full items-end overflow-hidden bg-navy-950 ${
        compact ? "h-[60vh] min-h-[440px]" : "h-[78vh] min-h-[520px]"
      }`}
    >
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/25" />
      </div>
      <div className="container-swaed relative z-10 pb-16 pt-40 md:pb-20">
        <Reveal>
          <p className="eyebrow text-gold-300">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl text-balance font-display font-normal leading-[1.02] text-white text-[clamp(2.25rem,5.4vw,4.75rem)]">
            {title}
          </h1>
        </Reveal>
        {subhead && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-balance text-white/70">{subhead}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
