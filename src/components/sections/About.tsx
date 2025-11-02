import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Text } from '@react-three/drei';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Lead Developer',
      image: '👩‍💻',
      bio: 'Full-stack developer with 8+ years experience. Passionate about creating scalable solutions and leading innovative projects.',
      skills: ['React', 'Node.js', 'AWS', 'Leadership'],
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Mobile Specialist',
      image: '👨‍💻',
      bio: 'Mobile development expert specializing in React Native and Flutter. Loves building cross-platform solutions.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Emily Watson',
      role: 'UI/UX Designer',
      image: '👩‍🎨',
      bio: 'Creative designer with a focus on user-centered design. Transforms complex ideas into beautiful, intuitive interfaces.',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      linkedin: '#',
      github: '#'
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      image: '👨‍🔧',
      bio: 'Infrastructure specialist ensuring our applications run smoothly and securely in production environments.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      linkedin: '#',
      github: '#'
    }
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We stay ahead of technology trends and always seek innovative solutions to complex problems.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'We build lasting relationships with our clients, treating their success as our own achievement.'
    },
    {
      icon: '🎯',
      title: 'Quality Focus',
      description: 'Every line of code, every design element, and every user interaction is crafted with precision and care.'
    },
    {
      icon: '📈',
      title: 'Growth Mindset',
      description: 'We continuously learn, adapt, and improve to deliver better solutions and exceed expectations.'
    }
  ];

  const achievements = [
    { number: '5+', label: 'Years of Excellence', icon: '🏆' },
    { number: '150+', label: 'Happy Clients', icon: '😊' },
    { number: '200+', label: 'Projects Delivered', icon: '💼' },
    { number: '99%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  const AnimatedCube = () => {
    return (
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face front">
            <div className="face-content">
              <div className="face-icon">🚀</div>
              <div className="face-text">Innovation</div>
            </div>
          </div>
          <div className="cube-face back">
            <div className="face-content">
              <div className="face-icon">⭐</div>
              <div className="face-text">Excellence</div>
            </div>
          </div>
          <div className="cube-face right">
            <div className="face-content">
              <div className="face-icon">💡</div>
              <div className="face-text">Creativity</div>
            </div>
          </div>
          <div className="cube-face left">
            <div className="face-content">
              <div className="face-icon">📈</div>
              <div className="face-text">Growth</div>
            </div>
          </div>
          <div className="cube-face top">
            <div className="face-content">
              <div className="face-icon">🎯</div>
              <div className="face-text">Success</div>
            </div>
          </div>
          <div className="cube-face bottom">
            <div className="face-content">
              <div className="face-icon">✨</div>
              <div className="face-text">Quality</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Company Story */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-primary-600">TechCraft</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Founded in 2019, TechCraft Solutions emerged from a simple belief: technology should empower businesses, not complicate them. 
            We started as a small team of passionate developers and designers who wanted to create digital solutions that truly make a difference.
          </p>
        </div>

        {/* Company Story Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Our Journey</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                What began as a startup in a small office has grown into a trusted partner for businesses worldwide. 
                We've helped companies transform their digital presence, streamline operations, and reach new heights of success.
              </p>
              <p>
                Our approach combines cutting-edge technology with human-centered design, ensuring that every solution 
                we create not only meets technical requirements but also delivers exceptional user experiences.
              </p>
              <p>
                Today, we're proud to be a team of 20+ talented professionals, each bringing unique skills and perspectives 
                to every project. From Fortune 500 companies to innovative startups, we've had the privilege of working 
                with diverse clients across various industries.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
                🏢 Enterprise Solutions
              </div>
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
                🚀 Startup Accelerator
              </div>
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
                🎨 Design Excellence
              </div>
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

        {/* Achievements */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Achievements</h3>
            <p className="text-xl text-primary-100">Numbers that speak for our commitment to excellence</p>
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

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-xl text-gray-600">The talented individuals behind our success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {member.image}
                    </div>
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
                      <a href={member.linkedin} className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm">
                        LinkedIn
                      </a>
                      <a href={member.github} className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
            and create lasting value. We believe technology should be accessible, intuitive, and transformative."
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">🎯 Mission-Driven</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">💡 Innovation-Focused</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-semibold">🤝 Client-Centric</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
