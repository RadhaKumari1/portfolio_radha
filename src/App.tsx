import React, { useState } from 'react';
import { SectionId } from './types';

// Portfolio Components
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutEducation } from './components/AboutEducation';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TerminalSection } from './components/TerminalSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [showTerminalModal, setShowTerminalModal] = useState<boolean>(false);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResumeModal={() => setShowResumeModal(true)}
        onOpenTerminal={() => {
          setShowTerminalModal(true);
          const elem = document.getElementById('terminal');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section */}
      <HeroSection
        onNavigate={handleNavigate}
        onOpenResumeModal={() => setShowResumeModal(true)}
        onOpenTerminal={() => {
          setShowTerminalModal(true);
          const elem = document.getElementById('terminal');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections */}
      <main className="space-y-0">
        <AboutEducation />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <TerminalSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Resume PDF Modal */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}

export default App;
