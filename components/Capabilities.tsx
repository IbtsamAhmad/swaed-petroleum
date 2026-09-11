"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Cap = { id: string; title: string; description: string };

export default function Capabilities({
  items,
  image,
  imageAlt,
}: {
  items: Cap[];
  image: string;
  imageAlt: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <ul className="border-t border-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.id} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-5">
                    <span className={cn("text-sm tabular", isOpen ? "text-gold-600" : "text-text-tertiary")}>
                      {item.id}
                    </span>
                    <span
                      className={cn(
                        "font-display text-xl transition-colors md:text-2xl",
                        isOpen ? "text-navy-950" : "text-text-secondary"
                      )}
                    >
                      {item.title}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "relative flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300",
                      isOpen ? "border-gold-500 rotate-45" : "border-border"
                    )}
                  >
                    <span className="absolute h-[1px] w-3.5 bg-navy-950" />
                    <span className="absolute h-3.5 w-[1px] bg-navy-950" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-7 pl-0 text-sm leading-relaxed text-text-secondary md:pl-[3.1rem]">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative hidden aspect-[4/5] overflow-hidden lg:col-span-5 lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={open}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image src={image} alt={imageAlt} fill sizes="40vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
