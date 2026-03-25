import { TopNavbar } from "./components/navbar";
import StatCard from "./components/stat-card";

export default function LandingPageContent() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[12%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute left-1/2 top-[20%] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,80,255,0.08),transparent_35%)]" />
      </div>

      {/* Navbar */}
      <TopNavbar />

      {/* Hero */}
      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-16 text-center lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          Live Cars Available For Investments
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block">Build Wealth Through</span>
          <span className="block bg-gradient-to-r from-violet-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
            Premium Automotive
          </span>
          <span className="block">Assets</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
          Access professionally managed automotive investments. Participate in
          fractional ownership of luxury, exotic, and collectible vehicles.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:scale-[1.02]">
            Start Investing
          </button>

          <button className="inline-flex min-w-[140px] items-center justify-center rounded-full border border-white/5 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/[0.06]">
            View ROI
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="$1.2M" label="Cars Under Management" />
          <StatCard value="+46.3%" label="Avg. Annual Return" highlight />
          <StatCard value="167" label="Active Investors" />
          <StatCard value="14" label="Vehicles Funded" />
        </div>
      </section>
    </main>
  );
}
