import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        'Up to 5 pages website',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        '1 month free support',
        'Basic analytics setup',
        'Mobile optimization',
        'SSL certificate included'
      ],
      notIncluded: [
        'E-commerce functionality',
        'Advanced animations',
        'Custom integrations',
        'Priority support'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and agencies',
      monthlyPrice: 2499,
      yearlyPrice: 24999,
      features: [
        'Up to 15 pages website',
        'Custom design & branding',
        'Advanced SEO optimization',
        'E-commerce integration',
        '3 months free support',
        'Advanced analytics',
        'CMS integration',
        'Social media integration',
        'Performance optimization',
        'Basic animations',
        'Email marketing setup'
      ],
      notIncluded: [
        'Custom mobile app',
        'Advanced 3D animations',
        'Enterprise integrations'
      ],
      popular: true,
      color: 'from-primary-500 to-primary-600'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      monthlyPrice: 4999,
      yearlyPrice: 49999,
      features: [
        'Unlimited pages',
        'Custom mobile app (React Native)',
        'Advanced 3D animations',
        'Enterprise SEO strategy',
        '6 months free support',
        'Custom integrations',
        'Advanced analytics & reporting',
        'Multi-language support',
        'API development',
        'Cloud infrastructure setup',
        'Security audit & compliance',
        'Dedicated project manager',
        'Priority support (24/7)',
        'Training & documentation'
      ],
      notIncluded: [],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const addOns = [
    {
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application',
      price: 2999,
      icon: '📱'
    },
    {
      name: 'Advanced 3D Animations',
      description: 'Three.js powered interactive elements',
      price: 1299,
      icon: '🎨'
    },
    {
      name: 'E-commerce Integration',
      description: 'Full online store setup',
      price: 899,
      icon: '🛒'
    },
    {
      name: 'SEO Optimization',
      description: 'Advanced search engine optimization',
      price: 599,
      icon: '🔍'
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

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
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
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            💰 Transparent Pricing
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Perfect Plan</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs and budget. 
            All plans include free consultation and 30-day money-back guarantee.
          </motion.p>
          
          {/* Enhanced Billing Toggle */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-semibold transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-primary-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{
                  x: billingCycle === 'yearly' ? 36 : 4
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </motion.button>
            <span className={`font-semibold transition-colors duration-300 ${billingCycle === 'yearly' ? 'text-primary-600' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg"
              >
                Save 20%
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-primary-600' : ''
              }`}>
                <div className={`bg-gradient-to-r ${plan.color} p-8 text-white text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 mb-6">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-white/80 ml-2">
                      {billingCycle === 'monthly' ? '/month' : '/year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-sm text-white/80">
                      ${Math.round(plan.yearlyPrice / 12)}/month billed yearly
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start opacity-50">
                        <span className="text-gray-400 mr-3 mt-1">✗</span>
                        <span className="text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Add-on Services</h3>
            <p className="text-xl text-gray-600">Enhance your project with these additional services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4 text-center">{addon.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h4>
                <p className="text-gray-600 mb-4 text-sm">{addon.description}</p>
                <div className="text-2xl font-bold text-primary-600 mb-4">${addon.price}</div>
                <button className="w-full bg-primary-100 hover:bg-primary-200 text-primary-700 font-semibold py-2 rounded-lg transition-colors duration-200">
                  Add to Project
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">What's included in the support?</h4>
                <p className="text-gray-600">Our support includes bug fixes, minor updates, and technical assistance. We provide documentation and training materials to help you manage your project.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Can I upgrade my plan later?</h4>
                <p className="text-gray-600">Yes! You can upgrade your plan at any time. We'll prorate the difference and ensure a smooth transition to your new plan.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Do you offer custom pricing?</h4>
                <p className="text-gray-600">Absolutely! For large-scale projects or unique requirements, we offer custom pricing. Contact us for a personalized quote.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">What's your refund policy?</h4>
                <p className="text-gray-600">We offer a 30-day money-back guarantee. If you're not satisfied with our work, we'll refund your payment in full.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your project requirements and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg text-lg">
                  Get Free Consultation
                </a>
                <a href="#portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
