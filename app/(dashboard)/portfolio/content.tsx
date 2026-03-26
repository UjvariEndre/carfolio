import { Car, PieChart, TrendingUp, Wallet } from "lucide-react";
import { ActivityRow } from "@/app/shared/components/activity-row";
import PageHeader from "@/app/shared/components/page-header";
import { StatCard } from "@/app/shared/components/stat-card";
import SurfaceCard from "@/app/shared/components/surface-card";
import { activities, holdings } from "@/app/shared/data/portfolio-data";
import { AllocationRow } from "./components/allocation-row";
import { HoldingRow } from "./components/holding-row";

export default function PortfolioPageContent() {
  return (
    <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-16 pt-10">
      <PageHeader
        title="Portfolio"
        description="Track your assets, returns, and portfolio allocation"
      />

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
        <SurfaceCard as="section">
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
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard as="section">
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
          </SurfaceCard>

          <SurfaceCard as="section">
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
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}
