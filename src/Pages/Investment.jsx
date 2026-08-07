import React from 'react';
import MainLayout from '../layout/MainLayout';
import { 
  FaChartArea, 
  FaIndianRupeeSign, 
  FaArrowTrendUp, 
  FaPercent, 
  FaWallet, 
  FaCoins, 
  FaArrowRight
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Investment = () => {
  const topStats = [
    { label: 'Total Invested', value: '₹0', icon: FaChartArea, iconColor: 'text-accent-cyan', textColor: 'text-white' },
    { label: 'Total Expected Returns', value: '₹0', icon: FaIndianRupeeSign, iconColor: 'text-accent-gold', textColor: 'text-white' },
    // Changed textColor from lime to cyan & gold
    { label: 'Profit Earned', value: '+₹0', icon: FaArrowTrendUp, iconColor: 'text-accent-pink', textColor: 'text-accent-cyan' },
    { label: 'Actual ROI', value: '+0.8%', icon: FaPercent, iconColor: 'text-accent-purple', textColor: 'text-accent-gold' },
  ];

  const bottomStats = [
    { label: 'Settled', value: '0', borderColor: 'border-accent-cyan/30' },
    { label: 'Pending', value: '0', borderColor: 'border-accent-pink/30' },
  ];

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-6 px-4">
        
        {/* --- Header --- */}
        <div className="mb-1">
          <h1 className="text-2xl font-bold tracking-tight">Investment Overview</h1>
          <p className="text-dark-muted text-sm mt-1">Track your investment performance</p>
        </div>

        {/* --- Top 4 Stats Grid --- */}
        <div className="grid grid-cols-2 gap-3">
          {topStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-dark-600 border border-border-glass rounded-2xl p-4 flex flex-col gap-3 hover:bg-dark-700 hover:border-accent-purple/30 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <Icon className={`${stat.iconColor} text-sm`} />
                  <span className="text-[10px] text-dark-muted font-medium">{stat.label}</span>
                </div>
                <p className={`${stat.textColor} text-xl font-bold tracking-wide`}>
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* --- Bottom 2 Stats Grid --- */}
        <div className="grid grid-cols-2 gap-3">
          {bottomStats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-dark-600 border ${stat.borderColor} rounded-2xl py-5 flex flex-col items-center justify-center gap-1 hover:bg-dark-700 transition-all duration-200`}
            >
              <p className="text-white text-xl font-bold">{stat.value}</p>
              <p className="text-[10px] text-dark-muted font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- View All Investments Card --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-dark-700 hover:border-accent-purple/40 transition-all duration-300 group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform duration-300">
              <FaArrowTrendUp size={16} />
            </div>
            <div>
              <Link to='/allinvestment'><p className="text-[14px] font-semibold text-white">View All Investments</p></Link>
              <p className="text-[11px] text-dark-muted">0 total investments</p>
            </div>
          </div>
          <FaArrowRight className="text-dark-muted/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-xs" />
        </div>

        {/* --- Recent Investments --- */}
        <div className="mt-2">
          <h3 className="text-[10px] text-dark-muted font-bold uppercase tracking-wider mb-4 pl-1">
            Recent Investments
          </h3>
          
          {/* Empty State Card */}
          <div className="bg-dark-600 border-2 border-dashed border-border-glass rounded-2xl py-16 flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl border-2 border-border-glass flex items-center justify-center bg-dark-700/50">
              <FaWallet className="text-dark-muted text-xl" />
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

export default Investment;