import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing photography, video and image enhancement services provided by Maison Motion Studio.",
  alternates: { canonical: "/legal/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      subtitle="The terms that govern every project undertaken with Maison Motion Studio."
      lastUpdated="[Effective Date]"
    >
      <LegalSection number="01" title="Acceptance of Terms">
        <p>
          These Terms & Conditions (&ldquo;Terms&rdquo;) govern the use of the Maison Motion
          Studio website and any services booked with us. By contacting us, placing an order or
          using our services, you agree to be bound by these Terms.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Services Offered">
        <p>Maison Motion Studio provides the following services:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Professional automotive photography.</li>
          <li>AI-assisted image enhancement.</li>
          <li>Cinematic automotive video.</li>
          <li>Complete vehicle presentation packages for private sellers and dealerships.</li>
        </ul>
      </LegalSection>

      <LegalSection number="03" title="Ordering Process">
        <p>
          Projects begin with an enquiry by email or Facebook. Following a short consultation, we
          confirm the scope of the project, schedule a session and provide a quote. A project is
          considered confirmed once both parties have agreed on scope, price and timing.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Pricing">
        <p>
          Pricing is quoted individually for each project based on the scope of work requested.
          All prices are communicated and agreed in writing before a session is scheduled. Unless
          stated otherwise, prices are quoted in EUR.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Delivery">
        <p>
          Delivery timelines are agreed individually for each project and confirmed in writing
          prior to the session. Final photographs and video are delivered digitally.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Client Responsibilities">
        <p>By booking a session, the client agrees to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Ensure the vehicle is reasonably clean, accessible and ready for the agreed session.
          </li>
          <li>
            Confirm that they own the vehicle, or have the permission of the owner, to have it
            photographed and presented.
          </li>
          <li>Provide accurate information about the vehicle and the intended use of the content.</li>
          <li>
            Confirm that they own, or have permission to use, any photographs or materials
            submitted to us.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="07" title="Intellectual Property">
        <p>
          Unless otherwise agreed in writing, Maison Motion Studio retains all copyright and
          intellectual property rights in the photographs, video and enhanced images it produces.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Licensing">
        <p>
          Upon full payment, the client is granted a license to use the delivered content for the
          agreed purpose, such as a vehicle listing, marketplace advertisement or dealership
          marketing. This license does not transfer ownership or copyright, which remains with
          Maison Motion Studio unless otherwise agreed in writing.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Payments">
        <p>
          Payment terms, including any deposit required to reserve a session, are agreed in
          writing before work begins. Final files are delivered once payment has been received in
          full, unless otherwise agreed.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Refund Policy">
        <p>
          Deposits are generally non-refundable once a session has been scheduled, as studio time
          and resources are reserved on that basis. Requests for a refund outside of this will be
          considered on a case-by-case basis.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Cancellation">
        <p>
          Clients are asked to provide as much notice as possible when cancelling or rescheduling
          a session. Cancellations made with limited notice may be subject to a cancellation fee,
          to be agreed on a case-by-case basis.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Maison Motion Studio shall not be liable for any
          indirect, incidental or consequential damages arising from the use of our services or
          delivered content. Our total liability in connection with any project is limited to the
          amount paid by the client for that project.
        </p>
        <p>
          Maison Motion Studio does not guarantee the sale of any vehicle or a specific selling
          price as a result of our services.
        </p>
      </LegalSection>

      <LegalSection number="13" title="Force Majeure">
        <p>
          Maison Motion Studio shall not be held liable for any delay or failure to perform
          resulting from causes beyond our reasonable control, including but not limited to
          adverse weather, illness, accident, equipment failure or other unforeseeable
          circumstances. Affected sessions will be rescheduled as soon as reasonably possible.
        </p>
      </LegalSection>

      <LegalSection number="14" title="Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws of the Slovak
          Republic. Any disputes arising out of or in connection with these Terms shall be subject
          to the exclusive jurisdiction of the competent courts of Slovakia.
        </p>
      </LegalSection>

      <LegalSection number="15" title="Contact Us">
        <p>
          Questions regarding these Terms & Conditions can be sent to [Legal Email].
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
