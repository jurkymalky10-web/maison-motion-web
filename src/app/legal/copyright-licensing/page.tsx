import type { Metadata } from "next";
import CopyrightLicensingContent from "@/components/legal/CopyrightLicensingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Copyright & Licensing",
  description:
    "How copyright and usage licenses work for photography and video produced by Maison Motion Studio.",
  path: "/legal/copyright-licensing",
});

export default function CopyrightLicensingPage() {
  return <CopyrightLicensingContent />;
}
