import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#3a1f30] bg-[#110910] text-[#a89889] py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-6 rounded bg-[#c49b7c] text-[#140a12] flex items-center justify-center font-bold text-xs border border-[#c49b7c]">
                SK
              </span>
              <span className="font-bold text-[#ede4d8] text-sm">{PERSONAL_INFO.name}</span>
            </div>
            <p className="mt-1 text-xs text-[#a89889]">
              Computer Science & Engineering @ KIIT (Class of 2027)
            </p>
          </div>

          {/* Multi-Page Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#a89889]">
            <Link to="/" className="hover:text-[#ede4d8] transition-colors">
              Home
            </Link>
            <Link to="/projects" className="hover:text-[#ede4d8] transition-colors">
              Projects
            </Link>
            <Link to="/life" className="hover:text-[#ede4d8] transition-colors">
              Life & Experience
            </Link>
            <Link to="/contact" className="hover:text-[#ede4d8] transition-colors">
              Contact
            </Link>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620] border border-transparent hover:border-[#3a1f30] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620] border border-transparent hover:border-[#3a1f30] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620] border border-[#3a1f30] transition-colors cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#2a1521] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89889]">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind CSS.
          </p>
          <p className="text-[#a89889]">
            Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
