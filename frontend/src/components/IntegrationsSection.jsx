import React, { useState } from 'react';
import { Badge } from './ui/badge';

const IntegrationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const integrations = [
    // VM Tools (4 tools)
    { 
      name: 'Tenable', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673',
      description: 'Gold standard for vulnerability assessment with comprehensive asset coverage including cloud, OT, identity, and web app vulnerabilities'
    },
    { 
      name: 'Qualys', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idw382nG0m/w/400/h/400/theme/dark/icon.jpeg?t=1734545649666',
      description: 'Cloud-based vulnerability management with continuous monitoring and compliance scanning across IT and OT assets'
    },
    { 
      name: 'Rapid7', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'InsightVM platform for vulnerability risk management with live monitoring and automated threat prioritization'
    },
    { 
      name: 'Nessus', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673',
      description: 'Industry-leading vulnerability scanner for identifying security flaws, misconfigurations, and compliance issues'
    },
    
    // SIEM Tools (4 tools)
    { 
      name: 'Splunk', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idAnLJhrbv/w/400/h/400/theme/dark/icon.jpeg?t=1733863319695',
      description: 'Enterprise Security platform with ML-based anomaly detection, UBA, and real-time analysis for massive data ingestion'
    },
    { 
      name: 'Microsoft Sentinel', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Cloud-native SIEM with AI-driven Fusion engine, UEBA, and Security Copilot for intelligent threat correlation'
    },
    { 
      name: 'IBM QRadar', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691',
      description: 'Modular SIEM with 700+ integrations, mature correlation rules, and AI-powered threat prioritization'
    },
    { 
      name: 'Elastic Security', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idw_bfBkXT/w/400/h/400/theme/dark/icon.jpeg?t=1734540955859',
      description: 'Open-source SIEM on Elastic Stack with powerful search, full-stack visibility, and scalable log management'
    },
    
    // EDR Tools (4 tools)
    { 
      name: 'CrowdStrike', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idAFvJPJDw/w/400/h/400/theme/dark/icon.jpeg?t=1733863310044',
      description: 'Falcon platform with next-gen antivirus, cloud-delivered threat intelligence, and 70%+ fileless malware detection'
    },
    { 
      name: 'SentinelOne', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idSUrLOkNR/w/400/h/400/theme/dark/icon.jpeg?t=1733863332651',
      description: 'AI-driven EDR with autonomous response, behavioral threat detection, and comprehensive cross-platform coverage'
    },
    { 
      name: 'Carbon Black', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idw_bfBkXT/w/400/h/400/theme/dark/icon.jpeg?t=1734540955859',
      description: 'VMware endpoint security with incident response, threat hunting, and comprehensive endpoint activity recording'
    },
    { 
      name: 'Microsoft Defender', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Unified endpoint protection with Microsoft ecosystem integration, proactive threat hunting, and centralized management'
    },
    
    // Cloud Tools (4 tools)
    { 
      name: 'AWS Security Hub', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idarqHjMDF/w/400/h/400/theme/dark/icon.jpeg?t=1733863314862',
      description: 'Centralized cloud security posture management for AWS with automated compliance checks and threat findings'
    },
    { 
      name: 'Azure Defender', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Microsoft cloud workload protection with integrated threat detection across Azure, AWS, and GCP environments'
    },
    { 
      name: 'Google Cloud Security', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idvfoh16-Y/w/400/h/400/theme/dark/icon.jpeg?t=1733863312054',
      description: 'GCP-native security with Security Command Center for vulnerability scanning and compliance monitoring'
    },
    { 
      name: 'Wiz', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/id20mQeHt_/w/400/h/400/theme/dark/icon.jpeg?t=1734540969259',
      description: 'Multi-cloud security platform for identifying critical risks across cloud infrastructure and workloads'
    },
    
    // IAM Tools (4 tools)
    { 
      name: 'Okta', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idGbSoHq5i/w/400/h/400/theme/dark/icon.jpeg?t=1734540861871',
      description: 'Cloud-native IAM with SSO, adaptive MFA, and 7,000+ app integrations for workforce and customer identity'
    },
    { 
      name: 'Azure AD / Entra ID', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Microsoft identity platform with SSO, conditional access, and seamless Microsoft 365 ecosystem integration'
    },
    { 
      name: 'SailPoint', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/id8OYw4O4u/w/400/h/400/theme/dark/icon.jpeg?t=1733863325738',
      description: 'Enterprise identity governance with automated provisioning, access certifications, and compliance controls'
    },
    { 
      name: 'OneLogin', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idcF7Yzt6Y/w/400/h/400/theme/dark/icon.jpeg?t=1734540866043',
      description: 'Unified access management platform with SSO, MFA, and directory integration for hybrid environments'
    },
    
    // PAM Tools (3 tools)
    { 
      name: 'CyberArk', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/id-1v8w9Xr/w/400/h/400/theme/dark/icon.jpeg?t=1734540854916',
      description: 'Digital Vault for privileged credential management with just-in-time access and session isolation'
    },
    { 
      name: 'BeyondTrust', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/id8_skqk1C/w/400/h/400/theme/dark/icon.jpeg?t=1734540849584',
      description: 'Endpoint privilege management with session monitoring, remote support, and compliance reporting'
    },
    { 
      name: 'Delinea', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/idHXc4FZuK/w/400/h/400/theme/dark/icon.jpeg?t=1734540856460',
      description: 'Cloud-ready PAM with passwordless authentication, secrets management, and Zero Trust security'
    },
    
    // Network Tools (4 tools)
    { 
      name: 'Palo Alto', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506',
      description: 'ML-powered next-gen firewalls with Wildfire malware analysis and zero-day threat prevention'
    },
    { 
      name: 'Fortinet', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idGI7Ws-l6/w/400/h/400/theme/dark/icon.jpeg?t=1733863316555',
      description: 'FortiGate firewalls with unified threat management, SD-WAN, and AI-based threat detection'
    },
    { 
      name: 'Cisco', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idw5bwKjAT/w/400/h/400/theme/dark/icon.jpeg?t=1734540852836',
      description: 'Secure Firewall with Talos threat intelligence, ISE integration, and cloud-native security'
    },
    { 
      name: 'Check Point', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idwfLGw8ad/w/400/h/400/theme/dark/icon.jpeg?t=1734540951765',
      description: 'Next-gen firewall with threat prevention, VPN, and unified security management across networks'
    },
    
    // ITSM Tools (3 tools)
    { 
      name: 'ServiceNow', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idH4mjRJHp/w/400/h/400/theme/dark/icon.jpeg?t=1733863328149',
      description: 'Enterprise service management platform with incident response, workflow automation, and CMDB integration'
    },
    { 
      name: 'Jira', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idDdFwjvUe/w/400/h/400/theme/dark/icon.jpeg?t=1734540859768',
      description: 'Agile project tracking with customizable workflows, issue management, and DevSecOps integration'
    },
    { 
      name: 'Freshservice', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idCy_n_F3g/w/400/h/400/theme/dark/icon.jpeg?t=1734540857722',
      description: 'Cloud-native ITSM with AI-powered automation, asset management, and self-service portal'
    },
  ];

  const categories = [
    { name: 'All', count: '30' },
    { name: 'VM', count: '4' },
    { name: 'SIEM', count: '4' },
    { name: 'EDR', count: '4' },
    { name: 'Cloud', count: '4' },
    { name: 'IAM', count: '4' },
    { name: 'PAM', count: '3' },
    { name: 'Network', count: '4' },
    { name: 'ITSM', count: '3' },
  ];

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(int => int.category === selectedCategory);

  return (
    <section id="integrations" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            110+ Integrations.
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              One Interface.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Connect your entire security stack. We don't replace your tools—we make them work together.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Badge
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400'
              }`}
            >
              {category.name}
              <span className={`ml-2 ${selectedCategory === category.name ? 'text-white' : 'text-cyan-400'}`}>
                {category.count}
              </span>
            </Badge>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 min-h-[500px]">
          {filteredIntegrations.map((integration, index) => (
            <div
              key={`${integration.name}-${index}`}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300"></div>
              
              <div className="relative flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300 overflow-hidden">
                    <img 
                      src={integration.logo} 
                      alt={integration.name} 
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.target.src = 'https://img.icons8.com/fluency/48/security-checked.png';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {integration.name}
                    </p>
                    <p className="text-xs text-cyan-400 font-medium">
                      {integration.category}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <p className="text-lg text-slate-300">
              Showing <span className="text-cyan-400 font-bold">{filteredIntegrations.length}</span> of <span className="text-cyan-400 font-bold">110+</span> available integrations.
            </p>
            <button className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 underline underline-offset-4">
              View All Integrations →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;