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
            We're a fresh, innovative digital marketing agency bringing modern solutions and 
            cutting-edge strategies to help businesses achieve extraordinary growth in today's digital landscape.
          </p>
          <p className="text-gray-600 mb-8 animate-slide-up-delayed-2 transform hover:text-gray-700 transition-colors duration-300">
            As a newly established company, we bring fresh perspectives and the latest industry insights 
            to every project. Our passionate team combines creativity with data-driven strategies 
            to deliver exceptional results that drive real business growth.
          </p>
          <p className="text-gray-600 mb-8 animate-slide-up-delayed-3 transform hover:text-gray-700 transition-colors duration-300">
            While we're new to the market, our expertise isn't. We're committed to building lasting 
            partnerships and delivering innovative solutions that help our clients stay ahead in 
            the competitive digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;