import GradientWaves from "./components/GradientWaves";
import { usePrefersReducedMotion } from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactNudge from "./components/ContactNudge";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Principles from "./components/Principles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <div className="relative min-h-screen">
      {/* Site-wide animated backdrop: fixed behind all content. Light mint/green
          palette keeps the dark body text readable. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <GradientWaves
          horizonColor="#062a1c"
          waveColor="#0b6b45"
          crestColor="#1a8a5c"
          speed={reducedMotion ? 0 : 0.3}
          amplitude={2.5}
          fogDepth={70}
          detail="low"
          opacity={0.4}
          mouseInteraction={false}
          grainIntensity={0.04}
        />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Principles />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ContactNudge />
    </div>
  );
}
