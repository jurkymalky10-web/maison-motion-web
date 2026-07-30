import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import GradientArt from "@/components/GradientArt";
import CornerFrame from "@/components/CornerFrame";
import { portfolioItems } from "@/lib/data";

function ProjectCard({
  item,
  index,
  aspect,
}: {
  item: (typeof portfolioItems)[number];
  index: number;
  aspect: string;
}) {
  return (
    <Link href={item.href ?? "/portfolio"} className={`group relative block ${aspect} overflow-hidden rounded-sm`}>
      <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]">
        <GradientArt hue={item.hue} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 transition-opacity duration-700 group-hover:from-black/95" />

      <CornerFrame
        className="opacity-0 transition-opacity duration-700 group-hover:opacity-70"
        inset={20}
        size={22}
      />

      <span className="absolute left-6 top-6 font-display text-sm text-bronze/80">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 md:p-9">
        <div className="max-w-md translate-y-1 transition-transform duration-700 group-hover:translate-y-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-bronze">
            {item.category}
          </p>
          <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">{item.title}</h3>
          <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-foreground/60 opacity-0 transition-all duration-700 group-hover:mt-3 group-hover:max-h-16 group-hover:opacity-100">
            {item.subtitle}
          </p>
        </div>
        <span className="hidden shrink-0 translate-y-2 items-center gap-2 border border-bronze/50 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-bronze opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:flex">
          View Project
          <span aria-hidden>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

export default function PortfolioPreview() {
  const [featured, second, third] = portfolioItems;

  return (
    <section className="relative bg-charcoal py-28 md:py-36">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <RevealOnScroll className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">Selected Work</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              Recent <span className="italic bronze-gradient-text">Productions</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-foreground/55">
              A curated selection of presentations, each treated as a singular work rather than a deliverable.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/70 transition-colors hover:text-bronze"
            >
              Full Portfolio
              <span aria-hidden>&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>

        <div className="mt-16 space-y-6">
          <RevealOnScroll>
            <ProjectCard item={featured} index={0} aspect="aspect-[21/9]" />
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <RevealOnScroll delay={0.1}>
              <ProjectCard item={second} index={1} aspect="aspect-[4/3]" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <ProjectCard item={third} index={2} aspect="aspect-[4/3]" />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
