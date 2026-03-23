import React from 'react';
import { Container } from './Container';

interface SectionProps {
  /** Unique identifier for the section, useful for navigation. */
  readonly id?: string;
  /** The content to be rendered within the section's container. */
  readonly children: React.ReactNode;
  /** Optional additional CSS classes. */
  readonly className?: string;
  /** Whether to use a dark background theme for the section. */
  readonly dark?: boolean;
  /** Optional key for list rendering. */
  readonly key?: string | number;
}

/**
 * A semantic <section> wrapper that provides consistent vertical padding and layout containment via the Container component.
 */
export const Section = ({ 
  id, 
  children, 
  className = '', 
  dark = false 
}: SectionProps) => {
  const baseStyles = 'py-20 sm:py-32 outline-none';
  const themeStyles = dark ? 'bg-slate-900 text-white' : 'bg-transparent';

  return (
    <section 
      id={id} 
      className={`${baseStyles} ${themeStyles} ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};
