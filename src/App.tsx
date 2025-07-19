import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pages
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// Service Pages
import SEOService from './pages/SEOService';
import PPCService from './pages/PPCService';
import AnalyticsService from './pages/AnalyticsService';
import SocialMediaService from './pages/SocialMediaService';
import EmailMarketingService from './pages/EmailMarketingService';
import WebDevelopmentService from './pages/WebDevelopmentService';
import BrandingService from './pages/BrandingService';
import UIDesigningService from './pages/UIDesigningService';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Services />
              <About />
              <Blog />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/services/seo" element={<SEOService />} />
          <Route path="/services/ppc" element={<PPCService />} />
          <Route path="/services/ui-designing" element={<UIDesigningService />} />
          <Route path="/services/analytics" element={<AnalyticsService />} />
          <Route path="/services/branding" element={<BrandingService />} />
          <Route path="/services/social-media" element={<SocialMediaService />} />
          <Route path="/services/email-marketing" element={<EmailMarketingService />} />
          <Route path="/services/web-development" element={<WebDevelopmentService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;