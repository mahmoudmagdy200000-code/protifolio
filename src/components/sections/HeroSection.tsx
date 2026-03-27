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
              {/* Glassmorphism CTA with Pulsating Glow */}
              <button className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary/90 to-primary-container/90 text-surface-container-lowest font-bold overflow-hidden group shadow-[0_0_20px_rgba(0,218,243,0.3)] transition-all duration-premium hover:shadow-[0_0_40px_rgba(0,218,243,0.5)] active:scale-95">
                <span className="relative z-10">View Projects</span>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/30 blur-md rounded-xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
              </button>

              <button className="px-8 py-4 rounded-xl bg-surface-container-high/40 ghost-border text-on-surface hover:bg-surface-container-high transition-colors duration-premium active:scale-95">
                Contact Me
              </button>
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
