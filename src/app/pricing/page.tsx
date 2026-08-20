import type { Metadata } from "next";
import PricingContent from "@/components/pricing/PricingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Investment & Pricing",
  description:
    "Transparent pricing for premium dealership marketing, vehicle advertising and car sales marketing. Every project is individually tailored, starting from €149.",
  path: "/pricing",
  keywords: ["dealership marketing", "vehicle advertising", "car sales marketing"],
});

export default function PricingPage() {
  return <PricingContent />;
}
