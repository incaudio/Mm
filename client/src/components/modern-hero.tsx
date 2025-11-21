import { motion } from "framer-motion";
import { TypingEffect } from "./typing-effect";
import { useTheme } from "../contexts/theme-context";
import cloudImage from "@assets/6705b4a36def1cf003c24d10_Property 1=Day, Property 2=Cloud 3_1760332010666.png";

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 2,
  duration: Math.random() * 3 + 2,
}));

export function ModernHero() {
  const { theme } = useTheme();
  const isDayTheme = theme === 'day';

  const handleScrollClick = () => {
    const container = document.getElementById('sliding-container');
    if (container) {
      container.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated particles/stars - only show in night theme */}
      {!isDayTheme && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-300"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            willChange: 'opacity, transform',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Clouds - hidden on mobile, visible on desktop with slow floating animation */}
      <motion.img
        src={cloudImage}
        alt="cloud"
        className="hidden md:block absolute left-[5%] top-[25%] w-[280px] opacity-80"
        initial={{ x: -100, opacity: 0, y: 0 }}
        animate={{ 
          x: 0, 
          opacity: 0.8,
          y: [0, -15, 0]
        }}
        transition={{ 
          x: { duration: 1.2, ease: "easeOut" },
          opacity: { duration: 1.2, ease: "easeOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.img
        src={cloudImage}
        alt="cloud"
        className="hidden md:block absolute right-[8%] top-[35%] w-[250px] opacity-70"
        initial={{ x: 100, opacity: 0, y: 0 }}
        animate={{ 
          x: 0, 
          opacity: 0.7,
          y: [0, -12, 0]
        }}
        transition={{ 
          x: { duration: 1.4, ease: "easeOut" },
          opacity: { duration: 1.4, delay: 0.2, ease: "easeOut" },
          y: { duration: 9, delay: 1, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.img
        src={cloudImage}
        alt="cloud"
        className="hidden md:block absolute left-[10%] bottom-[20%] w-[220px] opacity-60"
        initial={{ x: -80, opacity: 0, y: 0 }}
        animate={{ 
          x: 0, 
          opacity: 0.6,
          y: [0, -10, 0]
        }}
        transition={{ 
          x: { duration: 1.3, ease: "easeOut" },
          opacity: { duration: 1.3, delay: 0.3, ease: "easeOut" },
          y: { duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />


      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-1"
        >
          <div className="mb-1">
            <TypingEffect />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-pink-300 font-light italic mb-1"
          >
            The music of revolution,
            <br />
            We are the solution.
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-base md:text-lg text-gray-200 max-w-xl mx-auto mb-8"
        >
          Innovative record label celebrating all genres and transforming artists into global superstars.
        </motion.p>

        <motion.button
          onClick={handleScrollClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -10, 0]
          }}
          transition={{ 
            delay: 1.6, 
            duration: 0.6,
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-2xl text-white px-8 py-3 rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 mx-auto shadow-2xl shadow-purple-500/20 z-20"
        >
          Scroll
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      </div>
    </div>
  );
}
