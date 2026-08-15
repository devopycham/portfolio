import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import LinkedInIcon from "./icons/LinkedInIcon";
import { contact, profile } from "../data/content";
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
      className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-bg transition-shadow hover:animate-pulse"
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative bg-bg-alt py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-black leading-tight text-ink sm:text-6xl">
            {contact.heading}
          </h2>
          <p className="mt-5 text-base text-ink-muted sm:text-lg">{contact.subheading}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticCta>{contact.ctaLabel}</MagneticCta>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on LinkedIn"
              className="card inline-flex h-12 w-12 items-center justify-center rounded-full text-ink transition-colors hover:bg-accent-soft hover:text-accent-ink"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
