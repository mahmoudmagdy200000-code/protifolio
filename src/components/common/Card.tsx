import React from 'react';

interface CardProps {
  /** The content to be rendered inside the card. */
  readonly children: React.ReactNode;
  /** Optional additional CSS classes for layout or custom styling. */
  readonly className?: string;
  /** Optional key for list rendering. */
  readonly key?: string | number;
}

/**
 * A flexible, presentational Card component.
 * Designed to be highly reusable for various types of content (e.g., Projects, Skills).
 */
export const Card = ({ 
  children, 
  className = '' 
}: CardProps) => {
  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
