import ScrollVelocity from "./ScrollVelocity";
import { profile, services } from "../data/content";

const keywordLine = `${services.map((service) => service.title).join("  ✦  ")}  ✦  `;
const taglineLine = `${profile.tagline}  ✦  `;

/**
 * A scroll-velocity-reactive marquee band between Hero and About: scroll
 * fast and it visibly surges/reverses, scroll slow and it idles along at
 * its base pace. Purely a graphic flourish (the tagline and services it
 * repeats are both stated plainly elsewhere on the page), so the whole
 * band is hidden from assistive tech rather than read out N times.
 */
export default function TickerBand() {
  return (
    <section aria-hidden="true" className="overflow-hidden border-y-2 border-ink bg-ink py-8 sm:py-10">
      <div className="flex flex-col gap-1 sm:gap-2">
        <ScrollVelocity
          texts={[taglineLine]}
          velocity={55}
          numCopies={4}
          className="font-display text-3xl font-black uppercase tracking-tight text-bg sm:text-6xl"
        />
        <ScrollVelocity
          texts={[keywordLine]}
          velocity={-45}
          numCopies={4}
          className="text-outline font-display text-3xl font-black uppercase tracking-tight sm:text-6xl"
        />
      </div>
    </section>
  );
}
