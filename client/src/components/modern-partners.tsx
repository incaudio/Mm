import { motion } from "framer-motion";
import { ModernCard } from "./modern-card";

export function ModernPartners() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Our Partner Community</h2>
        </motion.div>

        <ModernCard>
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Unison Music App</h3>
            <p className="text-xl text-gray-300 mb-8">Make music together. Let your unfinished tracks grow.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-semibold text-white mb-4">Ungatekeep Collaboration</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Collaborate live with musicians worldwide',
                  'Seamless stitching and stem creation',
                  'Inspire and connect with creative community',
                  'Automate stems with a single click'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="rounded-2xl overflow-hidden w-full max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1 shadow-2xl hover:shadow-pink-500/50 transition-shadow duration-300">
                <div className="bg-gray-900/95 rounded-xl p-6 flex flex-col items-center justify-center">
                  {/* Illustration: Artists Collaborating & Listeners Enjoying */}
                  <svg className="w-48 h-32 mb-4" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Artist 1 with headphones */}
                    <motion.g
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <circle cx="40" cy="40" r="18" fill="#EC4899"/>
                      <rect x="28" y="32" width="4" height="12" rx="2" fill="#F472B6"/>
                      <rect x="48" y="32" width="4" height="12" rx="2" fill="#F472B6"/>
                      <path d="M28 35 Q20 35 20 40 Q20 45 28 45" stroke="#F472B6" strokeWidth="3" fill="none"/>
                      <path d="M52 35 Q60 35 60 40 Q60 45 52 45" stroke="#F472B6" strokeWidth="3" fill="none"/>
                    </motion.g>
                    
                    {/* Artist 2 with headphones */}
                    <motion.g
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <circle cx="100" cy="40" r="18" fill="#A855F7"/>
                      <rect x="88" y="32" width="4" height="12" rx="2" fill="#C084FC"/>
                      <rect x="108" y="32" width="4" height="12" rx="2" fill="#C084FC"/>
                      <path d="M88 35 Q80 35 80 40 Q80 45 88 45" stroke="#C084FC" strokeWidth="3" fill="none"/>
                      <path d="M112 35 Q120 35 120 40 Q120 45 112 45" stroke="#C084FC" strokeWidth="3" fill="none"/>
                    </motion.g>
                    
                    {/* Artist 3 with headphones */}
                    <motion.g
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <circle cx="160" cy="40" r="18" fill="#3B82F6"/>
                      <rect x="148" y="32" width="4" height="12" rx="2" fill="#60A5FA"/>
                      <rect x="168" y="32" width="4" height="12" rx="2" fill="#60A5FA"/>
                      <path d="M148 35 Q140 35 140 40 Q140 45 148 45" stroke="#60A5FA" strokeWidth="3" fill="none"/>
                      <path d="M172 35 Q180 35 180 40 Q180 45 172 45" stroke="#60A5FA" strokeWidth="3" fill="none"/>
                    </motion.g>
                    
                    {/* Connecting lines showing collaboration */}
                    <motion.path
                      d="M60 45 L80 45"
                      stroke="#F472B6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                    <motion.path
                      d="M120 45 L140 45"
                      stroke="#C084FC"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 0.6 }}
                    />
                    
                    {/* Music notes floating */}
                    <motion.g
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <circle cx="70" cy="70" r="4" fill="#EC4899"/>
                      <rect x="73" y="56" width="2" height="14" fill="#EC4899"/>
                    </motion.g>
                    <motion.g
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <circle cx="130" cy="75" r="4" fill="#A855F7"/>
                      <rect x="133" y="61" width="2" height="14" fill="#A855F7"/>
                    </motion.g>
                    
                    {/* Listener with headphones */}
                    <motion.g
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <circle cx="100" cy="100" r="20" fill="#10B981"/>
                      <rect x="86" y="92" width="5" height="14" rx="2" fill="#34D399"/>
                      <rect x="109" y="92" width="5" height="14" rx="2" fill="#34D399"/>
                      <path d="M86 95 Q76 95 76 100 Q76 105 86 105" stroke="#34D399" strokeWidth="3" fill="none"/>
                      <path d="M114 95 Q124 95 124 100 Q124 105 114 105" stroke="#34D399" strokeWidth="3" fill="none"/>
                    </motion.g>
                  </svg>
                  
                  <h5 className="text-3xl font-bold text-white mb-3">Unison Music</h5>
                  <p className="text-lg text-gray-300 mb-4">Collaborate & Create</p>
                  <div className="flex gap-3 mt-2">
                    <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a 
              href="https://unisonmusicapp.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Unison Music App
            </motion.a>
          </motion.div>
        </ModernCard>
      </div>
    </section>
  );
}
