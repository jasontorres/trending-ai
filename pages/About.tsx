import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About — Jason Torres"
        description="Tech founder, CTO, agency owner, game dev hobbyist, and digital democracy activist. 25 years building software, 15 years leading teams, 10 years founding companies."
      />

      {/* Hero Section */}
      <header className="px-6 md:px-12 lg:px-24 pt-16 pb-12 max-w-[1400px] mx-auto w-full fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter mb-8 text-gray-900">
          <span className="opacity-20">25 years</span><br />
          <span>of software engineering.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl mb-6 leading-snug">
          London based technical co-founder. Originally from Manila, Philippines. I've spent 25 years building software, 15 years leading engineering teams, and 10 years founding companies.
        </p>
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl leading-snug">
          I'm a tech founder, experienced CTO, agency owner, game dev hobbyist, and digital democracy activist. I build systems that scale and governments that answer to their citizens.
        </p>
      </header>

      {/* Content */}
      <main className="px-6 md:px-12 lg:px-24 pb-32 max-w-[1400px] mx-auto w-full">
        <div className="max-w-3xl">

          {/* Philosophy */}
          <section className="mb-16 fade-in">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Philosophy</h2>
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight border-l-4 border-black pl-6">
              Democracy dies in opacity. Technology should serve the public good—not replace human institutions, but make them accountable.
            </blockquote>
          </section>

          {/* Current Work */}
          <section className="mb-16 fade-in">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Current Work</h2>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">CTO at Skillstore</h3>
                <p className="text-gray-600 leading-relaxed">
                  Early stage startup.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Mashup Garage</h3>
                <p className="text-gray-600 leading-relaxed">
                  A software development agency focusing on startup and enterprise software engineering.
                </p>
              </div>
            </div>
          </section>

          {/* Track Record */}
          <section className="mb-16 fade-in">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Track Record</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I've co-founded companies across legal tech, events platforms, and same day deliveries. I've scaled startups from zero. I've built teams from scratch that thrive without me.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I love building and starting things. Whether it's architecting enterprise systems, building games, or leading teams—I'm happiest when I'm creating something new and bringing others along for the journey.
            </p>
          </section>

          {/* Civic Tech */}
          <section className="mb-16 fade-in">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Civic Tech & BetterGov.ph</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I founded BetterGov.ph—a 3,600-member civic tech movement making government data accessible to every Filipino. What started as a solo project is now a movement of volunteers.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Budget Dashboards</p>
                <p className="text-xs text-gray-500">Making public budgets readable</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Anomaly Detection</p>
                <p className="text-xs text-gray-500">ML-powered procurement monitoring</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Emergency Response</p>
                <p className="text-xs text-gray-500">Real-time citizen-government connection</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-900">OpenGovChain</p>
                <p className="text-xs text-gray-500">Open-source blockchain for transparency</p>
              </div>
            </div>
          </section>

          {/* How I Work */}
          <section className="mb-16 fade-in">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">How I Work</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm a generalist who enjoys going deep. I build, architect, and ship—sometimes alone, often in collaboration with communities and teams. I run an open-source tech community because I believe the best work happens when we build together.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              But I also love the focused flow of solo development: owning the entire stack, making decisions quickly, shipping and iterating. I just like building and starting things. Then inviting others to build with me.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="mb-16 fade-in">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Machine Learning', 'Data Visualization'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              I like to learn things and I code in languages like Ruby, Elixir, Go, C#, and others as well.
            </p>
          </section>

          {/* Game Development */}
          <section className="mb-16 fade-in">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Game Development</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I build games in Unity and Godot when I need to remember why I fell in love with code in the first place. There's something pure about game development—immediate feedback loops, creative problem-solving, building worlds instead of just databases.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              It's where engineering meets art, where systems thinking becomes play. Games keep me sharp and remind me that software can be joyful, not just functional.
            </p>
          </section>

          {/* Location & Status */}
          <section className="mb-16 fade-in">
            <div className="p-8 bg-gray-900 text-white rounded-2xl">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
                I split my time between Manila and London. Code daily. Still learning, still building, still shipping.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I'm building tools for transparency, systems for accountability, and games for joy. Sometimes all in the same week.
              </p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                This is what 25 years of software engineering looks like when you refuse to choose just one thing.
              </p>
            </div>
          </section>

        </div>
      </main >
    </>
  );
};

export default About;
