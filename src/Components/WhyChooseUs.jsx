import React from 'react';
import { 
  FaChartLine, 
  FaClock, 
  FaMobileAlt, 
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaCrown,
  FaCheckCircle,
  FaArrowRight,
  FaCoins,
  FaWallet,
  FaHeadset
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaChartLine,
      title: 'High ROI Plans',
      description: 'Multiple investment plans with up to 45% monthly returns. Choose your path to wealth.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaClock,
      title: 'Instant Payouts',
      description: 'Withdraw your earnings anytime, instantly. No delays, no hidden charges.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaCoins,
      title: 'Live Trading',
      description: 'Real-time price movements with expert analysis. Make smart investment decisions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaUsers,
      title: 'Referral Rewards',
      description: 'Earn unlimited commission by referring friends. Passive income for life.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption protects your funds 24/7. Your money is safe with us.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile App',
      description: 'Trade on the go with our PWA app. All features available anytime, anywhere.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="relative py-6 overflow-hidden bg-[#0a0a1a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1040] to-[#0d0d2b]"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-1.5 mb-2">
            <FaCrown className="text-[#D9B34A] text-xs" />
            <span className="text-xs font-semibold text-purple-300">Why Marin Club</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            <span className="text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Marin Club?
            </span>
          </h2>
          <p className="text-[#A8B4C8] text-lg">
            Everything you need for <span className="text-[#D9B34A] font-bold">financial freedom</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 hover:bg-purple-500/10 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-white text-2xl" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D9B34A] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#A8B4C8] text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${feature.color} mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6">
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-8 py-3.5 rounded-full font-bold text-sm text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5">
            <FaRocket className="text-white/90" />
            Start Your Journey Today
            <FaArrowRight className="text-white/70 text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;