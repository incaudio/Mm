import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function MobileNextButton() {
  const [currentSection, setCurrentSection] = useState(0);
  const [totalSections, setTotalSections] = useState(7);

  useEffect(() => {
    const sections = document.querySelectorAll('#sliding-container > section');
    if (!sections.length) return;

    setTotalSections(sections.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Array.from(sections).indexOf(entry.target as Element);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }
        });
      },
      {
        root: document.getElementById('sliding-container'),
        threshold: [0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const container = document.getElementById('sliding-container');
    const sections = document.querySelectorAll('#sliding-container > section');
    const nextSection = sections[currentSection + 1] as HTMLElement;
    
    if (container && nextSection) {
      container.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (currentSection === 0 || currentSection >= totalSections - 1) {
    return null;
  }

  return (
    <motion.button
      onClick={scrollToNext}
      className="md:hidden fixed bottom-8 right-6 z-50 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full border border-white/30 shadow-2xl flex items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm font-medium">Next</span>
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
}
