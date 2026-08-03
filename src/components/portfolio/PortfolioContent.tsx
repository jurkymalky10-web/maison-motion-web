"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import GradientArt from "@/components/GradientArt";
import { portfolioCategories, portfolioItems, type PortfolioCategory } from "@/lib/data";

const categoryKeyMap: Record<PortfolioCategory | "All", string> = {
  All: "all",
  Photography: "photography",
  "Cinematic Video": "cinematicVideo",
  "Image Enhancement": "imageEnhancement",
  "Complete Presentations": "completePresentations",
};

export default function PortfolioContent() {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");
  const t = useTranslations("portfolioListing");
  const tCategories = useTranslations("portfolioListing.categories");

  const filtered =
    active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      <PageHeader
        eyebrow={t("pageHeader.eyebrow")}
        title={t("pageHeader.title")}
        subtitle={t("pageHeader.subtitle")}
      />

      <section className="relative bg-black pb-28 pt-16 md:pb-36">
        <div className="container-lux">
          <div className="flex flex-wrap gap-3">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors ${
                  active === category
                    ? "border-bronze bg-bronze text-black"
                    : "border-hairline text-foreground/60 hover:border-bronze/60 hover:text-foreground"
                }`}
              >
                {tCategories(categoryKeyMap[category])}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href ?? "/portfolio"}
                    className="group relative block aspect-[4/3] overflow-hidden rounded-sm"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                      <GradientArt hue={item.hue} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-bronze">
                          {tCategories(categoryKeyMap[item.category])}
                        </p>
                        <h3 className="mt-2 font-display text-2xl tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-foreground/55">{t(`items.${item.slug}`)}</p>
                      </div>
                      <span className="translate-x-2 text-bronze opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
      />
    </>
  );
}
