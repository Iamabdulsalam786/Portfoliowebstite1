import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

// 3D Progress Bar Component
function ProgressBar3D({ progress, color, delay = 0 }: { progress: number; color: string; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, delay);
    return () => clearTimeout(timer);
  }, [progress, delay]);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth progress animation
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, animatedProgress / 100, 0.05);
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2 + delay) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[0.1, 0.02, 0.02]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

// Floating Skill Icons
function FloatingIcons() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const icons = [
    { position: [2, 1, -1], color: '#3b82f6' },
    { position: [-2, 0.5, -1], color: '#8b5cf6' },
    { position: [0, -1, -2], color: '#06b6d4' },
    { position: [1.5, -0.5, -1.5], color: '#10b981' },
  ];

  return (
    <group ref={groupRef}>
      {icons.map((icon, index) => (
        <mesh key={index} position={icon.position as [number, number, number]}>
          <octahedronGeometry args={[0.1]} />
          <meshStandardMaterial 
            color={icon.color}
            emissive={icon.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main Skills 3D Component
const Skills3D: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
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
          camera={{ position: [0, 0, 3], fov: 75 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: false, alpha: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.3} />
          
          {/* Progress Bars */}
          <ProgressBar3D progress={95} color="#3b82f6" delay={0} />
          <ProgressBar3D progress={90} color="#8b5cf6" delay={200} />
          <ProgressBar3D progress={85} color="#06b6d4" delay={400} />
          <ProgressBar3D progress={80} color="#10b981" delay={600} />
          
          {/* Floating Icons */}
          <FloatingIcons />
        </Canvas>
      )}
    </div>
  );
};

export default Skills3D;
