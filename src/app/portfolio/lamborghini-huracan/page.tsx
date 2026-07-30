import type { Metadata } from "next";
import LamborghiniHuracanContent from "@/components/portfolio/LamborghiniHuracanContent";

export const metadata: Metadata = {
  title: "Lamborghini Huracán — Cinematic Automotive Presentation",
  description:
    "A cinematic automotive presentation for the Lamborghini Huracán combining premium photography, cinematic video and natural image enhancement.",
  alternates: { canonical: "/portfolio/lamborghini-huracan" },
};

export default function LamborghiniHuracanPage() {
  return <LamborghiniHuracanContent />;
}
