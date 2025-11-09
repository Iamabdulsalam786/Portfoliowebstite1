import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const performScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      performScroll();
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Hamburger Menu - Left Side (Mobile Only) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-11 h-11 flex flex-col justify-center items-center space-y-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Logo - Center on Mobile, Left on Desktop */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
              <Link
                to="/"
                className="flex items-center gap-2 group"
                aria-label="TechCraft Home"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/techcraftlogo.png`}
                  alt="TechCraft logo"
                  className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-purple-700 transition-all duration-300">
                  TechCraft
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-all duration-200 cursor-pointer text-sm relative group py-2 px-3 rounded-lg hover:bg-primary-50"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-3/4"></span>
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button - Hidden on mobile */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm transform hover:scale-105 hover:-translate-y-0.5"
              >
                Get in touch
              </button>
            </div>

            {/* Spacer for mobile layout */}
            <div className="lg:hidden w-10"></div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer - Slides from Left */}
      <div className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[60] lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
        <nav className="p-4">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 py-3 px-4 text-base rounded-lg"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg text-base transform hover:scale-105"
            >
              Get in touch
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;