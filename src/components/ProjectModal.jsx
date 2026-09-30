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
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col bg-[#180d15] border border-[#3f177a] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3a1f30] bg-[#180d15]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#1e1019] text-[#d8b4fe] border border-[#5c3050]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620] border border-transparent hover:border-[#3a1f30] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-[#d1c8bb]">
          
          {/* Title & Subtitle */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#ede4d8] tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-[#9b6b8a] font-medium">
              {project.subtitle}
            </p>
            <p className="mt-2 text-sm text-[#a89889] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* The Problem Box */}
            <div className="p-4 rounded-lg bg-[#231520] border border-[#3a1f30]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-300 mb-2">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-[#a89889] leading-relaxed">
                {project.theProblem}
              </p>
            </div>

            {/* The Solution Box */}
            <div className="p-4 rounded-lg bg-[#231520] border border-[#3a1f30]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#a89889] leading-relaxed">
                {project.theSolution}
              </p>
            </div>

          </div>

          {/* Key Features & Engineering Highlights */}
          <div className="p-5 rounded-lg bg-[#231520] border border-[#3a1f30]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#ede4d8] mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#9b6b8a]" />
              <span>Key Features & Implementation</span>
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a89889] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c49b7c] mt-2 shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#a89889] mb-2.5">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-[#1e1019] text-[#ede4d8] border border-[#3a1f30]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#3a1f30] bg-[#180d15]">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#140a12] bg-[#c49b7c] hover:bg-[#b8896b] border border-[#c49b7c] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-[#a89889] hover:text-[#ede4d8] bg-[#261620] hover:bg-[#331b2a] border border-[#3a1f30] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
