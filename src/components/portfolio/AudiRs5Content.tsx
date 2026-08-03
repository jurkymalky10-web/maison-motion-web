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

const HERO = "/portfolio/audi-rs5/hero1.png";

const GALLERY_BASE = [
  { src: "/portfolio/audi-rs5/pred1.png", isOriginal: true, originalIndex: 1, labelKey: "originalPhoto" },
  { src: "/portfolio/audi-rs5/pred2.png", isOriginal: true, originalIndex: 2 },
  { src: "/portfolio/audi-rs5/pred3.png", isOriginal: true, originalIndex: 3 },
  { src: "/portfolio/audi-rs5/00a8544c-3965-4548-a80c-20b7cbf5fba7.png", alt: "Audi RS5 — enhanced detail" },
  { src: "/portfolio/audi-rs5/17ef88e8-d3dc-49b4-8825-5b0ff5609251.png", alt: "Audi RS5 — enhanced detail" },
  { src: "/portfolio/audi-rs5/19dc69e8-3393-4fd1-9323-ae6b94598069.png", alt: "Audi RS5 — enhanced detail" },
  { src: "/portfolio/audi-rs5/33c53a19-f888-4122-b073-072e556fc6fc.png", alt: "Audi RS5 — enhanced detail" },
  { src: "/portfolio/audi-rs5/6efbcb63-b44b-4304-bef4-ac92ed3b6b56.png", alt: "Audi RS5 — enhanced detail" },
  { src: "/portfolio/audi-rs5/7d26ea9d-db28-4a7f-9c50-eef3b11bda43.png", alt: "Audi RS5 — enhanced detail" },
  { src: "/portfolio/audi-rs5/c39d04be-242d-4f6c-9979-d9065f22475d.png", alt: "Audi RS5 — enhanced detail" },
];

const TRANSFORMATION = {
  before: "/portfolio/audi-rs5/pred1.png",
  after: "/portfolio/audi-rs5/00a8544c-3965-4548-a80c-20b7cbf5fba7.png",
  wide: "/portfolio/audi-rs5/17ef88e8-d3dc-49b4-8825-5b0ff5609251.png",
};

export default function AudiRs5Content() {
  const t = useTranslations("audiRs5");
  const tNav = useTranslations("portfolioCommon");
  const tCategories = useTranslations("portfolioListing.categories");
  const tSpecs = useTranslations("portfolioCommon.specs");

  const GALLERY = GALLERY_BASE.map((img) => ({
    src: img.src,
    alt: img.isOriginal ? `Audi RS5 — ${tNav("originalPhoto")} ${img.originalIndex}` : img.alt!,
    label: img.labelKey ? tNav(img.labelKey) : undefined,
  }));

  const services = [tCategories("cinematicVideo"), tCategories("imageEnhancement")];

  const specs = [
    {
      label: tSpecs("engine"),
      value: "2.9L TFSI V6",
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
      label: tSpecs("displacement"),
      value: "2,894 cc",
      icon: (
        <path
          d="M8 3h8v4H8V3Zm0 4h8v14H8V7Zm2 5h4m-4 4h4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      label: tSpecs("modelYear"),
      value: "2024",
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
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black">
        <Image
          src={HERO}
          alt="Audi RS5 — premium vehicle presentation"
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
        title="Audi RS5"
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
            <ProjectGallery images={GALLERY} />
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">{tNav("before.eyebrow")}</p>
            <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {tNav("before.headingPre")}
              <span className="italic bronze-gradient-text">{tNav("before.headingAccent")}</span>
              {tNav("before.headingPost")}
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-hairline">
                <Image
                  src={TRANSFORMATION.before}
                  alt="Audi RS5 — before enhancement"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="pointer-events-none absolute left-4 top-4 text-[10px] uppercase tracking-[0.25em] text-foreground/50 sm:left-6 sm:top-6 sm:text-[11px]">
                  {tNav("difference.original")}
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-hairline">
                <Image
                  src={TRANSFORMATION.after}
                  alt="Audi RS5 — after enhancement"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="pointer-events-none absolute left-4 top-4 text-[10px] uppercase tracking-[0.25em] text-bronze sm:left-6 sm:top-6 sm:text-[11px]">
                  {tNav("difference.maisonGrade")}
                </span>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.15} className="mt-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-hairline">
              <Image
                src={TRANSFORMATION.wide}
                alt="Audi RS5 — full transformation"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <ProjectBeforeAfter image={GALLERY[3].src} alt="Audi RS5" />

      <ProjectVideoShowcase
        image={GALLERY[4].src}
        alt="Audi RS5 — cinematic video still"
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
