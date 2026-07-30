"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ProjectBeforeAfter({ image, alt }: { image: string; alt: string }) {
  const [value, setValue] = useState(50);

  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="container-lux">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">The Difference</p>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Raw Capture. <span className="italic bronze-gradient-text">Maison</span> Grade.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/55">
            Drag the slider to compare the original image with Maison Motion&rsquo;s natural
            enhancement. Every edit preserves the vehicle&rsquo;s authenticity while creating a
            stronger first impression.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-20">
          <div className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-sm border border-hairline">
            <div className="absolute inset-0">
              <Image
                src={image}
                alt={`${alt} — before enhancement`}
                fill
                sizes="100vw"
                className="object-cover"
                style={{ filter: "grayscale(0.85) contrast(0.9) brightness(0.8) saturate(0.6)" }}
              />
            </div>

            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
              <Image src={image} alt={`${alt} — after enhancement`} fill sizes="100vw" className="object-cover" />
            </div>

            <span className="pointer-events-none absolute left-4 top-4 z-30 text-[10px] uppercase tracking-[0.25em] text-bronze sm:left-6 sm:top-6 sm:text-[11px]">
              Maison Grade
            </span>
            <span className="pointer-events-none absolute right-4 top-4 z-30 text-[10px] uppercase tracking-[0.25em] text-foreground/50 sm:right-6 sm:top-6 sm:text-[11px]">
              Original
            </span>

            <motion.div
              className="pointer-events-none absolute inset-y-0 z-10 flex w-px items-center bg-bronze"
              style={{ left: `${value}%` }}
            >
              <div className="flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-bronze bg-black/80 text-bronze backdrop-blur">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 6L22 12L16 18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </motion.div>

            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              aria-label="Before and after comparison slider"
              className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
            />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-foreground/40">
            Every enhancement is designed to preserve the vehicle&rsquo;s original paint,
            proportions and character while improving lighting, reflections, composition and
            overall presentation.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
