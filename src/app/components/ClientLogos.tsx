import { motion } from "motion/react";

export function ClientLogos() {
  const clients = [
    "Government of India",
    "State PWD",
    "Municipal Corp",
    "NTPC",
    "Railway Board",
    "Defence Ministry",
  ];

  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 uppercase tracking-wider text-sm">
            Trusted by Leading Organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 hover:bg-white/10 transition-all hover:scale-105">
                <span className="text-gray-400 text-sm font-medium text-center block">
                  {client}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
