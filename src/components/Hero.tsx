import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center neon-bg overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{
            filter: 'brightness(0.7) contrast(1.3) saturate(1.2) hue-rotate(10deg)',
          }}
        >
          <source src="/images/Home Video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Enhanced video overlay with neon gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-cyan-900/50 to-purple-900/70 animate-pulse-slow"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 left-5 md:top-20 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float neon-glow"></div>
        <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed neon-glow"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl animate-bounce-slow neon-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 md:w-36 md:h-36 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse-slow neon-glow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 h-full">
        <div className="flex flex-col justify-center items-center h-full min-h-[80vh] text-center">
          
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/images/frontlogo.png" 
              alt="oddeven.space logo" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain mx-auto drop-shadow-2xl glow-effect"
            />
          </div>

          {/* Main Heading with Typing Effect */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6">
              <span className="neon-gradient-text">
                Welcome to
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8">
              <span className="neon-text" style={{ animationDelay: '0.5s' }}>
                oddeven.space
              </span>
            </h2>
          </div>

          {/* Animated Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              <span className="neon-text-cyan font-semibold">Transform</span> your digital presence with{' '}
              <span className="neon-text-purple font-semibold">cutting-edge</span> solutions where{' '}
              <span className="neon-text-cyan font-semibold">creativity</span> meets{' '}
              <span className="neon-text-pink font-semibold">innovation</span>
            </p>
          </div>

          {/* Animated CTA Button */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToNext}
              className="group relative px-8 py-4 neon-button rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 neon-border"
            >
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToNext}
              className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:neon-text-cyan glow-effect" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;