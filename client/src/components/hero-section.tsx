import { motion } from "framer-motion";
import { TypingLogo } from "./typing-logo";
import { AnimatedBackground } from "./animated-background";

export function HeroSection() {
  return (
    <AnimatedBackground intensity="high" className="min-h-screen flex items-center justify-center">
      <div className="text-center z-10 max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-20"
        >
          <TypingLogo />
        </motion.div>
        
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-3xl mx-auto mb-10"
          style={{ fontWeight: 700 }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          data-testid="text-hero-tagline"
        >
          The music of revolution, we are the solution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 text-white font-medium hover:scale-105 active:scale-95"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            data-testid="button-visit"
          >
            Visit ↓
          </button>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
}
