import { useTheme } from '@/contexts/theme-context';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-lg shadow-black/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ 
            opacity: theme === 'day' ? 1 : 0,
            rotate: theme === 'day' ? 0 : -90 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Sun className="w-6 h-6 text-amber-500" />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, rotate: 0 }}
          animate={{ 
            opacity: theme === 'night' ? 1 : 0,
            rotate: theme === 'night' ? 0 : 90 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Moon className="w-6 h-6 text-blue-400" />
        </motion.div>
      </div>
    </motion.button>
  );
}
