import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeContent />;
}
