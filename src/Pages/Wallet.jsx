import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import {
  FaWallet,
  FaArrowDown,
  FaArrowUp,
  FaCoins
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Wallet = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Success', 'Pending', 'Failed'];

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-2">

        {/* --- Top Card: Total Balance --- */}
        <div className="relative bg-dark-600 border border-border-glass rounded-2xl p-6 overflow-hidden">
          {/* Background Decorative Wallet Icon */}
          <div className="absolute -right-6 -bottom-6 text-white/5">
            <FaWallet size={120} />
          </div>

          <div className="text-center relative z-10">
            <p className="text-[10px] text-dark-muted font-semibold tracking-wider uppercase mb-1">
              Total Balance
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              ₹100.00
            </h2>
          </div>

          {/* Action Buttons - Now both using your Purple/Pink Gradient */}
          <div className="flex items-center gap-4 mt-6 relative z-10">

            {/* DEPOSIT BUTTON */}
            <Link to='/deposite' className="flex-1">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white py-3 rounded-xl font-semibold text-[13px] shadow-lg shadow-accent-purple/30 transition-all duration-300 hover:-translate-y-0.5">
                <FaArrowDown className="text-white/60 text-xs" />
                Deposit
              </button>
            </Link>

            {/* WITHDRAW BUTTON - Fixed path to /withdraw */}
            <Link to='/draw' className="flex-1">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white py-3 rounded-xl font-semibold text-[13px] shadow-lg shadow-accent-purple/30 transition-all duration-300 hover:-translate-y-0.5">
                <FaArrowUp className="text-white/60 text-xs" />
                Withdraw
              </button>
            </Link>

          </div>
        </div>

        {/* --- Transaction History Section --- */}
        <div className="w-full">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-4 bg-accent-cyan rounded-full"></span>
            <h3 className="text-sm font-semibold text-white">Transaction History</h3>
          </div>

          {/* Filters - Lime replaced with Purple/Pink Gradient */}
          <div className="flex flex-wrap gap-2 mb-4">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-lg shadow-accent-purple/20'
                      : 'bg-transparent border border-border-glass text-dark-muted hover:text-white hover:border-accent-purple/40'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Empty State Card */}
          <div className="bg-dark-600 border-2 border-dashed border-border-glass rounded-2xl py-12 px-6 flex flex-col items-center justify-center gap-3">

            {/* Empty State Icon */}
            <div className="w-12 h-12 rounded-xl border-2 border-border-glass flex items-center justify-center bg-dark-700/50">
              <FaCoins className="text-dark-muted text-lg" />
            </div>

            <div className="text-center">
              <h4 className="text-[14px] font-semibold text-white">No transactions yet</h4>
              <p className="text-dark-muted text-[12px] mt-1 max-w-[180px] mx-auto leading-relaxed">
                Your deposits, withdrawals &amp; winnings will show up here.
              </p>
            </div>

            {/* Make your first deposit Button - Lime replaced with Purple/Pink Gradient */}
            <button className="mt-2 bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white px-6 py-2 rounded-full font-semibold text-[12px] shadow-lg shadow-accent-purple/20 transition-all duration-300 hover:scale-105">
              Make your first deposit
            </button>

          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Wallet;