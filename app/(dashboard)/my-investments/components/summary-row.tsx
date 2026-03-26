export function SummaryRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[16px] border border-white/6 bg-black/10 px-4 py-4">
      <span className="text-sm text-white/45">{label}</span>
      <span
        className={`text-sm font-semibold ${
          accent ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
