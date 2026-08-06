import React, { useState } from 'react'; // <--- Added useState
import MainLayout from '../layout/MainLayout';
import { 
  FaCopy, 
  FaEnvelope, 
  FaPhone, 
  FaBullhorn, 
  FaCircleCheck, 
  FaLock, 
  FaUserSecret, 
  FaCommentDots,
  FaArrowRight
} from 'react-icons/fa6';

const HelpCenter = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyUserId = async () => {
    try {
      await navigator.clipboard.writeText('58845');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset text after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy User ID.');
    }
  };

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Help Center</h1>
            <p className="text-dark-muted text-sm mt-1 leading-relaxed max-w-sm">
              How can we help? Our team is available 24/7 to resolve your queries instantly.
            </p>
          </div>
          {/* Status Badge */}
          <div className="flex items-center gap-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-wider">Support Online</span>
          </div>
        </div>

        {/* --- User ID Card --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex items-center justify-between hover:border-accent-purple/30 transition-all duration-200">
          <div>
            <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Your User ID</p>
            <p className="text-2xl font-bold tracking-tight mt-1">58845</p>
          </div>
          
          {/* Updated Copy Button */}
          <button 
            onClick={handleCopyUserId}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-700 border border-border-glass text-xs font-semibold text-dark-muted hover:text-white hover:border-accent-purple/40 hover:bg-dark-600 transition-all duration-200 min-w-[80px] justify-center"
          >
            <FaCopy size={14} className="text-accent-cyan" /> 
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* --- Contact Cards (Email & Phone) --- */}
        <div className="grid grid-cols-2 gap-4 mt-2">
          {/* Email */}
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex flex-col items-start hover:border-accent-cyan/30 transition-all duration-200 gap-1.5">
            <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-1">
              <FaEnvelope size={16} />
            </div>
            <p className="text-[10px] text-dark-muted font-bold tracking-wider uppercase">Email</p>
            <p className="text-sm font-medium text-white break-all">support@tradeclub.com</p>
          </div>

          {/* Phone */}
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex flex-col items-start hover:border-accent-gold/30 transition-all duration-200 gap-1.5">
            <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-1">
              <FaPhone size={16} />
            </div>
            <p className="text-[10px] text-dark-muted font-bold tracking-wider uppercase">Phone</p>
            <p className="text-sm font-medium text-white">+91 90000 00001</p>
          </div>
        </div>

        {/* --- Official Channel Card --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex items-center justify-between hover:border-accent-purple/30 transition-all duration-200 group">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
              <FaBullhorn size={20} />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-white">Official Channel</p>
              <p className="text-[10px] text-dark-muted">Updates, Bonuses &amp; news</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-border-glass text-xs font-medium text-dark-muted hover:text-white hover:border-accent-cyan/40 transition-all duration-200">
            Follow <FaArrowRight size={10} />
          </button>
        </div>

        {/* --- Trust Badges (Row of 3) --- */}
        <div className="flex items-center justify-around bg-dark-700 border border-border-glass rounded-2xl py-3 px-4 mt-2">
          <div className="flex flex-col items-center gap-1">
            <FaCircleCheck className="text-accent-cyan text-sm" />
            <span className="text-[9px] text-dark-muted font-medium tracking-wider uppercase">Secure</span>
          </div>
          <div className="w-px h-6 bg-border-glass"></div>
          <div className="flex flex-col items-center gap-1">
            <FaLock className="text-accent-pink text-sm" />
            <span className="text-[9px] text-dark-muted font-medium tracking-wider uppercase">Encrypted</span>
          </div>
          <div className="w-px h-6 bg-border-glass"></div>
          <div className="flex flex-col items-center gap-1">
            <FaUserSecret className="text-accent-gold text-sm" />
            <span className="text-[9px] text-dark-muted font-medium tracking-wider uppercase">Private</span>
          </div>
        </div>

        {/* --- CTA Button (Purple/Pink Gradient Instead of Lime) --- */}
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white font-semibold text-sm shadow-lg shadow-accent-purple/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2">
          <FaCommentDots size={16} className="text-white/80" />
          Start live chat
        </button>

        {/* --- Footer ID --- */}
        <div className="text-center mt-2">
          <p className="text-[10px] text-dark-muted/60 font-mono tracking-wider">
            #SUPPORT-58845 &bull; 24/7
          </p>
        </div>

      </div>
    </MainLayout>
  );
};

export default HelpCenter;