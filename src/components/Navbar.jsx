import { motion } from "framer-motion";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Work" },
  { id: "contact", label: "Contact" },
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
      <nav className="card flex w-full max-w-md items-center justify-between rounded-full px-2 py-2 sm:px-3">
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
        </ul>
      </nav>
    </motion.header>
  );
}
