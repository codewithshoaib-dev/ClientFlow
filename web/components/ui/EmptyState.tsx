
import { Button } from "./Button";

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-card border border-dashed border-border p-12 text-center">
      <p className="font-display italic text-lg text-ink">{title}</p>
      <p className="max-w-sm text-sm text-ink-secondary">{description}</p>
      {actionLabel && onAction && (
        <Button size="sm" className="mt-2" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
