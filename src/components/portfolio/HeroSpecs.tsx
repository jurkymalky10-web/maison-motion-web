import type { ReactNode } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export interface HeroSpec {
  label: string;
  value: string;
  icon: ReactNode;
}

export default function HeroSpecs({
  specs,
  accent = false,
  premium = false,
}: {
  specs: HeroSpec[];
  /** thin gold accent line instead of the neutral hairline */
  accent?: boolean;
  /** larger white values + wider label tracking, for standalone launch-style bars */
  premium?: boolean;
}) {
  return (
    <RevealOnScroll delay={0.15}>
      <div
        className={`mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t ${
          accent ? "border-bronze/40" : "border-hairline"
        } pt-8`}
      >
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-center gap-3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0 text-bronze"
            >
              {spec.icon}
            </svg>
            <div>
              <p
                className={
                  premium
                    ? "text-[10px] uppercase tracking-[0.3em] text-bronze"
                    : "text-[10px] uppercase tracking-[0.2em] text-foreground/40"
                }
              >
                {spec.label}
              </p>
              <p
                className={
                  premium
                    ? "mt-1.5 text-base font-medium text-foreground md:text-lg"
                    : "mt-1 text-sm text-foreground/70"
                }
              >
                {spec.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}
