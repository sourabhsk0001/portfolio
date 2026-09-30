import React from 'react';
import { PERSONAL_INFO, HERO_CONTENT } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Code2, 
  Database,
  BrainCircuit,
  Workflow
} from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
};

export default function LandingSection({ onNavigate }) {
  return (
    <section id="landing" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 font-medium">Aspiring AI Engineer</span>
            <span className="text-slate-500">•</span>
            <span>B.Tech CSE @ KIIT (2027)</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-200 leading-snug">
            Building practical, intelligent software that people can actually rely on.
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            I'm a Computer Science student passionate about <strong>AI Engineering</strong>. 
            While artificial intelligence often feels filled with buzzwords, my mission is simple: 
            take modern machine learning models and turn them into predictable, fast, and genuinely useful everyday applications.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Sourabh_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => onNavigate('life')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 transition-all cursor-pointer"
            >
              <span>My Journey & Certifications</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {HERO_CONTENT.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-sm transition-all"
            >
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                {stat.label}
              </div>
              <div className="mt-1 text-lg sm:text-xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs text-cyan-400 font-medium">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Plain-English Approach Showcase: What makes my engineering different? */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              How I Approach AI Engineering
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
              Moving past trial-and-error prompting into systematic software engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HERO_CONTENT.pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || Cpu;
              return (
                <div
                  key={idx}
                  className="relative group p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 shadow-sm hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Contrast Card: Plain English vs Buzzwords */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <BrainCircuit className="w-4 h-4" />
              <span>Philosophy in Action</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 font-semibold mb-2">
                  <span className="text-base">⚠️</span> The Fragile AI Approach
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li>• Asking an LLM to blindly give a 0-100 score without validation.</li>
                  <li>• Relying solely on pure semantic vector search that ignores version flags.</li>
                  <li>• Prompt-stuffing without citations, producing untraceable hallucinations.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                  <CheckCircle2 className="w-4 h-4" /> The AI Engineering Way (What I Build)
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• Deterministic state machines with mathematical moving averages.</li>
                  <li>• Two-stage hybrid search (RRF) combining keyword precision & semantic meaning.</li>
                  <li>• Mathematical confidence calibrators measuring actual grounding evidence.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
