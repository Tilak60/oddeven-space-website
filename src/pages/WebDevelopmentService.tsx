import { ArrowLeft, Code, Smartphone, Zap, Globe, Users, Clock, CheckCircle } from 'lucide-react';

const WebDevelopmentService = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored web solutions built with modern technologies and best practices.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect performance across all devices.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for speed and user experience.'
    },
    {
      icon: Globe,
      title: 'SEO Ready',
      description: 'Built with SEO best practices to help your website rank higher.'
    }
  ];

  const benefits = [
    'Custom design and functionality',
    'Mobile-responsive websites',
    'Fast loading speeds',
    'SEO optimized structure',
    'Scalable architecture',
    'Ongoing support and maintenance'
  ];

  const process = [
    {
      step: '01',
      title: 'Planning & Strategy',
      description: 'Define project scope, requirements, and technical specifications.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and design mockups for your approval.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your website using modern technologies and frameworks.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment to ensure everything works perfectly.'
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Web <span className="text-cyan-200">Development</span>
              </h1>
              <p className="text-xl text-cyan-100 mb-8">
                Build powerful, scalable web applications that drive business growth. 
                From simple websites to complex web applications, we deliver solutions that work.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-200" />
                  <span>200+ Websites Built</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-cyan-200" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur opacity-20"></div>
              <img
                src="/images/WD.jpg"
                alt="Web Development"
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
              Our Web Development <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete web development solutions from concept to launch, designed to meet your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                Why Choose Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Web Development?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our expert development team creates websites that not only look great but also perform exceptionally.
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
              Our Development <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your website is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

export default WebDevelopmentService;
