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
        'Comprehensive vulnerability lifecycle management from discovery to remediation. Aggregate scans from Qualys, Tenable, Rapid7, and more.',
      capabilities: [
        'Multi-scanner aggregation',
        'Risk-based prioritization',
        'Patch tracking & verification',
        'Zero-day monitoring',
        'Remediation workflow automation',
        'SLA tracking & reporting',
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
        "Your command center for security operations. UNIFYTY's SOC module centralizes alerts from your SIEM, EDR, and network security tools.",
      capabilities: [
        'Unified alert management',
        'MITRE ATT&CK mapping',
        'Automated alert triage',
        'Incident timeline reconstruction',
        'Response playbook automation',
        'Forensic evidence collection',
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
        'Monitor, detect, and respond to endpoint threats across your entire fleet. Integrate with CrowdStrike, Microsoft Defender, SentinelOne, and more.',
      capabilities: [
        'Multi-EDR aggregation',
        'Behavioral threat detection',
        'Process tree analysis',
        'One-click endpoint isolation',
        'Automated remediation',
        'Threat hunting workbench',
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 'grc',
      icon: Scale,
      name: 'Risk & GRC',
      tagline: 'Transform risk management from reactive to proactive',
      description:
        'Enterprise risk and governance at your fingertips. Maintain your risk register, track compliance, and prepare for audits with automated evidence collection.',
      capabilities: [
        'Risk register & heat maps',
        'Multi-framework compliance',
        'Control mapping & gap analysis',
        'Automated evidence collection',
        'Policy management',
        'Vendor risk assessment',
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
        'Unified identity governance across Okta, Azure AD, SailPoint, and more. Monitor provisioning, detect orphan accounts, enforce least privilege.',
      capabilities: [
        'Cross-platform identity visibility',
        'Joiner/Mover/Leaver automation',
        'Orphan account detection',
        'Access certification campaigns',
        'Privileged account discovery',
        'MFA adoption tracking',
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
        'Monitor and control privileged access across CyberArk, BeyondTrust, and native cloud IAM. Session recording, just-in-time access, and credential vaulting.',
      capabilities: [
        'Privileged session monitoring',
        'Just-in-time access workflows',
        'Credential vault integration',
        'Break-glass procedures',
        'Privileged behavior analytics',
        'Zero standing privilege enforcement',
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