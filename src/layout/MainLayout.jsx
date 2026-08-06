import MobileNavbar from "../Components/MobileNavbar";
import BottomNavigation from "../Components/BottomNavigation";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      {/* 
         UPDATES:
         1. 'bg-gray-200' -> 'bg-dark-900' (Matches your website's cosmic dark background)
         2. 'bg-[#0A0E1A]' -> 'bg-dark-800'
      */}
      <div className="w-full sm:max-w-sm h-screen bg-dark-800 relative overflow-hidden shadow-2xl">

        <MobileNavbar />

        <main className="absolute top-[64px] bottom-[80px] left-0 right-0 overflow-y-auto scrollbar-hide">
          {children}
        </main>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default MainLayout;