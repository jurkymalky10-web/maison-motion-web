"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import RevealOnScroll from "@/components/RevealOnScroll";
import CTASection from "@/components/CTASection";
import ProjectOverview from "./ProjectOverview";
import ProjectGallery from "./ProjectGallery";
import ProjectBeforeAfter from "./ProjectBeforeAfter";
import ProjectVideoShowcase from "./ProjectVideoShowcase";
import HeroSpecs from "./HeroSpecs";
import { isOriginalPhoto } from "@/lib/portfolioMedia";

const HERO = "/portfolio/bmw-m3/fd69a54a-dab2-45c2-acb7-eefb0291977f.webp";

const GALLERY_BASE = [
  { src: "/portfolio/bmw-m3/before1.png", isOriginal: true, labelKey: "originalPhoto" },
  { src: "/portfolio/bmw-m3/688fa033-4d40-4c0e-b6ae-9da2110241d8.webp", alt: "BMW M3 — front three-quarter view" },
  { src: "/portfolio/bmw-m3/1bdcb74b-56d8-42dc-a080-89afda27892c.webp", alt: "BMW M3 — rear three-quarter view" },
  { src: "/portfolio/bmw-m3/d0aedfac-ccac-41f8-a063-bdf98d5fa985.webp", alt: "BMW M3 — dynamic driving shot" },
  { src: "/portfolio/bmw-m3/d2b6dbb9-3951-47f2-bacc-0d11ab1f3a14.webp", alt: "BMW M3 — rear detail" },
  { src: "/portfolio/bmw-m3/after5.png", alt: "BMW M3 — enhanced automotive photograph, studio detail" },
  { src: "/portfolio/bmw-m3/after6.png", alt: "BMW M3 — enhanced automotive photograph, cinematic still" },
];

export default function BmwM3Content() {
  const t = useTranslations("bmwM3");
  const tNav = useTranslations("portfolioCommon");
  const tCategories = useTranslations("portfolioListing.categories");
  const tSpecs = useTranslations("portfolioCommon.specs");

  const GALLERY = GALLERY_BASE.map((img) => ({
    src: img.src,
    alt: img.isOriginal ? `BMW M3 — ${tNav("originalPhoto")}` : img.alt!,
    label: img.labelKey ? tNav(img.labelKey) : undefined,
  }));

  // "Full Presentation" must only ever show edited photos — original
  // (pred-prefixed) source images belong solely to the Before/After section.
  const PRESENTATION_GALLERY = GALLERY.filter((img) => !isOriginalPhoto(img.src));

  const services = [tCategories("photography"), tCategories("cinematicVideo"), tCategories("imageEnhancement")];

  const specs = [
    {
      label: tSpecs("engine"),
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
      label: tSpecs("power"),
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
      label: tSpecs("transmission"),
      value: tSpecs("automatic"),
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
      label: tSpecs("firstRegistered"),
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

  return (
    <>
      <section className="relative h-[58vh] min-h-[440px] w-full overflow-hidden bg-black md:h-[85vh] md:min-h-[560px]">
        <div className="absolute inset-0 md:hidden">
          <Image
            src={HERO}
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="scale-110 object-cover blur-2xl brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/25" />
          <Image
            src={HERO}
            alt="BMW M3 — premium vehicle presentation"
            fill
            priority
            sizes="100vw"
            className="object-contain hero-image-bright"
          />
        </div>

        <div className="absolute inset-0 hidden md:block">
          <Image
            src={HERO}
            alt="BMW M3 — premium vehicle presentation"
            fill
            priority
            sizes="100vw"
            className="object-cover hero-image-bright"
          />
        </div>

        <div className="absolute inset-0 hero-overlay" />

        <div className="container-lux absolute inset-x-0 bottom-0 z-10 pb-16">
          <HeroSpecs specs={specs} />

          <RevealOnScroll delay={0.2} className="mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-bronze"
            >
              &larr; {tNav("backToPortfolio")}
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={0.25}>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-bronze">
              {tNav("vehiclePresentation")}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <ProjectOverview
        title="BMW M3"
        kicker={t("kicker")}
        description={t("description")}
        vehicle={t("vehicle")}
        services={services}
        year="2025"
      />

      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">{tNav("gallery.eyebrow")}</p>
            <h2 className="mt-6 font-display text-3xl tracking-tight md:text-4xl">
              {tNav("gallery.heading")}
            </h2>
          </RevealOnScroll>
          <div className="mt-14">
            <ProjectGallery images={PRESENTATION_GALLERY} />
          </div>
        </div>
      </section>

      <ProjectBeforeAfter image={GALLERY[0].src} alt="BMW M3" />

      <ProjectVideoShowcase
        image={GALLERY[3].src}
        alt="BMW M3 — cinematic video still"
        caption={t("videoCaption")}
      />

      <CTASection
        eyebrow={tNav("cta.eyebrow")}
        title={tNav("cta.title")}
        subtitle={tNav("cta.subtitle")}
        ctaLabel={tNav("cta.ctaLabel")}
      />
    </>
  );
}
