import { motion } from 'framer-motion';
import { Zap, Globe, Users } from 'lucide-react';

export function RetroAbout() {
  const features = [
    {
      icon: Zap,
      title: 'INNOVATION',
      desc: 'Revolutionizing the music industry with cutting-edge technology',
      color: 'text-yellow-400'
    },
    {
      icon: Globe,
      title: 'GLOBAL REACH',
      desc: 'Connecting artists with audiences worldwide',
      color: 'text-cyan-400'
    },
    {
      icon: Users,
      title: 'COMMUNITY',
      desc: 'Building a family of passionate music creators',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 musical-wave opacity-5" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <div className="retro-text text-5xl md:text-6xl text-primary mb-6">
            ABOUT MATE NATIONS
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border-2 border-primary rounded-3xl p-8"
          >
            <div className="retro-text text-2xl text-primary mb-4">
              {'>'} MISSION_STATEMENT.TXT
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-primary">Mate Nations</strong> is an innovative record label revolutionizing the music industry. We embrace and celebrate all music genres, welcoming artists from every musical background and style.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We transform talented artists into global superstars through innovative music production, strategic brand development, and worldwide distribution networks.
            </p>
            <p className="text-foreground leading-relaxed">
              Founded on the belief that exceptional music transcends boundaries, Mate Nations combines cutting-edge technology with traditional artistry to create unique sonic experiences. Our dedicated team of industry veterans and creative innovators work tirelessly to nurture raw talent, providing comprehensive support from studio production to international marketing. With state-of-the-art recording facilities, strategic partnerships with major streaming platforms, and a passionate commitment to artistic excellence, we're not just building careers—we're shaping the future of music. Whether you're an emerging artist with a fresh sound or an established performer looking to redefine your legacy, Mate Nations is your partner in musical evolution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card border-2 border-primary rounded-3xl p-8"
          >
            <div className="retro-text text-2xl text-primary mb-4">
              {'>'} SERVICES.EXE
            </div>
            <ul className="space-y-3">
              {[
                'Comprehensive artist development',
                'Professional recording services',
                'Global distribution networks',
                'Strategic marketing campaigns',
                'Direct access to streaming platforms',
                'Industry expertise & creative support'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-accent">▶</span>
                  <span className="text-foreground">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-6 bg-card border-2 border-border group-hover:border-primary rounded-full transition-all duration-300">
                  <feature.icon className={`w-12 h-12 ${feature.color}`} />
                </div>
              </div>
              <div className="retro-text text-xl text-primary mb-2">
                {feature.title}
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
