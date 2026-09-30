import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060911] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs border border-cyan-500/30">
                SK
              </span>
              <span className="font-bold text-slate-100 text-sm">{PERSONAL_INFO.name}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Aspiring AI Engineer • B.Tech CSE @ KIIT (2027)
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <button onClick={() => onNavigate('landing')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => onNavigate('life')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Life & Journey
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Configured for seamless deployment on</span>
            <span className="font-semibold text-slate-300">GitHub Pages</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
