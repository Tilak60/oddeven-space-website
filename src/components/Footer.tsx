import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone } from 'lucide-react';

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
      'SEO Optimization',
      'PPC Advertising',
      'Social Media Marketing',
      'Email Marketing',
      'Web Development',
      'Analytics & Insights'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Blog',
      'Contact'
    ],
    resources: [
      'Marketing Guide',
      'SEO Checklist',
      'Free Tools',
      'Webinars',
      'Templates',
      'Support'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'from-blue-600 to-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-sky-500 to-sky-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-pink-500 to-red-500' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn', color: 'from-blue-700 to-blue-800' }
  ];

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300 ring-2 ring-blue-500/30 hover:ring-blue-500/50 shadow-lg hover:shadow-blue-500/25">
                <img 
                  src="/images/logo.jpg" 
                  alt="oddeven.space logo" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                oddeven.space
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md hover:text-gray-300 transition-colors duration-300 leading-relaxed">
              We help ambitious businesses scale faster with data-driven marketing strategies, 
              cutting-edge technology, and proven results that drive real growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center mr-4 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  oddevenspace.com@gmail.com
                </span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center mr-4 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  +91 8669197917
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block relative group"
                  >
                    <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2 group-hover:w-4 transition-all duration-300"></span>
                    <span className="group-hover:ml-6 transition-all duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block relative group"
                  >
                    <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2 group-hover:w-4 transition-all duration-300"></span>
                    <span className="group-hover:ml-6 transition-all duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block relative group"
                  >
                    <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2 group-hover:w-4 transition-all duration-300"></span>
                    <span className="group-hover:ml-6 transition-all duration-300">{link}</span>
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
              © 2024 oddeven.space. All rights reserved. Made with ❤️ for digital growth.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center hover:bg-gradient-to-r hover:${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 hover:border-transparent group`}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
              
              <div className="flex space-x-8 text-sm text-gray-400">
                <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block relative group">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block relative group">
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block relative group">
                  Cookie Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;