import {
  BadgeDollarSign,
  CircleDollarSign,
  Clock3,
  Wallet,
} from "lucide-react";
import { ActivityRow } from "@/app/shared/components/activity-row";
import PageHeader from "@/app/shared/components/page-header";
import { StatCard } from "@/app/shared/components/stat-card";
import SurfaceCard from "@/app/shared/components/surface-card";
import { investments } from "@/app/shared/data/investment-data";
import { InvestmentRow } from "./components/investment-row";
import { SummaryRow } from "./components/summary-row";

export default function MyInvestmentsPageContent() {
  return (
    <section className="relative z-10 mx-auto max-w-[1180px] px-6 pb-16 pt-10">
      <PageHeader
        title="My Investments"
        description="Track your positions, returns, and maturity timeline"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={<Wallet className="h-5 w-5 text-violet-400" />}
          title="Total Invested"
          value="$55,500"
          subtitle="Across 3 active positions"
        />
        <StatCard
          icon={<CircleDollarSign className="h-5 w-5 text-emerald-400" />}
          title="Current Value"
          value="$65,057"
          subtitle="+$9,557 unrealized value"
          valueClassName="text-emerald-400"
        />
        <StatCard
          icon={<BadgeDollarSign className="h-5 w-5 text-violet-300" />}
          title="Expected Return"
          value="$9,557"
          subtitle="Projected gain at maturity"
        />
        <StatCard
          icon={<Clock3 className="h-5 w-5 text-cyan-300" />}
          title="Active Positions"
          value="3"
          subtitle="All currently in progress"
          valueClassName="text-violet-400"
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SurfaceCard as="section">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Active Investments
              </h2>
              <p className="mt-1 text-sm text-white/40">
                Overview of your currently held automotive assets
              </p>
            </div>

            <button className="inline-flex h-10 items-center justify-center rounded-xl bg-white/5 px-4 text-sm font-medium text-white/80 transition hover:bg-white/10">
              Export
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {investments.map((investment) => (
              <InvestmentRow key={investment.id} {...investment} />
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard as="section">
            <h2 className="text-2xl font-semibold tracking-tight">
              Portfolio Summary
            </h2>
            <p className="mt-1 text-sm text-white/40">
              Quick view of your investment profile
            </p>

            <div className="mt-6 space-y-5">
              <SummaryRow label="Largest Position" value="INFINITI QX80" />
              <SummaryRow label="Best ROI" value="+18.3%" accent />
              <SummaryRow label="Nearest Maturity" value="Jan 21, 2026" />
              <SummaryRow label="Avg. Ownership" value="9.6%" />
            </div>
          </SurfaceCard>

          <SurfaceCard as="section">
            <h2 className="text-2xl font-semibold tracking-tight">
              Recent Updates
            </h2>
            <p className="mt-1 text-sm text-white/40">
              Latest changes across your active investments
            </p>

            <div className="mt-6 space-y-4">
              <ActivityRow
                title="BMW X7 valuation updated"
                time="2 days ago"
                amount="+$420"
              />
              <ActivityRow
                title="INFINITI QX80 funding increased"
                time="5 days ago"
                amount="+16%"
              />
              <ActivityRow
                title="Range Rover projected return revised"
                time="1 week ago"
                amount="+$310"
              />
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}
