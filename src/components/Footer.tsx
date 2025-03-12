import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
  FaBehance,
  FaMediumM,
  FaYoutube,
  FaDiscord
} from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://x.com/LaunchMyTech', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/launchmytech/', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/launchmytech/?viewAsMember=true', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: FaBehance, href: 'https://behance.net', label: 'Behance' },
    { icon: FaMediumM, href: 'https://medium.com', label: 'Medium' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@LaunchMyTech', label: 'YouTube' },
    { icon: FaDiscord, href: 'https://discord.com', label: 'Discord' }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Let's Build Something Amazing! 🚀</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect with us for innovative web solutions. Stay updated with our latest projects and insights!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {['Services', 'Company', 'Resources', 'Legal'].map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-white">{section}</h3>
              <ul className="space-y-2 text-gray-300">
                {['Web Development', 'UI/UX Design', 'Digital Marketing', 'Mobile Apps'].map((item, idx) => (
                  <li key={idx}><a href="#" className="hover:text-blue-200">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 p-3 rounded-full border-2 border-white hover:bg-blue-600 hover:border-blue-600"

            >
              <social.icon className="w-5 h-5 text-white" />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="text-center text-gray-300 text-sm border-t border-gray-500 pt-8">
          <p>© 2024 Sunil Kumar | All Rights Reserved</p>
          <p className="mt-2">Made with ❤️ in Srikakulam, Andhra Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
