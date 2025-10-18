import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Octahedron, MeshDistortMaterial } from '@react-three/drei';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'CEO, EcoMart',
      company: 'EcoMart',
      image: '👩‍💼',
      rating: 5,
      text: 'TechCraft transformed our e-commerce platform completely. The new design increased our conversions by 300% and the user experience is absolutely phenomenal. Their attention to detail and innovative approach exceeded all our expectations.',
      project: 'E-commerce Platform Redesign',
      results: ['300% increase in conversions', '50% reduction in cart abandonment', '4.9/5 user satisfaction'],
      industry: 'E-commerce'
    },
    {
      id: 2,
      name: 'Dr. Michael Thompson',
      role: 'Founder, HealthTracker Pro',
      company: 'HealthTracker Pro',
      image: '👨‍⚕️',
      rating: 5,
      text: 'Working with TechCraft was a game-changer for our health app. They delivered a cross-platform solution that our users love. The AI integration and real-time features work flawlessly. Highly recommend their expertise.',
      project: 'Mobile Health App Development',
      results: ['100K+ downloads', '4.8/5 App Store rating', '95% user retention'],
      industry: 'Healthcare'
    },
    {
      id: 3,
      name: 'Sarah Williams',
      role: 'Creative Director, Artisan Gallery',
      company: 'Artisan Gallery',
      image: '👩‍🎨',
      rating: 5,
      text: 'The NFT integration and 3D gallery features TechCraft built for us are incredible. Our artists love the platform and we\'ve seen $2M+ in sales. Their understanding of both technology and art is remarkable.',
      project: 'Digital Art Platform with NFT Integration',
      results: ['$2M+ in NFT sales', '10K+ artists onboarded', 'Blockchain verified'],
      industry: 'Digital Art'
    },
    {
      id: 4,
      name: 'Robert Chen',
      role: 'CTO, FinTech Solutions',
      company: 'FinTech Solutions',
      image: '👨‍💻',
      rating: 5,
      text: 'The financial dashboard TechCraft created for us is outstanding. Real-time analytics, predictive modeling, and enterprise-grade security. They delivered exactly what we needed and more.',
      project: 'Financial Analytics Dashboard',
      results: ['99.9% uptime', '50% faster data processing', 'Enterprise security certified'],
      industry: 'FinTech'
    },
    {
      id: 5,
      name: 'Amanda Rodriguez',
      role: 'Marketing Director, FitLife',
      company: 'FitLife',
      image: '👩‍💪',
      rating: 5,
      text: 'Our fitness app has become a community favorite thanks to TechCraft\'s innovative approach. The AR features and social integration are exactly what our users wanted. Outstanding work!',
      project: 'Social Fitness App with AR Features',
      results: ['500K+ active users', '4.7/5 rating', 'Featured in App Store'],
      industry: 'Fitness'
    }
  ];

  const caseStudies = [
    {
      title: 'EcoMart E-commerce Transformation',
      client: 'EcoMart',
      challenge: 'Low conversion rates and poor user experience on existing platform',
      solution: 'Complete redesign with modern UI/UX, advanced filtering, and carbon footprint tracking',
      results: [
        { metric: 'Conversion Rate', before: '2.1%', after: '8.4%', improvement: '+300%' },
        { metric: 'Cart Abandonment', before: '68%', after: '34%', improvement: '-50%' },
        { metric: 'User Satisfaction', before: '3.2/5', after: '4.9/5', improvement: '+53%' }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Three.js'],
      duration: '12 weeks',
      team: '5 developers'
    },
    {
      title: 'HealthTracker Pro Mobile App',
      client: 'HealthTracker Pro',
      challenge: 'Need for cross-platform health tracking with AI insights',
      solution: 'React Native app with TensorFlow integration, wearable sync, and telemedicine features',
      results: [
        { metric: 'App Downloads', before: '0', after: '100K+', improvement: 'New Launch' },
        { metric: 'App Store Rating', before: 'N/A', after: '4.8/5', improvement: 'Excellent' },
        { metric: 'User Retention', before: 'N/A', after: '95%', improvement: 'Outstanding' }
      ],
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'WebRTC'],
      duration: '16 weeks',
      team: '4 developers'
    }
  ];

  const AnimatedOctahedron = () => (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={2} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Octahedron args={[1]} scale={1.5}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={1.2}
          roughness={0}
        />
      </Octahedron>
    </Canvas>
  );

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="text-primary-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients and discover how we've helped transform their businesses
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-8 right-8 w-32 h-32 opacity-20">
              <AnimatedOctahedron />
            </div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-6">{testimonials[activeTestimonial].image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h3>
                      <p className="text-primary-600 font-semibold">{testimonials[activeTestimonial].role}</p>
                      <p className="text-gray-600">{testimonials[activeTestimonial].company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                  <div className="space-y-2">
                    {testimonials[activeTestimonial].results.map((result, index) => (
                      <div key={index} className="flex items-center text-green-600">
                        <span className="mr-2">✓</span>
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Project Details</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Project:</span>
                      <span className="ml-2 text-gray-600">{testimonials[activeTestimonial].project}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Industry:</span>
                      <span className="ml-2 text-gray-600">{testimonials[activeTestimonial].industry}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Rating:</span>
                      <span className="ml-2 text-gray-600">{testimonials[activeTestimonial].rating}/5 stars</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-primary-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-primary-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
                <div className="text-xs text-gray-500">
                  {testimonial.industry} • {testimonial.project}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-xl text-gray-600">Detailed case studies showcasing our impact</p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Challenge:</h5>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Solution:</h5>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-4">Results:</h5>
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">{result.metric}</span>
                            <span className="text-green-600 font-bold">{result.improvement}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>Before: {result.before}</span>
                            <span>After: {result.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4 text-sm text-gray-600">
                      <span>Duration: {study.duration}</span>
                      <span>Team: {study.team}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-xl text-gray-600">We're proud to work with companies across various industries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['EcoMart', 'HealthTracker', 'Artisan Gallery', 'FinTech Solutions', 'FitLife', 'Creative Studio'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl font-bold text-gray-700">{company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create your success story together. Get in touch for a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg text-lg">
                Start Your Project
              </a>
              <a href="#portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                View More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
