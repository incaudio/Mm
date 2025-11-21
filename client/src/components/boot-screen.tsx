import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootScreenProps {
  onComplete: () => void;
}

export function BootScreen({ onComplete }: BootScreenProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showClouds, setShowClouds] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowClouds(true), 500);
  }, []);

  const bootLines = [
    'MATE NATIONS MUSIC BIOS (C) 2024 Mate Nations, Inc.',
    'BIOS Date: 11/10/2024 06:30:00 Ver: 01.00.24',
    'Processor: Audio Core @ 440Hz',
    'System Speed: 128BPM',
    'Music Memory: 16-bit Stereo, 48kHz Sample Rate',
    '',
    'Memory Test: 808 Kicks OK | 909 Snares OK | Synths OK',
    'Audio ROM Version: 2.4.0',
    'VST/AU Plugin Support: Enabled',
    '',
    'Loading Audio Peripherals...',
    '64KB Audio Buffer OK',
    '',
    'Input Devices: 1 MIDI Controller, 1 Audio Interface, 2 Turntables',
    '',
    'Detecting Music Catalog...',
    'Device #01: Vinyl Collection *CLASSICS*',
    'Device #02: Digital Archive *FUTURE SOUNDS*',
    'Device #03: Live Recording Studio *SESSIONS*',
    '',
    '03 music sources detected and operational.',
    '',
    '(C) Mate Nations, Inc.',
    '64-0424-00001-110-101010-MATE-NATIONS-MUS1C',
    '',
    'Booting from Music Drive...',
    '',
    'Initializing... "night theme"...',
    'Initializing... "day theme"...',
    '',
    'READY.',
    '',
    'C:\\> MATE_NATIONS.MUS',
  ];

  useEffect(() => {
    if (currentLineIndex < bootLines.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, bootLines[currentLineIndex] === '' ? 100 : 150);

      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(completeTimer);
    }
  }, [currentLineIndex, bootLines, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-gradient-to-br from-violet-950 via-blue-950 to-indigo-950 flex items-center justify-center p-8 overflow-hidden"
      >
        {/* Floating Clouds/Bubbles */}
        {showClouds && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1, y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-[10%] w-32 h-20 bg-blue-400 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1, y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-32 right-[15%] w-40 h-24 bg-violet-400 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.35, scale: 1, y: [0, -25, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-24 left-[20%] w-48 h-28 bg-blue-300 rounded-full blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1, y: [0, -18, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-32 right-[25%] w-36 h-22 bg-indigo-400 rounded-full blur-xl"
            />
          </>
        )}

        <div className="w-full max-w-4xl font-mono text-sm md:text-base relative z-10">
          <div className="space-y-1">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className={`${
                  line.includes('(C)') || line.includes('BIOS') || line.includes('C:\\>')
                    ? 'text-cyan-300'
                    : line.includes('OK') || line.includes('READY')
                    ? 'text-green-300'
                    : line.includes('Device') || line.includes('Loading')
                    ? 'text-violet-300'
                    : 'text-blue-200'
                }`}
              >
                {line || '\u00A0'}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyan-300 ml-1"
            />
          </div>
        </div>

        {/* Loading Bar */}
        {currentLineIndex >= bootLines.length - 3 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-md"
          >
            <div className="text-center text-violet-300 mb-4 font-mono text-sm">
              LOADING MUSIC OS...
            </div>
            <div className="h-2 bg-violet-950 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
