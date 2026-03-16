import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/SEO';
import { GridItem } from '../types';

interface WorkProps {
  items: GridItem[];
}

const Work: React.FC<WorkProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get all projects and sort: featured first, then by default order
  const allProjects = useMemo(() => {
    return items
      .filter(item => item.type === 'project')
      .sort((a, b) => {
        // Featured projects come first (string comparison)
        const aFeatured = a.featured === 'true' || a.featured === true;
        const bFeatured = b.featured === 'true' || b.featured === true;
        if (aFeatured && !bFeatured) return -1;
        if (!aFeatured && bFeatured) return 1;
        return 0; // Keep original order for same featured status
      });
  }, [items]);

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set<string>();
    allProjects.forEach(project => {
      if (project.category) {
        cats.add(project.category);
      }
    });
    return ['All', ...Array.from(cats).sort()];
  }, [allProjects]);

  // Filter projects by selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return allProjects;
    }
    return allProjects.filter(project => project.category === selectedCategory);
  }, [allProjects, selectedCategory]);

  return (
    <>
      <SEO
        title="Work"
        description="A showcase of selected projects, architectural experiments, and software systems built with intent."
      />
      <header className="px-6 md:px-12 lg:px-24 pt-16 pb-12 max-w-[1400px] mx-auto w-full fade-in">
        <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase mb-4 block">
          Selected Projects
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter mb-8 text-gray-900">
          <span className="opacity-20">Selected</span><br />
          <span>Works</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl leading-snug">
          Technical leadership and hands-on engineering for high-performance platforms.
        </p>
      </header>

      <main className="px-6 md:px-12 lg:px-24 pb-32 max-w-[1400px] mx-auto w-full">
        {/* Category Filter */}
        <div className="mb-12 fade-in">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-500">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>

        {/* Non-masonry grid layout for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center border-t border-gray-100 mt-12">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">No projects found in this category.</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Work;
