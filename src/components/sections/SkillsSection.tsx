import React from 'react';
import { Section } from '../common/Section';
import { Typography } from '../common/Typography';
import { Card } from '../common/Card';
import { portfolioData } from '../../constants/portfolioData';

/**
 * Skills Section displaying technical expertise categories.
 */
export const SkillsSection = () => {
  return (
    <Section id="skills" className="bg-slate-50/50">
      <div className="text-center mb-16">
        <Typography variant="small">Expertise</Typography>
        <Typography variant="h2" className="mt-2">Technical Skills</Typography>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.skills.map((category) => (
          <Card key={category.title} className="p-8 h-full">
            <Typography variant="h3" className="mb-6 text-primary-900">
              {category.title}
            </Typography>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
