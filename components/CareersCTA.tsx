import Image from "next/image";
import Button from "./Button";
import { Reveal } from "@/lib/motion";

export default function CareersCTA({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
      </div>
      <div className="relative z-10 px-6 py-24 sm:px-10 md:px-16 md:py-32">
        <Reveal>
          <p className="eyebrow text-gold-300">Careers at SWAED</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-white">
            Build Your Future With Us
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-lg text-balance text-white/65">
            From our Graduate Development Program to field leadership roles across South Sudan,
            Sudan, Turkey, Iraq, the UAE and Algeria, SWAED invests in the people who build our
            projects.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10">
            <Button href="/careers" className="bg-gold-500 text-navy-950 hover:bg-gold-400">
              Explore Careers
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
