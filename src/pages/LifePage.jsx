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
        <div className="p-8 sm:p-10 rounded-2xl bg-[#180d15] border border-[#3a1f30]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e1019] border border-[#5c3050] text-xs font-semibold text-[#d8b4fe] mb-3">
                <Heart className="w-3.5 h-3.5" />
                <span>Life, Journey & Background</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#ede4d8] tracking-tight">
                Education, Goals & Experience
              </h1>
              <p className="mt-2 text-sm sm:text-base text-[#a89889] max-w-2xl leading-relaxed">
                A closer look at my studies at KIIT, my internships at SAIL and CCL, 
                my verified technical certifications, and the hobbies that keep me inspired.
              </p>
            </div>

            {/* Sub-tab Navigation */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#180d15] border border-[#3a1f30]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#c49b7c] text-[#140a12] border border-[#c49b7c]'
                      : 'text-[#a89889] hover:text-[#ede4d8] hover:bg-[#261620]'
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
          <div className="p-7 sm:p-8 rounded-xl bg-[#180d15] border border-[#3a1f30]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9b6b8a] mb-3">
              <Target className="w-4 h-4" />
              <span>{LIFE_DATA.careerGoal.title}</span>
            </div>

            <h2 className="text-2xl font-bold text-[#ede4d8]">
              {LIFE_DATA.careerGoal.headline}
            </h2>

            <div className="mt-4 space-y-3 text-sm sm:text-base text-[#a89889] leading-relaxed max-w-4xl">
              {LIFE_DATA.careerGoal.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#2a1521]">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#a89889] mb-2.5">
                Primary Interests & Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {LIFE_DATA.careerGoal.keyInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-[#261620] text-[#ede4d8] border border-[#3a1f30]"
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
          <div className="p-7 sm:p-8 rounded-xl bg-[#180d15] border border-[#3a1f30]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9b6b8a] mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#ede4d8]">
                  {LIFE_DATA.education.degree}
                </h2>
                <div className="mt-1 text-sm font-medium text-[#9b6b8a]">
                  {LIFE_DATA.education.institution} • {LIFE_DATA.education.location}
                </div>
                <div className="mt-1 text-xs text-[#a89889]">
                  {LIFE_DATA.education.duration}
                </div>

                <p className="mt-3 text-sm text-[#a89889] leading-relaxed max-w-2xl">
                  {LIFE_DATA.education.description}
                </p>

                <div className="mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#a89889] mb-2">
                    Key Coursework
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {LIFE_DATA.education.keyCourses.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-xs bg-[#231520] text-[#a89889] border border-[#3a1f30]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CGPA Badge Box */}
              <div className="shrink-0 p-5 rounded-xl bg-[#231520] border border-[#3a1f30] text-center min-w-[150px]">
                <div className="text-xs text-[#a89889] uppercase tracking-wider font-semibold">
                  Cumulative CGPA
                </div>
                <div className="text-3xl font-extrabold text-[#ede4d8] mt-1">
                  {LIFE_DATA.education.cgpa}
                </div>
                <div className="text-xs text-[#9b6b8a] mt-1 font-medium">
                  KIIT University
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. INTERNSHIPS & WORK EXPERIENCE */}
        {(activeTab === 'all' || activeTab === 'internships') && (
          <div className="space-y-6">
            <div className="border-b border-[#3a1f30] pb-3">
              <h2 className="text-2xl font-bold text-[#ede4d8] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#9b6b8a]" />
                <span>Internships & Industry Experience</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LIFE_DATA.internships.map((internship, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#180d15] border border-[#3a1f30] hover:border-[#5c3050] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#a89889] mb-2">
                      <span className="font-semibold text-[#9b6b8a]">
                        {internship.company}
                      </span>
                      <span>{internship.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#ede4d8]">
                      {internship.role}
                    </h3>
                    <p className="text-xs text-[#a89889] mt-0.5 mb-3">
                      {internship.department} • {internship.location}
                    </p>

                    <p className="text-sm text-[#a89889] leading-relaxed mb-4">
                      {internship.summary}
                    </p>

                    {/* Challenge and Solution */}
                    <div className="space-y-2 p-3.5 rounded-lg bg-[#231520] border border-[#3a1f30] text-xs">
                      <div>
                        <strong className="text-[#ede4d8]">Challenge: </strong>
                        <span className="text-[#a89889]">{internship.challenge}</span>
                      </div>
                      <div>
                        <strong className="text-[#9b6b8a]">Solution & Impact: </strong>
                        <span className="text-[#d1c8bb]">{internship.solution} {internship.impact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#2a1521] flex flex-wrap gap-1.5">
                    {internship.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-[#261620] text-[#a89889] border border-[#3a1f30]"
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
            <div className="flex items-center justify-between border-b border-[#3a1f30] pb-3">
              <h2 className="text-2xl font-bold text-[#ede4d8] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#9b6b8a]" />
                <span>Verified Certifications</span>
              </h2>
              <span className="text-xs text-[#a89889]">
                Direct verification links attached
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {LIFE_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#180d15] border border-[#3a1f30] hover:border-[#5c3050] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#a89889] mb-2">
                      <span className="text-[#9b6b8a] font-semibold">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#ede4d8] leading-snug">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#a89889] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#2a1521] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#a89889]">
                      ID: {cert.credentialId}
                    </span>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#9b6b8a] hover:text-[#ede4d8] transition-colors"
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
            <div className="border-b border-[#3a1f30] pb-3">
              <h2 className="text-2xl font-bold text-[#ede4d8] flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#9b6b8a]" />
                <span>Hobbies & Personal Interests</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {LIFE_DATA.hobbies.map((hobby, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#180d15] border border-[#3a1f30] hover:border-[#5c3050] transition-colors"
                >
                  <h3 className="text-base font-bold text-[#ede4d8]">
                    {hobby.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#a89889] leading-relaxed">
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
            <div className="border-b border-[#3a1f30] pb-3">
              <h2 className="text-2xl font-bold text-[#ede4d8] flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#9b6b8a]" />
                <span>Technical Skills Overview</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TECHNICAL_SKILLS.map((grp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#180d15] border border-[#3a1f30]"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#9b6b8a] mb-3">
                    {grp.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {grp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-1 text-xs font-mono rounded bg-[#231520] text-[#d1c8bb] border border-[#3a1f30]"
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
