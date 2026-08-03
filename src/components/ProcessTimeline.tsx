import RevealOnScroll from "@/components/RevealOnScroll";
import { processSteps as defaultProcessSteps } from "@/lib/data";

export interface ProcessStep {
  title: string;
  description: string;
}

export default function ProcessTimeline({
  eyebrow = "How We Work",
  title = "A Considered Process",
  titleAccent = "Process",
  subtitle = "Six disciplined stages stand between a first conversation and a finished master file — nothing rushed, nothing skipped.",
  bgClassName = "bg-black",
  steps,
}: {
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  bgClassName?: string;
  steps?: ProcessStep[];
}) {
  const processSteps = steps ?? defaultProcessSteps;
  const [before, accent] = title.includes(titleAccent)
    ? title.split(titleAccent)
    : [title, ""];

  return (
    <section className={`relative ${bgClassName} py-28 md:py-36`}>
      <div className="container-lux">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-bronze">{eyebrow}</p>
          <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            {before}
            {accent && <span className="italic bronze-gradient-text">{accent}</span>}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/55">{subtitle}</p>
        </RevealOnScroll>

        <div className="relative mt-20">
          <div className="absolute bottom-3 left-6 top-3 w-px bg-gradient-to-b from-bronze/70 via-hairline to-transparent md:left-7" />

          <div className="space-y-12 md:space-y-14">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={step.title} delay={0.06 * i}>
                <div className="relative flex gap-6 md:gap-10">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bronze bg-black font-display text-sm text-bronze md:h-14 md:w-14 md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pt-1 md:pt-2">
                    <h3 className="font-display text-2xl tracking-tight md:text-3xl">{step.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/55 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
