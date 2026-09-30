import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, LANDING_CONTENT, PROJECTS_DATA } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Code, 
  Layers, 
  Database, 
  GraduationCap, 
  Briefcase, 
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  const featuredProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section Box */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#120726] border border-[#2d1357]">
          <div className="max-w-3xl">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1d0b3d] border border-[#431980] text-xs font-medium text-[#d8b4fe] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#a855f7]"></span>
              <span>Available for 2026/2027 Software & AI Engineering Roles</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm <span className="text-[#c084fc]">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl text-gray-200 font-medium leading-snug">
              {LANDING_CONTENT.tagline}
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              {LANDING_CONTENT.bio}
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] border border-[#9333ea] transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Sourabh_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#1b0b38] hover:bg-[#250f4e] border border-[#3b1773] transition-colors"
              >
                <FileDown className="w-4 h-4 text-[#c084fc]" />
                <span>Download Resume</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-gray-300 hover:text-white bg-[#14082b] hover:bg-[#1f0d3d] border border-[#2d1357] transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {LANDING_CONTENT.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl bg-[#120726] border border-[#2d1357] hover:border-[#4c1d95] transition-colors"
            >
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                {stat.label}
              </div>
              <div className="mt-1.5 text-xl sm:text-2xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-[#c084fc]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* What I Focus On */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#2d1357] pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Core Areas of Focus
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Key domains I spend my time building in and learning about.
              </p>
            </div>
            <Link
              to="/life"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#c084fc] hover:text-white transition-colors"
            >
              <span>View Full Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LANDING_CONTENT.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#120726] border border-[#2d1357] hover:border-[#4c1d95] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1e0d3d] border border-[#3b1773] flex items-center justify-center text-[#c084fc] mb-4">
                    {idx === 0 && <Code className="w-5 h-5" />}
                    {idx === 1 && <Layers className="w-5 h-5" />}
                    {idx === 2 && <Database className="w-5 h-5" />}
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects Preview Box */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#2d1357] pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Featured Projects
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Recent software platforms and machine learning applications.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#c084fc] hover:text-white transition-colors"
            >
              <span>All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 sm:p-7 rounded-xl bg-[#120726] border border-[#2d1357] hover:border-[#4c1d95] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#1d0b3d] text-[#d8b4fe] border border-[#431980]">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      GitHub Verified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#c084fc] font-medium mt-0.5">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-[#1b0b38] text-gray-300 border border-[#2d1357]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#220d47] flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c084fc] hover:text-white transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Snapshot Box */}
        <div className="p-7 sm:p-8 rounded-xl bg-[#120726] border border-[#2d1357]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-1">
                <Briefcase className="w-4 h-4" />
                <span>Industry Traineeships</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Internships at SAIL and CCL
              </h3>
              <p className="mt-2 text-sm text-gray-300 max-w-2xl leading-relaxed">
                Completed hands-on software development at Steel Authority of India Limited (warehouse inventory platform) 
                and Central Coalfields Limited (web development and responsive user interfaces).
              </p>
            </div>

            <Link
              to="/life"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#1b0b38] hover:bg-[#250f4e] border border-[#3b1773] transition-colors"
            >
              <span>Read Experience Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
