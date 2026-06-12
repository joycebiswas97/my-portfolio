import React from 'react';
import { Github, Linkedin, Twitter, Youtube, MessageSquare } from 'lucide-react';

export default function Navbar({ personal, socials }) {
  const getSocialIcon = (key) => {
    switch (key) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      // case 'youtube':
      //   return <Youtube className="w-5 h-5" />;
      // case 'whatsapp':
      //   return <MessageSquare className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-theme-bgBorder bg-theme-bg/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Brand/Name Section */}
        <div>
          <h1 className="text-xl font-bold font-display text-theme-textLight tracking-tight m-0 select-none">
            {personal.name}
          </h1>
          <p className="text-xs text-theme-textMuted font-medium mt-0.5 select-none">
            {personal.role}
          </p>
        </div>

        {/* Navigation and Socials Group */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="text-theme-textMuted hover:text-theme-accent transition-colors">About</a>
            <a href="#projects" className="text-theme-textMuted hover:text-theme-accent transition-colors">Projects</a>
            <a href="#skills" className="text-theme-textMuted hover:text-theme-accent transition-colors">Skills</a>
            <a href="#contact" className="text-theme-textMuted hover:text-theme-accent transition-colors">Contact</a>
          </nav>

          {/* Vertical divider on desktop */}
          <div className="hidden md:block w-[1px] h-5 bg-theme-bgBorder"></div>

          {/* Social Icons matching top-right of image */}
          <div className="flex items-center gap-4">
            {Object.entries(socials).map(([key, url]) => {
              if (key === 'email') return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-textMuted hover:text-theme-accent hover:scale-110 transition-all duration-200"
                  aria-label={key}
                >
                  {getSocialIcon(key)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
