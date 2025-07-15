import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Growth Campaign',
      client: 'TechStore Pro',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '+340%' },
        { icon: Users, label: 'New Customers', value: '12,500' },
        { icon: DollarSign, label: 'ROI', value: '450%' }
      ],
      description: 'Complete digital transformation resulting in massive revenue growth and market expansion.'
    },
    {
      title: 'SaaS Lead Generation',
      client: 'CloudTech Solutions',
      category: 'SaaS',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: Users, label: 'Qualified Leads', value: '2,800' },
        { icon: TrendingUp, label: 'Conversion Rate', value: '+180%' },
        { icon: DollarSign, label: 'Cost per Lead', value: '-65%' }
      ],
      description: 'Strategic lead generation campaign that transformed their sales pipeline and reduced acquisition costs.'
    },
    {
      title: 'Brand Awareness Campaign',
      client: 'Lifestyle Brand Co.',
      category: 'Lifestyle',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: [
        { icon: Users, label: 'Brand Reach', value: '2.5M' },
        { icon: TrendingUp, label: 'Engagement', value: '+220%' },
        { icon: DollarSign, label: 'Sales Growth', value: '+150%' }
      ],
      description: 'Multi-channel brand awareness campaign that significantly increased market presence and sales.'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
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