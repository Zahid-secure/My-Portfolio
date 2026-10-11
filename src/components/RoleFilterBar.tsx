import React from 'react';
import { RoleLens } from '../data/portfolioData';

interface RoleFilterBarProps {
  currentLens: RoleLens;
  onSelectLens: (lens: RoleLens) => void;
}

export const RoleFilterBar: React.FC<RoleFilterBarProps> = ({ currentLens, onSelectLens }) => {
  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-2 max-w-4xl mx-auto shadow-lg backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 py-1">
        <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase shrink-0">
          Target Role Lens:
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto p-1 bg-slate-950/70 border border-slate-800 rounded-lg">
          <button
            type="button"
            onClick={() => onSelectLens('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              currentLens === 'all'
                ? 'bg-slate-800 text-white font-semibold shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            Unified Master Profile (IT + Cyber)
          </button>

          <button
            type="button"
            onClick={() => onSelectLens('cyber')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              currentLens === 'cyber'
                ? 'bg-cyan-950 text-cyan-300 font-semibold shadow-sm border border-cyan-800/80'
                : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-900/60'
            }`}
          >
            Cyber Security & SOC Analyst
          </button>

          <button
            type="button"
            onClick={() => onSelectLens('it')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              currentLens === 'it'
                ? 'bg-blue-950 text-blue-300 font-semibold shadow-sm border border-blue-800/80'
                : 'text-slate-400 hover:text-blue-400 hover:bg-slate-900/60'
            }`}
          >
            Senior IT Systems & Network
          </button>
        </div>
      </div>
    </div>
  );
};
