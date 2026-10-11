import React, { useState } from 'react';
import { PORTFOLIO_DATA, RoleLens, ExperienceItem } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, ShieldCheck, Cpu } from 'lucide-react';

interface ExperienceSectionProps {
  currentLens: RoleLens;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentLens }) => {
  const [activeItemLens, setActiveItemLens] = useState<Record<string, 'auto' | 'cyber' | 'it'>>({});

  const getItemLens = (itemId: string): 'cyber' | 'it' | 'all' => {
    const override = activeItemLens[itemId];
    if (override && override !== 'auto') {
      return override;
    }
    return currentLens;
  };

  const setItemLensOverride = (itemId: string, lens: 'cyber' | 'it') => {
    setActiveItemLens(prev => ({
      ...prev,
      [itemId]: prev[itemId] === lens ? 'auto' : lens
    }));
  };

  return (
    <section id="experience" className="py-14 px-6 lg:px-12 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Career History & Operational Impact
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Professional Work Experience
            </h2>
          </div>
          <div className="text-xs text-slate-400 max-w-md">
            5.5+ years of verified production responsibilities across leading Bangladeshi national daily media, telecommunication ISP backbones, and enterprise data operations.
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experiences.map((exp) => {
            const effectiveLens = getItemLens(exp.id);
            const bulletsToDisplay =
              effectiveLens === 'cyber'
                ? exp.cyberFocus
                : effectiveLens === 'it'
                ? exp.itFocus
                : exp.coreBullets;

            return (
              <div
                key={exp.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 transition-all hover:border-slate-700 shadow-sm"
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-slate-600">·</span>
                      <span className="text-base font-semibold text-cyan-400">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </span>
                      <span aria-hidden="true" className="text-slate-700">·</span>
                      <span className="inline-flex items-center gap-1 font-mono text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </span>
                      <span aria-hidden="true" className="text-slate-700">·</span>
                      <span className="text-slate-400">{exp.type}</span>
                    </div>
                  </div>

                  {/* Per-card toggle to switch lens view for this specific role */}
                  <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg shrink-0 self-start lg:self-center">
                    <button
                      type="button"
                      onClick={() => setItemLensOverride(exp.id, 'cyber')}
                      className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ${
                        effectiveLens === 'cyber'
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="View Cyber Security & SOC responsibilities"
                    >
                      <ShieldCheck className="w-3 h-3" />
                      <span>Security Lens</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setItemLensOverride(exp.id, 'it')}
                      className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ${
                        effectiveLens === 'it'
                          ? 'bg-blue-950 text-blue-300 border border-blue-800'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="View IT Systems & Infrastructure responsibilities"
                    >
                      <Cpu className="w-3 h-3" />
                      <span>IT Systems Lens</span>
                    </button>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="mt-6 space-y-3.5">
                  {bulletsToDisplay.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies strip */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mr-1">
                    Environment & Tools:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 font-mono">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-slate-300">
                        {tech}
                        {tIdx < exp.technologies.length - 1 && (
                          <span className="text-slate-600 ml-1.5 mr-0.5">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
