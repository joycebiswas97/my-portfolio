import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function About({ personal, about }) {
  return (
    <section id="about" className="py-24 border-b border-theme-bgBorder relative">
      <div className="bg-glow-gold -bottom-24 left-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Bio */}
        <div className="md:col-span-5 flex flex-col justify-start">
          <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest mb-3">Biography</span>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-theme-textLight leading-tight mb-6">
            Designing systems, coding solutions.
          </h3>
          <p className="text-theme-textMuted leading-relaxed text-sm md:text-base mb-6">
            {personal.bio}
          </p>
          <div className="h-[2px] w-16 bg-theme-accent mt-4"></div>
        </div>

        {/* Right Column: Experience and Education timeline */}
        <div className="md:col-span-7 flex flex-col gap-10">
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 rounded bg-theme-bgLight border border-theme-bgBorder text-theme-accent">
                <Briefcase className="w-5 h-5" />
              </span>
              <h4 className="text-xl font-bold font-display text-theme-textLight">Experience</h4>
            </div>

            <div className="space-y-6 pl-4 border-l border-theme-bgBorder">
              {about.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-theme-accent group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-medium text-theme-accent">{exp.period}</span>
                  <h5 className="text-base font-semibold text-theme-textLight mt-1">{exp.role}</h5>
                  <p className="text-xs text-theme-textMuted font-medium">{exp.company}</p>
                  <p className="text-sm text-theme-textMuted mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 rounded bg-theme-bgLight border border-theme-bgBorder text-theme-accent">
                <GraduationCap className="w-5 h-5" />
              </span>
              <h4 className="text-xl font-bold font-display text-theme-textLight">Education</h4>
            </div>

            <div className="space-y-6 pl-4 border-l border-theme-bgBorder">
              {about.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-theme-accent group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-medium text-theme-accent">{edu.period}</span>
                  <h5 className="text-base font-semibold text-theme-textLight mt-1">{edu.degree}</h5>
                  <p className="text-xs text-theme-textMuted font-medium">{edu.institution}</p>
                  <p className="text-sm text-theme-textMuted mt-2 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
