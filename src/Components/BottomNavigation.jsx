import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaGift,
  FaUser,
} from "react-icons/fa";

import { HiDocumentCheck } from "react-icons/hi2";

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
      fixed
      bottom-0
      left-1/2
      -translate-x-1/2
      w-full
      max-w-sm
      bg-[#121E35]
      border-t
      border-[#243B61]
      h-20
      flex
      justify-around
      items-center
      z-50"
    >
      {menu.map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs transition-all duration-300 ${
              isActive
                ? "text-[#F6D365]"
                : "text-gray-400 hover:text-white"
            }`
          }
        >
          {item.icon}

          <span className="mt-1">{item.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavigation;