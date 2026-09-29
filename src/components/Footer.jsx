import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav className="flex items-center gap-5">
          <a href={profile.website} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            {profile.websiteLabel}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
