import type { Metadata } from "next";
import PricingContent from "@/components/pricing/PricingContent";

export const metadata: Metadata = {
  title: "Investment & Pricing",
  description:
    "Every project is individually tailored. See what's included in a Maison Motion Studio presentation, starting from €149.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingContent />;
}
