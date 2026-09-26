import mapData from "./map-pins.json";

// Office details from brochure p.42 (Contact Us); presence from p.7 and p.40.
// Coordinates live in data/locations.json → run `npm run map` after editing them.

export type BranchKind = "hq" | "branch" | "presence" | "field" | "upcoming";

export type Branch = {
  key: keyof typeof mapData.pins;
  kind: BranchKind;
  label: string;
  country: string;
  city?: string;
  address?: string;
  phones?: string[];
  email?: string;
};

export const branches: Branch[] = [
  {
    key: "istanbul",
    kind: "hq",
    label: "Main Office",
    country: "Turkey",
    city: "Istanbul",
    address: "Guzelyurt Mah. Haramidere Cad. KAPI No. 19, 34510 Esenyurt / Istanbul",
    phones: ["+90 555 98 57775", "+90 536 290 5885"],
    email: "mohamed@swaedpetroleum.com",
  },
  {
    key: "khartoum",
    kind: "branch",
    label: "Sudan Branch",
    country: "Sudan",
    city: "Khartoum",
    address: "Bahri – Kafori, Block 1 / 1357",
    phones: ["+249 9124 57775"],
  },
  {
    key: "juba",
    kind: "branch",
    label: "South Sudan Branch",
    country: "South Sudan",
    city: "Juba",
    address: "Huba – Numra Tlatah, Lukak Building, Office 1/2",
    phones: ["+211 1233 57775"],
  },
  {
    key: "thi-qar",
    kind: "branch",
    label: "Iraq Branch",
    country: "Iraq",
    city: "Thi Qar",
    address: "Alsafawa Blk 85 – 115/10",
    phones: ["+90 555 98 57775"],
  },
  {
    key: "ajman",
    kind: "branch",
    label: "UAE Branch",
    country: "United Arab Emirates",
    city: "Ajman",
    address: "Ajman Free Zone, C1 Building, Makani",
  },
  { key: "algeria", kind: "presence", label: "SWAED Petroleum Algeria", country: "Algeria" },
  { key: "syria", kind: "presence", label: "Active operations", country: "Syria" },
  { key: "saudi-arabia", kind: "upcoming", label: "Upcoming expansion", country: "Saudi Arabia" },
  { key: "unity-field", kind: "field", label: "Unity Oil Field — GPOC", country: "South Sudan" },
  { key: "paloch-field", kind: "field", label: "Paloch FSF, Melut Basin — DPOC", country: "South Sudan" },
];

export const offices = branches.filter((b) => b.kind === "hq" || b.kind === "branch");

export const presenceCountries = [
  "Turkey",
  "Sudan",
  "South Sudan",
  "Iraq",
  "UAE",
  "Algeria",
  "Syria",
];

export const kindLabel: Record<BranchKind, string> = {
  hq: "Headquarters",
  branch: "Branch office",
  presence: "Active presence",
  field: "Field operations",
  upcoming: "Upcoming",
};

export const map = mapData;
