import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 border-b border-theme-bgBorder bg-theme-bgLight/20 relative">
      <div className="bg-glow-white top-1/4 right-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-12">
          <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest mb-3">Portfolio</span>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-theme-textLight leading-tight">
            Selected Projects
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 bg-theme-bgLight border border-theme-bgBorder hover:border-theme-accent/30 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-theme-accent/5 hover:-translate-y-1"
            >
              <div>
                <h4 className="text-xl font-bold font-display text-theme-textLight group-hover:text-theme-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-theme-textMuted mt-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-medium rounded border border-theme-bgBorder bg-theme-bg/60 text-theme-textMuted group-hover:border-theme-accent/10 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-4 border-t border-theme-bgBorder/50 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-textMuted hover:text-theme-accent hover:scale-105 transition-all text-xs flex items-center gap-1.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-textMuted hover:text-theme-accent hover:scale-105 transition-all text-xs flex items-center gap-1.5 ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
