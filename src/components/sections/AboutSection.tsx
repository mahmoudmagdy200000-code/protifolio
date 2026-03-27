import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Typography } from '../layout/Typography';
import { portfolioData } from '../../constants/portfolioData';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  return (
    <Section surfaceLevel="low" id="about">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col gap-10 text-center items-center">
            <Typography variant="label" className="text-tertiary">Personal Insight</Typography>
            
            <Typography variant="title" className="text-3xl md:text-4xl text-balance">
              "Architecture is not just about building software; it's about defining the space where code, logic, and user experience converge."
            </Typography>

            <Typography variant="body" className="max-w-2xl text-balance text-xl">
               {about.interests}
            </Typography>
        </div>
      </Container>
    </Section>
  );
};
