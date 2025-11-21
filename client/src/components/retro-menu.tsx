import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music, Users, Mail, Info } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

export function RetroMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const menuItems = [
    { label: 'Home', href: '#', icon: Music, desc: 'where the beat drops' },
    { label: 'About', href: '#about', icon: Info, desc: 'learn who we are' },
    { label: 'Team', href: '#team', icon: Users, desc: 'meet the sound makers' },
    { label: 'Contact', href: '#contact', icon: Mail, desc: 'drop us a line' },
  ];

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card border-2 border-primary hover:bg-accent transition-all duration-300 bubble-glow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card border-l-4 border-primary p-8 overflow-y-auto rounded-l-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="retro-text text-primary text-4xl mb-8 mt-16">
                MENU
              </div>

              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block group"
                  >
                    <div className="p-4 bg-secondary border-2 border-border hover:border-primary transition-all duration-300 rounded-3xl bubble-glow">
                      <div className="flex items-center gap-4">
                        <item.icon className="w-6 h-6 text-primary" />
                        <div className="flex-1">
                          <div className="retro-text text-xl text-foreground group-hover:text-primary transition-colors">
                            {item.label}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            &gt; {item.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 p-4 border-2 border-primary rounded-lg">
                <div className="retro-text text-sm text-primary mb-2">
                  SOUND SYSTEM
                </div>
                <div className="text-xs text-muted-foreground">
                  © 2024 Mate Nations, Inc.
                  <br />
                  All beats reserved
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
