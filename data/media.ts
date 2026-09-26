export type MediaItem = {
  slug: string;
  category: string;
  date?: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
  /** Related project or page */
  link?: { label: string; href: string };
};

export const mediaItems: MediaItem[] = [
  {
    slug: "spoc-fwko-tank-rehabilitation",
    category: "Projects",
    date: "2025",
    title: "SWAED begins crude tank rehabilitation for SPOC",
    excerpt:
      "Internal cleaning, grit sandblasting, painting and base sealing of the FWKO A & B crude tanks — SWAED's third operator client in South Sudan.",
    body: [
      "SWAED has started work for Sudd Petroleum Operating Company (SPOC) on the internal cleaning, sandblasting, painting and base sealing of the FWKO A & B crude tanks, running from 2025 to 2026.",
      "The scope covers procurement, mechanical and civil construction and commissioning: manual cleaning of the crude tanks, grit sandblasting and painting, and base sealing with the associated civil work.",
    ],
    image: "/images/projects/spoc-crude-tank-cleaning/05.jpg",
    imageAlt: "SWAED and SPOC project team at the FWKO tank farm",
    link: { label: "View the project", href: "/media/projects/spoc-crude-tank-cleaning" },
  },
  {
    slug: "arps-conference-paper",
    category: "Research & Development",
    title: "SWAED research presented at the Australasian Radiation Protection Society Conference",
    excerpt:
      "SWAED's R&D division contributed a peer-reviewed study on occupational radiography doses in oil & gas NDT.",
    body: [
      "Reflecting SWAED's foundational philosophy that it is more than a company, our R&D division operates under the direct leadership of SWAED's ownership, serving as the strategic engine for company-wide innovation.",
      "We do not merely adopt industry standards — we create them. Our contributions to the scientific community are regularly peer-reviewed and published globally, including our recent study, “Study of Selected Parameters Impact on the Occupational Doses in Industrial Radiography at Non-Destructive Testing in Oil and Gas,” presented at the Australasian Radiation Protection Society (ARPS) Conference.",
    ],
    image: "/images/industrial/process-modules.jpg",
    imageAlt: "Stainless steel processing modules",
    link: { label: "Research & Development", href: "/research-development" },
  },
  {
    slug: "south-sudan-three-oil-fields",
    category: "Company Update",
    date: "2022",
    title: "SWAED running projects at three South Sudan oil fields",
    excerpt:
      "Since 2022 SWAED has been running projects for SPOC, GPOC and DPOC — anchored by live repair of a 32-inch export crude pipeline.",
    body: [
      "Since 2022, SWAED has been running projects at three oil & gas fields in South Sudan, for Sudd Petroleum Operating Company (SPOC), Greater Pioneer Operating Company (GPOC) and Dar Petroleum Operating Company (DPOC).",
      "The centrepiece is the live repair of DPOC's 32-inch export crude pipeline — excavating, inspecting and repairing the line at located repair points without shutting it down.",
    ],
    image: "/images/people/team-group-plant.jpg",
    imageAlt: "SWAED field team gathered at a South Sudan plant",
    link: { label: "Similar projects executed", href: "/media#projects" },
  },
  {
    slug: "graduate-development-program",
    category: "Social Impact",
    title: "Empowerment through local content: the SWAED Graduate Development Program",
    excerpt:
      "SWAED recruits and trains high-potential local graduates through intensive technical training and hands-on mentorship.",
    body: [
      "True to our philosophy of being more than a company, SWAED looks far beyond commercial transactions and geographic borders, actively investing in local capacity building in every region where we operate.",
      "Central to this strategy is our specialized Graduate Development Program, where we recruit and nurture high-potential local graduates — equipping local talent with the expertise required to lead, manage, and sustain operations.",
    ],
    image: "/images/people/local-content-training.jpg",
    imageAlt: "SWAED supervisor training local graduates at a field site",
    link: { label: "Social impact", href: "/social-impact" },
  },
  {
    slug: "hse-iso-14001",
    category: "Certification",
    title: "SWAED holds ISO 9001 and ISO 14001:2015 certification",
    excerpt:
      "Certified quality and environmental management systems, with among the lowest LTI rates in oil & gas construction.",
    body: [
      "Health, Safety and Environment (HSE) is an integral part of SWAED's ethos and a core value embedded in everything we do.",
      "SWAED holds ISO 14001 certification and is among the companies in the Oil and Gas construction industry with the lowest LTI rates, due to its strong resolve and commitment to HSE. Bearing testament to this, SWAED has acquired numerous client awards for excellence in its HSE performance.",
    ],
    image: "/images/people/qhse-group-banner.jpg",
    imageAlt: "SWAED HSE commitment team at a field surface facility",
    link: { label: "About us — QHSE", href: "/about-us#qhse" },
  },
];

export function getMediaBySlug(slug: string) {
  return mediaItems.find((m) => m.slug === slug);
}
