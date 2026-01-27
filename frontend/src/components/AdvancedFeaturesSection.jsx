import React from 'react';
import { Bot, Database, Zap, Network } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Security Assistant',
      tagline: 'Ask questions in plain English. Get actionable insights instantly.',
      description:
        'Meet your AI security analyst. UNIFYTY\'s natural language assistant understands security context—ask it anything from "Show me critical vulnerabilities on production servers" to "What\'s the remediation status for Log4j?" Get instant, accurate answers without writing queries.',
      capabilities: [
        'Natural language queries',
        'Context-aware security responses',
        'Automated recommendations',
        'Threat hunting assistance',
        'Report generation',
        'Session history & memory',
      ],
      gradient: 'from-purple-500 to-pink-600',
      glowColor: 'purple-500/20',
    },
    {
      icon: Database,
      title: 'UAMDB - Unified Asset Management',
      tagline: 'Know every asset, every owner, every risk—across your entire enterprise',
      description:
        'UNIFYTY\'s Unified Asset Management Database (UAMDB) is the single source of truth for your digital assets. With 28+ database tables designed for enterprise asset intelligence, automatic discovery, golden-key deduplication, and complete lifecycle management ensure you always know what you have, who owns it, and how it\'s protected.',
      capabilities: [
        '28+ database tables for asset intelligence',
        'Automatic discovery from 16+ tools',
        'Golden-key deduplication',
        'Full lifecycle management (DISCOVERED → ACTIVE → RETIRED)',
        'Complete ownership tracking with history',
        '40+ API endpoints for asset management',
      ],
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan-500/20',
    },
    {
      icon: Zap,
      title: 'Real-Time WebSocket Infrastructure',
      tagline: 'Live dashboards that update the moment something happens',
      description:
        'No more refreshing. UNIFYTY\'s enterprise-grade WebSocket infrastructure powered by Socket.io pushes alerts, incidents, and metrics to your dashboard in real-time. Support for 10,000+ concurrent connections with multi-tenant isolation ensures your entire team stays synchronized.',
      capabilities: [
        'Sub-second alert delivery',
        'Live dashboard updates across all modules',
        'Real-time collaboration',
        'Multi-tenant isolation',
        '10,000+ concurrent connections',
        'Auto-reconnection with exponential backoff',
      ],
      gradient: 'from-amber-500 to-orange-600',
      glowColor: 'amber-500/20',
    },
    {
      icon: Network,
      title: 'Security Intelligence Hub',
      tagline: 'Real-time threat intelligence from 30+ sources',
      description:
        'Stay ahead of emerging threats with UNIFYTY\'s Security Intelligence Hub. We aggregate and correlate threat intelligence from government advisories, vendor bulletins, dark web monitoring, and 30+ premium feeds—all filtered and prioritized for your specific technology stack.',
      capabilities: [
        'CISA KEV integration',
        'Zero-day tracking with dedicated tracker',
        'CVE/CVSS enrichment with EPSS scoring',
        'Industry feeds from NVD, MITRE, CVE Details',
        'RSS feed aggregation from 30+ sources',
        'Customizable alert thresholds',
      ],
      gradient: 'from-blue-500 to-indigo-600',
      glowColor: 'blue-500/20',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Advanced Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade Capabilities
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              Built for Scale
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Powered by cutting-edge technology and designed for the modern security operations center
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative bg-slate-800/50 border-slate-700/50 hover:border-slate-600 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="relative p-8 space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg transition-shadow duration-300`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className={`text-base font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>

                  {/* Capabilities */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {feature.capabilities.map((capability, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-400">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;
