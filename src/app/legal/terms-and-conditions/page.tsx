import type { Metadata } from "next";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing photography, video and image enhancement services provided by Maison Motion Studio.",
  alternates: { canonical: "/legal/terms-and-conditions" },
};

export default function TermsPage() {
  return <TermsContent />;
}
