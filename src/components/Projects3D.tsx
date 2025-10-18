import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

// 3D Project Card
function ProjectCard3D({ position, color, delay = 0 }: { position: [number, number, number]; color: string; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1;
      
      // Hover effect
      if (isHovered) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.rotation.y = 0;
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <boxGeometry args={[0.8, 0.6, 0.1]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.1}
        metalness={0.7}
        roughness={0.3}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

// Floating Tech Icons
function TechIcons() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const techIcons = [
    { position: [3, 2, -2], color: '#f59e0b' }, // JavaScript
    { position: [-3, 1.5, -2], color: '#61dafb' }, // React
    { position: [2.5, -1, -1.5], color: '#38bdf8' }, // TypeScript
    { position: [-2.5, -1.5, -1.5], color: '#10b981' }, // Node.js
  ];

  return (
    <group ref={groupRef}>
      {techIcons.map((icon, index) => (
        <mesh key={index} position={icon.position as [number, number, number]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial 
            color={icon.color}
            emissive={icon.color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main Projects 3D Component
const Projects3D: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
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
          camera={{ position: [0, 0, 4], fov: 75 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: false, alpha: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={0.4} />
          <pointLight position={[-5, -5, 5]} intensity={0.3} />
          
          {/* Project Cards */}
          <ProjectCard3D position={[-1.5, 0.5, -1]} color="#3b82f6" delay={0} />
          <ProjectCard3D position={[1.5, 0.5, -1]} color="#8b5cf6" delay={500} />
          <ProjectCard3D position={[0, -0.5, -2]} color="#06b6d4" delay={1000} />
          
          {/* Tech Icons */}
          <TechIcons />
        </Canvas>
      )}
    </div>
  );
};

export default Projects3D;
