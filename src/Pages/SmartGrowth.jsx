import React from 'react';
import MainLayout from '../Layout/MainLayout';
import { 
  FaWallet, 
  FaChartLine, 
  FaArrowTrendUp, 
  FaCirclePlus, 
  FaCircleCheck, 
  FaBolt,
  FaCoins,
  FaGift
} from 'react-icons/fa6';

const SmartGrowth = () => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Header --- */}
        <div className="flex flex-col mb-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Welcome back, <span className="text-accent-gold">vishal</span></h1>
          </div>
          <p className="text-dark-muted text-sm mt-1">Invest smart. Grow wealth.</p>
        </div>

        {/* --- Wallet Card --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex items-center justify-between relative overflow-hidden hover:border-accent-purple/30 transition-colors duration-200">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-gold/5 rounded-full blur-xl pointer-events-none"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold border border-accent-gold/20">
              <FaWallet size={16} />
            </div>
            <div className="flex flex-col">
              <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Wallet balance</p>
              <p className="text-xl font-bold text-white tracking-tight">₹100</p>
            </div>
          </div>
          <button className="relative z-10 bg-accent-gold hover:bg-accent-gold/80 text-dark-900 px-5 py-2 rounded-full font-bold text-xs shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/40 transition-all duration-300 hover:scale-105">
            + Deposit
          </button>
        </div>

        {/* --- 4 Stats Grid --- */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 flex flex-col gap-2 hover:bg-dark-700 hover:border-accent-purple/30 transition-all duration-200">
            <div className="flex items-center justify-between">
              <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Total Invested Amount</p>
              <FaChartLine className="text-accent-cyan text-sm" />
            </div>
            <p className="text-lg font-bold text-white">₹0</p>
          </div>

          <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 flex flex-col gap-2 hover:bg-dark-700 hover:border-accent-gold/30 transition-all duration-200">
            <div className="flex items-center justify-between">
              <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Total Amount (Invest + Profit)</p>
              <FaArrowTrendUp className="text-accent-gold text-sm" />
            </div>
            <p className="text-lg font-bold text-white">₹0</p>
          </div>

          <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 flex flex-col gap-2 hover:bg-dark-700 hover:border-accent-pink/30 transition-all duration-200">
            <div className="flex items-center justify-between">
              <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Active Plans</p>
              <FaCirclePlus className="text-accent-pink text-sm" />
            </div>
            <p className="text-lg font-bold text-white">0</p>
          </div>

          <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 flex flex-col gap-2 hover:bg-dark-700 hover:border-accent-cyan/30 transition-all duration-200">
            <div className="flex items-center justify-between">
              <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Completed Plans</p>
              <FaCircleCheck className="text-accent-cyan text-sm" />
            </div>
            <p className="text-lg font-bold text-white">0</p>
          </div>
        </div>

        {/* --- Live Ticker Bar --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl px-4 py-3 flex items-center justify-between overflow-hidden text-[11px]">
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap flex-1">
            <div className="flex items-center gap-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full px-2 py-0.5 text-accent-cyan text-[9px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse"></span>
              Live
            </div>
            <span className="text-dark-muted flex-1 truncate">
              7,200 users active - updated 10 min ago
            </span>
          </div>
          <div className="flex items-center gap-2 pl-3 border-l border-border-glass shrink-0">
            <FaBolt className="text-accent-gold text-xs" />
            <span className="text-white font-medium">vishal</span>
            <span className="text-accent-gold font-semibold">earned ₹35</span>
          </div>
        </div>

        {/* --- Section Header --- */}
        <div className="mt-2 flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full px-3 py-1 text-accent-gold text-[10px] font-bold uppercase tracking-wider w-fit">
            <FaGift size={12} /> Smart Growth
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Smart Growth Plans</h3>
            <p className="text-dark-muted text-[12px] mt-1 max-w-[260px] leading-relaxed">
              Choose an amount, wait for the plan to settle, claim the fixed return.
            </p>
          </div>
        </div>

        {/* --- Tag Badge --- */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent-gold/30 bg-accent-gold/5 w-fit">
          <FaCoins className="text-accent-gold text-sm" />
          <span className="text-[11px] text-white font-medium">Fixed return, no market risk</span>
        </div>

        {/* --- Empty State --- */}
        <div className="mt-4 py-12 bg-dark-600 border-2 border-dashed border-border-glass rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-accent-purple/30 transition-all duration-300">
          <p className="text-dark-muted text-sm font-medium">
            No plans available in this category yet.
          </p>
        </div>

      </div>
    </MainLayout>
  );
};

export default SmartGrowth;