// Single source of truth for all portfolio copy/content.
// Keeping content data-driven (rather than hardcoded in JSX) means the
// section components stay purely presentational and can be reused/tested
// independently of the copy.

export const profile = {
  name: "Muhammad Mubashir T",
  heroWordTop: "muhammad",
  heroWordBottom: "mubashir",
  greeting: "Hi, I'm",
  title: "Founder & CEO, Nexlifie",
  tagline: "Founder. Builder. Turning Ideas into AI-Powered & Secure Digital Products.",
  shortBio:
    "Ideas are easy. Building them is the work. I build AI-powered products, secure digital systems, and technology businesses through Nexlifie.",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/muhammadmubashirt",
  bio: "Nexlifie is a technology solutions company delivering end-to-end IT services — combining Artificial Intelligence, Cybersecurity, and Digital Transformation. We build high-performance websites, custom software, SEO systems, automation workflows, and scalable digital infrastructure for startups, clinics, salons, and service brands.",
  // Local placeholder — drop your photo at this path (already present in the repo root).
  photo: import.meta.env.BASE_URL + "image.JPG",
  // Pre-processed cutout (background removed via macOS Vision framework
  // subject segmentation) used in the hero.
  photoCutout: import.meta.env.BASE_URL + "profile-cutout.png",
};

export const aboutPillars = [
  { key: "cloud", label: "Cloud" },
  { key: "shield", label: "Cybersecurity" },
  { key: "chip", label: "AI Systems" },
  { key: "automation", label: "Automation" },
];

export const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "High-performance, conversion-focused websites built for speed, clarity, and credibility.",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "Bespoke software and internal tools engineered around how your business actually operates.",
  },
  {
    number: "03",
    title: "SEO Systems",
    description:
      "Structured, technical SEO systems that compound visibility instead of chasing short-term ranking hacks.",
  },
  {
    number: "04",
    title: "Automation Workflows",
    description:
      "Automation that removes manual busywork and lets teams operate at higher leverage.",
  },
  {
    number: "05",
    title: "Scalable Infrastructure",
    description:
      "Cloud infrastructure architected to stay reliable and cost-efficient as demand grows.",
  },
];

export const experience = [
  {
    role: "Founder & CEO",
    company: "Nexlifie",
    period: "Apr 2026 — Present",
  },
  {
    role: "Operations Manager",
    company: "TBH",
    period: "Jul 2023 — May 2026",
  },
  {
    role: "Cloud Engineer",
    company: "techbyheart",
    period: "Jun 2023 — Jan 2025",
  },
  {
    role: "Cloud Support Engineer",
    company: "techbyheart",
    period: "Jan 2023 — May 2023",
  },
];

export const education = {
  institution: "APJ Abdul Kalam Technological University",
  degree: "B.Tech, Computer Engineering",
  period: "2016 — 2020",
};

export const contact = {
  heading: "Let's build something that actually works.",
  subheading: "Open to conversations about AI, cybersecurity, and digital transformation.",
  ctaLabel: "Let's Build Something",
};

export const popup = {
  title: "nexlifie.exe",
  message: "Building something? I might be able to help.",
  ctaLabel: "Let's talk",
};
