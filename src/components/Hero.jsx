import React from 'react';
import { Play } from 'lucide-react';
import TimeWidget from './TimeWidget';

export default function Hero({ hero, personal }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-theme-bgBorder py-12 md:py-24">
      {/* Background radial glows */}
      <div className="bg-glow-gold top-1/4 left-1/4"></div>
      <div className="bg-glow-white top-1/3 right-1/4"></div>

      {/* Profile Background Image (Radial blended as requested by theme) */}
      <div 
        className="absolute inset-y-0 right-0 w-full md:w-[65%] opacity-25 md:opacity-45 pointer-events-none bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/bg.png')",
          maskImage: "radial-gradient(circle at 60% 40%, black 15%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 60% 40%, black 15%, transparent 75%)"
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 flex flex-col justify-between min-h-[60vh] gap-12">
        {/* Main Hero Content */}
        <div className="max-w-2xl mt-8">
          <h2 className="text-4xl md:text-7xl font-bold font-display text-theme-textLight leading-[1.08] tracking-tight mb-6">
            {hero.mainSlogan}
          </h2>
          <p className="text-lg md:text-xl text-theme-textMuted font-light leading-relaxed mb-10 max-w-xl">
            {hero.subSlogan}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-theme-accent hover:bg-theme-accentHover text-theme-bg font-semibold text-sm rounded shadow-lg transition-all duration-300 hover:shadow-theme-accent/20 hover:-translate-y-0.5 select-none"
            >
              Book a meeting
            </a>

            <a
              href="#projects"
              className="group flex items-center gap-3 text-sm font-semibold text-theme-textLight hover:text-theme-accent transition-colors py-2 select-none"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-theme-accent text-theme-bg group-hover:bg-theme-accentHover transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </span>
              <span>Watch my work</span>
            </a>
          </div>
        </div>

        {/* Dynamic Location & Time Widget (Bottom Right) */}
        <div className="flex justify-end mt-auto">
          <TimeWidget
            location={personal.location}
            timezone={personal.timezone}
            status={personal.status}
          />
        </div>
      </div>
    </section>
  );
}
