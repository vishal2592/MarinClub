import React from 'react';
import MainLayout from '../layout/MainLayout';
import { 
  FaUsers, 
  FaCoins, 
  FaMagnifyingGlass, 
  FaUserGroup 
} from 'react-icons/fa6';

const Subordinate = () => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Top Card: Total Team --- */}
        {/* Uses your brand's Purple/Pink gradient instead of the screen's flat colors */}
        <div className="relative bg-gradient-to-r from-accent-purple to-accent-pink rounded-2xl p-6 flex flex-col items-center justify-center overflow-hidden">
          {/* Background decorative faint icon */}
          <div className="absolute -right-8 -top-8 text-white/10">
            <FaUserGroup size={120} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-1">
            <p className="text-[9px] font-medium tracking-wider text-white/80 uppercase mb-1">
              Total Team
            </p>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-white">
              0
            </div>
          </div>
        </div>

        {/* --- Stats Row --- */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Left Card: Active Members */}
          <div className="bg-dark-600 border border-accent-gold/40 rounded-2xl p-5 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-accent-gold">
              <FaUsers size={18} />
              <span className="text-xl font-bold">0</span>
            </div>
            <p className="text-[10px] text-dark-muted font-medium tracking-wide">ACTIVE MEMBERS</p>
          </div>

          {/* Right Card: Page Investment */}
          <div className="bg-dark-600 border border-accent-cyan/40 rounded-2xl p-5 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-accent-cyan">
              <FaCoins size={18} />
              <span className="text-xl font-bold">₹0</span>
            </div>
            <p className="text-[10px] text-dark-muted font-medium tracking-wide">PAGE INVESTMENT</p>
          </div>
        </div>

        {/* --- Search Bar --- */}
        <div className="bg-dark-700 border border-border-glass rounded-xl flex items-center px-4 py-3 gap-3">
          <FaMagnifyingGlass className="text-dark-muted text-sm" />
          <input 
            type="text" 
            placeholder="Search name, ID, or mobile" 
            className="w-full bg-transparent text-sm text-white placeholder-dark-muted focus:outline-none"
          />
        </div>

        {/* --- Team Members Section --- */}
        <div className="mt-2">
          <h3 className="text-[10px] text-dark-muted font-semibold uppercase tracking-wider mb-4 pl-1">
            Team Members
          </h3>
          
          {/* Empty State Card */}
          {/* Uses dashed border to represent empty content */}
          <div className="bg-dark-600 border-2 border-dashed border-border-glass rounded-2xl py-16 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl border-2 border-border-glass flex items-center justify-center bg-dark-700/50">
              <FaUserGroup className="text-dark-muted text-xl" />
            </div>
            <p className="text-dark-muted text-sm font-medium">
              No referred users found.
            </p>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Subordinate;