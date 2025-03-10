import { motion } from 'framer-motion';
import { BeakerIcon, HomeIcon, ShoppingBagIcon, AcademicCapIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const industries = [
  {
    icon: BeakerIcon,
    title: 'Medical & Healthcare',
    description: 'Secure, HIPAA-compliant platforms for healthcare professionals.'
  },
  {
    icon: HomeIcon,
    title: 'Real Estate',
    description: 'Feature-rich property listings with advanced search filters.'
  },
  {
    icon: ShoppingBagIcon,
    title: 'E-Commerce',
    description: 'Seamless shopping experiences with fast, conversion-focused designs.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Education',
    description: 'Interactive learning management systems for students and educators.'
  },
  {
    icon: CommandLineIcon,
    title: 'Custom Web Applications',
    description: 'Tailor-made digital solutions for businesses of all sizes.'
  }
];

export default function Industries() {
  return (
    <div className="bg-white text-blue py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-6">
            🚀 Build Stunning Websites for Every Industry!
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From <span className="font-semibold text-blue-400">Medical & Healthcare</span> to{' '}
            <span className="font-semibold text-blue-400">Real Estate, E-Commerce, and Education</span>, I craft{' '}
            <span className="font-semibold text-blue-400">high-performance, user-friendly, and scalable web solutions</span>{' '}
            tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <industry.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">{industry.title}</h3>
              <p className="text-gray-300">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}