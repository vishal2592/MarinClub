import React, { useState } from 'react';
import { 
  FaChartLine, FaBolt, FaClock, FaCoins, FaGem, FaStar, 
  FaIndianRupeeSign, FaArrowUp, FaLightbulb, FaArrowRight, 
  FaCrown, FaRocket
} from 'react-icons/fa6'; // Note: Using fa6 for cleaner icons, or use standard fa

const InvestmentPlans = () => {
  const [activeTab, setActiveTab] = useState('quick');

  // Your "Why Choose Us" button gradient
  const mainGradient = "from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500";

  // Icons with YOUR specific vibrant gradients
  const iconGradients = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-yellow-500',
    'from-red-500 to-pink-500',
    'from-indigo-500 to-purple-500'
  ];

  const plans = [
    { id: 1, name: 'Percent Plan', icon: <FaChartLine />, time: '1 Hour', returnAmt: '0', profitAmt: '0', minMax: '₹0 - ₹5000 Return' },
    { id: 2, name: 'Elite Plan', icon: <FaGem />, time: '36 Hours', returnAmt: '6,500', profitAmt: '6,500', minMax: '₹6,500 Return' },
    { id: 3, name: 'Diamond Plan', icon: <FaGem />, time: '48 Hours', returnAmt: '14,400', profitAmt: '14,400', minMax: '₹14,400 Return' },
    { id: 4, name: 'Platinum Plan', icon: <FaGem />, time: '72 Hours', returnAmt: '7000', profitAmt: '7000', minMax: '₹7000 Return' },
    { id: 5, name: 'Gold Plan', icon: <FaCoins />, time: '6 Hours', returnAmt: '4,200', profitAmt: '4,200', minMax: '₹4,200 Return' },
    { id: 6, name: 'Silver Plan', icon: <FaCoins />, time: '72 Hours', returnAmt: '1,000', profitAmt: '1,000', minMax: '₹1,000 Return' },
    { id: 7, name: 'Starter Plan', icon: <FaStar />, time: '1 Hour', returnAmt: '750', profitAmt: '750', minMax: '₹750 Return' }
  ];

  return (
    <section className="relative py-6 overflow-hidden bg-[#0a0a1a]">
      {/* BACKGROUND EFFECTS - SAME AS YOUR CHOOSE US SECTION */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1040] to-[#0d0d2b]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-1.5 mb-4">
            <FaCrown className="text-[#D9B34A] text-xs" />
            <span className="text-xs font-semibold text-purple-300">Investment Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">Choose Your </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Investment Plan
            </span>
          </h2>
          <p className="text-[#A8B4C8] text-lg">
            Multiple options for <span className="text-[#D9B34A] font-bold">every investment style</span>
          </p>
        </div>

        {/* CLICKABLE TOGGLE BUTTONS */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-400/20">
            <button
              onClick={() => setActiveTab('quick')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'quick' 
                  ? `bg-gradient-to-r ${mainGradient} text-white shadow-lg shadow-purple-500/20` 
                  : 'text-[#A8B4C8] hover:text-white hover:bg-purple-500/20'
              }`}
            >
              <FaBolt /> Quick Profit Plans
            </button>
            <button
              onClick={() => setActiveTab('golden')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'golden' 
                  ? `bg-gradient-to-r ${mainGradient} text-white shadow-lg shadow-purple-500/20` 
                  : 'text-[#A8B4C8] hover:text-white hover:bg-purple-500/20'
              }`}
            >
              <FaClock /> Golden Hour Plans
            </button>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-6">
          {plans.map((plan, index) => (
            <div 
              key={plan.id} 
              className="group bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-5 hover:bg-purple-500/10 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* CARD HEADER */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2.5 font-semibold text-base text-white">
                  {/* ICON WITH YOUR GRADIENT */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconGradients[index % iconGradients.length]} flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-sm">{plan.icon}</span>
                  </div>
                  {plan.name}
                </div>
                <div className="bg-[#0a0a1a]/50 text-[10px] text-[#A8B4C8] px-2.5 py-1 rounded-full border border-purple-400/20 flex items-center gap-1.5">
                  <FaClock size={10} /> {plan.time}
                </div>
              </div>

              {/* INVESTMENT ROW */}
              <div className="bg-[#0a0a1a]/50 p-3 rounded-xl mb-3 border border-purple-400/10">
                <div className="text-[11px] text-[#A8B4C8] mb-0.5">Investment</div>
                <div className="text-xl font-bold flex items-center gap-1 text-white">
                  <FaIndianRupeeSign size={14} /> 0
                </div>
              </div>

              {/* MIN/MAX ROW */}
              <div className="bg-[#0a0a1a]/30 px-3 py-1.5 rounded-lg flex justify-between text-xs text-[#A8B4C8] mb-4 border border-purple-400/10">
                <span className="flex items-center gap-1"><FaArrowUp size={10} className="text-[#D9B34A]" /> {plan.minMax}</span>
              </div>

              {/* STATS */}
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-[#A8B4C8]">Return:</span>
                <span className="font-semibold flex items-center gap-0.5 text-white"><FaIndianRupeeSign size={12} /> {plan.returnAmt}</span>
              </div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-[#A8B4C8]">Profit:</span>
                <span className="font-semibold flex items-center gap-0.5 text-white"><FaIndianRupeeSign size={12} /> {plan.profitAmt}</span>
              </div>

              {/* BUY BUTTON - Matching your CTA */}
              <button className={`mt-5 w-full py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r ${mainGradient} text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300`}>
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* BOTTOM INFO SECTION */}
        <div className="w-full bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-base font-bold mb-2 flex items-center gap-2.5 text-white">
              <FaLightbulb className="text-[#D9B34A]" size={18} /> How Our Plans Work
            </h3>
            <p className="text-sm text-[#A8B4C8] leading-relaxed max-w-2xl">
              Choose a plan based on your investment amount and time horizon. <span className="text-white font-medium">Quick Profit</span> plans complete in 10 minutes to 6 hours. <span className="text-[#D9B34A] font-medium">Golden Hour</span> plans always complete in exactly 1 hour. Get your returns instantly to your wallet. Reinvest anytime for compound growth.
            </p>
          </div>
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-6 py-3 rounded-full font-bold text-sm text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5">
            <FaRocket className="text-white/90" />
            View All Plans
            <FaArrowRight className="text-white/70 text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default InvestmentPlans;