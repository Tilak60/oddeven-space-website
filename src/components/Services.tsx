import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Target, Zap, Globe, Mail } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      title: 'SEO OPTIMIZATION',
      image: '/images/SEO.jpg',
      path: '/services/seo',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      description: 'Boost your search rankings and drive organic traffic'
    },
    {
      title: 'UI DESIGNING',
      image: '/images/PM.jpg',
      path: '/services/ppc',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      description: 'Get instant visibility with targeted advertising campaigns'
    },
    {
      title: 'BRANDING AND DESIGNING',
      image: '/images/B and D.jpg',
      path: '/services/analytics',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      description: 'Creative branding and design solutions for your business'
    },
    {
      title: 'SOCIAL MEDIA MARKETING',
      image: '/images/Sm.jpg',
      path: '/services/social-media',
      icon: Globe,
      color: 'from-rose-500 to-orange-500',
      description: 'Engage your audience across all social platforms'
    },
    {
      title: 'EMAIL MARKETING',
      image: '/images/PM.jpg',
      path: '/services/email-marketing',
      icon: Mail,
      color: 'from-indigo-500 to-purple-500',
      description: 'Build lasting relationships with personalized campaigns'
    },
    {
      title: 'WEB DEVELOPMENT',
      image: '/images/WD.jpg',
      path: '/services/web-development',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      description: 'Modern, responsive websites that convert visitors'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 neon-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float neon-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed neon-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="neon-gradient-text">
                Our Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              We offer <span className="neon-text-cyan font-semibold">comprehensive marketing solutions</span> designed to 
              <span className="neon-text-purple font-semibold"> accelerate your business growth</span> and maximize your ROI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                className={`group relative neon-card rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-2 md:hover:-translate-y-4 hover:neon-border-cyan ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  {/* Animated icon overlay */}
                  <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:neon-text-cyan transition-all duration-500 transform group-hover:scale-105">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-all duration-500 transform translate-x-0 group-hover:translate-x-1 glow-effect" />
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      Learn More
                    </span>
                    <div className={`w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 shadow-sm shadow-cyan-400/50`}></div>
                  </div>
                  
                  {/* Animated border */}
                  <div className={`absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-2xl md:rounded-3xl transition-all duration-500 shadow-sm shadow-cyan-400/30`}></div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce-slow"></div>
                  <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Glow effect */}
                {hoveredIndex === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 rounded-2xl md:rounded-3xl animate-pulse-glow`}></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;