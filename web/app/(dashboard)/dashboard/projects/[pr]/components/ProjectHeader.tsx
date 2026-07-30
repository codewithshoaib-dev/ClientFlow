import { Avatar } from "@/components/ui/Avatar";
import { StatusPill } from "@/components/ui/StatusPill";
import { projectStatusMeta } from "@/lib/status";
import { formatShortDate } from "@/lib/format";
import type { ProjectDetail } from "@/types/Dashboard";

interface ProjectHeaderProps {
  project: ProjectDetail;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const { label, tone } = projectStatusMeta(project.status);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-3">
        <Avatar name={project.client.name} />
        <div>
          <h1 className="font-display text-3xl italic text-ink">
            {project.name}
          </h1>
          <p className="mt-1 text-sm text-ink-secondary">
            {project.client.name}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {project.dueDate && (
          <span className="text-sm text-ink-secondary">
            Due {formatShortDate(project.dueDate)}
          </span>
        )}
        <StatusPill tone={tone}>{label}</StatusPill>
      </div>
    </div>
  );
}
