"use client";

import { motion } from "framer-motion";
import GradientArt from "./GradientArt";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-black pb-20 pt-40">
      <GradientArt hue={["#C68A4E", "#0d0d0d"]} />
      <div className="container-lux relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.35em] text-bronze"
        >
          {eyebrow}
        </motion.p>

        <motion.div
          aria-hidden
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-5 mb-5 h-px w-16 origin-left bg-gradient-to-r from-bronze-soft via-bronze to-bronze-deep md:hidden"
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
