"use client";

import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";
import ProcessTimeline from "@/components/ProcessTimeline";
import { services } from "@/lib/data";

export default function ServicesContent() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Premium Vehicle Presentation"
        subtitle="Professional automotive photography, cinematic vehicle videos and premium image enhancement designed to help private sellers and dealerships create stronger first impressions, build trust and present every vehicle at its highest potential."
      />

      <section className="relative bg-black py-28 md:py-36">
        <div className="container-lux">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-hairline md:grid-cols-2">
            {services.map((service, i) => (
              <RevealOnScroll key={service.index} delay={0.04 * i} className="h-full">
                <div className="group h-full bg-charcoal p-10 transition-colors duration-500 hover:bg-black md:p-12">
                  <span className="font-display text-sm text-bronze">{service.index}</span>
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
        eyebrow="Our Process"
        title="From Brief to Master Delivery"
        titleAccent="Master Delivery"
        subtitle="Six disciplined stages carry every commission from first conversation to finished master file."
        bgClassName="bg-charcoal"
      />

      <CTASection
        eyebrow="Bespoke Scopes"
        title="Tell Us What You're Building."
        subtitle="Every engagement is scoped around the vehicle, the market and the deadline — request a tailored proposal."
        ctaLabel="Request a Proposal"
      />
    </>
  );
}
