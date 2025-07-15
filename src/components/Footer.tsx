import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone } from 'lucide-react';

const Footer = () => {
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
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 animate-fadeInUp">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MarketPro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md hover:text-gray-300 transition-colors duration-300">
              We help ambitious businesses scale faster with data-driven marketing strategies, 
              cutting-edge technology, and proven results that drive real growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-3" />
                hello@marketpro.com
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Phone className="w-4 h-4 mr-3" />
                +1 (555) 123-4567
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 hover:text-gray-300 transition-colors duration-300">
              © 2024 MarketPro. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Privacy Policy</a>
                <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;