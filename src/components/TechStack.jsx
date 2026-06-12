import React from 'react';

export default function TechStack({ techStack }) {
  return (
    <section className="py-12 border-b border-theme-bgBorder bg-theme-bgLight/40 select-none">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-theme-textMuted uppercase tracking-[0.2em] mb-8">
          Technologies & frameworks I leverage
        </p>
        
        {/* Grayscale tech logo row with hover transition */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-bold font-display text-theme-textMuted/60 hover:text-theme-accent hover:scale-105 transition-all duration-300"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
