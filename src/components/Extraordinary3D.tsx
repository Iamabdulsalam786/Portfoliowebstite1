import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Points, 
  PointMaterial, 
  Environment,
  ContactShadows,
  Float,
  MeshWobbleMaterial,
  MeshDistortMaterial,
  OrbitControls
} from '@react-three/drei';
import * as THREE from 'three';

// Advanced Particle System with Physics
function AdvancedParticles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create a sphere distribution
      const radius = Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      const velocities = particlesPosition.velocities;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Mouse attraction
        const dx = mouse.x * 10 - positions[i3];
        const dy = mouse.y * 10 - positions[i3 + 1];
        const dz = 0 - positions[i3 + 2];
        
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const force = 0.0001 / (distance + 0.1);
        
        velocities[i3] += dx * force;
        velocities[i3 + 1] += dy * force;
        velocities[i3 + 2] += dz * force;
        
        // Apply velocities
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        // Damping
        velocities[i3] *= 0.99;
        velocities[i3 + 1] *= 0.99;
        velocities[i3 + 2] *= 0.99;
        
        // Boundary check
        const radius = Math.sqrt(positions[i3] ** 2 + positions[i3 + 1] ** 2 + positions[i3 + 2] ** 2);
        if (radius > 20) {
          positions[i3] *= 0.9;
          positions[i3 + 1] *= 0.9;
          positions[i3 + 2] *= 0.9;
        }
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={mesh} positions={particlesPosition.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Morphing Geometric Shapes
function MorphingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Morphing between different shapes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[3, 2, -2]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <MeshWobbleMaterial 
            color="#ff6b6b" 
            speed={2}
            factor={0.6}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-3, -1, -1]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <MeshDistortMaterial 
            color="#4ecdc4" 
            speed={1.5}
            distort={0.4}
            radius={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
      
      <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[0, 3, -3]}>
          <torusGeometry args={[0.3, 0.15, 16, 100]} />
          <meshStandardMaterial 
            color="#45b7d1" 
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

// 3D Floating Cubes with Text Effect
function Floating3DText() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, -5]}>
        {/* Create "PORTFOLIO" with floating cubes */}
        {[...Array(9)].map((_, i) => (
          <mesh
            key={i}
            position={[
              (i - 4) * 0.4,
              Math.sin(i * 0.5) * 0.2,
              Math.cos(i * 0.3) * 0.1
            ]}
          >
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial 
              color="#ffd700" 
              metalness={0.9}
              roughness={0.1}
              emissive="#ffd700"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Interactive 3D Environment
function InteractiveEnvironment() {
  const { camera } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Camera follows mouse
    camera.position.x = mouse.x * 2;
    camera.position.y = mouse.y * 2;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Holographic Grid
function HolographicGrid() {
  const gridRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      const material = gridRef.current.material as THREE.MeshBasicMaterial;
      if (material) {
        material.opacity = Math.sin(state.clock.elapsedTime * 2) * 0.3 + 0.4;
      }
    }
  });

  return (
    <mesh ref={gridRef} position={[0, 0, -8]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <meshBasicMaterial 
        color="#00ffff" 
        transparent 
        opacity={0.3}
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Energy Orbs
function EnergyOrbs() {
  const orbs = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (orbs.current) {
      orbs.current.rotation.y = state.clock.elapsedTime * 0.3;
      orbs.current.children.forEach((orb, index) => {
        orb.rotation.x = state.clock.elapsedTime * (0.5 + index * 0.2);
        orb.rotation.z = state.clock.elapsedTime * (0.3 + index * 0.1);
      });
    }
  });

  return (
    <group ref={orbs}>
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[
            Math.cos(i * Math.PI / 3) * 4,
            Math.sin(i * Math.PI / 3) * 4,
            -2
          ]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial 
              color={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][i]}
              metalness={0.8}
              roughness={0.2}
              emissive={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][i]}
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Main Extraordinary 3D Component
const Extraordinary3D: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      ...style 
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        onError={(error) => console.log('Canvas error:', error)}
      >
        {/* Advanced Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#60a5fa" />
        <pointLight position={[0, 10, 0]} intensity={0.4} color="#ff6b6b" />
        
        {/* Environment */}
        <Environment preset="night" />
        
        {/* Interactive Camera */}
        <InteractiveEnvironment />
        
        {/* Advanced Particle System */}
        <AdvancedParticles count={1500} />
        
        {/* Morphing Shapes */}
        <MorphingShapes />
        
        {/* 3D Text */}
        <Floating3DText />
        
        {/* Holographic Grid */}
        <HolographicGrid />
        
        {/* Energy Orbs */}
        <EnergyOrbs />
        
        {/* Contact Shadows */}
        <ContactShadows 
          rotation-x={Math.PI / 2} 
          position={[0, -2, 0]} 
          opacity={0.25} 
          width={10} 
          height={10} 
          blur={1.5} 
          far={2} 
        />
        
        {/* Orbit Controls for Interaction */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Extraordinary3D;
