import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  Sparkles, 
  Maximize2 
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Engineering', 'Full-Stack Systems', 'AI & Healthcare'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Technical Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              Each project is built around real architectural needs—from hybrid retrieval engines to enterprise inventory workflows. 
              Click <strong>Explore Project</strong> on any card to open its centered deep-dive panel.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#0a0f1d] border transition-all duration-300 p-6 sm:p-7 shadow-lg ${
                project.featured 
                  ? 'border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-cyan-500/10' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Top Badge Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-800/80 text-cyan-400 border border-slate-700/60">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-0.5">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                {/* Key Metrics / Highlights Pills */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 mt-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    {project.stats.map((s, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{s.label}</div>
                        <div className="text-xs font-bold text-slate-200 mt-0.5 truncate">{s.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-500">
                      +{project.techStack.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-cyan-600/80 hover:bg-cyan-500 shadow-md shadow-cyan-600/20 transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Explore Project</span>
                </button>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Centered Modal Popup */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}
