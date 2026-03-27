import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  hero: {
    name: "Mahmoud",
    headline: "Software Developer | Web Development | Clean Architecture Advocate",
    summary: "A dedicated developer focused on building robust, scalable applications. Passionate about writing clean, maintainable code, adhering to industry best practices, and standardizing workflows to deliver high-quality software solutions."
  },
  skills: [
    {
      title: "Frontend",
      skills: ["React", "TypeScript"]
    },
    {
      title: "Backend",
      skills: [".NET"]
    },
    {
      title: "Architecture & Methodology",
      skills: ["Clean Architecture", "Clean Code", "Standardized Design Patterns"]
    },
    {
      title: "Automation & Workflows",
      skills: ["n8n"]
    }
  ],
  projects: [
    {
      id: "nexa-pms",
      title: "Nexa PMS",
      description: "A comprehensive, scalable hotel management system."
    },
    {
      id: "ras-sedr",
      title: "Ras Sedr Rental",
      description: "A complete booking platform and website for renting chalets in Ras Sedr."
    }
  ],
  about: {
    interests: "When I'm not writing clean code, I'm exploring music and audio generation."
  }
};
