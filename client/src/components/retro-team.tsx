import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import avikImage from "@assets/AVIK_1757912854902.jpeg";
import amritImage from "@assets/Amrit_1757912855008.jpeg";
import ceoImage from "@assets/ceo_1757912854870.jpeg";
import abhayImage from "@assets/Abhay_1757912854967.jpeg";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
}

const allTeam: TeamMember[] = [
  {
    name: "AVIK",
    role: "Founder & EDM Producer",
    description: "Visionary founder driving Mate Nations' mission",
    image: avikImage
  },
  {
    name: "Alex Mendez",
    role: "CEO",
    description: "Strategic leader orchestrating growth",
    image: ceoImage
  },
  {
    name: "Amrit",
    role: "Investor & Sponsorship",
    description: "Financial strategist and partnership architect",
    image: amritImage
  },
  { name: "Alvin", role: "Director", description: "Operations oversight" },
  { name: "Abhay", role: "A&R Specialist", description: "Pop & electronic music", image: abhayImage },
  { name: "Stefflen", role: "Head of Digital Art", description: "Visual identity leader" },
  { name: "Soumyadeep", role: "Head of Video", description: "Video production maestro" },
  { name: "Peter", role: "Release Coordinator", description: "Distribution management" },
  { name: "Pranjit", role: "Strategist", description: "Market strategy expert" },
  { name: "Utsav", role: "Manager", description: "Operations coordinator" },
];

export function RetroTeam() {
  const gradients = [
    'from-purple-500 via-pink-500 to-red-500',
    'from-blue-500 via-purple-500 to-pink-500', 
    'from-cyan-500 via-blue-500 to-purple-500',
    'from-pink-500 via-red-500 to-orange-500',
    'from-green-500 via-teal-500 to-cyan-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-teal-500 via-green-500 to-emerald-500',
    'from-rose-500 via-pink-500 to-fuchsia-500',
    'from-violet-500 via-purple-500 to-indigo-500'
  ];

  const getRotation = (index: number) => {
    const rotations = [-8, 4, -3, 6, -5, 3, -7, 5, -4, 8];
    return rotations[index % rotations.length];
  };

  return (
    <section className="py-20 px-6 relative overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <div className="retro-text text-5xl md:text-6xl text-primary mb-4">
            THE CREW
          </div>
          <p className="text-lg text-muted-foreground">
            Meet the sound makers
          </p>
        </div>

        <div className="relative min-h-[600px] md:min-h-[700px] mb-20 flex items-center justify-center">
          {allTeam.map((member, index) => {
            const rotation = getRotation(index);
            const gradient = gradients[index % gradients.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 1.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 0,
                  y: -20,
                  zIndex: 50,
                  transition: { 
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                className="absolute"
                style={{
                  transform: `rotate(${rotation}deg) translateY(${index * 2}px)`,
                  zIndex: allTeam.length - index
                }}
              >
                <div className={`w-[280px] md:w-[320px] h-[400px] md:h-[450px] rounded-2xl p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    {member.image ? (
                      <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                        <User className="w-12 h-12 text-white" />
                      </div>
                    )}
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {member.name}
                    </div>
                    <div className="text-base md:text-lg text-white/90 font-medium mb-3 drop-shadow">
                      {member.role}
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed drop-shadow px-4">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
