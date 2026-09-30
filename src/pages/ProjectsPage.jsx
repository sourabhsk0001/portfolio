import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import { GithubIcon } from '../components/Icons';
import { 
  FolderGit2, 
  Maximize2, 
  ArrowRight,
  Code
} from 'lucide-react';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI Engineering', 'Full-Stack Web', 'Machine Learning'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#120726] border border-[#2d1357]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e0d3d] border border-[#431980] text-xs font-semibold text-[#d8b4fe] mb-3">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Portfolio & Repositories</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                My Projects
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                An overview of software systems, machine learning applications, and web tools I have developed. 
                Click <strong>Explore Project</strong> on any card to view the centered detail panel.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0d051f] border border-[#2d1357]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#7c3aed] text-white border border-[#9333ea]'
                      : 'text-gray-300 hover:text-white hover:bg-[#1a0b36]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-xl bg-[#120726] border border-[#2d1357] hover:border-[#4c1d95] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#1e0d3d] text-[#d8b4fe] border border-[#431980]">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#2d1554] text-white border border-[#5b21b6]">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#c084fc] font-medium mt-0.5">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-[#1b0b38] text-gray-300 border border-[#2d1357]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-[#220d47] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] border border-[#9333ea] transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Explore Project</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-2.5 rounded-lg text-gray-400 hover:text-white bg-[#1b0b38] hover:bg-[#250f4e] border border-[#2d1357] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Centered Modal Detail View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
