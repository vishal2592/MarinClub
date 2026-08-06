import { FaGift, FaHome, FaUser, FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiDocumentCheck } from "react-icons/hi2";

// YOUR EXACT MENU - UNCHANGED
const menu = [
  {
    title: "Home",
    path: "/home",
    icon: <FaHome size={22} />,
  },
  {
    title: "KYC",
    path: "/kyc",
    icon: <HiDocumentCheck size={22} />,
  },
  {
    title: "Wallet",
    path: "/wallet",
    icon: <FaWallet size={22} />,
  },
  {
    title: "Promos",
    path: "/promos",
    icon: <FaGift size={22} />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUser size={22} />,
  },
];

const BottomNavigation = () => {
  return (
    <div
      className="
        absolute
        bottom-2
        left-2
        right-2
        h-[80px]
        bg-dark-600/70
        backdrop-blur-xl
        border
        border-border-glass
        rounded-2xl
        flex
        justify-around
        items-center
        z-50
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      "
    >
      {menu.map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-14 h-full relative transition-all duration-300`
          }
        >
          {({ isActive }) => (
            <>
              {/* 
                 THE SQUIRCLE ICON BOX
                 Perfect size, subtle hover states, and glowing active states.
              */}
              <div
                className={`
                  w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-accent-purple to-accent-pink text-white scale-105 shadow-lg shadow-accent-purple/40"
                      : "bg-dark-700/50 border border-border-glass/50 text-dark-muted group-hover:bg-dark-600 group-hover:border-accent-purple/20 group-hover:text-white"
                  }
                `}
              >
                {item.icon}
              </div>

              {/* The Label - Always visible, just changes color and weight */}
              <span
                className={`
                  mt-1.5 text-[10px] tracking-wide transition-all duration-300
                  ${
                    isActive
                      ? "text-white font-semibold scale-100"
                      : "text-dark-muted font-medium scale-95 group-hover:text-white"
                  }
                `}
              >
                {item.title}
              </span>

              {/* Exact glowing Green line for Profile */}
              {item.title === "Profile" && isActive && (
                <div
                  className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-6 h-[3px] bg-accent-lime rounded-full shadow-[0_0_12px_rgba(209,245,66,0.5)]"
                ></div>
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavigation;