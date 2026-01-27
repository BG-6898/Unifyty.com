import React from 'react';
import { ArrowRight, Shield, CheckCircle2, Award } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ onWatchDemoClick, onRequestDemoClick }) => {
  const trustBadges = [
    { icon: Shield, label: 'SOC2 Type II Certified' },
    { icon: Award, label: 'ISO 27001:2022' },
    { icon: CheckCircle2, label: '9.9/10 Security Rating' },
    { icon: Shield, label: 'Bank-Ready Architecture' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-6 py-2 backdrop-blur-sm animate-fade-in">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Unified Cybersecurity Operations Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            <span className="block text-white mb-2">One Platform.</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Complete Security.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stop juggling 40+ security tools. UNIFYTY brings your entire security stack into one intelligent platform—so your team can focus on what matters: <span className="text-cyan-400 font-semibold">protecting your business</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-2xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 group"
              onClick={onWatchDemoClick}
            >
              Watch Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-slate-700 hover:border-cyan-500 text-white text-lg px-8 py-6 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm transition-all duration-300 group"
              onClick={onRequestDemoClick}
            >
              Request Demo
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-slate-300 text-center font-medium">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-8 text-slate-400 text-sm animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            Trusted by enterprise security teams worldwide • 110+ integrations • SOC2 & ISO27001 certified
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;