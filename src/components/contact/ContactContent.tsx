"use client";

import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import { siteConfig } from "@/lib/site";

export default function ContactContent() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start the Conversation"
        subtitle="Tell us about your vehicle and we'll respond personally within 24 hours."
      />

      <section className="relative bg-black py-28 md:py-36">
        <div className="container-lux flex flex-col items-center text-center">
          <RevealOnScroll className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center bg-bronze px-10 py-4 text-xs uppercase tracking-[0.25em] text-black transition-all duration-[400ms] ease-out hover:shadow-[0_0_24px_rgba(198,138,78,0.45)]"
            >
              Send Email
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-foreground/30 px-10 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-[400ms] ease-out hover:border-bronze hover:text-bronze hover:shadow-[0_0_24px_rgba(198,138,78,0.3)]"
            >
              Visit Facebook
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-10 inline-block select-all text-sm text-foreground transition-colors hover:text-bronze"
            >
              {siteConfig.email}
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-bronze">Response Time</p>
              <p className="mt-4 text-lg text-foreground/70">{siteConfig.responseTime}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-bronze">Location</p>
              <p className="mt-4 text-lg text-foreground/70">{siteConfig.location}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
