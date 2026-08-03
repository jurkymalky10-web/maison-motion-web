"use client";

import { useTranslations } from "next-intl";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

interface Section {
  number: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
}

export default function TermsContent() {
  const t = useTranslations("legal.terms");
  const sections = t.raw("sections") as Section[];

  return (
    <LegalLayout eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} lastUpdated="[Effective Date]">
      {sections.map((section) => (
        <LegalSection key={section.number} number={section.number} title={section.title}>
          {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
          {section.list && (
            <ul className="list-disc space-y-2 pl-5">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </LegalSection>
      ))}
    </LegalLayout>
  );
}
