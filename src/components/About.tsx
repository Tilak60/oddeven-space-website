import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            About oddeven.space
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up-delayed transform hover:text-gray-700 transition-colors duration-300">
            We're a full-service digital marketing agency dedicated to helping businesses 
            achieve extraordinary growth through innovative strategies and data-driven solutions.
          </p>
          <p className="text-gray-600 mb-8 animate-slide-up-delayed-2 transform hover:text-gray-700 transition-colors duration-300">
            Founded in 2016, we've helped over 500 companies transform their digital presence 
            and achieve remarkable results. Our team of experts combines creativity with 
            analytical thinking to deliver campaigns that not only look great but perform exceptionally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;