import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  surfaceLevel?: 'base' | 'low' | 'lowest';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  surfaceLevel = 'base',
  id,
}) => {
  const surfaceClasses = {
    base: 'bg-surface', // Level 0: The infinite void
    low: 'bg-surface-container-low', // Level 1: Large content blocks
    lowest: 'bg-surface-container-lowest', 
  }[surfaceLevel];

  // Deep spatial padding rule from spec: "Do use extreme vertical whitespace (spacing-24) between major portfolio sections"
  return (
    <section 
      id={id}
      className={`py-24 md:py-32 w-full transition-colors duration-500 ${surfaceClasses} ${className}`.trim()}
    >
      {children}
    </section>
  );
};
