import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Copyright & Licensing",
  description:
    "How copyright and usage licenses work for photography and video produced by Maison Motion Studio.",
  alternates: { canonical: "/legal/copyright-licensing" },
};

export default function CopyrightLicensingPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Copyright & Licensing"
      subtitle="Ownership and usage rights for the work we produce."
      lastUpdated="[Effective Date]"
    >
      <LegalSection number="01" title="Ownership of Creative Work">
        <p>
          Maison Motion Studio owns all copyright and intellectual property rights in the
          photographs, cinematic video and AI-enhanced images it produces, unless otherwise agreed
          in writing prior to the start of a project.
        </p>
      </LegalSection>

      <LegalSection number="02" title="License Granted to Clients">
        <p>
          Upon full payment, the client receives a license to use the delivered content for the
          purpose agreed at the time of booking, such as presenting a vehicle for private sale, on
          a marketplace listing, or in dealership marketing. This license permits the client to
          use the delivered content for that agreed purpose.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Restrictions on Use">
        <p>
          Unless otherwise agreed in writing, the client may not resell, sublicense or redistribute
          the delivered photographs or video to third parties for purposes beyond the agreed use,
          and may not present the content as having been produced by another party.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Portfolio & Promotional Use">
        <p>
          Maison Motion Studio may display completed work in its portfolio, on its website and
          across its social media channels for promotional purposes. If a client requires
          confidentiality for a specific project, this should be requested in writing before the
          project begins.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Third-Party Marks">
        <p>
          Vehicle manufacturer names, logos and trademarks that may appear within delivered
          photographs or video remain the property of their respective owners. Their appearance in
          our work does not imply any affiliation with, or endorsement by, the vehicle
          manufacturer.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Enforcement">
        <p>
          Unauthorized use, resale or redistribution of our work outside the terms of the license
          granted may result in legal action to protect our intellectual property rights.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Contact Us">
        <p>Questions about copyright or licensing can be sent to [Legal Email].</p>
      </LegalSection>
    </LegalLayout>
  );
}
