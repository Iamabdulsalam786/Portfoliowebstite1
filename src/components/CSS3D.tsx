import React from 'react';

// Pure CSS 3D effects - No JavaScript, No Three.js
const CSS3D: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      overflow: 'hidden',
      ...style 
    }}>
      {/* CSS Particles */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(2px 2px at 20px 30px, #60a5fa, transparent),
          radial-gradient(2px 2px at 40px 70px, #8b5cf6, transparent),
          radial-gradient(1px 1px at 90px 40px, #06b6d4, transparent),
          radial-gradient(1px 1px at 130px 80px, #10b981, transparent),
          radial-gradient(2px 2px at 160px 30px, #f59e0b, transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px',
        animation: 'float 20s linear infinite'
      }} />
      
      {/* CSS Floating Shapes */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '20px',
        height: '20px',
        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        opacity: 0.6
      }} />
      
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '15px',
        height: '15px',
        background: 'linear-gradient(45deg, #06b6d4, #10b981)',
        borderRadius: '2px',
        animation: 'float 8s ease-in-out infinite reverse',
        opacity: 0.5
      }} />
      
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '80%',
        width: '12px',
        height: '12px',
        background: 'linear-gradient(45deg, #f59e0b, #ef4444)',
        borderRadius: '50%',
        animation: 'float 7s ease-in-out infinite',
        opacity: 0.4
      }} />
      
      {/* CSS Grid Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'float 30s linear infinite',
        opacity: 0.3
      }} />
    </div>
  );
};

export default CSS3D;
