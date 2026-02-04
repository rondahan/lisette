
import React from 'react';
import type { Language } from '../types';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const isHebrew = language === 'he';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=75&w=1400" 
          alt={isHebrew ? 'ליזט קמפיין אופנה' : 'Lisette Editorial'} 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-[12px] uppercase tracking-[0.5em] mb-6 fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          {isHebrew ? 'אביב / קיץ 2026' : 'Spring / Summer 2026'}
        </p>
        <h1 className="text-white text-5xl md:text-8xl font-extralight serif tracking-tight mb-8 fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          {isHebrew ? (
            <>
              האדריכלות <br /> של האלגנטיות
            </>
          ) : (
            <>
              The Architecture <br /> of Elegance
            </>
          )}
        </h1>
        <a 
          href="#collections" 
          className="px-10 py-4 border border-white text-white text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 fade-in opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          {isHebrew ? 'לצפייה בקולקציה' : 'View Collection'}
        </a>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-white/30" />
        <span className="text-white/50 text-[10px] uppercase tracking-widest vertical-rl">
          {isHebrew ? 'גללו' : 'Scroll'}
        </span>
      </div>
    </section>
  );
};

export default Hero;
