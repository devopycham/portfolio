import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative bg-bg pb-24 sm:pb-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="card flex flex-col items-start gap-5 rounded-2xl p-7 sm:flex-row sm:items-center sm:p-9">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
            <GraduationCap size={26} />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
              {education.institution}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{education.degree}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-accent-ink">
              {education.period}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
