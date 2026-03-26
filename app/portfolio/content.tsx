import { Car, PieChart, TrendingUp, Wallet } from "lucide-react";
import { ActivityRow } from "../shared/components/activity-row";
import NavBar from "../shared/components/navbar";
import NavTabs from "../shared/components/navtabs";
import { StatCard } from "../shared/components/stat-card";
import { activities, holdings } from "../shared/data/portfolio-data";
import { AllocationRow } from "./components/allocation-row";
import { HoldingRow } from "./components/holding-row";

export default function PortfolioPageContent() {
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

      <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-16 pt-10">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight">Portfolio</h1>
          <p className="mt-2 text-lg text-white/45">
            Track your assets, returns, and portfolio allocation
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={<Wallet className="h-5 w-5 text-violet-400" />}
            title="Total Invested"
            value="$55,500"
            subtitle="Across 3 vehicles"
          />
          <StatCard
            icon={<TrendingUp className="h-5 w-5 text-emerald-400" />}
            title="Current Value"
            value="$65,057"
            subtitle="+17.2% portfolio growth"
            valueClassName="text-emerald-400"
          />
          <StatCard
            icon={<PieChart className="h-5 w-5 text-violet-300" />}
            title="Average ROI"
            value="+17.2%"
            subtitle="Weighted portfolio return"
          />
          <StatCard
            icon={<Car className="h-5 w-5 text-cyan-300" />}
            title="Active Assets"
            value="3"
            subtitle="Luxury SUV holdings"
            valueClassName="text-violet-400"
          />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[24px] border border-white/6 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Your Holdings
                </h2>
                <p className="mt-1 text-sm text-white/40">
                  Active positions in premium automotive assets
                </p>
              </div>

              <button className="inline-flex h-10 items-center justify-center rounded-xl bg-white/5 px-4 text-sm font-medium text-white/80 transition hover:bg-white/10">
                View Details
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {holdings.map((item) => (
                <HoldingRow key={item.id} {...item} />
              ))}
            </div>
          </section>

          <div className="space-y-6">
            <section className="rounded-[24px] border border-white/6 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                Allocation
              </h2>
              <p className="mt-1 text-sm text-white/40">
                Portfolio distribution by asset
              </p>

              <div className="mt-6 space-y-5">
                {holdings.map((item) => (
                  <AllocationRow
                    key={item.id}
                    name={item.name}
                    percentage={item.allocation}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-white/6 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
              <h2 className="text-2xl font-semibold tracking-tight">
                Recent Activity
              </h2>
              <p className="mt-1 text-sm text-white/40">
                Latest portfolio updates
              </p>

              <div className="mt-6 space-y-4">
                {activities.map((item) => (
                  <ActivityRow
                    key={item.id}
                    title={item.title}
                    time={item.time}
                    amount={item.amount}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
