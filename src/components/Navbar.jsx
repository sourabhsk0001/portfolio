import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  FileDown, 
  Menu, 
  X, 
  Home, 
  FolderGit2, 
  User, 
  Mail 
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/projects', label: 'Projects', icon: FolderGit2 },
    { to: '/life', label: 'Life & Experience', icon: User },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#180d15] border-b border-[#3a1f30]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#c49b7c] text-[#140a12] flex items-center justify-center font-bold text-sm border border-[#c49b7c]">
              SK
            </div>
            <div>
              <div className="text-sm font-semibold text-[#ede4d8] group-hover:text-[#9b6b8a] transition-colors">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-[#9b6b8a]">
                Computer Science @ KIIT
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1e1019] p-1 rounded-lg border border-[#3a1f30]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#c49b7c] text-[#140a12] border border-[#c49b7c]'
                        : 'text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620]'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </NavLink>
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
              className="p-2 rounded-lg text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620] border border-transparent hover:border-[#3a1f30] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620] border border-transparent hover:border-[#3a1f30] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Direct Resume Download */}
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Sourabh_Kumar_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#140a12] bg-[#c49b7c] hover:bg-[#b8896b] border border-[#c49b7c] transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620] border border-[#3a1f30]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#3a1f30] bg-[#180d15] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#c49b7c] text-[#140a12] border border-[#c49b7c]'
                      : 'text-[#a89889] hover:bg-[#261620] hover:text-[#ede4d8]'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Sourabh_Kumar_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-[#140a12] bg-[#c49b7c] hover:bg-[#b8896b] border border-[#c49b7c]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
