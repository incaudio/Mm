import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { SiBluesky, SiFacebook, SiX } from "react-icons/si";

export function ModernMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "For Artists", href: "#for-artists" },
    { label: "Team", href: "#team" },
    { label: "Mate Search", href: "#mate-search" },
    { label: "Our Works", href: "#our-works" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/matenations" },
    { icon: SiX, label: "X", href: "https://x.com/matenations" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@mateexclusives" },
    { icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61580036896615" },
    { icon: SiBluesky, label: "Bluesky", href: "https://bsky.app/profile/matenations.bsky.social" }
  ];

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2 shadow-lg shadow-black/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        <span>Menu</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute left-0 top-0 h-full w-80 bg-[#1a1d3d]/95 backdrop-blur-2xl border-r border-white/10 p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-20 flex flex-col h-[calc(100%-5rem)]">
                <nav className="space-y-4 flex-1">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-2xl text-white hover:text-pink-400 transition-colors py-2"
                    >
                      • {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Submit Demo Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfxRvor4d6Z53P-3PQBWBzs5YHwicH9F0qzKenRSUBCAGgsVQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-center py-4 rounded-full font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all transform hover:scale-105"
                  >
                    Submit Demo
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="border-t border-white/10 pt-6 mt-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-white/70 text-sm mb-4">Follow us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/10 backdrop-blur-xl p-3 rounded-full border border-white/20 hover:bg-pink-500/20 hover:border-pink-400/40 transition-all group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-white group-hover:text-pink-400 transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
