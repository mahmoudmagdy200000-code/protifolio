import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the spring physics for a high-end feel
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Rotate based on mouse position from center of card
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Snap back to zero
    x.set(0);
    y.set(0);
  };

  const baseClasses = glass 
    ? 'glass-effect' 
    : 'bg-surface-container-highest ghost-border shadow-ambient';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`rounded-2xl relative group cursor-pointer ${className}`.trim()}
    >
      <div 
        className={`w-full h-full p-6 md:p-8 rounded-2xl ${baseClasses} overflow-hidden`}
        style={{ transform: 'translateZ(30px)' }}
      >
        {/* Pulsating Inner Glow on Hover */}
        <div className="absolute inset-0 bg-primary/10 blur-[50px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Content lifted physically closer to camera */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
