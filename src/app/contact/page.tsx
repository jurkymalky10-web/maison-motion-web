import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Maison Motion Studio",
  description:
    "Get in touch with Maison Motion Studio to discuss automotive photography, cinematic videography and premium vehicle advertising for your car.",
  path: "/contact",
  keywords: ["automotive photography", "automotive videography", "vehicle advertising"],
});

export default function ContactPage() {
  return <ContactContent />;
}
