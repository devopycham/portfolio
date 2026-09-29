import { ArrowUpRight, Code2, Megaphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./Section";
import SpotlightCard from "./SpotlightCard";
import CountUp from "./CountUp";
import { stats, verticals } from "../data/content";

const VERTICAL_ICONS = [Code2, Megaphone];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-alt/50 py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title={<>Ideas built.<br />Brands grown.</>} />

        <Reveal className="mt-6 max-w-3xl">
          <p className="text-lg leading-relaxed text-ink sm:text-xl">
            Building ideas into reality with secured products and performance-led marketing strategies.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {verticals.map((v, i) => {
            const Icon = VERTICAL_ICONS[i];
            return (
              <Reveal key={v.name} delay={i * 0.1}>
                <SpotlightCard className="card h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-on-accent">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent">
                      {v.tag}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">{v.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{v.tagline}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {v.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-display text-sm font-bold tracking-wide text-ink transition-colors hover:text-accent"
                  >
                    {v.label}
                    <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-7 sm:p-9">
              <p className="font-display text-5xl font-black tracking-tight text-ink sm:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium leading-snug text-ink-muted">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
