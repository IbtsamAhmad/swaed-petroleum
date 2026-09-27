// "What We Do" — brochure p.17 lists these eleven services; detail copy from pp.18–34.

export type Service = {
  slug: string;
  number: string;
  name: string;
  /** Short name for menus and cards */
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
  body: string[];
  capabilities: string[];
  stats?: { label: string; value: string }[];
  gallery?: { src: string; alt: string }[];
  /** Project slugs from data/projects.ts */
  projects?: string[];
  /** Pages that own this topic elsewhere on the site */
  seeAlso?: { label: string; href: string };
};

const P = "/images/projects";

export const services: Service[] = [
  {
    slug: "cross-country-pipeline",
    number: "01",
    name: "Cross-Country Pipeline & Piping Construction",
    short: "Cross-Country Pipelines",
    summary:
      "EPC delivery of cross-country hydrocarbon pipelines, flowlines and trunklines — onshore and offshore.",
    image: "/images/industrial/pipeline-field.jpg",
    imageAlt: "Coated cross-country pipeline section laid in open terrain",
    body: [
      "SWAED's core business specializes in providing EPC services for offshore and cross-country construction of hydrocarbon pipelines. We offer multi-discipline core business in pipeline & piping — from route survey and engineering through procurement, excavation, welding, coating, laying, backfilling and hydrotesting.",
      "SWAED executes the South Sudan – Sudan cross-country live pipeline repair project — an underground 32-inch pipeline covering more than 300 km, from 2022 to 2026 — alongside other flowline and trunkline construction work.",
      "SWAED partners with a technical partner bringing more than 20 years' experience, more than 170 projects, and contract value above 200 million USD.",
    ],
    capabilities: [
      "Cross-country pipeline EPC — onshore and offshore",
      "Flowline and trunkline construction",
      "Route survey and cable/pipe route profiling",
      "Excavation, laying, backfilling and reinstatement",
      "Fabrication, tie-ins and hydrotesting",
      "Coating and field-joint protection",
    ],
    stats: [
      { label: "Cross-country pipeline", value: "300+ km" },
      { label: "Diameter", value: "32\" underground" },
      { label: "Partner track record", value: "170+ projects" },
      { label: "Partner contract value", value: "$200M+" },
    ],
    gallery: [
      { src: `${P}/dpoc-export-pipeline-repair/01.jpg`, alt: "Excavated 32-inch coated pipeline exposed in a long trench" },
      { src: "/images/people/trenching-excavator.jpg", alt: "Excavator and SWAED crew opening a pipeline trench" },
      { src: "/images/people/excavator-trench-clean.jpg", alt: "Excavator preparing a straight pipeline trench" },
      { src: `${P}/dpoc-wengi-water-disposal-tie-in/01.jpg`, alt: "Crew fabricating a pipeline tie-in on scaffolding at a well site" },
    ],
    projects: ["dpoc-export-pipeline-repair", "dpoc-wengi-water-disposal-tie-in", "gpoc-flowline-trunkline-repair"],
  },
  {
    slug: "live-pipeline-repair",
    number: "02",
    name: "Live Pipeline & Piping Repair Services",
    short: "Live Pipeline Repair",
    summary:
      "Live, online and rupture repair of critical pipelines and trunklines — without shutting the line down.",
    image: `${P}/dpoc-export-pipeline-repair/05.jpg`,
    imageAlt: "Technician welding a repair sleeve clamped around a live 32-inch pipeline",
    body: [
      "A primary competitive advantage of SWAED lies in our specialized capability to execute live, online, and rupture repairs on critical pipelines and trunklines. Supported by a highly experienced team of field experts, we undertake complex repair interventions under live operating conditions.",
      "This eliminates the need for emergency shutdowns, dramatically minimizes operational downtime, and ensures continuous throughput for your assets.",
      "Our repair method is proven on the DPOC export crude line: engineering, procurement of sleeves, composite repair material and Stopaq coating; excavating the underground 32-inch pipeline at located repair points; removing coating; and conducting NDT to determine the repair method — over 210 km of 3LPP-coated pipeline.",
    ],
    capabilities: [
      "Live, online and rupture repair without shutdown",
      "Full-encirclement sleeve installation and welding",
      "Composite wrap repair systems",
      "Stopaq and field-joint coating reinstatement",
      "NDT at repair points to select the repair method",
      "Flowline and trunkline normal repair",
    ],
    stats: [
      { label: "Export pipeline repair scope", value: "210 km" },
      { label: "Pipeline", value: "32\" · 3LPP" },
      { label: "Downtime required", value: "Zero shutdown" },
      { label: "Active since", value: "2022" },
    ],
    gallery: [
      { src: `${P}/dpoc-export-pipeline-repair/02.jpg`, alt: "Welders working either side of an exposed pipeline" },
      { src: `${P}/dpoc-export-pipeline-repair/03.jpg`, alt: "Welder preparing a repair sleeve joint" },
      { src: `${P}/dpoc-export-pipeline-repair/04.jpg`, alt: "Technician recording inspection data beside a coated repair" },
      { src: `${P}/gpoc-flowline-trunkline-repair/01.jpg`, alt: "SWAED technician repairing a flowline in an excavation" },
    ],
    projects: ["dpoc-export-pipeline-repair", "gpoc-flowline-trunkline-repair"],
  },
  {
    slug: "field-surface-facilities",
    number: "03",
    name: "EPCC of Well Pads, Field Surface Facilities & EDS",
    short: "Field Surface Facilities",
    summary:
      "EPCC of well pads, field surface facilities (FSF), electrical distribution systems (EDS), flowlines, trunklines and OGMs.",
    image: "/images/industrial/wellhead-field.jpg",
    imageAlt: "Wellhead installation at a field surface facility",
    body: [
      "The Field Surface Facilities scope that SWAED is capable of covering includes, but is not limited to, the EPCC of: oil wellhead facilities, covering piping assembly, on-site electrical power distribution and instrumentation; flowlines and trunklines; Oil Gathering Manifolds (OGMs), covering piping assembly, metering, electrical distribution and instrumentation; and telecommunication systems, inclusive of fiber optic cabling, terminating and connecting wellheads.",
      "SWAED brings a proven track record in deploying top-tier talent for Field Surface Facility (FSF) initiatives. OGM, trunkline and flowline work forms part of SWAED's overarching EPCC capabilities, backed by our multifaceted team, strong leadership, and robust international and local alliances.",
    ],
    capabilities: [
      "Oil wellhead facilities — piping, power distribution & instrumentation",
      "Electrical distribution systems (EDS) — 33 kV HV cable, RMU tie-in",
      "Oil Gathering Manifolds (OGMs) and metering",
      "Well pad modification and tie-ins",
      "SCADA, communication and protection integration",
      "Fiber optic telecommunication to wellheads",
    ],
    gallery: [
      { src: `${P}/gpoc-eds-toma-south/03.jpg`, alt: "Engineer beside ring main unit switchgear panels" },
      { src: `${P}/gpoc-eds-toma-south/02.jpg`, alt: "HV cable trench with protective cover slabs" },
      { src: `${P}/dpoc-wengi-water-disposal-tie-in/02.jpg`, alt: "Team working at a wellhead tie-in" },
      { src: `${P}/dpoc-wengi-water-disposal-tie-in/03.jpg`, alt: "Welder cutting pipe at a well site" },
    ],
    projects: ["gpoc-eds-toma-south", "dpoc-wengi-water-disposal-tie-in", "gpoc-construction-maintenance", "dpoc-maintenance-construction"],
  },
  {
    slug: "hot-tapping",
    number: "04",
    name: "Pipeline & Piping Hot Tapping Services",
    short: "Hot Tapping",
    summary: "Advanced hot tapping for trunklines, pipelines and piping systems, with safe, continuous operation.",
    image: "/images/people/pipeline-repair-closeup.jpg",
    imageAlt: "Hot tapping equipment clamped to a large-diameter pipeline",
    body: [
      "In collaboration with our world-class technical partner — bringing over three decades of field experience and a $270M+ project portfolio — SWAED provides advanced hot tapping services for trunklines, pipelines, and piping systems, ensuring safe, continuous operations across all project scales.",
      "Our partner's references include the Bapco 32-inch export pipeline hot tapping project in Sudan (2019).",
    ],
    capabilities: [
      "Hot tapping on trunklines, pipelines & piping systems",
      "Connections to operating lines without shutdown",
      "Delivered with a technical partner of 30+ years",
    ],
    stats: [
      { label: "Technical partner experience", value: "30+ years" },
      { label: "Partner project portfolio", value: "$270M+" },
    ],
    projects: ["bapco-hot-tapping"],
  },
  {
    slug: "intelligent-pigging",
    number: "05",
    name: "Pipeline & Piping Intelligent Pigging Services",
    short: "Intelligent Pigging",
    summary: "Turnkey in-line inspection (ILI) with advanced robotics, sensors and AI-based data processing.",
    image: "/images/industrial/pipe-rows-perspective.jpg",
    imageAlt: "Parallel rows of pipeline on supports",
    body: [
      "A perfect solution for pipeline integrity. To further strengthen our pipeline integrity offerings, SWAED has secured an exclusive agreement with our technical partner, an industry-leading provider and pioneer in In-Line Inspection (ILI) technology since 2015.",
      "Leveraging advanced robotics, cutting-edge sensors, and predictive data analytics, SWAED provides turnkey pipeline inspection services that ensure maximum asset safety, optimized performance, and zero unnecessary downtime.",
      "Our inspection tools vary in size from 6\" to 48\" in diameter and are equipped with advanced sensor technology, fast data acquisition capability and automated AI-based data processing software. This ensures the most accurate information on pipeline condition can be obtained seamlessly and efficiently.",
    ],
    capabilities: [
      "In-line inspection (ILI) and intelligent pigging",
      "Cleaning pigs and gauging",
      "Pig traps — launchers & receivers",
      "Pig tracking systems",
      "AI-based inspection data processing",
    ],
    stats: [
      { label: "ILI partner active since", value: "2015" },
      { label: "Tool range", value: "6\"–48\"" },
    ],
  },
  {
    slug: "cathodic-protection",
    number: "06",
    name: "Cathodic Protection Services (CP)",
    short: "Cathodic Protection",
    summary: "Cathodic protection safeguarding buried and submerged pipeline assets against corrosion.",
    image: "/images/people/pipe-wrap-trench.jpg",
    imageAlt: "Field crew applying protective wrap to an excavated pipeline",
    body: [
      "SWAED provides Cathodic Protection (CP) services as part of its pipeline construction, repair and integrity scope — protecting buried and submerged hydrocarbon assets against corrosion over their operating life.",
      "CP sits alongside our coating reinstatement, intelligent pigging, NDT and RBI services, giving operators one contractor for the full integrity picture of a line.",
    ],
    capabilities: [
      "CP for buried pipelines, flowlines and trunklines",
      "CP for submerged and storage assets",
      "Integrated with coating repair, ILI, NDT and RBI",
    ],
    projects: ["dpoc-export-pipeline-repair"],
  },
  {
    slug: "inspection-ndt",
    number: "07",
    name: "Inspection & NDT, Integrity Assessments & RBI",
    short: "Inspection & NDT",
    summary: "Conventional and advanced NDT, integrity assessment and Risk-Based Inspection (RBI).",
    image: "/images/people/pipe-inspection-light.jpg",
    imageAlt: "Inspectors examining a pipe surface with handheld lighting",
    body: [
      "Leveraging deep technical expertise and industry experience, SWAED delivers a complete suite of conventional and advanced Non-Destructive Testing (NDT) alongside Risk-Based Inspection (RBI) solutions.",
      "Conventional NDT: Radiographic Testing (RT), Ultrasonic Testing (UT), Magnetic Particle Testing (MT), Penetrant Testing (PT), and Visual Testing (VT). Advanced NDT (ANDT): Phased Array Ultrasonic Testing (PAUT), Long Range Ultrasonic Testing (LRUT), and specialized advanced inspection techniques.",
      "Asset Integrity: Risk-Based Inspection (RBI) programs tailored to optimize asset lifecycle, ensure regulatory compliance, and prevent unplanned outages.",
    ],
    capabilities: [
      "Ultrasonic Testing (UT-UFD, TOFD, PAUT, UTM)",
      "MT, PT, VT, ET & Coating Holiday Detection",
      "Tube Inspection (ET, MFL, IRIS, RFT)",
      "Magnetic Flux Leakage (MFL)",
      "Radiography (RT — X & Gamma Ray, Crawler)",
      "Positive Material Identification (PMI — XRF, OES)",
      "Inspectors Supply (QA/QC, API 510, 653, 570)",
      "AST Inspection & Certification",
      "Leak Testing (Vacuum, Hydro-Test)",
      "Corrosion Under Insulation (CUI)",
      "RBI & software provision",
    ],
    gallery: [
      { src: "/images/people/field-documentation.jpg", alt: "Inspectors recording results under a field shelter" },
      { src: `${P}/gpoc-flowline-trunkline-repair/03.jpg`, alt: "Handheld inspection instrument in use on an exposed flowline" },
      { src: `${P}/gpoc-flowline-trunkline-repair/05.jpg`, alt: "Inspector working on parallel flowlines in an excavation" },
    ],
  },
  {
    slug: "operation-maintenance",
    number: "08",
    name: "Operation & Maintenance (O&M)",
    short: "Operation & Maintenance",
    summary: "Engineering expertise and a trained local workforce sustaining operations across remote oil fields.",
    image: "/images/people/scaffold-technician.jpg",
    imageAlt: "SWAED technician on scaffolding inside a process facility",
    body: [
      "We have the required engineering expertise and network of suppliers, with professional employees who have more than 15 years of experience in different oil field locations, such as DPOC in Paloch, Adar, Gumry, Moleeta, Algablin and Heglig oil fields.",
      "Our teams consist of local Sudanese workers, trained and working to high trade and safety standards, supervised by experts drawn from Petrodar Operating Company and GNPOC — no matter how remote. We go beyond merely running your equipment: we continually analyze its functioning with a view to optimizing energy efficiency.",
    ],
    capabilities: [
      "Civil, mechanical, instrument & electrical maintenance",
      "Upstream production facility maintenance",
      "Energy efficiency analysis and optimization",
      "Local workforce development and supervision",
    ],
    stats: [{ label: "Average team experience", value: "15+ years" }],
    projects: ["dpoc-maintenance-construction", "gpoc-construction-maintenance"],
  },
  {
    slug: "earth-moving-civil",
    number: "09",
    name: "Earth Moving & Civil Work",
    short: "Earth Moving & Civil",
    summary: "Excavation, trenching, backfilling, compaction and reinstatement supporting pipeline and facility work.",
    image: `${P}/gpoc-eds-toma-south/01.jpg`,
    imageAlt: "Excavator opening a cable trench at an oil field",
    body: [
      "SWAED provides the manpower, equipment, tools and supervision for the earthworks behind our pipeline, cable and facility projects — excavation by excavator with manual excavation where needed, followed by sand bedding, backfilling, compaction and reinstatement.",
      "Before excavation we carry out route surveys and pipe-location detection to protect existing buried assets.",
    ],
    capabilities: [
      "Route survey and utility coordination",
      "Pipe-location detection before excavation",
      "Machine and manual excavation",
      "Sand bedding, warning tape and backfilling",
      "Compaction and reinstatement",
      "Civil foundations and pipe supports",
    ],
    gallery: [
      { src: `${P}/gpoc-eds-toma-south/05.jpg`, alt: "Narrow cable trench with bedding sand" },
      { src: `${P}/gpoc-eds-toma-south/06.jpg`, alt: "HV cable laid in a trench" },
      { src: `${P}/gpoc-eds-toma-south/08.jpg`, alt: "Excavator working along a trench line" },
    ],
    projects: ["gpoc-eds-toma-south", "dpoc-export-pipeline-repair"],
  },
  {
    slug: "tank-cleaning-painting",
    number: "10",
    name: "Storage Tank Cleaning, Sandblasting & Painting",
    short: "Tank Cleaning & Painting",
    summary: "Internal cleaning, grit sandblasting, painting and base sealing of crude storage tanks.",
    image: `${P}/spoc-crude-tank-cleaning/02.jpg`,
    imageAlt: "Workers inspecting the internal wall of a cleaned crude tank",
    body: [
      "SWAED carries out procurement, mechanical and civil construction, and commissioning for storage tank rehabilitation: manual cleaning of crude tanks, grit sandblasting and painting, and base sealing with associated civil work.",
      "Our current tank work includes the internal cleaning, sandblasting, painting and base sealing of the FWKO A & B tanks for SPOC in South Sudan (2025–2026).",
    ],
    capabilities: [
      "Manual crude tank cleaning",
      "Grit sandblasting and surface preparation",
      "Protective coating and painting",
      "Tank base sealing and civil work",
    ],
    gallery: [
      { src: `${P}/spoc-crude-tank-cleaning/01.jpg`, alt: "SWAED crew at the FWKO tank site" },
      { src: `${P}/spoc-crude-tank-cleaning/03.jpg`, alt: "SWAED team in yellow coveralls beside tank piping" },
    ],
    projects: ["spoc-crude-tank-cleaning"],
  },
  {
    slug: "research-development-training",
    number: "11",
    name: "Oil & Gas Research, Development & Training",
    short: "R&D & Training",
    summary: "Applied research, peer-reviewed publication and technical training for the energy industry.",
    image: "/images/people/local-content-training.jpg",
    imageAlt: "SWAED supervisor training local graduates at a field site",
    body: [
      "Our R&D division operates under the direct leadership of SWAED's ownership, serving as the strategic engine for company-wide innovation — and our Graduate Development Program trains the next generation of local engineers and technicians.",
    ],
    capabilities: ["Applied research", "Technical training", "Graduate Development Program"],
    seeAlso: { label: "Visit Research & Development", href: "/research-development" },
  },
];

