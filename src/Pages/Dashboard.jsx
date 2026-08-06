import { Link } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import {
  FaCoins, FaBolt, FaFire, FaLock, FaCrown, FaBell
} from 'react-icons/fa6';

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
              <button className="bg-gradient-to-r from-accent-purple to-accent-pink text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-accent-purple/30 hover:scale-105 transition-transform">
                + Deposit
              </button>
            </div>
          </div>
        </div>

        {/* --- Ticker Bar --- */}
        <div className="bg-dark-600 border border-border-glass rounded-xl px-4 py-2.5 flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide text-[11px] shrink-0">
          <span className="flex items-center gap-2 text-dark-muted">
            <span className="text-accent-purple text-xs"><FaBolt /></span>
            <span className="text-white">Gupta</span> earned <span className="text-accent-pink font-medium">₹2,300</span> • 3m ago
          </span>
          <span className="w-px h-4 bg-accent-purple/20"></span>
          <span className="flex items-center gap-2 text-dark-muted">
            <span className="text-accent-purple text-xs"><FaBolt /></span>
            <span className="text-white">Arjun</span> earned <span className="text-accent-pink font-medium">₹3,200</span> • 3m ago
          </span>
        </div>

        {/* --- Popular Investments --- */}
        <div className="shrink-0">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <FaFire className="text-accent-pink text-sm" /> Popular Investments
            </h3>
            <Link to='/categories'> <button className="text-[10px] text-accent-purple hover:text-accent-pink transition-colors font-medium">View All &gt;</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-dark-600 border border-border-glass rounded-xl p-3.5 flex flex-col gap-3 relative overflow-hidden group hover:border-accent-purple/40 transition-colors">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-purple/10 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center gap-2">
                <div className="text-lg font-black tracking-tighter bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">SMART</div>
                <div className="text-lg font-black tracking-tighter bg-gradient-to-r from-accent-pink to-accent-purple bg-clip-text text-transparent">GROWTH</div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">Smart Growth</p>
                <p className="text-[9px] text-dark-muted">Returns in 24 Hours</p>
                <p className="text-[9px] text-dark-muted">• 6 Plans available</p>
              </div>
            </div>
            <div className="bg-dark-600 border border-border-glass rounded-xl p-3.5 flex flex-col gap-3 relative overflow-hidden group hover:border-accent-purple/40 transition-colors">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-pink/10 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center gap-2">
                <div className="text-lg font-black tracking-tighter bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">QUICK</div>
                <div className="text-lg font-black tracking-tighter bg-gradient-to-r from-accent-pink to-accent-purple bg-clip-text text-transparent">RETURN</div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">Quick Return</p>
                <p className="text-[9px] text-dark-muted">Returns in 1 Hours</p>
                <p className="text-[9px] text-dark-muted">• 4 Plans available</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Why Choose Us --- */}
        <div className="mt-1 shrink-0">
          <h3 className="text-sm font-bold mb-3 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: <FaBolt />, title: 'Lightning Fast', desc: 'Instant Payouts', color: 'text-accent-purple' },
              { icon: <FaLock />, title: 'Secure', desc: '100% Encrypted', color: 'text-accent-pink' },
              { icon: <FaCrown />, title: 'Premium', desc: 'Best Rewards', color: 'text-accent-gold' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-600 border border-border-glass rounded-xl p-4 flex flex-col items-center text-center gap-1.5 hover:bg-accent-purple/10 transition-colors">
                <div className={`text-xl ${item.color} drop-shadow-accent-purple/30`}>{item.icon}</div>
                <p className="text-[11px] font-semibold text-white">{item.title}</p>
                <p className="text-[9px] text-dark-muted">{item.desc}</p>
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

        {/* --- Hot Moments --- */}
        <div className="shrink-0">
          <div className="flex items-center gap-2 mb-3">
            <FaFire className="text-orange-500 text-sm" />
            <h3 className="text-sm font-bold">Hot Moments</h3>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 gap-y-0 text-[10px] p-3 border-b border-accent-purple/10 font-medium text-dark-muted">
              <span>#</span><span>Player</span><span>Amount</span><span>Time</span>
            </div>
            <div className="flex flex-col">
              {hotMoments.map((item, index) => (
                <div key={index} className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 gap-y-0 items-center p-3 border-b border-white/5 last:border-0 hover:bg-accent-purple/5 transition-colors">
                  <span className="text-dark-muted text-[10px] w-4 text-center">{item.rank}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink flex items-center justify-center text-[9px] font-semibold text-white">
                      {item.avatar}
                    </div>
                    <span className="text-white text-[11px] font-medium">{item.name}</span>
                  </div>
                  <span className="text-accent-pink text-[11px] font-semibold">{item.amount}</span>
                  <span className="text-dark-muted text-[9px]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Dashboard;