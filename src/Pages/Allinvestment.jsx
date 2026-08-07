import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { 
  FaWallet, 
  FaCoins, 
  FaClock 
} from 'react-icons/fa6';

const Allinvestment = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Settled', 'Pending'];

  const stats = [
    { label: 'Total', value: '0', borderColor: 'border-border-glass', textColor: 'text-white' },
    { label: 'Settled', value: '0', borderColor: 'border-accent-cyan/30', textColor: 'text-accent-cyan' },
    { label: 'Pending', value: '0', borderColor: 'border-accent-gold/30', textColor: 'text-accent-gold' },
  ];

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Top Stat Boxes --- */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-dark-700 border ${stat.borderColor} rounded-2xl py-4 flex flex-col items-center justify-center gap-1 hover:bg-dark-600 hover:-translate-y-1 transition-all duration-300`}
            >
              <p className={`text-xl font-bold ${stat.textColor}`}>{stat.value}</p>
              <p className="text-[10px] text-dark-muted font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- Filter Tabs (Updated Gradient) --- */}
        <div className="flex items-center gap-3 w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 hover:scale-105'
                    : 'bg-dark-700 border border-border-glass text-dark-muted hover:text-white hover:border-accent-purple/30 hover:bg-dark-600'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* --- Empty State Card --- */}
        <div className="mt-2">
          <div className="bg-dark-600 border-2 border-dashed border-border-glass rounded-2xl py-20 flex flex-col items-center justify-center gap-3 hover:border-accent-purple/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl border-2 border-border-glass flex items-center justify-center bg-dark-700/50 group-hover:scale-110 transition-transform duration-300">
              <FaWallet className="text-dark-muted text-2xl" />
            </div>
            <p className="text-dark-muted text-sm font-medium">
              No investments found
            </p>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Allinvestment;