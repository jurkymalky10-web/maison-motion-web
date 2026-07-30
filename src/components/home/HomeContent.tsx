import Hero from "./Hero";
import ServiceHighlights from "./ServiceHighlights";
import WhyMaisonMotion from "./WhyMaisonMotion";
import CTASection from "@/components/CTASection";

export default function HomeContent() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <WhyMaisonMotion />
      <CTASection
        eyebrow="By Private Consultation"
        title="Reserve Your Presentation."
        subtitle="We accept a limited number of productions each season. Tell us about the vehicle, and we'll confirm availability within one business day."
        ctaLabel="Request a Private Consultation"
        paddingClassName="py-20 md:py-32"
      />
    </>
  );
}
