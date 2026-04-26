import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ClientLogos } from "./components/ClientLogos";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#2B1207] via-[#7A3207] to-[#D96A00]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/assets/map.svg')] bg-center bg-no-repeat opacity-10 mix-blend-overlay"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/30" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ClientLogos />
        <Services />
        <Features />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
