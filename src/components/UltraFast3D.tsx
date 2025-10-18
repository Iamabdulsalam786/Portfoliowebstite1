import React from 'react';

// Ultra-fast CSS-only 3D effects - Zero JavaScript, Zero Performance Impact
const UltraFast3D: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
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
      {/* CSS 3D Particles */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(2px 2px at 20px 30px, #60a5fa, transparent),
          radial-gradient(2px 2px at 40px 70px, #8b5cf6, transparent),
          radial-gradient(1px 1px at 90px 40px, #06b6d4, transparent),
          radial-gradient(1px 1px at 130px 80px, #10b981, transparent),
          radial-gradient(2px 2px at 160px 30px, #f59e0b, transparent),
          radial-gradient(1px 1px at 200px 60px, #ef4444, transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '250px 120px',
        animation: 'float 25s linear infinite',
        opacity: 0.6
      }} />
      
      {/* CSS 3D Floating Shapes */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '8%',
        width: '25px',
        height: '25px',
        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite',
        opacity: 0.7,
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '65%',
        right: '12%',
        width: '20px',
        height: '20px',
        background: 'linear-gradient(45deg, #06b6d4, #10b981)',
        borderRadius: '3px',
        animation: 'float 10s ease-in-out infinite reverse',
        opacity: 0.6,
        boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '35%',
        left: '85%',
        width: '18px',
        height: '18px',
        background: 'linear-gradient(45deg, #f59e0b, #ef4444)',
        borderRadius: '50%',
        animation: 'float 7s ease-in-out infinite',
        opacity: 0.5,
        boxShadow: '0 0 12px rgba(245, 158, 11, 0.3)'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '80%',
        left: '15%',
        width: '22px',
        height: '22px',
        background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
        borderRadius: '2px',
        animation: 'float 9s ease-in-out infinite reverse',
        opacity: 0.6,
        boxShadow: '0 0 18px rgba(139, 92, 246, 0.4)'
      }} />
      
      {/* CSS 3D Grid Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(96, 165, 250, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(96, 165, 250, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'float 35s linear infinite',
        opacity: 0.4
      }} />
      
      {/* CSS 3D Progress Bars Effect */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '5%',
        width: '120px',
        height: '4px',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
        borderRadius: '2px',
        animation: 'float 6s ease-in-out infinite',
        opacity: 0.3,
        boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '45%',
        right: '8%',
        width: '100px',
        height: '3px',
        background: 'linear-gradient(90deg, #06b6d4, #10b981)',
        borderRadius: '2px',
        animation: 'float 8s ease-in-out infinite reverse',
        opacity: 0.3,
        boxShadow: '0 0 8px rgba(6, 182, 212, 0.3)'
      }} />
    </div>
  );
};

export default UltraFast3D;
