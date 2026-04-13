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
    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3A] via-[#0F2D4F] to-[#1A4D8F] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}