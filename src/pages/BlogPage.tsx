import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing: Trends to Watch in 2025",
      excerpt: "Discover the latest digital marketing trends that will shape the industry in 2025 and beyond.",
      author: "oddeven.space Team",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "/images/PM.jpg",
      category: "Digital Marketing",
      featured: true
    },
    {
      id: 2,
      title: "SEO Best Practices: How to Rank Higher in Search Results",
      excerpt: "Learn the essential SEO strategies that will help your website climb the search engine rankings.",
      author: "SEO Expert",
      date: "January 10, 2025",
      readTime: "7 min read",
      image: "/images/SEO.jpg",
      category: "SEO"
    },
    {
      id: 3,
      title: "Social Media Marketing: Building Your Brand's Online Presence",
      excerpt: "Master the art of social media marketing and connect with your audience effectively.",
      author: "Social Media Team",
      date: "January 8, 2025",
      readTime: "6 min read",
      image: "/images/Sm.jpg",
      category: "Social Media"
    },
    {
      id: 4,
      title: "Web Development Trends: What's Hot in 2025",
      excerpt: "Explore the latest web development technologies and frameworks that are shaping the future.",
      author: "Dev Team",
      date: "January 5, 2025",
      readTime: "8 min read",
      image: "/images/WD.jpg",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Email Marketing: Strategies for Better Engagement",
      excerpt: "Boost your email marketing campaigns with proven strategies for higher open rates and conversions.",
      author: "Marketing Team",
      date: "January 3, 2025",
      readTime: "5 min read",
      image: "/images/PM.jpg",
      category: "Email Marketing"
    },
    {
      id: 6,
      title: "Branding and Design: Creating a Memorable Brand Identity",
      excerpt: "Learn how to create a strong brand identity that resonates with your target audience.",
      author: "Design Team",
      date: "January 1, 2025",
      readTime: "6 min read",
      image: "/images/B and D.jpg",
      category: "Branding"
    }
  ];

  const categories = ["All", "Digital Marketing", "SEO", "Social Media", "Web Development", "Email Marketing", "Branding"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen neon-bg">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-gray-300 hover:neon-text-cyan transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 glow-effect" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="neon-gradient-text">Our Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and tips from the world of 
              <span className="neon-text-cyan"> digital marketing</span> and 
              <span className="neon-text-purple"> web development</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'neon-button text-black'
                    : 'neon-card text-gray-300 hover:neon-text-cyan'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`neon-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group ${
                  post.featured ? 'md:col-span-2 lg:col-span-1' : ''
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:neon-text-cyan transition-all duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-cyan-400 group-hover:neon-text-cyan transition-all duration-300">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
