import Reveal from "./Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-accent-ink">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
            Where the work happened.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {experience.map((entry, index) => (
            <Reveal key={`${entry.role}-${entry.company}`} delay={index * 0.07}>
              <div className="flex flex-col gap-1 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:py-10">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{entry.role}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-muted">{entry.company}</p>
                </div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-faint sm:text-base">
                  {entry.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
