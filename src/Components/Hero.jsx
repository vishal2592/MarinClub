import React from 'react';
// Import Link added for navigation
import { Link } from 'react-router-dom'; 
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-[#1a1040] to-[#0d0d2b]"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-pink/10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-accent-purple/10 backdrop-blur-sm border border-accent-purple/30 rounded-full px-4 py-2 mb-6">
            <span className="flex items-center gap-2 text-xs font-semibold text-accent-purple">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Join 10,000+ Active Traders
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-white">Marin Club - </span>
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-purple bg-clip-text text-transparent">
              Best High ROI
            </span>
            <br />
            <span className="text-white">Investment Platform in</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold text-accent-gold mt-2">
              India
            </span>
          </h1>

          {/* Description */}
          <p className="text-dark-muted text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Start investing with just <span className="text-accent-gold font-bold">₹500</span> and earn up to 
            <span className="text-accent-lime font-bold"> 45% monthly ROI</span>. Join 
            <span className="text-accent-gold font-bold"> 10,000+</span> trusted traders earning passive income 
            through high-yield investment plans, referral rewards, and instant withdrawals with bank-level security.
          </p>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-3 bg-accent-purple/5 backdrop-blur-sm border border-accent-purple/20 rounded-xl px-6 py-3 max-w-2xl mx-auto mb-8">
            <FaShieldAlt className="text-accent-gold text-xl flex-shrink-0" />
            <span className="text-sm text-dark-muted font-medium">
              The most transparent and secure investment platform in India
            </span>
          </div>

          {/* Action Buttons (Converted to Links) */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            
            {/* Dashboard Link -> /home */}
            <Link 
              to="/home"
              className="group flex items-center gap-3 bg-accent-gold hover:bg-accent-gold/80 px-8 py-3.5 rounded-full font-bold text-sm text-dark-900 shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/40 transition-all duration-300"
            >
              <FaRocket className="text-dark-900/80" />
              Go to Dashboard
              <FaArrowRight className="text-dark-900/60 text-xs" />
            </Link>

            {/* Learn More Link -> /notfound */}
            <Link 
              to="/notfound"
              className="group flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 px-8 py-3.5 rounded-full font-semibold text-sm text-dark-muted hover:text-white transition-all duration-300"
            >
              Learn More
              <FaArrowRight className="text-accent-gold text-xs" />
            </Link>

          </div>

          {/* Stats Grid - 6 items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <div className="bg-accent-purple/5 backdrop-blur-sm border border-accent-purple/20 rounded-xl p-4 text-center hover:bg-accent-purple/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaLock className="text-accent-gold text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">100% Secure</div>
            </div>
            
            <div className="bg-accent-purple/5 backdrop-blur-sm border border-accent-purple/20 rounded-xl p-4 text-center hover:bg-accent-purple/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaRupeeSign className="text-accent-gold text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">₹50Cr+ Total Payments</div>
            </div>
            
            <div className="bg-accent-purple/5 backdrop-blur-sm border border-accent-purple/20 rounded-xl p-4 text-center hover:bg-accent-purple/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaUsers className="text-accent-gold text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">10K+ Active Members</div>
            </div>
            
            <div className="bg-accent-purple/5 backdrop-blur-sm border border-accent-purple/20 rounded-xl p-4 text-center hover:bg-accent-purple/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaChartLine className="text-accent-gold text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">45% Max ROI</div>
            </div>
            
            <div className="bg-accent-purple/5 backdrop-blur-sm border border-accent-purple/20 rounded-xl p-4 text-center hover:bg-accent-purple/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaHeadset className="text-accent-gold text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">24/7 Support</div>
            </div>
            
            <div className="bg-accent-purple/5 backdrop-blur-sm border border-accent-purple/20 rounded-xl p-4 text-center hover:bg-accent-purple/10 transition-all duration-300">
              <div className="flex justify-center mb-2">
                <FaUsers className="text-accent-gold text-2xl" />
              </div>
              <div className="text-xs font-semibold text-white">10K+ Investors</div>
            </div>
          </div>

          {/* Bottom Trust Text */}
          <div className="text-center">
            <p className="text-sm text-dark-muted">
              Trusted by <span className="text-accent-gold font-bold">10,000+ Investors</span> across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;