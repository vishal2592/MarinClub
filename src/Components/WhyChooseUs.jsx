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
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaChartLine,
      title: 'High ROI Plans',
      description: 'Multiple investment plans with up to 45% monthly returns. Choose your path to wealth.',
      color: 'from-accent-purple to-accent-pink' // Updated to config
    },
    {
      icon: FaClock,
      title: 'Instant Payouts',
      description: 'Withdraw your earnings anytime, instantly. No delays, no hidden charges.',
      color: 'from-blue-500 to-cyan-500' // Standard Tailwind
    },
    {
      icon: FaCoins,
      title: 'Live Trading',
      description: 'Real-time price movements with expert analysis. Make smart investment decisions.',
      color: 'from-green-500 to-emerald-500' // Standard Tailwind
    },
    {
      icon: FaUsers,
      title: 'Referral Rewards',
      description: 'Earn unlimited commission by referring friends. Passive income for life.',
      color: 'from-orange-500 to-yellow-500' // Standard Tailwind
    },
    {
      icon: FaShieldAlt,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption protects your funds 24/7. Your money is safe with us.',
      color: 'from-red-500 to-accent-pink' // Updated 'pink-500' to 'accent-pink'
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile App',
      description: 'Trade on the go with our PWA app. All features available anytime, anywhere.',
      color: 'from-indigo-500 to-accent-purple' // Updated 'purple-500' to 'accent-purple'
    }
  ];

  return (
    <section className="relative py-6 overflow-hidden bg-dark-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-[#1a1040] to-[#0d0d2b]"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-pink/10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-accent-purple/10 backdrop-blur-sm border border-border-glass rounded-full px-4 py-1.5 mb-2">
            <FaCrown className="text-accent-gold text-xs" />
            <span className="text-xs font-semibold text-accent-purple">Why Marin Club</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            <span className="text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-purple bg-clip-text text-transparent">
              Marin Club?
            </span>
          </h2>
          <p className="text-dark-muted text-lg">
            Everything you need for <span className="text-accent-gold font-bold">financial freedom</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-accent-purple/5 backdrop-blur-sm border border-border-glass rounded-2xl p-6 hover:bg-accent-purple/10 hover:border-accent-purple/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-white text-2xl" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-dark-muted text-sm leading-relaxed">
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
          <Link to='/home'>
            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple px-8 py-3.5 rounded-full font-bold text-sm text-white shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 transition-all duration-300 hover:-translate-y-0.5">
            <FaRocket className="text-white/90" />
            Start Your Journey Today
            <FaArrowRight className="text-white/70 text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;