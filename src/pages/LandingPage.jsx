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
        <div className="p-8 sm:p-12 rounded-2xl bg-[#180d15] border border-[#3a1f30]">
          <div className="max-w-3xl">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1019] border border-[#5c3050] text-xs font-medium text-[#c49b7c] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c49b7c]"></span>
              <span>Available for 2026/2027 Software & AI Engineering Roles</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#ede4d8] tracking-tight leading-tight">
              Hi, I'm <span className="text-[#9b6b8a]">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl text-[#d1c8bb] font-medium leading-snug">
              {LANDING_CONTENT.tagline}
            </p>

            <p className="mt-4 text-base sm:text-lg text-[#a89889] leading-relaxed">
              {LANDING_CONTENT.bio}
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#140a12] bg-[#c49b7c] hover:bg-[#b8896b] border border-[#c49b7c] transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Sourabh_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#ede4d8] bg-[#261620] hover:bg-[#331b2a] border border-[#3a1f30] transition-colors"
              >
                <FileDown className="w-4 h-4 text-[#9b6b8a]" />
                <span>Download Resume</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#a89889] hover:text-[#ede4d8] bg-[#1e1019] hover:bg-[#261620] border border-[#3a1f30] transition-colors"
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
              className="p-5 rounded-xl bg-[#180d15] border border-[#3a1f30] hover:border-[#5c3050] transition-colors"
            >
              <div className="text-xs uppercase tracking-wider font-semibold text-[#a89889]">
                {stat.label}
              </div>
              <div className="mt-1.5 text-xl sm:text-2xl font-bold text-[#ede4d8]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-[#9b6b8a]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* What I Focus On */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#3a1f30] pb-4">
            <div>
              <h2 className="text-2xl font-bold text-[#ede4d8]">
                Core Areas of Focus
              </h2>
              <p className="mt-1 text-sm text-[#a89889]">
                Key domains I spend my time building in and learning about.
              </p>
            </div>
            <Link
              to="/life"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#9b6b8a] hover:text-[#ede4d8] transition-colors"
            >
              <span>View Full Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LANDING_CONTENT.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#180d15] border border-[#3a1f30] hover:border-[#5c3050] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1e1019] border border-[#3a1f30] flex items-center justify-center text-[#9b6b8a] mb-4">
                    {idx === 0 && <Code className="w-5 h-5" />}
                    {idx === 1 && <Layers className="w-5 h-5" />}
                    {idx === 2 && <Database className="w-5 h-5" />}
                  </div>

                  <h3 className="text-lg font-bold text-[#ede4d8]">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#a89889] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects Preview Box */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#3a1f30] pb-4">
            <div>
              <h2 className="text-2xl font-bold text-[#ede4d8]">
                Featured Projects
              </h2>
              <p className="mt-1 text-sm text-[#a89889]">
                Recent software platforms and machine learning applications.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#9b6b8a] hover:text-[#ede4d8] transition-colors"
            >
              <span>All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 sm:p-7 rounded-xl bg-[#180d15] border border-[#3a1f30] hover:border-[#5c3050] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#1e1019] text-[#c49b7c] border border-[#5c3050]">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#a89889]">
                      GitHub Verified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#ede4d8]">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#9b6b8a] font-medium mt-0.5">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-[#a89889] leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-[#261620] text-[#a89889] border border-[#3a1f30]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2a1521] flex items-center justify-between">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9b6b8a] hover:text-[#ede4d8] transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#a89889] hover:text-[#ede4d8] transition-colors"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Snapshot Box */}
        <div className="p-7 sm:p-8 rounded-xl bg-[#180d15] border border-[#3a1f30]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9b6b8a] mb-1">
                <Briefcase className="w-4 h-4" />
                <span>Industry Traineeships</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#ede4d8]">
                Internships at SAIL and CCL
              </h3>
              <p className="mt-2 text-sm text-[#a89889] max-w-2xl leading-relaxed">
                Completed hands-on software development at Steel Authority of India Limited (warehouse inventory platform) 
                and Central Coalfields Limited (web development and responsive user interfaces).
              </p>
            </div>

            <Link
              to="/life"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#ede4d8] bg-[#261620] hover:bg-[#331b2a] border border-[#3a1f30] transition-colors"
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
