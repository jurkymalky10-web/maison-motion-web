import type { Metadata } from "next";
import CopyrightLicensingContent from "@/components/legal/CopyrightLicensingContent";

export const metadata: Metadata = {
  title: "Copyright & Licensing",
  description:
    "How copyright and usage licenses work for photography and video produced by Maison Motion Studio.",
  alternates: { canonical: "/legal/copyright-licensing" },
};

export default function CopyrightLicensingPage() {
  return <CopyrightLicensingContent />;
}
