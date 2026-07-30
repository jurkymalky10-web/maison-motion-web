import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Maison Motion Studio collects, uses and protects personal data in accordance with the GDPR.",
  alternates: { canonical: "/legal/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How we collect, use and protect your personal data."
      lastUpdated="[Effective Date]"
    >
      <LegalSection number="01" title="Introduction">
        <p>
          Maison Motion Studio (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or the
          &ldquo;Studio&rdquo;) provides professional automotive photography, AI-assisted image
          enhancement and cinematic automotive video for private sellers and dealerships. This
          Privacy Policy explains how we collect, use, disclose and safeguard personal data when
          you visit our website, contact us by email or Facebook, or engage our services.
        </p>
        <p>
          We are committed to protecting your privacy in accordance with the General Data
          Protection Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;) and applicable Slovak data
          protection law.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Who We Are">
        <p>The data controller responsible for your personal data is:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>[Business Name]</li>
          <li>[Business Address]</li>
          <li>IČO: [IČO]</li>
          <li>VAT Number: [VAT Number]</li>
          <li>Contact: [Legal Email]</li>
        </ul>
      </LegalSection>

      <LegalSection number="03" title="Personal Data We Collect">
        <p>Depending on how you interact with us, we may collect:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Contact details such as your name, email address and phone number.</li>
          <li>
            Vehicle information and photographs you submit to us for the purpose of a
            photography, video or image enhancement project.
          </li>
          <li>The content of correspondence exchanged with us by email or Facebook Messenger.</li>
          <li>
            Basic technical data collected through cookies, such as browser type and general
            usage of our website (see our{" "}
            <a href="/legal/cookie-policy" className="text-bronze underline underline-offset-4">
              Cookie Policy
            </a>
            ).
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="04" title="How We Use Your Data">
        <p>We use personal data to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to enquiries and provide quotes.</li>
          <li>Plan, schedule and deliver photography, video and image enhancement services.</li>
          <li>Communicate with you about an active or prospective project.</li>
          <li>Maintain accounting and legal records as required by Slovak law.</li>
          <li>Improve our website and services.</li>
        </ul>
      </LegalSection>

      <LegalSection number="05" title="Legal Basis for Processing">
        <p>We process personal data on the following legal bases under Article 6 GDPR:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-foreground">Contract</span> — to perform a service you have
            requested or agreed to.
          </li>
          <li>
            <span className="text-foreground">Consent</span> — where you have voluntarily
            provided information, for example by contacting us by email or Facebook.
          </li>
          <li>
            <span className="text-foreground">Legitimate interest</span> — to maintain our
            business records and respond to general enquiries.
          </li>
          <li>
            <span className="text-foreground">Legal obligation</span> — to comply with
            accounting, tax and other statutory requirements in Slovakia.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="06" title="Email Communication">
        <p>
          When you contact us by email, we process the content of that correspondence, your
          email address and any attachments (such as vehicle photographs) solely to respond to
          your enquiry and manage a potential or active project. We do not use your email address
          for unsolicited marketing.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Facebook Communication">
        <p>
          If you contact us through our Facebook Page, your message is processed to respond to
          your enquiry and manage a potential or active project. Communication through Facebook
          is also subject to Meta&rsquo;s own privacy policy and terms, which we encourage you to
          review, as we do not control how Meta processes data on its platform.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Cookies">
        <p>
          Our website uses a limited number of essential cookies required for the site to
          function correctly. We are prepared to use analytics and marketing cookies in the
          future, as described in our{" "}
          <a href="/legal/cookie-policy" className="text-bronze underline underline-offset-4">
            Cookie Policy
          </a>
          . No such cookies are active until they are enabled and, where required, your consent is
          obtained.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Data Retention">
        <p>
          We retain personal data only for as long as necessary for the purposes described in
          this Policy. Project-related correspondence and files are generally retained for a
          reasonable period following delivery to support any follow-up requests, after which they
          may be deleted. Records required for accounting and tax purposes are retained for the
          period mandated by Slovak law.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Sharing of Data">
        <p>
          We do not sell personal data. We may share limited data with trusted service providers
          strictly necessary to operate our business, such as email and website hosting providers,
          and Meta (Facebook), where you choose to contact us through that platform. Any such
          providers process data only as needed to provide their service to us.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Your Rights">
        <p>Under the GDPR, you have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request erasure of your data (&ldquo;right to be forgotten&rdquo;).</li>
          <li>Request restriction of, or object to, certain processing.</li>
          <li>Request a copy of your data in a portable format.</li>
          <li>Withdraw consent at any time, where processing is based on consent.</li>
          <li>
            Lodge a complaint with the Slovak Office for Personal Data Protection
            (Úrad na ochranu osobných údajov Slovenskej republiky).
          </li>
        </ul>
        <p>To exercise any of these rights, please contact us at [Legal Email].</p>
      </LegalSection>

      <LegalSection number="12" title="Data Security">
        <p>
          We apply reasonable technical and organizational measures to protect personal data
          against unauthorized access, loss or misuse. No method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection number="13" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices
          or applicable law. The updated version will be posted on this page with a revised
          effective date.
        </p>
      </LegalSection>

      <LegalSection number="14" title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal
          data, please contact us at [Legal Email].
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
