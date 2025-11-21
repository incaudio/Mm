import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Disc, Mic2, Guitar, Headphones, Radio, Trophy } from 'lucide-react';

const instruments = [
  { id: 'vinyl', name: 'Vinyl Record', icon: Disc, found: false },
  { id: 'mic', name: 'Microphone', icon: Mic2, found: false },
  { id: 'guitar', name: 'Guitar', icon: Guitar, found: false },
  { id: 'headphones', name: 'Headphones', icon: Headphones, found: false },
  { id: 'radio', name: 'Radio', icon: Radio, found: false },
  { id: 'note', name: 'Music Note', icon: Music, found: false },
];

export function MusicHunt() {
  const [foundItems, setFoundItems] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('music-hunt-found');
    if (saved) {
      setFoundItems(JSON.parse(saved));
    }
  }, []);

  const handleFind = (id: string) => {
    if (!foundItems.includes(id)) {
      const newFound = [...foundItems, id];
      setFoundItems(newFound);
      localStorage.setItem('music-hunt-found', JSON.stringify(newFound));
      
      if (newFound.length === instruments.length) {
        setTimeout(() => setShowModal(true), 500);
      }
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-card border-2 border-primary bubble-glow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent" />
          <div className="retro-text text-sm text-primary">
            {foundItems.length}/{instruments.length}
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card border-4 border-primary rounded-3xl p-8 max-w-md w-full bubble-glow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="retro-text text-3xl text-primary mb-4 text-center">
                MUSIC HUNT
              </div>
              <div className="text-center text-muted-foreground mb-6">
                {foundItems.length === instruments.length
                  ? '🎉 You found all the instruments!'
                  : `Find all ${instruments.length} hidden instruments scattered throughout the site!`}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {instruments.map((item) => {
                  const isFound = foundItems.includes(item.id);
                  return (
                    <motion.div
                      key={item.id}
                      className={`aspect-square rounded-2xl border-2 ${
                        isFound ? 'border-green-400 bg-green-400/20' : 'border-border bg-secondary'
                      } flex flex-col items-center justify-center p-3 transition-all`}
                      whileHover={isFound ? {} : { scale: 1.05 }}
                    >
                      {isFound ? (
                        <item.icon className="w-8 h-8 text-green-400 mb-2" />
                      ) : (
                        <div className="w-8 h-8 mb-2 text-muted-foreground">?</div>
                      )}
                      <div className="text-xs text-center retro-text">
                        {isFound ? item.name : '???'}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {foundItems.length === instruments.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-center"
                >
                  <button className="px-6 py-3 bg-accent text-accent-foreground rounded-full retro-text hover:bg-primary hover:text-primary-foreground transition-all bubble-glow">
                    [ CLAIM REWARD ]
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden">
        {instruments.map((item, index) => (
          <motion.div
            key={item.id}
            className={`fixed cursor-pointer z-40 ${
              foundItems.includes(item.id) ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 12)}%`,
            }}
            onClick={() => handleFind(item.id)}
            whileHover={{ scale: 1.2, rotate: 10 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            <item.icon className="w-6 h-6 text-accent note-float" />
          </motion.div>
        ))}
      </div>
    </>
  );
}
