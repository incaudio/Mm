import { ReactNode } from 'react';

interface SlidingSectionsProps {
  children: ReactNode[];
}

export function SlidingSections({ children }: SlidingSectionsProps) {
  return (
    <div id="sliding-container" className="h-screen overflow-y-scroll md:snap-none snap-y snap-proximity scroll-smooth" style={{ WebkitOverflowScrolling: 'touch' }}>
      {children.map((child, index) => (
        <section 
          key={index} 
          className="min-h-screen md:snap-none snap-start flex flex-col"
          style={{ willChange: 'transform' }}
        >
          {child}
        </section>
      ))}
    </div>
  );
}
