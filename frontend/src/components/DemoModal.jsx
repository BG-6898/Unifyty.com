import React from 'react';
import { X, Play } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';

const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <Card className="relative w-full max-w-4xl mx-4 bg-slate-900/95 border-slate-700 shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <CardHeader className="p-8 pb-6">
          <h2 className="text-3xl font-bold text-white mb-2">Watch UNIFYTY Demo</h2>
          <p className="text-slate-400">
            See how UNIFYTY transforms security operations in minutes.
          </p>
        </CardHeader>

        <CardContent className="p-8 pt-0">
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
            {/* Placeholder for video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </div>
              <p className="text-slate-400 text-lg">Demo video coming soon</p>
              <p className="text-slate-500 text-sm mt-2">Contact us for a personalized live demo</p>
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Key Features Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-cyan-400 font-bold text-lg mb-1">95%</div>
              <div className="text-slate-300 text-sm">Less Alert Noise</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-blue-400 font-bold text-lg mb-1">10x</div>
              <div className="text-slate-300 text-sm">Faster Detection</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-purple-400 font-bold text-lg mb-1">110+</div>
              <div className="text-slate-300 text-sm">Integrations</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoModal;