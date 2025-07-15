import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact', href: '/#contact' }
  ];

  const isOnServicePage = location.pathname.startsWith('/services/');

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled || isOnServicePage ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ring-2 ring-blue-500/20">
              <img 
                src="/images/logo.jpg" 
                alt="oddeven.space logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className={`ml-3 text-xl font-bold transition-all duration-300 group-hover:text-blue-600 text-gray-900`}>
              oddeven.space
            </span>
          </Link>

          {/* Three-line menu button in top right corner */}
          <button
            className={`flex flex-col justify-center items-center w-8 h-8 space-y-1 transition-all duration-300 hover:scale-110 text-gray-700 hover:text-blue-600`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 bg-gray-700 hover:bg-blue-600 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 bg-gray-700 hover:bg-blue-600 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 bg-gray-700 hover:bg-blue-600 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-white/98 backdrop-blur-md rounded-xl shadow-2xl mt-2 py-4 border border-gray-200/70 animate-slide-down">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;