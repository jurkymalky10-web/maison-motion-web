import { useTranslations } from "next-intl";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ServiceHighlights() {
  const t = useTranslations("home.services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="relative bg-black py-16 md:py-24" aria-labelledby="services-heading">
      <div className="container-lux">
        <h2 id="services-heading" className="sr-only">
          {t("heading")}
        </h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
          {items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={0.08 * i}>
              <span className="font-display text-3xl text-bronze/70">{String(i + 1).padStart(2, "0")}</span>
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
