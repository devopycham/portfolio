import Reveal from "./Reveal";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-accent-ink">Services</p>
          <h2 className="mt-3 font-display text-3xl font-black text-ink sm:text-5xl">
            What Nexlifie builds.
          </h2>
        </Reveal>

        <ScrollStack itemDistance={90} itemStackDistance={26} baseScale={0.88} blurAmount={1}>
          {services.map((service) => (
            <ScrollStackItem key={service.number}>
              <span className="font-display text-4xl font-black text-ink-faint sm:text-5xl">
                {service.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                {service.description}
              </p>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
