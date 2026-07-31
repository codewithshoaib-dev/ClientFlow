import { ProjectHeader } from "./components/ProjectHeader";
import { DeliverablesChecklist } from "./components/DeliverablesChecklist";
import { CommentThread } from "./components/CommentThread";
import { mockProjectDetail } from "@/lib/mockProjectDetail";

// Static mock data keyed by nothing yet — every :id resolves to the same
// project for now. Swap for a real fetch-by-id (or notFound() on miss) once
// the backend exists; see mock-project-detail.ts for the swap point.
export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = mockProjectDetail;

  return (
    <div className="flex flex-col gap-6">
      <ProjectHeader project={project} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr]">
        <DeliverablesChecklist initialDeliverables={project.deliverables} />
        <CommentThread initialComments={project.comments} />
      </div>
    </div>
  );
}
