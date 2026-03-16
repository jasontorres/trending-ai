import React from 'react';
import SEO from '../components/SEO';
import profileData from '../relevance-linkedin-profile.json';

function proxyImageUrl(url?: string | null): string {
  if (!url) return "";
  return `https://fetch.hello9598.workers.dev/?url=${encodeURIComponent(url)}`;
}

const CV: React.FC = () => {
  const { about, headline, experiences, city, country, profile_image_url, linkedin_url } = profileData;

  return (
    <>
      <SEO
        title="CV — Jason Torres"
        description="Curriculum Vitae of Jason Torres: CTO, technical co-founder, and seasoned technology leader with over 15 years of experience."
      />

      {/* Header Section */}
      <header className="px-6 md:px-12 lg:px-24 pt-16 pb-12 mx-auto w-full max-w-5xl fade-in">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          {/* Profile Image */}
          {profile_image_url && (
            <div className="flex-shrink-0">
              <img
                src={proxyImageUrl(profile_image_url)}
                alt="Jason Torres"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
              />
            </div>
          )}

          {/* Header Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-4 text-gray-900">
              Jason Torres
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium mb-4 leading-snug max-w-xl">
              {headline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>{city}, {country}</span>
              </div>
              {linkedin_url && (
                <a
                  href={linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent hover:underline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* About Section */}
        {about && (
          <div className="max-w-5xl">
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {about}
            </p>
          </div>
        )}
      </header>

      {/* Experience Section */}
      <main className="px-6 md:px-12 lg:px-24 pb-32 mx-auto w-full max-w-5xl">
        <div className="max-w-4xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Professional Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="fade-in-item relative pl-8 border-l-2 border-gray-200"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-white border-2 border-gray-400 rounded-full">
                  {exp.is_current && (
                    <div className="absolute inset-0 m-0.5 bg-accent rounded-full animate-pulse" />
                  )}
                </div>

                {/* Company Info */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    {exp.company_logo_url && (
                      <img
                        src={proxyImageUrl(exp.company_logo_url)}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                      />
                    )}

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <a
                          href={exp.company_linkedin_url || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-gray-700 hover:text-accent"
                        >
                          {exp.company}
                        </a>
                        {exp.is_current && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className="text-sm text-gray-500 md:text-right flex-shrink-0">
                    <div className="font-medium">{exp.date_range}</div>
                    {exp.duration && (
                      <div className="text-xs text-gray-400">{exp.duration}</div>
                    )}
                    {exp.location && (
                      <div className="text-xs text-gray-400 mt-1">{exp.location}</div>
                    )}
                  </div>
                </div>

                {/* Description */}
                {exp.description && (
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-4">
                    {exp.description}
                  </p>
                )}

                {/* Job Type */}
                {exp.job_type && (
                  <div className="text-xs text-gray-400">
                    {exp.job_type}
                  </div>
                )}

                {/* Skills */}
                {exp.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.split(' · ').map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CV;
