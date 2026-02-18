'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full text-blush-600 dark:text-champagne-300 hover:bg-blush-50 dark:hover:bg-blush-900/20 transition-colors"
    >
      {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
    </motion.button>
  );
}
