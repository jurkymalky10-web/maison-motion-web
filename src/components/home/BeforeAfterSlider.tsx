"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function BeforeAfterSlider() {
  const [value, setValue] = useState(50);

  return (
    <section className="relative bg-black py-28 md:py-36">
      <div className="container-lux">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">The Difference</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            Raw Capture. <span className="italic bronze-gradient-text">Maison</span> Grade.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
            Our signature color science transforms flat, unfinished footage
            into the tonal language our clients are known for. Drag to compare.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="mt-14">
          <div className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-sm border border-hairline">
            {/* BEFORE layer: flat, desaturated */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #3a3a3a 0%, #1a1a1a 55%, #0a0a0a 100%)",
                  filter: "grayscale(0.9) contrast(0.85) brightness(0.75)",
                }}
              />
              <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-foreground/50">
                Before
              </div>
            </div>

            {/* AFTER layer: rich, graded, bronze */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(90% 90% at 30% 20%, #E8B27C33 0%, transparent 55%), linear-gradient(160deg, #2a2210 0%, #0d0d0d 55%, #000 100%)",
                }}
              />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
                background: "linear-gradient(120deg, transparent 30%, #C68A4E 50%, transparent 70%)",
              }} />
              <div className="absolute bottom-6 text-xs uppercase tracking-[0.3em] text-bronze" style={{ left: "1.5rem" }}>
                After
              </div>
            </div>

            {/* handle */}
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
