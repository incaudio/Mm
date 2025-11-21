import { motion } from "framer-motion";
import { ModernCard } from "./modern-card";
import { Music, Headphones, Mic, Guitar, Drum, Piano } from "lucide-react";

const artistData = [
  { name: 'The Synth Wave', genre: 'Electronic', icon: Piano, color: 'text-purple-400' },
  { name: 'Bass Revolution', genre: 'Hip Hop', icon: Drum, color: 'text-cyan-400' },
  { name: 'Guitar Heroes', genre: 'Rock', icon: Guitar, color: 'text-pink-400' },
  { name: 'Vocal Dreams', genre: 'Pop', icon: Mic, color: 'text-yellow-400' },
  { name: 'Beat Masters', genre: 'EDM', icon: Headphones, color: 'text-green-400' },
  { name: 'Sound Architects', genre: 'Experimental', icon: Music, color: 'text-orange-400' },
  { name: 'Rhythm Collective', genre: 'Jazz', icon: Piano, color: 'text-blue-400' },
  { name: 'Digital Souls', genre: 'Future Bass', icon: Music, color: 'text-indigo-400' },
  { name: 'Vinyl Veterans', genre: 'Classic', icon: Headphones, color: 'text-red-400' },
];

export function ModernArtists() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Our Artists</h2>
          <p className="text-gray-300 text-lg">
            Discover the sound of the future
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {artistData.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 flex flex-col items-center justify-center cursor-pointer group hover:bg-white/15 transition-all"
            >
              <artist.icon className={`w-12 h-12 mb-3 ${artist.color}`} />
              <div className="text-lg font-medium text-white mb-1">
                {artist.name}
              </div>
              <div className="text-sm text-gray-400">
                {artist.genre}
              </div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxRvor4d6Z53P-3PQBWBzs5YHwicH9F0qzKenRSUBCAGgsVQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition-all"
          >
            Submit Your Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
