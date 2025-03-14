import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaWallet, FaPlusCircle, FaExchangeAlt } from "react-icons/fa";

export default function UserDashboard() {
  return (
    <div className="p-6 text-white">
      {/* Balance Card */}
      <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg p-5">
        <CardHeader>
          <CardTitle className="text-xl">Wallet Balance</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">₦ 25,000.00</h2>
            <p className="text-sm opacity-80">Available Balance</p>
          </div>
          <FaWallet className="text-5xl opacity-80" />
        </CardContent>
      </Card>

      {/* Bottom Sections */}
      <div className="grid gap-4 md:grid-cols-3 mt-6">
        {/* Deposit Funds */}
        <Card className="bg-red-500 shadow-lg p-4 text-center">
          <CardContent>
            <FaPlusCircle className="text-4xl mx-auto mb-2" />
            <CardTitle className="text-lg font-semibold">Deposit Funds</CardTitle>
            <p className="text-sm opacity-80">Add money to your wallet</p>
            <Button variant="outline" className="mt-3 w-full">
              Deposit Now
            </Button>
          </CardContent>
        </Card>

        {/* Top-Up */}
        <Card className="bg-orange-500 shadow-lg p-4 text-center">
          <CardContent>
            <FaExchangeAlt className="text-4xl mx-auto mb-2" />
            <CardTitle className="text-lg font-semibold">Top-Up</CardTitle>
            <p className="text-sm opacity-80">Buy airtime & data</p>
            <Button variant="outline" className="mt-3 w-full">
              Top-Up Now
            </Button>
          </CardContent>
        </Card>

        {/* Wallet Summary */}
        <Card className="bg-green-500 shadow-lg p-4 text-center">
          <CardContent>
            <FaWallet className="text-4xl mx-auto mb-2" />
            <CardTitle className="text-lg font-semibold">Wallet Summary</CardTitle>
            <p className="text-sm opacity-80">Check recent transactions</p>
            <Button variant="outline" className="mt-3 w-full">
              View Summary
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
