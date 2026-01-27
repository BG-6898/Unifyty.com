import React from 'react';
import { Shield, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features', desc: 'Unified visibility & intelligent correlation' },
        { name: 'Modules', href: '#modules', desc: 'VM, SOC, EDR, GRC, IAM, PAM' },
        { name: 'Integrations', href: '#integrations', desc: '110+ security tool integrations' },
        { name: 'Security', href: '#', desc: 'SOC2 Type II & ISO 27001 certified' },
        { name: 'Pricing', href: '#pricing', desc: 'Simple, transparent pricing' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Financial Services', href: '#', desc: 'Bank-grade security operations' },
        { name: 'Healthcare', href: '#', desc: 'HIPAA-ready compliance & protection' },
        { name: 'Retail & E-commerce', href: '#', desc: 'PCI-DSS compliance at scale' },
        { name: 'For SOC Teams', href: '#', desc: '95% reduction in alert fatigue' },
        { name: 'For GRC Teams', href: '#', desc: 'Automated compliance monitoring' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#', desc: 'Complete platform guides' },
        { name: 'API Reference', href: '#', desc: '162+ REST API endpoints' },
        { name: 'Blog', href: '#', desc: 'Latest security insights' },
        { name: 'Webinars', href: '#', desc: 'Live platform demos' },
        { name: 'Case Studies', href: '#', desc: 'Customer success stories' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#', desc: 'Our mission & values' },
        { name: 'Careers', href: '#', desc: 'Join our team' },
        { name: 'Press', href: '#', desc: 'Latest news & media' },
        { name: 'Contact', href: '#', desc: 'Get in touch' },
        { name: 'Partners', href: '#', desc: 'Partnership opportunities' },
      ],
    },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-3 mb-6 group">
              <img
                src="https://customer-assets.emergentagent.com/job_unifyty-security-hq/artifacts/l8zeswds_Screenshot_2026-01-06_at_7.35.59_PM_1767774363546.png"
                alt="UNIFYTY Logo"
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                UNIFYTY
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              The unified cybersecurity operations platform. Consolidating 110+ security tools into one intelligent interface for complete visibility and accelerated response.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Security Boulevard, Suite 100<br/>
                  San Francisco, CA 94105
                </span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:sales@unifyty.io" className="text-sm hover:text-cyan-400 transition-colors">
                  sales@unifyty.io
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:sales@unifyty.io"
                className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group block text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      <div className="font-medium">{link.name}</div>
                      {link.desc && (
                        <div className="text-xs text-slate-500 group-hover:text-slate-400 mt-0.5">
                          {link.desc}
                        </div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Bar */}
        <div className="border-t border-slate-800 pt-8 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-400 text-sm">SOC2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-slate-400 text-sm">ISO 27001:2022 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-slate-400 text-sm">9.9/10 Security Rating</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Security Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                GDPR Compliance
              </a>
            </div>
            <div className="text-sm text-slate-400">
              © 2026 UNIFYTY. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;