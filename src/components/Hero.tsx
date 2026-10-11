import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA, RoleLens } from '../data/portfolioData';
import {
  FileText,
  Mail,
  Phone,
  ExternalLink,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Terminal,
  Upload,
  RotateCcw
} from 'lucide-react';

interface HeroProps {
  currentLens: RoleLens;
  onOpenHireModal: () => void;
  onOpenResumeModal: () => void;
  onOpenTerminalModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLens,
  onOpenHireModal,
  onOpenResumeModal,
  onOpenTerminalModal
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('zahid_custom_passport_photo');
    if (saved) {
      setCustomPhoto(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          try {
            localStorage.setItem('zahid_custom_passport_photo', result);
          } catch {
            // storage quota fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetPhoto = () => {
    setCustomPhoto(null);
    localStorage.removeItem('zahid_custom_passport_photo');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const summaryText = PORTFOLIO_DATA.summaries[currentLens];

  const roleTitle =
    currentLens === 'cyber'
      ? 'SOC Analyst & Cyber Security Engineer'
      : currentLens === 'it'
      ? 'Senior IT & Network Systems Engineer'
      : 'Cyber Security & Senior IT Systems Engineer';

  const subline = '3+ Years Core ISP Network & Enterprise Infrastructure with EDR & Incident Response';

  const displayedPhoto = customPhoto || PORTFOLIO_DATA.personal.avatarImage;

  return (
    <section id="overview" className="pt-8 pb-14 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean Unboxed Metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
              <span>{PORTFOLIO_DATA.personal.location}</span>
              <span aria-hidden="true">·</span>
              <span>Open for Senior IT & Security Roles</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-mono">Available Now</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-3">
              {PORTFOLIO_DATA.personal.name}
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-200 mb-2">
              {roleTitle}
            </p>

            <div className="text-xs sm:text-sm font-semibold text-cyan-400 mb-5 flex flex-wrap items-center gap-2">
              <span>{subline}</span>
            </div>

            {/* Experience Notice Highlight */}
            <div className="mb-6 p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Experience Timeline: </span>
                <span>
                  3+ Years Core ISP Network & Enterprise Infrastructure with EDR & Incident Response (since joining Next Online as ISP Network Engineer in July 2023, advancing to System Engineer at Prothom Alo).
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
              {summaryText}
            </p>

            {/* Direct Connect Buttons (WhatsApp, Hire, CV) */}
            <div className="space-y-3 mb-8">
              <div className="flex flex-wrap items-center gap-3">
                {/* Instant WhatsApp Connect */}
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumberClean}?text=${encodeURIComponent(
                    'Hello Zahid, I viewed your portfolio and would like to discuss an opportunity.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {PORTFOLIO_DATA.personal.whatsapp}</span>
                </a>

                {/* Primary Contact / Hire Modal CTA */}
                <button
                  onClick={onOpenHireModal}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm whitespace-nowrap shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Connect & Hire Me</span>
                </button>

                <button
                  onClick={onOpenResumeModal}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-200 border border-slate-700 bg-slate-900 hover:bg-slate-800 hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>View CV / ATS Resume</span>
                </button>

                <button
                  onClick={onOpenTerminalModal}
                  className="px-4 py-2.5 text-xs font-mono font-medium text-slate-300 border border-slate-800 bg-slate-950 hover:bg-slate-900 hover:text-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CLI Terminal</span>
                </button>
              </div>
            </div>

            {/* Unboxed Social Profiles Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 pt-3 border-t border-slate-800/80">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>GitHub (Reports & Labs)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={PORTFOLIO_DATA.personal.tryhackme}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>TryHackMe Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Passport Photo Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Photo Frame Header with optional upload/replace button */}
              <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Passport Photograph
                </span>

                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="zahid-photo-input"
                  />
                  <label
                    htmlFor="zahid-photo-input"
                    className="cursor-pointer px-2 py-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded transition-colors inline-flex items-center gap-1"
                    title="Upload or replace photo directly from your device"
                  >
                    <Upload className="w-3 h-3 text-cyan-400" />
                    <span>Upload Original File</span>
                  </label>

                  {customPhoto && (
                    <button
                      onClick={resetPhoto}
                      className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                      title="Reset to default photo"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Photo Display */}
              <div className="relative aspect-[3/4] w-full bg-white overflow-hidden">
                <img
                  src={displayedPhoto}
                  alt="Md Zahid Hasan - Official Passport Photo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Verified Credentials Details Strip */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs space-y-2.5">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Core Experience:</span>
                  <span className="font-semibold text-cyan-400 font-mono">
                    3+ Years (ISP & Enterprise)
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Certifications:</span>
                  <span className="font-semibold text-slate-200">
                    CSA (2025) · MTCNA (2024) · CCNA (2023)
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Active Defenses:</span>
                  <span className="font-semibold text-slate-200">
                    CrowdStrike EDR · Wazuh SIEM · Win Server 2022
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>Dhaka, Bangladesh</span>
                  </span>
                  <a
                    href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumberClean}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 text-slate-300 font-mono"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-400" />
                    <span>{PORTFOLIO_DATA.personal.whatsapp}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Row below split */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight tabular-nums">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
