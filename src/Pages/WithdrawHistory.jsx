import React from 'react';
import MainLayout from '../layout/MainLayout';
import { 
  FaMoneyBill, 
  FaIndianRupeeSign 
} from 'react-icons/fa6';

const WithdrawHistory = () => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Top Stats Row --- */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Total Requests */}
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-dark-700 hover:border-accent-pink/40 transition-all duration-300 group">
            <p className="text-accent-pink text-2xl font-bold tracking-tight">0</p>
            <p className="text-[9px] text-dark-muted font-bold uppercase tracking-wider">
              Total Requests
            </p>
          </div>

          {/* Total Withdrawn */}
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-dark-700 hover:border-accent-gold/40 transition-all duration-300 group">
            <div className="flex items-center gap-1 text-accent-gold text-2xl font-bold tracking-tight">
              <FaIndianRupeeSign size={20} />0
            </div>
            <p className="text-[9px] text-dark-muted font-bold uppercase tracking-wider">
              Total Withdrawn
            </p>
          </div>
        </div>

        {/* --- Empty State Card --- */}
        <div className="mt-2 bg-dark-600 border-2 border-dashed border-border-glass rounded-2xl py-24 flex flex-col items-center justify-center gap-4 hover:border-accent-purple/30 transition-all duration-300 group">
          <div className="w-16 h-16 rounded-2xl border-2 border-border-glass flex items-center justify-center bg-dark-700/50 group-hover:bg-accent-purple/5 group-hover:border-accent-purple/30 transition-all duration-300">
            <FaMoneyBill className="text-dark-muted group-hover:text-accent-purple text-3xl transition-colors duration-300" />
          </div>
          <p className="text-dark-muted text-sm font-medium">
            No withdrawals yet.
          </p>
        </div>

      </div>
    </MainLayout>
  );
};

export default WithdrawHistory;