"use client";

import { useTranslations } from "next-intl";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

interface Section {
  number: string;
  title: string;
  paragraphs?: string[];
}

export default function CookiePolicyContent() {
  const t = useTranslations("legal.cookies");
  const sections = t.raw("sections") as Section[];

  return (
    <LegalLayout eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} lastUpdated="[Effective Date]">
      {sections.map((section) => (
        <LegalSection key={section.number} number={section.number} title={section.title}>
          {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
        </LegalSection>
      ))}
    </LegalLayout>
  );
}
