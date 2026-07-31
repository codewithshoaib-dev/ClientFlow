import { cn } from "@/lib/utils";
import { formatTime } from "@/lib/format";
import type { Comment } from "@/types/Dashboard";

interface MessageBubbleProps {
  comment: Comment;
}

export function MessageBubble({ comment }: MessageBubbleProps) {
  const isMine =
    "isFreelancer" in comment.author && comment.author.isFreelancer;

  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        !isMine ? "items-start" : "items-end",
      )}
    >
      <div
        className={cn(
          "flex items-start gap-2.5",
          !isMine ? "flex-row" : "flex-row-reverse",
        )}
      >
        <span
          className={cn(
            "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
            isMine
              ? "bg-accent/15 text-accent-hover"
              : "bg-accent text-surface",
          )}
          aria-hidden="true"
        >
          {comment.author.name}
        </span>
        <div
          className={cn(
            "max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed text-ink",
            isMine
              ? "rounded-bl-md bg-background"
              : "rounded-br-md border border-border bg-surface",
          )}
        >
          {comment.body}
        </div>
      </div>
      <span
        className={cn("text-xs text-ink-secondary", isMine ? "ml-9" : "mr-9")}
      >
        {formatTime(comment.createdAt)}
      </span>
    </div>
  );
}
