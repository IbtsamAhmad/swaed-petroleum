import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "on-dark";

const base =
  "group relative inline-flex items-center gap-2.5 whitespace-nowrap text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white px-7 py-4 hover:bg-navy-800",
  secondary:
    "border border-navy-900/25 text-navy-900 px-7 py-4 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
  ghost: "text-navy-900 px-0 py-2",
  "on-dark": "border border-white/25 text-white px-7 py-4 hover:border-gold-400 hover:text-gold-300",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M2 8H14M14 8L9 3M14 8L9 13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, variants[variant], className)}>
      {content}
    </button>
  );
}
