import { motion } from "framer-motion";
import { Music2, Search, Sparkles } from "lucide-react";

export function MateSearch() {
  return (
    <section id="mate-search" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Mate Search</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            AI-powered music discovery for the new era
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl"
          >
            <div className="relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-400/30 shadow-2xl overflow-hidden">
              {/* Decorative music notes with floating animations - hidden on mobile for performance */}
              <motion.div 
                className="hidden md:block absolute top-6 left-6 opacity-20"
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
              >
                <Music2 className="w-12 h-12 text-purple-300" />
              </motion.div>
              <motion.div 
                className="hidden md:block absolute bottom-6 right-6 opacity-20"
                animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ willChange: 'transform' }}
              >
                <Music2 className="w-16 h-16 text-purple-300" />
              </motion.div>
              <motion.div 
                className="hidden md:block absolute top-20 right-20 opacity-10"
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ willChange: 'transform' }}
              >
                <Music2 className="w-10 h-10 text-purple-300" />
              </motion.div>

              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-center gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Search className="w-8 h-8 text-purple-300" />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-light text-white">
                    Discover Music with AI
                  </h3>
                  <motion.div
                    animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Sparkles className="w-8 h-8 text-purple-300" />
                  </motion.div>
                </motion.div>

                <p className="text-gray-200 text-lg mb-6 leading-relaxed text-center max-w-3xl mx-auto">
                  Mate Search is revolutionizing music discovery with AI technology, breaking free from monopolies like Spotify. Our intelligent search engine helps listeners, artists, and A&R professionals find extensive new and accurate songs, making music discovery more accessible and fair for everyone in the industry.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { 
                      title: "For Listeners", 
                      desc: "Find your next favorite track with AI precision" 
                    },
                    { 
                      title: "For Artists", 
                      desc: "Get discovered by the right audience" 
                    },
                    { 
                      title: "For A&R", 
                      desc: "Scout talent with intelligent recommendations" 
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20"
                    >
                      <h4 className="text-white font-medium mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href="https://search.matenation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-all shadow-2xl hover:shadow-purple-500/50"
                  >
                    Explore Mate Search
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
