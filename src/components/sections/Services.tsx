import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

type ServiceCard = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  footerLabel: string;
  footerValue: string;
  badge?: string;
};

const Services: React.FC = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState<'projects' | 'hire'>('projects');

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const projectServices: ServiceCard[] = [
    {
      icon: '🖥️',
      title: 'Portfolio Websites',
      subtitle: 'Polished storytelling & CMS handovers',
      description:
        'Modern marketing sites, case studies, and landing pages engineered for speed, accessibility, and easy updates.',
      bullets: ['Custom UI systems & motion accents', 'SEO + Core Web Vitals readiness', 'Managed content via Notion/headless CMS'],
      tags: ['Next.js', 'SEO Ready', 'CMS'],
      footerLabel: 'Typical timeline',
      footerValue: '2 – 4 weeks'
    },
    {
      icon: '🛒',
      title: 'Ecommerce Stores',
      subtitle: 'Shopify builds & conversion optimisation',
      description:
        'End-to-end storefront delivery with conversion-led UX, automation, and growth tooling built in from day one.',
      bullets: ['Checkout & subscription flows', 'Email/SMS lifecycle automation', 'Analytics, CRO testing & A/B playbooks'],
      tags: ['Shopify', 'CRO', 'Automation'],
      footerLabel: 'Typical timeline',
      footerValue: '4 – 6 weeks'
    },
    {
      icon: '📲',
      title: 'Mobile & Web Apps',
      subtitle: 'React Native & React feature pods',
      description:
        'MVPs and product increments that ship cross-platform, integrate natively, and breeze through store review.',
      bullets: ['React Native / Expo + React web', 'Realtime streaming & notifications', 'CI/CD pipelines & release management'],
      tags: ['React Native', 'Realtime', 'CI/CD'],
      footerLabel: 'Typical timeline',
      footerValue: '4 – 8 weeks'
    },
    {
      icon: '🧭',
      title: 'Discovery Sprint',
      subtitle: 'Map goals, scope, and success metrics',
      description:
        'Two focused weeks covering user journeys, architecture, backlog, and budget so delivery kicks off with clarity.',
      bullets: ['Stakeholder + user workshops', 'Architecture & backlog blueprint', 'Roadmap, KPIs, and launch narrative'],
      tags: ['Strategy', 'Architecture', 'Roadmap'],
      footerLabel: 'Fixed engagement',
      footerValue: '2 weeks • $4,000',
      badge: 'Kickoff'
    }
  ];

  const hireServices: ServiceCard[] = [
    {
      icon: '👨‍💻',
      title: 'Abdul Salam',
      subtitle: 'Senior React Native / React developer',
      description:
        'Owns mobile & web experience delivery—pixel-perfect UI, smooth animations, and store-ready handoffs.',
      bullets: ['React Native, React, Next.js', 'Design-system friendly implementation', 'Performance audits & accessibility'],
      tags: ['Frontend', 'Pixel Perfect', 'TypeScript'],
      footerLabel: 'Retainer options',
      footerValue: '20 hrs • $600 / mo • 40 hrs • $1,500 / mo',
      badge: 'Mobile Lead'
    },
    {
      icon: '🛠️',
      title: 'Danial Qais',
      subtitle: 'Backend engineer • Django & FastAPI',
      description:
        'Builds resilient APIs, automations, and infrastructure with thoughtful documentation and testing.',
      bullets: ['Django REST / FastAPI services', 'Postgres, Redis, queues, Terraform', 'Observability, testing & security controls'],
      tags: ['Backend', 'DevOps', 'Security'],
      footerLabel: 'Retainer options',
      footerValue: '20 hrs • $600 / mo • 40 hrs • $1,500 / mo',
      badge: 'Backend Lead'
    },
    {
      icon: '🤝',
      title: 'Core Duo',
      subtitle: 'Abdul + Danial embedded as your squad',
      description:
        'Both engineers partner together on your roadmap with shared rituals, reporting, and QA support.',
      bullets: ['Shared backlog & sprint cadence', 'Weekly stakeholder + metrics updates', 'Design, QA, and analytics coordination'],
      tags: ['Squad-in-a-box', 'Roadmap', 'Reporting'],
      footerLabel: 'Retainer options',
      footerValue: '40 hrs • $1,950 / mo • 60 hrs • $2,750 / mo',
      badge: 'Most Requested'
    }
  ];

  const displayedServices = activeTab === 'projects' ? projectServices : hireServices;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
          >
            🧰 How we partner with you
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Project builds or <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">monthly firepower</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Choose the collaboration style that fits today’s priority. Spin up a pod for your next launch or add our core developers to your team on a flexible retainer.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-primary-100 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-200 ${
                activeTab === 'projects' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Project Delivery
            </button>
            <button
              onClick={() => setActiveTab('hire')}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-200 ${
                activeTab === 'hire' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Hire Our Developers
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={`grid grid-cols-1 sm:grid-cols-2 ${activeTab === 'hire' ? 'lg:grid-cols-3 xl:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-3'} gap-5 sm:gap-6 lg:gap-7 xl:gap-8`}
        >
          {displayedServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <article className="relative h-full rounded-3xl bg-white shadow-[0_12px_30px_-15px_rgba(15,23,42,0.25)] transition-all duration-300 border border-gray-100 overflow-hidden group-hover:shadow-[0_18px_40px_-18px_rgba(15,23,42,0.28)] group-hover:-translate-y-1">
                <div className="absolute -top-16 -right-10 w-44 h-44 bg-gradient-to-br from-primary-100 via-purple-100 to-transparent rounded-full blur-2xl opacity-70 pointer-events-none"></div>
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-600"></div>

                <div className="relative p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 text-2xl shadow-inner">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 leading-tight">{service.title}</h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-primary-600 font-semibold mt-1">{service.subtitle}</p>
                      </div>
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-100">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 min-h-[60px]">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-2 mb-6 min-h-[110px]">
                    {service.bullets.map((item, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="flex items-start gap-2 rounded-2xl bg-slate-50 text-slate-700 text-sm px-3 py-2 border border-slate-100"
                      >
                        <span className="text-primary-500 mt-0.5">▹</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-200 flex justify-between items-center text-xs sm:text-sm text-slate-600">
                    <span className="font-semibold text-slate-700">{service.footerLabel}</span>
                    <span className="font-semibold text-primary-600">{service.footerValue}</span>
                  </div>

                  <button
                    className="mt-3 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 text-xs sm:text-sm transition-colors duration-200 shadow-sm"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    {activeTab === 'projects' ? 'Start a project' : 'Book a call'}
                  </button>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, #ffffff 2px, transparent 2px)`,
                  backgroundSize: '60px 60px',
                  backgroundPosition: '0 0, 30px 30px'
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-4xl lg:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {activeTab === 'projects' ? 'Kick off your next build' : 'Reserve your monthly slot'}
              </motion.h3>

              <motion.p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
                {activeTab === 'projects'
                  ? 'We scope, staff, and deliver in focused pods with measurable checkpoints. Share your roadmap and we’ll draft a delivery plan within 48 hours.'
                  : 'We onboard new retainer partners twice per month. Tell us about your roadmap and we’ll hold a start date or tailor a pilot sprint for your team.'}
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
                  {activeTab === 'projects' ? 'Share project brief' : 'Check availability'}
                </motion.button>

                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {activeTab === 'projects' ? 'View delivered projects' : 'See developer case studies'}
                </motion.button>
              </div>

              <motion.div className="mt-8 text-sm opacity-80" variants={itemVariants}>
                🔄 One-week trial • 📅 7-day notice to pause • 🗂️ Shared Slack, Notion & GitHub access
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
