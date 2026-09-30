import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  FileDown, 
  Menu, 
  X, 
  Terminal, 
  FolderGit2, 
  HeartHandshake, 
  Mail 
} from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Home', icon: Terminal },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'life', label: 'Life & Journey', icon: HeartHandshake },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090d16]/85 border-b border-slate-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('landing')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                SK
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>AI Engineer</span>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Direct Resume Download */}
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Sourabh_Kumar_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/20 hover:shadow-cyan-500/30 transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c121e] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </button>
            );
          })}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Sourabh_Kumar_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600"
            >
              <FileDown className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
