import React, { useState } from 'react';
import { Search, Target, Shield, Scale, UserCheck, Key, Network, Code, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ModulesSection = () => {
  const modules = [
    {
      id: 'vm',
      icon: Search,
      name: 'Vulnerability Management',
      tagline: 'Find vulnerabilities before attackers do',
      description:
        'Comprehensive vulnerability lifecycle management from discovery to remediation. Aggregate scans from Qualys, Tenable, Rapid7, and more into a single, prioritized view.',
      detailedDescription:
        'UNIFYTY VM consolidates vulnerability data from multiple scanners, providing unified risk-based prioritization across your entire attack surface. Our intelligent correlation engine maps vulnerabilities to MITRE ATT&CK techniques, assesses exploitability, and factors in your specific environment context. Automated workflows track remediation progress, verify patch deployment, and maintain SLA compliance. Integration with ITSM tools ensures seamless ticketing and communication between security and IT teams.',
      capabilities: [
        'Multi-scanner aggregation & deduplication',
        'Risk-based prioritization with CVSS scoring',
        'Patch tracking & verification workflows',
        'Zero-day monitoring & alerting',
        'Remediation workflow automation',
        'Comprehensive SLA tracking & reporting',
      ],
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'soc',
      icon: Target,
      name: 'Security Operations Center',
      tagline: 'Detect, investigate, respond—faster than ever',
      description:
        "Your command center for security operations. UNIFYTY's SOC module centralizes alerts from your SIEM, EDR, and network security tools into one unified interface.",
      detailedDescription:
        "Transform your SOC into a high-velocity threat response team. UNIFYTY's AI-powered correlation reduces alert fatigue by 95%, automatically grouping related alerts into cohesive incidents mapped to MITRE ATT&CK tactics. Our automated triage engine prioritizes alerts based on threat intelligence, asset criticality, and historical context. Pre-built response playbooks enable one-click containment actions across your entire security stack. Forensic timeline reconstruction provides investigators with complete attack narratives, while automated evidence collection ensures nothing is missed.",
      capabilities: [
        'Unified alert management across all tools',
        'AI-powered MITRE ATT&CK mapping',
        'Automated alert triage & prioritization',
        'Incident timeline reconstruction',
        'Response playbook automation (200+ templates)',
        'Forensic evidence collection & preservation',
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 'edr',
      icon: Shield,
      name: 'Endpoint Detection & Response',
      tagline: 'Complete visibility into every endpoint',
      description:
        'Monitor, detect, and respond to endpoint threats across your entire fleet. Integrate with CrowdStrike, Microsoft Defender, SentinelOne, and more for unified endpoint security.',
      detailedDescription:
        'UNIFYTY EDR aggregates telemetry from multiple endpoint protection platforms, providing security teams with a single pane of glass for all endpoint activity. Our behavioral analytics engine detects anomalous process execution, lateral movement attempts, and credential theft across Windows, macOS, and Linux systems. One-click endpoint isolation enables rapid containment without switching tools. The threat hunting workbench provides SOC analysts with powerful search capabilities across historical endpoint data, while automated remediation playbooks can remove malware, kill processes, and restore systems to known-good states.',
      capabilities: [
        'Multi-EDR aggregation & correlation',
        'Behavioral threat detection & analytics',
        'Process tree analysis & visualization',
        'One-click endpoint isolation',
        'Automated remediation playbooks',
        'Advanced threat hunting workbench',
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 'grc',
      icon: Scale,
      name: 'Governance, Risk & Compliance',
      tagline: 'Transform risk management from reactive to proactive',
      description:
        'Enterprise risk and governance at your fingertips. Maintain your risk register, track compliance, and prepare for audits with automated evidence collection across SOC2, ISO27001, PCI-DSS, HIPAA, and GDPR.',
      detailedDescription:
        "UNIFYTY GRC transforms compliance from a painful annual exercise into continuous, automated monitoring. Our platform maintains a living risk register that automatically updates based on vulnerability scans, security incidents, and control testing results. Multi-framework support allows you to map controls across SOC2, ISO27001, PCI-DSS, HIPAA, and GDPR simultaneously. Automated evidence collection pulls logs, configurations, and reports from your security tools, building an audit trail without manual effort. Gap analysis highlights control weaknesses and provides remediation recommendations. Policy management workflows ensure your security documentation stays current and accessible.",
      capabilities: [
        'Dynamic risk register & heat maps',
        'Multi-framework compliance (SOC2, ISO27001, PCI-DSS, HIPAA, GDPR)',
        'Control mapping & gap analysis',
        'Automated evidence collection & audit trails',
        'Policy lifecycle management',
        'Vendor risk assessment & tracking',
      ],
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-600',
    },
    {
      id: 'iam',
      icon: UserCheck,
      name: 'Identity & Access Management',
      tagline: 'Secure identities. Govern access. Reduce risk',
      description:
        'Unified identity governance across Okta, Azure AD, SailPoint, and more. Monitor provisioning, detect orphan accounts, enforce least privilege, and maintain compliance.',
      detailedDescription:
        'UNIFYTY IAM provides comprehensive identity governance across cloud and on-premises systems. Our platform aggregates identity data from multiple sources, identifying orphan accounts, excessive permissions, and policy violations. Automated Joiner/Mover/Leaver workflows ensure users receive appropriate access on day one and have it revoked immediately upon departure. Access certification campaigns simplify the review process with intelligent recommendations based on role, department, and historical usage. Real-time MFA adoption tracking helps security teams identify gaps in authentication policies. Integration with HRMS systems ensures identity data stays synchronized.',
      capabilities: [
        'Cross-platform identity visibility & governance',
        'Automated Joiner/Mover/Leaver workflows',
        'Orphan account detection & cleanup',
        'Access certification campaigns',
        'Privileged account discovery & monitoring',
        'MFA adoption tracking & enforcement',
      ],
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'pam',
      icon: Key,
      name: 'Privileged Access Management',
      tagline: 'Protect your most sensitive credentials',
      description:
        'Monitor and control privileged access across CyberArk, BeyondTrust, and native cloud IAM. Session recording, just-in-time access, and credential vaulting ensure Zero Trust security.',
      detailedDescription:
        'UNIFYTY PAM extends your privileged access management infrastructure with comprehensive monitoring and governance. Our platform records and analyzes all privileged sessions, detecting anomalous behavior like unauthorized command execution or suspicious file access. Just-in-time access workflows eliminate standing privileges, granting elevated permissions only when needed and automatically revoking them after use. Integration with credential vaults ensures passwords are never exposed. Privileged behavior analytics detect insider threats and compromised accounts. Break-glass procedures provide emergency access while maintaining complete audit trails. Zero Standing Privilege enforcement ensures no accounts have permanent administrative rights.',
      capabilities: [
        'Privileged session monitoring & recording',
        'Just-in-time access workflows',
        'Credential vault integration',
        'Break-glass emergency procedures',
        'Privileged behavior analytics',
        'Zero Standing Privilege enforcement',
      ],
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600',
    },
  ];

  const [selectedModule, setSelectedModule] = useState(modules[0]);

  return (
    <section id="modules" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Security Modules</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Security Coverage
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              Across Every Domain
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Eight specialized modules working together as one unified platform
          </p>
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module) => {
            const Icon = module.icon;
            const isSelected = selectedModule.id === module.id;
            return (
              <Card
                key={module.id}
                onClick={() => setSelectedModule(module)}
                className={`group cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? `bg-gradient-to-br ${module.gradient} border-transparent shadow-2xl scale-105`
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600 hover:scale-102'
                } backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isSelected
                          ? 'bg-white/20'
                          : `bg-gradient-to-r ${module.gradient}`
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg ${
                        isSelected ? 'text-white' : 'text-slate-200'
                      }`}>
                        {module.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Module Details */}
        <div className="relative">
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${selectedModule.gradient} opacity-10 blur-3xl`}></div>
          
          <Card className="relative bg-slate-800/80 border-slate-700/50 backdrop-blur-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${selectedModule.gradient} shadow-xl`}>
                      {React.createElement(selectedModule.icon, {
                        className: 'w-8 h-8 text-white',
                        strokeWidth: 2,
                      })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{selectedModule.name}</h3>
                      <p className={`text-lg bg-gradient-to-r ${selectedModule.gradient} bg-clip-text text-transparent font-semibold mt-1`}>
                        {selectedModule.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">{selectedModule.description}</p>
                  
                  {/* Detailed Description */}
                  <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
                    <h4 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-3">How It Works</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{selectedModule.detailedDescription}</p>
                  </div>
                </div>

                {/* Right Column - Capabilities */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-6">Key Capabilities</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedModule.capabilities.map((capability, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 rounded-lg bg-slate-900/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                      >
                        <svg
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${selectedModule.gradient} bg-clip-text text-transparent`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-300">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;