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
import { Home, Users, CreditCard, LogOut, Settings2Icon } from "lucide-react"; // Importing icons

import scorcheLogo from '../assets/Red.jpeg'; 
const navData = [
  { title: "Dashboard", section: "dashboard", icon: <Home className="w-5 h-5" /> },
  { title: "Users", section: "users", icon: <Users className="w-5 h-5" /> },
  { title: "Transactions", section: "transactions", icon: <CreditCard className="w-5 h-5" /> },
  { title: "Services", section: "services", icon: <Settings2Icon className="w-5 h-5" /> },
  { title: "Logout", section: "logout", icon: <LogOut className="w-5 h-5 text-red-500" /> },
];



export function AppSidebar({ setActiveSection, ...props }) {
  return (
    <Sidebar {...props} className="bg-gray-900 text-white">
      <SidebarHeader>
        <h2 className="text-2xl font-bold m-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent flex flex-col items-center justify-center">
          <img src={scorcheLogo} alt="" className="rounded-full mb-4 border-3 border-orange-700 shadow-lg" />
          Hi there, Scorche
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navData.map((item) => (
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
