import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Pricing: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const developerPlans = [
    {
      name: 'Abdul Salam',
      role: 'Senior React Native & React Developer',
      bio: 'Ships polished mobile and web apps with realtime UX, performance-first architecture, and production store deployments.',
      avatar: 'AS',
      color: 'from-primary-500 to-purple-500',
      experience: '8 years shipping React stacks',
      stack: ['React Native & Expo', 'React / Next.js', 'Realtime streaming', 'TypeScript & GraphQL'],
      industries: ['Commerce', 'Creator economy', 'SaaS', 'Marketplace'],
      rates: [
        {
          label: 'Part-time',
          subLabel: '20 hrs / week',
          price: '$600',
          cadence: 'per month',
          idealFor: 'Feature pods, MVP acceleration, code reviews',
          inclusions: ['Daily async updates', 'Shared Slack + Notion', 'Release train planning']
        },
        {
          label: 'Full-time',
          subLabel: '40 hrs / week',
          price: '$1,500',
          cadence: 'per month',
          idealFor: 'Full product ownership, rapid iteration, ongoing launches',
          inclusions: ['Dedicated sprint ceremonies', 'CI/CD ownership', 'Design handoff collaboration']
        }
      ]
    },
    {
      name: 'Danial Qais',
      role: 'Backend Engineer • Django & FastAPI',
      bio: 'Designs and maintains robust APIs, background workers, and infrastructure that keep mission-critical products fast and reliable.',
      avatar: 'DQ',
      color: 'from-blue-500 to-indigo-500',
      experience: '7 years building scalable services',
      stack: ['Django & DRF', 'FastAPI microservices', 'PostgreSQL & Redis', 'AWS, Docker & Terraform'],
      industries: ['Fintech', 'Healthtech', 'Marketplaces', 'Ops tooling'],
      rates: [
        {
          label: 'Part-time',
          subLabel: '20 hrs / week',
          price: '$600',
          cadence: 'per month',
          idealFor: 'Integrations, API extensions, analytics pipelines',
          inclusions: ['Error monitoring setup', 'Automated tests & docs', 'Security & compliance reviews']
        },
        {
          label: 'Full-time',
          subLabel: '40 hrs / week',
          price: '$1,500',
          cadence: 'per month',
          idealFor: 'Platform ownership, new product builds, migrations',
          inclusions: ['Infra & scaling strategy', 'Observability dashboards', 'Performance tuning & SLO tracking']
        }
      ]
    }
  ];

  const sharedBenefits = [
    {
      icon: '🗓️',
      title: 'Flexible starts',
      description: 'Kick-off within 7 days. Pause or scale with one-week notice — no long-term lock-ins.'
    },
    {
      icon: '🧠',
      title: 'Product brain included',
      description: 'Strategy support for roadmap planning, backlog grooming, and measurement.'
    },
    {
      icon: '🔐',
      title: 'Secure delivery',
      description: 'Verified GitHub access, NDA-ready, and SOC2-conscious workflows.'
    }
  ];

  const addOns = [
    {
      name: 'Two-week Discovery Sprint',
      description: 'Deep dive to clarify scope, success metrics, and technical plan before coding begins.',
      price: '$450',
      icon: '🧭'
    },
    {
      name: 'QA & Release Management',
      description: 'Manual + automated QA suites, regression tracking, and App Store / Play Store submissions.',
      price: '$300',
      icon: '✅'
    },
    {
      name: 'Product Design Support',
      description: 'Access to our design partner for UI audits, Figma handoffs, and component libraries.',
      price: '$500',
      icon: '🎨'
    },
    {
      name: 'Ops & Analytics Setup',
      description: 'Mixpanel/Segment instrumentation, dashboards, and weekly insight reviews.',
      price: '$250',
      icon: '📊'
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
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 25px 25px'
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            💼 Monthly Partnerships
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Dedicated Developer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Plug an experienced React Native or backend engineer straight into your team. Predictable pricing, deep product collaboration, and transparent delivery from week one.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {developerPlans.map((plan, index) => (
            <div key={index} className="relative">
              <div className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent`}
                style={{ borderImage: `linear-gradient(to right, #3b82f6, #a855f7) 1` }}
              >
                <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-white/80">{plan.role}</p>
                    </div>
                    <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold">
                      {plan.avatar}
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed">{plan.bio}</p>
                  <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-white/80">
                    <div>
                      <div className="font-semibold text-white">Experience</div>
                      <div>{plan.experience}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Industries</div>
                      <div>{plan.industries.join(', ')}</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">Core Toolkit</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.stack.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {plan.rates.map((rate, rateIndex) => (
                      <div key={rateIndex} className="border border-primary-100 rounded-xl p-5 bg-primary-50/40">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-sm font-semibold text-primary-600 uppercase">{rate.label}</div>
                            <div className="text-xs text-gray-500">{rate.subLabel}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary-700">{rate.price}</div>
                            <div className="text-xs text-gray-500">{rate.cadence}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{rate.idealFor}</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {rate.inclusions.map((inclusion, inclusionIndex) => (
                            <li key={inclusionIndex} className="flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              {inclusion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl">
                    Reserve {plan.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {sharedBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Enhance Your Engagement</h3>
            <p className="text-xl text-gray-600">Optional add-ons to accelerate delivery and de-risk launches</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4 text-center">{addon.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{addon.name}</h4>
                <p className="text-gray-600 mb-4 text-sm text-center leading-relaxed">{addon.description}</p>
                <div className="text-2xl font-bold text-primary-600 mb-4 text-center">{addon.price}</div>
                <button className="w-full bg-primary-100 hover:bg-primary-200 text-primary-700 font-semibold py-2 rounded-lg transition-colors duration-200">
                  Add to engagement
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQs about hiring us</h3>
            <div className="space-y-6 text-sm text-gray-600">
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">How quickly can we start?</h4>
                <p>We typically onboard within 7 days. Need to move faster? We can begin with a structured discovery sprint while access is provisioned.</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">What collaboration tools do you use?</h4>
                <p>Slack, Notion, GitHub, Linear/Jira, and Loom async updates. We adapt to your stack if preferred.</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Can we pause or scale up?</h4>
                <p>Yes. Provide a one-week notice to pause. Need more velocity? Add hours or stack both developers for squad coverage.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What about code ownership?</h3>
            <p className="text-sm text-gray-600 mb-4">
              You retain 100% IP. We work in your repositories with clean documentation, tests, and handover notes so your in-house teams stay empowered.
            </p>
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-primary-700 mb-3">Weekly cadence snapshot</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Monday planning sync (30 mins)</li>
                <li>• Daily async standups (Slack / Loom)</li>
                <li>• Midweek check-in or pairing session</li>
                <li>• Friday demo + metrics review</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-4">Let’s lock in your start date</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Share your roadmap goals and we’ll recommend the right commitment, onboarding plan, and immediate wins for month one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg text-lg">
                Schedule a discovery call
              </a>
              <a href="#portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                Review recent builds
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
