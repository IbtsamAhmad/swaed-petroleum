"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV, isActive } from "@/lib/nav";
import { services } from "@/data/services";

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="SWAED Petroleum home">
      <span className="relative block h-11 w-10 md:h-12 md:w-11">
        <Image src="/images/brand/mark.png" alt="" fill sizes="44px" className="object-contain" priority />
      </span>
      <span className="flex flex-col leading-none">
        <span className="relative block h-6 w-[5.6rem] md:h-7 md:w-[6.5rem]">
          <Image src="/images/brand/wordmark.png" alt="SWAED" fill sizes="104px" className="object-contain object-left" priority />
        </span>
        <span className="mt-0.5 text-[0.55rem] font-bold uppercase tracking-[0.34em] text-navy-700">Petroleum</span>
      </span>
    </Link>
  );
}

function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  const [featured, rest] = [services.slice(0, 2), services.slice(2)];
  return (
    <div className="container-swaed grid grid-cols-12 gap-8 py-8">
      <div className="col-span-5 grid grid-cols-2 gap-4">
        {featured.map((s, i) => (
          <Link
            key={s.slug}
            href={`/our-services/${s.slug}`}
            onClick={onNavigate}
            className="group relative block aspect-[4/5] overflow-hidden bg-navy-950"
          >
            <Image src={s.image} alt="" fill sizes="240px" className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="text-xs font-bold text-gold-300">3.{i + 1}</span>
              <p className="mt-1 text-base font-bold leading-snug text-white">{s.short}</p>
              <p className="mt-1 line-clamp-2 text-xs text-white/70">{s.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="col-span-7">
        <p className="eyebrow text-text-tertiary">All services</p>
        <ul className="mt-4 grid grid-cols-2 gap-x-8">
          {rest.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/our-services/${s.slug}`}
                onClick={onNavigate}
                className="group flex items-baseline gap-3 border-b border-border py-3 text-sm font-semibold text-navy-900 hover:text-gold-600"
              >
                <span className="text-xs tabular text-gold-600">{s.number}</span>
                {s.short}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/our-services"
          onClick={onNavigate}
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-navy-900 hover:text-gold-600"
        >
          Overview of our services →
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Menus remember the path they were opened on, so navigating closes them.
  const [mobileOpenOn, setMobileOpenOn] = useState<string | null>(null);
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const mobileOpen = mobileOpenOn === pathname;
  const menuOpen = menuOpenOn === pathname;
  const setMobileOpen = (v: boolean | ((prev: boolean) => boolean)) =>
    setMobileOpenOn((typeof v === "function" ? v(mobileOpen) : v) ? pathname : null);
  const setMenuOpen = (v: boolean) => setMenuOpenOn(v ? pathname : null);
  const [mobileServices, setMobileServices] = useState(false);
  const [panelTop, setPanelTop] = useState(72);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpenOn(null);
        setMobileOpenOn(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenuOpen(false), 150);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-40 bg-white transition-shadow duration-300",
        scrolled ? "shadow-[0_2px_18px_rgba(10,21,38,0.08)]" : "border-b border-border"
      )}
    >
      <div className="container-swaed flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            const cls = cn(
              "relative flex items-center gap-1 px-3 py-2 text-[0.78rem] font-bold uppercase tracking-[0.08em] transition-colors",
              active ? "text-navy-900" : "text-navy-900/70 hover:text-navy-900",
              "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-gold-500 after:transition-transform",
              active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
            );
            if (!item.children) {
              return (
                <Link key={item.href} href={item.href} className={cls}>
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.href} onMouseEnter={openMenu} onMouseLeave={scheduleClose} className="relative">
                <Link href={item.href} className={cls} aria-expanded={menuOpen} aria-haspopup="true" onFocus={openMenu}>
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={cn("transition-transform", menuOpen && "rotate-180")}>
                    <path d="M1.5 3.5 5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </nav>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => {
            // The ticker above the header may be in view; start the panel below the header either way.
            if (headerRef.current) setPanelTop(headerRef.current.getBoundingClientRect().bottom);
            setMobileOpen((v) => !v);
          }}
          className="flex h-11 w-11 items-center justify-center border border-border xl:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span className={cn("absolute left-0 top-0 h-[2px] w-full bg-navy-900 transition-all", mobileOpen && "top-[6px] rotate-45")} />
            <span className={cn("absolute left-0 top-[6px] h-[2px] w-full bg-navy-900 transition-opacity", mobileOpen && "opacity-0")} />
            <span className={cn("absolute bottom-0 left-0 h-[2px] w-full bg-navy-900 transition-all", mobileOpen && "bottom-[6px] -rotate-45")} />
          </span>
        </button>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden border-t border-border bg-white shadow-[0_18px_40px_rgba(10,21,38,0.12)] xl:block"
          >
            <ServicesMenu onNavigate={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ top: panelTop }}
            className="fixed inset-x-0 bottom-0 overflow-y-auto border-t border-border bg-white xl:hidden"
          >
            <ul className="container-swaed py-4">
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-border">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileServices((v) => !v)}
                        aria-expanded={mobileServices}
                        className="flex w-full items-center justify-between py-4 text-left text-base font-bold uppercase tracking-[0.06em] text-navy-900"
                      >
                        {item.label}
                        <span className="text-xl text-gold-600">{mobileServices ? "−" : "+"}</span>
                      </button>
                      {mobileServices && (
                        <ul className="pb-4">
                          <li>
                            <Link href={item.href} className="block py-2 text-sm font-semibold text-navy-900">
                              Overview
                            </Link>
                          </li>
                          {item.children.map((c, i) => (
                            <li key={c.href}>
                              <Link href={c.href} className="flex gap-3 py-2 text-sm text-text-secondary">
                                <span className="w-7 text-gold-600">{c.featured ? `3.${i + 1}` : c.number}</span>
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-4 text-base font-bold uppercase tracking-[0.06em]",
                        isActive(pathname, item.href) ? "text-gold-600" : "text-navy-900"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
