interface SectionCardProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export function SectionCard({ title, action, children }: SectionCardProps) {
  return (
    <div className="rounded-card border border-border bg-surface p-5">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-sm font-medium text-ink">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}
