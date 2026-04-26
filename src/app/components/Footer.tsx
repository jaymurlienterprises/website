import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-16 py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600">
                <span className="font-bold text-white text-lg">JM</span>
              </div>
              <span className="font-semibold text-white">JayMurli Enterprises</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your trusted partner for integrated solutions across government and industrial sectors.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2 text-gray-400 hover:bg-amber-500/20 hover:text-amber-300 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2 text-gray-400 hover:bg-amber-500/20 hover:text-amber-300 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2 text-gray-400 hover:bg-amber-500/20 hover:text-amber-300 transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Stationery Supplies</li>
              <li className="text-gray-400 text-sm">Housekeeping Materials</li>
              <li className="text-gray-400 text-sm">Labour Supply</li>
              <li className="text-gray-400 text-sm">Furniture Manufacturing</li>
              <li className="text-gray-400 text-sm">Construction Services</li>
              <li className="text-gray-400 text-sm">Solar Installation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-amber-300 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">jaymurlienterprises@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-amber-300 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">+91 9689667072 | 7447667072</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-300 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">N-11 G 10/9, NAVJIVAN COLONEY HUDCO CHHATRAPATI SAMBHAJINAGAR<br/>FLAT NO 2, 163/A, 164, NAGESHWAR GALLI, PARNER, AHILYANAGAR 414302</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 JayMurli Enterprises Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
