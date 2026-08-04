import MainLayout from "../Layout/MainLayout";

// Sample data for the dashboard
const stats = [
  {
    id: 1,
    label: "Total Portfolio",
    value: "₹12,84,500",
    change: "+12.5%",
    isPositive: true,
  },
  {
    id: 2,
    label: "Today's P&L",
    value: "₹4,250",
    change: "+2.3%",
    isPositive: true,
  },
  {
    id: 3,
    label: "Invested Amount",
    value: "₹9,50,000",
    change: "-",
    isPositive: null,
  },
  {
    id: 4,
    label: "Returns",
    value: "₹3,34,500",
    change: "+35.2%",
    isPositive: true,
  },
];

const holdings = [
  {
    id: 1,
    name: "Reliance Industries",
    symbol: "RELIANCE",
    shares: 50,
    avgPrice: "₹2,450",
    currentPrice: "₹2,680",
    pnl: "+₹11,500",
    pnlPercent: "+9.4%",
  },
  {
    id: 2,
    name: "Tata Consultancy Services",
    symbol: "TCS",
    shares: 25,
    avgPrice: "₹3,200",
    currentPrice: "₹3,850",
    pnl: "+₹16,250",
    pnlPercent: "+20.3%",
  },
  {
    id: 3,
    name: "HDFC Bank",
    symbol: "HDFCBANK",
    shares: 100,
    avgPrice: "₹1,450",
    currentPrice: "₹1,620",
    pnl: "+₹17,000",
    pnlPercent: "+11.7%",
  },
  {
    id: 4,
    name: "Infosys",
    symbol: "INFY",
    shares: 75,
    avgPrice: "₹1,200",
    currentPrice: "₹1,150",
    pnl: "-₹3,750",
    pnlPercent: "-4.2%",
  },
];

const recentTransactions = [
  {
    id: 1,
    type: "Buy",
    symbol: "RELIANCE",
    quantity: 10,
    price: "₹2,650",
    date: "Today, 10:30 AM",
  },
  {
    id: 2,
    type: "Sell",
    symbol: "TCS",
    quantity: 5,
    price: "₹3,820",
    date: "Today, 09:45 AM",
  },
  {
    id: 3,
    type: "Buy",
    symbol: "HDFCBANK",
    quantity: 25,
    price: "₹1,600",
    date: "Yesterday, 3:15 PM",
  },
  {
    id: 4,
    type: "Buy",
    symbol: "INFY",
    quantity: 20,
    price: "₹1,180",
    date: "Yesterday, 11:20 AM",
  },
];

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-6 rounded-b-3xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-blue-200 text-sm font-medium">Welcome back,</p>
              <h1 className="text-white text-xl font-bold">Rajesh Kumar</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-white/20 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="bg-white/20 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Total Balance Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mt-2">
            <p className="text-blue-200 text-sm">Total Portfolio Value</p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-white text-3xl font-bold">₹12,84,500</p>
                <p className="text-green-300 text-sm font-medium">
                  +12.5% this month
                </p>
              </div>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold">
                Add Funds
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 -mt-4">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
              <p className="text-gray-900 text-lg font-bold mt-1">
                {stat.value}
              </p>
              {stat.isPositive !== null && (
                <span
                  className={`text-xs font-semibold ${stat.isPositive ? "text-green-600" : "text-red-600"}`}
                >
                  {stat.change}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Holdings Section */}
        <div className="px-4 mt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-gray-900 text-lg font-bold">Your Holdings</h2>
            <button className="text-blue-600 text-sm font-semibold">
              See All
            </button>
          </div>

          <div className="space-y-3">
            {holdings.map((stock) => (
              <div key={stock.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">
                          {stock.symbol.substring(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold">
                          {stock.name}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {stock.symbol} • {stock.shares} shares
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 font-semibold">
                      {stock.currentPrice}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Avg: {stock.avgPrice}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-gray-500 text-xs">P&L</p>
                    <p
                      className={`font-semibold ${stock.pnl.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                    >
                      {stock.pnl} ({stock.pnlPercent})
                    </p>
                  </div>
                  <button className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-lg text-sm font-medium">
                    Trade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="px-4 mt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-gray-900 text-lg font-bold">
              Recent Transactions
            </h2>
            <button className="text-blue-600 text-sm font-semibold">
              View All
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {recentTransactions.map((tx, index) => (
              <div
                key={tx.id}
                className={`px-4 py-3 ${index !== recentTransactions.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        tx.type === "Buy" ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      <span
                        className={`text-xs font-bold ${
                          tx.type === "Buy" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {tx.type}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">{tx.symbol}</p>
                      <p className="text-gray-400 text-xs">
                        {tx.quantity} shares • {tx.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs">{tx.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation - Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <button className="flex flex-col items-center text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
              <span className="text-xs mt-1 font-medium">Dashboard</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-xs mt-1">Markets</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="text-xs mt-1">Trade</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 2V9m0 1v1m0 2V12m0 1v1m0 2V16m0 1v1"
                />
              </svg>
              <span className="text-xs mt-1">Portfolio</span>
            </button>
            <button className="flex flex-col items-center text-gray-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
