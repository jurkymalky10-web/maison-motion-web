import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Automotive Photography & Videography Services",
  description:
    "Cinematic automotive videography, premium car photography, AI-enhanced vehicle marketing and dealership media production — tailored creative services for automotive brands.",
  path: "/services",
  keywords: [
    "automotive photography",
    "automotive videography",
    "cinematic car videos",
    "AI automotive content",
    "automotive content creation",
  ],
});

export default function ServicesPage() {
  return <ServicesContent />;
}
