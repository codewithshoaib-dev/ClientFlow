import type { DashboardSummary, Project, Client } from "@/types/Dashboard";

// Frontend-shell phase: no backend calls yet (see PROJECT_OVERVIEW.md phase 1).
// This is the only file that should change when we wire real data in phase 2 —
// components consume DashboardSummary, not this shape directly.

const halberd: Client = {
  id: "cl_1",
  name: "Halberd Fitness",
};
const lumen: Client = {
  id: "cl_2",
  name: "Lumen Studio",

};
const northpeak: Client = {
  id: "cl_3",
  name: "Northpeak Legal",

};
const coastal: Client = {
  id: "cl_4",
  name: "Coastal Roasters",

};

const halberdSite: Project = {
  id: "pr_1",
  name: "Website redesign",
  client: halberd,
  status: "in_review",
  deliverablesTotal: 6,
  deliverablesDone: 5,
  dueDate: "2026-08-04",
};

const lumenBrand: Project = {
  id: "pr_2",
  name: "Brand refresh",
  client: lumen,
  status: "active",
  deliverablesTotal: 8,
  deliverablesDone: 3,
  dueDate: "2026-08-14",
};

const northpeakPortal: Project = {
  id: "pr_3",
  name: "Client intake portal",
  client: northpeak,
  status: "active",
  deliverablesTotal: 5,
  deliverablesDone: 1,
  dueDate: "2026-08-20",
};

const coastalMenu: Project = {
  id: "pr_4",
  name: "Digital menu system",
  client: coastal,
  status: "not_started",
  deliverablesTotal: 4,
  deliverablesDone: 0,
  dueDate: null,
};

export const mockDashboardSummary: DashboardSummary = {
  activeProjects: 7,
  activeProjectsDelta: 2,
  outstandingCents: 486000,

  overdueInvoices: [
    {
      id: "inv_1",
      project: halberdSite,
      amountCents: 240000,
      status: "overdue",
      dueDate: "2026-07-22",
    },
    {
      id: "inv_2",
      project: lumenBrand,
      amountCents: 96000,
      status: "overdue",
      dueDate: "2026-07-26",
    },
  ],

  upcomingBookings: [
    {
      id: "bk_1",
      client: northpeak,
      project: northpeakPortal,
      startsAt: "2026-07-30T18:00:00Z",
    },
    {
      id: "bk_2",
      client: coastal,
      project: null,
      startsAt: "2026-07-31T15:30:00Z",
    },
  ],

  needsAttention: [northpeakPortal, coastalMenu],

  recentActivity: [
    {
      id: "ev_1",
      kind: "comment",
      client: halberd,
      project: halberdSite,
      createdAt: "2026-07-30T09:12:00Z",
      summary: "left a comment on Website redesign",
    },
    {
      id: "ev_2",
      kind: "invoice_paid",
      client: coastal,
      project: coastalMenu,
      createdAt: "2026-07-29T16:40:00Z",
      summary: "paid invoice #INV-0043",
    },
    {
      id: "ev_3",
      kind: "booking",
      client: northpeak,
      project: northpeakPortal,
      createdAt: "2026-07-29T11:05:00Z",
      summary: "booked a call for Wed, Jul 30",
    },
    {
      id: "ev_4",
      kind: "invoice_sent",
      client: lumen,
      project: lumenBrand,
      createdAt: "2026-07-28T14:22:00Z",
      summary: "was sent invoice #INV-0044",
    },
  ],
};
