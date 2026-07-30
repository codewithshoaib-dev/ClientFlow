import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { StatusPill } from "@/components/ui/StatusPill";
import { projectStatusMeta } from "@/lib/status";
import { formatShortDate } from "@/lib/format";
import type { Project } from "@/types/Dashboard";

interface ClientProjectRowProps {
  project: Project;
}

export function ClientProjectRow({ project }: ClientProjectRowProps) {
  const { label, tone } = projectStatusMeta(project.status);
  const deliverablesLabel = `${project.deliverablesDone}/${project.deliverablesTotal} done`;

  return (
    <Link
      href={`/dashboard/projects/${project.id}`}
      className="flex items-center gap-3 rounded-card px-2 py-2.5 transition-colors hover:bg-background"
    >
      <Avatar name={project.client.name} size="sm" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-ink">{project.name}</p>
        <p className="truncate text-xs text-ink-secondary">
          {project.client.name} · {deliverablesLabel}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {project.dueDate && (
          <span className="text-xs text-ink-secondary">
            {formatShortDate(project.dueDate)}
          </span>
        )}
        <StatusPill tone={tone}>{label}</StatusPill>
      </div>
    </Link>
  );
}
