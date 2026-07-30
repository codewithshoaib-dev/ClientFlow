"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { MessageBubble } from "./MessageBubble";
import { groupByCalendarDay } from "@/lib/format";
import type { Comment } from "@/types/Dashboard";

interface DayDividerProps {
  label: string;
}

function DayDivider({ label }: DayDividerProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-border" />
      <span className="whitespace-nowrap font-display text-sm italic text-ink-secondary">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

interface CommentThreadProps {
  initialComments: Comment[];
}

// "use client" because the composer needs input state. Posting doesn't go
// anywhere yet (no backend) — see PROJECT_OVERVIEW.md phase 1. When comments
// are wired up (phase 4, Django Channels), this becomes the natural place to
// mount a useProjectComments(projectId) hook per ARCHITECTURE.md's
// convention: websocket plumbing owned by the hook, never leaking into this
// component directly.
export function CommentThread({ initialComments }: CommentThreadProps) {
  const [comments, setComments] = useState(initialComments);
  const [draft, setDraft] = useState("");

  // groupByCalendarDay assumes oldest-first input — matches mock data order
  // and how the eventual API will paginate comments.
  const dayGroups = groupByCalendarDay(
    comments,
    (comment) => comment.createdAt,
  );

  function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();
    const body = draft.trim();
    if (!body) return;

    setComments((prev) => [
      ...prev,
      {
        id: `local_${Date.now()}`,
        author: {
          id: "fr_1",
          name: "You",
          avatarInitials: "ME",
          isFreelancer: true,
        },
        body,
        createdAt: new Date().toISOString(),
      },
    ]);
    setDraft("");
  }

  return (
    <div className="rounded-card border border-border bg-surface p-5">
      <div className="mb-1 flex items-baseline justify-between">
        <h2 className="text-sm font-medium text-ink">Comments</h2>
        <span className="text-xs text-ink-secondary">{comments.length}</span>
      </div>

      <div className="flex flex-col gap-4">
        {dayGroups.map((group) => (
          <div key={group.dayLabel} className="flex flex-col gap-3">
            <DayDivider label={group.dayLabel} />
            {group.items.map((comment) => (
              <MessageBubble key={comment.id} comment={comment} />
            ))}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-end gap-2 border-t border-border pt-4"
      >
        <Textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Leave a comment…"
          rows={1}
          className="min-h-0"
        />
        <Button
          type="submit"
          size="sm"
          disabled={!draft.trim()}
          className="shrink-0"
        >
          Comment
        </Button>
      </form>
    </div>
  );
}
