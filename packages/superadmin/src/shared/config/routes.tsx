import { type ReactNode } from "react";
import {
  LayoutDashboard,
  ListPlus,
  Settings,
  ShoppingCart,
  User,
  Wallet,
} from "lucide-react";

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
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    id: 2,
    to: "/orders",
    label: "Orders",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    id: 3,
    to: "/products",
    label: "Products",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    id: 4,
    to: "/product-attr",
    label: "Product Attributes",
    icon: <ListPlus className="w-5 h-5" />,
  },
  {
    id: 5,
    to: "/admins",
    label: "Admins",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: 6,
    to: "/merchants",
    label: "Merchants",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: 7,
    to: "/wallet",
    label: "Wallet",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    id: 8,
    to: "/settings",
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
  },
];
