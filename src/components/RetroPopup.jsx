import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useDragControls } from "framer-motion";
import { Minus, Send, Terminal, X } from "lucide-react";
import { popup } from "../data/content";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

// A snappy, distinct exit transition — minimizing/closing should feel
// instant, not replay the same bouncy entrance spring in reverse.
const windowVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.92,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

/**
 * A playful retro terminal-window popup: draggable by its title bar,
 * types its message out character by character, then runs a fake
 * "loading" sequence that gates the CTA — and minimizes to a small dock
 * icon rather than just closing outright.
 */
export default function RetroPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [typedLength, setTypedLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter reveal of the message.
  useEffect(() => {
    if (!isVisible) return undefined;
    if (prefersReducedMotion) {
      setTypedLength(popup.message.length);
      return undefined;
    }
    let count = 0;
    const id = setInterval(() => {
      count += 1;
      setTypedLength(count);
      if (count >= popup.message.length) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [isVisible, prefersReducedMotion]);

  // Once typing finishes, run a fake "loading" progress that gates the CTA.
  useEffect(() => {
    if (!isVisible || prefersReducedMotion) return undefined;
    if (typedLength < popup.message.length) return undefined;
    const controls = animate(0, 100, {
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (value) => setProgress(Math.round(value)),
    });
    return () => controls.stop();
  }, [isVisible, typedLength, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) setProgress(100);
  }, [prefersReducedMotion]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleCta = () => {
    handleClose();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (isDismissed) return null;

  const isReady = progress >= 100;
  const isTyping = typedLength < popup.message.length;
  const typedMessage = popup.message.slice(0, typedLength);

  return (
    <div ref={constraintsRef} className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {isVisible && !isMinimized && (
          <motion.div
            role="dialog"
            aria-label={popup.title}
            drag
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={constraintsRef}
            dragElastic={0.06}
            dragMomentum={false}
            variants={prefersReducedMotion ? reducedMotionVariants : windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pointer-events-auto absolute bottom-4 right-4 w-[min(300px,calc(100vw-2rem))] overflow-hidden rounded-md border-2 border-ink bg-surface shadow-[4px_4px_0_var(--color-ink)] sm:bottom-5 sm:right-5 sm:w-[320px]"
          >
            {/* Title bar — drag handle */}
            <div
              onPointerDown={(event) => dragControls.start(event)}
              className="flex cursor-grab items-center justify-between border-b-2 border-ink bg-ink px-3 py-2 active:cursor-grabbing"
            >
              <div className="flex items-center gap-2">
                <Terminal size={13} className="text-accent" aria-hidden="true" />
                <span className="font-display text-xs font-bold tracking-wide text-bg">
                  {popup.title}
                </span>
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  style={{ animation: "blink 1.4s step-end infinite" }}
                  aria-hidden="true"
                />
              </div>
              <div
                className="flex items-center gap-1.5"
                onPointerDown={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsMinimized(true)}
                  aria-label="Minimize"
                  className="flex h-5 w-5 items-center justify-center border border-bg/50 text-bg transition-colors hover:bg-bg hover:text-ink"
                >
                  <Minus size={11} />
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="flex h-5 w-5 items-center justify-center border border-bg/50 text-bg transition-colors hover:bg-accent hover:text-ink"
                >
                  <X size={11} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="min-h-[2.5rem] font-mono text-sm leading-relaxed text-ink">
                {typedMessage}
                {isTyping && (
                  <span
                    className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-[2px] bg-ink"
                    style={{ animation: "blink 0.8s step-end infinite" }}
                    aria-hidden="true"
                  />
                )}
              </p>

              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                  <span>{isReady ? "Ready" : "Loading"}</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full border border-ink/20 bg-bg-alt">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.15, ease: "linear" }}
                  />
                </div>
              </div>

              <motion.button
                type="button"
                onClick={handleCta}
                disabled={!isReady}
                initial={false}
                animate={{ opacity: isReady ? 1 : 0.35, y: isReady ? 0 : 6 }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-2 text-xs font-bold uppercase tracking-wide text-bg transition-transform enabled:hover:scale-[1.02] disabled:cursor-not-allowed"
              >
                {popup.ctaLabel}
                <Send size={12} aria-hidden="true" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized dock icon */}
      <AnimatePresence>
        {isVisible && isMinimized && (
          <motion.button
            type="button"
            onClick={() => setIsMinimized(false)}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label={`Reopen ${popup.title}`}
            className="pointer-events-auto absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-ink text-bg shadow-[3px_3px_0_var(--color-ink)]"
          >
            <Terminal size={18} className="text-accent" aria-hidden="true" />
            <span
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-bg bg-accent"
              aria-hidden="true"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
