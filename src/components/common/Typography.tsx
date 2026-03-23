import React from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'small' | 'lead';

interface TypographyProps {
  /** The typography style variant. */
  readonly variant?: TypographyVariant;
  /** The content to be rendered. */
  readonly children: React.ReactNode;
  /** Optional additional CSS classes. */
  readonly className?: string;
  /** The semantic HTML element to use. If not provided, it defaults based on the variant. */
  readonly as?: React.ElementType;
}

/**
 * A centralized Typography component to ensure consistent text styling across the application.
 * Decouples visual style from semantic HTML structure.
 */
export const Typography = ({ 
  variant, 
  children, 
  className, 
  as 
}: TypographyProps) => {
  const finalVariant = variant ?? 'body';
  const finalClassName = className ?? '';

  const variantStyles: Record<TypographyVariant, string> = {
    h1: 'text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900',
    h2: 'text-3xl sm:text-4xl font-bold tracking-tight text-slate-900',
    h3: 'text-xl sm:text-2xl font-semibold text-slate-900',
    lead: 'text-lg sm:text-xl text-slate-600',
    body: 'text-base text-slate-600 leading-relaxed',
    small: 'text-sm font-medium text-primary-600 uppercase tracking-wider',
  };

  const defaultElement: Record<TypographyVariant, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    lead: 'p',
    body: 'p',
    small: 'span',
  };

  const Component = as || (defaultElement as any)[finalVariant];

  // Using explicit indexing to satisfy TS when module types are missing
  const styles = (variantStyles as any)[finalVariant];

  return (
    <Component className={`${styles} ${finalClassName}`}>
      {children}
    </Component>
  );
};
