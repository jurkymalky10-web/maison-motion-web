import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroller";
import StructuredData from "@/components/StructuredData";
import AnalyticsLoader from "@/components/analytics/AnalyticsLoader";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentContext";
import CookieConsentBanner from "@/components/cookies/CookieConsentBanner";
import CookiePreferencesModal from "@/components/cookies/CookiePreferencesModal";
import { siteConfig } from "@/lib/site";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "automotive photography",
    "automotive videography",
    "cinematic car videos",
    "dealership marketing",
    "vehicle advertising",
    "premium automotive media",
    "luxury car photography",
    "car sales marketing",
    "AI automotive content",
    "automotive content creation",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/hero/hero-1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/hero/hero-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${bodoni.variable} ${inter.variable}`}>
      <body className="grain min-h-screen bg-background font-sans text-foreground">
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          <CookieConsentProvider>
            <SmoothScroller>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SmoothScroller>
            <CookieConsentBanner />
            <CookiePreferencesModal />
            <AnalyticsLoader />
          </CookieConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
