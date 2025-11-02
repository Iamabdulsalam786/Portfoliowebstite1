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
      title: 'MakComms - BPO Solutions Platform',
      category: 'web',
      description: 'Comprehensive BPO and customer service solutions platform featuring call center services, email support, live chat, and virtual assistance services.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'SaaS'],
      liveUrl: 'https://makcomms.net/',
      githubUrl: '#',
      featured: true,
      results: ['96% client retention rate', '10+ years experience', 'Elite CX solutions'],
      client: 'MakComms',
      duration: '3 months',
      team: '4 developers',
      challenge: 'Building scalable BPO platform with multiple service integrations',
      solution: 'Implemented modular architecture with real-time communication features'
    },
    {
      id: 2,
      title: 'Lifeline Modern Family Clinic',
      category: 'web',
      description: 'Multispecialty outpatient facility in Dubai with a modern, patient-friendly website and clear information architecture.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop',
      technologies: ['React', 'Next.js', 'TailwindCSS'],
      liveUrl: 'https://modernfamilymedicalcentre.com/',
      githubUrl: '#',
      featured: true,
      results: ['Improved patient inquiries', 'Clear navigation', 'Responsive across devices'],
      client: 'Lifeline Modern Family Clinic',
      duration: '1 month',
      team: '2 developers',
      challenge: 'Designing a fast, accessible clinic website with clear services and booking paths',
      solution: 'Implemented clean IA, responsive UI, and performance optimizations'
    },
    {
      id: 3,
      title: 'Ruffians — Award‑Winning Barbers',
      category: 'web',
      description: 'Modern barbershop website with online booking, clear services, and strong brand aesthetic.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      technologies: ['Next.js', 'TailwindCSS'],
      liveUrl: 'https://ruffians.co.uk/',
      githubUrl: '#',
      featured: true,
      results: ['Faster bookings', 'Mobile-first experience'],
      client: 'Ruffians',
      duration: '2 weeks',
      team: '2 developers',
      challenge: 'Create a quick booking path with modern UX',
      solution: 'Clean IA, sticky CTAs, and performant UI'
    },
    {
      id: 4,
      title: "Dudley’s NYC — Menu",
      category: 'web',
      description: 'Contemporary cafe/restaurant experience with a clean, fast menu and polished mobile UX.',
      image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&q=80',
      technologies: ['React', 'Next.js'],
      liveUrl: 'https://www.dudleysnyc.com/menu/',
      githubUrl: '#',
      featured: false,
      results: ['Clear menu access', 'Strong mobile usability'],
      client: "Dudley’s NYC",
      duration: '2 weeks',
      team: '2 developers',
      challenge: 'Make browsing menu effortless on mobile',
      solution: 'Minimal layout, optimized assets, and accessible typography'
    },
    {
      id: 5,
      title: 'Neem London',
      category: 'web',
      description: 'Sustainable menswear with modern, clean shopping.',
      image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&h=400&fit=crop',
      technologies: ['Shopify'],
      liveUrl: 'https://neemlondon.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clean product UX', 'Mobile-first'],
      client: 'Neem London',
      duration: '3 weeks',
      team: '2 developers',
      challenge: 'Deliver elegant ecommerce UX for a boutique brand',
      solution: 'Minimal UI, fast pages, and clear information hierarchy'
    },
    {
      id: 6,
      title: 'Tatte Bakery & Cafe',
      category: 'web',
      description: 'Modern bakery site with clear menus, locations, and a refined brand aesthetic.',
      image: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=1200&q=80',
      technologies: ['Next.js', 'TailwindCSS'],
      liveUrl: 'https://tattebakery.com/',
      githubUrl: '#',
      featured: true,
      results: ['Clear menu browsing', 'Strong mobile UX'],
      client: 'Tatte Bakery & Cafe',
      duration: '3 weeks',
      team: '2 developers',
      challenge: 'Present extensive menu and locations with fast UX',
      solution: 'Optimized navigation and mobile-first layout'
    },
    {
      id: 7,
      title: 'Chatters MBS - Business Solutions',
      category: 'web',
      description: 'Modern business solutions website showcasing services for SMBs with responsive design and clean UI.',
      image: 'https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=600&h=400&fit=crop',
      technologies: ['React', 'TailwindCSS', 'TypeScript'],
      liveUrl: 'https://www.chattersmbs.com/',
      githubUrl: '#',
      featured: true,
      results: ['Improved lead conversions', 'Faster load times', 'Responsive across devices'],
      client: 'Chatters MBS',
      duration: '1 month',
      team: '2 developers',
      challenge: 'Building a fast, responsive marketing site with clear service presentation',
      solution: 'Implemented optimized React components with Tailwind and accessibility best practices'
    },
    {
      id: 8,
      title: 'Dani Diamond — Photographer',
      category: 'portfolio',
      description: 'Modern photographer portfolio with editorial presentation and smooth browsing.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
      technologies: ['Next.js'],
      liveUrl: 'https://www.danidiamond.com/',
      githubUrl: '#',
      featured: false,
      results: ['Elegant portfolio UX', 'Fast navigation'],
      client: 'Dani Diamond',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Showcase high-res imagery without sacrificing performance',
      solution: 'Image optimization and minimal UI'
    },
    {
      id: 9,
      title: 'Glow Beauty Labs',
      category: 'web',
      description: 'Contemporary skincare brand site with clean visuals and product clarity.',
      image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['Shopify', 'Next.js'],
      liveUrl: 'https://glowbeautylabs.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear PDPs', 'Smooth mobile checkout'],
      client: 'Glow Beauty Labs',
      duration: '3 weeks',
      team: '2 developers',
      challenge: 'Deliver clean ecommerce experience for skincare',
      solution: 'Minimal product pages and fast navigation'
    },
    {
      id: 10,
      title: 'Radiant Skin Richmond Hill',
      category: 'web',
      description: 'Clinic website with modern UI, clear services, and easy contact options.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80',
      technologies: ['React'],
      liveUrl: 'https://radiantskinrichmondhill.com/',
      githubUrl: '#',
      featured: false,
      results: ['Improved inquiries', 'Accessible navigation'],
      client: 'Radiant Skin Richmond Hill',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Communicate treatments and contact paths clearly',
      solution: 'Clear IA and responsive design'
    },
    {
      id: 11,
      title: 'Strategic Muscle Systems',
      category: 'web',
      description: 'Performance and rehab training site with focused service paths and booking.',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80',
      technologies: ['Next.js'],
      liveUrl: 'https://www.strategicmusclesystems.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear service flow', 'Mobile booking'],
      client: 'Strategic Muscle Systems',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Guide users from services to booking quickly',
      solution: 'CTA-forward layout and concise content'
    },
    {
      id: 12,
      title: 'Rumble Boxing',
      category: 'web',
      description: 'Boutique boxing gym with modern visuals, class schedules, and sign-up flow.',
      image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=1200&q=80',
      technologies: ['React'],
      liveUrl: 'https://www.rumbleboxinggym.com/',
      githubUrl: '#',
      featured: false,
      results: ['Fast class discovery', 'Conversion-focused CTAs'],
      client: 'Rumble Boxing',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Encourage class sign-ups on mobile',
      solution: 'Sticky CTAs and streamlined schedule UX'
    },
    {
      id: 13,
      title: 'CorePower Yoga',
      category: 'web',
      description: 'Yoga studio chain with modern class discovery and membership flows.',
      image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop',
      technologies: ['React'],
      liveUrl: 'https://www.corepoweryoga.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear class schedules', 'Mobile-first design'],
      client: 'CorePower Yoga',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Provide quick access to schedules and memberships',
      solution: 'Focused navigation and performance tuning'
    },
    {
      id: 14,
      title: 'Bluebella',
      category: 'web',
      description: 'Lingerie & nightwear with elegant, mobile-first UX.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
      technologies: ['Shopify'],
      liveUrl: 'https://www.bluebella.eu/',
      githubUrl: '#',
      featured: false,
      results: ['Clean product UX', 'Mobile-first'],
      client: 'Bluebella',
      duration: '3 weeks',
      team: '2 developers',
      challenge: 'Deliver a refined browsing and checkout flow for an apparel brand with diverse collections and sizing.',
      solution: 'Implemented clean navigation, optimized images, and accessible PDP layouts to streamline product discovery and conversion.'
    },
    {
      id: 15,
      title: 'Kapas Beauty Spa',
      category: 'web',
      description: 'Modern beauty spa website with clear services, pricing, and easy booking.',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['WordPress'],
      liveUrl: 'https://kapasbeautyspa.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear services', 'Easy booking'],
      client: 'Kapas Beauty Spa',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Present treatments and booking paths in a clean, mobile-first layout.',
      solution: 'Structured IA with concise sections and prominent CTAs.'
    },
    {
      id: 16,
      title: 'Dr. Lara Devgan — Plastic Surgeon',
      category: 'portfolio',
      description: 'Personal clinic portfolio with procedures, results, and patient resources.',
      image: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      technologies: ['WordPress'],
      liveUrl: 'https://laradevganmd.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear procedures', 'Trust-focused content'],
      client: 'Dr. Lara Devgan',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Showcase services and outcomes with clear navigation.',
      solution: 'Structured pages with concise CTAs and resources.'
    },
    {
      id: 17,
      title: 'Dr. Khuong Nguyen — DDS',
      category: 'portfolio',
      description: 'Dentist portfolio with services, insurance info, and easy appointments.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['WordPress'],
      liveUrl: 'https://smileinla.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear services', 'Appointment clarity'],
      client: 'Dr. Khuong Nguyen',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Make services and booking clear on mobile.',
      solution: 'Simple IA, visible CTAs, and performance tuning.'
    },
    {
      id: 18,
      title: 'Dr. Daniel Barrett — Plastic Surgeon',
      category: 'portfolio',
      description: 'Personal surgeon site with treatments, gallery, and consult booking.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['WordPress'],
      liveUrl: 'https://drdanielbarrett.com/',
      githubUrl: '#',
      featured: false,
      results: ['Treatment clarity', 'Consult booking'],
      client: 'Dr. Daniel Barrett',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Balance education with conversion.',
      solution: 'Clean layout with strong CTAs.'
    },
    {
      id: 19,
      title: 'Nedra Glover Tawwab — Therapist',
      category: 'portfolio',
      description: 'Therapist portfolio with services, resources, and speaking info.',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['Squarespace'],
      liveUrl: 'https://www.nedratawwab.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear services', 'Resource hub'],
      client: 'Nedra Glover Tawwab',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Communicate services and brand clearly.',
      solution: 'Minimal copy with structured navigation.'
    },
    {
      id: 20,
      title: 'Cal Newport — Professor/Author',
      category: 'portfolio',
      description: 'Academic portfolio with writing, books, and newsletter sign-up.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['WordPress'],
      liveUrl: 'https://www.calnewport.com/',
      githubUrl: '#',
      featured: false,
      results: ['Readable posts', 'Newsletter growth'],
      client: 'Cal Newport',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Keep content accessible and fast.',
      solution: 'Clean typography-first layout.'
    },
    {
      id: 21,
      title: 'Amy Porterfield — Consultant',
      category: 'portfolio',
      description: 'Consultant portfolio with courses, podcast, and lead funnels.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['WordPress'],
      liveUrl: 'https://www.amyporterfield.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear offerings', 'Lead capture'],
      client: 'Amy Porterfield',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Guide users to the right offerings quickly.',
      solution: 'Simple nav and prominent CTAs.'
    },
    {
      id: 22,
      title: 'Ali Abdaal — Educator',
      category: 'portfolio',
      description: 'Doctor-turned-educator with courses, blog, and resources.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['Next.js'],
      liveUrl: 'https://aliabdaal.com/',
      githubUrl: '#',
      featured: false,
      results: ['Readable content', 'Clear course paths'],
      client: 'Ali Abdaal',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Organize educational content clearly.',
      solution: 'Clean IA and performance-focused pages.'
    },
    {
      id: 23,
      title: 'Esther Perel — Therapist',
      category: 'portfolio',
      description: 'Therapist portfolio with speaking, podcast, and resources.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['WordPress'],
      liveUrl: 'https://www.estherperel.com/',
      githubUrl: '#',
      featured: false,
      results: ['Clear navigation', 'Resource library'],
      client: 'Esther Perel',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Balance brand, content, and navigation.',
      solution: 'Minimal layout with strong content hierarchy.'
    },
    {
      id: 24,
      title: 'Thomas Frank — Educator',
      category: 'portfolio',
      description: 'Educator portfolio with videos, guides, and newsletter.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['Gatsby'],
      liveUrl: 'https://www.thomasjfrank.com/',
      githubUrl: '#',
      featured: false,
      results: ['Fast reading', 'Clear content paths'],
      client: 'Thomas Frank',
      duration: '2 weeks',
      team: '1 developer',
      challenge: 'Keep content structured and quick to browse.',
      solution: 'Typography-first with clear cards.'
    },
    {
      id: 25,
      title: 'Derek Sivers — Author',
      category: 'portfolio',
      description: 'Author portfolio with essays, books, and ideas.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['Custom'],
      liveUrl: 'https://sive.rs/',
      githubUrl: '#',
      featured: false,
      results: ['Ultra-fast', 'Minimal UX'],
      client: 'Derek Sivers',
      duration: '1 week',
      team: '1 developer',
      challenge: 'Make reading and discovery effortless.',
      solution: 'Plain, minimal pages with instant navigation.'
    },
    {
      id: 26,
      title: 'James Clear — Author',
      category: 'portfolio',
      description: 'Author portfolio with articles, newsletter, and books.',
      image: 'https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=format&fit=crop&w=600&h=400&q=70',
      technologies: ['Custom'],
      liveUrl: 'https://jamesclear.com/',
      githubUrl: '#',
      featured: false,
      results: ['Readable essays', 'Newsletter growth'],
      client: 'James Clear',
      duration: '1 week',
      team: '1 developer',
      challenge: 'Make reading and signup effortless.',
      solution: 'Minimal layout, fast pages, clear CTAs.'
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
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: '25px 25px',
          backgroundPosition: '0 0, 12px 12px'
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
            🎯 Our Portfolio
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Showcasing <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Excellence</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Discover our innovative solutions that have transformed businesses and delighted users worldwide. 
            Each project tells a story of innovation, creativity, and measurable results.
          </motion.p>
          
          {/* Enhanced Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm ${
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.onerror = null;
                      t.src = 'https://placehold.co/600x400?text=Project+Image';
                    }}
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
                <div className="p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors min-h-[32px] sm:min-h-[36px]">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed min-h-[56px] sm:min-h-[60px]">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Results */}
                  <div className="mb-6 min-h-[40px]">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-green-600 mb-2">
                        <span className="mr-2 text-sm">✓</span>
                        <span className="text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-primary-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.liveUrl && project.liveUrl !== '#') {
                          window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                        }
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
                      Get in touch
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
                  Get in touch
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
