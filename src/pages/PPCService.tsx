import { ArrowLeft, MousePointer, TrendingUp, Target, BarChart3, Users, Clock, CheckCircle } from 'lucide-react';

const PPCService = () => {
  const features = [
    {
      icon: MousePointer,
      title: 'Google Ads Management',
      description: 'Professional Google Ads campaigns optimized for maximum ROI and conversions.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Tracking',
      description: 'Advanced tracking setup to measure and optimize campaign performance.'
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Precise targeting to reach your ideal customers at the right moment.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Detailed reports and insights to track your advertising investment.'
    }
  ];

  const benefits = [
    'Immediate traffic and visibility',
    'Precise audience targeting',
    'Measurable ROI',
    'Budget control and flexibility',
    'Quick results and scalability',
    'A/B testing capabilities'
  ];

  const process = [
    {
      step: '01',
      title: 'Campaign Strategy',
      description: 'Develop a comprehensive PPC strategy aligned with your business goals.'
    },
    {
      step: '02',
      title: 'Setup & Launch',
      description: 'Create and launch optimized campaigns across relevant platforms.'
    },
    {
      step: '03',
      title: 'Optimization',
      description: 'Continuously optimize campaigns for better performance and ROI.'
    },
    {
      step: '04',
      title: 'Reporting',
      description: 'Regular performance reports and strategic recommendations.'
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                PPC <span className="text-green-200">Advertising</span>
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Drive instant traffic and leads with strategic pay-per-click advertising campaigns. 
                Get your business in front of customers who are actively searching for your services.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-200" />
                  <span>300+ Campaigns Managed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-200" />
                  <span>Real-time Optimization</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur opacity-20"></div>
              <img
                src="/images/PM.jpg"
                alt="PPC Advertising"
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
              Our PPC <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive PPC management services to maximize your advertising ROI and drive quality traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                Why Choose Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">PPC Services?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our data-driven PPC strategies deliver immediate results and sustainable growth for your business.
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
              Our PPC <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your PPC campaigns deliver maximum results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

export default PPCService;
