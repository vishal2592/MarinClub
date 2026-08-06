import React from 'react';
import MainLayout from '../layout/MainLayout';
import { 
  FaUsers, 
  FaCoins, 
  FaMoneyBills 
} from 'react-icons/fa6';

const Turnover = () => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Header Card: Period Turnover --- */}
        <div className="relative bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl p-6 overflow-hidden">
          {/* Background Chart Icon */}
          <div className="absolute -right-6 -bottom-6 text-white/10">
            <FaMoneyBills size={100} />
          </div>
          
          <div className="text-center relative z-10">
            <p className="text-[9px] font-medium tracking-wider text-white/80 uppercase mb-1">
              Period Turnover (Recharges)
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white flex justify-center items-center gap-1">
              ₹0
            </h2>
            <p className="text-[10px] text-white/70 mt-1 font-medium">
              From 0 referral deposits this week
            </p>
          </div>
        </div>

        {/* --- Tabs (This Week / This Month) --- */}
        <div className="flex items-center gap-3 w-full">
          <button className="flex-1 py-3 rounded-xl bg-accent-cyan text-dark-900 text-xs font-bold shadow-lg shadow-accent-cyan/20 transition-all duration-300">
            This Week
          </button>
          <button className="flex-1 py-3 rounded-xl bg-dark-700 border border-border-glass text-dark-muted text-xs font-bold transition-all duration-300 hover:text-white hover:border-accent-purple/40">
            This Month
          </button>
        </div>

        {/* --- Stats Row --- */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Card: Downline Users */}
          <div className="bg-dark-600 border border-accent-gold/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-accent-gold">
              <FaUsers size={18} />
              <span className="text-lg font-bold">0</span>
            </div>
            <p className="text-[10px] text-dark-muted font-medium tracking-wide">DOWNLINE USERS</p>
          </div>

          {/* Right Card: Commission Earned */}
          <div className="bg-dark-600 border border-accent-pink/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-accent-pink">
              <FaCoins size={18} />
              <span className="text-lg font-bold">₹0</span>
            </div>
            <p className="text-[10px] text-dark-muted font-medium tracking-wide">COMMISSION EARNED</p>
          </div>
        </div>

        {/* --- Referral Commission Logs --- */}
        <div className="mt-2">
          <p className="text-[10px] text-dark-muted font-semibold uppercase tracking-wider mb-4 pl-1">
            Referral Commission Logs
          </p>
          
          <div className="bg-dark-600 border border-border-glass rounded-2xl py-16 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl border-2 border-border-glass flex items-center justify-center bg-dark-700/50">
              <FaMoneyBills className="text-dark-muted text-xl" />
            </div>
            <p className="text-dark-muted text-sm font-medium">
              No commission records found for this period.
            </p>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Turnover;