import { useEffect } from 'react';
import { ArrowLeft, Search, TrendingUp, Target, BarChart3, CheckCircle } from 'lucide-react';

const SEOService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Comprehensive keyword analysis to target the right audience for your business.'
    },
    {
      icon: TrendingUp,
      title: 'On-Page Optimization',
      description: 'Optimize your website content, meta tags, and structure for better search rankings.'
    },
    {
      icon: Target,
      title: 'Technical SEO',
      description: 'Improve site speed, mobile responsiveness, and technical aspects for better performance.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track your SEO progress with detailed analytics and monthly reports.'
    }
  ];

  const benefits = [
    'Increased organic traffic',
    'Higher search engine rankings',
    'Better user experience',
    'Improved brand visibility',
    'Long-term sustainable growth',
    'Cost-effective marketing solution'
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current website performance and SEO status.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized SEO strategy based on your business goals and target audience.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute on-page and technical optimizations to improve search rankings.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization to maintain and improve rankings.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo.jpg" 
                  alt="oddeven.space logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                oddeven.space
              </span>
            </div>
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                SEO <span className="text-blue-200">Optimization</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Boost your online visibility and drive organic traffic with our comprehensive SEO services. 
                Get found by your target audience when they search for your products or services.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-20"></div>
              <img
                src="/images/SEO.jpg"
                alt="SEO Optimization"
                className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our SEO <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive SEO solutions to help your business rank higher and attract more customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Services?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our proven SEO strategies help businesses of all sizes achieve their online goals and drive sustainable growth.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our SEO <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your SEO success and long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SEOService;
