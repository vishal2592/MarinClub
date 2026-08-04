import React from 'react';
import { 
  FaRocket, 
  FaShieldAlt, 
  FaArrowRight, 
  FaUsers,
  FaCoins,
  FaWallet,
  FaCrown,
  FaLock,
  FaRupeeSign,
  FaHeadset,
  FaChartLine
} from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1040] to-[#0d0d2b]"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 mb-6">
            <span className="flex items-center gap-2 text-xs font-semibold text-purple-300">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Join 10,000+ Active Traders
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-white">Marin Club - </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Best High ROI
            </span>
            <br />
            <span className="text-white">Investment Platform in</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#D9B34A] mt-2">
              India
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#A8B4C8] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Start investing with just <span className="text-[#D9B34A] font-bold">₹500</span> and earn up to 
            <span className="text-green-400 font-bold"> 45% monthly ROI</span>. Join 
            <span className="text-[#D9B34A] font-bold"> 10,000+</span> trusted traders earning passive income 
            through high-yield investment plans, referral rewards, and instant withdrawals with bank-level security.
          </p>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-3 bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-xl px-6 py-3 max-w-2xl mx-auto mb-8">
            <FaShieldAlt className="text-[#D9B34A] text-xl flex-shrink-0" />
            <span className="text-sm text-[#A8B4C8] font-medium">
              The most transparent and secure investment platform in India
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group flex items-center gap-3 bg-[#D9B34A] hover:bg-[#B8871A] px-8 py-3.5 rounded-full font-bold text-sm text-[#07162A] shadow-lg shadow-[#D9B34A]/20 hover:shadow-[#D9B34A]/40 transition-all duration-300">
              <FaRocket className="text-[#07162A]/80" />
              Go to Dashboard
              <FaArrowRight className="text-[#07162A]/60 text-xs" />
            </button>
            <button className="group flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 px-8 py-3.5 rounded-full font-semibold text-sm text-[#A8B4C8] hover:text-white transition-all duration-300">
              Learn More
              <FaArrowRight className="text-[#D9B34A] text-xs" />
            </button>
          </div>

          {/* Stats Grid - 6 items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <div className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center hover:bg-purple-500/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaLock className="text-[#D9B34A] text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">100% Secure</div>
            </div>
            
            <div className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center hover:bg-purple-500/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaRupeeSign className="text-[#D9B34A] text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">₹50Cr+ Total Payments</div>
            </div>
            
            <div className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center hover:bg-purple-500/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaUsers className="text-[#D9B34A] text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">10K+ Active Members</div>
            </div>
            
            <div className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center hover:bg-purple-500/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaChartLine className="text-[#D9B34A] text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">45% Max ROI</div>
            </div>
            
            <div className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center hover:bg-purple-500/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaHeadset className="text-[#D9B34A] text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">24/7 Support</div>
            </div>
            
            <div className="bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center hover:bg-purple-500/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaUsers className="text-[#D9B34A] text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">10K+ Investors</div>
            </div>
          </div>

          {/* Bottom Trust Text */}
          <div className="text-center">
            <p className="text-sm text-[#A8B4C8]">
              Trusted by <span className="text-[#D9B34A] font-bold">10,000+ Investors</span> across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;