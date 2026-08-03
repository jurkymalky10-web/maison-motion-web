"use client";

import { useTranslations } from "next-intl";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

interface Section {
  number: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  listLinkItem?: { pre: string; linkText: string; post: string };
  linkParagraph?: { pre: string; linkText: string; post: string };
  paragraphsAfterList?: string[];
}

export default function PrivacyPolicyContent() {
  const t = useTranslations("legal.privacy");
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
              {section.listLinkItem && (
                <li>
                  {section.listLinkItem.pre}
                  <a href="/legal/cookie-policy" className="text-bronze underline underline-offset-4">
                    {section.listLinkItem.linkText}
                  </a>
                  {section.listLinkItem.post}
                </li>
              )}
            </ul>
          )}
          {section.linkParagraph && (
            <p>
              {section.linkParagraph.pre}
              <a href="/legal/cookie-policy" className="text-bronze underline underline-offset-4">
                {section.linkParagraph.linkText}
              </a>
              {section.linkParagraph.post}
            </p>
          )}
          {section.paragraphsAfterList?.map((p, i) => <p key={i}>{p}</p>)}
        </LegalSection>
      ))}
    </LegalLayout>
  );
}
