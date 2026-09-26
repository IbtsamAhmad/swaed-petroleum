import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { company, generalContact, certifications } from "@/data/company";
import { offices } from "@/data/branches";
import { services } from "@/data/services";
import { NAV } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();
  const hq = offices[0];

  return (
    <footer className="bg-navy-700 text-white">
      <Container className="pb-8 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-lg font-bold">Get in Touch</h2>
            <ul className="mt-6 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <PinIcon />
                <span>
                  {hq.city}, {hq.country}
                  <br />
                  <span className="text-white/60">{hq.address}</span>
                </span>
              </li>
              {generalContact.phones.map((p) => (
                <li key={p} className="flex gap-3">
                  <PhoneIcon />
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold-300">
                    {p}
                  </a>
                </li>
              ))}
              {[generalContact.corporateEmail, generalContact.email].map((e) => (
                <li key={e} className="flex gap-3">
                  <MailIcon />
                  <a href={`mailto:${e}`} className="break-all hover:text-gold-300">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {certifications.map((c) => (
                <span key={c.name} className="border border-white/25 px-3 py-1.5 text-[0.7rem] font-bold tracking-[0.08em]">
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">Explore</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-gold-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white/60">Our Services</h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/our-services/${s.slug}`} className="text-white/80 hover:text-gold-300">
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <Link href="/" className="inline-flex items-center gap-3 bg-white p-3" aria-label="SWAED Petroleum home">
              <span className="relative block h-14 w-16">
                <Image src="/images/brand/logo.png" alt="SWAED Petroleum logo" fill sizes="64px" className="object-contain" />
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/75">
              SWAED operates across engineering, procurement, construction and commissioning for the oil &amp; gas
              industry — from cross-country pipelines and live pipeline repair to field surface facilities,
              integrity services and O&amp;M — with offices in Turkey, Sudan, South Sudan, Iraq and the UAE.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Founded in 2020. Headquartered in Istanbul, Turkey.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              {company.tagline} · {company.positioning}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-5">
            {generalContact.websites.map((w) => (
              <a key={w} href={`https://${w}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                {w}
              </a>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}

const iconCls = "mt-0.5 h-4 w-4 shrink-0 text-gold-300";

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" className={iconCls} aria-hidden="true">
      <path d="M8 15s5-4.6 5-8.5A5 5 0 0 0 3 6.5C3 10.4 8 15 8 15Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="6.5" r="1.8" fill="currentColor" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" className={iconCls} aria-hidden="true">
      <path d="M3 1.8h2.6l1.2 3.1-1.6 1.2a8 8 0 0 0 4.7 4.7l1.2-1.6 3.1 1.2V13a1.4 1.4 0 0 1-1.5 1.4A12.6 12.6 0 0 1 1.6 3.3 1.4 1.4 0 0 1 3 1.8Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" className={iconCls} aria-hidden="true">
      <rect x="1.5" y="3" width="13" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="m2 4 6 5 6-5" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
