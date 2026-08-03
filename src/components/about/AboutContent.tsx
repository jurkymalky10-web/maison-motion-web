"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";

export default function AboutContent() {
  const t = useTranslations("about");
  const processSteps = t.raw("process.steps") as string[];
  const assurances = t.raw("cta.assurances") as string[];

  return (
    <>
      <PageHeader
        eyebrow={t("pageHeader.eyebrow")}
        title={t("pageHeader.title")}
        subtitle={t("pageHeader.subtitle")}
      />

      <section className="relative bg-black py-28 md:py-36">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">{t("mission.eyebrow")}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {t("mission.headingPre")}
              <span className="italic bronze-gradient-text">{t("mission.headingAccent")}</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              {t("mission.paragraph")}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative bg-charcoal py-28 md:py-36">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">{t("whyItMatters.eyebrow")}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {t("whyItMatters.headingPre")}
              <span className="italic bronze-gradient-text">{t("whyItMatters.headingAccent")}</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              {t("whyItMatters.paragraph")}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative bg-black py-28 md:py-36">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">{t("whatWeBelieve.eyebrow")}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {t("whatWeBelieve.headingPre")}
              <span className="italic bronze-gradient-text">{t("whatWeBelieve.headingAccent")}</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              {t("whatWeBelieve.paragraph")}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative bg-charcoal py-28 md:py-36">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">{t("process.eyebrow")}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {t("process.headingPre")}
              <span className="italic bronze-gradient-text">{t("process.headingAccent")}</span>
            </h2>
          </RevealOnScroll>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((title, i) => (
              <RevealOnScroll key={title} delay={0.06 * i}>
                <div className="border-t border-bronze/40 pt-6">
                  <span className="font-display text-4xl text-bronze/70">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl tracking-tight">{title}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        ctaLabel={t("cta.ctaLabel")}
        assurances={assurances}
      />
    </>
  );
}
