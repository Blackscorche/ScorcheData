import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Home, CreditCard, Wallet, Settings, LogOut } from "lucide-react"; // Import icons

import scorcheLogo from '../assets/Red.jpeg'; 

// Navigation items for users (No Admin Controls)
const userNavData = [
  { title: "Dashboard", section: "dashboard", icon: <Home className="w-5 h-5" /> },
  { title: "Deposit", section: "deposit", icon: <Wallet className="w-5 h-5" /> },
  { title: "Transactions", section: "transactions", icon: <CreditCard className="w-5 h-5" /> },
  { title: "Settings", section: "settings", icon: <Settings className="w-5 h-5" /> },
  { title: "Logout", section: "logout", icon: <LogOut className="w-5 h-5 text-red-500" /> },
];

export function UserSidebar({ setActiveSection, ...props }) {
  return (
    <Sidebar {...props} className="bg-gray-900 text-white">
      <SidebarHeader>
        <h2 className="text-2xl font-bold m-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent flex flex-col items-center justify-center">
          <img src={scorcheLogo} alt="" className="rounded-full mb-4 border-3 border-orange-700 shadow-lg w-16 h-16" />
          Welcome, User!
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {userNavData.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <button
                  onClick={() => setActiveSection(item.section)}
                  className="flex items-center gap-4 p-5 mb-4 w-full text-left hover:bg-gray-800 rounded-lg cursor-pointer text-lg"
                >
                  {item.icon} {item.title}
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
