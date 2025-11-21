import { motion } from "framer-motion";
import { ModernCard } from "./modern-card";
import ambassadorDjImage from "@assets/ambassador_dj_1757912854805.jpeg";
import ambassadorArtistImage from "@assets/ambassador_artist_1757912842410.jpeg";

export function ModernAmbassadors() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Our Brand Ambassadors</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <ModernCard delay={0} gradient="bg-gradient-to-br from-blue-500/40 to-blue-700/30">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600 ring-4 ring-blue-400/30">
                <img 
                  src={ambassadorDjImage} 
                  alt="Masibulele Pika"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Masibulele Pika</h3>
              <p className="text-lg text-blue-200 mb-4">Professional DJ & Music Curator</p>
              <p className="text-sm leading-relaxed text-gray-100">
                Masibulele Pika brings cutting-edge DJ skills and deep music knowledge to Mate Nation. As a professional DJ, he represents our commitment to discovering and promoting exceptional talent in the electronic and dance music scenes.
              </p>
            </div>
          </ModernCard>

          <ModernCard delay={0.1} gradient="bg-gradient-to-br from-orange-500/40 to-red-600/30">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 ring-4 ring-orange-400/30">
                <img 
                  src={ambassadorArtistImage} 
                  alt="Demetrius Lucas"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Demetrius Lucas</h3>
              <p className="text-lg text-orange-200 mb-4">Award-winning Music Producer</p>
              <p className="text-sm leading-relaxed text-gray-100">
                Demetrius Lucas is an innovative music producer who embodies Mate Nation's vision of revolutionary sound. His expertise in modern production techniques and artist development makes him an invaluable ambassador for our record label.
              </p>
            </div>
          </ModernCard>
        </div>
      </div>
    </section>
  );
}
