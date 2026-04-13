import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 px-6 py-4 backdrop-blur-xl border border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
              <span className="font-bold text-white text-lg">JM</span>
            </div>
            <span className="hidden md:block font-semibold text-white text-lg">
              JayMurli Enterprises
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                Contact
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2.5 text-white text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all mt-2"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
