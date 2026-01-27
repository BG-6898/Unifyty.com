import React, { useState, useEffect, useRef } from 'react';
import { TrendingDown, Zap, Shield, Target } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stats = [
    {
      icon: TrendingDown,
      value: '95%',
      label: 'Reduction in Alert Fatigue',
      color: 'from-cyan-400 to-blue-500',
      delay: '0s',
    },
    {
      icon: Zap,
      value: '10x',
      label: 'Faster Threat Detection',
      color: 'from-blue-400 to-purple-500',
      delay: '0.2s',
    },
    {
      icon: Target,
      value: '80%',
      label: 'Reduction in MTTR',
      color: 'from-purple-400 to-pink-500',
      delay: '0.4s',
    },
    {
      icon: Shield,
      value: '110+',
      label: 'Tool Integrations',
      color: 'from-cyan-400 to-teal-500',
      delay: '0.6s',
    },
  ];

  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
      if (isVisible && !started) {
        setStarted(true);
        const isPercentage = end.includes('%');
        const isMultiplier = end.includes('x');
        const isPlus = end.includes('+');
        const numericEnd = parseInt(end.replace(/[^0-9]/g, ''));
        
        const increment = numericEnd / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= numericEnd) {
            setCount(numericEnd);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);

        return () => clearInterval(timer);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, started]);

    const formatValue = () => {
      if (end.includes('%')) return `${count}%`;
      if (end.includes('x')) return `${count}x`;
      if (end.includes('+')) return `${count}+`;
      return count;
    };

    return <span>{formatValue()}</span>;
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Numbers Speak for
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Themselves</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See why enterprise security teams trust UNIFYTY to transform their operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: stat.delay }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Card */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-10`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} strokeWidth={2} />
                    </div>
                    <div>
                      <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {isVisible ? <AnimatedCounter end={stat.value} /> : stat.value}
                      </div>
                      <p className="text-slate-300 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;