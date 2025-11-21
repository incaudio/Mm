import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  gradient?: string;
}

export function ModernCard({ children, className = "", delay = 0, gradient }: ModernCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay, 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: 1.03, 
        y: -8,
        transition: { 
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      className={`bg-gray-500/20 backdrop-blur-xl rounded-3xl p-8 border border-gray-400/20 shadow-2xl hover:shadow-pink-500/20 hover:border-gray-300/30 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
