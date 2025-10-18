import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Cloud, 
  Shield,
  Zap,
  Globe,
  Cpu
} from 'lucide-react';
import UltraFast3D from './UltraFast3D';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('web');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = [
    { id: 'web', name: 'Web Development', icon: Code },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'design', name: 'UI/UX Design', icon: Palette },
    { id: 'consulting', name: 'Consulting', icon: Shield }
  ];

  const services = {
    web: [
      { name: 'Custom Web Applications', level: 95, icon: '🌐', color: 'linear-gradient(135deg, #61dafb, #21d4fd)' },
      { name: 'E-commerce Solutions', level: 90, icon: '🛒', color: 'linear-gradient(135deg, #3178c6, #007acc)' },
      { name: 'Progressive Web Apps', level: 88, icon: '📱', color: 'linear-gradient(135deg, #000000, #333333)' },
      { name: 'API Development', level: 85, icon: '🔗', color: 'linear-gradient(135deg, #4fc08d, #42b883)' },
      { name: 'Performance Optimization', level: 92, icon: '⚡', color: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
      { name: 'SEO & Analytics', level: 87, icon: '📊', color: 'linear-gradient(135deg, #cf649a, #c69)' }
    ],
    mobile: [
      { name: 'iOS Applications', level: 90, icon: '🍎', color: 'linear-gradient(135deg, #68a063, #339933)' },
      { name: 'Android Applications', level: 88, icon: '🤖', color: 'linear-gradient(135deg, #000000, #333333)' },
      { name: 'Cross-Platform Apps', level: 85, icon: '📱', color: 'linear-gradient(135deg, #4db33d, #47a248)' },
      { name: 'App Store Optimization', level: 82, icon: '📈', color: 'linear-gradient(135deg, #336791, #2c5aa0)' },
      { name: 'Push Notifications', level: 80, icon: '🔔', color: 'linear-gradient(135deg, #e10098, #f6009c)' },
      { name: 'Mobile Analytics', level: 75, icon: '📊', color: 'linear-gradient(135deg, #dc382d, #c6302b)' }
    ],
    cloud: [
      { name: 'AWS Infrastructure', level: 85, icon: '☁️', color: 'linear-gradient(135deg, #61dafb, #21d4fd)' },
      { name: 'Azure Solutions', level: 80, icon: '🔵', color: 'linear-gradient(135deg, #02569b, #0175c2)' },
      { name: 'Google Cloud', level: 88, icon: '🌐', color: 'linear-gradient(135deg, #000020, #000033)' },
      { name: 'DevOps & CI/CD', level: 82, icon: '⚙️', color: 'linear-gradient(135deg, #ffca28, #ff8f00)' },
      { name: 'Microservices', level: 75, icon: '🔧', color: 'linear-gradient(135deg, #000000, #333333)' },
      { name: 'Security & Compliance', level: 75, icon: '🔒', color: 'linear-gradient(135deg, #01875f, #00c851)' }
    ],
    design: [
      { name: 'User Experience Design', level: 90, icon: '🎨', color: 'linear-gradient(135deg, #f24e1e, #ff7262)' },
      { name: 'User Interface Design', level: 85, icon: '💜', color: 'linear-gradient(135deg, #ff61f6, #ff2d92)' },
      { name: 'Brand Identity', level: 80, icon: '✏️', color: 'linear-gradient(135deg, #f7b500, #ff9500)' },
      { name: 'Prototyping', level: 75, icon: '🖼️', color: 'linear-gradient(135deg, #31a8ff, #0066cc)' },
      { name: 'Design Systems', level: 70, icon: '🎭', color: 'linear-gradient(135deg, #ff9a00, #ff6600)' },
      { name: 'Usability Testing', level: 65, icon: '🎯', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }
    ],
    consulting: [
      { name: 'Digital Strategy', level: 85, icon: '📊', color: 'linear-gradient(135deg, #2496ed, #0066cc)' },
      { name: 'Technology Assessment', level: 80, icon: '🔍', color: 'linear-gradient(135deg, #ff9900, #ff6600)' },
      { name: 'Process Optimization', level: 90, icon: '⚡', color: 'linear-gradient(135deg, #000000, #333333)' },
      { name: 'Team Training', level: 85, icon: '👥', color: 'linear-gradient(135deg, #2088ff, #0066cc)' },
      { name: 'Project Management', level: 75, icon: '📋', color: 'linear-gradient(135deg, #009639, #006600)' },
      { name: 'Quality Assurance', level: 80, icon: '✅', color: 'linear-gradient(135deg, #fcc624, #ff9500)' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #0a0e1a, #1a1f2e, #2d3748)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ultra-Fast CSS 3D Background */}
      <UltraFast3D style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }} />
      
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)
        `,
        animation: 'float 20s ease-in-out infinite'
      }} />
      
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                background: 'rgba(99, 102, 241, 0.1)',
                borderRadius: '9999px',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Zap size={16} style={{ marginRight: '8px', color: '#a5b4fc' }} />
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#c7d2fe' }}>Our Services</span>
            </motion.div>
            
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: 'white', 
              margin: 0,
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
              Comprehensive Services
              <span style={{ 
                display: 'block',
                background: 'linear-gradient(135deg, #a5b4fc, #c084fc, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>That Drive Success</span>
            </h2>
            
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#cbd5e1', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              From web development to cloud solutions, we offer end-to-end services that help 
              businesses thrive in the digital landscape.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '16px' 
          }}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  background: activeCategory === category.id 
                    ? 'linear-gradient(135deg, #6366f1, #4f46e5)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  color: activeCategory === category.id ? 'white' : '#e2e8f0',
                  backdropFilter: 'blur(10px)',
                  boxShadow: activeCategory === category.id 
                    ? '0 8px 32px rgba(99, 102, 241, 0.3)' 
                    : '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}
              >
                <category.icon size={20} />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {services[activeCategory as keyof typeof services].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(99, 102, 241, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '24px' }}>{service.icon}</div>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: '600', 
                      color: 'white',
                      margin: 0
                    }}>
                      {service.name}
                    </h3>
                  </div>
                  <span style={{ 
                    fontSize: '14px', 
                    fontWeight: 'bold', 
                    color: '#a5b4fc' 
                  }}>
                    {service.level}%
                  </span>
                </div>
                
                {/* Sexy Modern Progress Bar */}
                <div style={{ 
                  position: 'relative',
                  width: '100%', 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: '12px', 
                  height: '12px', 
                  marginBottom: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Animated background glow */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    animation: 'shimmer 2s infinite'
                  }} />
                  
                  {/* Main progress bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${service.level}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                    style={{
                      position: 'relative',
                      height: '100%',
                      borderRadius: '12px',
                      background: service.color,
                      boxShadow: `0 0 20px ${service.color.includes('#3b82f6') ? 'rgba(59, 130, 246, 0.6)' : 'rgba(16, 185, 129, 0.6)'}`,
                      overflow: 'hidden'
                    }}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ 
                        delay: 1 + index * 0.1, 
                        duration: 0.8, 
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                        borderRadius: '12px'
                      }}
                    />
                    
                    {/* Pulsing dot at the end */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        right: '-6px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '12px',
                        height: '12px',
                        background: 'white',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                      }}
                    />
                  </motion.div>
                  
                  {/* Skill level indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '2px 6px',
                      borderRadius: '6px',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {service.level}%
                  </motion.div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  fontSize: '12px', 
                  color: '#94a3b8' 
                }}>
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginTop: '64px'
          }}>
            {[
              { icon: Shield, title: "Security First", desc: "Always prioritize security in every project" },
              { icon: Globe, title: "Global Reach", desc: "Experience with international projects" },
              { icon: Cpu, title: "Performance", desc: "Optimized for speed and efficiency" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: 'center',
                  padding: '32px 24px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <item.icon size={48} style={{ color: '#60a5fa', margin: '0 auto 16px' }} />
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  color: 'white', 
                  marginBottom: '8px' 
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default SkillsSection;