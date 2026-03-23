import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  /** The content of the landing page sections. */
  readonly children: React.ReactNode;
}

/**
 * Main Layout component that wraps the application structure.
 * Ensures semantic HTML organization with <header>, <main>, and <footer>.
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-primary-100 selection:text-primary-900">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
