"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";
import ProjectOverview from "./ProjectOverview";
import ProjectGallery from "./ProjectGallery";
import ProjectBeforeAfter from "./ProjectBeforeAfter";
import ProjectVideoShowcase from "./ProjectVideoShowcase";
import HeroSpecs from "./HeroSpecs";

const HERO = "/portfolio/bmw-m3/fd69a54a-dab2-45c2-acb7-eefb0291977f.webp";

const GALLERY = [
  { src: "/portfolio/bmw-m3/before1.png", alt: "BMW M3 — original photo", label: "Original Photo" },
  { src: "/portfolio/bmw-m3/688fa033-4d40-4c0e-b6ae-9da2110241d8.webp", alt: "BMW M3 — front three-quarter view" },
  { src: "/portfolio/bmw-m3/1bdcb74b-56d8-42dc-a080-89afda27892c.webp", alt: "BMW M3 — rear three-quarter view" },
  { src: "/portfolio/bmw-m3/d0aedfac-ccac-41f8-a063-bdf98d5fa985.webp", alt: "BMW M3 — dynamic driving shot" },
  { src: "/portfolio/bmw-m3/d2b6dbb9-3951-47f2-bacc-0d11ab1f3a14.webp", alt: "BMW M3 — rear detail" },
  { src: "/portfolio/bmw-m3/after5.png", alt: "BMW M3 — enhanced detail" },
  { src: "/portfolio/bmw-m3/after6.png", alt: "BMW M3 — enhanced detail" },
];

const services = ["Photography", "Cinematic Video", "Image Enhancement"];

const specs = [
  {
    label: "Engine",
    value: "3.0L TwinPower Turbo Inline-6",
    icon: (
      <path
        d="M4 15V9h3l2-2h5l1 2h2a2 2 0 0 1 2 2v4M4 15h14M4 15v2h3v-2M15 15v2h3v-2M9 9V6M13 9V6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Power",
    value: "450 HP (331 kW)",
    icon: (
      <path
        d="M12.5 3 5 13h5l-1 8 7.5-10h-5l1-8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Transmission",
    value: "Automatic",
    icon: (
      <path
        d="M12 3v6m0 0-3-3m3 3 3-3M12 9v9m-5-5h10M7 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "First Registered",
    value: "07 / 2018",
    icon: (
      <path
        d="M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 5h14M8 3v4M16 3v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function BmwM3Content() {
  return (
    <>
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black">
        <Image
          src={HERO}
          alt="BMW M3 — premium vehicle presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image-bright"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-lux absolute inset-x-0 bottom-0 z-10 pb-16">
          <HeroSpecs specs={specs} />

          <RevealOnScroll delay={0.2} className="mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-bronze"
            >
              &larr; Back to Portfolio
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={0.25}>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-bronze">
              Vehicle Presentation
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <ProjectOverview
        title="BMW M3"
        kicker="Premium Vehicle Presentation"
        description="This BMW M3 project demonstrates how premium photography, cinematic video and natural AI image enhancement can transform a vehicle into a presentation that captures attention, builds trust and creates a stronger first impression while preserving every original detail."
        vehicle="BMW M3 Competition"
        services={services}
        year="2025"
      />

      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">Gallery</p>
            <h2 className="mt-6 font-display text-3xl tracking-tight md:text-4xl">
              The Full Presentation
            </h2>
          </RevealOnScroll>
          <div className="mt-14">
            <ProjectGallery images={GALLERY} />
          </div>
        </div>
      </section>

      <ProjectBeforeAfter image={GALLERY[0].src} alt="BMW M3" />

      <ProjectVideoShowcase
        image={GALLERY[3].src}
        alt="BMW M3 — cinematic video still"
        caption="A cinematic pass built to give the BMW M3 its own sense of movement — directed light, deliberate pacing and a premium commercial feel."
      />

      <CTASection
        eyebrow="Your Vehicle, Next"
        title="Ready to present your own vehicle?"
        subtitle="Every presentation begins with a conversation about the vehicle and the impression it deserves to make."
        ctaLabel="Request a Presentation"
      />
    </>
  );
}
