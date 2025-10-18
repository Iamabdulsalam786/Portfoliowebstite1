import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Code, Coffee, Target, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: Code, value: "200+", label: "Projects Delivered" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "8+", label: "Years Experience" },
    { icon: Coffee, value: "50+", label: "Team Members" }
  ];

  const expertise = [
    { name: "Web Development", level: 95 },
    { name: "Mobile Applications", level: 90 },
    { name: "Cloud Solutions", level: 85 },
    { name: "Digital Transformation", level: 88 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  backgroundColor: '#e0e7ff',
                  borderRadius: '9999px'
                }}
              >
                <Target size={16} style={{ marginRight: '8px', color: '#6366f1' }} />
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#4338ca' }}>About Us</span>
              </motion.div>
              
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                Innovation-Driven Team
                <span className="gradient-text" style={{ display: 'block' }}>Building Digital Excellence</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: '#4b5563' }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.6', margin: 0 }}>
                TechFlow Solutions is a leading digital innovation company with over 8 years of experience 
                transforming businesses through cutting-edge technology solutions. We specialize in web development, 
                mobile applications, and cloud infrastructure.
              </p>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.6', margin: 0 }}>
                Our mission is to empower businesses with scalable, secure, and user-friendly digital solutions 
                that drive growth and enhance customer experiences. We combine technical expertise with strategic 
                thinking to deliver results that exceed expectations.
              </p>
              
              <p style={{ fontSize: '1.125rem', lineHeight: '1.6', margin: 0 }}>
                With a team of 50+ skilled professionals, we've successfully delivered 200+ projects for 
                clients ranging from startups to Fortune 500 companies, helping them achieve their digital 
                transformation goals.
              </p>
            </div>

            {/* Skills Progress */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>Core Expertise</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {expertise.map((skill, index) => (
                  <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '14px', color: '#6366f1', fontWeight: '600' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '4px', height: '8px' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        style={{
                          background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                          height: '8px',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Profile Image */}
            <div style={{ position: 'relative' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto' }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  borderRadius: '16px',
                  transform: 'rotate(3deg)'
                }}></div>
                <div style={{
                  position: 'relative',
                  backgroundColor: 'white',
                  padding: '16px',
                  borderRadius: '16px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center"
                    alt="Our Team"
                    style={{
                      width: '100%',
                      height: '320px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '10px',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <stat.icon size={32} style={{ color: '#6366f1', margin: '0 auto 12px' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Lightbulb size={20} />
                Partner With Us
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;