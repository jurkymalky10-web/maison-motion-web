import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Maison Motion Studio collects, uses and protects personal data in accordance with the GDPR.",
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
