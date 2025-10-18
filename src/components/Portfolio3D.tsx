import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

// 3D Portfolio Showcase
function PortfolioShowcase() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  const showcases = [
    { position: [-2, 0, -1], color: '#3b82f6', size: [0.6, 0.4, 0.05] },
    { position: [0, 0, -1.5], color: '#8b5cf6', size: [0.7, 0.5, 0.05] },
    { position: [2, 0, -1], color: '#06b6d4', size: [0.6, 0.4, 0.05] },
    { position: [-1, -1, -2], color: '#10b981', size: [0.5, 0.3, 0.05] },
    { position: [1, -1, -2], color: '#f59e0b', size: [0.5, 0.3, 0.05] },
  ];

  return (
    <group ref={groupRef}>
      {showcases.map((showcase, index) => (
        <mesh 
          key={index}
          position={showcase.position as [number, number, number]}
          onPointerEnter={() => setHoveredIndex(index)}
          onPointerLeave={() => setHoveredIndex(null)}
        >
          <boxGeometry args={showcase.size as [number, number, number]} />
          <meshStandardMaterial 
            color={showcase.color}
            emissive={showcase.color}
            emissiveIntensity={hoveredIndex === index ? 0.3 : 0.1}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating Achievement Badges
function AchievementBadges() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.03;
    }
  });

  const badges = [
    { position: [3, 2, -3], color: '#ef4444' }, // Award
    { position: [-3, 2, -3], color: '#f59e0b' }, // Star
    { position: [3, -2, -3], color: '#10b981' }, // Check
    { position: [-3, -2, -3], color: '#8b5cf6' }, // Trophy
  ];

  return (
    <group ref={groupRef}>
      {badges.map((badge, index) => (
        <mesh key={index} position={badge.position as [number, number, number]}>
          <torusGeometry args={[0.1, 0.03, 8, 16]} />
          <meshStandardMaterial 
            color={badge.color}
            emissive={badge.color}
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main Portfolio 3D Component
const Portfolio3D: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        ...style 
      }}
    >
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: false, alpha: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.5} />
          <pointLight position={[-5, -5, 5]} intensity={0.3} />
          
          {/* Portfolio Showcase */}
          <PortfolioShowcase />
          
          {/* Achievement Badges */}
          <AchievementBadges />
        </Canvas>
      )}
    </div>
  );
};

export default Portfolio3D;
