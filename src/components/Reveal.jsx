import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Consistent scroll-triggered reveal used across every section so the
 * whole page shares one animation language instead of bespoke variants
 * per component.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
