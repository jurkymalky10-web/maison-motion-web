"use client";

import type { ReactNode } from "react";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function LegalLayout({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="relative bg-black py-24 md:py-32">
        <div className="container-lux">
          <div className="mx-auto max-w-3xl">
            {lastUpdated && (
              <p className="mb-16 text-xs uppercase tracking-[0.2em] text-foreground/40">
                Last Updated: {lastUpdated}
              </p>
            )}
            <div className="space-y-16">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <RevealOnScroll>
      <div className="flex items-baseline gap-4">
        <span className="font-display text-lg text-bronze">{number}</span>
        <h2 className="font-display text-2xl tracking-tight md:text-3xl">{title}</h2>
      </div>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-bronze/50 via-hairline to-transparent" />
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/65 md:text-base">
        {children}
      </div>
    </RevealOnScroll>
  );
}
