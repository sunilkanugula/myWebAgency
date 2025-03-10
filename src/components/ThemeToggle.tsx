import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useThemeStore } from '../store/themeStore';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="absolute top-4 right-4 z-50 bg-gradient-to-r from-red-600 to-black p-2 rounded-full shadow-lg cursor-pointer"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-white" />
      ) : (
        <MoonIcon className="h-6 w-6 text-white" />
      )}
    </motion.button>
  );
}