import { useRef } from "react";
import { ArrowUpRight, Globe, MapPin } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import LinkedInIcon from "./icons/LinkedInIcon";
import InstagramIcon from "./icons/InstagramIcon";
import { contact, profile, contactOptions } from "../data/content";
import { useIsFinePointer, usePrefersReducedMotion } from "../hooks/useMediaQuery";

/**
 * A "magnetic" pill button: on fine-pointer devices it nudges slightly
 * toward the cursor within its own bounds, and pulses on hover. Falls
 * back to a plain button on touch devices / reduced-motion.
 */
function MagneticCta({ children }) {
  const ref = useRef(null);
  const isFinePointer = useIsFinePointer();
  const prefersReducedMotion = usePrefersReducedMotion();
  const magnetic = isFinePointer && !prefersReducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 14 });
  const springY = useSpring(y, { stiffness: 200, damping: 14 });

  const handlePointerMove = (event) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={profile.linkedin}
      target="_blank"
      rel="noreferrer"
      onPointerMove={magnetic ? handlePointerMove : undefined}
      onPointerLeave={magnetic ? handlePointerLeave : undefined}
      style={magnetic ? { x: springX, y: springY } : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 font-display text-sm font-bold uppercase tracking-wide text-on-accent shadow-[0_0_40px_rgba(47,221,143,0.45)] transition-shadow hover:shadow-[0_0_64px_rgba(47,221,143,0.7)]"
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black/55 py-14 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Get in touch</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {contact.subheading}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticCta>
              {contact.ctaLabel}
              <ArrowUpRight size={16} />
            </MagneticCta>
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-display text-sm font-bold tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Globe size={16} />
              {profile.websiteLabel}
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {contactOptions.map((option, i) => (
            <Reveal key={option.title} delay={i * 0.08}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-accent/50 hover:bg-white/[0.06]"
              >
                <div>
                  <p className="font-display text-xs font-bold tracking-widest text-accent">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">{option.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{option.body}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  Start the conversation
                  <ArrowUpRight
                    size={16}
                    className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <img src={profile.photo} alt="" className="h-10 w-10 rounded-full object-cover object-top" />
              <div>
                <p className="font-display text-sm font-bold text-ink">{profile.name}</p>
                <p className="text-xs text-ink-muted">{profile.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-accent" />
                {profile.location}
              </span>
              {[
                { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                { href: profile.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: profile.website, label: "Nexlifie website", Icon: Globe },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
