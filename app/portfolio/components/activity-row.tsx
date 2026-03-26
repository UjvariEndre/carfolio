import { ArrowUpRight, Clock3 } from "lucide-react";

export function ActivityRow({
  title,
  time,
  amount,
}: {
  title: string;
  time: string;
  amount: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-[18px] border border-white/6 bg-black/10 p-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-white/35" />
          <p className="truncate text-sm font-medium text-white/80">{title}</p>
        </div>
        <p className="mt-2 text-sm text-white/35">{time}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-emerald-400">
        {amount}
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </div>
  );
}
