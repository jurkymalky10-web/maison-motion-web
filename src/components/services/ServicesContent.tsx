"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";
import ProcessTimeline from "@/components/ProcessTimeline";

interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
}

export default function ServicesContent() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];
  const steps = t.raw("process.steps") as { title: string; description: string }[];

  return (
    <>
      <PageHeader
        eyebrow={t("pageHeader.eyebrow")}
        title={t("pageHeader.title")}
        subtitle={t("pageHeader.subtitle")}
      />

      <section className="relative bg-black py-28 md:py-36">
        <div className="container-lux">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-hairline md:grid-cols-2">
            {items.map((service, i) => (
              <RevealOnScroll key={service.title} delay={0.04 * i} className="h-full">
                <div className="group h-full bg-charcoal p-10 transition-colors duration-500 hover:bg-black md:p-12">
                  <span className="font-display text-sm text-bronze">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-6 font-display text-3xl tracking-tight">{service.title}</h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/55">
                    {service.description}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="border border-hairline px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-foreground/55"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline
        eyebrow={t("process.eyebrow")}
        title={t("process.title")}
        titleAccent={t("process.titleAccent")}
        subtitle={t("process.subtitle")}
        bgClassName="bg-charcoal"
        steps={steps}
      />

      <CTASection
        eyebrow={t("cta.eyebrow")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        ctaLabel={t("cta.ctaLabel")}
      />
    </>
  );
}
