import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "light",
  size = "md",
  className,
  index,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
  index?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "eyebrow flex items-center gap-3",
              align === "center" && "justify-center",
              tone === "dark" ? "text-gold-300" : "text-gold-600"
            )}
          >
            {index && <span className="tabular">{index}</span>}
            <span className={cn(index && "before:content-['—'] before:mr-3")}>{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 font-display font-normal leading-[1.05] text-balance",
            size === "lg"
              ? "text-[clamp(2.5rem,5vw,4.25rem)]"
              : "text-[clamp(2rem,3.6vw,3.25rem)]",
            tone === "dark" ? "text-white" : "text-navy-950"
          )}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
