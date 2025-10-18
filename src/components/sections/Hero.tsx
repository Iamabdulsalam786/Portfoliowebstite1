import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const stats = [
    { icon: '👥', number: '150+', label: 'Happy Clients', color: 'from-blue-500 to-blue-600' },
    { icon: '💻', number: '200+', label: 'Projects Completed', color: 'from-green-500 to-green-600' },
    { icon: '📱', number: '50+', label: 'Mobile Apps', color: 'from-purple-500 to-purple-600' },
    { icon: '🚀', number: '5+', label: 'Years Experience', color: 'from-orange-500 to-orange-600' },
  ];

  useEffect(() => {
    // Start animations immediately for better visibility
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                🚀 Award-Winning Digital Agency
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <motion.span variants={itemVariants} className="block">
                  Transforming Ideas into
                </motion.span>
                <motion.span 
                  variants={itemVariants}
                  className="block bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent animate-gradient-x"
                >
                  Digital Reality
                </motion.span>
              </h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                We create <span className="font-semibold text-primary-600">stunning websites</span>, 
                <span className="font-semibold text-purple-600"> powerful mobile apps</span>, and 
                <span className="font-semibold text-green-600"> digital solutions</span> that help 
                your business grow and succeed in the digital world.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="btn-primary text-lg px-8 py-4 relative overflow-hidden group"
                >
                  <span className="relative z-10">View Our Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="btn-secondary text-lg px-8 py-4 border-2 border-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <span className="text-white">{stat.icon}</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Professional Mockup */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Laptop Mockup */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="bg-gray-800 rounded-t-2xl p-2 shadow-2xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  {/* Website Preview */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="text-lg font-bold">Your Business</div>
                        <div className="text-sm opacity-80">Live Site</div>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
                        <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                        <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Laptop Base */}
                <div className="h-4 bg-gray-700 rounded-b-lg mx-4 shadow-lg"></div>
              </div>
              
              {/* Mobile Mockup */}
              <motion.div
                className="absolute -bottom-8 -right-4 w-24 h-48 bg-gray-800 rounded-3xl p-2 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-2xl h-full overflow-hidden">
                  <div className="bg-primary-600 p-3 text-white text-center">
                    <div className="text-xs font-bold">Mobile App</div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-8 bg-gradient-to-r from-primary-100 to-purple-100 rounded-lg mt-4"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Subtle Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-30"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
