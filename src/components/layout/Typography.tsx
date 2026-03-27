import React from 'react';

type TypographyVariant = 'display' | 'title' | 'body' | 'label';
type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface TypographyProps {
  variant: TypographyVariant;
  component?: TypographyComponent;
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  component,
  children,
  className = '',
}) => {
  const getComponent = (): TypographyComponent => {
    if (component) return component;
    switch (variant) {
      case 'display': return 'h1';
      case 'title': return 'h2';
      case 'body': return 'p';
      case 'label': return 'span';
      default: return 'p';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'display':
        // High impact headlines. wide-tracking or tight tracking? The Spec says: 
        // "Display Scale... tight tracking (e.g., letter-spacing: -0.04em) to make the type feel architectural"
        return 'text-5xl md:text-7xl font-semibold tracking-tightest leading-tight';
      case 'title':
        return 'text-2xl md:text-3xl font-medium tracking-tighter text-on-surface';
      case 'body':
        return 'text-lg text-on-surface-variant leading-relaxed';
      case 'label':
        // "Use label-md in all-caps with increased letter-spacing for 'meta' information"
        return 'text-xs md:text-sm uppercase tracking-widest text-on-surface-variant font-medium';
      default:
        return '';
    }
  };

  const Component = getComponent();

  return (
    <Component className={`${getVariantClasses()} ${className}`.trim()}>
      {children}
    </Component>
  );
};
