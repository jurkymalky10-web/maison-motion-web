export default function MarqueeStrip({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-hairline bg-black py-6">
      <div className="mask-fade-x flex w-max animate-marquee gap-10">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-sm uppercase tracking-[0.3em] text-foreground/50"
          >
            {item}
            <span className="text-bronze">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
