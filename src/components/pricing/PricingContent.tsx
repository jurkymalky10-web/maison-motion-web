"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";

function Divider() {
  return (
    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />
  );
}

export default function PricingContent() {
  const t = useTranslations("pricing");
  const includes = t.raw("startingPrice.items") as string[];

  return (
    <>
      <PageHeader
        eyebrow={t("pageHeader.eyebrow")}
        title={t("pageHeader.title")}
        subtitle={t("pageHeader.subtitle")}
      />

      <section className="relative bg-black py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <p className="text-base leading-relaxed text-foreground/60 md:text-lg">
              {t("intro.paragraph")}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="text-center">
            <h2 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {t("startingPrice.headingPre")}
              <span className="italic bronze-gradient-text">{t("startingPrice.headingAccent")}</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08} className="mx-auto mt-6 max-w-xl text-center">
            <p className="text-base leading-relaxed text-foreground/60 md:text-lg">
              {t("startingPrice.subtitle")}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-bronze">
              {t("startingPrice.includesHeading")}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2.5 h-px w-6 shrink-0 bg-bronze" />
                  <span className="text-base leading-relaxed text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll className="py-4">
        <Divider />
      </RevealOnScroll>

      <section className="relative bg-black py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              {t("noHiddenFees.heading")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/60">
              {t("noHiddenFees.paragraph")}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll className="py-4">
        <Divider />
      </RevealOnScroll>

      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="container-lux grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <RevealOnScroll>
            <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {t("visionInMind.heading")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              {t("visionInMind.paragraph1")}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1} className="border-t border-hairline pt-10 md:border-t-0 md:border-l md:pl-16 md:pt-0">
            <p className="max-w-xl text-base leading-relaxed text-foreground/60">
              {t("visionInMind.paragraph2")}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll className="py-4">
        <Divider />
      </RevealOnScroll>

      <section className="relative bg-black py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {t("lookingForMore.heading")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              {t("lookingForMore.paragraph1")}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/60">
              {t("lookingForMore.paragraph2")}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        ctaLabel={t("cta.ctaLabel")}
        href="/contact"
      />
    </>
  );
}
