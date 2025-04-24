import { motion } from 'framer-motion';
import launchLogo from "../assets/rompit.png"; // Make sure this image is available

const Partners = () => {
  return (
    <div className="bg-black text-white py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg inline-block">
          Our Partners
        </span>
        <h2 className="text-4xl font-bold mt-6 mb-4 text-blue-400">
          We proudly collaborate with industry leaders
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Bringing innovative solutions with trusted partnerships to deliver the best.
        </p>
      </motion.div>

      <motion.div 
        className="flex justify-center items-center gap-12 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a 
          href="https://rompit.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-500/50 text-center max-w-sm"
          >
            <img 
              src={launchLogo}
              alt="ROMPIT Technologies Logo"
              className="w-32 h-32 mx-auto object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2">ROMPIT TECHNOLOGIES</h3>
            <p className="text-gray-400 text-sm">
              Empowering innovation through cutting-edge tech solutions.
            </p>
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Partners;
