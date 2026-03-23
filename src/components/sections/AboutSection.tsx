import React from 'react';
import { Section } from '../common/Section';
import { Typography } from '../common/Typography';
import { portfolioData } from '../../constants/portfolioData';

/**
 * About Section for a personal touch.
 */
export const AboutSection = () => {
  return (
    <Section id="about" dark>
      <div className="max-w-3xl">
        <Typography variant="small" className="text-primary-400 mb-6">About Me</Typography>
        <Typography variant="h2" className="text-white mb-8">Personal Touch</Typography>
        <Typography variant="lead" className="text-slate-300 leading-loose italic text-2xl">
          "{portfolioData.about.interests}"
        </Typography>
        <div className="mt-12 h-1 w-24 bg-primary-500 rounded-full" />
      </div>
    </Section>
  );
};
