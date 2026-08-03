"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import CornerFrame from "@/components/CornerFrame";

export default function Hero() {
  const t = useTranslations("home.hero");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[68svh] min-h-[480px] overflow-hidden bg-black md:h-[100svh] md:min-h-[720px]">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/hero/hero-1.webp"
          alt="Maison Motion Studio — cinematic automotive presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] hero-image-bright md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </motion.div>

      <CornerFrame className="hidden opacity-30 md:block" inset={32} size={32} />

      <motion.div
        style={{ opacity }}
        className="container-lux relative z-10 flex h-full flex-col justify-center pt-20 md:pt-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-xs uppercase tracking-[0.4em] text-bronze"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-7 max-w-4xl font-display text-[11.3vw] leading-[1.15] tracking-tight text-balance sm:text-[3.25rem] md:text-[4.1rem] lg:text-[4.9rem]"
        >
          {t("titleLine1")}
          <br />
          {t("titleLine2")} <span className="italic bronze-gradient-text">{t("titleAccent")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-12 max-w-[580px] text-base leading-relaxed text-foreground/60 md:text-lg"
        >
          {t("paragraph")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-bronze px-8 py-4 text-xs uppercase tracking-[0.25em] text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(198,138,78,0.45)]"
          >
            {t("viewPortfolio")}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:border-bronze hover:text-bronze hover:shadow-[0_0_24px_rgba(198,138,78,0.3)]"
          >
            {t("requestPresentation")}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute inset-x-0 bottom-10 z-10 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
          {t("scroll")}
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
