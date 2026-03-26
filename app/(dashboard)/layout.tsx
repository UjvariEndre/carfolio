import type { ReactNode } from "react";
import NavBar from "@/app/shared/components/navbar";
import NavTabs from "@/app/shared/components/navtabs";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#05060b] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,80,255,0.12),transparent_30%)]" />
        <div className="absolute left-1/4 top-40 h-[420px] w-[420px] rounded-full bg-violet-700/10 blur-[140px]" />
        <div className="absolute right-1/4 top-[30%] h-[320px] w-[320px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      <header className="relative z-10 border-b border-white/8 bg-black/20 backdrop-blur-sm">
        <NavBar />
        <NavTabs />
      </header>

      {children}
    </main>
  );
}
