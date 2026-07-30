import RevealOnScroll from "@/components/RevealOnScroll";

const points = [
  { title: "Premium Presentation" },
  { title: "Natural Editing" },
  { title: "Authentic Results" },
  { title: "Dealer-Level Quality" },
];

export default function WhyMaisonMotion() {
  return (
    <section className="relative bg-black py-20 md:py-28">
      <div className="container-lux">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">Why Maison Motion</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            A Vehicle Is a Brand.
            <br />
            We Treat It <span className="italic bronze-gradient-text">Like One.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-10">
          {points.map((point, i) => (
            <RevealOnScroll key={point.title} delay={0.06 * i}>
              <div className="h-px w-10 bg-bronze" />
              <h3 className="mt-5 font-display text-xl tracking-tight md:text-2xl">
                {point.title}
              </h3>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
