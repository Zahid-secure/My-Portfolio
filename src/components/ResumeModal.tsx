import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: 'cyber' | 'it' | 'all';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  defaultTrack = 'all'
}) => {
  const [track, setTrack] = useState<'cyber' | 'it' | 'all'>(defaultTrack);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const textResume = `
MD ZAHID HASAN
${track === 'cyber' ? 'SOC Analyst | Cyber Security Engineer' : track === 'it' ? 'IT Engineer | IT Support, Networking & Endpoint Security' : 'Cyber Security Engineer | Senior IT Systems & Network Engineer'}
Dhaka, Bangladesh | Phone: ${PORTFOLIO_DATA.personal.phone} | WhatsApp: ${PORTFOLIO_DATA.personal.whatsapp}
Email: ${PORTFOLIO_DATA.personal.email} | LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
GitHub: ${PORTFOLIO_DATA.personal.github} | TryHackMe: ${PORTFOLIO_DATA.personal.tryhackme}

PROFESSIONAL SUMMARY
${track === 'cyber' ? PORTFOLIO_DATA.summaries.cyber : track === 'it' ? PORTFOLIO_DATA.summaries.it : PORTFOLIO_DATA.summaries.all}

CERTIFICATIONS
- Certified SOC Analyst (CSA) - CSL Training Center, 2025
- MTCNA (MikroTik Certified Network Associate) - Daffodil Int'l University, 2024
- CCNA (Cisco Certified Network Associate) - Daffodil Int'l University, 2023

PROFESSIONAL EXPERIENCE
1. System Engineer - Prothom Alo, Dhaka, Bangladesh (Feb 2024 - Present)
${(track === 'cyber' ? PORTFOLIO_DATA.experiences[0].cyberFocus : track === 'it' ? PORTFOLIO_DATA.experiences[0].itFocus : PORTFOLIO_DATA.experiences[0].coreBullets).map(b => `  • ${b}`).join('\n')}

2. ISP Network Engineer - Next Online Ltd., Gulshan-2, Dhaka (Jul 2023 - Feb 2024)
${(track === 'cyber' ? PORTFOLIO_DATA.experiences[1].cyberFocus : track === 'it' ? PORTFOLIO_DATA.experiences[1].itFocus : PORTFOLIO_DATA.experiences[1].coreBullets).map(b => `  • ${b}`).join('\n')}

3. Data Analyst - Intelligent Image Management Limited (IIML) (Feb 2022 - Jan 2023)
  • Verified structured and unstructured datasets under strict quality control.
  • Analyzed data anomalies to support fraud detection and compliance accuracy.

4. Freelance Graphic & Branding Designer - Self-employed / Fiverr (Jun 2019 - Present)
  • Delivered 100+ branding solutions for global clients using Adobe Photoshop, Illustrator and InDesign.

HANDS-ON LABS & PROJECTS
• 15 TryHackMe Rooms: ${PORTFOLIO_DATA.tryHackMeRoomsList.join(', ')}
• 4 VulnHub Black-box Solves: ${PORTFOLIO_DATA.vulnHubBoxesList.join(', ')}
• Wazuh SIEM Lab: Deployed Wazuh SIEM on Ubuntu with multi-platform agents for security monitoring.
• Windows Server 2022 Lab: Active Directory, Domain Join, File Server and Group Policy.
• Proxmox Virtualization Lab: Proxmox VE hypervisor for VM deployment and isolated testing.
• Campus Network Simulation (GNS3): Multi-VLAN architecture and OSPF routing.

EDUCATION
• B.Sc. in Computer Science - Daffodil International University (2023 | GPA 3.6 / 4.0)
• HSC (Science) - Bheramara College (2018 | GPA 3.64 / 5.0)
• SSC (Science) - Bheramara Pilot High School (2016 | GPA 4.94 / 5.0)

REFERENCE
Md Ziaur Rahman, CEO, Hacktolive, Dhaka, Bangladesh
Phone: ${PORTFOLIO_DATA.reference.phone} | Email: ${PORTFOLIO_DATA.reference.email}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl relative">
        {/* Header toolbar */}
        <div className="no-print p-4 sm:p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-950/70 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
              CV Format Lens:
            </span>
            <div className="flex items-center gap-1 p-0.5 bg-slate-900 border border-slate-800 rounded-lg">
              <button
                onClick={() => setTrack('cyber')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  track === 'cyber'
                    ? 'bg-cyan-950 text-cyan-300 font-semibold border border-cyan-800'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cyber Security Track
              </button>
              <button
                onClick={() => setTrack('it')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  track === 'it'
                    ? 'bg-blue-950 text-blue-300 font-semibold border border-blue-800'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Senior IT Systems Track
              </button>
              <button
                onClick={() => setTrack('all')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  track === 'all'
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Combined Master CV
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors inline-flex items-center gap-1.5"
              title="Copy plain-text ATS resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied ATS Text!' : 'Copy ATS Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0 selection:bg-slate-200 selection:text-black">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                MD ZAHID HASAN
              </h1>
              <div className="text-sm sm:text-base font-bold text-slate-800 mt-1">
                {track === 'cyber'
                  ? 'SOC Analyst | Cyber Security Engineer'
                  : track === 'it'
                  ? 'IT Engineer | IT Support, Networking & Endpoint Security'
                  : 'Cyber Security Engineer | Senior IT Systems & Network Engineer'}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                {track === 'cyber'
                  ? 'Security Monitoring · Incident Response · Endpoint Security · VAPT'
                  : track === 'it'
                  ? 'Targeting Senior IT Roles · Systems Reliability · Infrastructure'
                  : 'Enterprise IT Operations · Threat Detection & Containment · Network Architecture'}
              </div>
            </div>

            <div className="text-xs text-slate-700 text-left md:text-right space-y-1 font-mono">
              <div>Dhaka, Bangladesh · +880 1756-022008 (WhatsApp)</div>
              <div>zahid.daffodill@gmail.com · zahid28009@gmail.com</div>
              <div className="text-blue-700">linkedin.com/in/zahid-hasan-secure</div>
              <div className="text-blue-700">github.com/Zahid-secure · tryhackme.com/p/zahid28009</div>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              {track === 'cyber'
                ? PORTFOLIO_DATA.summaries.cyber
                : track === 'it'
                ? PORTFOLIO_DATA.summaries.it
                : PORTFOLIO_DATA.summaries.all}
            </p>
          </div>

          {/* Section: Key Competencies */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Key Competencies & Technical Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <div>
                <span className="font-bold text-slate-900">Security & EDR/SIEM: </span>
                <span className="text-slate-700">
                  CrowdStrike EDR, Wazuh SIEM, Burp Suite, Metasploit, Nessus, OpenVAS, SQLmap, Hashcat, Hydra, John the Ripper
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Systems & Directory: </span>
                <span className="text-slate-700">
                  Windows Server 2022 (AD DS, GPO, DNS, DHCP, File Server), Microsoft 365, Ubuntu/Linux, macOS, VMware, Proxmox VE
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Networking & Protocols: </span>
                <span className="text-slate-700">
                  MikroTik RouterOS, Cisco IOS, TCP/IP, VLAN, OSPF, NAT/PAT, VPN, SSH, RDP, DNS, DHCP, GNS3 Simulation
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900">IT Operations & Support: </span>
                <span className="text-slate-700">
                  L1–L3 Support, Helpdesk & SLA Ticketing, Asset Management, Backup & Recovery, Vendor Coordination, Python & Bash
                </span>
              </div>
            </div>
          </div>

          {/* Section: Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {PORTFOLIO_DATA.experiences.map((exp) => {
                const bullets =
                  track === 'cyber'
                    ? exp.cyberFocus
                    : track === 'it'
                    ? exp.itFocus
                    : exp.coreBullets;

                return (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between text-xs font-bold text-slate-900">
                      <div>
                        <span>{exp.role}</span>
                        <span className="font-normal text-slate-600"> — {exp.company}, {exp.location}</span>
                      </div>
                      <div className="font-mono text-slate-700">{exp.period}</div>
                    </div>

                    <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-xs text-slate-800">
                      {bullets.map((b, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Projects & Labs */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Projects, Labs & Practical Research
            </h2>
            <div className="space-y-2 text-xs text-slate-800">
              <div>
                <span className="font-bold text-slate-900">TryHackMe Proficiency (15 Rooms Solved): </span>
                <span>Kenobi, Agent Sudo, Blue, Ice, Ignite, Startup, Gaming Server, Bolt, Blog, SQHell, Easy Peasy, Relevant, Blaster, Brooklyn Nine Nine, RootMe.</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">VulnHub Black-box Exploits (4 Machines): </span>
                <span>ICA-1, DC-1, HackMePlease, Symfonos (All with written technical penetration reports).</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Enterprise SIEM Lab (Wazuh): </span>
                <span>Deployed Wazuh on Ubuntu with multi-platform agents for security monitoring, log collection and alert response.</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Windows Server 2022 Lab: </span>
                <span>Built active directory test domain: user accounts, domain join, file server ACLs, and Group Policy baseline enforcement.</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Virtualization & Network Labs: </span>
                <span>Proxmox VE hypervisor for isolated testing; GNS3 multi-VLAN campus network simulation with OSPF and NAT/PAT.</span>
              </div>
            </div>
          </div>

          {/* Section: Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-300 text-xs">
            <div>
              <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-1.5">
                Certifications
              </h3>
              <div className="space-y-1 text-slate-800">
                <div>• <span className="font-semibold">Certified SOC Analyst (CSA)</span> — CSL Training Center, 2025</div>
                <div>• <span className="font-semibold">MTCNA (MikroTik)</span> — Daffodil Int'l University, 2024</div>
                <div>• <span className="font-semibold">CCNA (Cisco)</span> — Daffodil Int'l University, 2023</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-1.5">
                Education
              </h3>
              <div className="space-y-1 text-slate-800">
                <div>• <span className="font-semibold">B.Sc. in Computer Science</span> — Daffodil Int'l University (2023 | GPA 3.6 / 4.0)</div>
                <div>• <span className="font-semibold">HSC (Science)</span> — Bheramara College (2018 | GPA 3.64 / 5.0)</div>
                <div>• <span className="font-semibold">SSC (Science)</span> — Bheramara Pilot High School (2016 | GPA 4.94 / 5.0)</div>
              </div>
            </div>
          </div>

          {/* Section: Academic Reference */}
          <div className="mt-5 pt-3 border-t border-slate-200 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900">Reference: </span>
              <span>{PORTFOLIO_DATA.reference.name}, {PORTFOLIO_DATA.reference.role}, {PORTFOLIO_DATA.reference.organization}</span>
            </div>
            <div className="font-mono text-slate-600">
              Phone: {PORTFOLIO_DATA.reference.phone} · Email: {PORTFOLIO_DATA.reference.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
