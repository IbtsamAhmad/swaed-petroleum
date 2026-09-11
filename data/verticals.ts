export type Vertical = {
  slug: string;
  index: string;
  name: string;
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
  stats?: { label: string; value: string }[];
  capabilities: string[];
  body: string[];
  relatedProjects?: string[];
};

export const verticals: Vertical[] = [
  {
    slug: "pipelines-piping",
    index: "01",
    name: "Pipelines & Piping",
    short: "Construction & Life Repair",
    summary:
      "Cross-country EPC pipeline construction and live, online pipeline repair without shutdown.",
    image: "/images/people/silhouette-sunset-pipeline.jpg",
    imageAlt: "Field engineers silhouetted against a sunset beside cross-country pipeline sections",
    stats: [
      { label: "Pipeline under live repair", value: "300+ KM" },
      { label: "Diameter", value: "32\" underground" },
      { label: "Partner track record", value: "170+ projects" },
      { label: "Contract value delivered", value: "$200M+" },
    ],
    capabilities: [
      "Cross-country pipeline & piping construction",
      "Life pipeline & piping repair services",
      "Live, online and rupture repair without shutdown",
      "Flow line and trunkline construction",
    ],
    body: [
      "SWAED's core business specializes in providing EPC services for offshore and cross-country contraction of hydrocarbon pipelines. A primary competitive advantage of SWAED lies in our specialized capability to execute live, online, and rupture repairs on critical pipelines and trunklines.",
      "Supported by a highly experienced team of field experts, we undertake complex repair interventions under live operating conditions. This eliminates the need for emergency shutdowns, dramatically minimizes operational downtime, and ensures continuous throughput for client assets.",
      "SWAED executed the South Sudan – Sudan cross-country life pipeline repair project — an underground 32-inch pipeline covering more than 300 km, running from 2022 to 2026 — alongside other flow line and trunkline construction work. SWAED partners with a technical partner bringing more than 20 years' experience, more than 170 projects, and contract value above 200 Million USD.",
    ],
    relatedProjects: ["gpoc-flowline-trunkline-repair", "dpoc-export-pipeline-repair"],
  },
  {
    slug: "field-surface-facilities",
    index: "02",
    name: "Field Surface Facilities, Well Pads & EDS",
    short: "EPCC of Wellpads & Distribution",
    summary:
      "End-to-end EPCC of oil wellhead facilities, flowlines, gathering manifolds and electrical distribution systems.",
    image: "/images/industrial/wellhead-field.jpg",
    imageAlt: "Field surface facility wellhead installation with orange-coated piping",
    capabilities: [
      "Oil wellhead facilities — piping, power distribution & instrumentation",
      "Flowlines and trunklines",
      "Oil Gathering Manifolds (OGMs)",
      "Telecommunication systems — fiber optic cabling to wellheads",
    ],
    body: [
      "The Field Services Facilities scope that SWAED is capable of covering includes, but is not limited to, the EPCC of: oil wellhead facilities, which covers piping assembly, on-site electrical power distribution and instrumentation; flowlines and trunklines; Oil Gathering Manifolds (OGMs), covering piping assembly, metering, electrical distribution and instrumentation; and telecommunication systems, inclusive of fiber optic cabling, terminating and connecting wellheads.",
      "SWAED brings a proven track record in deploying top-tier talent for Field Surface Facility (FSF) initiatives. FSF operations form OGM, trunkline and flowline work within SWAED's overarching EPCC capabilities, backed by our multifaceted team, strong leadership, and robust international and local alliances.",
    ],
    relatedProjects: [
      "gpoc-eds-toma-south",
      "gpoc-construction-maintenance",
      "dpoc-wengi-tiein",
    ],
  },
  {
    slug: "hot-tapping-pigging",
    index: "03",
    name: "Hot Tapping & Intelligent Pigging",
    short: "Pipeline Integrity Services",
    summary:
      "Advanced hot tapping and AI-driven in-line inspection (ILI) for pipeline integrity — delivered with global technical partners.",
    image: "/images/people/pipeline-repair-closeup.jpg",
    imageAlt: "Technician performing a hot tapping procedure on a large-diameter pipeline",
    stats: [
      { label: "Technical partner experience", value: "30+ years" },
      { label: "Partner project portfolio", value: "$270M+" },
      { label: "ILI partner active since", value: "2015" },
      { label: "Inspection tool range", value: "6\"–48\" dia." },
    ],
    capabilities: [
      "Hot tapping on trunklines, pipelines & piping systems",
      "In-line inspection (ILI) and intelligent pigging",
      "Cleaning pigs, traps (launchers & receivers), pig tracking systems",
      "AI-based inspection data processing",
    ],
    body: [
      "In collaboration with our world-class technical partner — bringing over three decades of field experience and a $270M+ project portfolio — SWAED provides advanced hot tapping services for trunklines, pipelines, and piping systems, ensuring safe, continuous operations across all project scales. SWAED delivered the Bapco 32\" export pipeline hot tapping project in Sudan in 2019.",
      "To further strengthen our pipeline integrity offerings, SWAED has secured an exclusive agreement with our technical partner, an industry-leading provider and pioneer in In-Line Inspection (ILI) technology since 2015. Leveraging advanced robotics, cutting-edge sensors, and predictive data analytics, SWAED provides turnkey pipeline inspection services that ensure maximum asset safety, optimized performance, and zero unnecessary downtime.",
      "Our inspection tools vary in size from 6\" to 48\" in diameter and are equipped with advanced sensor technology, fast data acquisition capability and automated AI-based data processing software.",
    ],
  },
  {
    slug: "inspection-ndt",
    index: "04",
    name: "Inspection, NDT & Asset Integrity",
    short: "Cathodic Protection · RBI · NDT",
    summary:
      "Conventional and advanced non-destructive testing, cathodic protection, and risk-based inspection programs.",
    image: "/images/people/pipe-inspection-light.jpg",
    imageAlt: "Inspectors examining a pipe section using handheld lighting equipment",
    capabilities: [
      "Ultrasonic Testing (UT-UFD, TOFD, PAUT, UTM)",
      "MT, PT, VT, ET & Coating Holiday Detection",
      "Radiography (RT-X & Gamma Ray, Crawler)",
      "Positive Material Identification (PMI-XRF, OES)",
      "Corrosion Under Insulation (CUI) & Leak Testing",
      "Risk-Based Inspection (RBI) & software provision",
      "Cathodic Protection (CP) services",
    ],
    body: [
      "Leveraging deep technical expertise and industry experience, SWAED delivers a complete suite of conventional and advanced Non-Destructive Testing (NDT) alongside Risk-Based Inspection (RBI) solutions. Conventional NDT includes Radiographic Testing (RT), Ultrasonic Testing (UT), Magnetic Particle Testing (MT), Penetrant Testing (PT) and Visual Testing (VT). Advanced NDT (ANDT) includes Phased Array Ultrasonic Testing (PAUT), Long Range Ultrasonic Testing (LRUT), and specialized advanced inspection techniques.",
      "Asset Integrity: Risk-Based Inspection (RBI) programs tailored to optimize asset lifecycle, ensure regulatory compliance, and prevent unplanned outages. Inspection sector services also include Tube Inspection (ET, MFL, IRIS, RFT), Magnetic Flux Leakage (MFL), Inspectors Supply (IS-QA/QC, API 510, 653, 570), and AST Inspection & Certification.",
    ],
  },
  {
    slug: "operations-maintenance",
    index: "05",
    name: "Operations & Maintenance",
    short: "O&M Across South Sudan's Oil Fields",
    summary:
      "Engineering expertise and a trained local workforce sustaining operations across South Sudan's producing oil fields.",
    image: "/images/people/qhse-group-banner.jpg",
    imageAlt: "SWAED HSE team standing together at a field surface facility",
    stats: [{ label: "Average team experience", value: "15+ years" }],
    capabilities: [
      "Operation & Maintenance (O&M)",
      "Energy efficiency analysis and optimization",
      "Local workforce development and supervision",
    ],
    body: [
      "SWAED has the required engineering expertise and network of suppliers, with professional employees who have more than 15 years of experience in different oil field locations, including DPOC in Palouch, Adar, Gumry Moleeta, Algablin and Heglig oil fields.",
      "Our teams consist of local Sudanese workers, trained and working to high trade and safety standards, supervised by experts drawn from Petrodar Operating Company and GNPOC — no matter how remote. We go beyond merely running client equipment: we continually analyze its functioning with a view to optimizing energy efficiency.",
    ],
    relatedProjects: ["dpoc-construction-maintenance"],
  },
  {
    slug: "engineering-design",
    index: "06",
    name: "Engineering, Processing & Design",
    short: "GES Projects",
    summary:
      "Feasibility, concept and detailed design engineering underpinning every SWAED project, plus small-scale processing solutions.",
    image: "/images/industrial/process-modules.jpg",
    imageAlt: "Interior view of stainless steel processing modules and piping",
    capabilities: [
      "Feasibility studies & concept design",
      "Review of client minimum technical requirements",
      "Detailed design drawings & documentation",
      "Small-scale, turnkey processing solutions",
    ],
    body: [
      "Being the basis of project development and proper selection of equipment and material, SWAED's engineering department lies at the heart of every project to ensure the quality of the project outcome and the safety of the solutions offered. The engineering department's tasks include feasibility studies, concept design, review of client minimum technical requirements, design alternatives and new ideas to improve cost effectiveness, and development of detailed design drawings and documents for construction teams to follow.",
      "Our designs adhere to compliance with all relevant international standards, regulations, codes and norms — including API, ASME, ASTM, NFPA, AWS, BSI, EN and IEC — the use of common industry practices and proven techniques, sustainability and energy efficiency, and integrated project delivery throughout the complete project life cycle.",
      "The SWAED processing team focuses on changing the way fuels are made and utilized, to provide more energy-efficient and cost-effective solutions on a small-scale basis to the market. Our flexible processing design and turnkey solutions innovatively optimize industry processes across oil & gas, mining, manufacturing, construction, processing and transportation.",
    ],
  },
];

export function getVerticalBySlug(slug: string) {
  return verticals.find((v) => v.slug === slug);
}
