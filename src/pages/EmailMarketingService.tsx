import { useEffect } from 'react';
import { ArrowLeft, Mail, Send, Target, TrendingUp, CheckCircle } from 'lucide-react';

const EmailMarketingService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Professional email campaigns designed to convert and engage your audience.'
    },
    {
      icon: Send,
      title: 'Automation',
      description: 'Automated email sequences that nurture leads and drive sales.'
    },
    {
      icon: Target,
      title: 'Segmentation',
      description: 'Advanced audience segmentation for personalized messaging.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Detailed analytics to measure and optimize campaign performance.'
    }
  ];

  const benefits = [
    'High ROI marketing channel',
    'Direct customer communication',
    'Personalized messaging',
    'Automated lead nurturing',
    'Measurable results',
    'Cost-effective reach'
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive email marketing strategy for your business.'
    },
    {
      step: '02',
      title: 'List Building',
      description: 'Build and segment your email list for targeted campaigns.'
    },
    {
      step: '03',
      title: 'Campaign Creation',
      description: 'Design and create engaging email campaigns that convert.'
    },
    {
      step: '04',
      title: 'Analysis & Optimization',
      description: 'Analyze performance and optimize for better results.'
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Email <span className="text-indigo-200">Marketing</span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Connect directly with your customers through powerful email marketing campaigns. 
                Build relationships, drive sales, and grow your business with targeted messaging.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur opacity-20"></div>
              <img
                src="/images/PM.jpg"
                alt="Email Marketing"
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
              Our Email Marketing <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive email marketing solutions to engage your audience and drive conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                Why Choose Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Email Marketing?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our strategic approach to email marketing delivers exceptional results and ROI for your business.
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
              Our Email Marketing <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to create email campaigns that engage and convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

export default EmailMarketingService;
