import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  KanbanSquare,
  Users,
  CreditCard,
  Settings,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/projects", icon: KanbanSquare },
  { label: "Clients", href: "/clients", icon: Users },
  { label: "Billing", href: "/billing", icon: CreditCard },
];

export const NAV_FOOTER_ITEMS: NavItem[] = [
  { label: "Settings", href: "/settings", icon: Settings },
];
