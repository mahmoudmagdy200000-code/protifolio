import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  glass = true
}) => {
  // Spec: "Glass Cards Construction: background: rgba(42, 53, 72, 0.4), backdrop-filter: blur(12px), roundedness-lg"
  // If not glass, it should sit on surface-container-highest (Level 2)
  const baseClasses = glass 
    ? 'glass-effect glass-glow-hover' 
    : 'bg-surface-container-highest ghost-border shadow-ambient hover:-translate-y-1 transition-transform duration-premium';

  return (
    <div className={`rounded-2xl p-6 md:p-8 ${baseClasses} ${className}`.trim()}>
      {children}
    </div>
  );
};
