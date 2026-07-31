import { Menu, Search, Bell } from "lucide-react";

interface LayoutTopbarProps {
  onMenuClick: () => void;
}

export function LayoutTopbar({ onMenuClick }: LayoutTopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-md p-1.5 text-muted-foreground hover:bg-muted lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Search clients, invoices..."
          className="w-full rounded-md border border-border bg-muted/40 py-2 pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button
          className="relative rounded-md p-1.5 text-muted-foreground hover:bg-muted"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
        </button>

        <button
          className="flex items-center gap-2 rounded-full"
          aria-label="Account menu"
        >
          <img
            src="/avatar-placeholder.png"
            alt=""
            className="h-8 w-8 rounded-full border border-border object-cover"
          />
        </button>
      </div>
    </header>
  );
}
