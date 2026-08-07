import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { 
  FaRotate, 
  FaQrcode, 
  FaCoins, 
  FaBuildingColumns, 
  FaEye, 
  FaIndianRupeeSign,
  FaLightbulb,
  FaCircleCheck // <--- FIXED: Changed from FaCheckCircle to FaCircleCheck
} from 'react-icons/fa6';

const Deposite = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [amount, setAmount] = useState('');

  const upiAmounts = ['500', '1K', '1.5K', '2K', '5K', '10K'];
  const usdtAmounts = ['10', '20', '50', '100', '200', '500'];

  const handleMethodChange = (method) => {
    setPaymentMethod(method);
    setAmount('');
  };

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-5 text-white pt-4 pb-2 px-4">
        
        {/* --- Header: Balance --- */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[10px] text-dark-muted font-bold tracking-wider uppercase mb-1">
              Balance
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white">₹100</h2>
          </div>
          <button className="w-10 h-10 rounded-full bg-dark-700 border border-border-glass flex items-center justify-center text-dark-muted hover:text-white hover:border-accent-purple/40 transition-colors hover:rotate-90 duration-300">
            <FaRotate size={16} />
          </button>
        </div>

        {/* --- Payment Method --- */}
        <div>
          <p className="text-[11px] text-dark-muted font-bold tracking-wider uppercase mb-3">
            Payment Method
          </p>
          <div className="grid grid-cols-3 gap-3">
            {/* 1. UPI & QR (Gold Active State) */}
            <div 
              onClick={() => handleMethodChange('upi')}
              className={`cursor-pointer bg-dark-700 rounded-xl py-4 flex flex-col items-center justify-center gap-1 transition-all duration-200 ${paymentMethod === 'upi' ? 'border-2 border-accent-gold shadow-lg shadow-accent-gold/10' : 'border border-border-glass hover:border-accent-gold/40'}`}
            >
              <FaQrcode className={`text-xl ${paymentMethod === 'upi' ? 'text-white' : 'text-dark-muted'}`} />
              <p className={`text-[10px] font-medium tracking-tight ${paymentMethod === 'upi' ? 'font-bold text-white' : 'text-dark-muted'}`}>UPI & QR</p>
            </div>
            
            {/* 2. USDT (Cyan Active State) */}
            <div 
              onClick={() => handleMethodChange('usdt')}
              className={`cursor-pointer bg-dark-700 rounded-xl py-4 flex flex-col items-center justify-center gap-1 transition-all duration-200 ${paymentMethod === 'usdt' ? 'border-2 border-accent-cyan shadow-lg shadow-accent-cyan/10' : 'border border-border-glass hover:border-accent-cyan/40'}`}
            >
              <FaCoins className={`text-xl ${paymentMethod === 'usdt' ? 'text-white' : 'text-dark-muted'}`} />
              <p className={`text-[10px] font-medium tracking-tight ${paymentMethod === 'usdt' ? 'font-bold text-white' : 'text-dark-muted'}`}>USDT</p>
            </div>
            
            {/* 3. Bank Transfer (Pink Active State) */}
            <div 
              onClick={() => handleMethodChange('bank')}
              className={`cursor-pointer bg-dark-700 rounded-xl py-4 flex flex-col items-center justify-center gap-1 transition-all duration-200 ${paymentMethod === 'bank' ? 'border-2 border-accent-pink shadow-lg shadow-accent-pink/10' : 'border border-border-glass hover:border-accent-pink/40'}`}
            >
              <FaBuildingColumns className={`text-xl ${paymentMethod === 'bank' ? 'text-white' : 'text-dark-muted'}`} />
              <p className={`text-[10px] font-medium tracking-tight ${paymentMethod === 'bank' ? 'font-bold text-white' : 'text-dark-muted'}`}>Bank Transfer</p>
            </div>
          </div>
        </div>

        {/* --- Select Channel (Conditional Rendering) --- */}
        <div>
          <p className="text-[11px] text-dark-muted font-bold tracking-wider uppercase mb-3">
            Select Channel
          </p>
          
          {/* 1. UPI Channels */}
          {paymentMethod === 'upi' && (
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-accent-purple/5 border-2 border-accent-purple rounded-xl p-4 flex flex-col justify-center gap-1 relative shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <p className="text-sm font-semibold text-white tracking-tight">voterx</p>
                <p className="text-[10px] text-dark-muted font-medium">Limits: ₹350 - ₹100,000</p>
              </div>
              <div className="bg-accent-pink/5 border-2 border-accent-pink rounded-xl p-4 flex flex-col justify-center gap-1 relative shadow-[0_0_15px_rgba(236,72,153,0.15)]">
                <p className="text-sm font-semibold text-white tracking-tight">FastPayz</p>
                <p className="text-[10px] text-dark-muted font-medium">Limits: ₹350 - ₹100,000</p>
              </div>
            </div>
          )}

          {/* 2. USDT Channels */}
          {paymentMethod === 'usdt' && (
            <div className="bg-accent-cyan/5 border-2 border-accent-cyan rounded-xl p-4 flex flex-col justify-center gap-1 relative shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <p className="text-sm font-semibold text-white tracking-tight">USDT</p>
              <p className="text-[10px] text-dark-muted font-medium">Limits: 350 USDT - 10,000 USDT</p>
            </div>
          )}

          {/* 3. Bank Transfer (Empty State) */}
          {paymentMethod === 'bank' && (
            <div className="bg-dark-700 border-2 border-border-glass rounded-xl py-8 flex flex-col items-center justify-center">
              <p className="text-dark-muted text-[13px] font-medium">No active payment channels available for this method.</p>
            </div>
          )}
        </div>

        {/* --- Deposit Amount & Exchange Rate --- */}
        {(paymentMethod === 'upi' || paymentMethod === 'usdt') && (
          <>
            {/* Exchange Rate for USDT */}
            {paymentMethod === 'usdt' && (
              <div>
                <p className="text-[11px] text-dark-muted font-bold tracking-wider uppercase mb-3">
                  Exchange Rate (INR)
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white">1 USDT = <span className="text-accent-cyan">92 ₹</span></h3>
                </div>
              </div>
            )}

            <div>
              <p className="text-[11px] text-dark-muted font-bold tracking-wider uppercase mb-3">
                Deposit Amount
              </p>
              <div className="grid grid-cols-3 gap-3">
                {(paymentMethod === 'upi' ? upiAmounts : usdtAmounts).map((val, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setAmount(val)}
                    className="bg-dark-700 border border-border-glass rounded-xl py-3 text-center text-sm font-medium text-white hover:bg-dark-600 hover:border-accent-purple/40 transition-all duration-200"
                  >
                    {val}{paymentMethod === 'usdt' ? ' USDT' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount Input */}
            <div>
              <div className="relative">
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${paymentMethod === 'upi' ? 'text-dark-muted/60' : 'text-accent-cyan/60'}`}>
                  {paymentMethod === 'upi' ? <FaIndianRupeeSign size={14} /> : <FaCoins size={14} />}
                </div>
                <input 
                  type="text" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={paymentMethod === 'upi' ? "Enter amount" : "Enter USDT amount"} 
                  className="w-full bg-dark-800 border border-border-glass rounded-xl py-3 pl-9 pr-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
                />
              </div>
              <p className="mt-2 text-[10px] text-dark-muted font-medium">
                * Min deposit: {paymentMethod === 'upi' ? '₹350' : '350 USDT'} | Max: {paymentMethod === 'upi' ? '₹100,000' : '10,000 USDT'}
              </p>
            </div>

            {/* Bottom Action Section */}
            <div className="mt-4 flex flex-col gap-4 pb-4">
              <div className="flex items-center justify-center gap-2 text-[13px] text-dark-muted font-medium">
                <FaEye className="text-accent-gold text-sm" />
                <span className="text-white">Selected: <span className="font-bold">{paymentMethod === 'upi' ? 'voterx' : 'USDT'}</span></span>
              </div>

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white font-bold text-sm shadow-lg shadow-accent-purple/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Proceed to Payment
                <span className="text-white/70 text-xs">&rarr;</span>
              </button>
            </div>
          </>
        )}

        {/* --- Deposit Tips (Always Visible) --- */}
        <div className="mt-2 bg-dark-600 border border-border-glass rounded-2xl p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
              <FaLightbulb size={14} />
            </div>
            <p className="text-sm font-bold text-white">Deposit Tips</p>
          </div>
          
          <ul className="flex flex-col gap-3 text-[11px] text-dark-muted leading-relaxed">
            <li className="flex items-start gap-3">
              <FaCircleCheck className="text-accent-cyan mt-0.5 shrink-0 text-xs" /> {/* <--- FIXED usage */}
              <span>If payment fails, it's automatically refunded to your bank account within 2-3 days — no action needed on your end.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="text-accent-cyan mt-0.5 shrink-0 text-xs" />
              <span>For manual gateways, entering the UTR and updating the payment proof is mandatory. Skipping either greatly increases the chance of rejection.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="text-accent-cyan mt-0.5 shrink-0 text-xs" />
              <span>After a successful deposit, refresh your profile (or the app) once to see the updated balance.</span>
            </li>
          </ul>
        </div>

      </div>
    </MainLayout>
  );
};

export default Deposite;