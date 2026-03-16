
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { GridItem } from '../types';

interface ThoughtsProps {
  items: GridItem[];
}

const Thoughts: React.FC<ThoughtsProps> = ({ items }) => {
  // Filter for items that are essentially blog posts or articles
  const articles = items.filter(item => 
    (item.type === 'article' || item.type === 'text') && item.slug
  );

  return (
    <div className="bg-white min-h-screen fade-in px-6 md:px-12 lg:px-24">
      <SEO 
        title="Thoughts" 
        description="A collection of long-form writing on engineering culture, architectural design, and the philosophy of building software." 
      />
      <div className="max-w-[1400px] mx-auto py-20">
        <header className="mb-24 space-y-4">
          <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
            Essays & Field Notes
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-[0.9]">
            Thoughts.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl leading-snug pt-4">
            A collection of long-form writing on engineering culture, architectural design, and the philosophy of building software.
          </p>
        </header>

        <div className="space-y-16 md:space-y-24">
          {articles.map((article, index) => (
            <Link 
              key={article.id}
              to={`/post/${article.slug}`}
              className="block group fade-in-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 group-hover:text-accent transition-colors leading-[0.95]">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <p className="text-sm md:text-base text-gray-400 font-medium max-w-2xl line-clamp-1">
                      {article.category && <span className="text-accent/60 mr-2">— {article.category}</span>}
                      {article.subtitle || (article.body ? article.body.split('\n')[0] : article.description)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {articles.length === 0 && (
            <div className="py-20 border-t border-gray-100">
               <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">No thoughts captured yet.</p>
            </div>
          )}
        </div>

        <div className="mt-40 pt-16 border-t border-gray-100">
           <Link 
            to="/" 
            className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-all group"
          >
            <span className="material-symbols-outlined text-[16px] mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
