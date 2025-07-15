import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Marketing: AI and Automation Trends for 2025',
      excerpt: 'Discover how artificial intelligence and automation are reshaping digital marketing strategies and what businesses need to know to stay competitive.',
      author: 'Sarah Johnson',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Social Media Marketing: Building Authentic Connections in 2025',
      excerpt: 'Learn the latest strategies for creating meaningful engagement and building genuine relationships with your audience on social platforms.',
      author: 'Mike Chen',
      date: 'January 12, 2025',
      readTime: '4 min read',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'SEO Essentials: Voice Search Optimization for Modern Businesses',
      excerpt: 'With voice search becoming mainstream, discover how to optimize your content for voice queries and improve your search rankings.',
      author: 'Emma Rodriguez',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Email Marketing Revolution: Personalization at Scale',
      excerpt: 'Explore advanced email marketing techniques that deliver personalized experiences to thousands of subscribers simultaneously.',
      author: 'David Park',
      date: 'January 8, 2025',
      readTime: '5 min read',
      category: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Content Marketing Trends: Video-First Strategy for 2025',
      excerpt: 'Video content continues to dominate. Learn how to create compelling video content that drives engagement and conversions.',
      author: 'Lisa Thompson',
      date: 'January 5, 2025',
      readTime: '4 min read',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'PPC Advertising: Maximizing ROI with Smart Bidding Strategies',
      excerpt: 'Discover advanced PPC strategies and smart bidding techniques that can significantly improve your return on advertising spend.',
      author: 'Alex Kim',
      date: 'January 3, 2025',
      readTime: '7 min read',
      category: 'PPC',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 6);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Marketing Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up-delayed">
            Stay updated with the latest trends, strategies, and insights in digital marketing 
            to keep your business ahead of the competition.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
            <div className="lg:flex">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-500">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-purple-600 transition-all duration-300 flex items-center group-hover:transform group-hover:translate-x-1">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fadeInUp"
              style={{ animationDelay: `${post.id * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-500 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-blue-600 font-semibold hover:text-purple-600 transition-all duration-300 flex items-center group-hover:transform group-hover:translate-x-1">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
