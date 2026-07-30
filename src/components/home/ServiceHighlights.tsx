import RevealOnScroll from "@/components/RevealOnScroll";

const highlights = [
  {
    index: "01",
    title: "Professional Photography",
    description: "Premium automotive photography optimized for marketplaces, dealerships and private sellers.",
  },
  {
    index: "02",
    title: "Cinematic Video",
    description: "Short cinematic automotive films that showcase every vehicle with premium presentation.",
  },
  {
    index: "03",
    title: "Image Enhancement",
    description: "Natural AI-assisted enhancement preserving the original vehicle while improving visual impact.",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="container-lux">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.index} delay={0.08 * i}>
              <span className="font-display text-3xl text-bronze/70">{item.index}</span>
              <h3 className="mt-4 font-display text-xl tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/55">
                {item.description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
