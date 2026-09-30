import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import LifeSection from './components/LifeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('landing');

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['landing', 'projects', 'life', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={navigateTo} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Landing Page */}
        <LandingSection onNavigate={navigateTo} />

        {/* Section 2: Projects Page with centered popup modals */}
        <ProjectsSection />

        {/* Section 3: Life Page (Education, Goal, Internships, Certifications, Hobbies) */}
        <LifeSection />

        {/* Section 4: Contact Page (Formspree endpoint + direct resume download) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
