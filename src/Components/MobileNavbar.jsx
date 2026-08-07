import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import image1 from '../assets/images/heading image.png'

const MobileNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // --- Mock KYC Status State ---
  const [isKycVerified, setIsKycVerified] = useState(false); 
  // -----------------------------

  // --- Notification Popup State & Ref ---
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  let title = "";

  switch (location.pathname) {
    case "/home":
      title = "Marin Club";
      break;
    case "/kyc":
      title = "KYC Verification";
      break;
    case "/wallet":
      title = "My Wallet";
      break;
    case "/promos":
      title = "Promos";
      break;
    case "/profile":
      title = "Profile";
      break;
    case "/investment":
      title = "Investment Summary";
      break;
    case "/allinvestment":
      title = "All Investments";
      break;
    case "/transaction":
      title = "All Transaction";
      break;
    case "/withdraw":
      title = "Withdraw History";
      break;
    case "/platformguide":
      title = "Platform Guide";
      break;
    case "/helpcenter":
      title = "Help Center";
      break;
    case "/termcondition":
      title = "Terms & Conditions";
      break;
    case "/turnover":
      title = "TurnOver";
      break;
    case "/subordinate":
      title = "Sub-ordinate";
      break;
    case "/categories":
      title = "Categories";
      break;
    case "/smartgrowth":
      title = "Smart Growth";
      break;
    case "/deposite":
      title = "Deposite";
      break;
    case "/draw":
      title = "Withdraw";
      break;
    case "/quickreturn":
      title = "Quick Return";
      break;
    default:
      title = "Marin Club";
  }

  const backArrowPaths = [
    "/wallet", "/promos", "/profile", "/investment", "/allinvestment","/quickreturn",
    "/transaction", "/withdraw", "/platformguide", "/categories", "/smartgrowth",
    "/helpcenter", "/termcondition", "/turnover", "/subordinate", "/deposite", "/draw"
  ];

  const showBackArrow = backArrowPaths.includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 bg-dark-800/90 backdrop-blur-md border-b border-accent-purple/20 before:absolute before:inset-x-4 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-accent-purple/60 before:to-transparent">

      <div className="flex items-center justify-between h-16 px-4 relative">

        {/* Left Section: Logo or Back Arrow */}
        <div className="flex items-center gap-3">
          {showBackArrow ? (
            <>
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full bg-dark-700 border border-border-glass flex items-center justify-center text-white hover:bg-dark-600 transition-all duration-200 hover:scale-105"
              >
                <FaArrowLeft size={18} />
              </button>
              <h2 className="text-lg font-bold text-white tracking-wide">
                {title}
              </h2>
            </>
          ) : (
            <>
              {/* Premium Image Container */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 shadow-accent-purple/20 flex items-center justify-center overflow-hidden group-hover:shadow-accent-purple/30 transition-all duration-300">
                {/* ✅ FIXED: Changed w-6 h-6 object-contain to w-full h-full object-cover */}
                <img
                  src={image1}
                  alt="Marin Club"
                  className="w-full h-full object-cover drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                />
              </div>

              {/* Text Logo with Gradient */}
              <h2 className="text-lg font-bold tracking-wide bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                {title}
              </h2>
            </>
          )}
        </div>

        {/* Right Section: Notification Bell & Popup */}
        <div className="relative" ref={notificationRef}>
          
          <button 
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative group w-10 h-10 rounded-full bg-accent-purple/10 backdrop-blur-sm border border-accent-purple/20 flex items-center justify-center hover:bg-accent-purple/20 hover:border-accent-purple/40 transition-all duration-300 hover:scale-105 hover:shadow-accent-purple/20"
          >
            <FaBell className="text-accent-purple/80 group-hover:text-white transition-colors duration-300 text-sm" />

            {/* Notification Dot */}
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent-pink to-accent-purple shadow-accent-pink/60 animate-pulse"></span>
          </button>

          {/* --- NOTIFICATION DROPDOWN --- */}
          {isNotificationOpen && (
            <div className="absolute top-full right-0 mt-3 w-[320px] bg-dark-600 border border-border-glass rounded-2xl shadow-2xl p-4 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-border-glass/50">
                <span className="text-sm font-bold text-white">Notifications</span>
                <span className="text-[10px] font-semibold text-accent-gold">1 unread</span>
              </div>

              {/* Conditional Notification */}
              {isKycVerified ? (
                // --- KYC Verified Success ---
                <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-dark-700/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-accent-pink/20 flex items-center justify-center text-accent-pink shrink-0">
                    <FaBell size={18} />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-white">KYC Approved</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-[11px] text-dark-muted leading-tight">
                      Your KYC has been verified. You can now withdraw funds.
                    </p>
                    <span className="text-[9px] text-dark-muted/60 mt-0.5">18h ago</span>
                  </div>
                </div>
              ) : (
                // --- KYC Verification Pending ---
                <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-dark-700/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-accent-pink/20 flex items-center justify-center text-accent-pink shrink-0">
                    <FaBell size={18} />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-white">KYC Verification Pending</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    </div>
                    <p className="text-[11px] text-dark-muted leading-tight">
                      KYC are not verified. Please verify to withdraw the fund.
                    </p>
                    <span className="text-[9px] text-dark-muted/60 mt-0.5">Just now</span>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default MobileNavbar;