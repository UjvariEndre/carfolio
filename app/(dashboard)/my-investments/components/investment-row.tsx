import { MiniMetric } from "@/app/shared/components/mini-metric";
import { ArrowUpRight } from "lucide-react";

export function InvestmentRow({
  name,
  category,
  investedAmount,
  ownership,
  currentValue,
  expectedReturn,
  roi,
  status,
  funded,
  maturityDate,
}: {
  name: string;
  category: string;
  investedAmount: string;
  ownership: string;
  currentValue: string;
  expectedReturn: string;
  roi: string;
  status: string;
  funded: number;
  maturityDate: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-black/10 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                {status}
              </span>
            </div>
            <p className="mt-1 text-sm text-white/40">{category}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5 xl:min-w-[760px]">
            <MiniMetric label="Invested" value={investedAmount} />
            <MiniMetric label="Ownership" value={ownership} />
            <MiniMetric label="Current Value" value={currentValue} />
            <MiniMetric
              label="Expected Return"
              value={expectedReturn}
              valueClassName="text-violet-300"
            />
            <MiniMetric
              label="ROI"
              value={roi}
              valueClassName="text-emerald-400"
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-white/45">Funding Progress</span>
            <span className="font-medium text-white/75">{funded}% funded</span>
          </div>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
              style={{ width: `${funded}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/35">
            Maturity Date: <span className="text-white/75">{maturityDate}</span>
          </p>

          <button className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200">
            View investment
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
