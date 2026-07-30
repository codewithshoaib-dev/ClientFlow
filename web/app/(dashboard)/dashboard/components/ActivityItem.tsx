import { Avatar } from "@/components/ui/Avatar";
import { formatRelativeTime } from "@/lib/format";
import type { ActivityEvent, ActivityKind } from "@/types/Dashboard";

// Maps event kind -> icon glyph. Kept as plain characters instead of pulling
// in an icon library for four glyphs — revisit if the activity feed grows
// more event kinds (would rather import lucide-react at that point than
// keep adding one-off unicode glyphs).
const kindGlyph: Record<ActivityKind, string> = {
  comment: "💬",
  booking: "📅",
  invoice_paid: "✓",
  invoice_sent: "→",
};

interface ActivityItemProps {
  event: ActivityEvent;
}

export function ActivityItem({ event }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <Avatar name={event.client.name} size="sm" />
      <div className="min-w-0 flex-1">
        <p className="text-sm text-ink">
          <span className="font-medium">{event.client.name}</span>{" "}
          <span className="text-ink-secondary">{event.summary}</span>
        </p>
        <p className="text-xs text-ink-secondary">{event.project.name}</p>
      </div>
      <span
        className="shrink-0 text-xs text-ink-secondary"
        title={new Date(event.createdAt).toLocaleString()}
      >
        {formatRelativeTime(event.createdAt)}
      </span>
    </div>
  );
}
