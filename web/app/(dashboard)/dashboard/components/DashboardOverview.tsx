import { StatCard } from "./StatCard";
import { OverdueInvoicesSection } from "./OverdueInvoicesSection";
import { UpcomingBookingsSection } from "./UpcomingBookingsSection";
import { NeedsAttentionSection } from "./NeedsAttentionSection";
import { ActivityFeedSection } from "./ActivityFeedSection";
import { formatMoney } from "@/lib/format";
import type { DashboardSummary } from "@/types/Dashboard";

interface DashboardOverviewProps {
  summary: DashboardSummary;
}

export function DashboardOverview({ summary }: DashboardOverviewProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-3xl italic text-ink">Good morning</h1>
        <p className="mt-1 text-sm text-ink-secondary">
          Here&apos;s what&apos;s happening across your clients.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="Active projects"
          value={String(summary.activeProjects)}
          delta={{
            value: summary.activeProjectsDelta,
            direction: summary.activeProjectsDelta >= 0 ? "up" : "down",
            tone: "positive",
          }}
        />
        <StatCard
          label="Outstanding"
          value={formatMoney(summary.outstandingCents)}
          hint={`${summary.overdueInvoices.length} overdue`}
        />
        <StatCard
          label="Calls this week"
          value={String(summary.upcomingBookings.length)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <OverdueInvoicesSection invoices={summary.overdueInvoices} />
        <UpcomingBookingsSection bookings={summary.upcomingBookings} />
        <NeedsAttentionSection projects={summary.needsAttention} />
        <ActivityFeedSection events={summary.recentActivity} />
      </div>
    </div>
  );
}
