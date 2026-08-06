import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { 
  FaPlay, 
  FaUser, 
  FaShieldHalved, 
  FaWallet, 
  FaChartPie, 
  FaArrowTrendUp, 
  FaUsers, 
  FaChevronRight, 
  FaHeadset, 
  FaCircleQuestion
} from 'react-icons/fa6';

const PlatformGuide = () => {
  const steps = [
    { id: 1, title: 'Create your account', desc: 'Register with your basic details and set up a secure password right away.', icon: FaUser, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10' },
    { id: 2, title: 'Complete KYC verification', desc: 'Upload your ID proof and verify your identity - required before you can deposit, invest, or withdraw.', icon: FaShieldHalved, color: 'text-accent-gold', bg: 'bg-accent-gold/10' },
    { id: 3, title: 'Add funds to your wallet', desc: 'Deposit using any supported payment method, funds are credited to wallet instantly.', icon: FaWallet, color: 'text-accent-pink', bg: 'bg-accent-pink/10' },
    { id: 4, title: 'Choose an investment plan', desc: 'Select from our wide range of investment plans - start your journey with just ₹500.', icon: FaChartPie, color: 'text-accent-purple', bg: 'bg-accent-purple/10' },
    { id: 5, title: 'Track your earnings', desc: 'Monitor your investment returns and track your growth in real-time.', icon: FaArrowTrendUp, color: 'text-accent-lime', bg: 'bg-accent-lime/10' },
  ];

  const quickLinks = [
    { label: 'KYC', path: '/kyc', icon: FaShieldHalved },
    { label: 'Wallet', path: '/wallet', icon: FaWallet },
    { label: 'Investments', path: '/investments', icon: FaChartPie },
    { label: 'Referral', path: '/promos', icon: FaUsers },
  ];

  const faqData = [
    { q: 'Is KYC mandatory before investing?', a: 'Yes, KYC verification is mandatory for all users to comply with financial regulations and ensure platform security.' },
    { q: 'How long does a deposit take to reflect?', a: 'Deposits are usually processed instantly. However, depending on your payment provider, it may take up to 15-30 minutes to reflect in your wallet.' },
    { q: 'What happens when an investment plan ends?', a: 'Once your investment plan reaches maturity, the principal amount along with the earned profit is automatically credited to your wallet balance.' },
    { q: 'Is there a minimum or maximum withdrawal amount?', a: 'Yes, the minimum withdrawal amount is ₹500. There is no strict maximum limit, but withdrawals over ₹50,000 may require additional security verification.' },
    { q: 'How does the referral program work?', a: 'You earn a 50% commission on the deposits made by the users you refer. Your referrals are tracked via your unique referral link.' },
    { q: 'What if my withdrawal is delayed or rejected?', a: 'If your withdrawal is delayed, please contact our 24/7 support team. Rejections typically occur due to KYC mismatches or incorrect bank details.' },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-6 text-white pt-4 pb-6 px-4">
        
        {/* --- Top Hero Banner --- */}
        <div className="relative bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl p-8 flex flex-col items-center justify-center overflow-hidden shadow-lg shadow-accent-purple/20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3 text-white shadow-lg">
            <FaPlay className="ml-1" size={20} />
          </div>
          <h2 className="text-xl font-bold relative z-10">New Here? Start with the basics</h2>
          <p className="text-white/80 text-xs mt-1 max-w-[220px] text-center relative z-10">
            A quick guide to get you started on your investment journey.
          </p>
        </div>

        {/* --- Getting Started Steps (Removed Vertical Line) --- */}
        <div className="flex flex-col gap-2 mt-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                className="relative flex gap-4 pl-4 py-2"
              >
                {/* Step Icon */}
                <div className={`relative z-10 w-10 h-10 rounded-full ${step.bg} border border-border-glass flex items-center justify-center ${step.color} shrink-0`}>
                  <Icon size={16} />
                </div>

                {/* Step Content */}
                <div className="flex flex-col gap-1 pt-0.5">
                  <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                  <p className="text-[11px] text-dark-muted leading-relaxed pr-4">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Quick Links --- */}
        <div className="mt-2">
          <h3 className="text-[10px] text-dark-muted font-bold uppercase tracking-wider mb-4 pl-1">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link 
                  key={link.label} 
                  to={link.path} 
                  className="bg-dark-600 border border-border-glass rounded-2xl py-4 px-4 flex items-center justify-between gap-2 hover:bg-dark-700 hover:border-accent-purple/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="text-dark-muted group-hover:text-accent-purple transition-colors duration-300 text-sm" />
                    <span className="text-sm font-medium text-white">{link.label}</span>
                  </div>
                  <FaChevronRight className="text-dark-muted/50 group-hover:text-white text-xs transition-colors duration-300" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* --- FAQ Section (Accordion + Open/Close) --- */}
        <div className="mt-2">
          <h3 className="text-[10px] text-dark-muted font-bold uppercase tracking-wider mb-4 pl-1">
            Frequently Asked Questions
          </h3>
          <div className="bg-dark-600 border border-border-glass rounded-2xl overflow-hidden divide-y divide-border-glass">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="cursor-pointer hover:bg-dark-700 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="flex items-center justify-between p-4 px-5">
                  <span className="text-[13px] text-white font-medium flex-1 pr-2">{faq.q}</span>
                  <FaChevronRight className={`text-dark-muted/50 text-xs transition-all duration-300 ${openIndex === index ? 'rotate-90' : ''}`} />
                </div>
                {/* Expanded Answer Area */}
                <div className={`px-5 pb-4 text-[12px] text-dark-muted leading-relaxed transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Bottom Support Banner (Redesigned: Text on Top, Buttons on Bottom) --- */}
        <div className="relative bg-dark-700 border border-border-glass rounded-2xl p-6 flex flex-col items-center justify-center gap-6 overflow-hidden mt-2">
          {/* Decorative Background Blobs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-pink/10 rounded-full blur-2xl pointer-events-none"></div>

          {/* Top: Text Section */}
          <div className="flex flex-col gap-1 relative z-10 items-center text-center">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 justify-center">
              <FaCircleQuestion className="text-accent-purple text-sm shrink-0" /> Still need help?
            </h4>
            <p className="text-[11px] text-dark-muted leading-relaxed max-w-xs">
              Our support team is available 24/7 to assist you.
            </p>
          </div>

          {/* Bottom: Buttons Section (Side-by-Side) */}
          <div className="flex flex-row items-center justify-center gap-3 relative z-10 w-full max-w-xs sm:max-w-full">
            <button className="flex-1 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple shadow-lg shadow-accent-purple/20 transition-all duration-300 hover:-translate-y-0.5">
              Contact Support
            </button>
            <button className="flex-1 px-5 py-2.5 rounded-xl text-xs font-bold text-dark-muted bg-transparent border border-border-glass hover:text-white hover:border-accent-cyan/40 transition-all duration-300">
              Help Center
            </button>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default PlatformGuide;