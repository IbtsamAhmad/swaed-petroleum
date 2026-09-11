export type Project = {
  slug: string;
  client: string;
  clientShort: string;
  title: string;
  description: string;
  duration: string;
  value: string;
  location: string;
  image: string;
  imageAlt: string;
  sector: string;
  verticalSlug: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "gpoc-flowline-trunkline-repair",
    client: "Greater Pioneer Operating Company (GPOC)",
    clientShort: "GPOC",
    title: "Flow Line & Trunk Line Normal Repair",
    description:
      "Provision of flow line and trunk line normal repair services sustaining continuous field operations.",
    duration: "2+1 years · 2024–2026",
    value: "Unit Rate",
    location: "South Sudan — Unity Oil Field",
    image: "/images/people/trenching-excavator.jpg",
    imageAlt: "Excavator and crew preparing a pipeline trench at the Unity Oil Field",
    sector: "Pipelines & Piping",
    verticalSlug: "pipelines-piping",
    featured: true,
  },
  {
    slug: "dpoc-export-pipeline-repair",
    client: "Dar Petroleum Operating Company (DPOC)",
    clientShort: "DPOC",
    title: "Export & Interfield Pipeline Repair and Maintenance",
    description:
      "Provision of pipeline repair and maintenance for the DPOC export pipeline and interfield pipeline network.",
    duration: "2+1 years · 2024–2026",
    value: "Unit Rate (≈ 3.1M)",
    location: "South Sudan — Melut Oil Field",
    image: "/images/people/pipe-wrap-trench.jpg",
    imageAlt: "Field crew wrapping a repaired pipeline section before backfill",
    sector: "Pipelines & Piping",
    verticalSlug: "pipelines-piping",
    featured: true,
  },
  {
    slug: "dpoc-wengi-tiein",
    client: "Dar Petroleum Operating Company (DPOC)",
    clientShort: "DPOC",
    title: "Engineering for Water Disposal Tie-In — Wengi-3 & Wengi-9",
    description:
      "Provision of engineering for modified tie-in on water disposal to Wengi-3 & Wengi-9 — MMC Projects.",
    duration: "3+1 years · 2023–2026",
    value: "Unit Rate",
    location: "South Sudan",
    image: "/images/people/welding-sparks.jpg",
    imageAlt: "Welder working on a wellhead assembly in the field",
    sector: "Field Surface Facilities",
    verticalSlug: "field-surface-facilities",
  },
  {
    slug: "gpoc-eds-toma-south",
    client: "Greater Pioneer Operating Company (GPOC)",
    clientShort: "GPOC",
    title: "EPCC for Electrical Distribution System — Toma South Infill Well",
    description:
      "EPCC for a new infill well electrical distribution system (EDS), including provision of EPCC for field surface facilities (FSF).",
    duration: "2+1 years · 2024–2026",
    value: "WO Base",
    location: "South Sudan — Unity Oil Field",
    image: "/images/industrial/pipeline-field.jpg",
    imageAlt: "Cross-country pipeline running through open field terrain",
    sector: "Field Surface Facilities",
    verticalSlug: "field-surface-facilities",
  },
  {
    slug: "gpoc-construction-maintenance",
    client: "Greater Pioneer Operating Company (GPOC)",
    clientShort: "GPOC",
    title: "Construction, Maintenance & Minor Engineering Services",
    description:
      "EPCC for provision of construction, maintenance and minor engineering services, plus field surface facilities work.",
    duration: "2+1 years · 2023–2026",
    value: "Work Order Base",
    location: "South Sudan — Unity Oil Field",
    image: "/images/people/excavator-trench-clean.jpg",
    imageAlt: "Excavator preparing a trench under clear skies for pipeline works",
    sector: "Field Surface Facilities",
    verticalSlug: "field-surface-facilities",
  },
  {
    slug: "dpoc-construction-maintenance",
    client: "Dar Petroleum Operating Company (DPOC)",
    clientShort: "DPOC",
    title: "Maintenance & Construction Services — Civil, Mechanical, I&C, Electrical",
    description:
      "EPCC provision of maintenance and construction services covering civil, mechanical, instrument and electrical works.",
    duration: "3+1 years · 2023–2026",
    value: "4M",
    location: "South Sudan",
    image: "/images/people/scaffold-technician.jpg",
    imageAlt: "Technician on scaffolding inside a facility, wearing a SWAED hi-vis vest",
    sector: "Operations & Maintenance",
    verticalSlug: "operations-maintenance",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
