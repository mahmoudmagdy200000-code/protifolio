import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Typography } from '../layout/Typography';
import { Card } from '../layout/Card';
import { portfolioData } from '../../constants/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <Section surfaceLevel="base" id="projects">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <Typography variant="label" className="text-tertiary">Featured Work</Typography>
            <Typography variant="display" className="text-3xl md:text-5xl">Architecture & Implementation</Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
               <Card key={project.id} glass={true} className="flex flex-col min-h-[320px] justify-between group">
                  <div className="flex flex-col gap-6">
                    <Typography variant="title" className="text-2xl pt-2 px-2 text-primary group-hover:text-primary-container transition-colors duration-premium">
                      {project.title}
                    </Typography>
                    
                    <Typography variant="body" className="px-2">
                       {project.description}
                    </Typography>
                  </div>
                  
                  <div className="px-2 pb-2">
                    {/* Tertiary button style: text only with subtle electric link effect */}
                    <button className="text-tertiary font-medium uppercase tracking-widest text-sm hover:text-primary transition-colors duration-premium shadow-none">
                       View Case Study &rarr;
                    </button>
                  </div>
               </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
