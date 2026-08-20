import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Automotive Photography & Video Projects",
  description:
    "Explore Maison Motion Studio's portfolio of luxury car photography, cinematic car videos and AI-enhanced vehicle marketing across premium automotive brands.",
  path: "/portfolio",
  keywords: ["luxury car photography", "cinematic car videos", "automotive photography"],
});

export default function PortfolioPage() {
  return <PortfolioContent />;
}
