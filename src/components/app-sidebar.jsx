import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Home, Users, CreditCard, Settings, LogOut } from "lucide-react"; // Importing icons

const navData = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Transactions",
    url: "/admin/transactions",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    title: "Services",
    url: "/admin/services",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: <LogOut className="w-5 h-5 text-red-500" />,
  },
];

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props} className="bg-gray-900 text-white">
      <SidebarHeader>
        <h2 className="text-2xl font-bold m-3 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Hi there, Admin
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navData.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url} className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg">
                  {item.icon} {item.title}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
