import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { 
  FaIndianRupeeSign, 
  FaClock, 
  FaArrowRight, 
  FaPlus, 
  FaLightbulb,
  FaCircleCheck,
  FaXmark,
  FaBuildingColumns,
  FaQrcode,
  FaWallet,
  FaCheck // <--- ADDED THIS MISSING IMPORT
} from 'react-icons/fa6';

const Withdraw = () => {
  const [currencyTab, setCurrencyTab] = useState('INR');
  
  // States for Popup Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('bank'); // 'bank', 'upi', 'usdt'

  return (
    <MainLayout>
      <div className="w-full flex flex-col gap-4 text-white pt-4 pb-6 px-4">
        
        {/* --- Balance Card --- */}
        <div className="bg-dark-600 border border-border-glass rounded-2xl p-5 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">
              Withdrawable Balance
            </p>
            <div className="flex items-center gap-1 text-xl font-bold">
              <FaIndianRupeeSign className="text-accent-gold text-sm" /> 0
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-dark-700 border border-border-glass flex items-center justify-center">
            <FaIndianRupeeSign className="text-dark-muted/50 text-sm" />
          </div>
        </div>

        {/* --- Alert Card (Withdrawal Closed) --- */}
        <div className="bg-accent-pink/10 border border-accent-pink/30 rounded-2xl p-4 flex items-center gap-3">
          <FaClock className="text-accent-pink text-lg shrink-0 animate-pulse" />
          <div>
            <p className="text-[13px] font-semibold text-white">Withdrawal Closed</p>
            <p className="text-[11px] text-accent-pink/80 font-medium">Withdrawal open everyday 10 AM to 6 PM</p>
          </div>
        </div>

        {/* --- Min / Max Stats Row --- */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-dark-600 border border-border-glass rounded-xl py-4 flex flex-col items-center justify-center">
            <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Minimum</p>
            <p className="text-accent-gold text-lg font-bold mt-1">₹100</p>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-xl py-4 flex flex-col items-center justify-center">
            <p className="text-[9px] text-dark-muted font-bold tracking-wider uppercase">Maximum</p>
            <p className="text-accent-cyan text-lg font-bold mt-1">₹5,00,000</p>
          </div>
        </div>

        {/* --- Currency Tabs (INR / USDT) --- */}
        <div>
          <p className="text-[11px] text-dark-muted font-bold tracking-wider uppercase mb-3">
            Withdraw In
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div 
              onClick={() => setCurrencyTab('INR')}
              className={`cursor-pointer bg-dark-700 rounded-xl py-3 flex flex-col items-center justify-center transition-all duration-200 ${currencyTab === 'INR' ? 'border-2 border-accent-gold shadow-accent-gold/10' : 'border border-border-glass hover:border-accent-gold/40'}`}
            >
              <span className={`text-sm font-bold ${currencyTab === 'INR' ? 'text-white' : 'text-dark-muted'}`}>INR</span>
            </div>
            
            <div 
              onClick={() => setCurrencyTab('USDT')}
              className={`cursor-pointer bg-dark-700 rounded-xl py-3 flex flex-col items-center justify-center transition-all duration-200 ${currencyTab === 'USDT' ? 'border-2 border-accent-gold shadow-accent-gold/10' : 'border border-border-glass hover:border-accent-gold/40'}`}
            >
              <span className={`text-sm font-bold ${currencyTab === 'USDT' ? 'text-white' : 'text-dark-muted'}`}>USDT</span>
            </div>
          </div>
        </div>

        {/* --- Payment Method (Empty State) --- */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] text-dark-muted font-bold tracking-wider uppercase">Payment Method</p>
            <button 
              onClick={() => setIsModalOpen(true)} // <--- Opens Modal
              className="flex items-center gap-1 text-[10px] text-accent-cyan font-medium hover:text-white transition-colors"
            >
              <FaPlus size={10} /> Add Now
            </button>
          </div>
          <div className="bg-dark-600 border border-border-glass rounded-xl py-8 flex flex-col items-center justify-center gap-2">
            <p className="text-dark-muted text-[12px] font-medium">No bank/UPI method found.</p>
            <button 
              onClick={() => setIsModalOpen(true)} // <--- Opens Modal
              className="text-accent-cyan text-[12px] font-semibold hover:underline hover:text-white transition-colors"
            >
              Add Payment Method
            </button>
          </div>
        </div>

        {/* --- Withdraw Amount Input --- */}
        <div>
          <p className="text-[11px] text-dark-muted font-bold tracking-wider uppercase mb-3">
            Withdraw Amount
          </p>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted/60">
              <FaIndianRupeeSign size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Enter amount" 
              className="w-full bg-dark-800 border border-border-glass rounded-xl py-3 pl-9 pr-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
            />
          </div>
          <div className="mt-2 flex flex-col sm:flex-row justify-between gap-1 text-[10px] text-dark-muted font-medium">
            <span>Available: <span className="text-white font-bold">₹0</span></span>
            <span>* Min withdraw: <span className="text-white">₹100</span> | Max: <span className="text-white">₹5,00,000</span></span>
          </div>
        </div>

        {/* --- Main Action Button (Disabled State) --- */}
        <button className="w-full mt-2 py-4 rounded-2xl bg-dark-700 border border-border-glass text-dark-muted/80 font-bold text-sm cursor-not-allowed flex items-center justify-center gap-3">
          <FaClock size={16} className="text-dark-muted/50" />
          Withdrawal Closed
        </button>

        {/* --- Info Card: Before You Withdraw --- */}
        <div className="mt-2 bg-dark-600 border border-border-glass rounded-2xl p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
              <FaLightbulb size={16} />
            </div>
            <p className="text-sm font-bold text-white">Before You Withdraw</p>
          </div>
          
          <ul className="flex flex-col gap-3 text-[11px] text-dark-muted leading-relaxed">
            <li className="flex items-start gap-3">
              <FaCircleCheck className="text-accent-gold mt-1 shrink-0 text-xs" />
              <span>Referral and bonus cannot be withdrawn directly — must be used to buy a plan first. Once that plan returns, your paid interest amount will be credited.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="text-accent-gold mt-1 shrink-0 text-xs" />
              <span>Withdrawals open only during 6 AM to 6 PM daily. Outside this window, requests are not accepted.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="text-accent-gold mt-1 shrink-0 text-xs" />
              <span>Approved withdrawals are credited to your account within 24 hours.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="text-accent-gold mt-1 shrink-0 text-xs" />
              <span>If a withdrawal fails, reach out to the support team and our team will assist you.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="text-accent-gold mt-1 shrink-0 text-xs" />
              <span>You can have only one active withdrawal request at a time — please wait for it to finish before trying again.</span>
            </li>
          </ul>
        </div>

        {/* ====================================================== */}
        {/* --- ADD PAYMENT METHOD MODAL --- */}
        {/* ====================================================== */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-dark-900/80 backdrop-blur-md px-4">
            
            {/* Modal Card */}
            <div className="w-full max-w-md bg-dark-600 border border-border-glass rounded-2xl p-6 relative shadow-2xl animate-in fade-in zoom-in duration-300">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-white">Add Payment Method</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-dark-700 border border-border-glass flex items-center justify-center text-dark-muted hover:text-white hover:border-accent-purple/40 transition-colors"
                >
                  <FaXmark size={16} />
                </button>
              </div>

              {/* Method Type Tabs (Bank, UPI, USDT) */}
              <div className="flex gap-3 mb-6">
                {['bank', 'upi', 'usdt'].map((type) => {
                  const isActive = modalTab === type;
                  return (
                    <button
                      key={type}
                      onClick={() => setModalTab(type)}
                      className={`flex-1 bg-dark-800 rounded-xl py-3 flex flex-col items-center justify-center gap-1.5 text-[10px] font-medium transition-all duration-200 border ${
                        isActive 
                          ? 'border-accent-purple bg-accent-purple/5 shadow-[0_0_15px_rgba(168,85,247,0.15)]' 
                          : 'border-border-glass hover:border-accent-purple/30 hover:bg-dark-700'
                      }`}
                    >
                      {/* Icons based on selection */}
                      <div className={isActive ? 'text-white' : 'text-dark-muted'}>
                        {type === 'bank' && <FaBuildingColumns size={18} />}
                        {type === 'upi' && <FaQrcode size={18} />}
                        {type === 'usdt' && <FaWallet size={18} />}
                      </div>
                      <span className={isActive ? 'text-white font-semibold' : 'text-dark-muted'}>
                        {type === 'bank' ? 'Bank Account' : type === 'upi' ? 'UPI' : 'USDT Wallet'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Form Fields based on selected tab */}
              <div className="flex flex-col gap-4 mb-6">
                
                {/* 1. BANK ACCOUNT FIELDS */}
                {modalTab === 'bank' && (
                  <>
                    <div>
                      <label className="block text-[11px] text-dark-muted font-medium mb-1.5">Account Holder Name</label>
                      <input type="text" placeholder="e.g. Rajesh Kumar" className="w-full bg-dark-800 border border-border-glass rounded-xl py-3 px-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[11px] text-dark-muted font-medium mb-1.5">Bank Name</label>
                      <input type="text" placeholder="e.g. State Bank of India" className="w-full bg-dark-800 border border-border-glass rounded-xl py-3 px-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[11px] text-dark-muted font-medium mb-1.5">Account Number</label>
                      <input type="text" placeholder="Enter account number" className="w-full bg-dark-800 border border-border-glass rounded-xl py-3 px-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[11px] text-dark-muted font-medium mb-1.5">IFSC Code</label>
                      <input type="text" placeholder="E.G. SBIN0001234" className="w-full bg-dark-800 border border-border-glass rounded-xl py-3 px-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors" />
                    </div>
                  </>
                )}

                {/* 2. UPI ID FIELD */}
                {modalTab === 'upi' && (
                  <div>
                    <label className="block text-[11px] text-dark-muted font-medium mb-1.5">UPI ID</label>
                    <input type="text" placeholder="e.g. rajesh@okicici" className="w-full bg-dark-800 border border-border-glass rounded-xl py-3 px-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors" />
                  </div>
                )}

                {/* 3. USDT ADDRESS FIELD */}
                {modalTab === 'usdt' && (
                  <div>
                    <label className="block text-[11px] text-dark-muted font-medium mb-1.5">USDT Wallet Address (TRC20)</label>
                    <input type="text" placeholder="Enter wallet address" className="w-full bg-dark-800 border border-border-glass rounded-xl py-3 px-4 text-sm text-white placeholder-dark-muted focus:outline-none focus:border-accent-purple/60 transition-colors" />
                  </div>
                )}
              </div>

              {/* Checkbox & Submit Button */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="defaultMethod" 
                    className="peer h-4 w-4 appearance-none rounded border border-border-glass bg-dark-800 checked:bg-accent-purple checked:border-accent-purple transition-all duration-200 cursor-pointer"
                  />
                  <FaCheck className="absolute ml-0.5 mt-0.5 w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
                  <label htmlFor="defaultMethod" className="text-[11px] text-dark-muted cursor-pointer select-none hover:text-white transition-colors">
                    Set as default method
                  </label>
                </div>
                
                <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-pink hover:to-accent-purple text-white font-bold text-sm shadow-lg shadow-accent-purple/30 transition-all duration-300 hover:-translate-y-0.5">
                  Save Payment Method
                </button>
              </div>
            </div>
          </div>
        )}
        {/* ====================================================== */}

      </div>
    </MainLayout>
  );
};

export default Withdraw;