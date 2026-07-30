// Stripe amounts are cents everywhere in this codebase (matches Stripe's own
// API convention) so formatMoney is the single place float rounding could
// bite us — never divide ad hoc at the call site.
export function formatMoney(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

// Naive relative-time formatter — fine for mock data / dashboard "recent
// activity" feed. If this needs to go further than days, pull in a real
// library (date-fns) rather than extending this by hand.
export function formatRelativeTime(
  iso: string,
  now: Date = new Date(),
): string {
  const diffMs = now.getTime() - new Date(iso).getTime();
  const diffMins = Math.round(diffMs / 60_000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;

  const diffHours = Math.round(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.round(diffHours / 24);
  return `${diffDays}d ago`;
}

export function isOverdue(dueDateIso: string, now: Date = new Date()): boolean {
  return new Date(dueDateIso).getTime() < now.getTime();
}
