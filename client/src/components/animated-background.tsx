import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export function AnimatedBackground({ 
  children, 
  intensity = "medium",
  className = "" 
}: AnimatedBackgroundProps) {
  const intensityConfig = {
    low: { opacity: 0.3, blur: 100, duration: 20 },
    medium: { opacity: 0.4, blur: 120, duration: 18 },
    high: { opacity: 0.5, blur: 140, duration: 16 }
  };

  const config = intensityConfig[intensity];

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        {/* Pink wave blob */}
        <motion.div
          className="absolute w-[150%] h-[150%] -left-[25%] -top-[25%]"
          style={{
            filter: `blur(${config.blur}px)`,
            background: `
              radial-gradient(circle 800px at 25% 35%, rgba(236, 72, 153, ${config.opacity}) 0%, transparent 65%)
            `
          }}
          animate={{
            x: ["0%", "8%", "-5%", "10%", "-3%", "0%"],
            y: ["0%", "-8%", "6%", "-7%", "5%", "0%"],
            rotate: [0, 15, -10, 20, -15, 0]
          }}
          transition={{
            duration: config.duration,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />

        {/* Light blue wave blob */}
        <motion.div
          className="absolute w-[150%] h-[150%] -left-[25%] -top-[25%]"
          style={{
            filter: `blur(${config.blur}px)`,
            background: `
              radial-gradient(circle 700px at 75% 40%, rgba(147, 197, 253, ${config.opacity}) 0%, transparent 65%)
            `
          }}
          animate={{
            x: ["0%", "-7%", "6%", "-8%", "4%", "0%"],
            y: ["0%", "7%", "-6%", "8%", "-5%", "0%"],
            rotate: [0, -12, 18, -15, 10, 0]
          }}
          transition={{
            duration: config.duration + 2,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />

        {/* Secondary pink blob for depth */}
        <motion.div
          className="absolute w-[150%] h-[150%] -left-[25%] -top-[25%]"
          style={{
            filter: `blur(${config.blur * 0.9}px)`,
            background: `
              radial-gradient(circle 650px at 50% 70%, rgba(244, 114, 182, ${config.opacity * 0.7}) 0%, transparent 65%)
            `
          }}
          animate={{
            x: ["0%", "6%", "-7%", "5%", "-6%", "0%"],
            y: ["0%", "-5%", "8%", "-6%", "7%", "0%"],
            rotate: [0, 20, -15, 25, -10, 0],
            scale: [1, 1.08, 0.92, 1.05, 0.96, 1]
          }}
          transition={{
            duration: config.duration + 4,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />

        {/* Secondary light blue blob for depth */}
        <motion.div
          className="absolute w-[150%] h-[150%] -left-[25%] -top-[25%]"
          style={{
            filter: `blur(${config.blur * 0.85}px)`,
            background: `
              radial-gradient(circle 600px at 80% 75%, rgba(125, 211, 252, ${config.opacity * 0.6}) 0%, transparent 65%)
            `
          }}
          animate={{
            x: ["0%", "-8%", "9%", "-7%", "8%", "0%"],
            y: ["0%", "9%", "-7%", "10%", "-8%", "0%"],
            rotate: [0, -18, 22, -20, 15, 0],
            scale: [1, 0.94, 1.06, 0.97, 1.04, 1]
          }}
          transition={{
            duration: config.duration + 6,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />

        {/* Accent pink highlight */}
        <motion.div
          className="absolute w-[150%] h-[150%] -left-[25%] -top-[25%]"
          style={{
            filter: `blur(${config.blur * 1.1}px)`,
            background: `
              radial-gradient(circle 500px at 40% 50%, rgba(249, 168, 212, ${config.opacity * 0.5}) 0%, transparent 65%)
            `
          }}
          animate={{
            x: ["0%", "10%", "-9%", "8%", "-10%", "0%"],
            y: ["0%", "-10%", "9%", "-8%", "10%", "0%"],
            scale: [1, 1.12, 0.88, 1.08, 0.92, 1]
          }}
          transition={{
            duration: config.duration + 8,
            ease: [0.42, 0, 0.58, 1],
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
