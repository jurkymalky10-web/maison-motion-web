"use client";

import Hero from "./Hero";
import ServiceHighlights from "./ServiceHighlights";
import IntroStatement from "./IntroStatement";
import BeforeAfterSlider from "./BeforeAfterSlider";
import WhyMaisonMotion from "./WhyMaisonMotion";
import PortfolioPreview from "./PortfolioPreview";
import ServicesSection from "./ServicesSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";

const marqueeItems = [
  "Cinematic Film",
  "Studio Photography",
  "CGI & Rendering",
  "Motion Design",
  "Color Grading",
  "Creative Direction",
];

export default function HomeContent() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <IntroStatement />
      <MarqueeStrip items={marqueeItems} />
      <BeforeAfterSlider />
      <PortfolioPreview />
      <ServicesSection />
      <ProcessTimeline
        eyebrow="How We Work"
        title="From Consultation to Final Delivery"
        titleAccent="Final Delivery"
        subtitle="Six disciplined stages stand between a first conversation and a finished master file — nothing rushed, nothing skipped."
        bgClassName="bg-charcoal"
      />
      <WhyMaisonMotion />
      <CTASection
        eyebrow="By Private Consultation"
        title="Reserve Your Presentation."
        subtitle="We accept a limited number of productions each season. Tell us about the vehicle, and we'll confirm availability within one business day."
        ctaLabel="Request a Private Consultation"
      />
    </>
  );
}
