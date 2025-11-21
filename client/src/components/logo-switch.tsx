import { useState } from "react";
import { motion } from "framer-motion";

export function LogoSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <motion.div
      className="logo-switch cursor-pointer"
      onClick={() => setIsToggled(!isToggled)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.h1
        className="text-2xl font-bold"
        animate={{ scale: isToggled ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {isToggled ? "♫" : "mate."}
      </motion.h1>
    </motion.div>
  );
}
