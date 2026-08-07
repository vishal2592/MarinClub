import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import { 
  FaCoins, 
  FaBolt, 
  FaFire, 
  FaWallet, 
  FaRocket, 
  FaXmark,
  FaIndianRupeeSign
} from 'react-icons/fa6';

const QuickReturn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});

  // Removed btnColor from array. All buttons will use the Purple/Pink gradient.
  const plans = [
    { id: 1, name: 'Flex Return', time: '1 Hour', invest: 1000, returns: 1200 },
    { id: 2, name: '1 Hour Plan', time: '1 Hour', invest: 5000, returns: 5300 },
    { id: 3, name: '2 Hour Plan', time: '2 Hours', invest: 20000, returns: 20300 },
    { id: 4, name: '3 Hour Plan', time: '3 Hours', invest: 30000, returns: 30600 },
    { id: 5, name: '5 Hour Plan', time: '5 Hours', invest: 100000, returns: 103000 },
    { id: 6, name: '12 Hour Plan', time: '12 Hours', invest: 50000, returns: 52000 },
    { id: 7, name: '24 Hour Plan', time: '24 Hours', invest: 500000, returns: 530000 },
  ];

  const handleBuyClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan({});
  };

  return (
    <MainLayout>
      {/* Auto Scrolling Ticker Keyframes */}
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

        {/* --- Header Section --- */}
        <div className="flex flex-col mb-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">
              Welcome back, <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">vishal</span>
            </h1>
          </div>
          <p className="text-dark-muted text-sm mt-1">Invest smart. Grow wealth.</p>
        </div>

        {/* --- Balance & Stats Card --- */}
        <div className="flex flex-col gap-4">
          <div className="bg-dark-600 border border-border-glass rounded-2xl p-4 flex items-center justify-between relative overflow-hidden">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-gold/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-9 h-9 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold border border-accent-gold/20">
                <FaWallet size={15} />
              </div>
              <div className="flex flex-col">
                <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Wallet balance</p>
                <p className="text-xl font-bold text-white tracking-tight">₹100</p>
              </div>
            </div>
            <button className="relative z-10 bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/40 transition-all duration-300 hover:scale-105">
              + Deposit
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-dark-600 border border-border-glass rounded-xl p-3.5 flex flex-col">
              <p className="text-[8px] text-dark-muted font-bold tracking-wider uppercase mb-1">Total Invested</p>
              <p className="text-white font-bold text-sm">₹0</p>
            </div>
            <div className="bg-dark-600 border border-border-glass rounded-xl p-3.5 flex flex-col">
              <p className="text-[8px] text-dark-muted font-bold tracking-wider uppercase mb-1">Expected Return</p>
              <p className="text-white font-bold text-sm">₹0</p>
            </div>
            <div className="bg-dark-600 border border-border-glass rounded-xl p-3.5 flex flex-col">
              <p className="text-[8px] text-dark-muted font-bold tracking-wider uppercase mb-1">Profit Earned</p>
              <p className="text-accent-cyan font-bold text-sm">+₹0</p>
            </div>
            <div className="bg-dark-600 border border-border-glass rounded-xl p-3.5 flex flex-col">
              <p className="text-[8px] text-dark-muted font-bold tracking-wider uppercase mb-1">Actual ROI</p>
              <p className="text-accent-pink font-bold text-sm">+0.8%</p>
            </div>
          </div>
        </div>

        {/* --- Ticker Bar --- */}
        <div className="bg-dark-600 border border-border-glass rounded-xl px-4 py-2.5 overflow-hidden text-[11px]">
          <div className="ticker-track flex items-center gap-8 whitespace-nowrap w-max">
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
              </div>
            ))}
          </div>
        </div>

        {/* --- Main Section: Quick Return Plans (Redesigned for better readability) --- */}
        <div className="mt-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-bold flex items-center gap-2">
              <FaFire className="text-accent-pink text-sm" /> Quick Return Plans
            </h3>
            <span className="text-[9px] text-accent-cyan flex items-center gap-1.5 bg-accent-cyan/10 px-2 py-1 rounded-full border border-accent-cyan/30">
              <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse"></span> Live
            </span>
          </div>

          {/* Horizontal Plan Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-hide pb-3 mb-2">
            {['Flex Return', '1 Hour Plan', '2 Hour Plan', '3 Hour Plan', '5 Hour Plan', '12 Hour Plan', '24 Hour Plan'].map((tab, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap border border-border-glass text-dark-muted hover:bg-dark-700 hover:text-white transition-colors`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Plans Cards (Bigger Layout & Fonts) */}
          <div className="flex flex-col gap-3.5">
            {plans.map((plan) => (
              <div key={plan.id} className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex flex-row items-center justify-between gap-4 hover:bg-dark-700 transition-colors">
                
                {/* Left Section: Timer & Info */}
                <div className="flex items-center gap-4 flex-1">
                  {/* Circular Timer Indicator (Increased Size) */}
                  <div className="relative w-14 h-14 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
                    <div className="absolute inset-1 rounded-full border-2 border-accent-purple/30 border-dashed"></div>
                    <div className="flex flex-col items-center justify-center bg-dark-600 rounded-full w-11 h-11 z-10">
                      <span className="text-[12px] font-bold">{plan.time.split(' ')[0]}</span>
                      <span className="text-[7px] text-dark-muted font-medium">Hrs</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <p className="text-[16px] font-bold text-white tracking-tight">{plan.name}</p>
                    <div className="flex flex-wrap items-center gap-4 text-[12px] text-dark-muted">
                      <span className="flex items-center gap-1">
                        Invest: <span className="text-white font-medium">₹{plan.invest.toLocaleString()}</span>
                      </span>
                      <span className="w-px h-3.5 bg-border-glass"></span>
                      <span className="flex items-center gap-1">
                        Return: <span className="text-accent-cyan font-medium">₹{plan.returns.toLocaleString()}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Section: Button (Purple/Pink Gradient) */}
                <button
                  onClick={() => handleBuyClick(plan)}
                  className="bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white font-bold text-[13px] px-6 py-2 rounded-full shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 transition-all duration-300 hover:scale-105 shrink-0"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* --- BUY NOW POPUP MODAL (Exactly same as before) --- */}
        {/* ========================================================= */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-dark-900/90 backdrop-blur-md px-4">
            <div className="w-full max-w-md bg-dark-600 border border-border-glass rounded-3xl p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
              <div className="flex items-start justify-between mb-5 border-b border-border-glass pb-4">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <FaRocket className="text-accent-purple text-lg" />
                    <h2 className="text-base font-bold text-white tracking-tight">{selectedPlan.name}</h2>
                  </div>
                  <p className="text-[11px] text-dark-muted">Settles in {selectedPlan.time}</p>
                </div>
                <button 
                  onClick={handleCloseModal}
                  className="w-8 h-8 rounded-full bg-dark-700 border border-border-glass flex items-center justify-center text-dark-muted hover:text-white hover:border-accent-pink/40 transition-colors"
                >
                  <FaXmark size={16} />
                </button>
              </div>
              <div className="bg-dark-800 border border-border-glass rounded-xl px-4 py-3 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-dark-muted text-xs">
                  <FaWallet size={14} className="text-dark-muted/60" />
                  <span className="font-medium">Wallet balance</span>
                </div>
                <span className="text-white font-bold text-sm">₹100</span>
              </div>
              <div className="mb-2">
                <p className="text-[10px] text-dark-muted font-bold tracking-wider uppercase mb-2">Investment Amount</p>
                <div className="bg-dark-800 border border-border-glass rounded-xl py-3.5 text-center text-lg font-bold text-white">
                  ₹{selectedPlan.invest?.toLocaleString()}
                </div>
                <p className="text-[10px] text-dark-muted mt-2">Fixed Investment amount</p>
              </div>
              <div className="mt-4 bg-gradient-to-r from-dark-800/80 to-accent-pink/10 border border-accent-pink/20 rounded-xl p-5 flex items-center justify-between relative overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-pink/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex flex-col relative z-10">
                  <p className="text-[10px] text-dark-muted font-bold uppercase tracking-wider mb-0.5">You'll Receive</p>
                  <p className="text-2xl font-bold text-accent-pink">₹{selectedPlan.returns?.toLocaleString()}</p>
                  <p className="text-[10px] text-dark-muted mt-0.5">in {selectedPlan.time}</p>
                </div>
                <div className="flex flex-col items-end relative z-10">
                  <p className="text-[9px] text-dark-muted">Fixed Return</p>
                  <p className="text-accent-pink/80 font-bold text-sm">₹{selectedPlan.returns?.toLocaleString()}</p>
                </div>
              </div>
              <button 
                className="w-full mt-5 py-3.5 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white font-bold text-sm shadow-lg shadow-accent-purple/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-accent-purple/50"
                onClick={() => {
                  alert(`Investment of ₹${selectedPlan.invest?.toLocaleString()} confirmed!`);
                  handleCloseModal();
                }}
              >
                Confirm & Invest ₹{selectedPlan.invest?.toLocaleString()}
              </button>
            </div>
          </div>
        )}
        {/* ========================================================= */}

      </div>
    </MainLayout>
  );
};

export default QuickReturn;