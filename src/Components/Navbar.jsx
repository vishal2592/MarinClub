import React, { useState } from 'react';
import { 
  FaBolt, 
  FaBars, 
  FaTimes, 
  FaRocket,
  FaUser,
  FaUserCircle,
  FaTachometerAlt,
  FaSignOutAlt,
  FaChevronDown
} from 'react-icons/fa'; // FaChartPie removed
import { Link } from 'react-router-dom';
import image1 from '../assets/images/heading image.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="relative">
      {/* Premium dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1040] to-[#0d0d2b]"></div>
      
      {/* Glass effect overlay - clean and minimal */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/[0.03] border-b border-white/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between flex-wrap">
          {/* Brand / Logo - Marin Club */}
          <a href="#" className="flex items-center gap-3 no-underline group">
            <div className="relative">
              {/* 
                 UPDATED: Icon replaced with image1.
                 overflow-hidden ensures the image respects the rounded-xl corners.
                 w-full h-full object-cover fills the container perfectly.
              */}
              <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm group-hover:border-purple-400/30 transition-all duration-500 overflow-hidden">
                <img 
                  src={image1} 
                  alt="Marin Club" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">Marin</span>
                <span className="text-white/30">.</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">Club</span>
              </span>
              <div className="flex items-center gap-2 -mt-0.5">
                <span className="text-[10px] font-medium text-pink-300/70 flex items-center gap-1">
                  <FaBolt className="inline mr-1 text-yellow-400" /> Start Investing
                </span>
              </div>
            </div>
          </a>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white/80 hover:text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Right side - Start Investing & User */}
          <div className={`
            ${isOpen ? 'flex' : 'hidden'} 
            lg:flex items-center gap-3
            w-full lg:w-auto
            pt-3 lg:pt-0 mt-2 lg:mt-0
            border-t lg:border-t-0 border-white/10
          `}>
            {/* Start Investing Button */}
          <Link to='/home'>
              <span className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full font-semibold text-sm text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
              <FaRocket className="text-white/90" /> 
              Start Investing
            </span>
          </Link>
            
            {/* User Button with Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleUserMenu}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full font-medium text-sm text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <FaUser className="text-purple-400" /> 
                User
                <FaChevronDown className={`text-[10px] text-purple-400 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#1a1040] backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-purple-500/10 overflow-hidden z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <FaUser className="text-white text-sm" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">User</div>
                        <div className="text-xs text-white/60">6202387849</div>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <Link to='/profile' className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200">
                      <FaUserCircle className="text-purple-400 text-sm" />
                      Profile
                    </Link>
                    <Link to='/notfound' className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200">
                      <FaTachometerAlt className="text-purple-400 text-sm" />
                      Dashboard
                    </Link>
                    <div className="border-t border-white/5 my-1"></div>
                    <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors duration-200">
                      <FaSignOutAlt className="text-red-400 text-sm" />
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;