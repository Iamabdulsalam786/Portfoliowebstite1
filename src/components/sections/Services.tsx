import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Services: React.FC = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    // Start animations immediately for better visibility
    controls.start('visible');
  }, [controls]);

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js',
      features: ['Responsive Design', 'CMS Integration', 'E-commerce Solutions', 'Performance Optimization', 'Progressive Web Apps'],
      color: 'from-blue-500 to-blue-600',
      price: 'Starting at $2,500',
      timeline: '2-6 weeks'
    },
    {
      icon: '📱',
      title: 'React Native Apps',
      description: 'Cross-platform mobile applications for iOS and Android with native performance',
      features: ['iOS & Android', 'App Store Optimization', 'Push Notifications', 'Offline Support', 'Real-time Sync'],
      color: 'from-green-500 to-green-600',
      price: 'Starting at $5,000',
      timeline: '4-12 weeks'
    },
    {
      icon: '🎨',
      title: 'Portfolio Websites',
      description: 'Beautiful, professional portfolio sites that showcase your work and attract clients',
      features: ['Custom Design', 'SEO Optimized', 'Fast Loading', 'Mobile Responsive', 'Contact Forms'],
      color: 'from-purple-500 to-purple-600',
      price: 'Starting at $1,500',
      timeline: '1-3 weeks'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your website visibility and organic traffic',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Analytics Setup', 'Content Strategy'],
      color: 'from-orange-500 to-orange-600',
      price: 'Starting at $800/month',
      timeline: 'Ongoing'
    },
    {
      icon: '⚙️',
      title: 'Technical Consulting',
      description: 'Expert guidance on technology choices, architecture, and digital strategy',
      features: ['Architecture Planning', 'Technology Stack', 'Performance Audit', 'Security Review', 'Code Review'],
      color: 'from-indigo-500 to-indigo-600',
      price: '$150/hour',
      timeline: 'As needed'
    },
    {
      icon: '📊',
      title: 'Digital Solutions',
      description: 'Comprehensive digital transformation to modernize your business processes',
      features: ['Process Automation', 'Data Analytics', 'Cloud Migration', 'Integration Services', 'API Development'],
      color: 'from-pink-500 to-pink-600',
      price: 'Custom Quote',
      timeline: '3-6 months'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            🚀 Our Services
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Digital Solutions</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the modern world. 
            From custom websites to mobile apps, we've got you covered.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-primary-200 relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-3xl">{service.icon}</span>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price and Timeline */}
                  <div className="border-t border-gray-100 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Starting Price</div>
                        <div className="font-bold text-lg text-gray-900">{service.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="font-semibold text-primary-600">{service.timeline}</div>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, #ffffff 2px, transparent 2px)`,
                backgroundSize: '60px 60px',
                backgroundPosition: '0 0, 30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <motion.h3
                className="text-4xl lg:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Ready to Start Your Project?
              </motion.h3>
              
              <motion.p
                className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Let's discuss how we can help bring your ideas to life. Get a free consultation 
                and discover the perfect solution for your business needs.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Get Free Consultation
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  View Our Work
                </motion.button>
              </div>
              
              <motion.div
                className="mt-8 text-sm opacity-80"
                variants={itemVariants}
              >
                ✨ Free consultation • No commitment • Quick response
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
