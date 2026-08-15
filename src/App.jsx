import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RetroPopup from "./components/RetroPopup";
import TickerBand from "./components/TickerBand";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <TickerBand />
        <About />
        <Services />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <RetroPopup />
    </div>
  );
}
