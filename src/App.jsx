import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import KYC from "./Pages/KYC";
import Wallet from "./Pages/Wallet";
import Promos from "./Pages/Promos";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Routes>
      {/* Landing Website */}
      <Route path="/" element={<Home />} />

      {/* App Layout */}
   
        <Route path="/home" element={<Dashboard />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/profile" element={<Profile />} />
      
    </Routes>
  );
}

export default App;