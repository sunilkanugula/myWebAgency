import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative bg-black text-white overflow-hidden h-screen flex items-center bg-[url('https://cdn.dribbble.com/userupload/36904974/file/original-5eb936b88cd58b0cadd77abfc949e34f.jpg')] bg-cover bg-center">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-900/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Your Vision, <span className="text-blue-500">Our Code – Delivering </span>
          <br /> Excellence Online
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          We craft modern, high-performance web applications that drive growth
          and engagement. From e-commerce to custom solutions, we bring your
          vision to life with cutting-edge technology.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-md">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all shadow-md">
            View Portfolio
          </button>
        </motion.div>
      </div>
    </div>
  );
}
