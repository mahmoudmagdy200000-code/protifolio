import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Typography } from '../layout/Typography';
import { portfolioData } from '../../constants/portfolioData';
import { useMousePosition } from '../../hooks/useMousePosition';

const CleanArchitectureModel = React.lazy(() => import('../3d/CleanArchitectureModel'));

import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const HeroSection: React.FC = () => {
  const { hero } = portfolioData;
  const mousePosition = useMousePosition();

  // Calculate slight background movement
  const gridX = (mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 40;
  const gridY = (mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 40;

  return (
    <Section surfaceLevel="base" id="home" className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Dynamic Animated Geometric Grid Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(173,199,255,0.15) 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}
        animate={{
          backgroundPosition: `${gridX}px ${gridY}px`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <Container className="relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[60vh]">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <Typography variant="label" className="text-tertiary">
                Creative North Star
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Typography variant="display" className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container inline-block">
                I'm {hero.name}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="title" className="max-w-3xl text-balance">
                {hero.headline}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography variant="body" className="max-w-2xl text-balance mt-2">
                {hero.summary}
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mt-6">
              {/* Solid Cyan Primary CTA with Dark Navy Text */}
              <a href="#projects" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }} className="inline-block px-8 py-4 rounded-xl bg-[#00daf3] text-[#0A192F] font-bold transition-all duration-300 hover:bg-[#00e5ff] hover:-translate-y-1 shadow-[0_8px_20px_rgba(0,218,243,0.25)] hover:shadow-[0_12px_25px_rgba(0,218,243,0.4)] active:scale-95 text-center">
                View Projects
              </a>

              {/* Outlined Secondary Button - Phone Link */}
              <a href="tel:01096619414" className="inline-block px-8 py-4 rounded-xl border-2 border-[#1A2D40] bg-transparent text-on-surface hover:bg-[#1A2D40]/50 transition-all duration-300 hover:-translate-y-1 active:scale-95 text-center">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          {/* React Three Fiber Canvas Wrapper */}
          <motion.div 
            className="lg:col-span-5 h-[500px] w-full relative"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            {/* Ambient shadow gradient under the 3D model */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
            
            <Suspense fallback={
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                 <div className="w-8 h-8 rounded-full border-2 border-t-tertiary border-r-transparent animate-spin" />
                 <Typography variant="label" className="text-tertiary/70 animate-pulse">Initializing 3D Matrix...</Typography>
              </div>
            }>
               <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                  <ambientLight intensity={0.6} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} color="#00daf3" />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} color="#adc7ff" />
                  <CleanArchitectureModel />
               </Canvas>
            </Suspense>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};
