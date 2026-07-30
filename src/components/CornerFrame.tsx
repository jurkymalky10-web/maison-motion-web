export default function CornerFrame({
  className = "",
  inset = 24,
  size = 28,
}: {
  className?: string;
  inset?: number;
  size?: number;
}) {
  const corner = { position: "absolute" as const, width: size, height: size };
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <span style={{ ...corner, top: inset, left: inset, borderTop: "1px solid var(--bronze)", borderLeft: "1px solid var(--bronze)" }} />
      <span style={{ ...corner, top: inset, right: inset, borderTop: "1px solid var(--bronze)", borderRight: "1px solid var(--bronze)" }} />
      <span style={{ ...corner, bottom: inset, left: inset, borderBottom: "1px solid var(--bronze)", borderLeft: "1px solid var(--bronze)" }} />
      <span style={{ ...corner, bottom: inset, right: inset, borderBottom: "1px solid var(--bronze)", borderRight: "1px solid var(--bronze)" }} />
    </div>
  );
}
