import { motion } from "framer-motion";

interface CloudDecorationProps {
  className?: string;
  delay?: number;
}

export function CloudDecoration({ className = "", delay = 0 }: CloudDecorationProps) {
  return (
    <motion.img
      src="/attached_assets/6705b32dbbf4d28a3fe1d971_Property 1=Night, Property 2=Cloud 2_1760197252112.png"
      alt=""
      className={`pointer-events-none ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay, duration: 0.8 },
        y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    />
  );
}

export function CloudDecoration2({ className = "", delay = 0 }: CloudDecorationProps) {
  return (
    <motion.img
      src="/attached_assets/6705b4a36def1cf003c24d10_Property 1=Day, Property 2=Cloud 3_1760197252143.png"
      alt=""
      className={`pointer-events-none ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -15, 0] }}
      transition={{
        opacity: { delay, duration: 0.8 },
        y: { delay: delay + 0.5, duration: 5, repeat: Infinity, ease: "easeInOut" }
      }}
    />
  );
}
