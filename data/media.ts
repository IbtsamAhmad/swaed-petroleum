export type MediaItem = {
  slug: string;
  category: string;
  date?: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const mediaItems: MediaItem[] = [
  {
    slug: "arps-conference-paper",
    category: "Research & Development",
    title:
      "SWAED research presented at the Australasian Radiation Protection Society Conference",
    excerpt:
      "SWAED's R&D division contributed a peer-reviewed study on occupational radiography doses in oil & gas NDT to the international scientific community.",
    body: [
      "Reflecting SWAED's foundational philosophy that it is more than a company, our R&D division operates under SWAED's direct ownership, serving as the strategic engine for company-wide innovation.",
      "We do not merely adopt industry standards — we create them. Our R&D team actively solves complex operational challenges for our clients through rigorous applied research. Our contributions to the scientific community are regularly peer-reviewed and published globally, including our recent study, “Study of Selected Parameters Impact on the Occupational Doses in Industrial Radiography at Non-Destructive Testing in Oil and Gas,” presented at the Australasian Radiation Protection Society (ARPS) Conference.",
      "Through continuous investment in research, technology, and engineering, the department has achieved exponential growth within a single year, giving rise to two key operational pillars: the SWAED Manufacturing Division, engineered to produce specialized, high-precision industrial solutions locally, and SWA Tech Co., a specialized technology arm focused on driving digital transformation across Artificial Intelligence (AI), Advanced IT Infrastructure, and Industrial Multimedia solutions.",
    ],
    image: "/images/industrial/process-modules.jpg",
    imageAlt: "Interior view of stainless steel processing modules used in industrial testing",
    featured: true,
  },
  {
    slug: "south-sudan-operations-2022",
    category: "Company Update",
    date: "2022",
    title: "SWAED begins operations across three South Sudan oil fields",
    excerpt:
      "SWAED commenced running projects at three oil & gas fields in South Sudan — with GPOC and DPOC — anchored by a landmark 300+ km life pipeline repair.",
    body: [
      "Since 2022, SWAED has been running projects across oil & gas fields in South Sudan, working with Greater Pioneer Operating Company (GPOC) and Dar Petroleum Operating Company (DPOC).",
      "The centerpiece of this work is SWAED's execution of the South Sudan – Sudan cross-country life pipeline repair project — an underground 32-inch pipeline covering more than 300 km, running from 2022 to 2026 — delivered without the emergency shutdowns typically required for repairs of this scale.",
    ],
    image: "/images/people/silhouette-sunset-pipeline.jpg",
    imageAlt: "Engineers silhouetted at sunset beside pipeline sections in South Sudan",
    featured: true,
  },
  {
    slug: "local-content-graduate-program",
    category: "Community & Local Content",
    title: "Empowerment through local content: the SWAED Graduate Development Program",
    excerpt:
      "SWAED invests in local capacity building through a specialized Graduate Development Program, training high-potential local graduates in the field.",
    body: [
      "True to our philosophy of being more than a company, SWAED looks far beyond commercial transactions and geographic borders. We are deeply committed to driving long-term value in every region where we operate by actively investing in local capacity building.",
      "Central to this strategy is our specialized Graduate Development Program, where we recruit and nurture high-potential local graduates. Through intensive technical training and hands-on mentorship, we equip local talent with the expertise required to lead, manage, and sustain operations — fostering national self-reliance and empowering the communities we serve.",
    ],
    image: "/images/people/local-content-training.jpg",
    imageAlt: "SWAED supervisor training local graduates in protective coveralls at a field site",
  },
  {
    slug: "hse-iso-14001",
    category: "Certification",
    title: "SWAED reaffirms its HSE excellence with ISO 14001:2015 certification",
    excerpt:
      "SWAED holds ISO 14001:2015 environmental management certification and reports among the lowest LTI rates in the oil & gas construction sector.",
    body: [
      "Health, Safety and Environment (HSE) is an integral part of SWAED's ethos and a core value embedded in everything we do to ensure that risks to health and safety are properly controlled and minimized.",
      "SWAED holds ISO 14001:2015 certification and is among the companies in the Oil and Gas construction industry with the lowest LTI rates, due to its strong resolve and commitment to HSE. Bearing testament to this, SWAED has acquired numerous client awards for excellence in its HSE performance.",
    ],
    image: "/images/people/qhse-group-banner.jpg",
    imageAlt: "SWAED HSE commitment team photo at a field surface facility",
  },
  {
    slug: "bapco-hot-tapping-2019",
    category: "Projects",
    date: "2019",
    title: "Bapco 32\" export pipeline hot tapping project, Sudan",
    excerpt:
      "Working with a world-class technical partner, SWAED delivered advanced hot tapping services on a 32-inch export pipeline in Sudan.",
    body: [
      "In collaboration with our world-class technical partner — bringing over three decades of field experience and a $270M+ project portfolio — SWAED provides advanced hot tapping services for trunklines, pipelines, and piping systems, ensuring safe, continuous operations across all project scales.",
      "This capability was demonstrated on the Bapco 32\" export pipeline hot tapping project in Sudan in 2019.",
    ],
    image: "/images/people/pipeline-repair-closeup.jpg",
    imageAlt: "Technician performing hot tapping work on a large-diameter export pipeline",
  },
];

export function getMediaBySlug(slug: string) {
  return mediaItems.find((m) => m.slug === slug);
}
