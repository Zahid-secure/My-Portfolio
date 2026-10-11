import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Mail, Phone, MessageSquare, ExternalLink, Copy, Check, Send } from 'lucide-react';

interface ContactHireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactHireModal: React.FC<ContactHireModalProps> = ({ isOpen, onClose }) => {
  const [rolePreset, setRolePreset] = useState<'cyber' | 'it' | 'consulting'>('cyber');
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const getSubject = () => {
    if (rolePreset === 'cyber') {
      return `Job Opportunity: Cyber Security / SOC Analyst at ${companyName || 'our team'}`;
    }
    if (rolePreset === 'it') {
      return `Job Opportunity: Senior IT Systems & Network Engineer at ${companyName || 'our team'}`;
    }
    return `Inquiry for Md Zahid Hasan from ${companyName || 'Recruiter'}`;
  };

  const getBody = () => {
    return `Hi Md Zahid Hasan,

I reviewed your portfolio and technical profile (including your 3+ Years Core ISP Network & Enterprise Infrastructure with EDR & Incident Response, Certified SOC Analyst, CCNA, and MTCNA credentials).

We are currently hiring for ${
      rolePreset === 'cyber'
        ? 'a Cyber Security / SOC Analyst position'
        : rolePreset === 'it'
        ? 'a Senior IT Systems & Infrastructure role'
        : 'an engineering opportunity'
    } at ${companyName || '[Company Name]'}.

I would love to connect with you for a discussion. Please let me know your availability.

Best regards,
${recruiterName || '[Your Name]'}
${companyName || '[Company Name]'}`;
  };

  const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    getSubject()
  )}&body=${encodeURIComponent(getBody())}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
            Fast Connect Options
          </div>
          <h3 className="text-xl font-bold text-white">
            Connect & Hire Md Zahid Hasan
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Available immediately for Senior IT Systems, Network Engineering, and Cyber Security / SOC Analyst positions.
          </p>
        </div>

        {/* Primary Instant WhatsApp Channel */}
        <div className="mb-5">
          <a
            href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumberClean}?text=${encodeURIComponent(
              'Hi Zahid, I viewed your portfolio and would like to connect regarding an opportunity.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full p-4 bg-emerald-950/70 border border-emerald-800/80 hover:bg-emerald-900/80 rounded-xl transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] text-emerald-400 uppercase font-bold">Direct WhatsApp Chat</div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300">
                  {PORTFOLIO_DATA.personal.whatsapp}
                </div>
                <div className="text-[11px] text-slate-400">Click to chat instantly</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Quick Contact Info with Copy buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <div className="truncate mr-2">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Email Address</div>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-xs text-slate-200 hover:text-cyan-400 font-mono truncate block"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
            </div>
            <button
              onClick={copyEmail}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors shrink-0"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <div className="truncate mr-2">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Phone / Cellular</div>
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/[^0-9+]/g, '')}`}
                className="text-xs text-slate-200 hover:text-cyan-400 font-mono truncate block"
              >
                {PORTFOLIO_DATA.personal.phone}
              </a>
            </div>
            <button
              onClick={copyPhone}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors shrink-0"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Quick Email Composer Form */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="text-xs font-semibold text-slate-300">
            Generate Interview Request Email
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              type="button"
              onClick={() => setRolePreset('cyber')}
              className={`flex-1 py-1 text-[11px] font-medium rounded transition-colors ${
                rolePreset === 'cyber' ? 'bg-cyan-950 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Cyber Security Role
            </button>
            <button
              type="button"
              onClick={() => setRolePreset('it')}
              className={`flex-1 py-1 text-[11px] font-medium rounded transition-colors ${
                rolePreset === 'it' ? 'bg-blue-950 text-blue-300 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Senior IT Systems Role
            </button>
            <button
              type="button"
              onClick={() => setRolePreset('consulting')}
              className={`flex-1 py-1 text-[11px] font-medium rounded transition-colors ${
                rolePreset === 'consulting' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              General Inquiry
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <input
              type="text"
              placeholder="Your Name (Optional)"
              value={recruiterName}
              onChange={(e) => setRecruiterName(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <input
              type="text"
              placeholder="Company / Team Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <a
            href={mailtoUrl}
            className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open Email Client with Pre-filled Message</span>
          </a>
        </div>
      </div>
    </div>
  );
};
