import { SectionCard } from "./SectionCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ClientProjectRow } from "./ClientProjectRow";
import type { Project } from "@/types/Dashboard";

interface NeedsAttentionSectionProps {
  projects: Project[];
}

export function NeedsAttentionSection({
  projects,
}: NeedsAttentionSectionProps) {
  return (
    <SectionCard title="Needs attention">
      {projects.length === 0 ? (
        <EmptyState
          title="All caught up"
          description="No stalled projects right now."
        />
      ) : (
        <div className="flex flex-col">
          {projects.map((project) => (
            <ClientProjectRow key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionCard>
  );
}
