import React, { useEffect } from 'react';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  Code
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Centered Modal Container */}
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col bg-[#120726] border border-[#3f177a] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2d1357] bg-[#0d051f]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#1e0d3d] text-[#d8b4fe] border border-[#431980]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a0b36] border border-transparent hover:border-[#2d1357] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-gray-200">
          
          {/* Title & Subtitle */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-[#c084fc] font-medium">
              {project.subtitle}
            </p>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* The Problem Box */}
            <div className="p-4 rounded-lg bg-[#180a33] border border-[#2d1357]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-300 mb-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.theProblem}
              </p>
            </div>

            {/* The Solution Box */}
            <div className="p-4 rounded-lg bg-[#180a33] border border-[#2d1357]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.theSolution}
              </p>
            </div>

          </div>

          {/* Key Features & Engineering Highlights */}
          <div className="p-5 rounded-lg bg-[#180a33] border border-[#2d1357]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#c084fc]" />
              <span>Key Features & Implementation</span>
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2 shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-[#1e0d3d] text-white border border-[#3b1773]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#2d1357] bg-[#0d051f]">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] border border-[#9333ea] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:text-white bg-[#1b0b38] hover:bg-[#250f4e] border border-[#3b1773] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
