import React, { useState } from 'react';
import { PORTFOLIO_DATA, RoleLens } from '../data/portfolioData';
import { Search, X, CheckCircle, Shield, Server, Network, Terminal } from 'lucide-react';

interface SkillsSectionProps {
  currentLens: RoleLens;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentLens }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = PORTFOLIO_DATA.skillsData.filter((cat) => {
    if (selectedCategory !== 'all') {
      return cat.category === selectedCategory;
    }
    if (currentLens === 'cyber') {
      return cat.type === 'cyber' || cat.type === 'all';
    }
    if (currentLens === 'it') {
      return cat.type === 'it' || cat.type === 'all';
    }
    return true;
  });

  return (
    <section id="skills" className="py-14 px-6 lg:px-12 border-t border-slate-800 bg-slate-950/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Verified Technical Stack & Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Skills Matrix & Tool Proficiency
            </h2>
          </div>
          <div className="text-xs text-slate-400 max-w-md">
            Grounded in 5.5+ years of live enterprise administration at Prothom Alo, ISP operations at Next Online, and offensive security research.
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
            }`}
          >
            All Competencies
          </button>

          {PORTFOLIO_DATA.skillsData.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.category
                  ? 'bg-cyan-950 text-cyan-300 font-semibold border border-cyan-800'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-xs font-normal text-slate-500 font-mono">
                  {group.skills.length} competencies
                </span>
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-cyan-400/90 whitespace-nowrap shrink-0">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Toolkit Quick Reference Bar */}
        <div className="mt-12 bg-slate-900/90 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
            Recruiter Quick Scan: Security & Systems Toolkit
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
              <div className="font-semibold text-white mb-1">Security & EDR/SIEM</div>
              <div className="text-slate-400">CrowdStrike EDR, Wazuh SIEM, Burp Suite, Metasploit, Nessus, OpenVAS, SQLmap, Nikto, WPScan</div>
            </div>
            <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
              <div className="font-semibold text-white mb-1">Systems & Directory</div>
              <div className="text-slate-400">Windows Server 2022, Active Directory, GPO, M365, Ubuntu, Kali, macOS, VMware, Proxmox VE, WSL2</div>
            </div>
            <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
              <div className="font-semibold text-white mb-1">Networking & ISP</div>
              <div className="text-slate-400">MikroTik RouterOS, Cisco IOS, TCP/IP, VLAN, OSPF, NAT/PAT, VPN, DHCP, DNS, GNS3, Wireshark</div>
            </div>
            <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
              <div className="font-semibold text-white mb-1">Forensics & Dev</div>
              <div className="text-slate-400">Hashcat, Hydra, John, Binwalk, Steghide, Exiftool, Python, Bash, C, C++, Java</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
