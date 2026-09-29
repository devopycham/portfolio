import { motion } from "framer-motion";
import { profile } from "../data/content";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Work" },
  { id: "experience", label: "Experience" },
];

const scrollToSection = (id) => (event) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-6"
    >
      <nav className="card flex w-full max-w-2xl items-center justify-between rounded-full px-2 py-2 sm:px-3">
        <button
          type="button"
          onClick={scrollToSection("hero")}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-bg"
          aria-label="Back to top"
        >
          MT
        </button>

        <ul className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={scrollToSection(link.id)}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:bg-bg-alt hover:text-ink sm:px-4"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="hidden sm:block">
            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:bg-bg-alt hover:text-ink"
            >
              Website ↗
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          onClick={scrollToSection("contact")}
          className="hidden rounded-full bg-accent px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-on-accent transition-transform hover:scale-105 sm:block"
        >
          Connect
        </a>
      </nav>
    </motion.header>
  );
}
