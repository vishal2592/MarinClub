import React, { useState } from 'react';
import { 
  FaHome, 
  FaShieldAlt, 
  FaWallet, 
  FaLayerGroup, 
  FaUser 
} from 'react-icons/fa';

const MobileNavbar = () => {
  // State to track which tab is currently active (default is 'Home')
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', icon: <FaHome size={22} /> },
    { name: 'KYC', icon: <FaShieldAlt size={22} /> },
    { name: 'Wallet', icon: <FaWallet size={22} /> },
    { name: 'Promos', icon: <FaLayerGroup size={22} /> },
    { name: 'Profile', icon: <FaUser size={22} /> },
  ];

  return (
    <>
      {/* 
        This spacer div is extremely important! 
        Because the navbar is fixed at the bottom, it floats over your content.
        This div pushes your main page content up so it doesn't get hidden behind the navbar.
      */}
      <div className="h-20 w-full md:hidden"></div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#13162b] border-t border-[#2a2e4a] px-4 py-2 pb-safe shadow-2xl">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className="flex flex-col items-center gap-1 py-1 px-2 relative w-full transition-all duration-200"
              >
                {/* Icon */}
                <div 
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-[#cafc03]' : 'text-[#6b7094]'
                  }`}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <span 
                  className={`text-[11px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-[#cafc03]' : 'text-[#6b7094]'
                  }`}
                >
                  {item.name}
                </span>

                {/* Active Underline Indicator */}
                {isActive && (
                  <div className="absolute -bottom-2 w-6 h-[3px] bg-[#cafc03] rounded-full shadow-[0_0_8px_rgba(202,252,3,0.6)]"></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;