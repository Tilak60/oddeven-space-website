import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Sample blog posts data (in real app, this would come from API/database)
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing: Trends to Watch in 2025",
      excerpt: "Discover the latest digital marketing trends that will shape the industry in 2025 and beyond.",
      author: "oddeven.space Team",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Digital Marketing",
      content: `
        <p>The digital marketing landscape is evolving at an unprecedented pace, and 2025 promises to be a year of significant transformation. As we navigate through this dynamic environment, it's crucial for businesses to stay ahead of the curve and adapt to emerging trends.</p>
        
        <h2>1. AI-Powered Personalization</h2>
        <p>Artificial Intelligence is revolutionizing how we approach customer personalization. From chatbots to predictive analytics, AI is enabling marketers to create more targeted and effective campaigns.</p>
        
        <h2>2. Voice Search Optimization</h2>
        <p>With the rise of smart speakers and voice assistants, optimizing for voice search has become essential. This shift requires a new approach to keyword strategy and content creation.</p>
        
        <h2>3. Interactive Content</h2>
        <p>Static content is becoming less effective. Interactive elements like polls, quizzes, and AR experiences are driving higher engagement rates and better user experiences.</p>
        
        <h2>4. Privacy-First Marketing</h2>
        <p>With increasing privacy concerns and regulations, marketers must adopt privacy-first strategies while still delivering personalized experiences.</p>
        
        <h2>Conclusion</h2>
        <p>The future of digital marketing is bright, but it requires adaptability and a willingness to embrace new technologies and strategies. By staying informed about these trends, businesses can position themselves for success in 2025 and beyond.</p>
      `
    },
    {
      id: 2,
      title: "SEO Best Practices: How to Rank Higher in Search Results",
      excerpt: "Learn the essential SEO strategies that will help your website climb the search engine rankings.",
      author: "SEO Expert",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "SEO",
      content: `
        <p>Search Engine Optimization (SEO) remains one of the most effective ways to drive organic traffic to your website. In this comprehensive guide, we'll explore the best practices that can help you rank higher in search results.</p>
        
        <h2>1. Keyword Research and Strategy</h2>
        <p>Understanding what your audience is searching for is the foundation of effective SEO. Use tools like Google Keyword Planner, SEMrush, or Ahrefs to identify high-value keywords.</p>
        
        <h2>2. On-Page Optimization</h2>
        <p>Optimize your title tags, meta descriptions, headers, and content for your target keywords. Ensure your content is valuable and answers user queries comprehensively.</p>
        
        <h2>3. Technical SEO</h2>
        <p>Focus on site speed, mobile optimization, SSL certificates, and proper URL structure. Technical SEO provides the foundation for all other optimization efforts.</p>
        
        <h2>4. Content Quality and Relevance</h2>
        <p>Create high-quality, original content that provides value to your audience. Regular updates and fresh content signal to search engines that your site is active and relevant.</p>
        
        <h2>5. Link Building</h2>
        <p>Build high-quality backlinks from reputable websites in your industry. Focus on earning links through valuable content and genuine relationships.</p>
        
        <h2>Final Thoughts</h2>
        <p>SEO is a long-term strategy that requires patience and consistency. By following these best practices and staying updated with algorithm changes, you can improve your search rankings and drive more organic traffic.</p>
      `
    },
    {
      id: 3,
      title: "Social Media Marketing: Building Your Brand's Online Presence",
      excerpt: "Master the art of social media marketing and connect with your audience effectively.",
      author: "Social Media Team",
      date: "January 8, 2025",
      readTime: "6 min read",
      category: "Social Media",
      content: `
        <p>Social media marketing has become an essential component of any successful digital marketing strategy. With billions of users across various platforms, social media offers unprecedented opportunities to connect with your audience and build brand awareness.</p>
        
        <h2>1. Platform Selection</h2>
        <p>Not all social media platforms are created equal. Choose platforms where your target audience is most active and where your content format aligns with platform preferences.</p>
        
        <h2>2. Content Strategy</h2>
        <p>Develop a consistent content strategy that includes a mix of educational, entertaining, and promotional content. Use the 80/20 rule: 80% valuable content, 20% promotional.</p>
        
        <h2>3. Engagement and Community Building</h2>
        <p>Social media is about building relationships. Respond to comments, engage with your audience, and create communities around your brand.</p>
        
        <h2>4. Visual Content</h2>
        <p>Visual content performs better on social media. Invest in high-quality images, videos, and graphics that align with your brand identity.</p>
        
        <h2>5. Analytics and Optimization</h2>
        <p>Use social media analytics to track performance and optimize your strategy. Monitor engagement rates, reach, and conversion metrics.</p>
        
        <h2>Conclusion</h2>
        <p>Social media marketing is about building authentic connections with your audience. By providing value and engaging consistently, you can build a strong online presence that drives business results.</p>
      `
    },
    {
      id: 4,
      title: "Web Development Trends: What's Hot in 2025",
      excerpt: "Explore the latest web development technologies and frameworks that are shaping the future.",
      author: "Dev Team",
      date: "January 5, 2025",
      readTime: "8 min read",
      category: "Web Development",
      content: `
        <p>The web development landscape is constantly evolving, with new technologies and frameworks emerging regularly. As we progress through 2025, several trends are shaping the future of web development.</p>
        
        <h2>1. Progressive Web Apps (PWAs)</h2>
        <p>PWAs continue to gain traction as they offer native app-like experiences in the browser. They provide offline functionality, push notifications, and improved performance.</p>
        
        <h2>2. Jamstack Architecture</h2>
        <p>JavaScript, APIs, and Markup (Jamstack) architecture is becoming increasingly popular for building fast, secure, and scalable web applications.</p>
        
        <h2>3. AI and Machine Learning Integration</h2>
        <p>AI and ML are being integrated into web applications for personalization, chatbots, and predictive analytics, enhancing user experiences.</p>
        
        <h2>4. WebAssembly (WASM)</h2>
        <p>WebAssembly is enabling near-native performance for web applications, opening up new possibilities for complex applications in the browser.</p>
        
        <h2>5. Modern JavaScript Frameworks</h2>
        <p>Frameworks like React, Vue.js, and Angular continue to evolve, with new features and improved performance optimizations.</p>
        
        <h2>6. Headless CMS</h2>
        <p>Headless content management systems are gaining popularity for their flexibility and ability to deliver content across multiple channels.</p>
        
        <h2>Looking Ahead</h2>
        <p>The future of web development is exciting, with new technologies enabling more powerful and efficient web applications. Staying updated with these trends is crucial for developers and businesses alike.</p>
      `
    },
    {
      id: 5,
      title: "Email Marketing: Strategies for Better Engagement",
      excerpt: "Boost your email marketing campaigns with proven strategies for higher open rates and conversions.",
      author: "Marketing Team",
      date: "January 3, 2025",
      readTime: "5 min read",
      category: "Email Marketing",
      content: `
        <p>Email marketing remains one of the most effective digital marketing channels, with an average ROI of $42 for every $1 spent. However, with crowded inboxes and increasing competition, it's crucial to implement strategies that drive engagement and conversions.</p>
        
        <h2>1. Segmentation and Personalization</h2>
        <p>Segment your email list based on demographics, behavior, and preferences. Personalized emails deliver 6x higher transaction rates than generic ones.</p>
        
        <h2>2. Compelling Subject Lines</h2>
        <p>Your subject line is the first impression. Make it compelling, clear, and action-oriented. A/B test different subject lines to optimize open rates.</p>
        
        <h2>3. Mobile Optimization</h2>
        <p>Over 60% of emails are opened on mobile devices. Ensure your emails are mobile-responsive and load quickly on all devices.</p>
        
        <h2>4. Automation and Drip Campaigns</h2>
        <p>Use automation to send targeted emails based on user behavior. Welcome series, abandoned cart emails, and re-engagement campaigns can significantly improve results.</p>
        
        <h2>5. Testing and Optimization</h2>
        <p>Continuously test different elements of your emails, including subject lines, content, CTAs, and send times. Use data to guide your optimization efforts.</p>
        
        <h2>6. Value-Driven Content</h2>
        <p>Focus on providing value to your subscribers. Educational content, exclusive offers, and helpful tips keep your audience engaged.</p>
        
        <h2>Best Practices</h2>
        <p>Remember to maintain list hygiene, respect subscriber preferences, and always provide an easy way to unsubscribe. Building trust with your audience is key to long-term success.</p>
      `
    },
    {
      id: 6,
      title: "Branding and Design: Creating a Memorable Brand Identity",
      excerpt: "Learn how to create a strong brand identity that resonates with your target audience.",
      author: "Design Team",
      date: "January 1, 2025",
      readTime: "6 min read",
      category: "Branding",
      content: `
        <p>A strong brand identity is more than just a logo or color scheme—it's the complete visual and emotional representation of your business. In today's competitive marketplace, a memorable brand identity can be the difference between success and obscurity.</p>
        
        <h2>1. Define Your Brand Strategy</h2>
        <p>Before diving into design, establish your brand's mission, values, and unique value proposition. This foundation will guide all your design decisions.</p>
        
        <h2>2. Know Your Audience</h2>
        <p>Understanding your target audience is crucial for creating a brand that resonates. Research their preferences, behaviors, and pain points.</p>
        
        <h2>3. Visual Identity Elements</h2>
        <p>Develop a cohesive visual identity including logo, color palette, typography, and imagery style. Consistency across all touchpoints is key.</p>
        
        <h2>4. Brand Voice and Messaging</h2>
        <p>Define how your brand communicates. Your brand voice should be consistent across all channels and reflect your brand's personality.</p>
        
        <h2>5. Application and Guidelines</h2>
        <p>Create brand guidelines that outline how your brand should be used across different mediums. This ensures consistency as your business grows.</p>
        
        <h2>6. Evolution and Adaptation</h2>
        <p>Brands need to evolve with changing market conditions and audience preferences. Regular brand audits help ensure your identity remains relevant.</p>
        
        <h2>Conclusion</h2>
        <p>A strong brand identity is an investment in your business's future. It builds trust, differentiates you from competitors, and creates emotional connections with your audience. Take the time to develop a brand that truly represents your business values and resonates with your target market.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen neon-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold neon-text mb-4">Post Not Found</h1>
          <Link to="/blog" className="neon-button px-6 py-3 rounded-lg font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen neon-bg">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          to="/blog" 
          className="flex items-center space-x-2 text-gray-300 hover:neon-text-cyan transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 glow-effect" />
          <span className="font-medium">Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Category */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="neon-gradient-text">{post.title}</span>
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-gray-400 flex items-center space-x-2">
                <Share2 className="w-5 h-5" />
                <span>Share:</span>
              </span>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-lg neon-card hover:neon-border-cyan flex items-center justify-center transition-all duration-300 group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 glow-effect" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg neon-card hover:neon-border-cyan flex items-center justify-center transition-all duration-300 group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 glow-effect" />
                </a>
                <a href="https://www.linkedin.com/in/oddeven-space-9a1b22375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg neon-card hover:neon-border-cyan flex items-center justify-center transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 glow-effect" />
                </a>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className={`prose prose-lg max-w-none transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{
              color: '#e5e7eb',
            }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="blog-content"
            />
          </div>

          {/* Call to Action */}
          <div className={`mt-12 p-8 neon-card rounded-2xl text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold mb-4 neon-gradient-text">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help you achieve your digital marketing goals.
            </p>
            <Link 
              to="/#contact" 
              className="inline-block px-8 py-3 neon-button rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
