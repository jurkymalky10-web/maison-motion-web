import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Maison Motion Studio",
  description:
    "Maison Motion Studio is a premium automotive creative agency helping private sellers and dealerships present vehicles through professional photography and cinematic video that create stronger first impressions.",
  path: "/about",
  keywords: ["premium automotive media", "automotive content creation", "dealership marketing"],
});

export default function AboutPage() {
  return <AboutContent />;
}
