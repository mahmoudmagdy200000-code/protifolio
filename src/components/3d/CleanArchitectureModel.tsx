import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Define the architecture layers (Clean Architecture logic separated from UI rendering)
const architectureLayers = [
  { id: 'entities', name: 'Entities', color: '#00daf3', yOffset: 1.5, description: 'Enterprise Business Rules' },
  { id: 'usecases', name: 'Use Cases', color: '#adc7ff', yOffset: 0, description: 'Application Business Rules' },
  { id: 'interfaces', name: 'Adapters', color: '#1f2a3c', yOffset: -1.5, description: 'Interface Adapters' }
];

export default function CleanArchitectureModel() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  
  // Tie rotation to a slow continuous spin + interactive scroll/mouse interaction
  useFrame(({ clock, pointer }) => {
    if (groupRef.current) {
      // Base rotation
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.5;
      
      // Slight tilt based on pointer position
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (pointer.y * Math.PI) / 8,
        0.1
      );
      groupRef.current.rotation.y += THREE.MathUtils.lerp(
        0,
        (pointer.x * Math.PI) / 8,
        0.1
      );
    }
  });

  return (
    <group ref={groupRef}>
      {architectureLayers.map((layer) => {
        const isHovered = hoveredLayer === layer.id;
        const scale = isHovered ? 1.05 : 1;
        const expandedY = isHovered ? layer.yOffset * 1.2 : layer.yOffset; // Exploded view expansion

        return (
          <group 
            key={layer.id} 
            position={[0, expandedY, 0]}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredLayer(layer.id);
              document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => {
              setHoveredLayer(null);
              document.body.style.cursor = 'default';
            }}
          >
            {/* Layer Platform / Plane */}
            <mesh scale={[scale, scale, scale]}>
              <cylinderGeometry args={[2, 2, 0.2, 32]} />
              <meshStandardMaterial 
                color={layer.color} 
                transparent 
                opacity={isHovered ? 0.9 : 0.6}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
            
            {/* Layer Label using HTML to avoid Vite production minification crashes from Troika Text */}
            <Html position={[0, 0, 2.2]} center transform>
              <div 
                className="font-bold text-sm select-none" 
                style={{ color: isHovered ? '#ffffff' : '#d8e3fb', transition: 'color 0.3s ease' }}
              >
                {layer.name}
              </div>
            </Html>

            {/* Html Tooltip for description */}
            {isHovered && (
              <Html position={[2.5, 0, 0]} center>
                <div className="bg-surface-container-high/80 backdrop-blur-md p-4 rounded-xl ghost-border text-on-surface w-48 shadow-ambient transition-all duration-300 transform -translate-y-1/2 pointer-events-none">
                  <h4 className="text-primary font-bold text-sm mb-1">{layer.name}</h4>
                  <p className="text-xs text-on-surface-variant font-medium leading-relaxed">{layer.description}</p>
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
}
