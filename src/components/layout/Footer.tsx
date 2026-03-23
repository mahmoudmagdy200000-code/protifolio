import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { portfolioData } from '../../constants/portfolioData';

/**
 * Footer component for branding and copyright information.
 */
export const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white">
      <Container className="text-center">
        <Typography variant="body" className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {portfolioData.profile.name}. Built with React, TypeScript & Clean Architecture.
        </Typography>
      </Container>
    </footer>
  );
};
