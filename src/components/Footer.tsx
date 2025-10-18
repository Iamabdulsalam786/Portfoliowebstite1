import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '48px 0' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
              Alex Johnson
            </h3>
            <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
              Full-stack developer passionate about creating exceptional digital experiences.
            </p>
          </div>
          <div style={{ borderTop: '1px solid #374151', paddingTop: '24px' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              © 2024 Alex Johnson. Made with ❤️ and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;