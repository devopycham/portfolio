import Reveal from "./Reveal";

/** Shared eyebrow + headline block so every section heads up the same way. */
export default function SectionHeading({ eyebrow, title, dark = false, center = false }) {
  return (
    <Reveal className={center ? "text-center" : undefined}>
      <p
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${
          dark ? "text-accent" : "text-accent-ink"
        }`}
      >
        <span className={`h-px w-8 ${dark ? "bg-accent" : "bg-accent-ink"}`} />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl ${
          dark ? "text-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
