"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "./NavConfig";

interface SidebarNavLinkProps {
  item: NavItem;
  onNavigate?: () => void;
}

export function SidebarNavLink({ item, onNavigate }: SidebarNavLinkProps) {
  const pathname = usePathname();

  // Root path needs an exact match, or "/" would stay highlighted on every route.
  // Everything else matches on prefix so /clients/123 still highlights "Clients".
  const isActive =
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex items-center gap-3 rounded-md border-l-2 px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "border-primary bg-primary/10 text-primary"
          : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      {item.label}
    </Link>
  );
}
