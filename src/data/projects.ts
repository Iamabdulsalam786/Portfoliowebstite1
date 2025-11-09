export type ProjectCategory = 'all' | 'web' | 'mobile' | 'portfolio';

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  results: string[];
  client?: string;
  duration?: string;
  team?: string;
  challenge?: string;
  solution?: string;
  detailRoute?: string;
}

export interface ProjectFilter {
  key: ProjectCategory;
  label: string;
}

export const projectFilters: ProjectFilter[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'portfolio', label: 'Portfolio Sites' }
];

export const projects: Project[] = [
  {
    id: 0,
    title: 'TipTok – Live Commerce Platform',
    category: 'mobile',
    description: 'A social-first live commerce experience that blends short-form video, real-time streaming, and marketplace tools for creators.',
    image: 'projects/tiptok/01-Splash-Screen.png',
    technologies: ['React Native', 'TypeScript', 'Realtime Streaming', 'AWS Amplify'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    results: ['40+ polished UI flows', 'Realtime engagement tooling'],
    client: 'TipTok',
    duration: '4 months',
    team: '5 designers & engineers',
    challenge: 'Build a scalable live-commerce experience with immersive video, creator monetisation, and dedicated storefronts.',
    solution: 'Delivered an end-to-end design system with streaming, commerce, community, and safety modules ready for native implementation.',
    detailRoute: '/projects/tiptok'
  },
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

const categorizeProjects = projects.reduce<Record<Exclude<ProjectCategory, 'all'>, Project[]>>((acc, project) => {
  if (!acc[project.category]) {
    acc[project.category] = [];
  }
  acc[project.category].push(project);
  return acc;
}, { web: [], mobile: [], portfolio: [] });

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  if (category === 'all') {
    return projects;
  }
  return categorizeProjects[category];
};

