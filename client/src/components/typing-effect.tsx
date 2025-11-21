import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import mateImage from '@assets/Change Things to _Mate._ Complete Mate(.) means the full text Mate with fullstop in the same as there in the image that ballon effect but with a little pink effect_1763714910992.jpg';

const LETTERS = [
  { id: 'M', x: 0, y: 0, width: 0.24 },
  { id: 'a', x: 0.22, y: 0, width: 0.20 },
  { id: 't', x: 0.40, y: 0, width: 0.18 },
  { id: 'e', x: 0.56, y: 0, width: 0.20 },
  { id: '.', x: 0.74, y: 0, width: 0.26 },
];

function LetterCanvas({ 
  letter, 
  index,
  sourceImage 
}: { 
  letter: typeof LETTERS[0]; 
  index: number;
  sourceImage: HTMLImageElement;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !sourceImage.complete) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const sx = letter.x * sourceImage.width;
    const sy = letter.y * sourceImage.height;
    const sw = letter.width * sourceImage.width;
    const sh = sourceImage.height;

    canvas.width = sw;
    canvas.height = sh;

    ctx.drawImage(sourceImage, sx, sy, sw, sh, 0, 0, sw, sh);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      const brightness = (r + g + b) / 3;
      if (brightness > 240) {
        data[i + 3] = 0;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [sourceImage, letter]);

  const phase = index % 2 === 0 ? 1 : -1;
  
  return (
    <motion.canvas
      ref={canvasRef}
      className="w-auto h-40 md:h-64 lg:h-80"
      initial={{ y: 0 }}
      animate={{ 
        y: phase === 1 
          ? [0, -20, 0, 20, 0]
          : [0, 20, 0, -20, 0]
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
      style={{
        filter: 'drop-shadow(0 10px 30px rgba(255, 182, 193, 0.3))',
        marginLeft: index > 0 ? '-1.5rem' : '0',
        marginRight: index < LETTERS.length - 1 ? '-1.5rem' : '0'
      }}
      data-testid={`img-mate-logo-${letter.id}`}
    />
  );
}

export function TypingEffect() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = mateImage;
    img.onload = () => {
      imgRef.current = img;
      setImageLoaded(true);
    };
  }, []);

  if (!imageLoaded || !imgRef.current) {
    return <div className="h-40 md:h-64 lg:h-80" />;
  }

  return (
    <div className="relative inline-flex items-center" data-testid="img-mate-logo">
      {LETTERS.map((letter, index) => (
        <LetterCanvas
          key={letter.id}
          letter={letter}
          index={index}
          sourceImage={imgRef.current!}
        />
      ))}
    </div>
  );
}
