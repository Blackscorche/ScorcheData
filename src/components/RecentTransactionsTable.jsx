"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const transactions = [
  { id: "#00123", user: "John Doe", product: "MTN 10GB Data", amount: "₦2,000", status: "Completed" },
  { id: "#00124", user: "Jane Smith", product: "Glo 5GB Data", amount: "₦1,500", status: "Pending" },
  { id: "#00125", user: "David Kim", product: "Airtel 2GB Data", amount: "₦800", status: "Completed" },
  { id: "#00126", user: "Emma Brown", product: "9Mobile 1.5GB Data", amount: "₦950", status: "Failed" },
];

export function RecentTransactionsTable() {
  return (
    <Card className="bg-transparent rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold bg-gradient-to-r from-red-500 via-orange-500 to-black text-transparent bg-clip-text">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse hidden sm:table">
            <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <tr className="text-sm border-b border-gray-700/50">
                <th className="p-3 text-gray-400">Transaction ID</th>
                <th className="p-3 text-gray-400">User</th>
                <th className="p-3 text-gray-400">Product</th>
                <th className="p-3 text-gray-400">Amount</th>
                <th className="p-3 text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr
                  key={tx.id}
                  className={`hover:bg-red-100/10 transition cursor-pointer ${
                    index !== transactions.length - 1 ? "border-b border-gray-700/50" : ""
                  }`}
                >
                  <td className="p-3 text-gray-300">{tx.id}</td>
                  <td className="p-3 text-gray-300">{tx.user}</td>
                  <td className="p-3 text-gray-300">{tx.product}</td>
                  <td className="p-3 text-gray-300">{tx.amount}</td>
                  <td
                    className={`p-3 font-medium ${
                      tx.status === "Completed"
                        ? "text-green-400"
                        : tx.status === "Pending"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {tx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Card View for Small Screens */}
        <div className="sm:hidden">
          {transactions.map((tx) => (
            <div key={tx.id} className="border border-gray-700/50 rounded-lg p-4 mb-3">
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Transaction ID:</span> {tx.id}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">User:</span> {tx.user}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Product:</span> {tx.product}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Amount:</span> {tx.amount}
              </p>
              <p
                className={`font-semibold ${
                  tx.status === "Completed"
                    ? "text-green-400"
                    : tx.status === "Pending"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {tx.status}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
