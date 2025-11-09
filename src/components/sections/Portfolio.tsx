import React, {
  useState,
  useMemo,
  useCallback,
  useEffect
} from 'react';
import { useNavigate } from 'react-router-dom';
import { projectFilters, getProjectsByCategory, ProjectCategory, Project } from '../../data/projects';

const DEFAULT_VISIBLE = 6;
const BATCH_SIZE = 6;

const resolveProjectImage = (imagePath: string) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  const normalized = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${process.env.PUBLIC_URL}/${normalized}`;
};

const buildOptimizedRemoteImage = (imagePath: string) => {
  if (!imagePath.startsWith('http')) {
    return {
      src: resolveProjectImage(imagePath),
      srcSet: undefined,
      sizes: undefined
    };
  }

  try {
    const url = new URL(imagePath);
    const isUnsplash = url.hostname.includes('unsplash.com');

    if (!isUnsplash) {
      return { src: imagePath, srcSet: undefined, sizes: undefined };
    }

    const createSizedUrl = (width: number) => {
      const sizedUrl = new URL(url.toString());
      sizedUrl.searchParams.set('auto', 'format');
      sizedUrl.searchParams.set('fit', 'crop');
      sizedUrl.searchParams.set('w', `${width}`);
      sizedUrl.searchParams.set('q', width >= 960 ? '70' : '65');
      return sizedUrl.toString();
    };

    const src = createSizedUrl(720);
    const srcSet = [480, 720, 960].map((size) => `${createSizedUrl(size)} ${size}w`).join(', ');
    const sizes = '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw';

    return { src, srcSet, sizes };
  } catch (error) {
    return { src: imagePath, srcSet: undefined, sizes: undefined };
  }
};

type ProjectCardProps = {
  project: Project;
  onNavigate: (project: Project) => void;
  onContact: () => void;
};

const ProjectCardComponent: React.FC<ProjectCardProps> = ({ project, onNavigate, onContact }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageSources = useMemo(() => buildOptimizedRemoteImage(project.image), [project.image]);
  const hasDetailPage = Boolean(project.detailRoute);

  return (
    <div
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 ${
        hasDetailPage ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={() => hasDetailPage && onNavigate(project)}
    >
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        {!isImageLoaded && <div className="absolute inset-0 bg-gray-100 animate-pulse" aria-hidden="true"></div>}
        <img
          src={imageSources.src}
          srcSet={imageSources.srcSet}
          sizes={imageSources.sizes}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hasDetailPage ? 'group-hover:scale-110' : ''
          } ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/600x400?text=Project+Image';
            setIsImageLoaded(true);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {project.category === 'web' ? '🌐 Web' : project.category === 'mobile' ? '📱 Mobile' : '🎨 Portfolio'}
          </span>
        </div>

        {hasDetailPage && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center">
              <div className="text-2xl mb-2">👁️</div>
              <div className="text-sm font-semibold">View Details</div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors min-h-[32px] sm:min-h-[36px]">
          {project.title}
        </h4>

        <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed min-h-[56px] sm:min-h-[60px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={`${project.id}-${tech}-${index}`} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="mb-6 min-h-[40px]">
          {project.results.slice(0, 2).map((result, resultIndex) => (
            <div key={`${project.id}-result-${resultIndex}`} className="flex items-center text-green-600 mb-2">
              <span className="mr-2 text-sm">✓</span>
              <span className="text-sm font-medium">{result}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            className="flex-1 bg-gradient-to-r from-primary-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              if (project.liveUrl && project.liveUrl !== '#') {
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            View Live
          </button>
          <button
            className="flex-1 border border-primary-600 text-primary-600 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              if (hasDetailPage) {
                onNavigate(project);
              } else {
                onContact();
              }
            }}
          >
            {hasDetailPage ? 'See Case Study' : 'Get in touch'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = React.memo(ProjectCardComponent);
ProjectCard.displayName = 'ProjectCard';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE);
  const [isLoadingFilter, setIsLoadingFilter] = useState(false);
  const navigate = useNavigate();

  const filteredProjects = useMemo(() => getProjectsByCategory(activeFilter), [activeFilter]);
  const totalFiltered = filteredProjects.length;
  const filtersToRender = useMemo(() => projectFilters, []);

  useEffect(() => {
    setVisibleCount(Math.min(DEFAULT_VISIBLE, totalFiltered || DEFAULT_VISIBLE));
    setIsLoadingFilter(false);
  }, [activeFilter, totalFiltered]);

  const handleFilterChange = useCallback((key: ProjectCategory) => {
    if (key === activeFilter) return;
    setIsLoadingFilter(true);
    setActiveFilter(key);
  }, [activeFilter]);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, totalFiltered));
  }, [totalFiltered]);

  const handleCardNavigate = useCallback(
    (project: Project) => {
      if (project.detailRoute) {
        navigate(project.detailRoute);
      }
    },
    [navigate]
  );

  const handleContactClick = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const projectsToRender = useMemo(
    () => filteredProjects.slice(0, Math.min(visibleCount, totalFiltered)),
    [filteredProjects, visibleCount, totalFiltered]
  );

  const hasMore = visibleCount < totalFiltered;

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)` ,
            backgroundSize: '25px 25px',
            backgroundPosition: '0 0, 12px 12px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            🎯 Our Portfolio
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Showcasing <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Excellence</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Discover our innovative solutions that have transformed businesses and delighted users worldwide.
            Each project tells a story of innovation, creativity, and measurable results.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4">
            {filtersToRender.map((filter) => (
              <button
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={`px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:border-primary-200'
                } ${isLoadingFilter ? 'opacity-60 cursor-wait' : ''}`}
                disabled={isLoadingFilter}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projectsToRender.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onNavigate={handleCardNavigate}
              onContact={handleContactClick}
            />
          ))}
        </div>

        {isLoadingFilter && (
          <div className="flex justify-center mt-6 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary-500 animate-ping"></span>
              Updating portfolio…
            </span>
          </div>
        )}

        {!isLoadingFilter && projectsToRender.length === 0 && (
          <div className="flex justify-center mt-6 text-sm text-gray-500">
            No projects found for this category yet.
          </div>
        )}

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              className="px-6 py-3 rounded-full bg-white border border-primary-200 text-primary-600 font-semibold shadow-sm hover:shadow-md transition"
              onClick={handleLoadMore}
            >
              Load more projects
            </button>
          </div>
        )}

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 rounded-3xl p-12 text-white relative overflow-hidden">
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
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Create Something Amazing?
              </h3>

              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Let's bring your vision to life with cutting-edge technology and innovative design.
                Get a free consultation and discover how we can transform your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleContactClick}
                >
                  Get in touch
                </button>

                <button
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  View Pricing
                </button>
              </div>

              <div className="mt-8 text-sm opacity-80">
                ✨ Free consultation • No commitment • Quick response
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
