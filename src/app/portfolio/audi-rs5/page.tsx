import type { Metadata } from "next";
import AudiRs5Content from "@/components/portfolio/AudiRs5Content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Audi RS5 — Premium Vehicle Presentation",
  description:
    "A premium cinematic vehicle presentation for the Audi RS5 combining professional automotive photography, cinematic video and natural image enhancement.",
  path: "/portfolio/audi-rs5",
  image: "/portfolio/audi-rs5/hero1.png",
  keywords: ["luxury car photography", "cinematic car videos", "automotive photography"],
});

export default function AudiRs5Page() {
  return <AudiRs5Content />;
}
