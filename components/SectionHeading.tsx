import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && <p className={cn("eyebrow", tone === "dark" ? "text-gold-300" : "text-gold-600")}>{eyebrow}</p>}
      <h2
        className={cn(
          "title-rule mt-3 text-balance text-[clamp(1.75rem,3.2vw,2.6rem)] font-extrabold leading-[1.12] tracking-[-0.01em]",
          align === "center" && "title-rule-center",
          tone === "dark" ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-6 max-w-2xl leading-relaxed", align === "center" && "mx-auto", tone === "dark" ? "text-white/70" : "text-text-secondary")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
