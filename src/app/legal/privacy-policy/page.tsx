import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Maison Motion Studio collects, uses and protects personal data in accordance with the GDPR.",
  alternates: { canonical: "/legal/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
