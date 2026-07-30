import type { ProjectDetail } from "@/types/Dashboard";

// Matches pr_1 (Halberd Fitness / Website redesign) from mock-dashboard-data.ts
// so the dashboard's "Website redesign" link resolves to something real.
// Once the backend exists this becomes a fetch by :id instead of a constant.
export const mockProjectDetail: ProjectDetail = {
  id: "pr_1",
  name: "Website redesign",
  client: { id: "cl_1", name: "Halberd Fitness", },
  status: "in_review",
  deliverablesTotal: 6,
  deliverablesDone: 5,
  dueDate: "2026-08-04",

  deliverables: [
    { id: "dl_1", label: "Wireframes approved", done: true },
    { id: "dl_2", label: "Homepage design", done: true },
    { id: "dl_3", label: "Class schedule page", done: true },
    { id: "dl_4", label: "Membership pricing page", done: true },
    { id: "dl_5", label: "Mobile responsive pass", done: true },
    { id: "dl_6", label: "Client final review", done: false },
  ],

  comments: [
    {
      id: "cm_1",
      author: {
        id: "fr_1",
        name: "You",
        isFreelancer: true,
      },
      body: "Homepage and pricing page are ready for review — mobile pass is up next.",
      createdAt: "2026-07-27T14:10:00Z",
    },
    {
      id: "cm_2",
      author: { id: "cl_1", name: "Halberd Fitness" },
      body: "Looks great! Can we swap the hero image for something with more energy?",
      createdAt: "2026-07-28T09:30:00Z",
    },
    {
      id: "cm_3",
      author: {
        id: "fr_1",
        name: "You",
        isFreelancer: true,
      },
      body: "Sent over three options in the shared folder, let me know which lands.",
      createdAt: "2026-07-28T11:05:00Z",
    },
    {
      id: "cm_4",
      author: { id: "cl_1", name: "Halberd Fitness" },
      body: "The second one — sending final feedback by end of week.",
      createdAt: "2026-07-30T09:12:00Z",
    },
  ],
};
