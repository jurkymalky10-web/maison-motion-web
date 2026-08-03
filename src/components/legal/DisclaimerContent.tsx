"use client";

import { useTranslations } from "next-intl";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

interface Section {
  number: string;
  title: string;
  paragraphs?: string[];
  linkParagraph?: { pre: string; linkText: string; post: string };
}

export default function DisclaimerContent() {
  const t = useTranslations("legal.disclaimer");
  const sections = t.raw("sections") as Section[];

  return (
    <LegalLayout eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} lastUpdated="[Effective Date]">
      {sections.map((section) => (
        <LegalSection key={section.number} number={section.number} title={section.title}>
          {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
          {section.linkParagraph && (
            <p>
              {section.linkParagraph.pre}
              <a href="/legal/terms-and-conditions" className="text-bronze underline underline-offset-4">
                {section.linkParagraph.linkText}
              </a>
              {section.linkParagraph.post}
            </p>
          )}
        </LegalSection>
      ))}
    </LegalLayout>
  );
}
