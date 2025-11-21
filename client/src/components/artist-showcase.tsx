import { motion } from 'framer-motion';
import { Music, Headphones, Mic, Guitar, Drum, Piano } from 'lucide-react';

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

export function ArtistShowcase() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 musical-wave opacity-5" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <div className="retro-text text-5xl md:text-6xl text-primary mb-4">
            OUR ARTISTS
          </div>
          <p className="text-lg text-muted-foreground">
            Discover the sound of the future
          </p>
        </div>

        <div className="hexagon-grid mb-12">
          {artistData.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group"
            >
              <div className="relative aspect-square bg-card border-2 border-border hover:border-primary transition-all duration-300 rounded-3xl p-6 flex flex-col items-center justify-center cursor-pointer">
                <artist.icon className={`w-16 h-16 mb-4 ${artist.color} note-float`} />
                <div className="retro-text text-xl text-foreground mb-2">
                  {artist.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {artist.genre}
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxRvor4d6Z53P-3PQBWBzs5YHwicH9F0qzKenRSUBCAGgsVQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-full retro-text text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            [ SUBMIT YOUR DEMO ]
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
