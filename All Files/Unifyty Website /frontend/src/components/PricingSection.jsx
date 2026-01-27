import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 10 users',
        '25 tool integrations',
        'Core security modules',
        'Community support',
        '30-day data retention',
        'Basic dashboards',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
      gradient: 'from-slate-700 to-slate-800',
    },
    {
      name: 'Professional',
      price: 'Custom',
      description: 'For growing security teams',
      features: [
        'Up to 50 users',
        'Unlimited integrations',
        'All security modules',
        'UAMDB asset intelligence',
        'Priority support',
        '90-day data retention',
        'API access',
        'Custom dashboards',
      ],
      cta: 'Contact Sales',
      highlighted: true,
      gradient: 'from-cyan-500 to-blue-600',
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For enterprise-scale operations',
      features: [
        'Unlimited users',
        'Unlimited integrations',
        'All modules + AI Assistant',
        'Multi-tenant support',
        'Dedicated customer success',
        'Custom data retention',
        'SSO/SAML',
        'SLA guarantees',
        'On-premises deployment',
      ],
      cta: 'Contact Sales',
      highlighted: false,
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              Scale as You Grow
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            No hidden fees. No surprise charges. Unlimited integrations and data volume included.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105 md:scale-110'
                  : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600'
              } backdrop-blur-sm hover:transform hover:scale-105`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <CardHeader className="p-8 pb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Free' && <span className="text-slate-400 ml-2">/month</span>}
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-cyan-400' : 'text-slate-500'
                      }`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  } transition-all duration-300 group`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center text-slate-400 text-sm">
          <p className="mb-2">All plans include unlimited integrations and data volume</p>
          <p>
            Annual prepayment, nonprofit, and startup discounts available •{' '}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
              Contact us for details
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;