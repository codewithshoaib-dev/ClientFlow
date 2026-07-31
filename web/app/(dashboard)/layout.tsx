import { LayoutShell } from "./components/LayoutShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutShell children={children} />;
}
