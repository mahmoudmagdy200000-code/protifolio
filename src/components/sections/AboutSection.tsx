import React, { useEffect, useRef } from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Typography } from '../layout/Typography';
import { portfolioData } from '../../constants/portfolioData';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';
// Requires user to save their image here:
import profileImg from '../../assets/profile.jpg';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollVelocity = useScrollVelocity();
  const animationRef = useRef<number>();

  // Canvas waveform animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    
    // Resize handler
    const resizeCanvas = () => {
      // Get logical width of container, apply devicePixelRatio for sharpness
      const parent = canvas.parentElement;
      if (parent) {
        // We set the canvas styling width/height separately from dimensions
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = 120 * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, width, height);
      
      const centerY = height / 2;
      const points = 100;
      const gap = width / points;

      // Base amplitude scales slightly with scroll velocity for reactivity
      const velocityImpact = Math.min(Math.abs(scrollVelocity) * 0.1, 80);
      const amplitude = 20 + velocityImpact; 

      ctx.beginPath();
      ctx.moveTo(0, centerY);

      for (let i = 0; i <= points; i++) {
        const x = i * gap;
        // Complex wave using multiple sine/cosine functions for a natural audio feel
        const wave1 = Math.sin((i * 0.1) + time) * amplitude;
        const wave2 = Math.cos((i * 0.2) + time * 1.5) * (amplitude * 0.5);
        const wave3 = Math.sin((i * 0.05) - time * 0.5) * (amplitude * 0.25);
        
        // Dampen edges so it fades into the center line smoothly
        const edgeDamping = Math.sin((i / points) * Math.PI);
        const y = centerY + ((wave1 + wave2 + wave3) * edgeDamping);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = '#00daf3'; // Tertiary electric blue
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Add subtle glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(0, 218, 243, 0.8)';
      
      ctx.stroke();

      time += 0.05;
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [scrollVelocity]);

  return (
    <Section surfaceLevel="low" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Waveform */}
            <div className="flex flex-col gap-10 text-left items-start">
              <Typography variant="label" className="text-tertiary">About Me</Typography>
              
              <Typography variant="title" className="text-3xl md:text-4xl text-balance">
                "Architecture is not just about building software; it's about defining the space where code, logic, and user experience converge."
              </Typography>

              <Typography variant="body" className="max-w-xl text-balance text-xl text-on-surface">
                 {about.interests}
              </Typography>

              {/* Interactive Audio Waveform Canvas */}
              <div className="w-full max-w-xl h-[120px] relative mt-4 bg-surface-container-highest/20 rounded-3xl ghost-border overflow-hidden p-0 flex items-center justify-center pointer-events-none">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full block" 
                  style={{ width: '100%', height: '120px' }}
                />
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(17,28,45,1)]" />
              </div>
            </div>

            {/* Right Column: Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
               {/* Container with new Dark Blue Drop Shadow and transition target */}
               <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[2rem] p-4 glass-effect shadow-[0_15px_40px_rgba(10,25,47,0.8)] group hover:-translate-y-2 transition-transform duration-500 ease-out cursor-pointer">
                  <img 
                    src={profileImg} 
                    alt={portfolioData.hero.name} 
                    className="w-full h-full object-cover rounded-[1.5rem] grayscale-[100%] transition-[filter] duration-500 ease group-hover:grayscale-0"
                  />
                  {/* Decorative ambient glow that reveals on hover */}
                  <div className="absolute -inset-4 bg-tertiary/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
               </div>
            </div>

        </div>
      </Container>
    </Section>
  );
};
