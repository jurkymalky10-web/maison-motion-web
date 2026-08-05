import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroller";
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
    "automotive film studio",
    "car photography studio",
    "luxury automotive CGI",
    "car launch film production",
    "automotive motion design",
    "supercar photography",
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
  },
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
        <NextIntlClientProvider messages={messages}>
          <SmoothScroller>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroller>
        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-EC4KHCDMEW" />
      </body>
    </html>
  );
}
