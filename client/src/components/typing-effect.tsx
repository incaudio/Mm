import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function TypingEffect() {
  const text = 'MATE';
  const [displayText, setDisplayText] = useState('');
  const [showFullstop, setShowFullstop] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [blinkCount, setBlinkCount] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 150);
    } else if (isTyping && displayText.length === text.length && !showFullstop) {
      timeout = setTimeout(() => {
        setShowFullstop(true);
      }, 150);
    } else if (isTyping && showFullstop) {
      setIsTyping(false);
      setBlinkCount(0);
    } else if (!isTyping && blinkCount < 7) {
      timeout = setTimeout(() => {
        setShowCursor(!showCursor);
        if (!showCursor) {
          setBlinkCount(blinkCount + 1);
        }
      }, 500);
    } else if (!isTyping && blinkCount >= 7) {
      timeout = setTimeout(() => {
        if (showFullstop) {
          setShowFullstop(false);
        } else if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsTyping(true);
          setShowCursor(true);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, showCursor, blinkCount, text, showFullstop]);

  return (
    <div className="relative inline-block">
      <svg className="absolute w-0 h-0">
        <filter id="dusty">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="2" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0 0 0 0 0 1" />
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" result="clippedNoise" />
          <feBlend mode="screen" in="clippedNoise" in2="SourceGraphic" />
        </filter>
      </svg>
      <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black" style={{ 
        fontFamily: "'Poppins', 'Inter', 'Montserrat', sans-serif", 
        letterSpacing: '0.1em', 
        fontWeight: '900',
        lineHeight: '1',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(236,182,220,0.6) 30%, rgba(200,160,255,0.65) 60%, rgba(180,200,255,0.7) 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 20px rgba(255,200,255,0.4), 0 0 40px rgba(200,180,255,0.3)',
        filter: 'url(#dusty) drop-shadow(0 8px 16px rgba(255,220,255,0.2))',
        WebkitTextStroke: '1px rgba(255,230,255,0.25)'
      }}>
        {displayText}
        {showFullstop && (
          <span className="inline-block w-6 h-6 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-sm" style={{ 
            verticalAlign: '0px',
            marginLeft: '0.1em',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(236,182,220,0.6) 30%, rgba(200,160,255,0.65) 60%, rgba(180,200,255,0.7) 100%)',
            boxShadow: '0 0 20px rgba(255,200,255,0.4), 0 8px 16px rgba(255,220,255,0.2)',
            border: '1px solid rgba(255,230,255,0.25)'
          }}></span>
        )}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: showCursor ? 1 : 0 }}
          className="inline-block w-1 h-14 md:h-20 lg:h-32 bg-white ml-2"
          style={{ 
            verticalAlign: '0px',
            boxShadow: '0 0 10px rgba(255,255,255,0.8)'
          }}
        >
        </motion.span>
      </h1>
    </div>
  );
}
