
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { getPortfolioItems } from './contentService';
import { GridItem } from './types';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Thoughts from './pages/Thoughts';
import Work from './pages/Work';
import About from './pages/About';
import CV from './pages/CV';

const App: React.FC = () => {
  const items = getPortfolioItems();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change and close mobile menu
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className={`w-full py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center bg-gradient-to-r from-violet-50 to-fuchsia-50 transition-all duration-300 sticky top-0 z-50 ${scrolled ? 'border-b border-violet-100 bg-white/95 backdrop-blur-md py-4' : ''}`}>
        <Link to="/" className="text-xl font-bold tracking-tighter bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent flex items-center">
          Trending AI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <Link className={`${location.pathname === '/' ? 'text-violet-600' : 'hover:text-violet-600'} transition-colors`} to="/">Articles</Link>
          <Link className={`${location.pathname === '/work' ? 'text-violet-600' : 'hover:text-violet-600'} transition-colors`} to="/work">Tools</Link>
          <Link className={`${location.pathname === '/thoughts' ? 'text-violet-600' : 'hover:text-violet-600'} transition-colors`} to="/thoughts">Trends</Link>
          <Link className={`${location.pathname === '/about' ? 'text-violet-600' : 'hover:text-violet-600'} transition-colors`} to="/about">About</Link>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/jasontorres"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-700 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://x.com/jasontorres"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-700 transition-colors"
            aria-label="X/Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/jasontorres/trending-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Star on GitHub
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50 to-fuchsia-50">
          <div className="flex flex-col h-full pt-24 px-6">
            <div className="flex flex-col space-y-6 text-2xl font-bold tracking-tight">
              <Link
                className={`${location.pathname === '/' ? 'text-violet-600' : 'text-gray-500'} hover:text-violet-600 transition-colors`}
                to="/"
              >
                Articles
              </Link>
              <Link
                className={`${location.pathname === '/work' ? 'text-violet-600' : 'text-gray-500'} hover:text-violet-600 transition-colors`}
                to="/work"
              >
                Tools
              </Link>
              <Link
                className={`${location.pathname === '/thoughts' ? 'text-violet-600' : 'text-gray-500'} hover:text-violet-600 transition-colors`}
                to="/thoughts"
              >
                Trends
              </Link>
              <Link
                className={`${location.pathname === '/about' ? 'text-violet-600' : 'text-gray-500'} hover:text-violet-600 transition-colors`}
                to="/about"
              >
                About
              </Link>
            </div>

            <div className="mt-auto pb-12 flex flex-col space-y-6">
              <a
                href="https://github.com/jasontorres"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-violet-600 hover:text-violet-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://x.com/jasontorres"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-violet-600 hover:text-violet-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-sm font-medium">X / Twitter</span>
              </a>
              <a
                href="https://github.com/jasontorres/trending-ai"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity text-center"
              >
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/work" element={<Work items={items} />} />
        <Route path="/thoughts" element={<Thoughts items={items} />} />
        <Route path="/post/:slug" element={<PostDetail items={items} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
      </Routes>

      {/* Simple Footer */}
      <footer className="border-t border-violet-100 py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-violet-50/50 to-fuchsia-50/50 mt-auto">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-widest">Trending AI</p>
            <p className="text-[10px] text-gray-500">© {new Date().getFullYear()} — Tracking the pulse of AI innovation.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://x.com/jasontorres" className="text-[10px] font-bold text-gray-500 hover:text-violet-600 uppercase tracking-widest">Twitter</a>
            <a href="https://github.com/jasontorres/trending-ai" className="text-[10px] font-bold text-gray-500 hover:text-violet-600 uppercase tracking-widest">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

