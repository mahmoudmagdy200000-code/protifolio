import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Typography } from '../layout/Typography';
import { portfolioData } from '../../constants/portfolioData';

export const HeroSection: React.FC = () => {
  const { hero } = portfolioData;

  return (
    <Section surfaceLevel="base" id="home" className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Decorative gradient for 'Vibe-coded' look */}
      <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-tertiary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <Typography variant="label" className="text-tertiary">
              Creative North Star
            </Typography>
            
            <Typography variant="display" className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container inline-block">
              {hero.name}
            </Typography>

            <Typography variant="title" className="max-w-3xl text-balance">
              {hero.headline}
            </Typography>

            <Typography variant="body" className="max-w-2xl text-balance mt-4">
              {hero.summary}
            </Typography>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-surface-container-lowest font-medium shadow-[0_0_20px_rgba(0,218,243,0.3)] hover:shadow-[0_0_30px_rgba(0,218,243,0.5)] transition-shadow duration-premium">
                View Projects
              </button>
              <button className="px-8 py-4 rounded-xl bg-surface-container-high/40 ghost-border text-on-surface hover:bg-surface-container-high transition-colors duration-premium">
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block">
            {/* Minimalist architectural graphic / placeholder */}
            <div className="relative w-full aspect-[3/4] glass-effect rounded-2xl p-6 flex flex-col justify-end">
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-tertiary shadow-[0_0_10px_rgba(0,218,243,0.8)]" />
              <Typography variant="label">System Status</Typography>
              <Typography variant="title" className="mt-2 text-primary">All Systems Nominal</Typography>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
