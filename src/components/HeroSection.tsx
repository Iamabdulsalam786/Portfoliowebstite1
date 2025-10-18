import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Code, Rocket } from 'lucide-react';
import UltraFast3D from './UltraFast3D';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Digital Innovation Experts",
      subtitle: "Transforming Businesses Through Technology",
      description: "We create cutting-edge digital solutions that drive growth and deliver exceptional user experiences",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop&crop=center",
      bgGradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)"
    },
    {
      id: 2,
      title: "Full-Stack Development",
      subtitle: "End-to-End Digital Solutions",
      description: "From concept to deployment, we build scalable applications that power your business forward",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop&crop=center",
      bgGradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
      id: 3,
      title: "Strategic Technology Partners",
      subtitle: "Your Success is Our Mission",
      description: "We combine technical expertise with business acumen to deliver solutions that exceed expectations",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop&crop=center",
      bgGradient: "linear-gradient(135deg, #10b981, #3b82f6)"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0e1a, #1a1f2e, #2d3748)',
        paddingTop: '70px' // Account for fixed header
      }}
    >
      {/* Ultra-Fast CSS 3D Background */}
      <UltraFast3D style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }} />
      {/* Background with animated gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #1a1f2e, #4338ca, #7c3aed)'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}></div>
      </div>

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 20 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ color: 'white', display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Code size={16} style={{ marginRight: '8px' }} />
                <span style={{ fontSize: '14px', fontWeight: '500' }}>Trusted by 100+ Companies</span>
              </motion.div>
              
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.2', margin: 0 }}>
                <span style={{ display: 'block' }}>Welcome to</span>
                <span className="gradient-text" style={{ display: 'block' }}>
                  TechFlow Solutions
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#d1d5db', margin: 0 }}>
                {slides[currentSlide].title}
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#9ca3af', lineHeight: '1.6', maxWidth: '500px', margin: 0 }}>
                {slides[currentSlide].description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Rocket size={20} />
                <span>Get Started</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                style={{ color: 'white', borderColor: 'white' }}
              >
                <span>View Our Work</span>
                <Code size={20} />
              </motion.button>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '24px' }}>
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Contact" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    padding: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  aria-label={label}
                >
                  <Icon size={24} color="white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            variants={itemVariants}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              borderRadius: '16px',
              overflow: 'hidden'
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: slides[currentSlide].bgGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <motion.img
                    src={slides[currentSlide].image}
                    alt="Company Showcase"
                    style={{
                      width: '256px',
                      height: '256px',
                      borderRadius: '16px',
                      objectFit: 'cover',
                      border: '4px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px'
            }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    transform: index === currentSlide ? 'scale(1.25)' : 'scale(1)'
                  }}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <ChevronLeft size={24} color="white" />
            </button>
            
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <ChevronRight size={24} color="white" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '4px',
              height: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '2px',
              marginTop: '8px'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;