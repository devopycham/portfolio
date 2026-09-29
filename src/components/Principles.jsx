import Reveal from "./Reveal";
import { principles } from "../data/content";

export default function Principles() {
  return (
    <section aria-label="Operating principles" className="pb-14 pt-10 sm:pb-16 sm:pt-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <blockquote className="mx-auto mb-10 max-w-4xl text-center">
            <p className="font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-5xl">
              “Ideas are easy.
              <br />
              <span className="text-accent-ink">Building them is the work.</span>”
            </p>
            <footer className="mt-5 text-sm font-semibold uppercase tracking-widest text-ink-faint">
              Muhammad Mubashir T
            </footer>
          </blockquote>
        </Reveal>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="card h-full rounded-3xl p-7 border-t-2 border-t-accent">
              <span className="font-display text-xs font-bold tracking-widest text-accent-ink">0{i + 1}</span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
