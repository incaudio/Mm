import { motion } from "framer-motion";

export function IsometricCube({ className = "", delay = 0, color = "from-purple-500 to-pink-500" }: { className?: string; delay?: number; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 0 }}
      animate={{ opacity: 1, y: 0, rotateX: 360 }}
      transition={{ 
        delay, 
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className={`${className} perspective-1000`}
    >
      <div className="relative w-24 h-24" style={{ transform: 'rotateX(45deg) rotateZ(45deg)' }}>
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-80 rounded-lg shadow-2xl`}></div>
      </div>
    </motion.div>
  );
}

export function RetroVinyl({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ 
        delay,
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
      className={className}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="vinylGradient">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="40%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#vinylGradient)" stroke="#444" strokeWidth="1"/>
        <circle cx="50" cy="50" r="8" fill="#ec4899" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#333" strokeWidth="0.5"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#333" strokeWidth="0.5"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="#333" strokeWidth="0.5"/>
        <circle cx="50" cy="50" r="20" fill="none" stroke="#333" strokeWidth="0.5"/>
      </svg>
    </motion.div>
  );
}

export function RetroCassette({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0.6, 1, 0.6], y: [0, -10, 0] }}
      transition={{ 
        delay,
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="5" y="10" width="110" height="60" rx="4" fill="#1a1d3d" stroke="#ec4899" strokeWidth="2"/>
        <rect x="15" y="20" width="90" height="40" rx="2" fill="#0a0b1a"/>
        <circle cx="35" cy="40" r="12" fill="none" stroke="#666" strokeWidth="2"/>
        <circle cx="85" cy="40" r="12" fill="none" stroke="#666" strokeWidth="2"/>
        <rect x="47" y="35" width="26" height="10" fill="#ec4899"/>
        <line x1="35" y1="28" x2="85" y2="28" stroke="#ec4899" strokeWidth="1.5"/>
        <line x1="35" y1="52" x2="85" y2="52" stroke="#ec4899" strokeWidth="1.5"/>
      </svg>
    </motion.div>
  );
}

export function RetroSpeaker({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: [0.95, 1.05, 0.95] }}
      transition={{ 
        delay,
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      <svg viewBox="0 0 80 100" className="w-full h-full">
        <rect x="10" y="5" width="60" height="90" rx="6" fill="#1a1d3d" stroke="#666" strokeWidth="2"/>
        <circle cx="40" cy="30" r="12" fill="#0a0b1a" stroke="#ec4899" strokeWidth="2"/>
        <circle cx="40" cy="30" r="8" fill="none" stroke="#ec4899" strokeWidth="1"/>
        <circle cx="40" cy="70" r="18" fill="#0a0b1a" stroke="#a78bfa" strokeWidth="2"/>
        <circle cx="40" cy="70" r="14" fill="none" stroke="#a78bfa" strokeWidth="1"/>
        <circle cx="40" cy="70" r="10" fill="none" stroke="#a78bfa" strokeWidth="1"/>
      </svg>
    </motion.div>
  );
}

export function RetroComputer({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      <svg viewBox="0 0 120 100" className="w-full h-full">
        <rect x="15" y="10" width="90" height="60" rx="4" fill="#1a1d3d" stroke="#666" strokeWidth="2"/>
        <rect x="20" y="15" width="80" height="50" fill="#0a0b1a"/>
        <motion.rect 
          x="25" y="20" width="70" height="40" fill="#ec4899" opacity="0.3"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <rect x="45" y="70" width="30" height="5" fill="#666"/>
        <rect x="30" y="75" width="60" height="3" rx="1" fill="#444"/>
        <circle cx="60" cy="85" r="2" fill="#ec4899"/>
      </svg>
    </motion.div>
  );
}

export function RetroPlanet({ className = "", delay = 0, color = "#a78bfa" }: { className?: string; delay?: number; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.6, 1, 0.6], 
        scale: [0.95, 1, 0.95],
        rotate: 360 
      }}
      transition={{ 
        delay,
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      className={className}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id={`planetGradient${delay}`}>
            <stop offset="0%" stopColor={color} stopOpacity="0.8"/>
            <stop offset="100%" stopColor={color} stopOpacity="0.3"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="35" fill={`url(#planetGradient${delay})`}/>
        <ellipse cx="50" cy="50" rx="50" ry="8" fill="none" stroke={color} strokeWidth="2" opacity="0.6"/>
      </svg>
    </motion.div>
  );
}

export function RetroGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ec4899" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function IsometricRoom({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Floor */}
        <polygon points="100,140 40,100 100,60 160,100" fill="#1a1d3d" stroke="#666" strokeWidth="2"/>
        {/* Left Wall */}
        <polygon points="40,100 40,40 100,20 100,60" fill="#252850" stroke="#666" strokeWidth="2"/>
        {/* Right Wall */}
        <polygon points="100,20 160,40 160,100 100,60" fill="#2a2d5a" stroke="#666" strokeWidth="2"/>
        {/* Window on left wall */}
        <rect x="50" y="45" width="30" height="25" fill="#ec4899" opacity="0.6"/>
        {/* Furniture - desk */}
        <polygon points="80,100 90,95 140,95 130,100" fill="#ec4899"/>
        {/* Monitor */}
        <rect x="95" y="75" width="30" height="20" fill="#a78bfa"/>
      </svg>
    </motion.div>
  );
}
