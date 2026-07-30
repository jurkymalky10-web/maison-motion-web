import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Maison Motion Studio uses cookies on its website.",
  alternates: { canonical: "/legal/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookie Policy"
      subtitle="How our website uses cookies, and how you can manage them."
      lastUpdated="[Effective Date]"
    >
      <LegalSection number="01" title="What Are Cookies">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help
          websites function correctly and can be used to remember preferences or understand how a
          site is used.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Essential Cookies">
        <p>
          We use a limited number of essential cookies that are strictly necessary for our website
          to operate correctly, such as maintaining basic site functionality and security. These
          cookies do not require consent and cannot be disabled, as the website would not function
          properly without them.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Analytics Cookies">
        <p>
          We do not currently use analytics cookies. Our website is prepared for future
          integration with Google Analytics to help us understand how visitors use our site. If
          and when this is enabled, this Cookie Policy will be updated and, where required by law,
          your consent will be requested before any analytics cookies are set.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Marketing Cookies">
        <p>
          We do not currently use marketing cookies. Our website is prepared for future
          integration with Meta Pixel to help us understand the effectiveness of our
          communications. If and when this is enabled, this Cookie Policy will be updated and,
          where required by law, your consent will be requested before any marketing cookies are
          set.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Managing Cookies">
        <p>
          You can control and manage cookies through your browser settings, including blocking or
          deleting cookies at any time. Please note that disabling essential cookies may affect
          the functionality of our website. Most browsers allow you to review and manage cookies
          in their privacy or security settings.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Changes to This Policy">
        <p>
          We may update this Cookie Policy from time to time, particularly as analytics or
          marketing cookies are introduced. Any changes will be posted on this page with a revised
          effective date.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Contact Us">
        <p>Questions about this Cookie Policy can be sent to [Legal Email].</p>
      </LegalSection>
    </LegalLayout>
  );
}
