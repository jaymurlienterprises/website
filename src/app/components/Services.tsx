import { motion } from "motion/react";
import {
  FileText,
  Sparkles,
  Users,
  Sofa,
  Building2,
  Sun,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export function Services() {
  const [selectedGalleryService, setSelectedGalleryService] =
    useState<string>("Construction Services");
  const [autoRotateGallery, setAutoRotateGallery] = useState(true);

  const interiorImages = [
    "WhatsApp Image 2026-04-23 at 9.36.29 AM.jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.30 AM (1).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.30 AM (2).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.30 AM.jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.31 AM (1).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.31 AM (2).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.31 AM.jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.32 AM (1).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.32 AM (2).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.32 AM.jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.33 AM (1).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.33 AM (2).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.33 AM.jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.34 AM (1).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.34 AM (2).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.34 AM.jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.35 AM (1).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.35 AM (2).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.35 AM.jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.36 AM (1).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.36 AM (2).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.36 AM.jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.37 AM (1).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.37 AM (2).jpeg",
    "WhatsApp Image 2026-04-23 at 9.36.37 AM.jpeg",
  ];

  const interiorImageSrcs = interiorImages.map(
    (filename) => `/intrior/${encodeURIComponent(filename)}`,
  );

  const solarImages = [
    "WhatsApp Image 2026-04-26 at 10.14.44 AM (1).jpeg",
    "WhatsApp Image 2026-04-26 at 10.14.44 AM.jpeg",
    "WhatsApp Image 2026-04-26 at 10.14.45 AM (1).jpeg",
    "WhatsApp Image 2026-04-26 at 10.14.45 AM.jpeg",
    "WhatsApp Image 2026-04-26 at 10.15.12 AM (1).jpeg",
    "WhatsApp Image 2026-04-26 at 10.15.12 AM.jpeg",
    "WhatsApp Image 2026-04-26 at 10.15.13 AM (1).jpeg",
    "WhatsApp Image 2026-04-26 at 10.15.13 AM.jpeg",
    "WhatsApp Image 2026-04-26 at 10.15.14 AM (1).jpeg",
    "WhatsApp Image 2026-04-26 at 10.15.14 AM.jpeg",
    "WhatsApp Image 2026-04-26 at 10.15.15 AM (1).jpeg",
    "WhatsApp Image 2026-04-26 at 10.15.15 AM.jpeg",
  ];

  const solarImageSrcs = solarImages.map(
    (filename) => `/solar/${encodeURIComponent(filename)}`,
  );

  const serviceGalleries = useMemo<Record<string, string[]>>(
    () => ({
      "Stationery Supplies": [],
      "Housekeeping Materials": [],
      "Furniture Manufacturing": [],
      "Construction Services": interiorImageSrcs,
      "Solar Installation": solarImageSrcs,
    }),
    [interiorImageSrcs, solarImageSrcs],
  );

  const galleryTabs = useMemo(
    () => [
      "Stationery Supplies",
      "Solar Installation",
      "Furniture Manufacturing",
      "Construction Services",
      "Housekeeping Materials",
    ],
    [],
  );

  useEffect(() => {
    if (!autoRotateGallery) return;

    const intervalId = window.setInterval(() => {
      setSelectedGalleryService((current) => {
        const currentIndex = galleryTabs.indexOf(current);
        const nextIndex =
          currentIndex === -1 ? 0 : (currentIndex + 1) % galleryTabs.length;
        return galleryTabs[nextIndex];
      });
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [autoRotateGallery, galleryTabs]);

  const services = [
    {
      icon: FileText,
      title: "Stationery Supplies",
      description: "Complete range of office stationery and supplies for government and corporate needs.",
      highlighted: false,
    },
    {
      icon: Sun,
      title: "Solar Installation",
      description: "Sustainable solar energy solutions with installation and maintenance support.",
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
      icon: Sparkles,
      title: "Housekeeping Materials",
      description: "Premium cleaning and maintenance materials ensuring hygienic work environments.",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const learnMoreContent = (
              <div
                className={`mt-6 inline-flex items-center gap-2 text-sm transition-colors ${
                  service.highlighted
                    ? "text-amber-300"
                    : "text-gray-500 group-hover:text-amber-300"
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
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group relative rounded-2xl p-6 md:p-8 backdrop-blur-xl border transition-all ${
                  service.highlighted
                    ? "bg-gradient-to-br from-amber-500/20 to-orange-600/10 border-orange-500/50 shadow-lg shadow-orange-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`mb-6 inline-flex rounded-xl p-3 transition-all ${
                    service.highlighted
                      ? "bg-amber-500/20"
                      : "bg-white/5 group-hover:bg-amber-500/20"
                  }`}
                >
                  <Icon
                    className={`transition-colors ${
                      service.highlighted
                        ? "text-amber-300"
                        : "text-gray-400 group-hover:text-amber-300"
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

                {learnMoreContent}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3 tracking-wide">
              Photo Gallery
            </h3>
            <p className="text-gray-400">
              A glimpse of our recent interior and construction work.
            </p>
          </div>

          <div className="mt-6 -mx-6 px-6 md:mx-0 md:px-0 flex gap-2 overflow-x-auto md:overflow-visible md:flex-wrap md:justify-center justify-start scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {galleryTabs.map((tab) => {
              const isActive = selectedGalleryService === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setAutoRotateGallery(false);
                    setSelectedGalleryService(tab);
                  }}
                  className={`whitespace-nowrap rounded-md border px-4 py-2 text-[10px] sm:text-xs tracking-widest uppercase transition-colors ${
                    isActive
                      ? "bg-white text-gray-900 border-white"
                      : "bg-transparent text-gray-200 border-white/20 hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {serviceGalleries[selectedGalleryService]?.length ? (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {serviceGalleries[selectedGalleryService]
                .slice(0, 12)
                .map((src, index) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-2xl"
                  >
                    <img
                      src={src}
                      alt={`${selectedGalleryService} photo ${index + 1}`}
                      loading="lazy"
                      className="h-32 sm:h-44 lg:h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
            </div>
          ) : (
            <div className="mt-10 mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-gray-200">
                No photos added for <span className="text-white">{selectedGalleryService}</span> yet.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Add images in `public/` and then update `serviceGalleries` in
                `src/app/components/Services.tsx`.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
