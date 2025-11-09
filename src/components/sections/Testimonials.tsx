import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Octahedron, MeshDistortMaterial } from '@react-three/drei';

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Lisa Morgan',
      role: 'Product Director, SwiftCart',
      company: 'SwiftCart',
      image: '👩‍💼',
      rating: 5,
      text: 'Abdul felt like an in-house teammate from week one. Our React Native backlog melted away, velocity doubled, and he even coached our junior engineer. Monthly pricing kept finance happy and communication was world-class.',
      project: 'SwiftCart retail app retainer',
      results: ['2× release velocity', '45% faster QA cycles', 'App rating climbed to 4.8⭐'],
      industry: 'Retail & Commerce'
    },
    {
      id: 2,
      name: 'Zachary Lee',
      role: 'CTO, LedgerLink',
      company: 'LedgerLink',
      image: '👨‍💻',
      rating: 5,
      text: 'Danial rebuilt our Django stack into a modular FastAPI service without downtime. Monitoring, docs, and test coverage all improved. We finally trust our API roadmap—and the monthly engagement keeps planning simple.',
      project: 'API platform modernisation',
      results: ['99.95% uptime', '60% faster endpoints', 'Full test automation'],
      industry: 'Fintech'
    },
    {
      id: 3,
      name: 'Priya Nair',
      role: 'Founder, LiveLoop',
      company: 'LiveLoop',
      image: '👩‍🚀',
      rating: 5,
      text: 'Pairing Abdul and Danial gave us a mini product squad. They owned roadmap planning, shipped TipTok-style live commerce features, and reported on metrics every Friday. Exactly the kind of partnership an early-stage team needs.',
      project: 'Live streaming commerce MVP',
      results: ['4-week MVP launch', 'Stable live streaming at 35K DAU', 'Investors impressed with velocity'],
      industry: 'Creator Economy'
    }
  ];

  const caseStudies = [
    {
      title: 'SwiftCart Mobile Acceleration',
      client: 'SwiftCart',
      challenge: 'Stalled mobile roadmap and mounting technical debt across the React Native codebase.',
      solution: 'Abdul led weekly release trains, refactored navigation and state management, and introduced automated store deployment scripts.',
      results: [
        { metric: 'Sprint Throughput', before: '12 pts', after: '26 pts', improvement: '+116%' },
        { metric: 'Crash Free Sessions', before: '94%', after: '99.3%', improvement: '+5.3pp' },
        { metric: 'Team Satisfaction', before: '3.1/5', after: '4.7/5', improvement: '+51%' }
      ],
      technologies: ['React Native', 'TypeScript', 'Expo EAS', 'Firebase', 'Segment'],
      duration: '4 months ongoing',
      team: 'Abdul Salam + client PM'
    },
    {
      title: 'LedgerLink Platform Re-architecture',
      client: 'LedgerLink',
      challenge: 'Monolithic Django app struggling with performance, compliance, and partner integrations.',
      solution: 'Danial introduced FastAPI services, automated testing, and Terraform-based infra pipelines with observability baked in.',
      results: [
        { metric: 'API Latency (P95)', before: '1.8s', after: '420ms', improvement: '-76%' },
        { metric: 'Deployment Frequency', before: 'Monthly', after: 'Twice weekly', improvement: '+8×' },
        { metric: 'Audit Findings', before: '7 critical issues', after: '0 critical issues', improvement: 'Risk cleared' }
      ],
      technologies: ['Django', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS Fargate'],
      duration: '3 months ongoing',
      team: 'Danial Qais + client QA'
    }
  ];

  const AnimatedOctahedron = () => (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={2} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Octahedron args={[1]} scale={1.5}>
        <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.4} speed={1.2} roughness={0} />
      </Octahedron>
    </Canvas>
  );

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Retainer <span className="text-primary-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from product leaders who hired Abdul Salam and Danial Qais on monthly retainers to level up their teams.
          </p>
        </div>

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
                    “{testimonials[activeTestimonial].text}”
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Engagement Snapshot</h4>
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

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Client Feedback</h3>
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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">“{testimonial.text.substring(0, 125)}...”</p>
                <div className="text-xs text-gray-500">
                  {testimonial.industry} • {testimonial.project}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Case Studies</h3>
            <p className="text-xl text-gray-600">Real metrics from live retainers with Abdul and Danial</p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Challenge</h5>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Solution</h5>
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
                    <h5 className="font-semibold text-gray-700 mb-4">Results</h5>
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

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Teams We Partner With</h3>
            <p className="text-xl text-gray-600">From venture-backed startups to profitable scale-ups</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {['SwiftCart', 'LedgerLink', 'LiveLoop', 'PulseHealth', 'NovaPay', 'CreatorCo'].map((company, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl font-bold text-gray-700">{company}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-4">Need similar outcomes?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Share your backlog and KPIs—we’ll outline how Abdul and Danial can integrate with your team and what month one will deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg text-lg">
                Book a discovery call
              </a>
              <a href="#portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                Review portfolio case files
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
