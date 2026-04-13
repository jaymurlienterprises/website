import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative px-6 md:px-12 lg:px-16 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
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
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to partner with us? Reach out and let's discuss your requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                Our team is available to answer your questions and provide comprehensive solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-500/20 p-3">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <div className="text-white">info@jaymurli.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-500/20 p-3">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <div className="text-white">+91 XXXXX XXXXX</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-500/20 p-3">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Address</div>
                  <div className="text-white">
                    Corporate Office, India
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-xl border border-blue-500/50 p-6">
              <div className="text-blue-400 mb-2">Business Hours</div>
              <div className="text-white">Monday - Saturday: 9:00 AM - 6:00 PM</div>
              <div className="text-gray-400 text-sm mt-1">Sunday: Closed</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:shadow-lg focus:shadow-blue-500/20 transition-all backdrop-blur-xl"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:shadow-lg focus:shadow-blue-500/20 transition-all backdrop-blur-xl"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:shadow-lg focus:shadow-blue-500/20 transition-all backdrop-blur-xl resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
