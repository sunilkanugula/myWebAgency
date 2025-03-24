import { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const phoneNumber = "917093770108"; // Your WhatsApp number without '+'
    
    const whatsappMessage = `Hello, I am ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank"); // Opens WhatsApp with pre-filled message
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white"
          >
            Let's Connect & Collaborate
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <form
              className="space-y-6 bg-white/20 p-6 rounded-lg shadow-xl backdrop-blur-2xl border border-white/30"
              onSubmit={handleSubmit}
            >
              {["name", "email", "message"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-white mb-2 capitalize">
                    {field === "email" ? "Email Address" : field === "message" ? "Message" : "Full Name"}
                  </label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-indigo-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white backdrop-blur-lg"
                      placeholder="Let's discuss your project..."
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-indigo-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white backdrop-blur-lg"
                      placeholder={field === "email" ? "your.email@example.com" : "Your Name"}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-white space-y-6">
              <p className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" /> hello@launchmytech.com
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" /> +91 7093770108
              </p>
              <p className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5" /> Srikakulam, Andhra Pradesh, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
