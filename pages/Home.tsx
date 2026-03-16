import React from 'react';
import Card from '../components/Card';
import SEO from '../components/SEO';
import { GridItem } from '../types';

interface HomeProps {
  items: GridItem[];
}

const Home: React.FC<HomeProps> = ({ items }) => {
  // Filter out projects from landing page and sort descending
  const nonProjectItems = items
    .filter(item => item.type !== 'project')
    .sort((a, b) => {
      // Sort by published_at timestamp (most recent first)
      if (a.published_at && b.published_at) {
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
      }
      
      // If only one has published_at, prioritize it
      if (a.published_at) return -1;
      if (b.published_at) return 1;
      
      // Fall back to filename number sorting (descending)
      const getNum = (id: string) => {
        const match = id.match(/(\d+)-/);
        return match ? parseInt(match[1], 10) : 999;
      };
      return getNum(b.id) - getNum(a.id);
    });

  return (
    <>
      <SEO />
      {/* Hero Section */}
      <header className="px-6 md:px-12 lg:px-24 pt-16 pb-12 max-w-[1400px] mx-auto w-full fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter mb-8 text-gray-900">
          <span className="opacity-20">Hello.</span><br />
          <span>I'm Jason Torres.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl leading-snug">
          I'm a tech founder, experienced CTO, an agency owner, game dev hobbyist, civic-tech leader, data transparency, and digital democracy activist.
        </p>
      </header>

      {/* Masonry Grid */}
      <main className="px-6 md:px-12 lg:px-24 pb-32 max-w-[1400px] mx-auto w-full">
        <div className="grid-container">
          {nonProjectItems.map((item, index) => (
            <Card key={item.id} item={item} index={index} />
          )).reverse()}
        </div>
      </main>
    </>
  );
};

export default Home;
