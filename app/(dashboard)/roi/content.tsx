import { TrendingUp } from "lucide-react";
import PageHeader from "@/app/shared/components/page-header";
import SurfaceCard from "@/app/shared/components/surface-card";
import GaugeChart from "./components/gauge-chart";
import StatCard from "./components/stat-card";

export default function RoiPageContent() {
  const roiValue = 0;

  return (
    <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-16 pt-10">
      <PageHeader
        title="Return on Investment"
        description="Your Journey Starts Here"
      />

      <div className="space-y-6">
        <SurfaceCard as="section" className="lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="flex min-h-[220px] flex-col justify-center">
              <p className="text-lg text-white/45">Monthly ROI</p>

              <div className="mt-4 flex items-center gap-4">
                <div className="text-6xl font-semibold tracking-tight">+0%</div>

                <div className="inline-flex items-center rounded-full bg-emerald-500/15 px-4 py-2 text-xl font-semibold text-emerald-400">
                  +USD 0
                </div>
              </div>

              <p className="mt-5 text-xl text-white/45">
                Steady growth this month
              </p>
            </div>

            <div className="flex items-center justify-center">
              <GaugeChart value={roiValue} />
            </div>
          </div>
        </SurfaceCard>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Current Month ROI"
            value="+0%"
            subtitle="N/A"
            valueClassName="text-emerald-400"
          />
          <StatCard
            title="Cumulative ROI"
            value="+0.0%"
            subtitle="Total returns"
          />
          <StatCard
            title="Average Monthly ROI"
            value="+0.0%"
            subtitle="Based on 0 months"
          />
          <StatCard
            title="Total Investments"
            value="0"
            subtitle="Active investments"
            valueClassName="text-violet-400"
          />
        </div>

        <SurfaceCard as="section">
          <h2 className="text-3xl font-semibold tracking-tight">
            Monthly ROI History
          </h2>

          <div className="mt-8 flex min-h-[420px] flex-col items-center justify-center rounded-[20px] border border-white/5 bg-black/10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
              <TrendingUp className="h-8 w-8 text-white/35" />
            </div>

            <p className="mt-6 text-3xl font-medium text-white/75">
              No ROI data available
            </p>
            <p className="mt-2 text-lg text-white/35">
              Start investing to track your returns
            </p>
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
}
