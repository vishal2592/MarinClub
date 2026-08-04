import React from 'react';
import { 
  FaChartLine, 
  FaClock, 
  FaRupeeSign, 
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
  FaCrown
} from 'react-icons/fa';

const Comparison = () => {
  const features = [
    {
      category: 'Monthly ROI',
      tradeClub: '45%',
      quickHour: '25-30%',
      advantage: '+15-20%',
      isPositive: true
    },
    {
      category: 'Withdrawals',
      tradeClub: 'Instant',
      quickHour: '24-48 hours',
      advantage: 'Days faster',
      isPositive: true
    },
    {
      category: 'Minimum Investment',
      tradeClub: '₹500',
      quickHour: '₹1000',
      advantage: '50% lower entry',
      isPositive: true
    }
  ];

  const stats = [
    { value: '45%', label: 'Trade Club ROI', icon: FaChartLine },
    { value: 'Instant', label: 'Withdrawals', icon: FaClock },
    { value: '₹500', label: 'Min Investment', icon: FaRupeeSign },
    { value: '10K+', label: 'Active Traders', icon: FaUsers }
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
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-1.5 mb-4">
            <FaCrown className="text-[#D9B34A] text-xs" />
            <span className="text-xs font-semibold text-purple-300">Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Marin Club vs </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Quick Hour
            </span>
            <span className="text-white"> & Competitors</span>
          </h2>
          <p className="text-[#A8B4C8] text-lg">
            Why <span className="text-[#D9B34A] font-bold">10,000+</span> traders choose Trade Club over other platforms
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-4 sm:p-6 bg-purple-500/10 border-b border-purple-400/20">
              <div className="text-sm font-semibold text-[#A8B4C8]">Feature</div>
              <div className="text-sm font-semibold text-[#D9B34A] text-center">Marin Club</div>
              <div className="text-sm font-semibold text-[#A8B4C8] text-center">Quick Hour</div>
            </div>

            {/* Table Rows */}
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 sm:p-6 border-b border-purple-400/10 hover:bg-purple-500/5 transition-colors duration-300">
                <div className="text-sm font-medium text-white flex items-center">
                  {feature.category}
                </div>
                <div className="text-sm font-bold text-[#D9B34A] text-center flex items-center justify-center gap-1">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  {feature.tradeClub}
                </div>
                <div className="text-sm text-[#A8B4C8] text-center flex items-center justify-center gap-1">
                  <FaTimesCircle className="text-red-400 text-xs" />
                  {feature.quickHour}
                </div>
              </div>
            ))}

            {/* Advantage Row */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#D9B34A]/10 to-transparent">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-sm font-semibold text-white">Advantage</span>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {features.map((feature, index) => (
                    <span key={index} className="text-sm font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                      {feature.advantage}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Section */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Want Detailed Comparison?
            </h3>
            <p className="text-[#A8B4C8] mb-6">
              See how Trade Club beats Quick Hour and other competitors in every metric.
            </p>
            <button className="group inline-flex items-center gap-2 bg-[#D9B34A] hover:bg-[#B8871A] px-6 py-3 rounded-full font-bold text-sm text-[#07162A] shadow-lg shadow-[#D9B34A]/20 hover:shadow-[#D9B34A]/40 transition-all duration-300">
              View Full Comparison
              <FaArrowRight className="text-[#07162A]/60 text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-2 text-center hover:bg-purple-500/10 transition-all duration-300 group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#D9B34A] text-xl" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#D9B34A] mb-1">{stat.value}</div>
                <div className="text-xs text-[#A8B4C8]">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comparison;