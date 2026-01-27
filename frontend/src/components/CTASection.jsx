import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              Security Operations?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Join enterprise security teams who trust UNIFYTY to detect threats 10x faster and reduce alert fatigue by 95%.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-10 py-6 shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105 group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-slate-600 hover:border-cyan-500 text-white text-lg px-10 py-6 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            No credit card required • 14-day free trial • Full access to Professional features
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;