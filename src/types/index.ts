/**
 * Represents the personal profile information.
 */
export interface Profile {
  readonly name: string;
  readonly headline: string;
  readonly summary: string;
}

/**
 * Represents a single skill.
 */
export interface Skill {
  readonly name: string;
}

/**
 * Represents a category of skills.
 */
export interface SkillCategory {
  readonly title: string;
  readonly skills: readonly string[];
}

/**
 * Represents a featured project.
 */
export interface Project {
  readonly name: string;
  readonly description: string;
  readonly link?: string;
}

/**
 * Represents the about me section.
 */
export interface About {
  readonly interests: string;
}

/**
 * Root interface for the entire portfolio data store.
 */
export interface PortfolioData {
  readonly profile: Profile;
  readonly skills: readonly SkillCategory[];
  readonly projects: readonly Project[];
  readonly about: About;
}
