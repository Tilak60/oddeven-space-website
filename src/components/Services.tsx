import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'SEO Optimization',
      image: '/images/SEO.jpg',
      path: '/services/seo'
    },
    {
      title: 'PPC Advertising',
      image: '/images/PM.jpg',
      path: '/services/ppc'
    },
    {
      title: 'Analytics & Insights',
      image: '/images/B and D.jpg',
      path: '/services/analytics'
    },
    {
      title: 'Social Media Marketing',
      image: '/images/Sm.jpg',
      path: '/services/social-media'
    },
    {
      title: 'Email Marketing',
      image: '/images/PM.jpg',
      path: '/services/email-marketing'
    },
    {
      title: 'Web Development',
      image: '/images/WD.jpg',
      path: '/services/web-development'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-text-gradient">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up-delayed">
            We offer comprehensive marketing solutions designed to accelerate your business growth 
            and maximize your return on investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500"></div>
                
                {/* Animated overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-gray-900 text-center group-hover:text-blue-600 transition-all duration-500 transform group-hover:scale-105">
                  {service.title}
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    Learn More →
                  </span>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 rounded-2xl transition-all duration-500"></div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float-delayed"></div>
                <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full animate-float-delayed-2"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;