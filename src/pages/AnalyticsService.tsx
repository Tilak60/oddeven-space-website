import { useEffect } from 'react';
import { ArrowLeft, BarChart3, PieChart, TrendingUp, Target, CheckCircle } from 'lucide-react';

const AnalyticsService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Comprehensive tracking of all your marketing metrics and KPIs.'
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Clear, actionable insights through interactive dashboards and reports.'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Define and track specific business objectives with measurable outcomes.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify patterns and trends to optimize your marketing strategies.'
    }
  ];

  const benefits = [
    'Data-driven decision making',
    'Real-time performance monitoring',
    'ROI measurement and optimization',
    'Customer behavior insights',
    'Competitive analysis',
    'Predictive analytics'
  ];

  const process = [
    {
      step: '01',
      title: 'Data Collection',
      description: 'Set up comprehensive tracking across all your marketing channels.'
    },
    {
      step: '02',
      title: 'Analysis & Insights',
      description: 'Analyze data to uncover meaningful insights and opportunities.'
    },
    {
      step: '03',
      title: 'Reporting',
      description: 'Create customized reports and dashboards for easy monitoring.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Implement data-driven improvements to boost performance.'
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Branding & <span className="text-purple-200">Designing</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Create a compelling brand identity that resonates with your audience. 
                Professional design solutions that elevate your business presence.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20"></div>
              <img
                src="/images/B and D.jpg"
                alt="Branding & Designing"
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
              Our Analytics <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics solutions to help you understand your customers and optimize your marketing performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                Why Choose Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Branding Services?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our creative branding and design solutions help you build a strong, memorable brand identity.
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
              Our Analytics <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to turn your data into valuable business insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

export default AnalyticsService;
