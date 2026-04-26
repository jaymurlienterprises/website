import { motion } from "motion/react";
import { Shield, Package, MapPin, Cpu } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Government Network",
      description: "Established relationships with central and state government departments nationwide.",
    },
    {
      icon: Package,
      title: "Single Vendor Solution",
      description: "One enterprise for all your operational needs—streamlined procurement and execution.",
    },
    {
      icon: MapPin,
      title: "Rural Reach",
      description: "Extensive network covering urban centers to remote rural locations across India.",
    },
    {
      icon: Cpu,
      title: "Technology Driven",
      description: "Modern systems for tracking, reporting, and seamless project management.",
    },
  ];

  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-24">
      {/* Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Delivering excellence through expertise, reach, and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/20">
                  <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 p-3">
                    <Icon className="text-amber-300" size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
