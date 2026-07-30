import type { Metadata } from "next";
import AudiRs5Content from "@/components/portfolio/AudiRs5Content";

export const metadata: Metadata = {
  title: "Audi RS5 — Premium Vehicle Presentation",
  description:
    "A premium cinematic vehicle presentation for the Audi RS5 combining professional automotive photography and natural image enhancement.",
  alternates: { canonical: "/portfolio/audi-rs5" },
};

export default function AudiRs5Page() {
  return <AudiRs5Content />;
}
