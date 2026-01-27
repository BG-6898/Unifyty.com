import React from 'react';
import { Eye, Brain, Zap, FileCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Eye,
      title: 'Unified Visibility',
      headline: 'One Dashboard for Your Entire Security Stack',
      description:
        'Consolidate 110+ security tools into a single, intuitive interface. No more context switching between Splunk, CrowdStrike, Qualys, and dozens of other platforms.',
      keyPoints: [
        'Connect VM, SIEM, EDR, IAM, PAM, GRC, and more',
        'Real-time data synchronization',
        'Unified search across all security data',
        'Custom dashboards for every role',
      ],
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan-500/20',
    },
    {
      icon: Brain,
      title: 'Intelligent Correlation',
      headline: 'From Noise to Signal in Seconds',
      description:
        "Stop drowning in alerts. UNIFYTY's AI-powered correlation engine analyzes millions of data points across your security tools to surface what truly matters.",
      keyPoints: [
        'Smart alert deduplication',
        'MITRE ATT&CK mapping',
        'Automated threat scoring',
        'Contextual enrichment',
      ],
      gradient: 'from-blue-500 to-purple-600',
      glowColor: 'blue-500/20',
    },
    {
      icon: Zap,
      title: 'Accelerated Response',
      headline: 'Mean Time to Respond: Minutes, Not Hours',
      description:
        'When seconds count, UNIFYTY delivers. Pre-built playbooks, automated workflows, and one-click containment actions empower your team to respond before incidents become breaches.',
      keyPoints: [
        '200+ pre-built response playbooks',
        'Automated containment actions',
        'Cross-tool orchestration',
        'Real-time collaboration',
      ],
      gradient: 'from-purple-500 to-pink-600',
      glowColor: 'purple-500/20',
    },
    {
      icon: FileCheck,
      title: 'Compliance Made Simple',
      headline: 'Audit-Ready, Every Day',
      description:
        'Built-in compliance frameworks for SOC2, ISO27001, PCI-DSS, HIPAA, and GDPR. Automatically map your security controls and generate reports—turning weeks of audit prep into hours.',
      keyPoints: [
        'Continuous compliance monitoring',
        'Automated evidence collection',
        'Gap analysis & recommendations',
        'One-click audit reports',
      ],
      gradient: 'from-teal-500 to-cyan-600',
      glowColor: 'teal-500/20',
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              Protect Your Business
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Four powerful capabilities that transform how your security team operates
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
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:shadow-${feature.glowColor} transition-shadow duration-300`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.headline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>

                  {/* Key Points */}
                  <ul className="space-y-3">
                    {feature.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;