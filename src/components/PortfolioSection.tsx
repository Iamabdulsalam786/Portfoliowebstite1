import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Palette, 
  Smartphone, 
  Globe,
  Award,
  Users,
  Star
} from 'lucide-react';
import UltraFast3D from './UltraFast3D';

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = [
    { id: 'all', name: 'All Work', icon: Globe },
    { id: 'web', name: 'Web Apps', icon: Code },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'design', name: 'UI/UX Design', icon: Palette }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      category: "web",
      description: "A cutting-edge e-commerce platform with advanced features including AI-powered recommendations, real-time inventory management, and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      features: ["AI Recommendations", "Real-time Chat", "Advanced Analytics", "Mobile Responsive"],
      stats: { users: "10K+", revenue: "$2M+", rating: 4.9 },
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Real Estate Pro",
      category: "web",
      description: "A comprehensive real estate platform featuring virtual property tours, advanced search filters, and integrated mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "Mapbox", "Three.js"],
      features: ["Virtual Tours", "Map Integration", "Mortgage Calculator", "Agent Portal"],
      stats: { properties: "5K+", agents: "500+", rating: 4.8 },
      liveUrl: "https://realestate-demo.com",
      githubUrl: "https://github.com/username/realestate",
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "Fitness Tracker Pro",
      category: "mobile",
      description: "A comprehensive fitness tracking mobile app with workout plans, nutrition tracking, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
      features: ["Workout Plans", "Nutrition Tracking", "Social Features", "Progress Analytics"],
      stats: { downloads: "50K+", users: "25K+", rating: 4.7 },
      liveUrl: "https://fitness-app-demo.com",
      githubUrl: "https://github.com/username/fitness-app",
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "TaskFlow Manager",
      category: "web",
      description: "A collaborative task management application with real-time updates, team collaboration, and advanced project tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "Express"],
      features: ["Real-time Updates", "Team Collaboration", "Project Tracking", "Time Management"],
      stats: { teams: "1K+", tasks: "100K+", rating: 4.9 },
      liveUrl: "https://taskflow-demo.com",
      githubUrl: "https://github.com/username/taskflow",
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "WeatherCast Pro",
      category: "mobile",
      description: "A beautiful weather application with detailed forecasts, weather maps, and location-based alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["React Native", "Expo", "Weather API", "AsyncStorage"],
      features: ["Detailed Forecasts", "Weather Maps", "Location Alerts", "Offline Mode"],
      stats: { downloads: "30K+", cities: "10K+", rating: 4.6 },
      liveUrl: "https://weathercast-demo.com",
      githubUrl: "https://github.com/username/weathercast",
      featured: false,
      year: "2023"
    },
    {
      id: 6,
      title: "Creative Portfolio",
      category: "design",
      description: "A stunning portfolio website with smooth animations, interactive elements, and modern design principles.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "Framer Motion", "Three.js", "GSAP"],
      features: ["Smooth Animations", "Interactive 3D", "Modern Design", "Performance Optimized"],
      stats: { views: "100K+", bounce: "25%", rating: 4.9 },
      liveUrl: "https://creative-portfolio-demo.com",
      githubUrl: "https://github.com/username/creative-portfolio",
      featured: true,
      year: "2024"
    }
  ];

  const filteredItems = portfolioItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

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
    <section id="portfolio" className="section-padding" style={{ 
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
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
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
              <Award size={16} style={{ marginRight: '8px', color: '#60a5fa' }} />
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#93c5fd' }}>Portfolio Showcase</span>
            </motion.div>
            
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: 'white', 
              margin: 0,
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
              Featured Work
              <span style={{ 
                display: 'block',
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Portfolio Highlights</span>
            </h2>
            
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#cbd5e1', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Explore my portfolio of successful projects that showcase my expertise in 
              modern web development, mobile applications, and user experience design.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div variants={itemVariants} style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '12px', 
            justifyContent: 'center' 
          }}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
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
                  background: selectedCategory === category.id 
                    ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  color: selectedCategory === category.id ? 'white' : '#cbd5e1',
                  backdropFilter: 'blur(10px)',
                  boxShadow: selectedCategory === category.id 
                    ? '0 8px 32px rgba(59, 130, 246, 0.3)' 
                    : '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '24px',
                  border: item.featured 
                    ? '2px solid rgba(59, 130, 246, 0.5)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = item.featured 
                    ? 'rgba(59, 130, 246, 0.5)' 
                    : 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                    zIndex: 10
                  }}>
                    <Star size={14} />
                    <span>Featured</span>
                  </div>
                )}

                {/* Year Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  zIndex: 10
                }}>
                  {item.year}
                </div>

                {/* Project Image */}
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  
                  {/* Overlay with Links */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.7)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <motion.a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        padding: '12px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '50%',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ExternalLink size={20} color="#1f2937" />
                    </motion.a>
                    <motion.a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        padding: '12px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '50%',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Github size={20} color="#1f2937" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '20px' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: 'white', 
                      marginBottom: '8px' 
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ 
                      color: '#cbd5e1', 
                      fontSize: '14px', 
                      lineHeight: '1.5',
                      marginBottom: '16px'
                    }}>
                      {item.description.length > 120 ? item.description.substring(0, 120) + '...' : item.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{ 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      color: '#94a3b8', 
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Technologies
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '4px 10px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            color: '#a5b4fc',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '500',
                            border: '1px solid rgba(99, 102, 241, 0.2)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{ 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      color: '#94a3b8', 
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Key Features
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {item.features.map((feature) => (
                        <span
                          key={feature}
                          style={{
                            padding: '4px 10px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            color: '#6ee7b7',
                            borderRadius: '16px',
                            fontSize: '11px',
                            fontWeight: '500',
                            border: '1px solid rgba(16, 185, 129, 0.2)'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
                        <Users size={16} />
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>
                          {item.stats.users || item.stats.downloads || item.stats.views}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
                        <Star size={16} />
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>
                          {item.stats.rating}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <motion.a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          padding: '8px',
                          color: '#94a3b8',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          padding: '8px',
                          color: '#94a3b8',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
            <motion.a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '16px',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

// Make this file a module
export {};
