import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  const stats = [
    { icon: '👥', number: '12', label: 'Active monthly partners', color: 'from-blue-500 to-blue-600' },
    { icon: '🚀', number: '40+', label: 'Store-ready releases delivered', color: 'from-green-500 to-green-600' },
    { icon: '⏱️', number: '7 days', label: 'Average onboarding time', color: 'from-purple-500 to-purple-600' },
    { icon: '🛠️', number: '2', label: 'Senior engineers on your team', color: 'from-orange-500 to-orange-600' }
  ];

  useEffect(() => {
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
        ease: 'easeOut' as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-18 md:pt-20 lg:pt-16 overflow-hidden pb-8 sm:pb-12 lg:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-5 sm:opacity-10 md:opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
              backgroundSize: '15px 15px',
              backgroundPosition: '0 0, 7px 7px'
            }}
          ></div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-2 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center text-center lg:text-left"
        >
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 md:space-y-6">
              <motion.div
                className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-1 sm:mb-2 md:mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                👋 TechCraft Studio • Product builds & dedicated engineering duo
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <motion.span variants={itemVariants} className="block">
                  Hire a high-performing
                </motion.span>
                <motion.span
                  variants={itemVariants}
                  className="block bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent animate-gradient-x"
                >
                  React & Backend squad on retainer
                </motion.span>
              </h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Launch full-stack projects or hire us on monthly retainers. Abdul handles React Native/React experiences, Danial powers Django/FastAPI backends—we embed with your team, own delivery, and report on impact every Friday.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-[60%] sm:w-auto mx-auto sm:mx-0"
              >
                <button
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm relative overflow-hidden group"
                >
                  <span className="relative z-10">See availability & rates</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-[60%] sm:w-auto mx-auto sm:mx-0">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full bg-white hover:bg-primary-50 text-primary-600 font-semibold py-2.5 px-5 rounded-lg border-2 border-primary-600 hover:border-primary-700 transition-all duration-300 text-sm"
                >
                  Book a discovery call
                </button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 pt-3 sm:pt-4 md:pt-6 lg:pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-1 sm:mb-2 md:mb-3 lg:mb-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <span className="text-white">{stat.icon}</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg sm:rounded-xl lg:rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative mt-6 sm:mt-8 lg:mt-0 order-first lg:order-last flex justify-center lg:justify-end">
            <motion.div variants={floatingVariants} animate="animate" className="relative">
              <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] 2xl:w-[32rem] mx-auto lg:mx-0">
                <div className="bg-gray-800 rounded-t-xl lg:rounded-t-2xl p-1.5 sm:p-2 shadow-2xl">
                  <div className="flex items-center space-x-1.5 sm:space-x-2 mb-2 sm:mb-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-2 sm:p-3 lg:p-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="text-sm sm:text-base lg:text-lg font-bold">Monthly Partner Dashboard</div>
                        <div className="text-xs sm:text-sm opacity-80">Live metrics</div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4">
                      <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mt-3 sm:mt-4 lg:mt-6">
                        <div className="h-10 sm:h-12 lg:h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
                        <div className="h-10 sm:h-12 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                        <div className="h-10 sm:h-12 lg:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-2 sm:h-3 lg:h-4 bg-gray-700 rounded-b-lg mx-2 sm:mx-3 lg:mx-4 shadow-lg"></div>
              </div>

              <motion.div
                className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 -right-1 sm:-right-2 md:-right-3 lg:-right-4 w-12 sm:w-16 md:w-20 lg:w-24 h-24 sm:h-32 md:h-40 lg:h-48 bg-gray-800 rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 sm:p-1.5 lg:p-2 shadow-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="bg-white rounded-xl lg:rounded-2xl h-full overflow-hidden">
                  <div className="bg-primary-600 p-2 sm:p-2.5 lg:p-3 text-white text-center">
                    <div className="text-xs sm:text-xs lg:text-xs font-bold">Weekly Snapshot</div>
                  </div>
                  <div className="p-2 sm:p-2.5 lg:p-3 space-y-1 sm:space-y-1.5 lg:space-y-2">
                    <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 sm:h-6 lg:h-8 bg-gradient-to-r from-primary-100 to-purple-100 rounded-lg mt-2 sm:mt-3 lg:mt-4"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
