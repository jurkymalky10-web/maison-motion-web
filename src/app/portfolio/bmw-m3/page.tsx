import type { Metadata } from "next";
import BmwM3Content from "@/components/portfolio/BmwM3Content";

export const metadata: Metadata = {
  title: "BMW M3 — Premium Vehicle Presentation",
  description:
    "A premium vehicle presentation for the BMW M3 combining professional automotive photography and natural image enhancement.",
  alternates: { canonical: "/portfolio/bmw-m3" },
};

export default function BmwM3Page() {
  return <BmwM3Content />;
}
