import React from 'react';
import { Layout } from './components/layout/Layout';
import { 
  HeroSection, 
  SkillsSection, 
  ProjectsSection, 
  AboutSection 
} from './components/sections';

/**
 * Main component that assembles the Portfolio Landing Page.
 * Adheres strictly to Phase 3 requirements for feature assembly and logical flow.
 */
const App: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
    </Layout>
  );
};

export default App;
