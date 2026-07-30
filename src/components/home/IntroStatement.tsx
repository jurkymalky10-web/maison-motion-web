import RevealOnScroll from "@/components/RevealOnScroll";

export default function IntroStatement() {
  return (
    <section className="relative bg-black py-32 md:py-44">
      <div className="container-lux flex flex-col items-center text-center">
        <RevealOnScroll>
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">Our Philosophy</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-display text-4xl leading-[1.2] tracking-tight text-balance sm:text-5xl md:text-6xl">
            We Don&rsquo;t Photograph Cars.
            <br />
            We <span className="italic bronze-gradient-text">Present</span> Them.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-foreground/55 md:text-lg">
            Maison Motion Studio accepts a limited number of productions each
            season. Every vehicle we present receives the same rigor a marque
            gives its own flagship launch — because a first impression, once
            made, is rarely made twice.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3} className="mt-12">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-foreground/40">
            <span className="h-px w-10 bg-hairline" />
            Quality Over Quantity
            <span className="h-px w-10 bg-hairline" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
