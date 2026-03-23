import React from 'react';

interface ContainerProps {
  /** The content to be rendered within the container. */
  readonly children: React.ReactNode;
  /** Optional additional CSS classes for custom styling. */
  readonly className?: string;
}

/**
 * A highly reusable container component that manages max-width and horizontal centering.
 * Adheres to the Single Responsibility Principle by focusing solely on layout containment.
 */
export const Container = ({ 
  children, 
  className = '' 
}: ContainerProps) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
