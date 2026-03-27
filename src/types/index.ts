export interface HeroData {
  name: string;
  headline: string;
  summary: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
}

export interface AboutData {
  interests: string;
}

export interface PortfolioData {
  hero: HeroData;
  skills: SkillCategory[];
  projects: ProjectData[];
  about: AboutData;
}
