import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import KYC from "./Pages/KYC";
import Wallet from "./Pages/Wallet";
import Promos from "./Pages/Promos";
import Profile from "./Pages/Profile";
import Turnover from "./Pages/Turnover";
import Subordinate from "./Pages/Subordinate";
import Investment from "./Pages/Investment";
import Allinvestment from "./Pages/Allinvestment";
import Transaction from "./Pages/Transaction";
import WithdrawHistory from "./Pages/WithdrawHistory";
import PlatformGuide from "./Pages/PlatformGuide";
import HelpCenter from "./Pages/HelpCenter";
import TermCondition from "./Pages/TermCondition";
import NotFound from "./Pages/NotFound";
import Categories from "./Pages/Categories";
import SmartGrowth from "./Pages/SmartGrowth";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Deposite from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import QuickReturn from "./Pages/QuickReturn";

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
        <Route path="/turnover" element={<Turnover />} />
        <Route path="/subordinate" element={<Subordinate />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/allinvestment" element={<Allinvestment />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path='/withdraw' element={<WithdrawHistory />} />
        <Route path='/platformguide' element={<PlatformGuide />} />
        <Route path='/helpcenter' element={<HelpCenter />} />
        <Route path='/termcondition' element={<TermCondition />} />
        <Route path= '/notfound' element={<NotFound />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/smartgrowth" element={<SmartGrowth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/deposite' element={<Deposite />} />
        <Route path="/draw" element={<Withdraw />} />
        <Route path="/quickreturn" element={<QuickReturn />} />
      
    </Routes>
  );
}

export default App;