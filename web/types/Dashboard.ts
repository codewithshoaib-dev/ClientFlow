// Mirrors the shape drf-spectacular will eventually generate from the
// projects/invoicing/scheduling/comments serializers. Hand-written for now
// since we're still in the static-mock phase — replace with generated types
// once the OpenAPI schema exists (see ARCHITECTURE.md).

export type ProjectStatus = "not_started" | "active" | "in_review" | "done";

export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";

export interface Client {
  id: string;
  name: string;

}

export interface Project {
  id: string;
  name: string;
  client: Client;
  status: ProjectStatus;
  deliverablesTotal: number;
  deliverablesDone: number;
  dueDate: string | null; // ISO date
}

export interface Deliverable {
  id: string;
  label: string;
  done: boolean;
}

export interface Comment {
  id: string;
  author:
    | Client
    | { id: string; name: string; isFreelancer: true };
  body: string;
  createdAt: string; // ISO datetime
}

// The dashboard list view only needs deliverablesTotal/deliverablesDone
// (see Project below) — fetching every deliverable for a row in a list
// would be wasteful. ProjectDetail is the heavier shape for the single-
// project screen, where the full checklist and comment thread are needed.
export interface ProjectDetail extends Project {
  deliverables: Deliverable[];
  comments: Comment[];
}

export interface Invoice {
  id: string;
  project: Project;
  amountCents: number;
  status: InvoiceStatus;
  dueDate: string; // ISO date
}

export interface Booking {
  id: string;
  client: Client;
  project: Project | null;
  startsAt: string; // ISO datetime
}

export type ActivityKind =
  | "comment"
  | "booking"
  | "invoice_paid"
  | "invoice_sent";

export interface ActivityEvent {
  id: string;
  kind: ActivityKind;
  client: Client;
  project: Project;
  createdAt: string; // ISO datetime
  summary: string;
}

export interface DashboardSummary {
  activeProjects: number;
  activeProjectsDelta: number; // vs last week, can be negative
  outstandingCents: number;
  overdueInvoices: Invoice[];
  upcomingBookings: Booking[];
  needsAttention: Project[]; // e.g. stalled, no activity in N days
  recentActivity: ActivityEvent[];
}
