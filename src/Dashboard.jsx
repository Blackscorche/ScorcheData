import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "./components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Import dashboard sections
import Users from "@/components/AdminDashboardPages/Users";
import Transactions from "@/components/AdminDashboardPages/Transactions";
import Services from "@/components/AdminDashboardPages/DashServices";
import Settings from "@/components/AdminDashboardPages/Settings";

// Define main Dashboard content
import { RevenueChart } from "./components/RevenueChart";
import { UserGrowthChart } from "./components/UserGrowthChart";
import { VtuSalesChart } from "./components/VtuSalesChart";
import { OrdersOverviewChart } from "./components/OrdersOverview";
import { RecentTransactionsTable } from "./components/RecentTransactionsTable";
import { TopSellingProductsTable } from "./components/TopSellingProductsTable";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Function to render the selected section
  const renderContent = () => {
    switch (activeSection) {
      case "users":
        return <Users />;
      case "transactions":
        return <Transactions />;
      case "services":
        return <Services />;
      case "settings":
        return <Settings />;
      default:
        return (
          <>
            {/* Overview Cards */}
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="p-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                <h2 className="text-lg font-semibold">Total Users</h2>
                <p className="text-3xl font-bold">10,230</p>
              </div>
              <div className="p-6 rounded-xl bg-red-500 backdrop-blur-2xl shadow-lg">
                <h2 className="text-lg font-semibold">Total Transactions</h2>
                <p className="text-3xl font-bold">45,678</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                <h2 className="text-lg font-semibold">Total Revenue</h2>
                <p className="text-3xl font-bold">₦5,420,000</p>
              </div>
            </div>

            {/* Graph & Analytics */}
            <div className="grid auto-rows-min gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-red-250">
                <RevenueChart />
              </div>
              <div className="rounded-xl shadow-lg border border-red-250">
                <UserGrowthChart />
              </div>
              <div className="rounded-xl shadow-lg border border-red-250">
                <VtuSalesChart />
              </div>
              <div className="rounded-xl shadow-lg border border-red-250">
                <OrdersOverviewChart />
              </div>
            </div>

            <TopSellingProductsTable />
            <RecentTransactionsTable />
          </>
        );
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar setActiveSection={setActiveSection} />
      <SidebarInset>
        {/* HEADER */}
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 text-white">
          <SidebarTrigger className="-ml-1 text-white" />
          <Separator orientation="vertical" className="mr-2 h-4 border-gray-600" />
          <ModeToggle />
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="flex flex-1 flex-col gap-4 p-4 text-white">
          {renderContent()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