// Brochure pp.32–34 — engineering capability that underpins every service
export const engineering = {
  heading: "Engineering, Processing & Design — GES Projects",
  body: [
    "Being the basis of project development and proper selection of equipment and material, SWAED's engineering department lies at the heart of every project to ensure the quality of the project outcome and the safety of the solutions offered.",
    "The engineering department's tasks include feasibility studies, concept design, review of client minimum technical requirements, design alternatives and new ideas to improve cost effectiveness, and development of detailed design drawings and documents for construction teams to follow.",
    "The SWAED processing team focuses on changing the way fuels are made and utilized, to provide more energy-efficient and cost-effective solutions, on a small-scale basis, to the market. Our flexible processing design and turnkey solutions innovatively optimize industry processes, increasing profit margins and reducing costs.",
  ],
  principles: [
    "Compliance with international standards and codes (API, ASME, ASTM, NFPA, AWS, BSI, EN, IEC)",
    "Recognized, proven techniques, methods, equipment and material",
    "Sustainability, energy efficiency and environmental awareness",
    "Safety, efficiency and cost effectiveness",
    "Integrated delivery through the complete project life cycle",
  ],
  image: "/images/industrial/process-modules.jpg",
  imageAlt: "Stainless steel process modules and piping",
};

export const servicesIntro =
  "Through a combination of quality, efficiency and engineering excellence, we provide clients with technical, financial and economically optimized solutions to ensure projects advance to their final phases. To serve clients' diverse requirements, we provide electrical, civil, process, mechanical, geotechnical and environmental services for the hydrocarbon industry over the complete lifecycle of a project.";

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
