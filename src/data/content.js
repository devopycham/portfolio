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
  instagram: "https://www.instagram.com/mohd_mbshr",
  website: "https://nexlifie.com",
  websiteLabel: "nexlifie.com",
  bio: "Nexlifie is a technology solutions company delivering end-to-end IT services — combining Artificial Intelligence, Cybersecurity, Digital Transformation, and Marketing. We build high-performance websites, custom software, SEO systems, automation workflows, and scalable digital infrastructure for startups, clinics, salons, and service brands. Through Nexlifie Media, our marketing arm, we also help those brands get seen and grow.",
  // Local placeholder — drop your photo at this path (already present in the repo root).
  photo: import.meta.env.BASE_URL + "image.JPG",
  // Pre-processed cutout (background removed via macOS Vision framework
  // subject segmentation) used in the hero.
  photoCutout: import.meta.env.BASE_URL + "profile-cutout.png",
};

export const aboutPillars = [
  { key: "cloud", label: "Cloud", blurb: "Infrastructure that stays fast, reliable and cost-efficient at scale." },
  { key: "shield", label: "Cybersecurity", blurb: "Security designed in from day one, not bolted on after launch." },
  { key: "chip", label: "AI Systems", blurb: "Practical AI woven into products and workflows that move the business." },
  { key: "automation", label: "Automation", blurb: "Manual busywork replaced with systems that run themselves." },
];

// Facts derived from the experience timeline below — no invented metrics.
export const stats = [
  { value: 2, suffix: "", label: "Verticals: Development & Media" },
  { value: 6, suffix: "", label: "Development services" },
  { value: 7, suffix: "", label: "Marketing services" },
  { value: 4, suffix: "", label: "Roles across cloud & operations" },
];

// The two verticals of Nexlifie shown in About (offerings mirror nexlifie.com).
export const verticals = [
  {
    name: "Nexlifie",
    tag: "Development",
    tagline: "Building ideas into reality with secured products.",
    points: ["AI Solutions", "Custom Business Software", "Mobile Applications", "Web Applications", "Websites & Digital Products", "Game Applications"],
    href: "https://nexlifie.com/development",
    label: "nexlifie.com/development",
  },
  {
    name: "Nexlifie Media",
    tag: "Marketing",
    tagline: "Performance-led marketing strategies that get brands seen and growing.",
    points: ["Digital Marketing", "Branding", "SEO", "Social Media Management", "Video Production", "AI Videos", "Influencer Marketing"],
    href: "https://nexlifie.com/media",
    label: "nexlifie.com/media",
  },
];


export const principles = [
  { title: "Build, don't just plan", body: "Ideas are easy. Shipping them is the work." },
  { title: "Secure by default", body: "Every system is designed with security at its core." },
  { title: "Leverage over labor", body: "Automation and AI so small teams operate like large ones." },
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
  {
    number: "06",
    title: "Nexlifie Media",
    tag: "Marketing arm",
    description:
      "Marketing for the brands we build for. Nexlifie Media puts your product in front of the right audience and turns attention into growth.",
  },
];

export const experience = [
  {
    role: "Founder & CEO",
    focus: "Building AI-powered, secure digital products.",
    company: "Nexlifie",
    period: "Apr 2026 — Present",
  },
  {
    role: "Operations Manager",
    focus: "Keeping teams and delivery running smoothly.",
    company: "TBH",
    period: "Jul 2023 — May 2026",
  },
  {
    role: "Cloud Engineer",
    focus: "Designing and running cloud infrastructure.",
    company: "techbyheart",
    period: "Jun 2023 — Jan 2025",
  },
  {
    role: "Cloud Support Engineer",
    focus: "Learning how real systems behave under pressure.",
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
  title: "Get in touch",
  message: "Building something? I might be able to help.",
  ctaLabel: "Let's talk",
};

// Engagement types shown in the Contact section.
export const contactOptions = [
  { title: "Start a project", body: "Websites, software, AI and automation, scoped and built end to end." },
  { title: "Explore a partnership", body: "Technology or marketing collaboration through Nexlifie and Nexlifie Media." },
  { title: "Say hello", body: "Advice, ideas or an introduction. Always open to a good conversation." },
];
