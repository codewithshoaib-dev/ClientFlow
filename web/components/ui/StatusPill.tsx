
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pillVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-medium",
  {
    variants: {
      tone: {
        success: "bg-success text-success-text",
        warning: "bg-warning text-warning-text",
        danger: "bg-danger text-danger-text",
        neutral: "bg-surface text-ink-secondary border border-border",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export interface StatusPillProps extends VariantProps<typeof pillVariants> {
  children: React.ReactNode;
  className?: string;
}

export function StatusPill({ tone, children, className }: StatusPillProps) {
  return (
    <span className={cn(pillVariants({ tone }), className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
