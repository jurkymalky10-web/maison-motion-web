"use client";

import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";

const processSteps = [
  { index: "01", title: "Consultation" },
  { index: "02", title: "Photography" },
  { index: "03", title: "Professional Editing" },
  { index: "04", title: "Cinematic Video" },
  { index: "05", title: "Final Delivery" },
];

export default function AboutContent() {
  return (
    <>
      <PageHeader
        eyebrow="About Maison Motion"
        title="About Maison Motion"
        subtitle="We help private sellers and dealerships present vehicles with premium photography and cinematic video that create stronger first impressions."
      />

      <section className="relative bg-black py-28 md:py-36">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">01 Our Mission</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Our <span className="italic bronze-gradient-text">Mission</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              Maison Motion was created with one goal: to transform ordinary
              vehicle listings into premium visual presentations while
              preserving every authentic detail.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative bg-charcoal py-28 md:py-36">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">02 Why It Matters</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Why It <span className="italic bronze-gradient-text">Matters</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              A buyer forms an opinion within seconds. Professional
              presentation builds trust, increases perceived value and helps
              every vehicle stand out.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative bg-black py-28 md:py-36">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">03 What We Believe</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              What We <span className="italic bronze-gradient-text">Believe</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60">
              Every vehicle deserves premium presentation, regardless of price
              or brand.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative bg-charcoal py-28 md:py-36">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">04 Our Process</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Our <span className="italic bronze-gradient-text">Process</span>
            </h2>
          </RevealOnScroll>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={step.index} delay={0.06 * i}>
                <div className="border-t border-bronze/40 pt-6">
                  <span className="font-display text-4xl text-bronze/70">{step.index}</span>
                  <h3 className="mt-4 font-display text-xl tracking-tight">{step.title}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Ready to present your vehicle at its best?"
        subtitle="Tell us about your vehicle and we'll create a premium presentation through professional photography, cinematic video and authentic image enhancement that helps it stand out."
        ctaLabel="Request a Presentation"
        assurances={["Reply within one business day", "Private sellers & dealerships", "Premium vehicle presentation"]}
      />
    </>
  );
}
