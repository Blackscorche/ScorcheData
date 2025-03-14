"use client";

import * as React from "react";
import { TrendingUp, ArrowDown, ArrowUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const transactions = [
  { id: 1, user: "John Doe", amount: 2500, status: "Completed", date: "2025-03-13" },
  { id: 2, user: "Jane Smith", amount: 780, status: "Pending", date: "2025-03-12" },
  { id: 3, user: "Michael Johnson", amount: 1300, status: "Completed", date: "2025-03-11" },
  { id: 4, user: "Sarah Brown", amount: 540, status: "Failed", date: "2025-03-10" },
  { id: 5, user: "David Wilson", amount: 970, status: "Completed", date: "2025-03-09" },
];

// Get stats
const totalTransactions = transactions.length;
const successfulTransactions = transactions.filter(t => t.status === "Completed").length;
const failedTransactions = transactions.filter(t => t.status === "Failed").length;

export default function Transactions() {
  return (
    <div className="space-y-6">
      {/* 📊 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Transactions</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-3xl font-bold">{totalTransactions}</span>
            <TrendingUp className="h-6 w-6 text-blue-500" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Successful Transactions</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-3xl font-bold text-green-500">{successfulTransactions}</span>
            <ArrowUp className="h-6 w-6 text-green-500" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Failed Transactions</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-3xl font-bold text-red-500">{failedTransactions}</span>
            <ArrowDown className="h-6 w-6 text-red-500" />
          </CardContent>
        </Card>
      </div>

      {/* 📑 Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Overview of latest transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-center">Amount</th>
                  <th className="py-3 px-6 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-6 text-left">{transaction.date}</td>
                    <td className="py-3 px-6 text-left">{transaction.user}</td>
                    <td className="py-3 px-6 text-center">${transaction.amount.toLocaleString()}</td>
                    <td className="py-3 px-6 text-center">
                      <span
                        className={`py-1 px-3 rounded-full text-xs font-semibold ${
                          transaction.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : transaction.status === "Pending"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
