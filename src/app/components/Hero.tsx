import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-16 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2"
            >
              <span className="text-blue-400 text-sm">Trusted by Government & Industries</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              One Enterprise.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Every Solution.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-400 mb-10 max-w-xl"
            >
              Integrated solutions for government, institutions, and industries—from stationery to solar, all delivered with excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-1 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full bg-white/5 border border-white/10 px-6 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:shadow-lg focus:shadow-blue-500/20 transition-all backdrop-blur-xl"
                />
                <button className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2 whitespace-nowrap">
                  Get Quote
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Glass Card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-sm text-gray-400">Govt. Clients</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                    <div className="text-3xl font-bold text-white mb-1">6</div>
                    <div className="text-sm text-gray-400">Core Services</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-sm text-gray-400">Satisfaction</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Project Delivery</span>
                      <span className="text-white">98%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Client Retention</span>
                      <span className="text-white">95%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 shadow-lg shadow-blue-500/50"
              >
                <div className="text-2xl">🎯</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 shadow-lg shadow-blue-500/50"
              >
                <div className="text-2xl">⚡</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
