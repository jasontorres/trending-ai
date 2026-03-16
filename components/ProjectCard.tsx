import React from 'react';
import { Link } from 'react-router-dom';
import { GridItem } from '../types';

interface ProjectCardProps {
  project: GridItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const animationStyle = {
    animationDelay: `${index * 0.08}s`
  };

  return (
    <Link
      to={`/post/${project.slug}`}
      className="group fade-in-item"
      style={animationStyle}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden mb-6">
        <img
          src={project.image_url || project.imageUrl}
          alt={project.title || ""}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Featured Badge */}
        {(project.featured === 'true' || project.featured === true) && (
          <div className="absolute top-4 right-4">
            <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
              <span className="text-white text-[10px] font-bold uppercase tracking-wider">Featured</span>
            </div>
          </div>
        )}

        {/* Location Badge */}
        {project.location && (
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5 flex items-center space-x-1.5">
              <span className="material-symbols-outlined text-[14px] text-gray-600">location_on</span>
              <span className="text-[10px] font-medium text-gray-700">{project.location}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Category */}
        {project.category && (
          <div>
            <span className="text-[9px] font-black tracking-[0.3em] text-accent uppercase">
              {project.category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
          {project.description || project.body}
        </p>

        {/* Link Badge */}
        {project.link && (
          <div className="">
            <div className="inline-flex items-center space-x-2 ">
              <span className="material-symbols-outlined text-[14px] text-gray-600">link</span>
              <span className="text-[10px] font-medium text-gray-700">
                {new URL(project.link).hostname.replace('www.', '')}
              </span>
            </div>
          </div>
        )}

        {/* View Project Link */}
        <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-accent group-hover:translate-x-1 transition-transform pt-2">
          View Project
          <span className="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
