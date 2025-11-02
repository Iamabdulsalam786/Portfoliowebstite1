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
      price: 'Starting at $800',
      timeline: '2-6 weeks',
      popular: false,
      badge: 'Modern Tech'
    },
    {
      icon: '📱',
      title: 'React Native Apps',
      description: 'Cross-platform mobile applications for iOS and Android with native performance and smooth user experience',
      features: ['iOS & Android', 'App Store Optimization', 'Push Notifications', 'Offline Support', 'Real-time Sync'],
      color: 'from-green-500 to-green-600',
      price: 'Starting at $1,500',
      timeline: '4-12 weeks',
      popular: true,
      badge: 'Most Popular'
    },
    {
      icon: '🎨',
      title: 'Portfolio Websites',
      description: 'Beautiful, professional portfolio sites that showcase your work and attract clients with stunning designs',
      features: ['Custom Design', 'SEO Optimized', 'Fast Loading', 'Mobile Responsive', 'Contact Forms'],
      color: 'from-purple-500 to-purple-600',
      price: '$100 - $150',
      timeline: '1-2 weeks',
      popular: false,
      badge: 'Best Value'
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
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            🚀 Our Services
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Professional <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Digital Solutions</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We offer comprehensive digital solutions to help your business thrive in the modern world. 
            From custom websites to mobile apps, we've got you covered.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 h-full border-2 relative overflow-hidden ${
                service.popular ? 'border-primary-200 ring-2 ring-primary-100' : 'border-gray-100 hover:border-primary-200'
              }`}>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-20">
                    ⭐ Most Popular
                  </div>
                )}
                
                {/* Service Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  service.popular ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {service.badge}
                </div>
                
                {/* Icon */}
                <div className="text-center mb-4 sm:mb-6">
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4 shadow-lg`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl">{service.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-2 sm:mr-3 flex-shrink-0`}></div>
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Price and Timeline */}
                <div className="border-t border-gray-100 pt-4 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-gray-500">Price</div>
                      <div className="font-bold text-sm sm:text-base text-gray-900">{service.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Timeline</div>
                      <div className="font-semibold text-xs sm:text-sm text-primary-600">{service.timeline}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
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
