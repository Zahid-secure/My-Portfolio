import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenHireModal: () => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHireModal, onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-white font-bold text-sm tracking-tight">
            {PORTFOLIO_DATA.personal.name}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Cyber Security Engineer · SOC Analyst · Senior IT Systems Engineer
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Dhaka, Bangladesh · Available for On-Site and Remote Roles
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
          <button
            onClick={onOpenResumeModal}
            className="hover:text-cyan-400 transition-colors"
          >
            Printable CV
          </button>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.tryhackme}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
          >
            <span>TryHackMe</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
          <a
            href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumberClean}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
          >
            <span>WhatsApp</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
          <button
            onClick={onOpenHireModal}
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            Hire Zahid
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Md Zahid Hasan</span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
