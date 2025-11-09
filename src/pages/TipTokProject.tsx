import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { tipTokGalleryGroups } from '../data/tipTokGallery';

const getAssetSrc = (relativePath: string) => {
  const normalized = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${process.env.PUBLIC_URL}/${normalized}`;
};

const TipTokProject: React.FC = () => {
  const navigate = useNavigate();
  const tipTokProject = useMemo(() => projects.find((project) => project.detailRoute === '/projects/tiptok'), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!tipTokProject) {
    return null;
  }

  const metrics = [
    { label: 'Design surfaces', value: '40+ screens' },
    { label: 'Experience pillars', value: 'Live, Commerce, Social' },
    { label: 'Delivery timeline', value: tipTokProject.duration ?? '4 months' },
    { label: 'Roles covered', value: 'Product design, Design system, Motion' }
  ];

  const featureHighlights = [
    {
      title: 'Immersive live commerce',
      description:
        'Multi-host streaming with audience participation, gamified interactions, and frictionless checkout funnels built for conversion.'
    },
    {
      title: 'Creator-first toolset',
      description:
        'Robust tooling for creators to manage inventory, schedule drops, monetise content, and engage communities in real time.'
    },
    {
      title: 'Safety & trust by design',
      description:
        'Integrated moderation controls, reporting safeguards, and transparent onboarding to keep the ecosystem safe and compliant.'
    }
  ];

  const heroImage = tipTokGalleryGroups[0]?.images[0];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 via-white to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate('/', { state: { scrollTo: 'portfolio' } })}
          className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 mb-6"
        >
          ← Back to portfolio
        </button>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700 mb-4">
              📱 TipTok Mobile Experience
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {tipTokProject.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              TipTok reimagines live commerce by blending creator-led streaming, short-form discovery, and marketplace utilities into a single, premium mobile experience. We delivered a complete product design system paired with production-ready flows for onboarding, community engagement, live shopping, and monetisation.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {tipTokProject.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open(tipTokProject.liveUrl ?? '#', '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold shadow-lg hover:from-primary-700 hover:to-purple-700 transition"
              >
                View Product Overview
              </button>
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition"
              >
                Discuss a similar build
              </button>
            </div>
          </div>
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-tr from-primary-200/60 to-purple-200/60 blur-xl rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/70">
                <img
                  src={getAssetSrc(heroImage)}
                  alt="TipTok hero"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6">
              <div className="text-xs font-semibold uppercase text-primary-500 tracking-wide mb-2">{metric.label}</div>
              <div className="text-xl font-bold text-gray-900">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {featureHighlights.map((feature) => (
            <div key={feature.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xl mb-4">
                ✨
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-16">
          {tipTokGalleryGroups.map((group) => (
            <div key={group.title}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{group.title}</h2>
                  <p className="text-sm sm:text-base text-gray-600 max-w-3xl">{group.description}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.images.map((image) => (
                  <motion.div
                    key={image}
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white"
                  >
                    <img
                      src={getAssetSrc(image)}
                      alt={image.split('/').pop() ?? 'TipTok screen'}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 rounded-3xl text-white p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, #ffffff 2px, transparent 2px)` ,
                backgroundSize: '60px 60px',
                backgroundPosition: '0 0, 30px 30px'
              }}
            ></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a flagship mobile experience?</h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mb-6">
              We partner with product teams to ship premium, end-to-end mobile ecosystems—covering product strategy, UI/UX, motion, and delivery-ready design systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'contact' } })}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold shadow-lg hover:bg-gray-100 transition"
              >
                Book a discovery call
              </button>
              <button
                onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition"
              >
                Explore all services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipTokProject;
