import { SectionCard } from "./SectionCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Avatar } from "@/components/ui/Avatar";
import { formatShortDate, formatTime } from "@/lib/format";
import type { Booking } from "@/types/Dashboard";

interface UpcomingBookingsSectionProps {
  bookings: Booking[];
}

export function UpcomingBookingsSection({
  bookings,
}: UpcomingBookingsSectionProps) {
  return (
    <SectionCard title="Upcoming calls">
      {bookings.length === 0 ? (
        <EmptyState
          title="No calls booked"
          description="Share your booking link to fill your calendar."
        />
      ) : (
        <ul className="divide-y divide-border">
          {bookings.map((booking) => (
            <li key={booking.id} className="flex items-center gap-3 py-2.5">
              <Avatar name={booking.client.name} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">
                  {booking.client.name}
                </p>
                {booking.project && (
                  <p className="truncate text-xs text-ink-secondary">
                    {booking.project.name}
                  </p>
                )}
              </div>
              <div className="shrink-0 text-right text-xs text-ink-secondary">
                <p>{formatShortDate(booking.startsAt)}</p>
                <p>{formatTime(booking.startsAt)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </SectionCard>
  );
}
