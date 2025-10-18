import React, { useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const projects = [
    {
      id: 1,
      title: 'EcoMart - Sustainable E-commerce Platform',
      category: 'web',
      description: 'A comprehensive e-commerce platform for sustainable products with advanced filtering, real-time inventory, and carbon footprint tracking.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Three.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      results: ['300% increase in conversions', '50% reduction in cart abandonment', '4.9/5 user rating'],
      client: 'EcoMart Inc.',
      duration: '4 months',
      team: '5 developers',
      challenge: 'Building a scalable e-commerce platform with real-time carbon tracking',
      solution: 'Implemented microservices architecture with real-time data processing'
    },
    {
      id: 2,
      title: 'HealthTracker Pro - Mobile Health App',
      category: 'mobile',
      description: 'Cross-platform health tracking app with AI-powered insights, wearable integration, and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      results: ['100K+ downloads', '4.8/5 App Store rating', '95% user retention'],
      client: 'HealthTech Solutions',
      duration: '6 months',
      team: '4 developers',
      challenge: 'Creating seamless cross-platform experience with real-time health monitoring',
      solution: 'Built hybrid app with native performance and real-time sync capabilities'
    },
    {
      id: 3,
      title: 'CreativeStudio - Portfolio Showcase',
      category: 'portfolio',
      description: 'Stunning portfolio website for a creative agency with interactive 3D elements, smooth animations, and CMS integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Three.js', 'Framer Motion', 'Sanity CMS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      results: ['200% increase in inquiries', '60% longer session duration', 'Award-winning design'],
      client: 'CreativeStudio Agency',
      duration: '2 months',
      team: '3 developers',
      challenge: 'Creating an immersive portfolio experience that stands out',
      solution: 'Implemented 3D animations with smooth performance optimization'
    },
    {
      id: 4,
      title: 'FinTech Dashboard - Analytics Platform',
      category: 'web',
      description: 'Real-time financial analytics dashboard with advanced data visualization, predictive modeling, and secure API integration.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      results: ['99.9% uptime', '50% faster data processing', 'Enterprise security certified'],
      client: 'FinTech Corp',
      duration: '5 months',
      team: '6 developers',
      challenge: 'Building secure real-time financial analytics with predictive modeling',
      solution: 'Implemented advanced data visualization with enterprise-grade security'
    },
    {
      id: 5,
      title: 'FitLife - Social Fitness App',
      category: 'mobile',
      description: 'Social fitness app with workout tracking, community features, and AR-powered exercise guidance.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'ARCore', 'Firebase', 'Machine Learning'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      results: ['500K+ active users', '4.7/5 rating', 'Featured in App Store'],
      client: 'FitLife Inc.',
      duration: '8 months',
      team: '5 developers',
      challenge: 'Creating engaging social fitness experience with AR technology',
      solution: 'Built cross-platform app with AR-powered workout guidance'
    },
    {
      id: 6,
      title: 'Artisan Gallery - Digital Art Platform',
      category: 'portfolio',
      description: 'Premium digital art gallery with NFT integration, virtual exhibitions, and blockchain authentication.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop',
      technologies: ['React', 'Web3', 'IPFS', 'Ethereum', 'Three.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      results: ['$2M+ in NFT sales', '10K+ artists onboarded', 'Blockchain verified'],
      client: 'Artisan Gallery',
      duration: '6 months',
      team: '4 developers',
      challenge: 'Building secure NFT marketplace with virtual exhibitions',
      solution: 'Implemented Web3 integration with immersive 3D gallery experience'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'portfolio', label: 'Portfolio Sites' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px'
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
            🎯 Our Portfolio
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Showcasing <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Excellence</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our innovative solutions that have transformed businesses and delighted users worldwide. 
            Each project tells a story of innovation, creativity, and measurable results.
          </motion.p>
          
          {/* Enhanced Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:border-primary-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category === 'web' ? '🌐 Web' : 
                       project.category === 'mobile' ? '📱 Mobile' : '🎨 Portfolio'}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">👁️</div>
                      <div className="text-sm font-semibold">View Details</div>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                    <div>
                      <div className="text-gray-500">Client</div>
                      <div className="font-semibold text-gray-900">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{project.duration}</div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Results */}
                  <div className="space-y-1 mb-4">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-green-600">
                        <span className="mr-2 text-xs">✓</span>
                        <span className="text-xs font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-primary-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle view live action
                      }}
                    >
                      View Live
                    </motion.button>
                    <motion.button
                      className="flex-1 border border-primary-600 text-primary-600 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project.id);
                      }}
                    >
                      Details
                    </motion.button>
                  </div>
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
                Ready to Create Something Amazing?
              </motion.h3>
              
              <motion.p
                className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Let's bring your vision to life with cutting-edge technology and innovative design. 
                Get a free consultation and discover how we can transform your business.
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
                  Start Your Project
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  View Pricing
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

export default Portfolio;
