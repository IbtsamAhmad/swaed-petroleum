"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "./Button";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}: {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  imageAlt: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-navy-950">
      <motion.div
        initial={{ scale: reduce ? 1 : 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: easing }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-transparent" />
      </motion.div>

      <div className="container-swaed relative z-10 pb-20 pt-40 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easing }}
          className="eyebrow text-gold-300"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: easing }}
          className="mt-6 max-w-5xl text-balance font-display font-normal leading-[0.98] text-white text-[clamp(2.6rem,7.2vw,7rem)]"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: easing }}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-white/70 md:text-lg"
        >
          {subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: easing }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={primaryCta.href} variant="primary" className="bg-gold-500 text-navy-950 hover:bg-gold-400">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="on-dark">
            {secondaryCta.label}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-white/50 md:flex"
      >
        <span className="h-10 w-px bg-white/30" />
        <span className="text-[0.7rem] uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>
    </section>
  );
}
