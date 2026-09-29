import { GraduationCap, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./Section";
import { experience, education } from "../data/content";

// Data is newest-first; the path reads bottom-up as a climb.
const steps = [...experience].reverse();

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Experience" title={<>Every role<br />levelled me up.</>} />
          <Reveal delay={0.1} className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-surface p-4 pr-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
              <GraduationCap size={22} />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-ink">{education.degree}</p>
              <p className="text-xs text-ink-muted">{education.institution}</p>
            </div>
          </Reveal>
        </div>

        {/* Staircase: each step sits higher than the last on desktop */}
        <ol className="mt-10 grid gap-4 md:grid-cols-4 md:items-end">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            const lift = ["md:mt-20", "md:mt-14", "md:mt-7", "md:mt-0"][i] ?? "";
            return (
              <li key={step.role} className={lift}>
                <Reveal delay={i * 0.1} className="h-full">
                  <div
                    className={`group relative flex h-full min-h-[15rem] flex-col justify-between rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2 md:min-h-[17rem] ${
                      last ? "border border-accent/40 bg-accent-soft" : "card"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-display text-xs font-bold tracking-widest ${
                          last ? "text-accent" : "text-accent-ink"
                        }`}
                      >
                        LEVEL 0{i + 1}
                      </span>
                      {last ? (
                        <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-on-accent">
                          Now
                        </span>
                      ) : (
                        <TrendingUp size={16} className="text-ink-faint transition-colors group-hover:text-accent-ink" />
                      )}
                    </div>
                    <div className="mt-6">
                      <h3 className="font-display text-2xl font-bold leading-tight">{step.role}</h3>
                      <p className={`mt-3 text-sm leading-relaxed ${"text-ink-muted"}`}>
                        {step.focus}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
