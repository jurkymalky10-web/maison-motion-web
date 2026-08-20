import type { Metadata } from "next";
import BmwM3Content from "@/components/portfolio/BmwM3Content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "BMW M3 — Premium Vehicle Presentation",
  description:
    "A premium vehicle presentation for the BMW M3 combining professional automotive photography, cinematic video and natural image enhancement.",
  path: "/portfolio/bmw-m3",
  image: "/portfolio/bmw-m3/fd69a54a-dab2-45c2-acb7-eefb0291977f.webp",
  keywords: ["luxury car photography", "cinematic car videos", "automotive photography"],
});

export default function BmwM3Page() {
  return <BmwM3Content />;
}
