import type { Metadata } from "next";
import CookiePolicyContent from "@/components/legal/CookiePolicyContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Maison Motion Studio uses cookies on its website.",
  path: "/legal/cookie-policy",
});

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
