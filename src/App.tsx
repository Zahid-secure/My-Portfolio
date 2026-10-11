/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA, RoleLens } from './data/portfolioData';
import { Header } from './components/Header';
import { RoleFilterBar } from './components/RoleFilterBar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { LabShowcase } from './components/LabShowcase';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsEducation } from './components/CertificationsEducation';
import { ResumeModal } from './components/ResumeModal';
import { ContactHireModal } from './components/ContactHireModal';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';
import { Footer } from './components/Footer';
import { FileText, Mail, Terminal, Shield, Cpu } from 'lucide-react';

export default function App() {
  const [currentLens, setCurrentLens] = useState<RoleLens>('all');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* 3-zone Top Bar Contract */}
      <Header
        onOpenHireModal={() => setIsHireModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      <main className="flex-1">
        {/* Role Lens Switcher Banner */}
        <div className="pt-6 px-6 lg:px-12">
          <RoleFilterBar
            currentLens={currentLens}
            onSelectLens={(lens) => setCurrentLens(lens)}
          />
        </div>

        {/* Hero Section */}
        <Hero
          currentLens={currentLens}
          onOpenHireModal={() => setIsHireModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenTerminalModal={() => setIsTerminalModalOpen(true)}
        />

        {/* Work Experience with Per-role Lens Highlighting */}
        <ExperienceSection currentLens={currentLens} />

        {/* Hands-On Lab Solves (TryHackMe, VulnHub, SIEM, AD, Network) */}
        <LabShowcase />

        {/* Interactive Skills Matrix */}
        <SkillsSection currentLens={currentLens} />

        {/* Certifications, Education, Achievements, and References */}
        <CertificationsEducation />
      </main>

      {/* Footer */}
      <Footer
        onOpenHireModal={() => setIsHireModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Floating Recruiter Quick Action Pill (Clean bottom drawer on mobile / desktop) */}
      <div className="fixed bottom-4 right-4 z-30 no-print flex items-center gap-2">
        <button
          onClick={() => setIsTerminalModalOpen(true)}
          className="p-2.5 bg-slate-900/90 text-cyan-400 hover:text-cyan-300 border border-slate-700/80 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-105"
          title="Open Security CLI Console"
          aria-label="Open CLI Console"
        >
          <Terminal className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900/90 text-slate-200 hover:text-white border border-slate-700/80 rounded-full shadow-lg backdrop-blur-md text-xs font-semibold transition-all hover:scale-105"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>Quick CV</span>
        </button>

        <button
          onClick={() => setIsHireModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-400 text-slate-950 hover:bg-cyan-300 active:bg-cyan-500 rounded-full shadow-lg text-xs font-bold transition-all hover:scale-105"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Hire Me</span>
        </button>
      </div>

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        defaultTrack={currentLens}
      />

      <ContactHireModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />

      <InteractiveTerminalModal
        isOpen={isTerminalModalOpen}
        onClose={() => setIsTerminalModalOpen(false)}
        onOpenHireModal={() => {
          setIsTerminalModalOpen(false);
          setIsHireModalOpen(true);
        }}
        onOpenResumeModal={() => {
          setIsTerminalModalOpen(false);
          setIsResumeModalOpen(true);
        }}
      />
    </div>
  );
}
