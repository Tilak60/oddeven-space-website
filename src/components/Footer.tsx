import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin as LinkedIn, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('footer');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const footerLinks = {
    services: [
      { name: 'SEO OPTIMIZATION', path: '/services/seo' },
      { name: 'UI DESIGNING', path: '/services/ui-designing' },
      { name: 'SOCIAL MEDIA MARKETING', path: '/services/social-media' },
      { name: 'EMAIL MARKETING', path: '/services/email-marketing' },
      { name: 'WEB DEVELOPMENT', path: '/services/web-development' },
      { name: 'BRANDING AND DESIGNING', path: '/services/analytics' }
    ],
    company: [
      { name: 'About Us', path: '/#about' },
      { name: 'Careers', path: '#' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/#contact' }
    ],

  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/oddeven.space', label: 'Instagram', color: 'from-pink-500 to-red-500' },
    { icon: LinkedIn, href: 'https://www.linkedin.com/in/oddeven-space-9a1b22375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'from-blue-700 to-blue-800' }
  ];

  return (
    <footer id="footer" className="neon-bg text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float neon-glow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed neon-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center mb-6 group">
              <div className="w-12 h-12 rounded-xl neon-border flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/50">
                <img 
                  src="/images/logo.jpg" 
                  alt="oddeven.space logo" 
                  className="w-full h-full object-cover rounded-xl glow-effect"
                />
              </div>
              <span className="ml-4 text-2xl font-bold neon-gradient-text">
                oddeven.space
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md hover:text-gray-300 transition-colors duration-300 leading-relaxed">
              We help ambitious businesses scale faster with data-driven marketing strategies, 
              cutting-edge technology, and proven results that drive real growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg neon-card flex items-center justify-center mr-4 group-hover:neon-border-cyan transition-all duration-300">
                  <Mail className="w-5 h-5 glow-effect" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  oddevenspace.com@gmail.com
                </span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg neon-card flex items-center justify-center mr-4 group-hover:neon-border-cyan transition-all duration-300">
                  <Phone className="w-5 h-5 glow-effect" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  +91 8669197917
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 neon-text-cyan">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.path} 
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block relative group"
                  >
                    <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform -translate-y-1/2 group-hover:w-4 transition-all duration-300 shadow-sm shadow-cyan-400/50"></span>
                    <span className="group-hover:ml-6 transition-all duration-300 group-hover:neon-text-cyan">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-6 neon-text-purple">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block relative group"
                  >
                    <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-y-1/2 group-hover:w-4 transition-all duration-300 shadow-sm shadow-purple-400/50"></span>
                    <span className="group-hover:ml-6 transition-all duration-300 group-hover:neon-text-purple">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t border-gray-700/50 mt-16 pt-8 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              © 2025 oddeven.space. All rights reserved. Made with ❤️ for digital growth.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl neon-card hover:neon-border-cyan flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 glow-effect" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;