import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, LabItem } from '../data/portfolioData';
import { ExternalLink, Terminal, Shield, Network, Server, Search, X, Check, FileCode } from 'lucide-react';

export const LabShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'TryHackMe' | 'VulnHub' | 'Enterprise Lab' | 'Network Lab'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLab, setSelectedLab] = useState<LabItem | null>(null);

  const filteredLabs = useMemo(() => {
    return PORTFOLIO_DATA.labs.filter((item) => {
      const matchesFilter = filter === 'all' || item.platform === filter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keyVectors.some(v => v.toLowerCase().includes(q)) ||
        item.toolsUsed.some(t => t.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section id="labs" className="py-14 px-6 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Hands-On Verification & Threat Research
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Projects, Labs & CTF Solves
            </h2>
          </div>
          <div className="text-xs text-slate-400 max-w-md">
            All machines and enterprise topologies solved, built, and documented independently with full written technical reports.
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Functional Button Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Labs ({PORTFOLIO_DATA.labs.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('TryHackMe')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'TryHackMe'
                  ? 'bg-slate-800 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              TryHackMe Solves
            </button>
            <button
              type="button"
              onClick={() => setFilter('VulnHub')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'VulnHub'
                  ? 'bg-slate-800 text-cyan-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              VulnHub Boxes
            </button>
            <button
              type="button"
              onClick={() => setFilter('Enterprise Lab')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'Enterprise Lab'
                  ? 'bg-slate-800 text-blue-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Systems & SIEM Labs
            </button>
            <button
              type="button"
              onClick={() => setFilter('Network Lab')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filter === 'Network Lab'
                  ? 'bg-slate-800 text-blue-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Network Topologies
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search labs, tools, vectors..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              onClick={() => setSelectedLab(lab)}
              className="group cursor-pointer bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <div>
                {/* Quiet unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-cyan-400">{lab.platform}</span>
                  <span aria-hidden="true">·</span>
                  <span>{lab.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{lab.difficulty}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {lab.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {lab.description}
                </p>

                {/* Key Vectors List */}
                <div className="space-y-1.5 mb-4">
                  {lab.keyVectors.slice(0, 3).map((vector, vIdx) => (
                    <div key={vIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                      <span className="text-cyan-400 mt-0.5">›</span>
                      <span className="line-clamp-1">{vector}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tools & CTA */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="text-slate-400 truncate max-w-[180px] font-mono">
                  {lab.toolsUsed.join(' · ')}
                </div>
                <span className="text-cyan-400 font-medium inline-flex items-center gap-1 group-hover:underline">
                  <span>Inspect Writeup</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredLabs.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 border border-slate-800 rounded-xl text-slate-400 text-sm">
            No labs or projects match your search "{searchQuery}". Try searching for "SMB", "Active Directory", "Wazuh", or "SQL".
          </div>
        )}

        {/* Quick Room Index Strip */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            Complete Solved Machines Catalog
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
            <div>
              <div className="font-semibold text-white mb-2 flex items-center gap-2">
                <span>15 TryHackMe Rooms Completed:</span>
              </div>
              <div className="text-slate-400 font-mono leading-relaxed">
                {PORTFOLIO_DATA.tryHackMeRoomsList.join(' · ')}
              </div>
              <div className="mt-2">
                <a
                  href={PORTFOLIO_DATA.personal.tryhackme}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Verify profile on TryHackMe (zahid28009)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div>
              <div className="font-semibold text-white mb-2 flex items-center gap-2">
                <span>4 VulnHub Black-Box Machines Exploited:</span>
              </div>
              <div className="text-slate-400 font-mono leading-relaxed">
                {PORTFOLIO_DATA.vulnHubBoxesList.join(' · ')}
              </div>
              <div className="mt-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Access penetration test writeups on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Detail Modal */}
      {selectedLab && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedLab(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="font-semibold text-cyan-400">{selectedLab.platform}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedLab.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{selectedLab.difficulty}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              {selectedLab.title}
            </h3>

            <div className="space-y-4 text-sm text-slate-300 mb-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Executive Summary:
                </h4>
                <p className="leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-slate-300">
                  {selectedLab.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Methodology & Execution Steps:
                </h4>
                <p className="leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-slate-300 font-mono text-xs">
                  {selectedLab.details}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Vulnerabilities & Exploit Vectors:
                </h4>
                <div className="space-y-1.5">
                  {selectedLab.keyVectors.map((v, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <span className="text-cyan-400 mt-0.5">✔</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Tools & Protocols Leveraged:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
                  {selectedLab.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Independent solve verified with technical writeup.
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>GitHub Writeup</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedLab(null)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
