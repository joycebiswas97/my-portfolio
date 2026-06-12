import React from 'react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-24 border-b border-theme-bgBorder relative">
      <div className="bg-glow-gold top-1/3 left-1/4"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-12">
          <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest mb-3">Skills</span>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-theme-textLight leading-tight">
            Technical Expertise
          </h3>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="p-6 bg-theme-bgLight border border-theme-bgBorder hover:border-theme-accent/25 rounded-lg transition-all duration-300"
            >
              <h4 className="text-base font-bold font-display text-theme-accent uppercase tracking-wider mb-6">
                {category}
              </h4>
              
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-theme-bg border border-theme-bgBorder/80 text-theme-textLight hover:border-theme-accent/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
