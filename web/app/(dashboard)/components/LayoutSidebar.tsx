"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, NAV_FOOTER_ITEMS } from "./NavConfig";
import { SidebarNavLink } from "./SidebarNavLink";

interface LayoutSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LayoutSidebar({ isOpen, onClose }: LayoutSidebarProps) {
  // Let Escape close the mobile drawer.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-background transition-transform duration-200 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="text-lg font-semibold tracking-tight">
            ClientFlow
          </span>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted lg:hidden"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {NAV_ITEMS.map((item) => (
            <SidebarNavLink key={item.href} item={item} onNavigate={onClose} />
          ))}
        </nav>

        <div className="space-y-1 border-t border-border px-3 py-3">
          {NAV_FOOTER_ITEMS.map((item) => (
            <SidebarNavLink key={item.href} item={item} onNavigate={onClose} />
          ))}
        </div>
      </aside>
    </>
  );
}
