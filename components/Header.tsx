"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Verticals", href: "/verticals" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-swaed flex h-20 md:h-24 items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-3" aria-label="SWAED Petroleum home">
          <span
            className={cn(
              "relative block h-10 w-10 md:h-12 md:w-12 shrink-0 transition-all duration-500",
              !solid && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
            )}
          >
            <Image
              src="/images/brand/logo.png"
              alt="SWAED Petroleum logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </span>
          <span
            className={cn(
              "hidden sm:flex flex-col leading-none transition-colors duration-500",
              solid ? "text-navy-950" : "text-white"
            )}
          >
            <span className="font-display text-lg tracking-wide">SWAED</span>
            <span className="text-[0.6rem] tracking-[0.28em] uppercase opacity-70">Petroleum</span>
          </span>
        </Link>

        <nav
          className={cn(
            "hidden lg:flex items-center gap-9 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-500",
            solid ? "text-navy-900" : "text-white"
          )}
        >
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-draw py-2",
                  active && (solid ? "text-gold-600" : "text-gold-300")
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact-us"
            className={cn(
              "hidden md:inline-flex items-center gap-2 border px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
              solid
                ? "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
                : "border-white/50 text-white hover:border-gold-400 hover:text-gold-300"
            )}
          >
            Contact Us
          </Link>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-full transition-all duration-300",
                  solid ? "bg-navy-950" : "bg-white",
                  open && "top-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-[1.5px] w-full transition-all duration-300",
                  solid ? "bg-navy-950" : "bg-white",
                  open && "bottom-[7px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-0 h-dvh w-full bg-navy-950 lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <nav className="flex flex-col gap-1">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between border-b border-white/10 py-5 font-display text-4xl text-white"
                    >
                      {item.label}
                      <span className="text-gold-400 text-lg">0{NAV.indexOf(item) + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <Link
                  href="/contact-us"
                  className="inline-flex w-full items-center justify-center border border-gold-400 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold-300"
                >
                  Contact Us
                </Link>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Istanbul · Sudan · South Sudan · Iraq · UAE · Algeria
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
