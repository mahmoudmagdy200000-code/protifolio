import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  const maxWidthClass = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1440px]'
  }[size];

  return (
    <div className={`mx-auto w-full px-6 md:px-12 ${maxWidthClass} ${className}`.trim()}>
      {children}
    </div>
  );
};
