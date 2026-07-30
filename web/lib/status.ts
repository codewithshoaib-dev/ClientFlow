import type { ProjectStatus, InvoiceStatus } from "@/types/Dashboard";

// Single source of truth for status -> (tone, label). Every place that
// renders a StatusPill for a project or invoice should read from here
// instead of re-deriving tone/label locally — keeps invoicing and
// subscriptions (which will reuse StatusPill later) from drifting apart.

type Tone = "success" | "warning" | "danger" | "neutral";

const projectStatusMap: Record<ProjectStatus, { label: string; tone: Tone }> = {
  not_started: { label: "Not started", tone: "neutral" },
  active: { label: "Active", tone: "success" },
  in_review: { label: "In review", tone: "warning" },
  done: { label: "Done", tone: "neutral" },
};

const invoiceStatusMap: Record<InvoiceStatus, { label: string; tone: Tone }> = {
  draft: { label: "Draft", tone: "neutral" },
  sent: { label: "Sent", tone: "warning" },
  paid: { label: "Paid", tone: "success" },
  overdue: { label: "Overdue", tone: "danger" },
};

export function projectStatusMeta(status: ProjectStatus) {
  return projectStatusMap[status];
}

export function invoiceStatusMeta(status: InvoiceStatus) {
  return invoiceStatusMap[status];
}
