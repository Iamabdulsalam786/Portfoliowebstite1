import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Icosahedron, MeshDistortMaterial } from '@react-three/drei';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const projectTypes = [
    'Hire Abdul Salam (React Native / React)',
    'Hire Danial Qais (Django / FastAPI)',
    'Book both developers (Squad retainer)',
    'Discovery sprint / roadmap audit',
    'Tech due diligence',
    'Other'
  ];

  const budgetRanges = [
    '$600 / month (Part-time developer)',
    '$1,500 / month (Full-time developer)',
    '$1,950 / month (Core duo 40 hrs)',
    '$2,750 / month (Core duo 60 hrs)',
    'Custom / not sure yet'
  ];

  const timelines = [
    'Ready to start within 7 days',
    'Kicking off next month',
    'Planning 2-3 months ahead',
    'Exploring options / flexible'
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const AnimatedIcosahedron = () => (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={1.8} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Icosahedron args={[1]} scale={1.2}>
        <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.3} speed={1.5} roughness={0} />
      </Icosahedron>
    </Canvas>
  );

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Book your <span className="text-primary-600">monthly slot</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your roadmap and we’ll confirm availability, kick-off timing, and an onboarding plan tailored to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Reserve a discovery call</h3>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="font-semibold">Thanks! We’ll respond within one business day.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="font-semibold">Something went wrong. Please try again.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    {...register('projectType', { required: 'Please select a project type' })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.projectType.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Timeline
                </label>
                <select
                  {...register('timeline')}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  {...register('message', { required: 'Please describe your project' })}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-2.5 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed text-xs sm:text-sm lg:text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 border-b-2 border-white mr-1 sm:mr-2"></div>
                    <span className="text-xs sm:text-sm lg:text-base">Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-primary-600 text-lg sm:text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Office Address</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      123 Innovation Drive<br />
                      Tech District, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-primary-600 text-lg sm:text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 text-sm sm:text-base">+1 (555) 123-4567</p>
                    <p className="text-xs sm:text-sm text-gray-500">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-primary-600 text-lg sm:text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base">hello@techcraft.com</p>
                    <p className="text-xs sm:text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <span className="text-primary-600 text-lg sm:text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Live Chat</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Available on our website</p>
                    <p className="text-xs sm:text-sm text-gray-500">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Animation */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-4 sm:p-6 lg:p-8 h-48 sm:h-56 lg:h-64 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                <AnimatedIcosahedron />
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 sm:p-6 text-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">⚡</span>
                <h4 className="text-lg sm:text-xl font-bold">Quick Response Promise</h4>
              </div>
              <p className="text-green-100 text-sm sm:text-base">
                We guarantee a response within 24 hours. For urgent projects,
                mention "URGENT" in your message and we'll prioritize your inquiry.
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 sm:flex sm:space-x-4 gap-3 sm:gap-0">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white p-2 sm:p-3 rounded-lg transition-colors duration-200 text-center text-sm sm:text-base">
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-lg transition-colors duration-200 text-center text-sm sm:text-base">
                  GitHub
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white p-2 sm:p-3 rounded-lg transition-colors duration-200 text-center text-sm sm:text-base">
                  Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-600 text-white p-2 sm:p-3 rounded-lg transition-colors duration-200 text-center text-sm sm:text-base">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
