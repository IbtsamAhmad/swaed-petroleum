import { services } from "@/data/services";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; number: string; featured?: boolean }[];
};

// Menu order follows descon.com, adapted to SWAED's sections.
export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Our Services",
    href: "/our-services",
    children: services.map((s, i) => ({
      label: s.short,
      href: `/our-services/${s.slug}`,
      number: s.number,
      featured: i < 2,
    })),
  },
  { label: "Media", href: "/media" },
  { label: "Social Impact", href: "/social-impact" },
  { label: "Careers", href: "/careers" },
  { label: "R&D", href: "/research-development" },
  { label: "Contact Us", href: "/contact-us" },
];

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}
