import { useState } from "react";
import { FaEllipsisH, FaMoneyBillWave, FaDatabase, FaMobileAlt, FaWifi, FaShoppingBag, FaBolt, FaTv } from "react-icons/fa";

export default function UserDashboard() {
  const [user] = useState({
    name: "John Doe",
    balance: "₦8,640.00",
    percentageChange: "+4.35%",
  });

  return (
    <div className="min-h-screen bg-black text-white p-4 space-y-6">
      {/* Bank Card */}
      <div className="relative p-4 bg-[#121212] text-white rounded-2xl shadow-lg">
        {/* Profile & Options */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/50" // Replace with real profile image
              alt="User Profile"
              className="w-12 h-12 rounded-full border-2 border-gray-500"
            />
            <div>
              <p className="text-sm text-gray-400">Good Afternoon</p>
              <h2 className="text-lg font-bold">{user.name}</h2>
            </div>
          </div>
          <FaEllipsisH className="text-gray-400 text-lg" />
        </div>

        {/* Balance Info */}
        <div className="mt-4">
          <p className="text-sm text-gray-400">Available Balance</p>
          <h1 className="text-3xl font-bold">{user.balance}</h1>
          <p className="text-sm text-green-500">{user.percentageChange}</p>
        </div>
      </div>

      {/* Three Action Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 text-center rounded-xl shadow-lg">
          <FaMoneyBillWave className="text-3xl mx-auto" />
          <p className="text-sm font-semibold mt-2">Deposit</p>
        </div>
        <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 text-center rounded-xl shadow-lg">
          <FaDatabase className="text-3xl mx-auto" />
          <p className="text-sm font-semibold mt-2">Transactions</p>
        </div>
        <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 text-center rounded-xl shadow-lg">
          <FaMobileAlt className="text-3xl mx-auto" />
          <p className="text-sm font-semibold mt-2">Data Plans</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-[#1E1E1E] rounded-lg shadow-lg">
          <FaWifi className="text-2xl mx-auto text-red-500" />
          <p className="text-xs mt-1">Internet</p>
        </div>
        <div className="p-4 bg-[#1E1E1E] rounded-lg shadow-lg">
          <FaShoppingBag className="text-2xl mx-auto text-orange-500" />
          <p className="text-xs mt-1">Shopping</p>
        </div>
        <div className="p-4 bg-[#1E1E1E] rounded-lg shadow-lg">
          <FaBolt className="text-2xl mx-auto text-red-500" />
          <p className="text-xs mt-1">Electricity</p>
        </div>
        <div className="p-4 bg-[#1E1E1E] rounded-lg shadow-lg">
          <FaTv className="text-2xl mx-auto text-orange-500" />
          <p className="text-xs mt-1">TV</p>
        </div>
      </div>
    </div>
  );
}
