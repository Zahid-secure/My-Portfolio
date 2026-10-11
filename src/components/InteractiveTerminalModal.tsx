import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHireModal: () => void;
  onOpenResumeModal: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenHireModal,
  onOpenResumeModal
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'whoami',
      output: (
        <div className="text-slate-300">
          <span className="text-cyan-400 font-semibold">{PORTFOLIO_DATA.personal.name}</span> — Cyber Security Engineer & Senior IT Systems Engineer
          <div className="text-xs text-slate-500 mt-0.5">
            Holders: Certified SOC Analyst (CSA), CCNA, MTCNA · 5.5+ Years Experience
          </div>
        </div>
      )
    },
    {
      id: 'init-2',
      command: 'help',
      output: (
        <div className="space-y-1 text-slate-300 text-xs">
          <div>Available commands:</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-slate-400 font-mono">
            <div><span className="text-cyan-300">whoami</span> - Identity & summary</div>
            <div><span className="text-cyan-300">skills</span> - All tech competencies</div>
            <div><span className="text-cyan-300">certs</span> - Credentials (CSA/CCNA/MTCNA)</div>
            <div><span className="text-cyan-300">exp</span> - Work timeline</div>
            <div><span className="text-cyan-300">edr</span> - CrowdStrike production work</div>
            <div><span className="text-cyan-300">thm</span> - 15 TryHackMe rooms</div>
            <div><span className="text-cyan-300">vulnhub</span> - 4 VulnHub machines</div>
            <div><span className="text-cyan-300">ad</span> - Windows Server 2022 AD lab</div>
            <div><span className="text-cyan-300">contact</span> - Phone, email, socials</div>
            <div><span className="text-cyan-300">hire</span> - Open contact dialog</div>
            <div><span className="text-cyan-300">cv</span> - Open printable CV viewer</div>
            <div><span className="text-cyan-300">clear</span> - Clear terminal buffer</div>
          </div>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'help':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <div>Available commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-slate-400 font-mono">
              <div><span className="text-cyan-300">whoami</span> - Identity & summary</div>
              <div><span className="text-cyan-300">skills</span> - All tech competencies</div>
              <div><span className="text-cyan-300">certs</span> - Credentials (CSA/CCNA/MTCNA)</div>
              <div><span className="text-cyan-300">exp</span> - Work timeline</div>
              <div><span className="text-cyan-300">edr</span> - CrowdStrike production work</div>
              <div><span className="text-cyan-300">thm</span> - 15 TryHackMe rooms</div>
              <div><span className="text-cyan-300">vulnhub</span> - 4 VulnHub machines</div>
              <div><span className="text-cyan-300">ad</span> - Windows Server 2022 AD lab</div>
              <div><span className="text-cyan-300">contact</span> - Phone, email, socials</div>
              <div><span className="text-cyan-300">hire</span> - Open contact dialog</div>
              <div><span className="text-cyan-300">cv</span> - Open printable CV viewer</div>
              <div><span className="text-cyan-300">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="font-bold text-white">{PORTFOLIO_DATA.personal.name}</div>
            <div>Current: System Engineer @ Prothom Alo (Dhaka)</div>
            <div className="text-slate-400">{PORTFOLIO_DATA.summaries.all}</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <div className="text-cyan-400 font-bold">CORE TECHNICAL COMPETENCIES:</div>
            <div className="text-slate-300">
              <span className="text-slate-400">Security:</span> CrowdStrike EDR, Wazuh SIEM, Burp Suite, Metasploit, Nessus, OpenVAS, SQLmap, Hashcat, Hydra, John
            </div>
            <div className="text-slate-300">
              <span className="text-slate-400">Systems:</span> Windows Server 2022 (AD DS, GPO, DNS, DHCP, File Server), Microsoft 365, VMware, Proxmox VE, Ubuntu, Kali, macOS
            </div>
            <div className="text-slate-300">
              <span className="text-slate-400">Networking:</span> MikroTik RouterOS (MTCNA), Cisco IOS (CCNA), TCP/IP, VLAN, OSPF, NAT/PAT, VPN, GNS3
            </div>
            <div className="text-slate-300">
              <span className="text-slate-400">Scripting:</span> Python, Bash, C, C++, Java
            </div>
          </div>
        );
        break;

      case 'certs':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">INDUSTRY CERTIFICATIONS:</div>
            <div>[2025] Certified SOC Analyst (CSA) — CSL Training Center</div>
            <div>[2024] MTCNA (MikroTik Certified Network Associate) — Daffodil Int'l Univ</div>
            <div>[2023] CCNA (Cisco Certified Network Associate) — Daffodil Int'l Univ</div>
          </div>
        );
        break;

      case 'exp':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">WORK HISTORY TIMELINE:</div>
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <div key={idx}>
                <div className="font-semibold text-white">{exp.role} · {exp.company} ({exp.period})</div>
                <div className="text-slate-400 text-[11px]">{exp.coreBullets[0]}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'edr':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">CROWDSTRIKE FALCON EDR OPERATIONAL SCOPE:</div>
            <div>• Real-time alert triage, host quarantine and network containment at Prothom Alo</div>
            <div>• Execution tree inspection, hash/signature validation, parent/child process tracing</div>
            <div>• Proactive incident investigation reducing organizational endpoint downtime to 0</div>
          </div>
        );
        break;

      case 'thm':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">TRYHACKME ROOMS COMPLETED (15 ROOMS):</div>
            <div className="font-mono text-slate-400">{PORTFOLIO_DATA.tryHackMeRoomsList.join(', ')}</div>
            <div className="text-cyan-300">Profile: {PORTFOLIO_DATA.personal.tryhackme}</div>
          </div>
        );
        break;

      case 'vulnhub':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">VULNHUB BLACK-BOX EXPLOITS SOLVED:</div>
            <div className="font-mono text-slate-400">{PORTFOLIO_DATA.vulnHubBoxesList.join(', ')}</div>
            <div className="text-slate-300">Written technical vulnerability writeups available on GitHub: {PORTFOLIO_DATA.personal.github}</div>
          </div>
        );
        break;

      case 'ad':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">WINDOWS SERVER 2022 LAB ARCHITECTURE:</div>
            <div>• Active Directory Domain Controller with hierarchical Organizational Units (OUs)</div>
            <div>• Group Policy Objects (GPOs) for BitLocker, AppLocker, and Windows Defender baseline</div>
            <div>• Role-based Access Control (RBAC), DNS forwarding, DHCP failover, and File Server ACLs</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">CONTACT MD ZAHID HASAN:</div>
            <div>WhatsApp: {PORTFOLIO_DATA.personal.whatsapp} (Direct: wa.me/{PORTFOLIO_DATA.personal.whatsappNumberClean})</div>
            <div>Email: {PORTFOLIO_DATA.personal.email} / {PORTFOLIO_DATA.personal.altEmail}</div>
            <div>Phone: {PORTFOLIO_DATA.personal.phone}</div>
            <div>LinkedIn: {PORTFOLIO_DATA.personal.linkedin}</div>
            <div>GitHub: {PORTFOLIO_DATA.personal.github}</div>
            <div>TryHackMe: {PORTFOLIO_DATA.personal.tryhackme}</div>
          </div>
        );
        break;

      case 'hire':
        onOpenHireModal();
        output = <div className="text-emerald-400 text-xs">Opened hire/contact modal dialog.</div>;
        break;

      case 'cv':
        onOpenResumeModal();
        output = <div className="text-emerald-400 text-xs">Opened printable CV viewer.</div>;
        break;

      default:
        output = (
          <div className="text-rose-400 text-xs">
            Command not recognized: "{cmd}". Type <span className="font-bold underline">help</span> to view all commands.
          </div>
        );
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: input,
        output
      }
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-slate-950 border border-slate-800 rounded-xl max-w-3xl w-full h-[600px] max-h-[90vh] flex flex-col shadow-2xl font-mono overflow-hidden">
        {/* Terminal Titlebar */}
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold text-slate-200">zahid@security-console: ~</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 hidden sm:inline">Type "help" for commands</span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400">zahid@soc-node:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 text-slate-300 leading-relaxed border-l border-slate-800/80">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input */}
        <form onSubmit={handleCommand} className="bg-slate-900/80 border-t border-slate-800 p-3 flex items-center gap-2">
          <span className="text-emerald-400 text-xs font-semibold whitespace-nowrap">
            zahid@soc-node:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command (try 'skills', 'edr', 'thm', 'certs', 'help')..."
            className="flex-1 bg-transparent border-none text-xs text-white focus:outline-none placeholder-slate-600 font-mono"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1 text-xs bg-cyan-400/20 text-cyan-300 border border-cyan-800 hover:bg-cyan-400/30 rounded transition-colors"
          >
            Run
          </button>
        </form>
      </div>
    </div>
  );
};
