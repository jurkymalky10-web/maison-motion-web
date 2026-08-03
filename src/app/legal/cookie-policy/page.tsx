import type { Metadata } from "next";
import CookiePolicyContent from "@/components/legal/CookiePolicyContent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Maison Motion Studio uses cookies on its website.",
  alternates: { canonical: "/legal/cookie-policy" },
};

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
