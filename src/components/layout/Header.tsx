import React, { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';

/**
 * Header component providing accessible navigation.
 * Uses a glassmorphism effect for a modern aesthetic.
 */
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <Container className="flex items-center justify-between">
        <Typography variant="h3" className="text-primary-600 font-black tracking-tighter">
          PORTFOLIO.
        </Typography>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="mailto:contact@example.com" 
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
};
