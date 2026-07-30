import { DashboardOverview } from "./components/DashboardOverview";
import { mockDashboardSummary } from "@/lib/mockDashboardData";

// Static mock data for now — see PROJECT_OVERVIEW.md phase 1. Swap this for
// a React Query hook (`useDashboardSummary()`) once the backend exists;
// DashboardOverview's props already match that future shape so the swap
// should just be replacing this one import.
export default function DashboardPage() {
  return <DashboardOverview summary={mockDashboardSummary} />;
}
