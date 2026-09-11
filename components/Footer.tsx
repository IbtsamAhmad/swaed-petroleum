import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { company, generalContact, offices, subsidiaries } from "@/data/company";
import { verticals } from "@/data/verticals";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Verticals", href: "/verticals" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <Container className="pt-20 pb-10 md:pt-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative block h-11 w-11 shrink-0">
                <Image
                  src="/images/brand/logo.png"
                  alt="SWAED Petroleum logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg">SWAED</span>
                <span className="text-[0.6rem] uppercase tracking-[0.28em] text-white/60">
                  Petroleum
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              {company.tagline} — a specialist EPCC contractor delivering onshore and offshore
              hydrocarbon infrastructure across Africa, Asia and Europe.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-300/80">
              {company.positioning}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow text-white/40">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-draw text-sm text-white/75">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow text-white/40">Verticals</h3>
            <ul className="mt-5 space-y-3">
              {verticals.slice(0, 6).map((v) => (
                <li key={v.slug}>
                  <Link href={`/verticals/${v.slug}`} className="link-draw text-sm text-white/75">
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow text-white/40">Head Office</h3>
            <div className="mt-5 space-y-1 text-sm leading-relaxed text-white/75">
              <p>{offices[0].city}</p>
              <p className="text-white/50">{offices[0].address}</p>
              <p className="mt-3">
                <a href={`mailto:${generalContact.email}`} className="link-draw break-all">
                  {generalContact.email}
                </a>
              </p>
              {offices[0].phones.map((p) => (
                <p key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="link-draw">
                    {p}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <h3 className="eyebrow text-white/40">Global Presence</h3>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/60">
            {offices.map((o) => (
              <span key={o.label}>{o.city}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <h3 className="eyebrow text-white/40">SWAED Group Companies</h3>
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-white/50 sm:grid-cols-2 lg:grid-cols-4">
            {subsidiaries.map((s) => (
              <span key={s.name + s.location}>
                {s.name} <span className="text-white/30">— {s.location}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>ISO 9001 Quality Management</span>
            <span>ISO 14001:2015 Environmental Management</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
