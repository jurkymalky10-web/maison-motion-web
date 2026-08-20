import { siteConfig } from "@/lib/site";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-master.png`,
    image: `${siteConfig.url}/hero/hero-1.webp`,
    email: siteConfig.email,
    priceRange: "€€",
    areaServed: "Worldwide",
    sameAs: [siteConfig.social.facebook],
    serviceType: [
      "Automotive Photography",
      "Automotive Videography",
      "Cinematic Car Videos",
      "Dealership Marketing",
      "Vehicle Advertising",
      "Premium Automotive Media",
      "Luxury Car Photography",
      "Car Sales Marketing",
      "AI Automotive Content",
      "Automotive Content Creation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
