import { MiniMetric } from "../../shared/components/mini-metric";

export function HoldingRow({
  name,
  category,
  invested,
  currentValue,
  roi,
  status,
}: {
  name: string;
  category: string;
  invested: string;
  currentValue: string;
  roi: string;
  status: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/6 bg-black/10 p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
              {status}
            </span>
          </div>
          <p className="mt-1 text-sm text-white/40">{category}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[520px]">
          <MiniMetric label="Invested" value={invested} />
          <MiniMetric label="Current Value" value={currentValue} />
          <MiniMetric
            label="ROI"
            value={roi}
            valueClassName="text-emerald-400"
          />
        </div>
      </div>
    </div>
  );
}
