import { Link } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import {
  FaCoins, FaBolt, FaFire, FaLock, FaCrown, FaBell
} from 'react-icons/fa6';
import image1 from '../assets/images/smart Growth.jpg'
import image2 from '../assets/images/quickreturn.jpg'

const Dashboard = () => {
  const hotMoments = [
    { name: 'Arjun Reddy', amount: '+₹3,200', time: '3m ago', avatar: 'A', rank: 1 },
    { name: 'Priya Sharma', amount: '+₹2,300', time: '3m ago', avatar: 'P', rank: 2 },
    { name: 'Sneha Nair', amount: '+₹4,900', time: '23m ago', avatar: 'S', rank: 3 },
    { name: 'Neha Gupta', amount: '+₹1,500', time: '3m ago', avatar: 'N', rank: 4 },
    { name: 'Rahul Rai', amount: '+₹6,700', time: '7m ago', avatar: 'R', rank: 5 },
  ];

  return (
    <MainLayout>
      {/* CSS Keyframes for Auto Scrolling Ticker */}
      <style>{`
        @keyframes scrollTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: scrollTicker 25s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full flex flex-col gap-5 text-white pb-6 pt-4 px-2">

        {/* --- Welcome Card --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 relative overflow-hidden shrink-0">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
                Welcome back, Vishal
              </h2>
              <p className="text-dark-muted text-xs mt-1">Level up and win more</p>
              <div className="mt-4">
                <p className="text-dark-muted text-xs mb-1">Balance</p>
                <div className="flex items-center gap-1 text-2xl font-bold">
                  <FaCoins className="text-accent-gold text-lg" /> ₹100
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-end gap-1 h-8">
                <div className="w-1.5 h-3 bg-accent-purple/30 rounded-full"></div>
                <div className="w-1.5 h-5 bg-accent-purple/30 rounded-full"></div>
                <div className="w-1.5 h-7 bg-accent-purple rounded-full shadow-accent-purple/50"></div>
                <div className="w-1.5 h-4 bg-accent-purple/30 rounded-full"></div>
                <div className="w-1.5 h-8 bg-accent-pink rounded-full shadow-accent-pink/50"></div>
              </div>
              <Link to='/deposite'>
                <button className="bg-gradient-to-r from-accent-purple to-accent-pink text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-accent-purple/30 hover:scale-105 transition-transform">
                + Deposit
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* --- Movable Ticker Bar (Auto-Scroll) --- */}
        <div className="bg-dark-600 border border-border-glass rounded-xl px-4 py-2.5 overflow-hidden text-[11px]">
          <div className="ticker-track flex items-center gap-8 whitespace-nowrap w-max">
            {/* Duplicate content for seamless infinite scroll */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 shrink-0">
                <span className="flex items-center gap-2 text-dark-muted">
                  <span className="text-accent-purple text-xs"><FaBolt /></span>
                  <span className="text-white">Gupta</span> earned <span className="text-accent-pink font-medium">₹2,300</span> • 3m ago
                </span>
                <span className="w-px h-4 bg-accent-purple/20"></span>
                <span className="flex items-center gap-2 text-dark-muted">
                  <span className="text-accent-purple text-xs"><FaBolt /></span>
                  <span className="text-white">Arjun</span> earned <span className="text-accent-pink font-medium">₹3,200</span> • 3m ago
                </span>
                <span className="w-px h-4 bg-accent-purple/20"></span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Popular Investments (Optimized Images) --- */}
        <div className="shrink-0">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <FaFire className="text-accent-pink text-sm" /> Popular Investments
            </h3>
            <Link to='/categories'> <button className="text-[10px] text-accent-purple hover:text-accent-pink transition-colors font-medium">View All &gt;</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">

            {/* Card 1: Smart Growth */}
            <Link to='/smartgrowth'>
              <div className="bg-dark-600 border border-border-glass rounded-xl overflow-hidden group hover:border-accent-purple/40 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-accent-purple/5">
                {/* Increased height & Removed opacity-80 for clarity */}
                <div className="h-24 w-full bg-dark-800 overflow-hidden relative border-b border-border-glass">
                  <img
                    src={image1}
                    alt="Smart Growth"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay to ensure text remains readable */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-dark-600 via-dark-600/50 to-transparent"></div> */}
                </div>
                <div className="p-3.5 flex flex-col gap-1 relative z-10">
                  <h4 className="text-[13px] font-bold text-white">Smart Growth</h4>
                  <p className="text-[9px] text-dark-muted">Returns in 24 Hours</p>
                  <p className="text-[9px] text-dark-muted">• 6 Plans available</p>
                </div>
              </div>

            </Link>
            {/* Card 2: Quick Return */}
           <Link to='/quickreturn'>
             <div className="bg-dark-600 border border-border-glass rounded-xl overflow-hidden group hover:border-accent-pink/40 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-accent-pink/5">
              {/* Increased height & Removed opacity-80 for clarity */}
              <div className="h-24 w-full bg-dark-800 overflow-hidden relative border-b border-border-glass">
                <img
                  src={image2}
                  alt="Quick Return"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay to ensure text remains readable */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-dark-600 via-dark-600/50 to-transparent"></div> */}
              </div>
              <div className="p-3.5 flex flex-col gap-1 relative z-10">
                <h4 className="text-[13px] font-bold text-white">Quick Return</h4>
                <p className="text-[9px] text-dark-muted">Returns in 1 Hours</p>
                <p className="text-[9px] text-dark-muted">• 4 Plans available</p>
              </div>
            </div>
           </Link>

          </div>
        </div>

        {/* --- Why Choose Us (Premium Horizontal List) --- */}
        <div className="mt-1 shrink-0">
          <h3 className="text-sm font-bold mb-3 text-center">Why Choose Us</h3>
          <div className="flex flex-col gap-3">
            {[
              { icon: <FaBolt />, title: 'Lightning Fast', desc: 'Instant Payouts', color: 'accent-purple' },
              { icon: <FaLock />, title: 'Secure', desc: '100% Encrypted', color: 'accent-pink' },
              { icon: <FaCrown />, title: 'Premium', desc: 'Best Rewards', color: 'accent-gold' },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-dark-600 border-l-4 border-${item.color} rounded-xl p-4 flex items-center gap-4 hover:bg-dark-700 hover:-translate-x-0.5 transition-all duration-300 cursor-pointer group`}
              >
                <div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center text-${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-white tracking-tight">{item.title}</p>
                  <p className="text-[10px] text-dark-muted font-medium leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Stats Row --- */}
        <div className="grid grid-cols-3 gap-3 mt-1 shrink-0">
          <div className="bg-dark-600 border border-border-glass rounded-xl py-3 text-center">
            <p className="text-base font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">58K+</p>
            <p className="text-[9px] text-dark-muted">Active Players</p>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-xl py-3 text-center">
            <p className="text-base font-bold text-accent-pink">5Cr+</p>
            <p className="text-[9px] text-dark-muted">Paid Out</p>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-xl py-3 text-center">
            <p className="text-base font-bold text-accent-gold">24/7</p>
            <p className="text-[9px] text-dark-muted">Support</p>
          </div>
        </div>

        {/* --- Hot Moments (Fancy Feed Design) --- */}
        <div className="shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <FaFire className="text-orange-500 text-sm" />
              <h3 className="text-sm font-bold">Hot Moments</h3>
            </div>
            <span className="text-[9px] text-accent-cyan flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse"></span> Live
            </span>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-2xl overflow-hidden divide-y divide-border-glass/50">
            {hotMoments.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 px-5 hover:bg-accent-purple/5 transition-colors group">
                <div className="flex items-center gap-4">
                  {/* Rank with special gold glow for #1 */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${item.rank === 1 ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/30' : 'bg-dark-700 text-dark-muted'}`}>
                    {item.rank}
                  </div>
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink flex items-center justify-center text-[10px] font-bold text-white shadow-sm shadow-accent-purple/20">
                      {item.avatar}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-dark-600"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">{item.name}</span>
                    <span className="text-[10px] text-dark-muted">{item.time}</span>
                  </div>
                </div>
                <span className="text-accent-pink font-bold text-sm group-hover:scale-105 transition-transform">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Dashboard;