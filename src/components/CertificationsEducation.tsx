import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle, Mail, Phone, UserCheck, Shield } from 'lucide-react';

export const CertificationsEducation: React.FC = () => {
  return (
    <section id="certifications" className="py-14 px-6 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Certifications & Education */}
          <div className="space-y-10">
            {/* Certifications */}
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                Industry Credentials
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
                Professional Certifications
              </h2>

              <div className="space-y-4">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {cert.name}
                        </h3>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                      <span className="font-mono text-xs text-cyan-400 font-semibold bg-slate-950 px-2.5 py-1 rounded border border-slate-800 shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                Academic Background
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
                Education
              </h2>

              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {edu.degree}
                        </h3>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {edu.institution}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-mono text-xs text-slate-300 font-medium">
                          {edu.year}
                        </div>
                        <div className="font-mono text-xs text-cyan-400 font-semibold mt-0.5">
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Achievements & Academic Reference */}
          <div className="space-y-10">
            {/* Achievements & Activities */}
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                Proven Impact & Leadership
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
                Achievements & Activities
              </h2>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
                {PORTFOLIO_DATA.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Reference */}
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                Verification & Endorsement
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
                Academic Reference
              </h2>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {PORTFOLIO_DATA.reference.name}
                    </h3>
                    <div className="text-xs text-cyan-400 font-medium mt-0.5">
                      {PORTFOLIO_DATA.reference.role}, {PORTFOLIO_DATA.reference.organization}
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {PORTFOLIO_DATA.reference.relation}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Available for direct verification of technical rigor, cybersecurity foundations, and systems engineering capability.
                </p>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs font-mono">
                  <a
                    href={`tel:${PORTFOLIO_DATA.reference.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{PORTFOLIO_DATA.reference.phone}</span>
                  </a>
                  <span className="text-slate-700">·</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.reference.email}`}
                    className="text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{PORTFOLIO_DATA.reference.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
