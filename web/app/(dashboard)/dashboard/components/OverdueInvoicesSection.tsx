import Link from "next/link";
import { SectionCard } from "./SectionCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatMoney, formatShortDate } from "@/lib/format";
import type { Invoice } from "@/types/Dashboard";

interface OverdueInvoicesSectionProps {
  invoices: Invoice[];
}

export function OverdueInvoicesSection({
  invoices,
}: OverdueInvoicesSectionProps) {
  return (
    <SectionCard title="Overdue invoices">
      {invoices.length === 0 ? (
        <EmptyState
          title="Nothing overdue"
          description="Every invoice is paid or not yet due."
        />
      ) : (
        <ul className="divide-y divide-border">
          {invoices.map((invoice) => (
            <li key={invoice.id}>
              <Link
                href={`/dashboard/projects/${invoice.project.id}`}
                className="flex items-center justify-between gap-3 rounded-card py-2.5 px-2 transition-colors hover:bg-background"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">
                    {invoice.project.client.name}
                  </p>
                  <p className="truncate mt-1.5 text-xs text-danger-text">
                    Due {formatShortDate(invoice.dueDate)}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-medium text-ink">
                  {formatMoney(invoice.amountCents)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </SectionCard>
  );
}
