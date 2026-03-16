
import React from 'react';
import { Link } from 'react-router-dom';
import { GridItem } from '../types';

interface CardProps {
  item: GridItem;
  index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  // Grid span logic for dense packing
  const getGridSpan = (width: string | undefined) => {
    switch (width) {
      case 'wide': return 'col-span-12 md:col-span-6 lg:col-span-6';
      case 'full': return 'col-span-12';
      default: return 'col-span-12 sm:col-span-6 lg:col-span-3';
    }
  };

  const containerClass = `
    ${getGridSpan(item.width)} 
    fade-in-item
    rounded-3xl overflow-hidden border border-black/5 shadow-[0_2px_12px_rgba(0,0,0,0.01)]
    transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
    bg-white group block
  `;

  const animationStyle = {
    animationDelay: `${index * 0.06}s`
  };

  const renderContent = () => {
    switch (item.type) {
      case 'image':
      case 'project':
        return (
          <div className="relative w-full h-full group bg-neutral-200 aspect-[4/3] min-h-[320px] p-4">
            <img
              src={item.imageUrl}
              alt={item.title || ""}
              className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
            />
            {item.overlayText && (
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-block bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <span className="text-white text-[11px] font-medium">{item.overlayText}</span>
                </div>
              </div>
            )}
            {item.title && !item.overlayText && (

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
                <div className="inline-block bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/10">
                  <span className="text-white text-[11px] font-medium">{item.title}</span>
                </div>
              </div>
            )}
          </div>
        );

      case 'article':
      case 'text':
        return (
          <div className="p-8 h-full flex flex-col bg-gray-100 min-h-[220px]">
            {item.category && (
              <div className="mb-4">
                <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">{item.category}</span>
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
              {item.title}
            </h3>
            <div className="text-gray-500 text-sm leading-relaxed overflow-hidden line-clamp-4 lg:line-clamp-6">
              {item.body || item.content || item.description}
            </div>
            {item.slug && (
              <div className="mt-auto pt-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-accent group-hover:translate-x-1 transition-transform">
                Read more
                <span className="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
              </div>
            )}
          </div>
        );

      case 'link':
        return (
          <div className="p-6 h-full flex flex-col justify-between bg-white group min-h-[260px]">
            <div className="mb-4">
              <div className="w-full aspect-[16/9] bg-black rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 leading-tight">{item.title}</h3>
            </div>
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-1.5 rounded-full text-[10px] font-bold text-gray-500 group-hover:bg-gray-200 transition-colors">
                <span>{item.linkUrl || 'x.com'}</span>
                <span className="material-symbols-outlined text-[14px]">north_east</span>
              </div>
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="relative w-full h-full overflow-hidden group min-h-[280px]">
            <img
              src={item.imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[30px] filled text-black">play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
              <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 shadow-sm flex items-center space-x-2 max-w-full overflow-hidden">
                <span className="text-[11px] text-gray-600 font-semibold truncate">{item.linkUrl || 'watch.video/clip'}</span>
                <span className="material-symbols-outlined text-[14px] text-gray-500">link</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (item.slug && (item.type === 'article' || item.type === 'image' || item.type === 'project')) {
    return (
      <Link to={`/post/${item.slug}`} className={containerClass} style={animationStyle}>
        {renderContent()}
      </Link>
    );
  }

  if (item.type === 'link' && item.linkUrl) {
    return (
      <a href={`https://${item.linkUrl}`} target="_blank" rel="noopener noreferrer" className={containerClass} style={animationStyle}>
        {renderContent()}
      </a>
    );
  }

  return (
    <div className={containerClass} style={animationStyle}>
      {renderContent()}
    </div>
  );
};

export default Card;
