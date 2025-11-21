import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SectionIndicatorProps {
  sections: string[];
}

export function SectionIndicator({ sections }: SectionIndicatorProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sectionElements = document.querySelectorAll('#sliding-container > section');
    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Array.from(sectionElements).indexOf(entry.target as Element);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: document.getElementById('sliding-container'),
        threshold: [0.5],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const container = document.getElementById('sliding-container');
    const sectionElements = document.querySelectorAll('#sliding-container > section');
    if (container && sectionElements[index]) {
      const targetSection = sectionElements[index] as HTMLElement;
      container.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {sections.map((section, index) => (
        <motion.button
          key={index}
          onClick={() => scrollToSection(index)}
          className="group relative flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to ${section}`}
        >
          <motion.div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'bg-pink-500 scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            animate={{
              scale: activeSection === index ? 1.25 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/10 backdrop-blur-xl text-white text-xs px-3 py-1 rounded-full whitespace-nowrap pointer-events-none">
            {section}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
