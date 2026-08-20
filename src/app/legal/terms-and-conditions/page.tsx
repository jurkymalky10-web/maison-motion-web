import type { Metadata } from "next";
import TermsContent from "@/components/legal/TermsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing photography, video and image enhancement services provided by Maison Motion Studio.",
  path: "/legal/terms-and-conditions",
});

export default function TermsPage() {
  return <TermsContent />;
}
