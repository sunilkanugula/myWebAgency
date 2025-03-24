import { motion } from 'framer-motion';
import web3 from "../assets/web3.jpg";
import etech from "../assets/educationalplatform.jpg"; // Importing E-Tech image

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    description: 'Modern e-commerce solution with seamless payment integration',
    link: 'https://example.com/e-commerce-platform'
  },
  {
    title: 'Financial Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Interactive dashboard for financial data visualization',
    link: 'https://example.com/financial-dashboard'
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    description: 'Patient management system for healthcare providers',
    link: 'https://example.com/healthcare-app'
  },
  {
    title: 'Real Estate Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    description: 'Property listing and management system',
    link: 'https://example.com/real-estate-platform'
  },
  {
    title: 'Startup Website',
    category: 'Web Development',
    image: web3,
    description: 'Website for startup company',
    link: 'https://rompit.org'
  },
  {
    title: 'E-Tech Platform',
    category: 'Web Development',
    image: etech,
    description: 'Advanced tech solutions platform',
    link: 'https://lntechnologies.info'
  }
];

export default function Portfolio() {
  return (
    <div className="relative bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-20"
        >
          <motion.span 
            className="bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-lg inline-block"
          >
            Our Work
          </motion.span>
          <motion.h2 className="text-4xl font-bold mt-6 mb-4 text-blue-400">
            Featured Projects
          </motion.h2>
          <motion.p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered with excellence and innovation.
          </motion.p>
        </motion.div>

        {/* Grid with 3 Cards per Row in Desktop View */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-gray-900 hover:shadow-blue-500/50 w-full max-w-[400px] mx-auto"
            >
              <a
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col justify-end">
                  <span className="text-blue-400 text-sm font-medium mb-2">{project.category}</span>
                  <h3 className="text-white text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <span 
                    className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                  >
                    See Our Work
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
