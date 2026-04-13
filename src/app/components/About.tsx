import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "ISO certified enterprise",
    "Pan-India operations",
    "Dedicated project teams",
    "24/7 support system",
  ];

  return (
    <section id="about" className="relative px-6 md:px-12 lg:px-16 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <div className="text-white text-2xl font-bold mb-2">
                    JayMurli Enterprises
                  </div>
                  <div className="text-gray-400">
                    Building Trust Since Inception
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600/30 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About JayMurli Enterprises
            </h2>

            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              JayMurli Enterprises Pvt. Ltd. is a comprehensive service provider specializing in integrated backend solutions for government institutions and industrial clients across India.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              With a commitment to quality, reliability, and timely delivery, we have established ourselves as a trusted partner for organizations seeking dependable support across multiple operational domains.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-blue-400 flex-shrink-0" size={24} />
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Partner With Us
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
