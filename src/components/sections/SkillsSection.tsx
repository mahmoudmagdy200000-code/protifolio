import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Typography } from '../layout/Typography';
import { portfolioData } from '../../constants/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <Section surfaceLevel="low" id="skills">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <Typography variant="label" className="text-tertiary">Technical Expertise</Typography>
            <Typography variant="display" className="text-3xl md:text-5xl">Capabilities</Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <div key={index} className="flex flex-col gap-6">
                <Typography variant="title" className="text-xl md:text-2xl text-primary">{category.title}</Typography>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="inline-flex items-center px-4 py-2 rounded-full bg-[#1A2D40] border border-[#00daf3]/20 text-sm uppercase tracking-widest text-[#E2E8F0] font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,218,243,0.3)] hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
