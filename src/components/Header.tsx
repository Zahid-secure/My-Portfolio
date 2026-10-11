import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeaderProps {
  onOpenHireModal: () => void;
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenHireModal, onOpenResumeModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>{PORTFOLIO_DATA.personal.name}</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#overview" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Overview
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Experience
          </a>
          <a href="#labs" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Labs & Solves
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Skills
          </a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Credentials
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-semibold text-slate-200 border border-slate-700 bg-slate-900 hover:bg-slate-800 hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            View CV / Resume
          </button>
          <button
            onClick={onOpenHireModal}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Hire Zahid
          </button>
        </div>
      </div>
    </header>
  );
};
