import React from 'react';
import { Section } from '../common/Section';
import { Typography } from '../common/Typography';
import { portfolioData } from '../../constants/portfolioData';

/**
 * Hero Section displaying the name, headline, and summary.
 */
export const HeroSection = () => {
  const { profile } = portfolioData;

  return (
    <Section id="hero" className="flex flex-col items-start justify-center min-h-[80vh]">
      <Typography variant="small" className="mb-4">
        Welcome to my portfolio
      </Typography>
      <Typography variant="h1" className="mb-6 max-w-4xl">
        I'm {profile.name}, a <span className="text-primary-600">{profile.headline}</span>
      </Typography>
      <Typography variant="lead" className="mb-10 max-w-2xl">
        {profile.summary}
      </Typography>
      <div className="flex flex-wrap gap-4">
        <a 
          href="#projects" 
          className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
        >
          View My Work
        </a>
        <a 
          href="#about" 
          className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
        >
          About Me
        </a>
      </div>
    </Section>
  );
};
