import { motion } from "framer-motion";

export function ModernGenres() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">For Artists</h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl"
          >
            <div className="bg-gray-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-400/20 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6 text-center">
                Join Our Musical Family
              </h3>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed text-center">
                Are you an artist ready to share your sound with the world? We're here to amplify your voice.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "All Genres Welcome", desc: "From Hip Hop to Jazz, Electronic to Rock, we celebrate every sound" },
                  { title: "Fast Response", desc: "We listen to all demos within one week" },
                  { title: "Global Platform", desc: "Get your music heard worldwide" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
                    <p className="text-gray-200">
                      <span className="font-medium text-white">{item.title}</span> - {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfxRvor4d6Z53P-3PQBWBzs5YHwicH9F0qzKenRSUBCAGgsVQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition-all shadow-2xl hover:shadow-pink-500/50"
                >
                  Submit Your Demo
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
