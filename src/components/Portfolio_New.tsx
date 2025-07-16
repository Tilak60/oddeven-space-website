import React, { useState, useEffect } from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Award, Star } from 'lucide-react';

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
      description: 'Complete digital transformation resulting in massive revenue growth and market expansion through strategic SEO, PPC, and social media marketing.',
      tags: ['SEO', 'PPC', 'Social Media', 'Analytics'],
      duration: '6 months',
      rating: 5
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
      description: 'Strategic lead generation campaign that transformed their sales pipeline and reduced acquisition costs through targeted content marketing.',
      tags: ['Lead Gen', 'Email Marketing', 'Content', 'Automation'],
      duration: '4 months',
      rating: 5
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
      description: 'Multi-channel brand awareness campaign that significantly increased market presence and sales through creative storytelling.',
      tags: ['Branding', 'Social Media', 'Influencer', 'Creative'],
      duration: '8 months',
      rating: 5
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

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:scale-[1.02] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-1/2 relative">
                  <div className="relative h-64 md:h-80 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}/20`}></div>
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-6 md:p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Award className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{project.client}</p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-700 hover:scale-105 transition-transform duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center sm:text-left group/result">
                        <div className="flex items-center justify-center sm:justify-start mb-2">
                          <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mr-3 group-hover/result:scale-110 transition-transform duration-300 shadow-lg`}>
                            <result.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className={`text-2xl md:text-3xl font-bold ${result.color} group-hover/result:scale-105 transition-transform duration-300`}>
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600">{result.label}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className={`inline-flex items-center text-white font-semibold bg-gradient-to-r ${project.gradient} px-6 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                    View Case Study
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all font-semibold text-lg hover:shadow-lg hover:scale-105 duration-300">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
