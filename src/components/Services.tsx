import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  CubeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CameraIcon,
  CommandLineIcon,
  GlobeAltIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive designs that enhance user experience.',
    icon: PaintBrushIcon,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence.',
    icon: RocketLaunchIcon,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: '3D Visualization',
    description: 'Immersive 3D experiences for your digital products.',
    icon: CubeIcon,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Analytics & SEO',
    description: 'Data-driven insights to improve your website performance.',
    icon: ChartBarIcon,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Security Solutions',
    description: 'Robust security measures to protect your digital assets.',
    icon: ShieldCheckIcon,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: DevicePhoneMobileIcon,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud solutions and infrastructure management.',
    icon: CloudIcon,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Content Creation',
    description: 'High-quality visual and written content for your brand.',
    icon: CameraIcon,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'API Development',
    description: 'Custom API solutions for seamless integration.',
    icon: CommandLineIcon,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete online store setup and management.',
    icon: GlobeAltIcon,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Automation',
    description: 'Business process automation and optimization.',
    icon: CursorArrowRaysIcon,
    color: 'from-indigo-500 to-blue-600',
  },
];

export default function Services() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg">
            Our Services
          </span>
          <h2 className="text-5xl font-extrabold mt-6 mb-4">
            Transforming Ideas Into <span className="text-blue-400">Reality</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital services to elevate your brand and online presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-block transition-transform transform group-hover:rotate-12 group-hover:scale-110`}> 
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
