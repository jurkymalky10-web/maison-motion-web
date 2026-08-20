import type { Metadata } from "next";
import DisclaimerContent from "@/components/legal/DisclaimerContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Important disclaimers regarding photography, video and AI-enhanced vehicle presentation produced by Maison Motion Studio.",
  path: "/legal/disclaimer",
});

export default function DisclaimerPage() {
  return <DisclaimerContent />;
}
