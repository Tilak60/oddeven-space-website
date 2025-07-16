import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Handle smooth scrolling for hash links
    if (href.startsWith('/#')) {
      const targetId = href.substring(2); // Remove '/#'
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <>
      {/* Website name - Top Left Corner */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/" className="flex items-center group">
          <div className="w-10 h-10 rounded-lg neon-border flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <img 
              src="/images/logo.jpg" 
              alt="oddeven.space logo" 
              className="w-full h-full object-cover rounded-lg glow-effect"
            />
          </div>
          <span className="ml-3 text-xl font-bold transition-all duration-300 group-hover:neon-text-cyan neon-gradient-text drop-shadow-lg">
            oddeven.space
          </span>
        </Link>
      </div>

      {/* Three-line menu button - Top Right Corner */}
      <div className="fixed top-6 right-6 z-50">
        <button
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 transition-all duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-white hover:bg-cyan-400 drop-shadow-lg glow-effect ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-white hover:bg-cyan-400 drop-shadow-lg glow-effect ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 bg-white hover:bg-cyan-400 drop-shadow-lg glow-effect ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed top-20 right-6 z-40 w-80 neon-card rounded-2xl shadow-2xl py-6 animate-slide-down overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 opacity-50"></div>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative block px-8 py-4 text-slate-200 hover:neon-text-cyan transition-all duration-300 font-medium group z-10"
              onClick={() => handleNavClick(item.href)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300 rounded-xl mx-4"></div>
              <div className="relative z-10 flex items-center justify-between">
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                  {item.name}
                </span>
                <svg 
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyan-400 glow-effect" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-sm shadow-cyan-400/50"></div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;