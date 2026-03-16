
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { GridItem } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PostDetailProps {
  items: GridItem[];
}

const PostDetail: React.FC<PostDetailProps> = ({ items }) => {
  const { slug } = useParams<{ slug: string }>();
  const item = items.find((i) => i.slug === slug);

  // Layout Navigation Logic
  const currentIndex = items.findIndex(i => i.slug === slug);
  const nextItem = currentIndex > 0 ? items[currentIndex - 1] : null; // Newer (lower index)
  const prevItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null; // Older (higher index)


  if (!item) {
    // If we have items but can't find the slug, go back
    if (items.length > 0) return <Navigate to="/" replace />;
    // Otherwise show loading/nothing
    return null;
  }

  const title = item.seoTitle || item.title || item.overlayText;
  const description = item.seoDescription || item.subtitle || (item.body ? item.body.split('\n')[0] : item.description);

  return (
    <div className="bg-white min-h-screen fade-in px-6">
      <SEO 
        title={title}
        description={description}
        image={item.imageUrl}
        type="article"
      />
      <div className="max-w-4xl mx-auto py-20">
        <Link 
          to="/" 
          className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black mb-16 transition-all group"
        >
          <span className="material-symbols-outlined text-[16px] mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Index
        </Link>

        {item.imageUrl && (
          <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-black/5 shadow-2xl">
            <img 
              src={item.imageUrl} 
              alt={item.title || ""} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-12">
          <header className="space-y-4">
             {item.category && (
              <span className="text-[11px] font-black tracking-[0.3em] text-accent uppercase">
                {item.category}
              </span>
            )}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[0.9]">
              {item.title || item.overlayText}
            </h1>
            
            {/* Project Link */}
            {item.link && (
              <div className="pt-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors group"
                >
                  <span className="text-sm font-bold uppercase tracking-wider">Visit Website</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            )}
          </header>

          <article className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed font-medium">
            {item.body ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.body}</ReactMarkdown>
            ) : (
              <p>{item.content || item.description}</p>
            )}
          </article>
        </div>
        
        
        <div className="mt-32 pt-16 border-t border-gray-100 flex flex-col gap-12">
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {prevItem ? (
              <Link 
                to={`/post/${prevItem.slug}`}
                className="group flex flex-col items-start gap-2 text-left"
              >
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
                  Previous 
                </span>
                <span className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors leading-tight">
                  {prevItem.title || prevItem.overlayText}
                </span>
              </Link>
            ) : (
              <div /> /* Empty spacer */
            )}

            {nextItem ? (
              <Link 
                to={`/post/${nextItem.slug}`}
                className="group flex flex-col items-end gap-2 text-right"
              >
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
                  Next 
                </span>
                <span className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors leading-tight">
                  {nextItem.title || nextItem.overlayText}
                </span>
              </Link>
            ) : (
              <div /> /* Empty spacer */
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pt-12 border-t border-gray-50">
            <div className="space-y-4">
               <p className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em]">Share This</p>
               <div className="flex space-x-8">
                  <button className="text-[11px] font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Twitter</button>
                  <button className="text-[11px] font-bold text-gray-400 hover:text-black uppercase tracking-widest transition-colors">Copy Link</button>
               </div>
            </div>
            <Link 
              to="/" 
              className="bg-black text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-accent transition-all hover:scale-105"
            >
              Return to Index
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
