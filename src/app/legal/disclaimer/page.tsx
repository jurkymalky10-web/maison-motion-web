import type { Metadata } from "next";
import DisclaimerContent from "@/components/legal/DisclaimerContent";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers regarding photography, video and AI-enhanced vehicle presentation produced by Maison Motion Studio.",
  alternates: { canonical: "/legal/disclaimer" },
};

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
