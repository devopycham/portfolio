import { Cloud, ShieldCheck, Cpu, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import DepthCarousel from "./DepthCarousel";
import { profile, aboutPillars } from "../data/content";

const PILLAR_ICONS = { cloud: Cloud, shield: ShieldCheck, chip: Cpu, automation: Workflow };

const pillarItems = aboutPillars.map(({ key, label }) => ({ key, label, Icon: PILLAR_ICONS[key] }));

function PillarCard({ Icon, label }) {
  return (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
        <Icon size={22} />
      </div>
      <span className="font-display text-sm font-bold text-ink">{label}</span>
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-bg-alt py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-accent-ink">About</p>
          <p className="drop-cap mt-4 text-lg leading-relaxed text-ink sm:text-xl">{profile.bio}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-10" style={{ height: 300 }}>
            <DepthCarousel
              items={pillarItems}
              renderCard={(item) => <PillarCard Icon={item.Icon} label={item.label} />}
              cardWidth={210}
              cardHeight={180}
              radius={16}
              depth={90}
              spread={46}
              tilt={10}
              perspective={1200}
              visibleCards={4}
              falloff={0.14}
              blur={2}
              duration={550}
              autoplay
              autoplayDelay={4200}
              loop
              showControls
              showIndicators
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
