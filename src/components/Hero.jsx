import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { aboutPillars, profile } from "../data/content";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import DecryptedText from "./DecryptedText";

const EASE = [0.16, 1, 0.3, 1];

const nameLine = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  // Gates the role/bio decrypt effect until the block's own fade/slide
  // entrance has finished, so it reads as two deliberate beats — arrive,
  // then decrypt — rather than scrambling while still fading in.
  const [introSettled, setIntroSettled] = useState(false);
  const showDecrypt = introSettled && !prefersReducedMotion;

  // Scroll-linked exit: as the hero scrolls out from under the viewport,
  // the content parallaxes up and fades while the photo lags slightly
  // behind the text for a layered depth effect.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  // Extra upward travel for the photo on top of the parent's own -140,
  // so it visibly rises faster than the text as the page scrolls.
  const photoScrollY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section id="hero" ref={sectionRef} className="relative bg-bg pb-28 pt-36 sm:pt-44">
      {/* Faint vertical ruler lines — subtle technical/editorial texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--color-ink) 0, var(--color-ink) 1px, transparent 1px, transparent 56px)",
          opacity: 0.06,
        }}
        aria-hidden="true"
      />

      <motion.div
        style={prefersReducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        {/* Small label, sitting above-left of the giant name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-left font-sans text-base italic text-ink-muted sm:text-lg"
        >
          {profile.greeting}
        </motion.p>

        {/* Oversized name with the photo cutout layered on top of it */}
        <div className="relative mt-1">
          <motion.h1
            variants={nameLine}
            initial="hidden"
            animate="visible"
            className="font-display text-[clamp(2.75rem,13vw,10.5rem)] font-black leading-[0.84] tracking-tight text-ink"
          >
            {profile.heroWordTop}
          </motion.h1>
          <motion.h1
            variants={nameLine}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.12 }}
            className="font-display text-[clamp(2.75rem,13vw,10.5rem)] font-black leading-[0.84] tracking-tight text-ink"
          >
            {profile.heroWordBottom}
          </motion.h1>

          {/* Color cutout: head breaks above the top line, torso runs
              below the bottom line — a flat "pasted in" layer, no shadow. */}
          <div className="pointer-events-none absolute left-1/2 top-[4%] z-20 w-[clamp(13rem,38vw,24rem)] -translate-x-1/2">
            <motion.div style={prefersReducedMotion ? undefined : { y: photoScrollY }}>
              {/* Slides up into place while fading in. Opacity 0 at rest
                  means the name text underneath shows through normally
                  until the photo arrives. */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                className="relative"
              >
                {/* Sharp cutout, staying crisp until right near the end. */}
                <img
                  src={profile.photoCutout}
                  alt={profile.name}
                  className="w-full select-none"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 0%, black 88%, transparent 98%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 88%, transparent 98%)",
                  }}
                />
                {/* Blurred duplicate, only visible in a thin band right at
                    the bottom edge — a small soft dissolve, not a heavy
                    blur, instead of the photo stopping at a hard crop. */}
                <img
                  src={profile.photoCutout}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full select-none"
                  style={{
                    filter: "blur(3px)",
                    maskImage:
                      "linear-gradient(to bottom, transparent 84%, black 91%, black 94%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 84%, black 91%, black 94%, transparent 100%)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Location tag, centered directly under the photo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
          data-hero-location-tag
          className="mt-[clamp(14rem,9rem+12vw,18rem)] flex justify-center"
        >
          <span className="card inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-ink-muted">
            <MapPin size={13} className="text-accent-ink" />
            {prefersReducedMotion ? (
              profile.location
            ) : (
              <DecryptedText
                text={profile.location}
                animateOn="hover"
                speed={45}
                maxIterations={8}
                className="text-ink-muted"
                encryptedClassName="font-mono text-accent-ink"
              />
            )}
          </span>
        </motion.div>

        {/* Role + bio + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
          onAnimationComplete={() => setIntroSettled(true)}
          className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-5"
        >
          <div>
            <p className="font-display text-lg font-bold text-ink sm:text-xl">
              {showDecrypt ? (
                <DecryptedText
                  text={profile.title}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={30}
                  className="text-ink"
                  encryptedClassName="font-mono text-accent"
                />
              ) : (
                profile.title
              )}
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              {showDecrypt ? (
                <DecryptedText
                  text={profile.shortBio}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={14}
                  className="text-ink-muted"
                  encryptedClassName="font-mono text-ink-faint"
                />
              ) : (
                profile.shortBio
              )}
            </p>
          </div>

          {/* Compact capability readout — reuses the About section's pillar
              labels as a slim terminal-style strip rather than repeating
              its icon-card treatment, and doubles as visual weight to
              close the gap left under the bio. */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
            {aboutPillars.map(({ key, label }, index) => (
              <span key={key} className="flex items-center gap-2.5">
                {label}
                {index < aboutPillars.length - 1 && (
                  <span aria-hidden="true" className="text-accent">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>

          <a
            href="#services"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex w-fit items-center gap-2 border-b-2 border-ink pb-1 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent-ink"
          >
            See the work
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
