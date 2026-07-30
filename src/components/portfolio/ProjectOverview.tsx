import RevealOnScroll from "@/components/RevealOnScroll";

export default function ProjectOverview({
  title,
  kicker,
  description,
  vehicle,
  services,
  year,
}: {
  title: string;
  kicker: string;
  description: string;
  vehicle: string;
  services: string[];
  year: string;
}) {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="container-lux grid grid-cols-1 gap-16 md:grid-cols-[1.6fr_1fr] md:gap-24">
        <RevealOnScroll>
          <h1 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-bronze">{kicker}</p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
            {description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          delay={0.1}
          className="border-t border-hairline pt-10 md:border-t-0 md:border-l md:pl-16 md:pt-0"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-bronze">Project</p>

          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">Vehicle</p>
            <p className="mt-2 text-sm text-foreground/70">{vehicle}</p>
          </div>

          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">Services</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="border border-hairline px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-foreground/55"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">Year</p>
            <p className="mt-2 text-sm text-foreground/70">{year}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
