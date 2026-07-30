import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers regarding photography, video and AI-enhanced vehicle presentation produced by Maison Motion Studio.",
  alternates: { canonical: "/legal/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Disclaimer"
      subtitle="Important information about how our work should be understood and used."
      lastUpdated="[Effective Date]"
    >
      <LegalSection number="01" title="No Guarantee of Sale">
        <p>
          Maison Motion Studio does not guarantee the sale of any vehicle presented through our
          photography, video or image enhancement services.
        </p>
      </LegalSection>

      <LegalSection number="02" title="No Guarantee of Price">
        <p>
          We do not guarantee that a vehicle will achieve a specific selling price as a result of
          our services. Final sale outcomes depend on factors outside our control, including
          market conditions, the vehicle itself and the seller&rsquo;s negotiation.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Nature of AI Enhancement">
        <p>
          Our AI-assisted image enhancement is intended to improve the presentation quality of a
          vehicle — for example through lighting, background and color refinement — while
          respecting the authentic condition and character of the vehicle. Enhancement is not
          intended to misrepresent the vehicle or conceal material defects.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Marketing Material">
        <p>
          All final photographs and video delivered by Maison Motion Studio constitute marketing
          material intended to present a vehicle attractively. They are not a substitute for an
          independent mechanical inspection, vehicle history check or professional valuation, and
          prospective buyers are encouraged to conduct their own due diligence.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Client Warranties">
        <p>
          By engaging our services, the client confirms that they own the vehicle presented, or
          have the permission of the owner to have it photographed and presented, and that they
          own or have permission to use any photographs or materials submitted to us.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Accuracy of Client-Provided Information">
        <p>
          Maison Motion Studio relies on the information provided by the client regarding the
          vehicle and is not responsible for any inaccurate, incomplete or misleading information
          supplied by the client that is subsequently reflected in the delivered content.
        </p>
      </LegalSection>

      <LegalSection number="07" title="No Professional Advice">
        <p>
          Nothing produced by Maison Motion Studio constitutes automotive appraisal, valuation,
          financial or legal advice.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Limitation">
        <p>
          This Disclaimer should be read together with our{" "}
          <a href="/legal/terms-and-conditions" className="text-bronze underline underline-offset-4">
            Terms & Conditions
          </a>
          , which set out the limitation of our liability in full.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Contact Us">
        <p>Questions about this Disclaimer can be sent to [Legal Email].</p>
      </LegalSection>
    </LegalLayout>
  );
}
