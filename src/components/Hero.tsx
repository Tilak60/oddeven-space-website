import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{
            filter: 'brightness(0.8) contrast(1.2)',
          }}
        >
          <source src="/images/Home Video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay for additional transparency and blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/40 to-purple-900/60"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 h-full">
        <div className="flex justify-center items-center h-full min-h-[80vh]">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Welcome to
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              oddeven.space
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up-delayed">
              Where creativity meets innovation. Transform your digital presence with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delayed-2">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                Explore Services
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/10 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;