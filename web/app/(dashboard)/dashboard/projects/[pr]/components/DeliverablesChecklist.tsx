"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Deliverable } from "@/types/Dashboard";

interface DeliverablesChecklistProps {
  initialDeliverables: Deliverable[];
}

// Local-only toggle for now — mock data has no persistence layer yet.
// When wired to the backend this becomes a mutation (React Query
// useMutation) with optimistic update, not raw useState; the toggle
// handler is written narrow enough that swapping the state source later
// shouldn't touch the render logic below.
export function DeliverablesChecklist({
  initialDeliverables,
}: DeliverablesChecklistProps) {
  const [deliverables, setDeliverables] = useState(initialDeliverables);
  const doneCount = deliverables.filter((d) => d.done).length;

  function toggle(id: string) {
    setDeliverables((prev) =>
      prev.map((d) => (d.id === id ? { ...d, done: !d.done } : d)),
    );
  }

  return (
    <div className="rounded-card border border-border bg-surface p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-medium text-ink">Deliverables</h2>
        <span className="text-xs text-ink-secondary">
          {doneCount}/{deliverables.length} done
        </span>
      </div>
      <ul className="flex flex-col gap-1">
        {deliverables.map((deliverable) => (
          <li key={deliverable.id}>
            <button
              type="button"
              onClick={() => toggle(deliverable.id)}
              aria-pressed={deliverable.done}
              className="flex w-full items-center gap-3 rounded-card px-2 py-2 text-left transition-colors hover:bg-background"
            >
              <span
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                  deliverable.done
                    ? "border-accent bg-accent text-surface"
                    : "border-border bg-surface",
                )}
                aria-hidden="true"
              >
                {deliverable.done && (
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                    <path
                      d="M2 6l2.5 2.5L10 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span
                className={cn(
                  "text-sm",
                  deliverable.done
                    ? "text-ink-secondary line-through"
                    : "text-ink",
                )}
              >
                {deliverable.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
