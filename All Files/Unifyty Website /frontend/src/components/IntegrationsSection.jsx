import React from 'react';
import { Badge } from './ui/badge';

const IntegrationsSection = () => {
  const integrations = [
    { name: 'Tenable', category: 'VM', logo: 'https://img.icons8.com/color/48/cloud--v1.png' },
    { name: 'Qualys', category: 'VM', logo: 'https://img.icons8.com/color/48/server.png' },
    { name: 'Rapid7', category: 'VM', logo: 'https://img.icons8.com/color/48/security-checked.png' },
    { name: 'Splunk', category: 'SIEM', logo: 'https://img.icons8.com/color/48/search--v1.png' },
    { name: 'Microsoft Sentinel', category: 'SIEM', logo: 'https://img.icons8.com/color/48/microsoft.png' },
    { name: 'CrowdStrike', category: 'EDR', logo: 'https://img.icons8.com/color/48/bird.png' },
    { name: 'SentinelOne', category: 'EDR', logo: 'https://img.icons8.com/color/48/security-shield-green.png' },
    { name: 'Carbon Black', category: 'EDR', logo: 'https://img.icons8.com/color/48/lock--v1.png' },
    { name: 'AWS Security Hub', category: 'Cloud', logo: 'https://img.icons8.com/color/48/amazon-web-services.png' },
    { name: 'Azure Defender', category: 'Cloud', logo: 'https://img.icons8.com/color/48/azure-1.png' },
    { name: 'Okta', category: 'IAM', logo: 'https://img.icons8.com/color/48/key.png' },
    { name: 'CyberArk', category: 'PAM', logo: 'https://img.icons8.com/color/48/password.png' },
    { name: 'Palo Alto', category: 'Network', logo: 'https://img.icons8.com/color/48/firewall.png' },
    { name: 'Fortinet', category: 'Network', logo: 'https://img.icons8.com/color/48/fortress.png' },
    { name: 'ServiceNow', category: 'ITSM', logo: 'https://img.icons8.com/color/48/workflow.png' },
    { name: 'Jira', category: 'ITSM', logo: 'https://img.icons8.com/color/48/jira.png' },
  ];

  const categories = [
    { name: 'All', count: '110+' },
    { name: 'VM', count: '12' },
    { name: 'SIEM', count: '8' },
    { name: 'EDR', count: '10' },
    { name: 'Cloud', count: '15' },
    { name: 'IAM', count: '9' },
    { name: 'Network', count: '14' },
    { name: 'ITSM', count: '6' },
  ];

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
              className="px-6 py-3 text-sm font-medium bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 cursor-pointer transition-all duration-300"
            >
              {category.name}
              <span className="ml-2 text-cyan-400">{category.count}</span>
            </Badge>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-110 cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300"></div>
              
              <div className="relative flex flex-col items-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-slate-700/50 group-hover:bg-slate-700 flex items-center justify-center transition-colors duration-300">
                  <img src={integration.logo} alt={integration.name} className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {integration.name}
                  </p>
                  <p className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {integration.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <p className="text-lg text-slate-300">
              Don't see your tool? We support <span className="text-cyan-400 font-bold">110+ integrations</span> and counting.
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