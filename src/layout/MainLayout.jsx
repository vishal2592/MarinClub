import BottomNavigation from "../Components/BottomNavigation";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full max-w-sm min-h-screen bg-white relative">
        {children}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default MainLayout;
