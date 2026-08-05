import type { Metadata } from "next";
import { siteConfig } from "./site";

export function buildMetadata({
  title,
  description,
  path,
  image = "/hero/hero-1.webp",
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogTitle = title.includes(siteConfig.name) ? title : `${title} — ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      title: ogTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
