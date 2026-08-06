import { FaBell, FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // For back button navigation

  let title = "";

  // Cleaned up duplicate cases
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
    default:
      title = "Marin Club";
  }

  // List of pages where the Back Arrow should appear instead of the Logo
  const backArrowPaths = [
    "/wallet", "/promos", "/profile", "/investment", "/allinvestment",
    "/transaction", "/withdraw", "/platformguide","/categories","/smartgrowth",
    "/helpcenter", "/termcondition", "/turnover", "/subordinate"
  ];

  const showBackArrow = backArrowPaths.includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 bg-dark-800/90 backdrop-blur-md border-b border-accent-purple/20 before:absolute before:inset-x-4 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-accent-purple/60 before:to-transparent">

      <div className="flex items-center justify-between h-16 px-4 relative">

        {/* Left Section: Logo or Back Arrow */}
        <div className="flex items-center gap-3">

          {showBackArrow ? (
            // --- BACK ARROW VIEW ---
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
            // --- LOGO VIEW (Home page) ---
            <>
              {/* Premium Image Container with Purple/Pink Glow */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 border border-accent-purple/30 shadow-accent-purple/20 flex items-center justify-center overflow-hidden group-hover:shadow-accent-purple/30 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="Marin Club"
                  className="w-6 h-6 object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                />
              </div>

              {/* Text Logo with Gradient */}
              <h2 className="text-lg font-bold tracking-wide bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                {title}
              </h2>
            </>
          )}
        </div>

        {/* Right Section: Notification Bell (Unchanged) */}
        <button className="relative group w-10 h-10 rounded-full bg-accent-purple/10 backdrop-blur-sm border border-accent-purple/20 flex items-center justify-center hover:bg-accent-purple/20 hover:border-accent-purple/40 transition-all duration-300 hover:scale-105 hover:shadow-accent-purple/20">
          <FaBell className="text-accent-purple/80 group-hover:text-white transition-colors duration-300 text-sm" />

          {/* Notification Dot */}
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent-pink to-accent-purple shadow-accent-pink/60 animate-pulse"></span>
        </button>

      </div>
    </header>
  );
};

export default MobileNavbar;