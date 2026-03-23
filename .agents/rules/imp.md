---
trigger: always_on
---

# Role Context
You are an Expert Software Developer and Frontend Architect. Your task is to build a highly professional, modern, and fully responsive Portfolio Landing Page. You must strictly adhere to Clean Code principles, SOLID principles, and Clean Architecture patterns.

# Project Overview
Create a single-page portfolio application that highlights technical expertise, software architecture skills, and featured projects. The UI should be minimalist, professional, and optimized for performance.

# Tech Stack & Guidelines
- **Framework/Library:** React (Functional Components)
- **Language:** TypeScript (Strict mode enabled, explicit typing for all props and state)
- **Styling:** Tailwind CSS (or standard CSS Modules) for clean, maintainable styling.
- **Architecture:** - Separate business logic from UI components (Custom Hooks).
  - Use a modular folder structure (e.g., `/components`, `/hooks`, `/types`, `/assets`, `/constants`).
  - Ensure all components are highly reusable and adhere to the Single Responsibility Principle (SRP).
  - Avoid hardcoding data in UI components; inject content dynamically via a constants/data file.

# Content Specifications (Data Source)
Create a centralized data file (e.g., `portfolioData.ts`) using the following content:

## 1. Hero Section
- **Name:** Mahmoud (or Saif)
- **Headline:** Software Developer | Web Development | Clean Architecture Advocate
- **Summary:** A dedicated developer focused on building robust, scalable applications. Passionate about writing clean, maintainable code, adhering to industry best practices, and standardizing workflows to deliver high-quality software solutions.

## 2. Technical Skills Section
- **Frontend:** React, TypeScript
- **Backend:** .NET
- **Architecture & Methodology:** Clean Architecture, Clean Code, Standardized Design Patterns
- **Automation & Workflows:** n8n

## 3. Featured Projects Section
- **Nexa PMS:** A comprehensive, scalable hotel management system.
- **Ras Sedr Rental:** A complete booking platform and website for renting chalets in Ras Sedr.

## 4. About Me / Personal Touch
- **Interests:** When I'm not writing clean code, I'm exploring music and audio generation.

# Execution Phases (Follow these steps sequentially)

## Phase 1: Project Setup & Architecture
1. Initialize the project structure and define TypeScript interfaces (`types/index.ts`) for Projects, Skills, and Profile Data.
2. Create the centralized data store (`constants/portfolioData.ts`) containing the Content Specifications above.

## Phase 2: Core Components Development
1. Build reusable layout components (`Section`, `Container`, `Card`, `Typography`).
2. Build specific UI sections: `HeroSection`, `SkillsSection`, `ProjectsSection`, `AboutSection`.
3. Ensure absolute strictness regarding Clean Code: meaningful variable names, small functions, and clear separation of concerns.

## Phase 3: Assembly & Refinement
1. Assemble all sections in `App.tsx` or the main page.
2. Ensure the design is fully responsive (Mobile, Tablet, Desktop).
3. Review the code to ensure zero linting errors, proper TypeScript coverage, and no unnecessary AI buzzwords.

# Output Request
Begin by outputting the file structure you plan to create, followed by the code for `types/index.ts` and `constants/portfolioData.ts`. Wait for my approval before proceeding to the UI components.