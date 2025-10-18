import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, ChevronLeft, ChevronRight, Users, Award, Clock, Heart, ThumbsUp, MessageCircle } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { label: "Happy Clients", value: "50+", icon: Users },
    { label: "Projects Completed", value: "100+", icon: Award },
    { label: "Years Experience", value: "3+", icon: Clock },
    { label: "Success Rate", value: "98%", icon: ThumbsUp }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with this developer was an absolute pleasure! The portfolio website they created exceeded all our expectations. The attention to detail, modern design, and seamless functionality made our brand stand out. Highly recommended!",
      project: "Corporate Portfolio Website"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, E-Commerce Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The e-commerce platform they built for us is simply outstanding! Sales increased by 40% in the first month. The user experience is flawless, and the admin dashboard is incredibly intuitive. This developer truly understands modern web development.",
      project: "E-Commerce Platform"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, RealEstate Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Our real estate website has never looked better! The property search functionality is lightning-fast, and the virtual tour integration is seamless. Our agents love the new system, and our clients are impressed with the modern interface.",
      project: "Real Estate Website"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
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
    <section id="testimonials" className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #1e293b, #334155, #475569)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
        `,
        animation: 'float 25s ease-in-out infinite'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '9999px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Heart size={16} style={{ marginRight: '8px', color: '#60a5fa' }} />
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#93c5fd' }}>Client Testimonials</span>
            </motion.div>
            
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: 'white', 
              margin: 0,
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
              What Clients Say
              <span style={{ 
                display: 'block',
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>About My Work</span>
            </h2>
            
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#cbd5e1', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Don't just take my word for it. Here's what my clients have to say about 
              working with me and the results they've achieved.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <stat.icon size={32} style={{ color: '#60a5fa', margin: '0 auto 12px' }} />
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '8px' 
                }}>
                  {stat.value}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '14px', fontWeight: '500' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Testimonial Carousel */}
          <motion.div variants={itemVariants} style={{ position: 'relative' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                minHeight: '400px'
              }}>
                {/* Quote Icon */}
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
                }}>
                  <Quote size={24} color="white" />
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  style={{
                    position: 'absolute',
                    left: '24px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  style={{
                    position: 'absolute',
                    right: '24px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  <ChevronRight size={24} />
                </motion.button>

                {/* Testimonial Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    style={{ padding: '80px 100px 40px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px' }}>
                      {/* Client Image */}
                      <div style={{ flexShrink: 0 }}>
                        <img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '20px',
                            objectFit: 'cover',
                            border: '3px solid rgba(59, 130, 246, 0.3)',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                          }}
                        />
                      </div>

                      {/* Testimonial Text */}
                      <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '16px' }}>
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={20}
                              style={{ 
                                color: '#fbbf24', 
                                marginRight: '4px',
                                fill: '#fbbf24'
                              }}
                            />
                          ))}
                        </div>
                        
                        <blockquote style={{
                          fontSize: '18px',
                          lineHeight: '1.6',
                          color: '#e2e8f0',
                          fontStyle: 'italic',
                          marginBottom: '24px'
                        }}>
                          "{testimonials[currentTestimonial].text}"
                        </blockquote>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <h4 style={{
                              fontSize: '20px',
                              fontWeight: 'bold',
                              color: 'white',
                              marginBottom: '4px'
                            }}>
                              {testimonials[currentTestimonial].name}
                            </h4>
                            <p style={{
                              color: '#94a3b8',
                              fontSize: '14px',
                              margin: 0
                            }}>
                              {testimonials[currentTestimonial].role}
                            </p>
                          </div>

                          {/* Project Info */}
                          <div style={{
                            textAlign: 'right',
                            background: 'rgba(59, 130, 246, 0.1)',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            border: '1px solid rgba(59, 130, 246, 0.2)'
                          }}>
                            <p style={{
                              color: '#60a5fa',
                              fontSize: '12px',
                              fontWeight: '600',
                              margin: 0
                            }}>
                              {testimonials[currentTestimonial].project}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px'
                }}>
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={() => {
                        setCurrentTestimonial(index);
                        setIsAutoPlaying(false);
                      }}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        border: 'none',
                        background: index === currentTestimonial 
                          ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' 
                          : 'rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <MessageCircle size={20} />
              <span>Start Your Project Today</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;