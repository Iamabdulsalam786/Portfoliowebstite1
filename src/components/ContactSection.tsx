import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', padding: '64px 0' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
            Let's Work Together
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss 
            how we can bring your ideas to life.
          </p>
          <div style={{ marginTop: '48px', padding: '32px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
            <p style={{ color: '#6b7280' }}>Contact form coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;