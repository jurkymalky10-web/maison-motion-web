import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "automotive photography",
    "automotive videography",
    "cinematic car videos",
    "premium automotive media",
  ],
});

export default function Home() {
  return <HomeContent />;
}
