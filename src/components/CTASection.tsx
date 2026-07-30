import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import GradientArt from "@/components/GradientArt";
import CornerFrame from "@/components/CornerFrame";

export default function CTASection({
  eyebrow = "Let's Create",
  title = "Your Car Deserves a Cinematic Story.",
  subtitle = "Tell us about your project and we'll respond within one business day with next steps and availability.",
  ctaLabel = "Start a Project",
  href = "/contact",
  assurances = ["Reply within one business day", "By private consultation", "Worldwide production"],
  paddingClassName = "py-32 md:py-44",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  href?: string;
  assurances?: string[];
  paddingClassName?: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-black ${paddingClassName}`}>
      <GradientArt hue={["#C68A4E", "#0d0d0d"]} showSweep={false} />
      <div className="container-lux relative z-10 flex justify-center">
        <div className="relative w-full max-w-3xl px-8 py-16 text-center md:px-16 md:py-20">
          <CornerFrame className="opacity-50" inset={0} size={26} />

          <RevealOnScroll>
            <p className="text-xs uppercase tracking-[0.35em] text-bronze">{eyebrow}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              {title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-foreground/60">
              {subtitle}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <Link
              href={href}
              className="mt-12 inline-flex items-center bg-bronze px-10 py-4 text-xs uppercase tracking-[0.25em] text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(198,138,78,0.45)]"
            >
              {ctaLabel}
            </Link>
          </RevealOnScroll>

          {assurances.length > 0 && (
            <RevealOnScroll delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-foreground/40">
                {assurances.map((item, i) => (
                  <span key={item} className="flex items-center gap-3">
                    {i > 0 && <span className="text-bronze/50">&middot;</span>}
                    {item}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
