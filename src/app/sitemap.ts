import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/portfolio",
    "/portfolio/bmw-m3",
    "/portfolio/bmw-m5",
    "/portfolio/audi-rs5",
    "/portfolio/audi-rs6",
    "/portfolio/lamborghini-huracan",
    "/portfolio/porsche-911",
    "/services",
    "/pricing",
    "/about",
    "/contact",
  ];
  const legalRoutes = [
    "/legal/privacy-policy",
    "/legal/terms-and-conditions",
    "/legal/cookie-policy",
    "/legal/copyright-licensing",
    "/legal/disclaimer",
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...legalRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
