import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Text } from '@react-three/drei';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Abdul Salam',
      role: 'Senior React Native & React Developer',
      image: '📱',
      bio: 'Leads all things frontend and mobile. 8+ years crafting cross-platform apps with buttery animations, realtime UX, and polished store submissions.',
      skills: ['React Native', 'React / Next.js', 'TypeScript', 'State management'],
      linkedin: 'https://www.linkedin.com',
      github: 'https://github.com'
    },
    {
      name: 'Danial Qais',
      role: 'Backend Engineer • Django & FastAPI',
      image: '🛠️',
      bio: 'Architects APIs, infrastructure, and automation. Designs resilient systems that scale, stay secure, and ship with clear documentation.',
      skills: ['Django & DRF', 'FastAPI', 'PostgreSQL', 'AWS & Docker'],
      linkedin: 'https://www.linkedin.com',
      github: 'https://github.com'
    },
    {
      name: 'Ayesha Khan',
      role: 'Product Partner & PM',
      image: '🧭',
      bio: 'Keeps discovery, backlog, and stakeholder comms tight. Turns fuzzy business goals into clear delivery plans and weekly scorecards.',
      skills: ['Roadmap strategy', 'Backlog grooming', 'Stakeholder comms', 'KPIs'],
      linkedin: 'https://www.linkedin.com',
      github: '#'
    },
    {
      name: 'Fatima Ali',
      role: 'Lead Designer & Brand',
      image: '🎨',
      bio: 'Supports launches with UI systems, motion guidelines, and marketing assets that keep product and brand consistent.',
      skills: ['Figma', 'Design systems', 'Motion', 'Brand collateral'],
      linkedin: 'https://www.linkedin.com',
      github: '#'
    },
    {
      name: 'Omar Farooq',
      role: 'QA & Automation Engineer',
      image: '✅',
      bio: 'Owns regression suites, release notes, and automated testing so every sprint ends production-ready.',
      skills: ['Playwright', 'Appium', 'Test strategy', 'Release ops'],
      linkedin: 'https://www.linkedin.com',
      github: '#'
    }
  ];

  const values = [
    {
      icon: '🤝',
      title: 'Embedded partnership',
      description: 'We work in your tools, attend your stand-ups, and own outcomes alongside your product team.'
    },
    {
      icon: '📈',
      title: 'Measured delivery',
      description: 'Every engagement—project or retainer—kicks off with KPIs, release goals, and Friday reporting.'
    },
    {
      icon: '🧰',
      title: 'Battle-tested workflow',
      description: 'Shared Slack, Notion, GitHub, CI/CD, and QA flows honed across commerce, creator, and SaaS launches.'
    },
    {
      icon: '🔁',
      title: 'Flexible capacity',
      description: 'Scale hours up or down with a week’s notice or scope fixed deliverables through our project playbooks.'
    }
  ];

  const achievements = [
    { number: '40+', label: 'Apps shipped to store', icon: '📲' },
    { number: '60%', label: 'Average velocity lift', icon: '⚡' },
    { number: '18', label: 'End-to-end launches delivered', icon: '🚀' },
    { number: '12', label: 'Active monthly partners', icon: '🤝' }
  ];

  const AnimatedCube = () => {
    return (
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face front">
            <div className="face-content">
              <div className="face-icon">🤝</div>
              <div className="face-text">Partner</div>
            </div>
          </div>
          <div className="cube-face back">
            <div className="face-content">
              <div className="face-icon">⚙️</div>
              <div className="face-text">Ship</div>
            </div>
          </div>
          <div className="cube-face right">
            <div className="face-content">
              <div className="face-icon">📊</div>
              <div className="face-text">Measure</div>
            </div>
          </div>
          <div className="cube-face left">
            <div className="face-content">
              <div className="face-icon">🚀</div>
              <div className="face-text">Grow</div>
            </div>
          </div>
          <div className="cube-face top">
            <div className="face-content">
              <div className="face-icon">🛡️</div>
              <div className="face-text">Secure</div>
            </div>
          </div>
          <div className="cube-face bottom">
            <div className="face-content">
              <div className="face-icon">✨</div>
              <div className="face-text">Polish</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-primary-600">TechCraft</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            TechCraft is a boutique product studio built around Abdul Salam and Danial Qais with a tight support crew. We lead mobile and backend delivery, run projects end-to-end when you need them, and offer monthly retainers when you want our engineers embedded in your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Why teams partner with us</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                We started as a delivery squad for high-stakes launches—TipTok live commerce, MakComms CX platform, SwiftCart retail apps. Today we support product owners with two proven formats: fixed-scope projects or monthly retainers where you hire our core developers.
              </p>
              <p>
                Abdul owns the React / React Native experience layer while Danial powers Django and FastAPI services. Around them is a lightweight crew—product, design, QA—so your roadmap gets end-to-end attention without agency overhead.
              </p>
              <p>
                Every engagement uses the same playbook: structured onboarding, shared tooling, weekly demos, and measurable outcomes. Whether you’re launching from scratch or scaling up, we plug in fast and stay laser-focused on results.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">🗓️ Weekly roadmap reviews</div>
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">🧪 QA & release ownership</div>
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">📊 Friday delivery reports</div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-[450px] flex items-center justify-center">
              <div className="w-80 h-80">
                <AnimatedCube />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Company snapshot</h3>
            <p className="text-xl text-primary-100">Numbers from the last 12 months of project and retainer work</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-primary-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How we work with you</h3>
            <p className="text-xl text-gray-600">The principles guiding both project and monthly engagements</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our team</h3>
            <p className="text-xl text-gray-600">Hands-on owners plus the support crew that keeps delivery smooth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{member.image}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-primary-600 font-semibold">{member.role}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={member.linkedin}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={member.github}
                        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our promise</h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            “We treat your roadmap like our own: honest estimates, transparent comms, production-ready code, and zero ego. If we ever miss, we fix it fast and keep you in the loop.”
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">📆 Weekly demos & metrics</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">🧾 Clear documentation & handover</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">🔄 Iterate with confidence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
