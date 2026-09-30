import React, { useState } from 'react';
import { LIFE_DATA, TECHNICAL_SKILLS } from '../data/portfolioData';
import { 
  Target, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Heart, 
  Code2, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle,
  Activity,
  Cpu,
  Compass,
  Users,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const hobbyIcons = {
  Cpu: Cpu,
  Compass: Compass,
  Activity: Activity,
  Target: Target,
  Users: Users,
};

export default function LifeSection() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'Overview' },
    { id: 'goal', label: 'Career Goal', icon: Target },
    { id: 'experience', label: 'Internships', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'hobbies', label: 'Hobbies & Interests', icon: Heart },
  ];

  return (
    <section id="life" className="py-20 relative border-t border-slate-800/80 bg-[#090e1b]">
      
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>My Life, Milestones & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Experience & What Drives Me
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            A comprehensive look at my academic foundations, industry traineeships, verified credentials, 
            and long-term ambition in <strong>AI Engineering</strong>.
          </p>

          {/* Quick Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-12">

          {/* 1. CAREER GOAL SPOTLIGHT */}
          {(activeTab === 'all' || activeTab === 'goal') && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#10172b] border border-cyan-500/30 shadow-xl shadow-cyan-950/20 relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                    <Target className="w-4 h-4" />
                    <span>Career North Star</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {LIFE_DATA.goal.title}
                  </h3>
                  <p className="mt-1 text-cyan-300 font-medium text-sm sm:text-base">
                    {LIFE_DATA.goal.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {LIFE_DATA.goal.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 leading-relaxed">
                  <div className="font-semibold text-white mb-1.5 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>Grounded Retrieval & Reasoning (RAG)</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Combining dense semantic vectors with lexical BM25 full-text search and cross-encoder rerankers so language models answer questions with mathematically verifiable source citations rather than guesswork.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 leading-relaxed">
                  <div className="font-semibold text-white mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Deterministic State & Guardrails</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Isolating fuzzy probabilistic model completions from core application state mutations using moving averages (EMA) and Pydantic rubric parsers to guarantee predictable execution.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. INTERNSHIPS & INDUSTRY TRAINEESHIP */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <span>Industry Traineeships & Internships</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {LIFE_DATA.internships.map((internship, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span className="flex items-center gap-1 font-semibold text-cyan-400">
                          <Building2 className="w-3.5 h-3.5" />
                          {internship.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {internship.period}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white">
                        {internship.role}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 mb-3 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {internship.division} • {internship.location}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {internship.summary}
                      </p>

                      {/* Challenge & Solution */}
                      <div className="space-y-2 mb-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                        <div>
                          <strong className="text-rose-400">Challenge: </strong>
                          <span className="text-slate-400">{internship.challenge}</span>
                        </div>
                        <div>
                          <strong className="text-emerald-400">Solution & Impact: </strong>
                          <span className="text-slate-300">{internship.solution} {internship.impact}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                      {internship.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. VERIFIED CERTIFICATIONS */}
          {(activeTab === 'all' || activeTab === 'certifications') && (
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 text-xl font-bold text-white">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>Verified Certifications & Accreditations</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  Direct Verification Links Included
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {LIFE_DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c1220] border border-slate-800/90 hover:border-amber-400/40 hover:shadow-lg hover:shadow-amber-400/5 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-400 border border-amber-400/20 font-semibold text-[11px]">
                          {cert.badge}
                        </span>
                        <span className="text-slate-500 font-medium">
                          {cert.date}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-medium text-cyan-400 mt-1">
                        {cert.issuer}
                      </p>
                      {cert.instructors && (
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          By: {cert.instructors}
                        </p>
                      )}

                      <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-500 truncate max-w-[140px]">
                        ID: {cert.credentialId}
                      </span>

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. EDUCATION JOURNEY */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Education Background</span>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>{LIFE_DATA.education.institution}</span>
                    <span>•</span>
                    <span>{LIFE_DATA.education.location}</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {LIFE_DATA.education.degree}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                    {LIFE_DATA.education.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {LIFE_DATA.education.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs rounded-lg bg-slate-800/90 text-slate-300 border border-slate-700/80"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center min-w-[140px]">
                  <div className="text-xs text-slate-400 font-medium">Academic CGPA</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mt-0.5">
                    {LIFE_DATA.education.cgpa}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Graduating {LIFE_DATA.education.duration.split('– Expected ')[1] || 'May 2027'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. HOBBIES & INTERESTS */}
          {(activeTab === 'all' || activeTab === 'hobbies') && (
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                <Heart className="w-5 h-5 text-rose-400" />
                <span>Hobbies, Passions & Life Beyond Code</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {LIFE_DATA.hobbies.map((hobby, idx) => {
                  const Icon = hobbyIcons[hobby.icon] || Heart;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {hobby.title}
                        </h4>
                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 6. TECHNICAL SKILLS SUMMARY */}
          {activeTab === 'all' && (
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Technical Skills Inventory</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {TECHNICAL_SKILLS.map((grp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                      {grp.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {grp.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-1 text-xs font-mono rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
