import { Sidebar } from "@/components/navigation/Sidebar";
import { BottomBar } from "@/components/navigation/BottomBar";

export default function CommandmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Sidebar />
      <main className="lg:ml-64">{children}</main>
      <BottomBar />
    </div>
  );
}
