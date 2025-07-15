import { ArrowLeft, Share2, Heart, MessageCircle, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const SocialMediaService = () => {
  const features = [
    {
      icon: Share2,
      title: 'Content Creation',
      description: 'Engaging content that resonates with your audience across all platforms.'
    },
    {
      icon: Heart,
      title: 'Community Management',
      description: 'Build and nurture your social media community with active engagement.'
    },
    {
      icon: MessageCircle,
      title: 'Social Listening',
      description: 'Monitor brand mentions and conversations to stay ahead of trends.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategies',
      description: 'Proven strategies to increase followers and engagement rates.'
    }
  ];

  const benefits = [
    'Increased brand awareness',
    'Enhanced customer engagement',
    'Improved brand loyalty',
    'Higher website traffic',
    'Better customer insights',
    'Competitive advantage'
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy Development',
      description: 'Create a comprehensive social media strategy tailored to your brand.'
    },
    {
      step: '02',
      title: 'Content Planning',
      description: 'Plan and schedule engaging content across all platforms.'
    },
    {
      step: '03',
      title: 'Community Engagement',
      description: 'Active management and engagement with your audience.'
    },
    {
      step: '04',
      title: 'Analytics & Growth',
      description: 'Monitor performance and implement growth strategies.'
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Social Media <span className="text-pink-200">Marketing</span>
              </h1>
              <p className="text-xl text-pink-100 mb-8">
                Build a strong social media presence that connects with your audience and drives business growth. 
                Engage, inspire, and convert your followers into loyal customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-pink-200" />
                  <span>1M+ Followers Managed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-pink-200" />
                  <span>24/7 Monitoring</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-20"></div>
              <img
                src="/images/Sm.jpg"
                alt="Social Media Marketing"
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
              Our Social Media <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media management to build your brand and engage your audience effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                Why Choose Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Social Media Services?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our creative approach to social media marketing helps brands build authentic connections and drive results.
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
              Our Social Media <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a strategic approach to build and grow your social media presence effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

export default SocialMediaService;
