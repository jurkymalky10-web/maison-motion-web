import RevealOnScroll from "@/components/RevealOnScroll";

const services = [
  {
    index: "01",
    title: "Premium Automotive Photography",
    description: "Premium dealership-quality photography that creates a powerful first impression while preserving every authentic detail of the vehicle.",
    tags: ["Exterior", "Interior", "Detail Shots", "Dealer Listings"],
  },
  {
    index: "02",
    title: "Cinematic Automotive Video",
    description: "Commercial-style automotive films designed to showcase every vehicle with premium camera movement, lighting and storytelling.",
    tags: ["4K Video", "Drone Shots", "Social Media", "Dealership Ads"],
  },
  {
    index: "03",
    title: "Professional Image Enhancement",
    description: "Natural premium retouching including paint enhancement, sky replacement, reflection cleanup and color grading while keeping the vehicle authentic.",
    tags: ["Retouching", "Color Grading", "Sky Replacement", "Reflection Cleanup"],
  },
  {
    index: "04",
    title: "Complete Vehicle Presentation",
    description: "A complete premium package combining photography, cinematic video and visual enhancement for private sellers and dealerships.",
    tags: ["Photo + Video", "Premium Package", "Marketplace Ready", "Dealer Ready"],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-black py-28 md:py-36">
      <div className="container-lux">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">Presentation Services</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            Presentation <span className="italic bronze-gradient-text">Services</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/55">
            Premium visual presentation designed to strengthen first impressions and increase buyer confidence.
          </p>
        </RevealOnScroll>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          {services.map((service, i) => (
            <RevealOnScroll key={service.index} delay={0.06 * i}>
              <div className="group">
                <span className="font-display text-5xl text-bronze/70 transition-colors duration-500 group-hover:text-bronze">
                  {service.index}
                </span>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-bronze/60 via-hairline to-transparent transition-all duration-500 group-hover:from-bronze" />
                <h3 className="mt-6 font-display text-2xl tracking-tight md:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/55">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.15em] text-foreground/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
