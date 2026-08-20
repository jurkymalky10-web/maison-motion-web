"use client";

import { motion } from "framer-motion";

export default function GradientArt({
  hue = ["#C68A4E", "#0d0d0d"],
  className = "",
  showSweep = true,
}: {
  hue?: [string, string];
  className?: string;
  showSweep?: boolean;
}) {
  const [primary, secondary] = hue;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 50% 100%, ${primary}22 0%, transparent 60%), radial-gradient(80% 60% at 80% 0%, ${primary}18 0%, transparent 55%), linear-gradient(180deg, #000 0%, ${secondary} 100%)`,
        }}
      />

      {showSweep && (
        <motion.div
          aria-hidden
          className="absolute -inset-x-1/4 top-1/3 hidden h-px md:block"
          style={{
            background: `linear-gradient(90deg, transparent, ${primary}aa, transparent)`,
          }}
          animate={{ x: ["-10%", "10%", "-10%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <svg
        className="absolute inset-0 hidden h-full w-full opacity-[0.056] md:block"
        aria-hidden
      >
        <defs>
          <pattern id="lux-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lux-grid)" />
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.85) 100%)",
        }}
      />
    </div>
  );
}
