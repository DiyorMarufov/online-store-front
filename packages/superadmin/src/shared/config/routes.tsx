import { type ReactNode } from "react";
import { LayoutDashboard, Settings, User, Wallet } from "lucide-react";

export interface SidebarNavItem {
  id: number;
  to: string;
  label: string;
  icon: ReactNode;
}

export const SidebarNavigation: SidebarNavItem[] = [
  {
    id: 1,
    to: "/",
    label: "Overview",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    id: 2,
    to: "/users",
    label: "Users",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: 3,
    to: "/wallet",
    label: "Wallet",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    id: 4,
    to: "/settings",
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
  },
];
