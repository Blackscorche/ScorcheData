import { useState } from "react";
import {
  FaPlusCircle,
  FaExchangeAlt,
  FaMobileAlt,
  FaGlobe,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import scorcheLogo from "@/assets/Red.jpeg";

export default function UserDashboard() {
  const [user] = useState({
    name: "ABUBAKAR",
    balance: "₦0.00",
    accountNumber: "366 819 5332",
    lastLogin: "Mar 14, 2025",
    level: 3,
  });

  const recentTransactions = [
    { id: 1, title: "Inter bank transfer out", amount: "₦3,310", type: "out" },
    { id: 2, title: "MTN 2G Data", amount: "₦1,500", type: "out" },
    { id: 3, title: "Transfer", amount: "₦2,000", type: "in" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-4 pb-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={scorcheLogo}
              alt="User Avatar"
              className="w-12 h-12 rounded-full border-2 border-white shrink-0"
            />
            <div>
              <p className="text-sm text-white/80">Hi {user.name.toUpperCase()}</p>
              <p className="text-xs text-white/70">Last login on {user.lastLogin}</p>
            </div>
          </div>
          <div className="text-center text-xs bg-black/20 px-2 py-1 rounded-full">
            Level {user.level}
          </div>
        </div>

        <div className="mt-6 bg-black/20 p-4 rounded-xl flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/80">Balance</p>
            <span className="bg-black/30 text-xs px-2 py-0.5 rounded-full">Account Number</span>
          </div>
          <h1 className="text-3xl font-bold">{user.balance}</h1>
          <div className="flex items-center justify-between mt-1">
            <div className="text-xs text-white/70">Acct: {user.accountNumber}</div>
            <button className="bg-green-500 hover:bg-green-600 text-xs px-2 py-1 rounded-full">
              View
            </button>
          </div>
        </div>
      </div>

      <div className="-mt-8 px-4 space-y-6">
        <div className="bg-[#1A1A1A] p-4 rounded-xl shadow-md flex items-center justify-around">
          {[FaPlusCircle, FaExchangeAlt, FaMobileAlt, FaGlobe].map((Icon, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div className="bg-black/30 p-2 rounded-full">
                <Icon size={24} />
              </div>
              <p className="text-xs">{["Add Funds", "Transfer", "Airtime", "Data"][index]}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-xl shadow-md text-center">
          <h2 className="text-sm font-bold mb-1">
            Unlock up to <span className="text-yellow-300">₦500</span> in bonuses
          </h2>
          <p className="text-xs text-white/70 mb-2">by upgrading your KYC level</p>
          <div className="bg-orange-500 hover:bg-orange-600 text-xs px-3 py-1 inline-block rounded-full">
            Limited Time Offer: Mar 10 - Apr 30, 2025
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-xl shadow-md">
          <h3 className="text-sm font-semibold mb-3">Recent transactions</h3>
          <div className="space-y-2">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between bg-black/20 rounded-lg px-3 py-2">
                <div className="flex items-center gap-2">
                  {tx.type === "in" ? (
                    <FaArrowDown className="text-green-400" />
                  ) : (
                    <FaArrowUp className="text-red-400" />
                  )}
                  <p className="text-xs sm:text-sm">{tx.title}</p>
                </div>
                <p className="text-xs sm:text-sm font-medium">{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
