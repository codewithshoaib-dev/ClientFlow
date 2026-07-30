import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  delta?: {
    value: number;
    direction: "up" | "down";
    tone: "positive" | "negative"; // "up" isn't always good (e.g. overdue invoices)
  };
  hint?: string;
}

export function StatCard({ label, value, delta, hint }: StatCardProps) {
  return (
    <div className="rounded-card border border-border bg-surface p-5">
      <p className="text-sm text-ink-secondary">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-3xl italic text-ink">{value}</span>
        {delta && (
          <span
            className={cn(
              "text-sm font-medium",
              delta.tone === "positive"
                ? "text-success-text"
                : "text-danger-text",
            )}
          >
            {delta.direction === "up" ? "↑" : "↓"} {Math.abs(delta.value)}
          </span>
        )}
      </div>
      {hint && <p className="mt-1 text-xs text-ink-secondary">{hint}</p>}
    </div>
  );
}
