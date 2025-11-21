import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/theme-context';
import { Music2, Disc3, Radio } from 'lucide-react';

export function RetroHero() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden crt-effect">
      <div className="scanline" />
      
      <div className="musical-wave absolute inset-0" />

      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-96 h-96 rounded-full border-8 border-primary"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="retro-text text-4xl md:text-6xl lg:text-7xl text-primary mb-4">
            MATE NATIONS
          </div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Music2 className="w-8 h-8 text-accent" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Disc3 className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Radio className="w-8 h-8 text-accent" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-6"
        >
          <p className="retro-text text-2xl md:text-4xl text-foreground">
            Welcome to Mate Nations
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of music revolutionaries who believe in the power of collaborative creation and emergent sound. We believe that music can be a source of good, and that unique beats {'>'} mainstream.
          </p>

          <motion.button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full retro-text text-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 bubble-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            [ ENTER ] ↓
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="retro-text text-xs text-muted-foreground">
            SCROLL ↓
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 p-6 retro-text text-xs text-muted-foreground">
        <div>C:\\MUSIC\\ {'>'}  MATE_NATIONS.EXE</div>
        <div className="mt-1">SYSTEM: {theme.toUpperCase()}_MODE</div>
      </div>
    </div>
  );
}
