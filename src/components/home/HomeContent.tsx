import { useTranslations } from "next-intl";
import Hero from "./Hero";
import ServiceHighlights from "./ServiceHighlights";
import WhyMaisonMotion from "./WhyMaisonMotion";
import CTASection from "@/components/CTASection";

export default function HomeContent() {
  const t = useTranslations("home.cta");

  return (
    <>
      <Hero />
      <ServiceHighlights />
      <WhyMaisonMotion />
      <CTASection
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        ctaLabel={t("ctaLabel")}
        paddingClassName="py-20 md:py-32"
      />
    </>
  );
}
