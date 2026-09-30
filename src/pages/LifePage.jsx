import React, { useState } from 'react';
import { LIFE_DATA, TECHNICAL_SKILLS } from '../data/portfolioData';
import { 
  Target, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Heart, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Building2,
  Code2,
  CheckCircle2
} from 'lucide-react';

export default function LifePage() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Highlights' },
    { id: 'goal', label: 'My Goal', icon: Target },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'hobbies', label: 'Hobbies & Interests', icon: Heart },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#120726] border border-[#2d1357]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e0d3d] border border-[#431980] text-xs font-semibold text-[#d8b4fe] mb-3">
                <Heart className="w-3.5 h-3.5" />
                <span>Life, Journey & Background</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Education, Goals & Experience
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                A closer look at my studies at KIIT, my internships at SAIL and CCL, 
                my verified technical certifications, and the hobbies that keep me inspired.
              </p>
            </div>

            {/* Sub-tab Navigation */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0d051f] border border-[#2d1357]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#7c3aed] text-white border border-[#9333ea]'
                      : 'text-gray-300 hover:text-white hover:bg-[#1a0b36]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 1. CAREER GOAL SECTION */}
        {(activeTab === 'all' || activeTab === 'goal') && (
          <div className="p-7 sm:p-8 rounded-xl bg-[#120726] border border-[#2d1357]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-3">
              <Target className="w-4 h-4" />
              <span>{LIFE_DATA.careerGoal.title}</span>
            </div>

            <h2 className="text-2xl font-bold text-white">
              {LIFE_DATA.careerGoal.headline}
            </h2>

            <div className="mt-4 space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
              {LIFE_DATA.careerGoal.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#220d47]">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
                Primary Interests & Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {LIFE_DATA.careerGoal.keyInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-[#1b0b38] text-white border border-[#3b1773]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. EDUCATION SECTION */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <div className="p-7 sm:p-8 rounded-xl bg-[#120726] border border-[#2d1357]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {LIFE_DATA.education.degree}
                </h2>
                <div className="mt-1 text-sm font-medium text-[#c084fc]">
                  {LIFE_DATA.education.institution} • {LIFE_DATA.education.location}
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  {LIFE_DATA.education.duration}
                </div>

                <p className="mt-3 text-sm text-gray-300 leading-relaxed max-w-2xl">
                  {LIFE_DATA.education.description}
                </p>

                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Key Coursework
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {LIFE_DATA.education.keyCourses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-xs bg-[#180a33] text-gray-300 border border-[#2d1357]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CGPA Badge Box */}
              <div className="shrink-0 p-5 rounded-xl bg-[#180a33] border border-[#2d1357] text-center min-w-[150px]">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Cumulative CGPA
                </div>
                <div className="text-3xl font-extrabold text-white mt-1">
                  {LIFE_DATA.education.cgpa}
                </div>
                <div className="text-xs text-[#c084fc] mt-1 font-medium">
                  KIIT University
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. INTERNSHIPS & WORK EXPERIENCE */}
        {(activeTab === 'all' || activeTab === 'internships') && (
          <div className="space-y-6">
            <div className="border-b border-[#2d1357] pb-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#c084fc]" />
                <span>Internships & Industry Experience</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LIFE_DATA.internships.map((internship, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#120726] border border-[#2d1357] hover:border-[#4c1d95] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span className="font-semibold text-[#c084fc]">
                        {internship.company}
                      </span>
                      <span>{internship.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {internship.role}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5 mb-3">
                      {internship.department} • {internship.location}
                    </p>

                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {internship.summary}
                    </p>

                    {/* Challenge and Solution */}
                    <div className="space-y-2 p-3.5 rounded-lg bg-[#180a33] border border-[#2d1357] text-xs">
                      <div>
                        <strong className="text-white">Challenge: </strong>
                        <span className="text-gray-300">{internship.challenge}</span>
                      </div>
                      <div>
                        <strong className="text-[#c084fc]">Solution & Impact: </strong>
                        <span className="text-gray-200">{internship.solution} {internship.impact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#220d47] flex flex-wrap gap-1.5">
                    {internship.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-[#1b0b38] text-gray-300 border border-[#2d1357]"
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

        {/* 4. VERIFIED CERTIFICATIONS */}
        {(activeTab === 'all' || activeTab === 'certifications') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#2d1357] pb-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#c084fc]" />
                <span>Verified Certifications</span>
              </h2>
              <span className="text-xs text-gray-400">
                Direct verification links attached
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {LIFE_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#120726] border border-[#2d1357] hover:border-[#4c1d95] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span className="text-[#c084fc] font-semibold">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#220d47] flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">
                      ID: {cert.credentialId}
                    </span>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#c084fc] hover:text-white transition-colors"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. HOBBIES & PERSONAL INTERESTS */}
        {(activeTab === 'all' || activeTab === 'hobbies') && (
          <div className="space-y-6">
            <div className="border-b border-[#2d1357] pb-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#c084fc]" />
                <span>Hobbies & Personal Interests</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {LIFE_DATA.hobbies.map((hobby, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#120726] border border-[#2d1357] hover:border-[#4c1d95] transition-colors"
                >
                  <h3 className="text-base font-bold text-white">
                    {hobby.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. TECHNICAL SKILLS SUMMARY */}
        {activeTab === 'all' && (
          <div className="space-y-6">
            <div className="border-b border-[#2d1357] pb-3">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#c084fc]" />
                <span>Technical Skills Overview</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TECHNICAL_SKILLS.map((grp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#120726] border border-[#2d1357]"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#c084fc] mb-3">
                    {grp.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {grp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-1 text-xs font-mono rounded bg-[#180a33] text-gray-200 border border-[#2d1357]"
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
  );
}
