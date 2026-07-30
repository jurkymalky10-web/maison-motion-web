"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProjectGallery from "./ProjectGallery";
import HeroSpecs from "./HeroSpecs";

const HERO = "/portfolio/lamborghini-huracan/hero.png";
const FILM = "/portfolio/lamborghini-huracan/cinematic.mp4";

const BEFORE_GALLERY = [
  { src: "/portfolio/lamborghini-huracan/pred1.png", alt: "Lamborghini Huracán — original photo 1" },
  { src: "/portfolio/lamborghini-huracan/pred2.png", alt: "Lamborghini Huracán — original photo 2" },
  { src: "/portfolio/lamborghini-huracan/pred3.png", alt: "Lamborghini Huracán — original photo 3" },
];

const GALLERY = [
  { src: "/portfolio/lamborghini-huracan/0c9230e0-cff7-4299-b441-8a11f8be14de.png", alt: "Lamborghini Huracán — enhanced detail" },
  { src: "/portfolio/lamborghini-huracan/0fffdd08-77fe-4f4e-a95c-172f07e58954.png", alt: "Lamborghini Huracán — enhanced detail" },
  { src: "/portfolio/lamborghini-huracan/3-zaber.png", alt: "Lamborghini Huracán — enhanced detail" },
  { src: "/portfolio/lamborghini-huracan/7-zaber.png", alt: "Lamborghini Huracán — enhanced detail" },
  { src: "/portfolio/lamborghini-huracan/8776ed94-07ca-443d-ae3b-4590980eb703.png", alt: "Lamborghini Huracán — enhanced detail" },
  { src: "/portfolio/lamborghini-huracan/840597fc-7400-4519-b39f-09a124c7f6b1.png", alt: "Lamborghini Huracán — enhanced detail" },
  { src: "/portfolio/lamborghini-huracan/eb3f3672-70c3-42fb-91e7-55dbace4f421.png", alt: "Lamborghini Huracán — enhanced detail" },
];

const specs = [
  {
    label: "Power",
    value: "640 HP (471 kW)",
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
    label: "Engine",
    value: "5.2L V10",
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
    label: "Model Year",
    value: "2023",
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

export default function LamborghiniHuracanContent() {
  return (
    <>
      <section className="relative h-[100vh] min-h-[720px] w-full overflow-hidden bg-black">
        <Image
          src={HERO}
          alt="Lamborghini Huracán — cinematic automotive presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image-bright"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-lux relative z-10 flex h-full flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-xs uppercase tracking-[0.35em] text-bronze"
          >
            Cinematic Automotive Presentation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            Lamborghini Huracán
          </motion.h1>
        </div>

        <div className="container-lux absolute inset-x-0 bottom-10 z-10 md:bottom-28">
          <HeroSpecs specs={specs} accent premium />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute inset-x-0 bottom-10 z-10 hidden flex-col items-center gap-3 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-bronze to-transparent"
          />
        </motion.div>
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

      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="container-lux">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">Cinematic Film</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/55">
              Experience the Lamborghini Huracán through cinematic motion.
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
                <source src={FILM} type="video/mp4" />
              </video>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
