import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is UNIFYTY?',
      answer:
        'UNIFYTY is an enterprise-grade cybersecurity operations platform that unifies your security tools into a single interface for visibility, correlation, and response. We connect VM, SIEM, EDR, IAM, PAM, GRC, and more into one command center.',
    },
    {
      question: 'How is UNIFYTY different from a SIEM?',
      answer:
        "UNIFYTY complements your SIEM by connecting it with all your other security tools. We provide unified workflows, asset intelligence, and cross-domain correlation that goes beyond what a SIEM can do alone. Think of it as the operating system for your entire security stack.",
    },
    {
      question: 'Does UNIFYTY replace my existing security tools?',
      answer:
        "No, UNIFYTY enhances your existing tools by connecting them together. We integrate with 110+ security platforms including Splunk, CrowdStrike, Qualys, Okta, and more. You keep using the tools you've invested in—we just make them work better together.",
    },
    {
      question: 'How long does deployment take?',
      answer:
        'Most customers are operational within 1-2 weeks. Our cloud-native architecture and pre-built integrations mean you can start connecting tools on day one. Full deployment with all modules typically takes less than 30 days.',
    },
    {
      question: 'Is UNIFYTY secure?',
      answer:
        'Yes. UNIFYTY is SOC2 Type II certified, ISO27001 compliant, and maintains a 9.9/10 security rating. We use bank-grade encryption (TLS 1.3 in transit, AES-256 at rest), multi-factor authentication, and comprehensive audit logging. Your security is our business.',
    },
    {
      question: 'Can UNIFYTY work with my compliance requirements?',
      answer:
        'Absolutely. UNIFYTY includes built-in support for SOC2, ISO27001, PCI-DSS, HIPAA, GDPR, and NIST CSF. Our automated evidence collection and control mapping significantly reduce audit preparation time.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We offer multiple support tiers: comprehensive documentation and community support for all users, priority email support for Professional customers, and 24/7 support with dedicated Customer Success Managers for Enterprise customers.',
    },
    {
      question: 'Is there an on-premises option?',
      answer:
        'Yes, UNIFYTY is available for on-premises deployment for Enterprise customers with specific compliance or data residency requirements. Contact our sales team to discuss your needs.',
    },
  ];

  return (
    <section className="relative py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about UNIFYTY
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl px-6 hover:border-slate-600 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-white hover:text-cyan-400 py-6 text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <button className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 underline underline-offset-4">
            Contact our team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;