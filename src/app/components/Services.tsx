import { motion } from "motion/react";
import {
  FileText,
  Sparkles,
  Users,
  Sofa,
  Building2,
  Sun,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Stationery Supplies",
      description: "Complete range of office stationery and supplies for government and corporate needs.",
      highlighted: false,
    },
    {
      icon: Sparkles,
      title: "Housekeeping Materials",
      description: "Premium cleaning and maintenance materials ensuring hygienic work environments.",
      highlighted: true,
    },
    {
      icon: Users,
      title: "Labour Supply",
      description: "Skilled and verified workforce solutions for institutional and industrial operations.",
      highlighted: false,
    },
    {
      icon: Sofa,
      title: "Furniture Manufacturing",
      description: "Custom-designed and durable furniture for offices, institutions, and facilities.",
      highlighted: false,
    },
    {
      icon: Building2,
      title: "Construction Services",
      description: "End-to-end construction and civil engineering solutions for government projects.",
      highlighted: false,
    },
    {
      icon: Sun,
      title: "Solar Installation",
      description: "Sustainable solar energy solutions with installation and maintenance support.",
      highlighted: false,
    },
  ];

  return (
    <section id="services" className="relative px-6 md:px-12 lg:px-16 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions across six core domains, delivered with precision and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group relative rounded-2xl p-8 backdrop-blur-xl border transition-all ${
                  service.highlighted
                    ? "bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 -right-3">
                    <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 text-xs text-white">
                      Popular
                    </div>
                  </div>
                )}

                <div
                  className={`mb-6 inline-flex rounded-xl p-3 transition-all ${
                    service.highlighted
                      ? "bg-blue-500/20"
                      : "bg-white/5 group-hover:bg-blue-500/20"
                  }`}
                >
                  <Icon
                    className={`transition-colors ${
                      service.highlighted
                        ? "text-blue-400"
                        : "text-gray-400 group-hover:text-blue-400"
                    }`}
                    size={28}
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div
                  className={`mt-6 inline-flex items-center gap-2 text-sm transition-colors ${
                    service.highlighted
                      ? "text-blue-400"
                      : "text-gray-500 group-hover:text-blue-400"
                  }`}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
