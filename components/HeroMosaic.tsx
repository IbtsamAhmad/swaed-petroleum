import Image from "next/image";
import Button from "./Button";
import { heroContent } from "@/data/company";

// Descon-style home hero: a wall of project photos in a navy wash,
// with the logo panel in the centre.
const TILES = [
  "/images/projects/dpoc-export-pipeline-repair/01.jpg",
  "/images/industrial/hero-refinery.jpg",
  "/images/projects/gpoc-eds-toma-south/03.jpg",
  "/images/projects/dpoc-export-pipeline-repair/05.jpg",
  "/images/industrial/tanks-blue-sky.jpg",
  "/images/projects/spoc-crude-tank-cleaning/01.jpg",
  "/images/projects/dpoc-wengi-water-disposal-tie-in/01.jpg",
  "/images/industrial/wellhead-field.jpg",
  "/images/projects/gpoc-eds-toma-south/01.jpg",
  "/images/industrial/piping-rack.jpg",
  "/images/projects/gpoc-flowline-trunkline-repair/01.jpg",
  "/images/people/welding-sparks.jpg",
  "/images/industrial/pipeline-field.jpg",
  "/images/projects/dpoc-export-pipeline-repair/02.jpg",
  "/images/industrial/plant-waterfront.jpg",
  "/images/people/team-group-plant.jpg",
  "/images/projects/spoc-crude-tank-cleaning/02.jpg",
  "/images/industrial/process-modules.jpg",
];

export default function HeroMosaic() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="grid grid-cols-3 gap-0.5 sm:grid-cols-4 md:grid-cols-6" aria-hidden="true">
        {TILES.map((src, i) => (
          <div
            key={src}
            className={"relative aspect-[4/3] overflow-hidden" + (i >= 12 ? " hidden md:block" : "")}
          >
            <Image src={src} alt="" fill sizes="(min-width:768px) 17vw, 34vw" className="object-cover" priority={i < 6} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-navy-600/55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 via-transparent to-navy-950/40" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white/95 px-6 py-8 text-center shadow-2xl backdrop-blur sm:px-10 sm:py-10">
          <div className="relative mx-auto h-24 w-28 sm:h-32 sm:w-36">
            <Image src="/images/brand/logo.png" alt="SWAED Petroleum" fill sizes="144px" className="object-contain" priority />
          </div>
          <h1 className="mt-4 text-[clamp(1.6rem,3.4vw,2.4rem)] font-extrabold leading-tight tracking-[-0.01em] text-navy-950">
            {heroContent.headline}
          </h1>
          <p className="eyebrow mt-2 text-gold-600">{heroContent.eyebrow}</p>
          <p className="mx-auto mt-4 hidden max-w-md text-sm leading-relaxed text-text-secondary sm:block">{heroContent.subhead}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/our-services">Our Services</Button>
            <Button href="/media" variant="secondary">
              Our Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
