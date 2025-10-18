import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Check, 
  Star, 
  Crown, 
  Rocket, 
  Home, 
  ShoppingCart,
  Smartphone,
  Palette,
  MessageCircle
} from 'lucide-react';

const PricingSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const pricingPlans = [
    {
      id: 'portfolio',
      name: 'Portfolio Website',
      price: 100,
      originalPrice: 150,
      icon: Palette,
      color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      popular: false,
      features: [
        'Modern Responsive Design',
        'Custom Animations',
        'Contact Form Integration',
        'SEO Optimization',
        'Mobile-First Approach',
        'Fast Loading Speed',
        'Social Media Integration',
        '1 Month Support'
      ],
      description: 'Perfect for showcasing your work and attracting clients'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Website',
      price: 150,
      originalPrice: 200,
      icon: ShoppingCart,
      color: 'linear-gradient(135deg, #10b981, #059669)',
      popular: true,
      features: [
        'Full Shopping Cart System',
        'Payment Gateway Integration',
        'Product Management',
        'Order Tracking System',
        'Admin Dashboard',
        'Inventory Management',
        'Customer Reviews',
        '3 Months Support'
      ],
      description: 'Complete online store with all e-commerce features'
    },
    {
      id: 'realestate',
      name: 'Real Estate Website',
      price: 120,
      originalPrice: 180,
      icon: Home,
      color: 'linear-gradient(135deg, #f59e0b, #d97706)',
      popular: false,
      features: [
        'Property Listings',
        'Advanced Search Filters',
        'Virtual Tour Integration',
        'Lead Generation Forms',
        'Property Comparison',
        'Agent Profiles',
        'Mortgage Calculator',
        '2 Months Support'
      ],
      description: 'Professional real estate platform for property listings'
    },
    {
      id: 'mobile',
      name: 'Mobile App',
      price: 200,
      originalPrice: 300,
      icon: Smartphone,
      color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      popular: false,
      features: [
        'Cross-Platform (iOS & Android)',
        'Native Performance',
        'Push Notifications',
        'Offline Functionality',
        'App Store Deployment',
        'User Authentication',
        'Real-time Updates',
        '6 Months Support'
      ],
      description: 'Native mobile applications for iOS and Android'
    }
  ];

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
    <section id="pricing" className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #0f172a, #1e293b, #334155)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
        `,
        animation: 'float 20s ease-in-out infinite'
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
              <Star size={16} style={{ marginRight: '8px', color: '#60a5fa' }} />
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#93c5fd' }}>Pricing Plans</span>
            </motion.div>
            
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: 'white', 
              margin: 0,
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
              Choose Your Perfect
              <span style={{ 
                display: 'block',
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Development Package</span>
            </h2>
            
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#cbd5e1', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Professional web development services tailored to your needs. 
              All packages include modern design, responsive layout, and ongoing support.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                style={{
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '24px',
                  border: plan.popular 
                    ? '2px solid rgba(99, 102, 241, 0.5)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = plan.popular 
                    ? 'rgba(99, 102, 241, 0.5)' 
                    : 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                    zIndex: 10
                  }}>
                    <Crown size={14} />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Plan Header */}
                <div style={{ padding: '20px 16px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: plan.color,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                    }}>
                      <plan.icon size={22} color="white" />
                    </div>
                    <div>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        color: 'white', 
                        margin: 0,
                        marginBottom: '3px'
                      }}>
                        {plan.name}
                      </h3>
                      <p style={{ 
                        color: '#94a3b8', 
                        fontSize: '12px', 
                        margin: 0,
                        lineHeight: '1.3'
                      }}>
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                    <span style={{ 
                      fontSize: '12px', 
                      color: '#94a3b8', 
                      textDecoration: 'line-through' 
                    }}>
                      ${plan.originalPrice}
                    </span>
                    <span style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'bold', 
                      color: 'white' 
                    }}>
                      ${plan.price}
                    </span>
                    <span style={{ 
                      fontSize: '14px', 
                      color: '#94a3b8' 
                    }}>
                      one-time
                    </span>
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + featureIndex * 0.05 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '4px 0'
                        }}
                      >
                        <div style={{
                          width: '16px',
                          height: '16px',
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={10} color="white" />
                        </div>
                        <span style={{ 
                          color: '#cbd5e1', 
                          fontSize: '12px',
                          lineHeight: '1.3'
                        }}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div style={{ 
                  padding: '0 16px 20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  marginTop: '16px'
                }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      padding: '12px 20px',
                      background: plan.popular 
                        ? 'linear-gradient(135deg, #6366f1, #4f46e5)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      if (!plan.popular) {
                        e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                        e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.popular) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'transparent';
                      }
                    }}
                  >
                    <Rocket size={18} />
                    <span>Get Started</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} style={{
            textAlign: 'center',
            padding: '32px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '16px' 
            }}>
              Need Something Custom?
            </h3>
            <p style={{ 
              color: '#cbd5e1', 
              fontSize: '16px', 
              lineHeight: '1.6',
              marginBottom: '24px' 
            }}>
              Have a unique project in mind? I offer custom development solutions 
              tailored to your specific requirements. Let's discuss your vision!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)'
              }}
            >
              <MessageCircle size={18} />
              <span>Discuss Custom Project</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
