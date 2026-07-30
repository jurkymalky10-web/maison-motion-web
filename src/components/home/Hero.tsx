"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CornerFrame from "@/components/CornerFrame";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[720px] overflow-hidden bg-black">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/hero/hero-1.webp"
          alt="Maison Motion Studio — cinematic automotive presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right hero-image-bright"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </motion.div>

      <CornerFrame className="hidden opacity-30 md:block" inset={32} size={32} />

      <motion.div
        style={{ opacity }}
        className="container-lux relative z-10 flex h-full flex-col justify-center pt-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-xs uppercase tracking-[0.4em] text-bronze"
        >
          Automotive Visual Presentation Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="mt-7 max-w-4xl font-display text-[11.3vw] leading-[1.15] tracking-tight text-balance sm:text-[3.25rem] md:text-[4.1rem] lg:text-[4.9rem]"
        >
          First Impressions Matter.
          <br />
          We Make Them <span className="italic bronze-gradient-text">Exceptional.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          className="mt-12 max-w-[580px] text-base leading-relaxed text-foreground/60 md:text-lg"
        >
          We create premium automotive presentations through professional
          photography, cinematic video and natural image enhancement. Every
          vehicle is presented with authenticity, attention to detail and a
          premium visual standard designed to help private sellers and
          dealerships make a stronger first impression.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
          className="mt-14 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-bronze px-8 py-4 text-xs uppercase tracking-[0.25em] text-black transition-all duration-[400ms] ease-out hover:shadow-[0_0_24px_rgba(198,138,78,0.45)]"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-[400ms] ease-out hover:border-bronze hover:text-bronze hover:shadow-[0_0_24px_rgba(198,138,78,0.3)]"
          >
            Request a Presentation
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute inset-x-0 bottom-10 z-10 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-bronze to-transparent"
        />
      </motion.div>
    </section>
  );
}
