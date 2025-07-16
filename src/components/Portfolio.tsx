import React, { useState, useEffect } from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Award, Target, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('portfolio');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const projects = [
    {
      title: 'E-commerce Growth Campaign',
      client: 'TechStore Pro',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-600 to-cyan-600',
      results: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '+340%', color: 'text-green-600' },
        { icon: Users, label: 'New Customers', value: '12,500', color: 'text-blue-600' },
        { icon: DollarSign, label: 'ROI', value: '450%', color: 'text-purple-600' }
      ],
      description: 'Complete digital transformation resulting in massive revenue growth and market expansion.',
      tags: ['SEO', 'PPC', 'Social Media', 'Analytics']
    },
    {
      title: 'SaaS Lead Generation',
      client: 'CloudTech Solutions',
      category: 'SaaS',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600 to-pink-600',
      results: [
        { icon: Users, label: 'Qualified Leads', value: '2,800', color: 'text-blue-600' },
        { icon: TrendingUp, label: 'Conversion Rate', value: '+180%', color: 'text-green-600' },
        { icon: DollarSign, label: 'Cost per Lead', value: '-65%', color: 'text-purple-600' }
      ],
      description: 'Strategic lead generation campaign that transformed their sales pipeline and reduced acquisition costs.',
      tags: ['Lead Gen', 'Email Marketing', 'Content', 'Automation']
    },
    {
      title: 'Brand Awareness Campaign',
      client: 'Lifestyle Brand Co.',
      category: 'Lifestyle',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-emerald-600 to-teal-600',
      results: [
        { icon: Users, label: 'Brand Reach', value: '2.5M', color: 'text-blue-600' },
        { icon: TrendingUp, label: 'Engagement', value: '+220%', color: 'text-green-600' },
        { icon: DollarSign, label: 'Sales Growth', value: '+150%', color: 'text-purple-600' }
      ],
      description: 'Multi-channel brand awareness campaign that significantly increased market presence and sales.',
      tags: ['Branding', 'Social Media', 'Influencer', 'Creative']
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Success <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Real results from real clients. See how we've helped businesses <span className="text-blue-600 font-semibold">achieve extraordinary growth</span>.
            </p>
          </div>
        </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses like yours achieve remarkable growth 
            and exceed their marketing goals.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{project.client}</p>
                  <p className="text-gray-600 mb-8">{project.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                            <result.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                            <div className="text-sm text-gray-600">{result.label}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;