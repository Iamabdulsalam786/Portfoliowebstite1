import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">TechCraft</h3>
            <p className="text-gray-300">
              Transforming ideas into digital reality with cutting-edge technology and creative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                Instagram
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-primary-400 transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Portfolio Sites</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@techcraft.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} TechCraft Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
