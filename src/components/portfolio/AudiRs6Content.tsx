"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectGallery, { type GalleryImage } from "./ProjectGallery";

const HERO = "/portfolio/rs6/hero.png";

const BEFORE_GALLERY = [
  { src: "/portfolio/rs6/pred.png", alt: "Audi RS6 — original photo 1" },
  { src: "/portfolio/rs6/pred2.png", alt: "Audi RS6 — original photo 2" },
  { src: "/portfolio/rs6/pred3.png", alt: "Audi RS6 — original photo 3" },
];

export default function AudiRs6Content({
  afterImages,
  videoSrc,
}: {
  afterImages: GalleryImage[];
  videoSrc: string | null;
}) {
  return (
    <>
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-black">
        <Image
          src={HERO}
          alt="Audi RS6 — premium vehicle presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image-bright"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-lux absolute inset-x-0 bottom-0 z-10 pb-16">
          <RevealOnScroll>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-bronze"
            >
              &larr; Back to Portfolio
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-bronze">
              Vehicle Presentation
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">Before</p>
            <h2 className="mt-6 font-display text-3xl tracking-tight md:text-4xl">
              The <span className="italic bronze-gradient-text">Original</span> Capture
            </h2>
          </RevealOnScroll>
          <div className="mt-14">
            <ProjectGallery images={BEFORE_GALLERY} />
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">After</p>
            <h2 className="mt-6 font-display text-3xl tracking-tight md:text-4xl">
              The Full Presentation
            </h2>
          </RevealOnScroll>
          <div className="mt-14">
            <ProjectGallery images={afterImages} />
          </div>
        </div>
      </section>

      {videoSrc && (
        <section className="relative bg-charcoal py-24 md:py-32">
          <div className="container-lux">
            <RevealOnScroll className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                Cinematic Film
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/55">
                Experience the Audi RS6 through cinematic motion.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="mx-auto mt-14 max-w-[1200px]">
              <div className="group relative aspect-video w-full overflow-hidden rounded-[20px] border border-transparent shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] transition-colors duration-500 hover:border-bronze/60">
                <video
                  controls
                  preload="metadata"
                
                  playsInline
                  poster={HERO}
                  className="h-full w-full object-cover"
                >
                  <source src={videoSrc} />
                </video>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}
    </>
  );
}
