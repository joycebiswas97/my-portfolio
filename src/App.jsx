import React from 'react';
import portfolioData from './data/portfolioData.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const { personal, socials, hero, techStack, about, projects, skills } = portfolioData;

  return (
    <div className="min-h-screen bg-theme-bg text-theme-textLight">
      {/* Dynamic radial glow overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-radial-gradient from-theme-accent/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-radial-gradient from-theme-accent/3 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar personal={personal} socials={socials} />

        {/* Hero Section */}
        <Hero hero={hero} personal={personal} />

        {/* Tech Stack List / Partner Strip */}
        <TechStack techStack={techStack} />

        {/* About Me Section */}
        <About personal={personal} about={about} />

        {/* Project Showcase Section */}
        <Projects projects={projects} />

        {/* Skills Section */}
        <Skills skills={skills} />

        {/* Contact Form & Footer Section */}
        <Contact personal={personal} socials={socials} />
      </div>
    </div>
  );
}

export default App;
