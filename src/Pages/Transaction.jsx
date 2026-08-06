import React from 'react';
import MainLayout from '../layout/MainLayout';
import { 
  FaWallet, 
  FaGift, 
  FaCoins, 
  FaArrowRight 
} from 'react-icons/fa6';

const Transaction = () => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Top Stats Row --- */}
        <div className="grid grid-cols-2 gap-4">
          {/* Total Deposits */}
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex items-center justify-between hover:bg-dark-700 hover:border-accent-cyan/30 transition-all duration-300 group">
            <div className="flex flex-col gap-1">
              <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Total Deposits</p>
              <p className="text-white text-2xl font-bold tracking-tight">0</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:shadow-accent-cyan/30 transition-all duration-300 shadow-lg shadow-accent-cyan/10">
              <FaWallet size={18} />
            </div>
          </div>

          {/* Total Bonuses */}
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex items-center justify-between hover:bg-dark-700 hover:border-accent-gold/30 transition-all duration-300 group">
            <div className="flex flex-col gap-1">
              <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Total Bonuses</p>
              <p className="text-white text-2xl font-bold tracking-tight">0</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold group-hover:scale-110 group-hover:shadow-accent-gold/30 transition-all duration-300 shadow-lg shadow-accent-gold/10">
              <FaGift size={18} />
            </div>
          </div>
        </div>

        {/* --- Deposit History --- */}
        <div className="mt-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-4 bg-accent-cyan rounded-full"></span>
            <h3 className="text-[10px] text-dark-muted font-bold uppercase tracking-wider">Deposit History</h3>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-2xl py-14 flex flex-col items-center justify-center gap-3 hover:border-accent-cyan/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl border-2 border-border-glass flex items-center justify-center bg-dark-700/50 group-hover:bg-accent-cyan/5 group-hover:border-accent-cyan/30 transition-all duration-300">
              <FaWallet className="text-dark-muted group-hover:text-accent-cyan text-2xl transition-colors duration-300" />
            </div>
            <p className="text-dark-muted text-sm font-medium">
              No deposits yet.
            </p>
          </div>
        </div>

        {/* --- Bonus History --- */}
        <div className="mt-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-4 bg-accent-gold rounded-full"></span>
            <h3 className="text-[10px] text-dark-muted font-bold uppercase tracking-wider">Bonus History</h3>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-2xl py-14 flex flex-col items-center justify-center gap-3 hover:border-accent-gold/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl border-2 border-border-glass flex items-center justify-center bg-dark-700/50 group-hover:bg-accent-gold/5 group-hover:border-accent-gold/30 transition-all duration-300">
              <FaGift className="text-dark-muted group-hover:text-accent-gold text-2xl transition-colors duration-300" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-dark-muted text-sm font-medium">
                No bonuses claimed yet.
              </p>
              <p className="text-[10px] text-accent-gold/60 font-medium">
                Use promo codes to earn bonus rewards!
              </p>
            </div>
          </div>
        </div>

        {/* --- Bottom Stats Row --- */}
        <div className="grid grid-cols-3 gap-4 mt-2">
          {/* Deposits */}
          <div className="bg-dark-700 border border-border-glass rounded-2xl py-4 flex flex-col items-center justify-center gap-1 hover:bg-dark-600 transition-all duration-300">
            <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Deposits</p>
            <p className="text-white text-xl font-bold tracking-tight">0</p>
          </div>

          {/* Bonuses */}
          <div className="bg-dark-700 border border-border-glass rounded-2xl py-4 flex flex-col items-center justify-center gap-1 hover:bg-dark-600 transition-all duration-300">
            <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Bonuses</p>
            <p className="text-accent-gold text-xl font-bold tracking-tight">0</p>
          </div>

          {/* Total */}
          <div className="bg-dark-700 border border-border-glass rounded-2xl py-4 flex flex-col items-center justify-center gap-1 hover:bg-dark-600 transition-all duration-300">
            <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Total</p>
            <p className="text-accent-lime text-xl font-bold tracking-tight">0</p>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Transaction;