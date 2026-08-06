import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { 
  FaUser, 
  FaCopy, 
  FaChevronDown, 
  FaGift, 
  FaChartPie, 
  FaCoins, 
  FaShieldHalved, 
  FaWallet, 
  FaClock, 
  FaUsers, 
  FaCirclePlay, 
  FaHeadset, 
  FaFileContract, 
  FaArrowRight,
  FaPowerOff
} from 'react-icons/fa6';

const Profile = () => {
  const menuItems = [
    { id: 1, label: 'Investment Summary', sub: 'View your total returns & profit', icon: FaChartPie, iconColor: 'text-accent-cyan', path: '/investment' },
    { id: 2, label: 'All Investments', sub: 'Track settlement status & date', icon: FaCoins, iconColor: 'text-accent-cyan', path: '/allinvestment' },
    { id: 3, label: 'Identity Verification', sub: 'Not Verified', icon: FaShieldHalved, iconColor: 'text-accent-pink', path: '/kyc' },
    { id: 4, label: 'Bank & Wallet', sub: 'Deposit / Withdraw', icon: FaWallet, iconColor: 'text-accent-gold', path: '/wallet' },
    { id: 5, label: 'Deposit History', sub: 'View all your deposits', icon: FaClock, iconColor: 'text-accent-purple', path: '/transaction' },
    { id: 6, label: 'Withdraw History', sub: 'View all your withdrawals', icon: FaClock, iconColor: 'text-accent-purple', path: '/withdraw' },
    { id: 7, label: 'Referral Program', sub: 'Share and earn', icon: FaUsers, iconColor: 'text-accent-cyan', path: '/promos' },
    { id: 8, label: 'Platform Guide', sub: 'Video tutorials', icon: FaCirclePlay, iconColor: 'text-accent-purple', path: '/platformguide' },
    { id: 9, label: 'Support', sub: '24/7 Customer Support', icon: FaHeadset, iconColor: 'text-accent-cyan', path: '/helpcenter' },
    { id: 10, label: 'Terms & Conditions', sub: 'Read our policies', icon: FaFileContract, iconColor: 'text-accent-gold', path: '/termcondition' },
  ];

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-4 text-white pt-4 pb-6 px-2">
        
        {/* --- Top Profile Header --- */}
        <div className="relative bg-dark-800/80 backdrop-blur-sm border border-border-glass rounded-2xl p-6 flex flex-col items-center pb-8 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-pink/20 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Avatar with intense glowing gradient border */}
          <div className="relative p-1 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink shadow-[0_0_30px_rgba(168,85,247,0.4)] mb-3">
            <div className="w-20 h-20 rounded-full bg-dark-900 flex items-center justify-center text-3xl font-bold text-white border-2 border-dark-900">
              V
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-dark-800 shadow-lg"></span>
          </div>

          {/* User Name */}
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 relative z-10">
            Vishal
          </h2>
          
          {/* User ID & Copy */}
          <div className="flex items-center gap-2 mt-1 text-dark-muted text-sm font-mono bg-dark-700/50 px-3 py-1 rounded-full border border-border-glass relative z-10">
            <span>ID: 92056749</span>
            <button className="hover:text-white transition-colors text-xs hover:scale-110 duration-200">
              <FaCopy />
            </button>
          </div>
        </div>

        {/* --- Stats Row (Modern Split) --- */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-dark-700/80 border border-accent-gold/20 rounded-2xl p-4 text-center relative overflow-hidden group hover:border-accent-gold/40 transition-all duration-300">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-gold/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
            <p className="text-[9px] text-dark-muted uppercase font-bold tracking-wider mb-1 relative z-10">
              Total Balance
            </p>
            <p className="text-accent-gold text-xl font-bold relative z-10">₹189</p>
          </div>
          <div className="bg-dark-700/80 border border-accent-cyan/20 rounded-2xl p-4 text-center relative overflow-hidden group hover:border-accent-cyan/40 transition-all duration-300">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-cyan/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
            <p className="text-[9px] text-dark-muted uppercase font-bold tracking-wider mb-1 relative z-10">
              Commission
            </p>
            <p className="text-accent-cyan text-xl font-bold relative z-10">0</p>
          </div>
        </div>

        {/* --- BONUS & OFFERS --- */}
        <div className="mt-1">
          <h3 className="text-[10px] text-dark-muted font-bold uppercase tracking-wider mb-3 pl-1 flex items-center gap-2">
            <span className="w-1 h-3 bg-accent-gold rounded-full"></span> BONUS & OFFERS
          </h3>
          <div className="relative bg-dark-600 border border-accent-gold/40 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-dark-600/80 hover:border-accent-gold/60 hover:shadow-lg hover:shadow-accent-gold/10 transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform duration-300">
                <FaGift size={16} />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-white">Claim Bonus</p>
                <p className="text-[11px] text-dark-muted">Earn coupons on your wallet balance</p>
              </div>
            </div>
            <FaArrowRight className="text-accent-gold/60 group-hover:text-accent-gold group-hover:translate-x-1 transition-all duration-300 text-sm" />
          </div>
        </div>

        {/* --- INVESTMENTS --- */}
        <div className="mt-1">
          <h3 className="text-[10px] text-dark-muted font-bold uppercase tracking-wider mb-3 pl-1 flex items-center gap-2">
            <span className="w-1 h-3 bg-accent-cyan rounded-full"></span> INVESTMENTS
          </h3>
          <div className="flex flex-col gap-3">
            {menuItems.slice(0, 2).map((item) => (
              <Link 
                key={item.id} 
                to={item.path}
                className="relative bg-dark-600 border border-border-glass rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-dark-600/60 hover:border-accent-cyan/40 hover:shadow-lg hover:shadow-accent-purple/5 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{item.label}</p>
                    <p className="text-[11px] text-dark-muted">{item.sub}</p>
                  </div>
                </div>
                <FaArrowRight className="text-dark-muted/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-xs" />
              </Link>
            ))}
          </div>
        </div>

        {/* --- ACCOUNT SETTINGS --- */}
        <div className="mt-1">
          <h3 className="text-[10px] text-dark-muted font-bold uppercase tracking-wider mb-3 pl-1 flex items-center gap-2">
            <span className="w-1 h-3 bg-accent-pink rounded-full"></span> ACCOUNT SETTINGS
          </h3>
          <div className="flex flex-col gap-3">
            {menuItems.slice(2).map((item) => (
              <Link 
                key={item.id} 
                to={item.path}
                className="relative bg-dark-600 border border-border-glass rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-dark-600/60 hover:border-accent-pink/40 hover:shadow-lg hover:shadow-accent-pink/5 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-pink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{item.label}</p>
                    <p className="text-[11px] text-dark-muted">{item.sub}</p>
                  </div>
                </div>
                <FaArrowRight className="text-dark-muted/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-xs" />
              </Link>
            ))}
          </div>
        </div>

        {/* --- LOGOUT BUTTON --- */}
        <Link to="/logout" className="relative mt-2 bg-dark-600/50 border border-accent-pink/30 rounded-2xl p-4 flex items-center justify-center gap-3 cursor-pointer hover:bg-accent-pink/5 hover:border-accent-pink/60 hover:shadow-lg hover:shadow-accent-pink/10 transition-all duration-300 group overflow-hidden">
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-pink/40 to-transparent"></div>
          <FaPowerOff className="text-accent-pink/60 group-hover:text-accent-pink transition-colors duration-300" />
          <span className="text-accent-pink/80 group-hover:text-accent-pink font-semibold text-sm tracking-wider transition-colors duration-300">
            Logout
          </span>
        </Link>

      </div>
    </MainLayout>
  );
};

export default Profile;