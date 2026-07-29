
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r border-border p-4" /> {/* sidebar nav */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
