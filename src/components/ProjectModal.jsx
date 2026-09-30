import React, { useEffect } from 'react';
import { GithubIcon } from './Icons';
import { 
  X, 
  FolderGit2, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Centered Modal Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0e1526] border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sparkles className="w-3 h-3" />
                Featured Project
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-slate-300">
          
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-base text-cyan-400 font-medium">
              {project.subtitle}
            </p>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              {project.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* The Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem It Solves</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.theProblem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.theSolution}
              </p>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Key Architectural Highlights & Innovations</span>
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Local Monorepo Note if applicable */}
          {project.links.localPath && (
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Monorepo workspace path: <code className="text-slate-300">{project.links.localPath}</code></span>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Panel
          </button>
        </div>

      </div>
    </div>
  );
}
