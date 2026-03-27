import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-surface text-on-surface font-sans selection:bg-primary-container selection:text-white">
      {/* Abstract Navigation Header (Minimalist) */}
      <header className="fixed top-0 w-full z-50 glass-effect border-b border-outline-variant/15 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-on-surface">M.</div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-on-surface-variant font-medium">
             <a href="#home" className="hover:text-primary transition-colors duration-premium">Home</a>
             <a href="#skills" className="hover:text-primary transition-colors duration-premium">Expertise</a>
             <a href="#projects" className="hover:text-primary transition-colors duration-premium">Architecture</a>
             <a href="#about" className="hover:text-primary transition-colors duration-premium">Insight</a>
          </nav>
        </div>
      </header>
      
      {/* Sections Assembly */}
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />

      {/* Footer */}
      <footer className="py-8 bg-surface-container-lowest text-center border-t border-outline-variant/15">
         <p className="text-sm text-on-surface-variant">&copy; {new Date().getFullYear()} Mahmoud - Clean Architecture Advocate.</p>
      </footer>
    </main>
  );
};

export default App;
