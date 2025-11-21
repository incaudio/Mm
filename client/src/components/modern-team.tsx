import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from "framer-motion";
import { ModernCard } from "./modern-card";
import { User } from "lucide-react";
import avikImage from "@assets/AVIK_1757912854902.jpeg";
import amritImage from "@assets/Amrit_1757912855008.jpeg";
import ceoImage from "@assets/ceo_1757912854870.jpeg";
import abhayImage from "@assets/Abhay_1757912854967.jpeg";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  gradient: string;
}

// Permanent gradient assignments for each team member
const gradients = [
  'linear-gradient(180deg, #a855f7 0%, #ec4899 50%, #3b82f6 100%)', // Purple to Pink to Blue
  'linear-gradient(180deg, #ec4899 0%, #f97316 50%, #ef4444 100%)', // Pink to Orange to Red  
  'linear-gradient(180deg, #06b6d4 0%, #8b5cf6 50%, #d946ef 100%)', // Cyan to Purple to Fuchsia
  'linear-gradient(180deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)', // Green to Cyan to Blue
  'linear-gradient(180deg, #f59e0b 0%, #ec4899 50%, #8b5cf6 100%)', // Amber to Pink to Purple
  'linear-gradient(180deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)', // Indigo to Purple to Pink
  'linear-gradient(180deg, #14b8a6 0%, #06b6d4 50%, #3b82f6 100%)', // Teal to Cyan to Blue
  'linear-gradient(180deg, #f43f5e 0%, #ec4899 50%, #a855f7 100%)', // Rose to Pink to Purple
  'linear-gradient(180deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)', // Purple to Indigo to Blue
  'linear-gradient(180deg, #ec4899 0%, #d946ef 50%, #a855f7 100%)', // Pink to Fuchsia to Purple
];

const leadership: TeamMember[] = [
  {
    name: "AVIK",
    role: "Founder & CEO",
    description: "Visionary founder driving Mate Nation's mission",
    image: avikImage,
    gradient: gradients[0]
  },
  {
    name: "Amrit",
    role: "Co-founder",
    description: "Financial strategist and partnership architect",
    image: amritImage,
    gradient: gradients[2]
  }
];

const team: TeamMember[] = [
  { name: "Alvin", role: "Director", description: "Operations oversight", gradient: gradients[3] },
  { name: "Alex Mendez", role: "HOD of DAI group", description: "Strategic leader orchestrating growth", image: ceoImage, gradient: gradients[1] },
  { name: "Abhay", role: "A&R Specialist", description: "Pop & electronic music", image: abhayImage, gradient: gradients[4] },
  { name: "Stefflen", role: "Head of Digital Art", description: "Visual identity leader", gradient: gradients[5] },
  { name: "Banaj", role: "Head of Video", description: "Video production maestro", gradient: gradients[6] },
  { name: "Peter", role: "Release Coordinator", description: "Distribution management", gradient: gradients[7] },
  { name: "Utsav", role: "Manager", description: "Operations coordinator", gradient: gradients[9] },
];

const allCrew = [...leadership, ...team];

const SwipeableCard = ({ member, index, totalCards, onSwipe }: {
  member: TeamMember;
  index: number;
  totalCards: number;
  onSwipe: (direction: number) => void;
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-20, 20]);
  const opacity = useTransform(x, [-300, 0, 300], [0.5, 1, 0.5]);
  const controls = useAnimation();

  useEffect(() => {
    if (index === 0) {
      x.set(0);
    }
  }, [index, x]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 80;
    const velocityThreshold = 500;
    
    if (
      Math.abs(info.offset.x) > threshold ||
      Math.abs(info.velocity.x) > velocityThreshold
    ) {
      const direction = info.offset.x > 0 ? 1 : -1;
      
      // Immediately trigger the card swap so next card starts moving forward
      onSwipe(direction);
      
      // Animate the swiped card out with smooth easing
      controls.start({
        x: direction * 600,
        opacity: 0,
        rotate: direction * 30,
        transition: { 
          duration: 0.4,
          ease: [0.32, 0.72, 0, 1]
        }
      });
    } else {
      controls.start({ 
        x: 0,
        rotate: 0,
        transition: { 
          type: 'spring', 
          stiffness: 400, 
          damping: 35,
          mass: 0.8
        }
      });
    }
  };

  return (
    <motion.div
      layoutId={member.name}
      drag={index === 0 ? "x" : false}
      dragElastic={0.5}
      dragConstraints={{ left: -500, right: 500 }}
      style={{ 
        x: index === 0 ? x : index * 15, 
        rotate: index === 0 ? rotate : index * 3, 
        opacity: index === 0 ? opacity : 1,
        zIndex: totalCards - index,
        background: member.gradient
      }}
      whileDrag={{ cursor: 'grabbing', scale: 1.08 }}
      onDragEnd={index === 0 ? handleDragEnd : undefined}
      animate={index === 0 ? {
        scale: 1,
        y: 0,
        rotate: 0,
        x: 0,
        opacity: 1
      } : {
        scale: 1 - index * 0.03,
        y: index * 12,
        rotate: index * 3,
        x: index * 15,
        opacity: 1
      }}
      initial={false}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 35,
        mass: 0.8
      }}
      className={`absolute w-[300px] md:w-[340px] h-[460px] md:h-[500px] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-visible ${index === 0 ? 'cursor-grab active:cursor-grabbing' : ''}`}
    >
      <div className="h-full flex flex-col items-center justify-center p-8 text-center">
        {member.image ? (
          <div className="w-28 h-28 mb-5 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-28 h-28 mb-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
            <User className="w-14 h-14 text-white" />
          </div>
        )}
        <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-xl">
          {member.name}
        </div>
        <div className="text-lg md:text-xl text-white/95 font-medium mb-4 drop-shadow-lg">
          {member.role}
        </div>
        <p className="text-base text-white/85 leading-relaxed drop-shadow-md px-4">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

export function ModernTeam() {
  const [cards, setCards] = useState(allCrew);

  const handleSwipe = (direction: number) => {
    setCards(prev => {
      // Both left and right swipe move forward in the same direction
      const newCards = [...prev];
      const swiped = newCards.shift();
      if (swiped) {
        return [...newCards, swiped];
      }
      return prev;
    });
  };

  return (
    <section className="py-20 px-6 relative z-10" id="team">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">The Crew</h2>
          <p className="text-gray-300 text-lg mb-4">
            Meet the sound makers
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-bold">← Swipe to see all members →</span>
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[550px] mb-20 flex items-center justify-center">
          {cards.slice(0, 3).map((member, index) => (
            <SwipeableCard
              key={member.name}
              member={member}
              index={index}
              totalCards={3}
              onSwipe={handleSwipe}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
