import { ArrowUpRight, Cloud, ShieldCheck, Cpu, Workflow, Megaphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./Section";
import SpotlightCard from "./SpotlightCard";
import CountUp from "./CountUp";
import { profile, aboutPillars, marketingPillar, stats, audiences } from "../data/content";

const PILLAR_ICONS = { cloud: Cloud, shield: ShieldCheck, chip: Cpu, automation: Workflow, marketing: Megaphone };

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-alt/50 py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title={<>Technology that<br />earns its keep.</>} />

        <div className="mt-10 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-ink sm:text-xl">{profile.bio}</p>
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-ink-faint">Built for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <span key={a} className="rounded-full border border-ink/15 bg-surface px-4 py-1.5 text-sm font-semibold text-ink">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-accent"
            >
              Visit {profile.websiteLabel}
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {[...aboutPillars, marketingPillar].map(({ key, label, blurb }, i) => {
              const Icon = PILLAR_ICONS[key];
              return (
                <Reveal key={key} delay={i * 0.08} className={i === 4 ? "sm:col-span-2" : undefined}>
                  <SpotlightCard className="card h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-on-accent">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">{label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{blurb}</p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
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
