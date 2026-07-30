import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CornerFrame from "@/components/CornerFrame";

export default function ProjectVideoShowcase({
  image,
  alt,
  caption,
}: {
  image: string;
  alt: string;
  caption: string;
}) {
  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="container-lux">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">Cinematic Video</p>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Motion, <span className="italic bronze-gradient-text">Directed.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/55">{caption}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="relative mt-12 aspect-video w-full overflow-hidden rounded-sm">
          <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <CornerFrame className="opacity-60" inset={24} size={26} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-bronze/70 bg-black/40 backdrop-blur transition-transform duration-500 hover:scale-105">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7-11-7z" fill="#C68A4E" />
              </svg>
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
