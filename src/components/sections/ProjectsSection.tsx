import React from 'react';
import { Section } from '../common/Section';
import { Typography } from '../common/Typography';
import { Card } from '../common/Card';
import { portfolioData } from '../../constants/portfolioData';

/**
 * Projects Section showcasing featured works.
 */
export const ProjectsSection = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <Typography variant="small">Case Studies</Typography>
          <Typography variant="h2" className="mt-2">Featured Projects</Typography>
        </div>
        <Typography variant="body" className="max-w-md">
          A selection of projects where I've applied clean architecture principles and modern technologies to solve complex problems.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioData.projects.map((project) => (
          <Card key={project.name} className="flex flex-col group">
            <div className="h-64 bg-slate-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Typography variant="h3" className="text-slate-300 pointer-events-none uppercase tracking-widest text-3xl font-black">
                {project.name.split(' ')[0]}
              </Typography>
            </div>
            <div className="p-8">
              <Typography variant="h3" className="mb-3">{project.name}</Typography>
              <Typography variant="body" className="mb-6">
                {project.description}
              </Typography>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700 transition-colors">
                  Visit Project
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <button className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700 transition-colors">
                  View Project Details
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
