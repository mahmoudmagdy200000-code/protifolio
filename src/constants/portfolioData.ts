import { PortfolioData } from '../types';

/**
 * Centralized data store for the portfolio application.
 * Strictly adheres to the PortfolioData interface.
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: 'Mahmoud',
    headline: 'Software Developer | Web Development | Clean Architecture Advocate',
    summary: 'A dedicated developer focused on building robust, scalable applications. Passionate about writing clean, maintainable code, adhering to industry best practices, and standardizing workflows to deliver high-quality software solutions.',
  },
  skills: [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript'],
    },
    {
      title: 'Backend',
      skills: ['.NET'],
    },
    {
      title: 'Architecture & Methodology',
      skills: ['Clean Architecture', 'Clean Code', 'Standardized Design Patterns'],
    },
    {
      title: 'Automation & Workflows',
      skills: ['n8n'],
    },
  ],
  projects: [
    {
      name: 'Nexa PMS',
      description: 'A comprehensive, scalable hotel management system.',
      link: 'https://hotel-dun-ten.vercel.app/l',
    },
    {
      name: 'Ras Sedr Rental',
      description: 'A complete booking platform and website for renting chalets in Ras Sedr.',
      link: 'https://front-peach-nine.vercel.app/',
    },
  ],
  about: {
    interests: 'When I\'m not writing clean code, I\'m exploring music and audio generation.',
  },
};
