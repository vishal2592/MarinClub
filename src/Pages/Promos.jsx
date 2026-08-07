import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { 
  FaCoins, 
  FaCopy, 
  FaRightLong, 
  FaPeopleGroup,
  FaChartLine,
  FaBullseye,
  FaStar,
  FaLock,
  FaCircleCheck
} from 'react-icons/fa6';

const Promos = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [isCopied, setIsCopied] = useState(false);

  const referralLink = "https://marinclub.site/register?ref=USER123456"; 

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy link. Please copy it manually.');
    }
  };

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-2">
        
        {/* --- Header Card: Total Commission (UPDATED TO PURPLE/PINK) --- */}
        <div className="relative bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl p-6 overflow-hidden">
          <div className="absolute right-4 top-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80">
            <FaBullseye size={16} />
          </div>
          
          <div className="text-center relative z-10">
            <p className="text-[10px] font-semibold tracking-wider text-white/80 uppercase mb-1">
              Total Commission
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white flex justify-center items-center gap-1">
              <FaCoins size={24} className="text-white/80" /> 0
            </h2>
            <p className="text-[10px] text-white/70 mt-1">50% Lifetime Bonus</p>
          </div>
        </div>

        {/* --- My Referral Link --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-white flex items-center gap-2">
              <FaLock size={12} className="text-dark-muted" /> MY REFERRAL LINK
            </span>
            <span className="text-[10px] bg-accent-purple/20 text-accent-purple px-3 py-0.5 rounded-full">Active</span>
          </div>
          
          <div className="flex items-center gap-3 bg-dark-800 border border-border-glass rounded-xl py-2.5 px-4">
            <input 
              type="text" 
              readOnly
              value={referralLink} 
              className="w-full bg-transparent text-xs text-white font-mono focus:outline-none"
            />
            
            <button 
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white px-4 py-1.5 rounded-lg text-[11px] font-bold transition-colors min-w-[70px] justify-center shadow-md shadow-accent-purple/20"
            >
              <FaCopy size={12} /> {isCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* --- Tab Switch (Today / Total) --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-2 flex justify-between">
          <button
            onClick={() => setActiveTab('today')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'today' 
                ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-md shadow-accent-purple/20' 
                : 'text-dark-muted hover:text-white'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setActiveTab('total')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'total' 
                ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-md shadow-accent-purple/20' 
                : 'text-dark-muted hover:text-white'
            }`}
          >
            Total
          </button>
        </div>

        {/* --- Stats Row --- */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-1">
            <p className="text-[10px] text-dark-muted font-medium">Today's Earning</p>
            <p className="text-accent-gold text-xl font-bold">0</p>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-1">
            <p className="text-[10px] text-dark-muted font-medium">New Registrations</p>
            <p className="text-accent-cyan text-xl font-bold">0</p>
          </div>
        </div>

        {/* --- Refer & Earn Banner (UPDATED TO PURPLE/PINK) --- */}
        <div className="bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl p-5 overflow-hidden relative">
          <h3 className="text-lg font-bold text-white mb-1">Refer & Earn</h3>
          <p className="text-xs text-white/70 font-medium">Earn 50% bonus on deposits</p>
          
          <button className="mt-4 flex items-center gap-2 bg-dark-900 text-white border border-white/20 px-5 py-2 rounded-full text-[11px] font-bold shadow-lg hover:bg-dark-800 transition-colors">
            <FaCopy size={12} className="text-accent-pink" /> Copy Link
          </button>
        </div>

        {/* --- Clickable Navigation Cards --- */}
        <div className="flex flex-col gap-3">
          <Link 
            to="/turnover" 
            className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex items-center justify-between hover:bg-dark-700 hover:border-accent-purple/40 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                <h4 className="text-sm font-semibold text-white">Turnover History</h4>
              </div>
              <p className="text-[10px] text-dark-muted">Day-wise collection</p>
            </div>
            <div className="bg-dark-800/50 rounded-full p-1.5 text-dark-muted group-hover:text-white group-hover:bg-accent-purple/20 transition-all duration-300">
              <FaRightLong size={14} />
            </div>
          </Link>

          <Link 
            to="/subordinate" 
            className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex items-center justify-between hover:bg-dark-700 hover:border-accent-purple/40 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                <h4 className="text-sm font-semibold text-white">Subordinate Data</h4>
              </div>
              <p className="text-[10px] text-dark-muted">View team list</p>
            </div>
            <div className="bg-dark-800/50 rounded-full p-1.5 text-dark-muted group-hover:text-white group-hover:bg-accent-purple/20 transition-all duration-300">
              <FaRightLong size={14} />
            </div>
          </Link>
        </div>

        {/* --- Referral & Bonus Rules --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute -bottom-6 -right-6 text-white/5">
            <FaStar size={80} />
          </div>

          <div className="flex items-center gap-2 mb-4 relative z-10">
            <div className="w-7 h-7 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-cyan">
              <FaCircleCheck size={14} />
            </div>
            <h3 className="text-sm font-bold text-white">Referral & Bonus Rules</h3>
          </div>

          <ul className="flex flex-col gap-2 text-[11px] text-dark-muted relative z-10 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0"></span>
              <span>Referral bonus can only be used for withdrawals directly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0"></span>
              <span>This bonus can only be used to purchase an investment plan on MarinClub.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0"></span>
              <span>Once that plan matures and generates a return, the rebate is provided separately.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0"></span>
              <span>The original rebate, bonus, or coupon amount itself remains in the wallet.</span>
            </li>
          </ul>
        </div>
        
        {/* --- Bottom Legal Text --- */}
        <div className="text-[10px] text-dark-muted text-center pb-2 flex justify-center gap-1">
          <span className="text-white/80 text-[9px]">Legacy:</span> UserID: 236128768
        </div>

      </div>
    </MainLayout>
  );
};

export default Promos;