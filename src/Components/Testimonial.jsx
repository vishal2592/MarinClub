import React from 'react';
import { FaStar, FaQuoteRight, FaUsers, FaArrowRight, FaRocket } from 'react-icons/fa6';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Verified Investor",
      quote: "Invested ₹10,000 and earned ₹3,000 in 30 days! Transparent platform, reliable team.",
      avatarColor: "bg-gradient-to-br from-purple-500 to-pink-500", // Changed to your gradient
      initials: "RK"
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Verified Investor",
      quote: "Best investment ever! Amazing support, instant withdrawals. Highly recommended!",
      avatarColor: "bg-gradient-to-br from-purple-500 to-pink-500", // Changed to your gradient
      initials: "PS"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Verified Investor",
      quote: "Earned ₹50,000 through referrals in 2 months. Pure passive income. Best platform!",
      avatarColor: "bg-gradient-to-br from-purple-500 to-pink-500", // Changed to your gradient
      initials: "AP"
    }
  ];

  return (
    <section className="relative py-6 overflow-hidden bg-[#0a0a1a] text-white">
      
      {/* --- Background Layers --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1040] to-[#0d0d2b]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-1.5 mb-4">
            <FaUsers className="text-purple-300 text-xs" />
            <span className="text-xs font-semibold text-purple-300">Client Testimonials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-white">What Our </span>
            {/* Changed to Your Purple/Pink Gradient */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Users Say
            </span>
          </h2>
          <p className="mt-3 text-[#A8B4C8] text-base">
            Real feedback from <span className="text-white font-medium">real investors</span>
          </p>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 hover:bg-purple-500/10 hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Background Quote Icon */}
              <div className="absolute top-6 right-6 text-6xl text-white/5 select-none transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                <FaQuoteRight />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 text-yellow-400 text-sm mb-5">
                <FaStar className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                <FaStar className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                <FaStar className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                <FaStar className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                <FaStar className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
              </div>

              {/* Quote Text */}
              <p className="text-[#D1D5DB] text-[15px] leading-relaxed mb-6 relative z-10 min-h-[40px]">
                "{item.quote}"
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-5"></div>

              {/* User Profile */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar with subtle glow */}
                <div className={`relative w-12 h-12 rounded-full ${item.avatarColor} flex items-center justify-center font-semibold text-sm text-white shadow-lg before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:blur-md before:-z-10`}>
                  {item.initials}
                </div>
                
                {/* User Info */}
                <div>
                  <h4 className="text-white text-[15px] font-semibold">{item.name}</h4>
                  <p className="text-[#9CA3AF] text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80 inline-block"></span>
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CTA Banner (Now using the SAME CARD STYLE) --- */}
        <div className="relative bg-purple-500/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg overflow-hidden">
          
          {/* Subtle Background Glow behind button */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex-1 z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center md:justify-start gap-3 text-white">
              <FaRocket className="text-purple-400 text-xl drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" /> 
              Ready to Start Earning?
            </h3>
            <p className="text-[#A8B4C8] text-[15px] leading-relaxed max-w-2xl mx-auto md:mx-0">
              Join <span className="font-bold text-purple-400">10,000+</span> traders earning passive income with our trusted platform. Start your journey today with just <span className="font-bold text-pink-400">₹500</span>.
            </p>
          </div>
          
          {/* Premium CTA Button - MATCHING YOUR WEBSITE GRADIENT */}
          <button className="relative group z-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-10 py-4 rounded-xl font-bold text-[15px] flex items-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 flex-shrink-0">
            Start Earning Now
            <FaArrowRight className="text-white/70 text-xs group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;