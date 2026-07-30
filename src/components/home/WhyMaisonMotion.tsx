import RevealOnScroll from "@/components/RevealOnScroll";
import StatCounter from "@/components/StatCounter";
import { stats, values } from "@/lib/data";

export default function WhyMaisonMotion() {
  return (
    <section className="relative bg-black py-28 md:py-36">
      <div className="container-lux">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">The Maison Standard</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            A Vehicle Is a Brand.
            <br />
            We Treat It <span className="italic bronze-gradient-text">Like One.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/55">
            Every studio can point a camera at a car. Few are willing to spend
            a full day on a single reflection. That difference is the reason
            our clients return.
          </p>
        </RevealOnScroll>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="space-y-10">
            {values.map((value, i) => (
              <RevealOnScroll key={value.title} delay={0.05 * i}>
                <h3 className="font-display text-xl tracking-tight">{value.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/55">
                  {value.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-14 border-t border-hairline pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0">
            {stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={0.05 * i}>
                <p className="font-display text-5xl text-bronze sm:text-6xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-foreground/55">
                  {stat.label}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
