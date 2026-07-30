import { SectionCard } from "./SectionCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ActivityItem } from "./ActivityItem";
import type { ActivityEvent } from "@/types/Dashboard";

interface ActivityFeedSectionProps {
  events: ActivityEvent[];
}

export function ActivityFeedSection({ events }: ActivityFeedSectionProps) {
  return (
    <SectionCard title="Recent activity">
      {events.length === 0 ? (
        <EmptyState
          title="Quiet for now"
          description="Client activity will show up here."
        />
      ) : (
        <div className="divide-y divide-border">
          {events.map((event) => (
            <ActivityItem key={event.id} event={event} />
          ))}
        </div>
      )}
    </SectionCard>
  );
}
