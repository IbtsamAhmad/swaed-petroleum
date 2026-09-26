// Executed / running projects — "Similar Projects" (brochure pp.19–28)
// and the SWAED Experience List. Photos in public/images/projects/<slug>/.

export type Project = {
  slug: string;
  client: string;
  clientShort: string;
  title: string;
  summary: string;
  location: string;
  duration: string;
  contract?: string;
  /** Headline spec shown on cards, e.g. "210 km · 32\"" */
  highlight?: string;
  scope: string[];
  services: string[];
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  /** Reference from our technical partner rather than SWAED's own contract */
  partnerReference?: boolean;
};

const g = (slug: string, alts: string[]) =>
  alts.map((alt, i) => ({ src: `/images/projects/${slug}/${String(i + 1).padStart(2, "0")}.jpg`, alt }));

export const projects: Project[] = [
  {
    slug: "dpoc-export-pipeline-repair",
    client: "Dar Petroleum Operating Company",
    clientShort: "DPOC",
    title: "Live Export Crude Pipeline Repair",
    summary:
      "EPC provision of pipeline repair & maintenance for the DPOC export pipeline and interfield pipeline — live repair of 210 km of 32-inch, 3LPP-coated crude line.",
    location: "South Sudan — Melut Oil Field",
    duration: "2022 – 2026",
    contract: "Unit rate · RO base (≈ 3.1M)",
    highlight: "210 km · 32\" · 3LPP",
    scope: [
      "Engineering for each repair point",
      "Procurement of sleeves, composite repair material and Stopaq coating",
      "Excavation of the underground 32-inch pipeline at located repair points",
      "Coating removal and NDT to determine the repair method",
      "Live repair and coating reinstatement across a 210 km length of pipeline",
    ],
    services: ["live-pipeline-repair", "cross-country-pipeline", "earth-moving-civil"],
    image: "/images/projects/dpoc-export-pipeline-repair/01.jpg",
    imageAlt: "Exposed 32-inch export crude pipeline running along an open trench",
    gallery: g("dpoc-export-pipeline-repair", [
      "Exposed 32-inch export crude pipeline running along an open trench",
      "Welders working on both sides of the exposed pipeline",
      "Welder completing a repair sleeve weld",
      "Technician recording repair data beside newly applied coating",
      "Repair sleeve held by chain clamps during welding",
      "SWAED and client team at the excavated repair point",
    ]),
  },
  {
    slug: "gpoc-flowline-trunkline-repair",
    client: "Greater Pioneer Operating Company",
    clientShort: "GPOC",
    title: "Flowline & Trunkline Normal Repair",
    summary:
      "EPC provision of flowline and trunkline normal repair work across the Unity oil field, keeping gathering lines in service.",
    location: "South Sudan — Unity Oil Field",
    duration: "2023 – 2026",
    contract: "Unit rate · RO base",
    highlight: "Live flowline repair",
    scope: [
      "Engineering for each repair",
      "Procurement of sleeves, composite repair material and Stopaq coating",
      "Excavation of underground flowlines and trunklines of different sizes",
      "Coating removal and NDT to determine the repair method",
    ],
    services: ["live-pipeline-repair", "inspection-ndt"],
    image: "/images/projects/gpoc-flowline-trunkline-repair/01.jpg",
    imageAlt: "SWAED technician working on a flowline inside an excavation",
    gallery: g("gpoc-flowline-trunkline-repair", [
      "SWAED technician working on a flowline inside an excavation",
      "Repaired flowlines with fresh coating ready for backfill",
      "Handheld instrument reading taken on an exposed line",
      "Close-up of the instrument reading on the flowline",
      "Inspector working between two parallel flowlines",
    ]),
  },
  {
    slug: "dpoc-wengi-water-disposal-tie-in",
    client: "Dar Petroleum Operating Company",
    clientShort: "DPOC",
    title: "Water Disposal Tie-In — Wengi-3 & Wengi-9, Paloch FSF",
    summary:
      "Melut Basin Oil Development Project: maintenance and construction services for upstream production facilities — a new water disposal line tied in to Wengi-3 and Wengi-9.",
    location: "South Sudan — Paloch FSF, Melut Basin",
    duration: "2023 – 2026",
    contract: "RO base",
    highlight: "Cut, tie-in & hydrotest",
    scope: [
      "Manpower, equipment, tools and machinery for fabrication, dismantling, cut and tie-in",
      "Work execution plan, field re-verification and route survey",
      "Pipeline laydown, installation and hydrotest at the Wengi-3 & Wengi-9 well sites",
      "Re-painting of affected and welded areas on the new water disposal line",
      "Pipe supports for the aboveground line at suitable elevations",
      "Transportation and lifting of free-issue material",
    ],
    services: ["field-surface-facilities", "cross-country-pipeline"],
    image: "/images/projects/dpoc-wengi-water-disposal-tie-in/01.jpg",
    imageAlt: "SWAED crew on scaffolding performing a tie-in at a well site",
    gallery: g("dpoc-wengi-water-disposal-tie-in", [
      "SWAED crew on scaffolding performing a tie-in at a well site",
      "Team gathered at a wellhead during tie-in works",
      "Welder cutting pipe at the water disposal line",
    ]),
  },
  {
    slug: "gpoc-eds-toma-south",
    client: "Greater Pioneer Operating Company",
    clientShort: "GPOC",
    title: "Electrical Distribution System for New Infill Well — Toma South",
    summary:
      "EPCC for field surface facilities: tie-in of a new infill well at Toma South (TS-040, WO-EDS-065) to the existing EDS through a nearby RMU with 33 kV underground cable.",
    location: "South Sudan — Unity Oil Field",
    duration: "2022 – 2026",
    contract: "Work-order base",
    highlight: "33 kV · ~280 m HV cable",
    scope: [
      "Route survey, cable route profile and coordination with other utilities",
      "Pipe-location detection before excavation",
      "Excavation by excavator and hand, sand bedding, warning tape, backfill and compaction",
      "Supply and laying of ~280 m of 33 kV CU/XLPE/SWA/PVC HV cable",
      "Termination and testing of HV cables at both ends; connection to the existing RMU",
      "Integration into existing SCADA, communication and protection systems",
      "Commissioning, energization, as-built drawings and handover",
    ],
    services: ["field-surface-facilities", "earth-moving-civil"],
    image: "/images/projects/gpoc-eds-toma-south/01.jpg",
    imageAlt: "Excavator opening the HV cable trench at Toma South",
    gallery: g("gpoc-eds-toma-south", [
      "Excavator opening the HV cable trench at Toma South",
      "Cable protection slabs laid along the trench",
      "Engineer at the ring main unit switchgear",
      "Coiled 33 kV cable ready for laying",
      "Cable laid on sand bedding in the trench",
      "HV cable running along the trench bottom",
      "Trench excavation continuing across the field",
      "Excavator and crew working along the cable route",
      "Cable termination at the well site",
      "Cable coil at the excavation before pulling",
    ]),
  },
  {
    slug: "spoc-crude-tank-cleaning",
    client: "Sudd Petroleum Operating Company",
    clientShort: "SPOC",
    title: "Crude Tank Internal Cleaning, Sandblasting, Painting & Base Sealing — FWKO A & B",
    summary:
      "Procurement, mechanical and civil construction and commissioning for the rehabilitation of the FWKO A & B crude tanks.",
    location: "South Sudan",
    duration: "2025 – 2026",
    highlight: "FWKO A & B tanks",
    scope: [
      "Manual cleaning of crude tanks",
      "Grit sandblasting and painting",
      "Base sealing and civil work",
      "Commissioning and handover",
    ],
    services: ["tank-cleaning-painting"],
    image: "/images/projects/spoc-crude-tank-cleaning/01.jpg",
    imageAlt: "SWAED and client team at the FWKO tank site",
    gallery: g("spoc-crude-tank-cleaning", [
      "SWAED and client team at the FWKO tank site",
      "Inspecting the cleaned internal tank wall",
      "Crew assembled before the day's tank work",
      "SWAED team beside tank piping",
      "Full project team at the tank farm",
    ]),
  },
  {
    slug: "dpoc-maintenance-construction",
    client: "Dar Petroleum Operating Company",
    clientShort: "DPOC",
    title: "Maintenance & Construction Services — Civil, Mechanical, Instrument & Electrical",
    summary: "EPCC provision of maintenance and construction services covering civil, mechanical, instrument and electrical work.",
    location: "South Sudan",
    duration: "3+1 years · 2023 – 2026",
    contract: "4M",
    highlight: "Multi-discipline O&M",
    scope: ["Civil works", "Mechanical works", "Instrumentation works", "Electrical works"],
    services: ["operation-maintenance", "field-surface-facilities"],
    image: "/images/people/scaffold-technician.jpg",
    imageAlt: "SWAED technician on scaffolding inside a process facility",
    gallery: [{ src: "/images/people/scaffold-technician.jpg", alt: "SWAED technician on scaffolding inside a process facility" }],
  },
  {
    slug: "gpoc-construction-maintenance",
    client: "Greater Pioneer Operating Company",
    clientShort: "GPOC",
    title: "Construction, Maintenance & Minor Engineering Services",
    summary: "EPCC for provision of construction, maintenance and minor engineering services, plus field surface facilities work.",
    location: "South Sudan — Unity Oil Field",
    duration: "2+1 years · 2023 – 2026",
    contract: "Work-order base",
    highlight: "FSF works",
    scope: ["Construction services", "Maintenance services", "Minor engineering", "Field surface facilities work"],
    services: ["field-surface-facilities", "operation-maintenance"],
    image: "/images/people/trenching-excavator.jpg",
    imageAlt: "SWAED supervisor and excavator at an FSF excavation",
    gallery: [
      { src: "/images/people/trenching-excavator.jpg", alt: "SWAED supervisor and excavator at an FSF excavation" },
      { src: "/images/people/excavator-trench-clean.jpg", alt: "Excavator preparing a trench" },
    ],
  },
  {
    slug: "bapco-hot-tapping",
    client: "Bapco",
    clientShort: "Bapco",
    title: "32\" Export Pipeline Hot Tapping",
    summary: "Hot tapping on a 32-inch export pipeline — a reference from SWAED's hot tapping technical partner.",
    location: "Sudan",
    duration: "2019",
    highlight: "32\" hot tap",
    scope: ["Hot tapping on a live 32-inch export pipeline"],
    services: ["hot-tapping"],
    image: "/images/people/pipeline-repair-closeup.jpg",
    imageAlt: "Hot tapping equipment on a large-diameter pipeline",
    gallery: [{ src: "/images/people/pipeline-repair-closeup.jpg", alt: "Hot tapping equipment on a large-diameter pipeline" }],
    partnerReference: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
