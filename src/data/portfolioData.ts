export type RoleLens = 'all' | 'cyber' | 'it';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  cyberFocus: string[];
  itFocus: string[];
  coreBullets: string[];
  technologies: string[];
}

export interface LabItem {
  id: string;
  title: string;
  platform: 'TryHackMe' | 'VulnHub' | 'Enterprise Lab' | 'Network Lab';
  category: 'Offensive / CTF' | 'Defense / SIEM' | 'Systems & Directory' | 'Network Architecture';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Lab Environment';
  keyVectors: string[];
  toolsUsed: string[];
  description: string;
  reportUrl?: string;
  details: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  code?: string;
  description: string;
  category: 'cyber' | 'it' | 'network';
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface SkillItem {
  name: string;
  level: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  type: 'cyber' | 'it' | 'all';
  skills: SkillItem[];
}

export interface PortfolioDataStructure {
  personal: typeof PORTFOLIO_DATA_PERSONAL;
  summaries: Record<RoleLens, string>;
  metrics: { label: string; value: string; note: string }[];
  experiences: ExperienceItem[];
  labs: LabItem[];
  tryHackMeRoomsList: string[];
  vulnHubBoxesList: string[];
  skillsData: SkillCategory[];
  certifications: CertificationItem[];
  education: EducationItem[];
  achievements: { title: string; description: string; category: string }[];
  reference: { name: string; role: string; organization: string; phone: string; email: string; relation: string };
}

const PORTFOLIO_DATA_PERSONAL = {
  name: 'Md Zahid Hasan',
  shortName: 'Zahid Hasan',
  tagline: 'Cyber Security Engineer · SOC Analyst · Senior IT Systems & Network Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'zahid28009@gmail.com',
  altEmail: 'zahid.daffodill@gmail.com',
  phone: '+880 1756-022008',
  whatsapp: '+880 1756-022008',
  whatsappNumberClean: '8801756022008',
  linkedin: 'https://www.linkedin.com/in/zahid-hasan-secure/',
  github: 'https://github.com/Zahid-secure',
  tryhackme: 'https://tryhackme.com/p/zahid28009',
  yearsOfExperience: '3+',
  experienceStartDate: 'July 2023',
  experienceNote: '3+ Years Core ISP Network & Enterprise Infrastructure with EDR & Incident Response (since joining Next Online as ISP Network Engineer in July 2023)',
  avatarImage: '/src/assets/images/passport_photo_zahid_white_1791746157092.jpg',
  heroBackdrop: '/src/assets/images/soc_infrastructure_hero_1791743220351.jpg',
};

export const PORTFOLIO_DATA = {
  personal: PORTFOLIO_DATA_PERSONAL,

  summaries: {
    all: `Multi-disciplinary IT & Cyber Security Professional with 3+ years of core engineering experience across ISP infrastructure and enterprise daily media operations in Bangladesh (commencing as an ISP Network Engineer in July 2023). Currently serving as System Engineer at Prothom Alo, orchestrating CrowdStrike Falcon EDR endpoint threat detection, Microsoft 365 identity governance, and enterprise L1-L3 systems. Proven expertise administering Windows Server 2022 Active Directory environments, architecting MikroTik networks, and conducting incident triage with Wazuh SIEM. Holds Certified SOC Analyst (CSA), CCNA, and MTCNA credentials, uniting defensive security operations with robust IT infrastructure engineering.`,
    cyber: `Cyber security-focused professional with 3+ years of hands-on network and enterprise security experience (commencing in July 2023 as ISP Network Engineer and advancing as System Engineer at Prothom Alo). Specializes in endpoint threat detection, security monitoring, and incident investigation. Certified SOC Analyst (CSA) with hands-on CrowdStrike EDR and Wazuh SIEM experience, backed by practical VAPT skills utilizing Burp Suite, Metasploit, Nessus, and OpenVAS. Supported by a rigorous CCNA/MTCNA network foundation and Windows Server / Active Directory administration, dedicated to rapidly detecting, investigating, and containing threats.`,
    it: `IT professional with 3+ years of direct network engineering and systems operations experience (started as an ISP Network Engineer in July 2023). Currently System Engineer at Prothom Alo managing Microsoft 365, endpoint security, and L1-L3 resolution within strict SLAs, with hands-on Windows Server 2022 / Active Directory lab and test-server practice. Formerly an ISP Network Engineer configuring MikroTik routers and diagnosing backbone and last-mile connectivity. Seeking a Senior IT / IT Infrastructure role to deliver resilient systems and operational leadership.`
  },

  metrics: [
    { label: 'Engineering Experience', value: '3+ Years', note: 'Since Joining ISP in July 2023' },
    { label: 'Industry Certifications', value: '3 Active', note: 'CSA, CCNA & MTCNA' },
    { label: 'Lab & CTF Solves', value: '19+ Machines', note: 'TryHackMe & VulnHub Reports' },
    { label: 'Enterprise Endpoints', value: '100% SLA', note: 'CrowdStrike EDR & M365 Administration' }
  ],

  experiences: [
    {
      id: 'prothom-alo',
      role: 'System Engineer',
      company: 'Prothom Alo',
      location: 'Dhaka, Bangladesh',
      period: 'Feb 2024 – Present',
      type: 'Full-time · Enterprise Media',
      technologies: ['CrowdStrike EDR', 'Windows Server 2022', 'Active Directory', 'Microsoft 365', 'VMware', 'WSL2', 'Ubuntu Linux', 'macOS', 'Network Administration'],
      cyberFocus: [
        'Investigate and respond to endpoint security detections using CrowdStrike EDR across remote and on-site incidents, proactively mitigating threats.',
        'Enforce strict organizational IT security policies, monitor compliance benchmarks, and conduct regular compliance audits to strengthen resilience.',
        'Document security incidents, analyze root causes, formulate containment resolutions, and manage automated data backup routines for business continuity.',
        'Administer identity and access policies across Windows Server 2022 Active Directory and Microsoft 365 with MFA and privileged access governance.'
      ],
      itFocus: [
        'Provide multi-tier L1–L3 technical support for hardware, software, and networking issues across Windows, macOS, and Linux, maintaining high SLA compliance.',
        'Administer Microsoft 365 cloud environment: license lifecycle, account provisioning, password reset policies, and mail flow troubleshooting.',
        'Architect IP addressing schemes, manage static IP allocations, and configure VMware / WSL2 virtualized developer environments.',
        'Oversee hardware asset lifecycle, vendor procurement coordination, workstation diagnostics, and business continuity backup verification.'
      ],
      coreBullets: [
        'Investigate endpoint security detections and handle remote and on-site incidents using CrowdStrike EDR.',
        'Provide L1–L3 support for hardware, software, and network issues across Windows, macOS, and Linux within strict SLAs.',
        'Administer Windows Server 2022 / Active Directory, Group Policy, and Microsoft 365 identity lifecycle.',
        'Enforce IT security policies, conduct compliance audits, and manage scheduled data backup and recovery pipelines.'
      ]
    },
    {
      id: 'next-online',
      role: 'ISP Network Engineer',
      company: 'Next Online Ltd.',
      location: 'Gulshan-2, Dhaka, Bangladesh',
      period: 'Jul 2023 – Feb 2024',
      type: 'Full-time · ISP & Telecommunications',
      technologies: ['MikroTik RouterOS', 'TCP/IP', 'BGP / OSPF', 'VLAN', 'NAT/PAT', 'DNS / DHCP', 'Bandwidth Management', 'Fiber Last-Mile'],
      cyberFocus: [
        'Hardened MikroTik edge router configurations against unauthorized access, port scans, and protocol misuse.',
        'Monitored network traffic anomalies, DDoS indicators, and routing table integrity across ISP backbone links.',
        'Implemented secure remote management practices (SSH keys, isolated management VLANs, and firewall filtering rules).'
      ],
      itFocus: [
        'Configured and deployed MikroTik enterprise routers for high-throughput corporate clients and residential subscribers.',
        'Monitored 24/7 ISP backbone stability, diagnosed route flapping, and resolved connectivity incidents with zero latency.',
        'Troubleshot last-mile fiber connectivity, calibrated bandwidth queues (Queues/PCQ), and managed client account service delivery.'
      ],
      coreBullets: [
        'Configured and maintained MikroTik routers for corporate and residential deployments.',
        'Monitored ISP backbone health and resolved network connectivity outages rapidly.',
        'Diagnosed last-mile connectivity incidents and delivered high-touch customer technical service.'
      ]
    },
    {
      id: 'iiml',
      role: 'Data Analyst',
      company: 'Intelligent Image Management Limited (IIML)',
      location: 'Dhaka, Bangladesh',
      period: 'Feb 2022 – Jan 2023',
      type: 'Full-time · Data Services',
      technologies: ['Data Verification', 'Fraud Detection', 'Anomaly Detection', 'Quality Control', 'Excel / Spreadsheet Analysis'],
      cyberFocus: [
        'Analyzed data anomalies and transactional irregularities to detect potential fraud patterns and support compliance accuracy.',
        'Identified data discrepancies and maintained audit-ready verification logs.'
      ],
      itFocus: [
        'Audited structured and unstructured datasets, processing high record volumes under tight quality control thresholds.',
        'Maintained structured workflow documentation and automated repetitive spreadsheet verification tasks.'
      ],
      coreBullets: [
        'Verified structured and unstructured datasets, processing large record volumes under strict quality control.',
        'Analyzed data anomalies to support fraud detection and regulatory compliance accuracy.'
      ]
    },
    {
      id: 'freelance-design',
      role: 'Freelance Graphic & Branding Designer',
      company: 'Self-employed / Fiverr',
      location: 'Remote',
      period: 'Jun 2019 – Present',
      type: 'Contract · Global Clients',
      technologies: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Technical Documentation', 'Client Presentation'],
      cyberFocus: [
        'Produced high-clarity technical reports, visual incident infographics, and executive presentation decks for security documentation.'
      ],
      itFocus: [
        'Delivered 100+ branding solutions for international clients with 5-star communication, requirements gathering, and deadline adherence.'
      ],
      coreBullets: [
        'Delivered 100+ branding solutions for global clients using Adobe Photoshop, Illustrator, and InDesign.',
        'Refined precision communication, visual documentation, and client-facing stakeholder collaboration.'
      ]
    }
  ],

  labs: [
    {
      id: 'thm-kenobi',
      title: 'Kenobi',
      platform: 'TryHackMe',
      category: 'Offensive / CTF',
      difficulty: 'Easy',
      keyVectors: ['Samba / SMB Exploitation', 'ProFTPd 1.3.5 mod_copy', 'SUID Binary Privilege Escalation'],
      toolsUsed: ['Nmap', 'SMBClient', 'Searchsploit', 'Netcat'],
      description: 'Exploited an vulnerable Samba share to identify files, utilized ProFTPD mod_copy vulnerability to extract private keys, and manipulated custom SUID binaries via path variable hijacking to achieve root.',
      details: 'Identified anonymous SMB shares, extracted user credentials, leveraged ProFTPd mod_copy to copy id_rsa to /var/tmp, authenticated via SSH, discovered a vulnerable SUID binary invoking strings without absolute path, and executed PATH hijacking for root escalation.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'thm-agent-sudo',
      title: 'Agent Sudo',
      platform: 'TryHackMe',
      category: 'Offensive / CTF',
      difficulty: 'Easy',
      keyVectors: ['Custom User-Agent Spoofing', 'Hydra SSH Brute-force', 'CVE-2019-14287 (Sudo bypass)'],
      toolsUsed: ['Burp Suite', 'Hydra', 'Steghide', 'John the Ripper'],
      description: 'Manipulated HTTP User-Agent headers to access hidden portals, cracked SSH credentials from steganography images, and exploited sudo security vulnerability CVE-2019-14287 (sudo -u#-1 /bin/bash).',
      details: 'Enumerated web server checking for specific agent identifiers (User-Agent: C). Extracted hidden ZIP and images, cracked passphrase using John. Discovered sudo privilege allowing all users except root, exploited CVE-2019-14287 using user ID -1 to spawn root shell.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'thm-blue',
      title: 'Blue',
      platform: 'TryHackMe',
      category: 'Offensive / CTF',
      difficulty: 'Easy',
      keyVectors: ['EternalBlue (MS17-010)', 'SMBv1 Remote Code Execution', 'NT AUTHORITY\\SYSTEM Shell'],
      toolsUsed: ['Metasploit', 'Nmap Vuln Script', 'Meterpreter'],
      description: 'Scanned target with Nmap MS17-010 NSE scripts, leveraged EternalBlue SMBv1 flaw to achieve instant NT AUTHORITY\\SYSTEM shell, and migrated process to ensure persistence.',
      details: 'Verified vulnerability on Windows 7 x64 SP1 via nmap --script vuln -p 445. Launched exploit/windows/smb/ms17_010_eternalblue. Achieved instant ring-0 NT AUTHORITY\\SYSTEM privilege, dumped SAM hashes, and audited patch deficiencies.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'thm-bolt',
      title: 'Bolt',
      platform: 'TryHackMe',
      category: 'Offensive / CTF',
      difficulty: 'Medium',
      keyVectors: ['Bolt CMS 3.7.0 Authenticated RCE', 'PHP Extension Filter Bypass', 'Privilege Escalation'],
      toolsUsed: ['Burp Suite', 'Searchsploit', 'PHP Web Shell', 'LinPEAS'],
      description: 'Audited Bolt CMS installation, identified credential exposure, exploited authenticated file upload vulnerability to upload PHP reverse shell, and escalated privileges.',
      details: 'Identified CMS version, captured credentials via configuration audit, leveraged CVE-2020-4041 authenticated file upload flaw to bypass extension blacklist by adding custom extension in configuration, obtaining interactive shell and local root.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'thm-sqhell',
      title: 'SQHell',
      platform: 'TryHackMe',
      category: 'Offensive / CTF',
      difficulty: 'Medium',
      keyVectors: ['Blind SQL Injection', 'UNION-based SQLi', 'Error-based SQLi', 'Header SQL Injection'],
      toolsUsed: ['Burp Suite', 'SQLmap', 'Custom Python SQL Payloads'],
      description: 'Successfully discovered and exploited 5 distinct SQL injection vectors across varied web parameters, including User-Agent, X-Forwarded-For, and numeric ID parameters.',
      details: 'Analyzed database interactions with precision payloads. Conducted boolean-based blind injection, time-delay injections, and extractvalue() error-based queries to exfiltrate schema structures and administrative hash tokens.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'vulnhub-dc1',
      title: 'DC-1 (VulnHub)',
      platform: 'VulnHub',
      category: 'Offensive / CTF',
      difficulty: 'Easy',
      keyVectors: ['Drupalgeddon 2 (CVE-2018-7600)', 'Settings.php DB Enumeration', 'Find SUID Command Execution'],
      toolsUsed: ['Metasploit', 'MySQL Client', 'LinPEAS', 'Bash'],
      description: 'Black-box penetration testing on Drupal CMS machine. Exploited CVE-2018-7600 for initial access, enumerated MySQL database credentials, and leveraged find SUID binary for root.',
      details: 'Identified Drupal 7 installation. Exploited Drupalgeddon 2 RCE. Accessed settings.php to recover database credentials. Enumerated suid binaries: /usr/bin/find -exec "/bin/sh" \\; obtaining root flag with full documentation.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'vulnhub-ica1',
      title: 'ICA-1 (VulnHub)',
      platform: 'VulnHub',
      category: 'Offensive / CTF',
      difficulty: 'Medium',
      keyVectors: ['QdPM CMS SQL Injection', 'Base64 Credential Decoding', 'Custom Root Cronjob Exploitation'],
      toolsUsed: ['SQLmap', 'Burp Suite', 'LinPEAS', 'CyberChef'],
      description: 'Discovered SQL injection in QdPM web interface, extracted hashed credentials, cracked user access, and escalated to root by manipulating writable scripts executed by root cron.',
      details: 'Identified QdPM 9.2. Harvested cleartext database credentials via SQL injection. Escalated to developer user. Analyzed process activity to discover a scheduled task executing a script located in a world-writable directory, hijacked it for reverse root shell.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'wazuh-siem',
      title: 'Wazuh SIEM Enterprise Lab',
      platform: 'Enterprise Lab',
      category: 'Defense / SIEM',
      difficulty: 'Lab Environment',
      keyVectors: ['SIEM Architecture', 'Multi-Agent Telemetry', 'Log Ingestion & Parsing', 'Custom Alert Rules'],
      toolsUsed: ['Wazuh Manager', 'Wazuh Indexer', 'Wazuh Dashboard', 'Ubuntu Server', 'Sysmon'],
      description: 'Deployed Wazuh SIEM on Ubuntu Server, enrolled multi-platform agents (Windows Server, Ubuntu, Kali), and configured automated alerting rules for brute-force attacks and privilege escalation.',
      details: 'Architected standalone Wazuh cluster on Ubuntu. Enrolled Windows Server and Linux endpoints with File Integrity Monitoring (FIM), Active Response, and custom XML decoding rules. Tested against simulated Hydra brute-force and credential dumping.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'win-server-2022',
      title: 'Windows Server 2022 Active Directory Lab',
      platform: 'Enterprise Lab',
      category: 'Systems & Directory',
      difficulty: 'Lab Environment',
      keyVectors: ['Active Directory Domain Services (AD DS)', 'Group Policy Objects (GPOs)', 'DNS & DHCP Scope', 'File Server ACLs'],
      toolsUsed: ['Windows Server 2022', 'Active Directory', 'PowerShell', 'GPMC', 'Hyper-V'],
      description: 'Built enterprise-grade test domain: configured Domain Controller, Organizational Units (OUs), Group Policy security baselines, DNS forwarding, and role-based access control (RBAC).',
      details: 'Configured corporate domain tree with tiered OUs (Admins, Workstations, Servers, Users). Built GPOs for BitLocker enforcement, Windows Defender configuration, AppLocker application whitelisting, and shared drive mapping.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'proxmox-lab',
      title: 'Proxmox VE Virtualization Lab',
      platform: 'Enterprise Lab',
      category: 'Systems & Directory',
      difficulty: 'Lab Environment',
      keyVectors: ['Type-1 Hypervisor Deployment', 'Isolated VLAN Sandboxing', 'VM Resource Allocation', 'Malware Analysis Sandbox'],
      toolsUsed: ['Proxmox VE', 'KVM', 'LXC Containers', 'Linux Bridges (OVS)', 'ZFS Storage'],
      description: 'Engineered a home-lab Proxmox VE hypervisor environment for VM deployment, resource orchestration, and isolated network virtualization for security testing.',
      details: 'Deployed Proxmox on dedicated hardware. Established isolated virtual bridges (vmbr) to segment malicious traffic from home network. Hosted multiple Linux and Windows VMs for red-team/blue-team simulation with automated snapshots.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'gns3-campus',
      title: 'Campus Network Architecture Simulation',
      platform: 'Network Lab',
      category: 'Network Architecture',
      difficulty: 'Lab Environment',
      keyVectors: ['Multi-VLAN Segmentation', 'OSPF Multi-Area Routing', 'NAT/PAT & ACLs', 'DHCP Snooping & STP'],
      toolsUsed: ['GNS3', 'Cisco IOU / IOSv', 'Wireshark', 'MikroTik CHR'],
      description: 'Designed a high-availability multi-building campus network topology with redundant core switches, distribution routing, and edge security filtering.',
      details: 'Implemented 8 distinct VLANs for departments and guests. Configured OSPF area 0 backbone routing with MD5 authentication, dynamic NAT overload, Rapid Spanning Tree Protocol (RSTP), and strict ingress/egress ACLs.',
      reportUrl: 'https://github.com/Zahid-secure'
    },
    {
      id: 'research-lab',
      title: 'Private Multi-VM Attack Research Lab',
      platform: 'Enterprise Lab',
      category: 'Offensive / CTF',
      difficulty: 'Lab Environment',
      keyVectors: ['Protocol Enumeration (FTP, SMB, SSH)', 'Privilege Escalation', 'Lateral Movement simulation'],
      toolsUsed: ['Kioptrix', 'DEV', 'BlackPearl', 'Academy', 'Kali Linux', 'Burp Suite'],
      description: 'Configured 4 isolated attack target virtual machines to practice protocol enumeration, binary exploitation, and kernel vulnerability evaluation under realistic network constraints.',
      details: 'Systematically exploited legacy and modern services across 4 VMs. Documented end-to-end exploit chains, crafted step-by-step remediation reports, and verified defensive hardening.',
      reportUrl: 'https://github.com/Zahid-secure'
    }
  ] as LabItem[],

  tryHackMeRoomsList: [
    'Kenobi', 'Agent Sudo', 'Blue', 'Ice', 'Ignite', 'Startup', 
    'Gaming Server', 'Bolt', 'Blog', 'SQHell', 'Easy Peasy', 
    'Relevant', 'Blaster', 'Brooklyn Nine Nine', 'RootMe'
  ],

  vulnHubBoxesList: [
    'ICA-1', 'DC-1', 'HackMePlease', 'Symfonos'
  ],

  skillsData: [
    {
      category: 'Security Operations & Incident Response',
      type: 'cyber',
      skills: [
        { name: 'CrowdStrike Falcon EDR', level: 'Advanced', description: 'Real-time alert triage, host isolation, process tree analysis, incident containment at Prothom Alo' },
        { name: 'Wazuh SIEM', level: 'Intermediate', description: 'Log collection, XML ruleset tuning, alert analysis, multi-platform agent management' },
        { name: 'Incident & Root Cause Analysis', level: 'Advanced', description: 'SLA-driven incident investigation, documentation, remediation, and preventative mitigation' },
        { name: 'Endpoint Protection (MDR/EDR)', level: 'Advanced', description: 'False-positive elimination, hash/signature validation, endpoint telemetry audits' },
        { name: 'IT Policy & Compliance Audits', level: 'Advanced', description: 'Enforcing organizational cyber hygiene, security baseline checks, downtime reduction' }
      ]
    },
    {
      category: 'Vulnerability Assessment & Pen Testing (VAPT)',
      type: 'cyber',
      skills: [
        { name: 'Burp Suite Pro / Community', level: 'Advanced', description: 'Web application security testing, request tampering, repeater, intruder, scanner' },
        { name: 'Metasploit Framework', level: 'Advanced', description: 'Exploitation, payload crafting, meterpreter sessions, vulnerability verification' },
        { name: 'Nessus & OpenVAS', level: 'Intermediate', description: 'Network vulnerability scanning, credentialed assessments, CVE remediation mapping' },
        { name: 'SQLmap & Nikto', level: 'Advanced', description: 'Automated SQL injection assessment, database extraction, web server scanning' },
        { name: 'Password Cracking Tools', level: 'Intermediate', description: 'Hashcat, Hydra, John the Ripper for password audit and brute-force evaluation' },
        { name: 'Steganography & Forensics', level: 'Intermediate', description: 'Binwalk, Steghide, Exiftool, Strings for CTF forensics and payload discovery' }
      ]
    },
    {
      category: 'Systems, Servers & Directory Services',
      type: 'it',
      skills: [
        { name: 'Windows Server 2022', level: 'Advanced', description: 'Active Directory Domain Services (AD DS), DNS, DHCP, File Server, Group Policy (GPO)' },
        { name: 'Microsoft 365 Administration', level: 'Advanced', description: 'User lifecycle, license allocation, password resets, MFA, Exchange mail security' },
        { name: 'Operating Systems Support', level: 'Advanced', description: 'Windows 10/11, Ubuntu Linux, Kali Linux, macOS, WSL2 multi-platform L1–L3 support' },
        { name: 'Virtualization & Hypervisors', level: 'Advanced', description: 'VMware Workstation/ESXi, Proxmox VE hypervisors, VM provisioning, isolated sandboxing' },
        { name: 'IT Asset & SLA Operations', level: 'Advanced', description: 'Ticketing queues, asset inventory, vendor procurement coordination, backup/recovery' }
      ]
    },
    {
      category: 'Networking, Protocols & Infrastructure',
      type: 'it',
      skills: [
        { name: 'MikroTik RouterOS', level: 'Advanced', description: 'Routing, NAT/PAT, queues/QoS, firewall filters, corporate & ISP deployments (MTCNA)' },
        { name: 'Cisco Networking', level: 'Advanced', description: 'VLAN, Trunking, Inter-VLAN routing, OSPF, ACLs, STP, CCNA-certified architecture' },
        { name: 'Core Network Protocols', level: 'Expert', description: 'TCP/IP, DNS, DHCP, OSPF, NAT/PAT, SSH, RDP, FTP, HTTP/S, VPN (IPsec/WireGuard)' },
        { name: 'Network Simulation (GNS3)', level: 'Advanced', description: 'Complex enterprise campus simulations, topology design, protocol packet inspection' }
      ]
    },
    {
      category: 'Scripting & Programming (Fundamentals)',
      type: 'all',
      skills: [
        { name: 'Python', level: 'Working Knowledge', description: 'Automation scripts, socket programming, custom exploit modifications' },
        { name: 'Bash / Shell Scripting', level: 'Working Knowledge', description: 'Linux system automation, cron jobs, log extraction' },
        { name: 'C / C++ & Java', level: 'Academic Foundation', description: 'Algorithm fundamentals, object-oriented concepts from B.Sc. in Computer Science' }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      name: 'Certified SOC Analyst (CSA)',
      issuer: 'CSL Training Center',
      year: '2025',
      description: 'Hands-on validation of SOC operations, alert triage, incident detection, digital forensics fundamentals, and SIEM monitoring.',
      category: 'cyber'
    },
    {
      name: 'CCNA (Cisco Certified Network Associate)',
      issuer: 'Cisco / Daffodil International University',
      year: '2023',
      description: 'Industry-standard credential validating network fundamentals, IP connectivity, IP services, security fundamentals, and automation.',
      category: 'network'
    },
    {
      name: 'MTCNA (MikroTik Certified Network Associate)',
      issuer: 'MikroTik / Daffodil International University',
      year: '2024',
      description: 'Specialized router administration, firewalling, bandwidth management, wireless networking, and MikroTik RouterOS optimization.',
      category: 'network'
    }
  ],

  education: [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'Daffodil International University',
      year: '2023',
      grade: 'GPA 3.6 / 4.0'
    },
    {
      degree: 'HSC (Higher Secondary Certificate - Science)',
      institution: 'Bheramara College',
      year: '2018',
      grade: 'GPA 3.64 / 5.0'
    },
    {
      degree: 'SSC (Secondary School Certificate - Science)',
      institution: 'Bheramara Pilot High School',
      year: '2016',
      grade: 'GPA 4.94 / 5.0'
    }
  ],

  achievements: [
    {
      title: 'Proactive Downtime Reduction',
      description: 'Proactively investigated and mitigated internal IT and security incidents at Prothom Alo, noticeably minimizing operational downtime.',
      category: 'cyber'
    },
    {
      title: '19+ Lab & CTF Exploits Documented',
      description: 'Completed 15 TryHackMe rooms and 4 VulnHub machines independently, authoring comprehensive technical vulnerability reports.',
      category: 'cyber'
    },
    {
      title: 'Enterprise IT Compliance Audits',
      description: 'Strengthened organizational IT resilience by enforcing compliance baselines and security audits across hybrid desktop fleets.',
      category: 'it'
    },
    {
      title: 'Organizing Secretary, DIU Karate Club',
      description: 'Organized a high-impact women\'s self-defense seminar with 100+ attendees; demonstrates community leadership and event orchestration.',
      category: 'leadership'
    },
    {
      title: 'Phoenix Summit 2026',
      description: 'Attended the prestigious 2-day technology conference in Dhaka, connecting with enterprise tech and cybersecurity leaders.',
      category: 'professional'
    }
  ],

  reference: {
    name: 'Md Ziaur Rahman',
    role: 'CEO',
    organization: 'Hacktolive, Dhaka, Bangladesh',
    phone: '+880 1521-416287',
    email: 'ziaur.ceh@gmail.com',
    relation: 'Academic'
  }
};
